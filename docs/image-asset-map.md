# Image Asset Map

Reference for supplying real photography to the Big Rock Builders website.

All files go in `public/images/` using the **exact filenames below** — the paths are
hardcoded in the components, so no code changes are needed once the files exist.
Filenames end in `.jpg`; supplying `.webp` or `.png` instead requires editing the
`src` in the listed component.

**Nothing breaks while images are missing.** Heroes fall back to the `surface-blue`
gradient; content images sit over a CSS ruled architectural plate. Do not add
placeholder files — an absent image looks intentional, a grey placeholder does not.

---

## Hero images (7)

Full-bleed backgrounds behind the page heading. Always `object-cover`, so the crop
changes with viewport: keep the subject **centre-weighted** and leave the left third
uncluttered — headline text sits there on desktop and a navy gradient darkens it.

| File | Page | Intended subject | Ratio | Min size |
|---|---|---|---|---|
| `hero.jpg` | Home — `HeroSection` | Signature wide architectural or site shot; the strongest image available | 16:9 | 2400×1350 |
| `about-hero.jpg` | `/about` — `PageHero` | Team or site context, wide establishing shot | 16:9 | 2400×1350 |
| `services-hero.jpg` | `/services` — `PageHero` | Active construction / works in progress | 16:9 | 2400×1350 |
| `projects-hero.jpg` | `/projects` — `PageHero` | Completed building exterior, architectural framing | 16:9 | 2400×1350 |
| `expertise-hero.jpg` | `/expertise` — `PageHero` | Technical/engineering detail — services, plant or structural work | 16:9 | 2400×1350 |
| `sustainability-hero.jpg` | `/sustainability` — `PageHero` | Building in its wider setting; open, daylight framing | 16:9 | 2400×1350 |
| `quality-hero.jpg` | `/certifications` — `PageHero` | Inspection, supervision or site quality activity | 16:9 | 2400×1350 |
| `contact-hero.jpg` | `/contact` — `PageHero` | Calm, architectural; least busy of the set | 16:9 | 2400×1350 |

Hero containers are height-driven (`100svh` on home, `60svh` on inner pages), not
ratio-driven, so wider source images are safe. Home and inner heroes both load with
`priority`.

---

## Content images (7)

Fixed-ratio frames inside the page. Most go **portrait on desktop** and landscape on
mobile, so supply portrait originals with headroom at top and bottom.

| File | Page / section | Intended subject | Ratio | Min size |
|---|---|---|---|---|
| `about.jpg` | Home — `AboutSection` | Site or building that represents the company's work | 4:3 → 3:2 → **4:5** (lg) | 1200×1500 |
| `sustainability.jpg` | Home — `SustainabilitySection` | Completed building in its surroundings; daylight, greenery if available | **3:2** (fixed) | 1600×1067 |
| `service-civil.jpg` | `/services` — Civil & Structural | Structural frame, concrete or foundation work | 4:3 → **4:5** (lg) | 1200×1500 |
| `service-project-management.jpg` | `/services` — Project Management | Site coordination, drawings, supervision | 4:3 → **4:5** (lg) | 1200×1500 |
| `service-renovation.jpg` | `/services` — Renovations & Extensions | Refurbishment or extension work in progress | 4:3 → **4:5** (lg) | 1200×1500 |
| `service-sustainable.jpg` | `/services` — Sustainable Building | Efficient/considered building detail or completed space | 4:3 → **4:5** (lg) | 1200×1500 |
| `sustainability-overview.jpg` | `/sustainability` — `SustainabilityOverviewSection` | Durable completed work, long-term context | 4:3 → **4:5** (lg) | 1200×1500 |
| `quality-approach.jpg` | `/certifications` — `QualityApproachSection` | Quality control, checking or supervision on site | 4:3 → **4:5** (lg) | 1200×1500 |

A dark gradient covers the bottom third of each frame, so avoid critical detail there.

---

## Project images (6)

One per verified project. Use the actual project where photography exists; leave the
slot empty rather than substituting a different building.

| File | Project | Used on | Ratio | Min size |
|---|---|---|---|---|
| `project-punjab-house.jpg` | Punjab House | Home (featured) **and** `/projects` (featured) | 21:9 on `/projects` desktop; ~4:3 on home | 2400×1030 |
| `project-rics.jpg` | Rawalpindi Institute of Cardiology | Home **and** `/projects` | 5:4 / ~3:2 | 1400×1120 |
| `project-soil.jpg` | Soil Nailing & Excavation | Home **and** `/projects` | 5:4 / ~3:2 | 1400×1120 |
| `project-water-wells.jpg` | FGEHF Water Supply Wells | `/projects` | 4:3 → 5:4 | 1400×1120 |
| `project-bbh.jpg` | Benazir Bhutto Hospital | `/projects` | 4:3 → 5:4 | 1400×1120 |
| `project-maryam-nawaz-clinic.jpg` | Maryam Nawaz Health Clinic | `/projects` (full-width closer) | 4:3 → **2:1** | 1800×900 |

**Important:** `punjab-house`, `rics` and `soil` each render at two different ratios
(homepage vs `/projects`). Supply generously framed originals with the subject centred
so both crops work. Project name and category are overlaid at the bottom-left of every
tile over a navy gradient — keep that corner free of important detail.

---

## Supplied so far

- `logo.png` — official brand mark, 960x960 transparent PNG (supplied as `.jpeg`, renamed; byte-identical). Used bare on the white header, on a light plate in the footer.
- `hero.jpg` — 1672x941, home hero
- `project-punjab-house.jpg` — 1672x941

## Supply checklist

- [x] `hero.jpg` · [ ] `about.jpg` · [ ] `sustainability.jpg`
- [ ] `about-hero.jpg` · [ ] `services-hero.jpg` · [ ] `projects-hero.jpg` · [ ] `expertise-hero.jpg` · [ ] `sustainability-hero.jpg` · [ ] `quality-hero.jpg` · [ ] `contact-hero.jpg`
- [ ] `service-civil.jpg` · [ ] `service-project-management.jpg` · [ ] `service-renovation.jpg` · [ ] `service-sustainable.jpg`
- [ ] `sustainability-overview.jpg` · [ ] `quality-approach.jpg`
- [x] `project-punjab-house.jpg` · [ ] `project-rics.jpg` · [ ] `project-soil.jpg` · [ ] `project-water-wells.jpg` · [ ] `project-bbh.jpg` · [ ] `project-maryam-nawaz-clinic.jpg`

## Preparation notes

- **Format:** JPEG, quality ~80. Next.js re-encodes to WebP/AVIF and generates
  responsive sizes at request time; every image already declares `sizes`, so oversized
  source files cost nothing at runtime — but keep each under ~1.5 MB.
- **Colour:** the site is dark navy with gold accents. Images with cool/neutral tones
  and real daylight sit best; heavy warm filters clash with the gold.
- **Alt text:** every image is currently decorative (`alt=""`) because the surrounding
  headings carry the meaning. If a supplied photo needs describing, add alt text in the
  component that renders it.
- **Verify after dropping files in:**
  ```
  npm run build && npx next start -p 3000
  ```

## Still outstanding (not covered here)

- Favicon / app icon (the supplied `logo.jpeg` could be the source for it) — `app/favicon.ico` is still the Create Next App default and needs
  a real Big Rock Builders mark.
- Logo — supplied and in use. A horizontal (landscape) lockup would suit the header
  better than the square version if the client has one.
