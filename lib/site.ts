/**
 * Single source of truth for brand and navigation data shared across the site.
 * Only information confirmed in the company profile belongs here.
 */

export const site = {
  name: "Big Rock Builders",
  legalName: "Big Rock Builders (Pvt Ltd)",
  tagline: "Building Strength. Creating Landmarks.",
  foundedYear: 2016,
  country: "Pakistan",
} as const;

export type NavItem = {
  label: string;
  href: string;
};

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Expertise", href: "/expertise" },
  { label: "Quality & Standards", href: "/certifications" },
  { label: "Sustainability", href: "/sustainability" },
  { label: "Contact", href: "/contact" },
];

export const serviceNav: NavItem[] = [
  { label: "Civil Structural", href: "/services#civil-structural" },
  { label: "Project Management", href: "/services#project-management" },
  { label: "Renovations & Extensions", href: "/services#renovations-extensions" },
  { label: "Sustainable Building", href: "/services#sustainable-building" },
];

export const expertiseNav: NavItem[] = [
  { label: "Civil", href: "/expertise#civil" },
  { label: "Mechanical", href: "/expertise#mechanical" },
  { label: "Integrated Services", href: "/expertise#integrated-services" },
  { label: "Electrical", href: "/expertise#electrical" },
];
