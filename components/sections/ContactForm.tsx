"use client";

import { useId, useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { ChevronDown, CircleCheck, Info, LoaderCircle } from "lucide-react";

import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";

/**
 * The site is exported as static files, so delivery is handled by a small PHP
 * script sitting beside them rather than a route handler.
 */
const ENQUIRY_ENDPOINT = "/send-enquiry.php";

type Fields = {
  name: string;
  email: string;
  phone: string;
  company: string;
  projectType: string;
  message: string;
  /** Honeypot — hidden from people, so anything here came from a bot. */
  website: string;
};

type Errors = Partial<Record<keyof Fields, string>>;

type Status = "idle" | "submitting" | "sent" | "prepared" | "error";

const emptyFields: Fields = {
  name: "",
  email: "",
  phone: "",
  company: "",
  projectType: "",
  message: "",
  website: "",
};

const projectTypes = [
  "Civil & Structural",
  "Project Management",
  "Renovations & Extensions",
  "Sustainable Building",
  "Other",
];

function validate(fields: Fields): Errors {
  const errors: Errors = {};

  if (!fields.name.trim()) {
    errors.name = "Please enter your full name.";
  }

  if (!fields.email.trim()) {
    errors.email = "Please enter your email address.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }

  if (!fields.message.trim()) {
    errors.message = "Please tell us about your project.";
  }

  return errors;
}

const fieldClasses =
  "border-line focus:border-gold-500 text-cream placeholder:text-mist-400 w-full border-b bg-transparent px-0 py-3 text-[0.9375rem] transition-colors outline-none";

function FieldLabel({
  htmlFor,
  label,
  required,
}: {
  htmlFor: string;
  label: string;
  required?: boolean;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="font-display text-mist-400 mb-2 text-[0.6875rem] font-semibold tracking-[0.18em] uppercase"
    >
      {label}
      {required ? (
        <span className="text-gold-500" aria-hidden="true">
          {" "}
          *
        </span>
      ) : null}
    </label>
  );
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;

  return (
    <p id={id} role="alert" className="mt-2 text-xs text-red-300">
      {message}
    </p>
  );
}

type FieldProps = {
  label: string;
  name: keyof Fields;
  value: string;
  error?: string;
  required?: boolean;
  type?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  fieldId: (name: keyof Fields) => string;
  errorId: (name: keyof Fields) => string;
};

function Field({
  label,
  name,
  value,
  error,
  required,
  type = "text",
  onChange,
  fieldId,
  errorId,
}: FieldProps) {
  return (
    <div className="flex flex-col">
      <FieldLabel htmlFor={fieldId(name)} label={label} required={required} />
      <input
        id={fieldId(name)}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId(name) : undefined}
        className={cn(fieldClasses, error && "border-red-400/70")}
      />
      <FieldError id={errorId(name)} message={error} />
    </div>
  );
}

type ContactFormProps = {
  /** Renders the form on a card. Off inside the enquiry dialog, which is
      already a panel. */
  framed?: boolean;
};

/**
 * Enquiry form. Posts to send-enquiry.php, which mails the enquiry to the
 * office address. If that script cannot be reached the form says plainly that
 * nothing was sent rather than claiming delivery.
 */
export default function ContactForm({ framed = true }: ContactFormProps) {
  const formId = useId();
  const [fields, setFields] = useState<Fields>(emptyFields);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");

  const fieldId = (name: keyof Fields) => `${formId}-${name}`;
  const errorId = (name: keyof Fields) => `${formId}-${name}-error`;

  const handleChange = (
    event: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = event.target;

    setFields((current) => ({ ...current, [name]: value }));
    setErrors((current) => {
      if (!current[name as keyof Fields]) return current;
      const next = { ...current };
      delete next[name as keyof Fields];
      return next;
    });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors = validate(fields);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      const firstInvalid = Object.keys(nextErrors)[0] as keyof Fields;
      document.getElementById(fieldId(firstInvalid))?.focus();
      return;
    }

    setStatus("submitting");

    try {
      const response = await fetch(ENQUIRY_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields),
      });

      // No handler at that address — it is missing from the server, or this is
      // a local run with no PHP. Either way nothing was sent, and the form
      // says so rather than claiming delivery.
      if (response.status === 404) {
        setStatus("prepared");
        return;
      }

      const result = (await response.json()) as {
        delivered?: boolean;
        reason?: string;
      };

      if (result.delivered) {
        setStatus("sent");
        return;
      }

      setStatus("error");
    } catch {
      setStatus("error");
    }
  };

  const reset = () => {
    setFields(emptyFields);
    setErrors({});
    setStatus("idle");
  };

  if (status === "sent" || status === "prepared") {
    return (
      <div
        className={cn(
          framed && "card border-line bg-ink-900 p-8 sm:p-10",
          !framed && "p-0",
        )}
      >
        <div role="status">
          <CircleCheck className="text-gold-500 h-7 w-7" aria-hidden="true" />
          <h3 className="heading-3 mt-6">
            {status === "sent"
              ? "Thank you. Your enquiry has been sent."
              : "Thank you. Your enquiry has been prepared successfully."}
          </h3>
          <p className="body-text mt-5 max-w-lg">
            {status === "sent"
              ? "Our team will follow up with the appropriate next steps."
              : "Your details have been validated and are ready to send."}
          </p>
        </div>

        {status === "prepared" ? (
          <div className="border-line text-mist-400 mt-8 flex gap-3 border-t pt-6 text-sm">
            <Info
              className="text-azure-400 mt-0.5 h-4 w-4 shrink-0"
              aria-hidden="true"
            />
            <p>
              The delivery script was not reachable, so this enquiry has not
              been sent to anyone. On the live site, check that send-enquiry.php
              sits beside the uploaded pages.
            </p>
          </div>
        ) : null}

        <Button onClick={reset} variant="outline" size="sm" className="mt-8">
          Send Another Enquiry
        </Button>
      </div>
    );
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      className={cn(
        "relative flex flex-col gap-8",
        framed && "card border-line bg-ink-900 p-7 sm:p-10",
      )}
    >
      {status === "error" ? (
        <p
          role="alert"
          className="border-line text-mist-200 rounded-md border bg-red-500/10 px-4 py-3 text-sm"
        >
          Something went wrong sending your enquiry. Please try again.
        </p>
      ) : null}

      {/* Honeypot. Positioned off-screen rather than display:none, which some
          bots detect, and kept out of the tab order and the accessibility
          tree so nobody using the form ever meets it. */}
      <div
        aria-hidden="true"
        className="absolute left-[-9999px] h-0 w-0 overflow-hidden"
      >
        <label htmlFor={fieldId("website")}>Website</label>
        <input
          id={fieldId("website")}
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={fields.website}
          onChange={handleChange}
        />
      </div>

      <div className="grid gap-8 sm:grid-cols-2">
        <Field
          label="Full Name"
          name="name"
          required
          value={fields.name}
          error={errors.name}
          onChange={handleChange}
          fieldId={fieldId}
          errorId={errorId}
        />
        <Field
          label="Email Address"
          name="email"
          type="email"
          required
          value={fields.email}
          error={errors.email}
          onChange={handleChange}
          fieldId={fieldId}
          errorId={errorId}
        />
        <Field
          label="Phone Number"
          name="phone"
          type="tel"
          value={fields.phone}
          error={errors.phone}
          onChange={handleChange}
          fieldId={fieldId}
          errorId={errorId}
        />
        <Field
          label="Company / Organisation"
          name="company"
          value={fields.company}
          error={errors.company}
          onChange={handleChange}
          fieldId={fieldId}
          errorId={errorId}
        />
      </div>

      <div className="flex flex-col">
        <FieldLabel htmlFor={fieldId("projectType")} label="Project Type" />
        <div className="relative">
          <select
            id={fieldId("projectType")}
            name="projectType"
            value={fields.projectType}
            onChange={handleChange}
            className={cn(fieldClasses, "appearance-none pr-8")}
          >
            <option value="" className="bg-ink-900">
              Select a project type
            </option>
            {projectTypes.map((type) => (
              <option key={type} value={type} className="bg-ink-900">
                {type}
              </option>
            ))}
          </select>
          <ChevronDown
            className="text-mist-400 pointer-events-none absolute top-3.5 right-0 h-4 w-4"
            aria-hidden="true"
          />
        </div>
      </div>

      <div className="flex flex-col">
        <FieldLabel htmlFor={fieldId("message")} label="Message" required />
        <textarea
          id={fieldId("message")}
          name="message"
          rows={5}
          value={fields.message}
          onChange={handleChange}
          required
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={errors.message ? errorId("message") : undefined}
          placeholder="Tell us about your project, scope and requirements."
          className={cn(
            fieldClasses,
            "resize-y",
            errors.message && "border-red-400/70",
          )}
        />
        <FieldError id={errorId("message")} message={errors.message} />
      </div>

      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-8">
        <Button type="submit" size="lg" disabled={status === "submitting"}>
          {status === "submitting" ? (
            <>
              <LoaderCircle
                className="h-4 w-4 animate-spin"
                aria-hidden="true"
              />
              Sending
            </>
          ) : (
            "Send Enquiry"
          )}
        </Button>
        <p className="body-muted max-w-xs">
          Fields marked with <span className="text-gold-500">*</span> are
          required.
        </p>
      </div>
    </form>
  );
}
