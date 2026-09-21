# Deploying to StackCP

The site is built as plain static files. There is no Node.js process on the
server, nothing to restart, and no application to keep alive. A deploy is
"build, then upload".

---

## 1. Build

```bash
npm install
npm run build
```

This writes the whole site to `out/`. That folder is the deploy — nothing
outside it is uploaded.

The live domain is already set in `lib/site.ts`, so no environment variables
are needed for a production build.

---

## 2. Upload

In StackCP, open **File Manager** (or connect over FTP) and go to
`public_html`.

Upload **the contents of `out/`**, not the folder itself. When it is done,
`public_html` should contain:

```
public_html/
├── index.html
├── 404.html
├── .htaccess
├── send-enquiry.php
├── sitemap.xml
├── robots.txt
├── manifest.webmanifest
├── icon.png
├── apple-icon.png
├── _next/
├── images/
├── og/
├── about/
├── certifications/
├── contact/
├── expertise/
├── projects/
├── services/
└── sustainability/
```

Two files are easy to miss:

- **`.htaccess`** is hidden. In File Manager, turn on "show hidden files"
  before uploading, or it will be skipped and HTTPS redirects, caching and the
  404 page will not work.
- **`send-enquiry.php`** must sit in the same folder as `index.html`. The form
  posts to `/send-enquiry.php`, so if it is missing the form will say the
  enquiry was not sent.

### Replacing an existing deploy

Delete the old `_next` folder before uploading the new one. Its filenames
contain a content hash, so old builds leave files behind that are never used
again.

---

## 3. Check it works

1. Open `https://bigrockbuilders.com.pk` — the home page loads over HTTPS.
2. Visit a few inner pages directly, e.g. `/about/` and `/projects/`.
3. Try a URL that does not exist, e.g. `/nope/` — the site's own 404 page
   should appear, not the host's.
4. Send a test enquiry from `/contact/` and confirm it arrives at
   `info@bigrockbuilders.com.pk`.

---

## 4. Email delivery

`send-enquiry.php` sends with PHP's `mail()`. Two constants at the top of the
file control it:

```php
const ENQUIRY_TO   = 'info@bigrockbuilders.com.pk';
const ENQUIRY_FROM = 'info@bigrockbuilders.com.pk';
```

To change where enquiries go, edit that file and re-upload it on its own. No
rebuild is needed.

### If enquiries land in spam, or do not arrive

`mail()` sends directly from the web server, which receiving mail servers
treat with suspicion unless the domain vouches for it. Add an **SPF record**
in StackCP under **DNS**:

```
Type:  TXT
Name:  @
Value: v=spf1 include:_spf.stackmail.com ~all
```

Check StackCP's own documentation for the exact `include:` value for your
mail platform — using the wrong one is worse than having no record.

If mail still does not arrive, `mail()` may be disabled on the plan. The fix
is to send over SMTP with the `info@` mailbox's own credentials instead; that
is a change to `send-enquiry.php` only.

---

## 5. After the first deploy

- **Google Search Console** — add the property and submit
  `https://bigrockbuilders.com.pk/sitemap.xml`.
- **Check `www`** — decide whether `www.bigrockbuilders.com.pk` should
  redirect to the bare domain. Both resolving independently splits search
  ranking between them. The canonical tags point at the bare domain, so
  redirecting `www` to it is the consistent choice.

---

## Notes

- **Images are served as-is.** Static hosting cannot resize on the fly, so the
  files in `public/images` are the files visitors receive. They are already
  sized for their slots. Anything added later should be resized before it is
  committed.
- **`out/` is not in git.** It is a build artefact; rebuild it rather than
  committing it.
