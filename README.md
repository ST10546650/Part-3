# BackroomFind

## Student Information

**Student Name:** Lerato Mulambo
**Student Number:** ST10546650
**Module:** WEDE5020 – Web Development
**Assessment:** Portfolio of Evidence (POE) Part 3

## Submission Links

- **GitHub repository:** [https://github.com/ST10546650/Part-3](https://github.com/ST10546650/Part-3)
- **Live website:** [https://st10546650.github.io/Part-3/](https://st10546650.github.io/Part-3/)

---

# Project Overview

BackroomFind is a responsive accommodation website that helps users find affordable backroom rentals across South Africa. Users can browse and search listings, view locations on an interactive map, estimate rental costs through an enquiry form, and contact the organisation.

Part 3 adds JavaScript interactivity, dynamic content, form validation, SEO and deployment.

# Website Goals

- Help users locate affordable rental accommodation.
- Connect tenants with landlords.
- Let prospective tenants request a rental estimate and send an enquiry.
- Improve accessibility through responsive design.
- Improve user experience with interactive features.

# Technologies Used

- HTML5, CSS3, JavaScript (ES6)
- Leaflet.js with OpenStreetMap tiles (Leaflet, n.d.; OpenStreetMap, n.d.)
- GitHub for version control, and a free host for deployment

# How to Run Locally

1. Clone the repository: `git clone https://github.com/ST10546650/Part-3`
2. Open the folder in VS Code and start it with the **Live Server** extension.
3. Do not open `index.html` by double-clicking it. The listings are loaded from `listings.json` with `fetch()`, which browsers block on `file://` pages.

No build tools or API keys are required. Leaflet loads from a CDN.

# Project Structure

```text
BackroomFind/
├── index.html
├── about.html
├── services.html
├── enquiry.html
├── contact.html
├── style.css
├── script.js
├── map.js
├── listings.json
├── images/
├── screenshots/
├── robots.txt
├── sitemap.xml
└── README.md
```

# Website Pages

| Page | Contents |
| --- | --- |
| index.html | Hero, Leaflet map, room listings rendered from `listings.json`, search, location filter, price sort, image lightbox |
| about.html | Company history, mission and vision, target audience, website goals |
| services.html | Services table, room details modal, FAQ accordion |
| enquiry.html | Enquiry form with validation and a rental estimate |
| contact.html | Contact form (prepares an email), contact details, location links, map |

# Features Implemented

## Part 1
- Multi-page website, navigation menu, semantic HTML, internal linking.

## Part 2
- External stylesheet, responsive design with media queries.
- Flexbox and CSS Grid layouts (MDN Web Docs, n.d.a).
- Typography styling, and hover, focus and active states.

## Part 3

**Interactive elements**
- FAQ accordion with `aria-expanded` state (services page).
- Room details modal that closes with the button, Escape or a backdrop click (services page).
- Image lightbox gallery, usable with mouse or keyboard (home page).

**Map**
- Leaflet map with location markers and zoom controls (home and contact pages).

**Dynamic content**
- Room cards are created with JavaScript from `listings.json`.
- Search by name or location, filter by location, and sort by price. The results count updates as the user types.

**Forms** (validation patterns follow MDN Web Docs, n.d.b)
- Enquiry form: validates name, phone, email, location, room type and a move-in date that is not in the past. It then shows an estimated monthly rental with a breakdown and a WhatsApp link to send the enquiry. The figure is an estimate. Availability is confirmed by the BackroomFind team.
- Contact form: validates name, email, phone and message, then prepares an email with `mailto:`. This opens the user's email app and does not send the message automatically.

**SEO** (Google, n.d.)
- Unique title and meta description on each page, one `h1` per page, descriptive image filenames and alt text, `robots.txt` and `sitemap.xml`.

**Accessibility and security** (W3C, 2023)
- Visible keyboard focus styles, labelled form fields, error messages linked to fields.
- User input is inserted with `textContent`, never `innerHTML`, and encoded with `encodeURIComponent` in email and WhatsApp links.

# Responsive Design

Desktop, laptop, tablet and mobile layouts with breakpoints at 1024px, 768px and 480px.

# Testing

Tested functionality across multiple browsers.
Tested responsive layouts across devices.
Verified all interactive features.


# Screenshots

![Updated About Page](screenshots/about-page-updated.png)

---

# Changelog

## Part 2 Corrections

Feedback from Part 2 
What was changed 
Incorrect CSS path 
-Fixed the stylesheet link on every page and removed stray HTML that had been pasted at the end of the CSS file.
Lowercase filenames 
-Renamed `Style.css` to `style.css`, `Images/` to `images/` and `Screenshots/` to `screenshots/`, and updated every reference. 

| Use CSS Grid 
-Room listings use `display: grid` with `repeat(auto-fit, minmax(300px, 1fr))`. 

| Missing `:active` states 
| Added `:active` to navigation links, buttons, room cards and the accordion. 
|
| README 
| Rewrote with setup steps, feature list, testing table, changelog and project structure.

| References
Reformatted in Harvard style, and removed sources that were not used. 

## Part 3 Additions

- Accordion, modal and lightbox with keyboard support.
- Leaflet map with markers.
- Listings rendered from `listings.json` with search, filter and sort.
- Enquiry form with validation, estimate and WhatsApp link.
- Contact form with validation and `mailto:` email preparation.
- SEO metadata, `robots.txt` and `sitemap.xml`.
- Accessibility improvements: focus styles, ARIA states, error messages linked to fields, button colour contrast.
- Deployed to a free host and tested on desktop and mobile.

---

# References

Adobe (2024) *Adobe Color*. Available at: https://color.adobe.com (Accessed: 02 November 2026).

Google (n.d.) *Google Search Central*. Available at: https://developers.google.com/search (Accessed: 02 November 2026).

Google Fonts (2024) *Poppins*. Available at: https://fonts.google.com/specimen/Poppins (Accessed: 02 November 2026).

Leaflet (n.d.) *Leaflet: JavaScript Library for Interactive Maps*. Available at: https://leafletjs.com (Accessed: 02 November 2026).

MDN Web Docs (n.d.a) *CSS Grid Layout*. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Grid_layout (Accessed: 02 November 2026).

MDN Web Docs (n.d.b) *Client-side Form Validation*. Available at: https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation (Accessed: 02 November 2026).

Netlify (2024) *Netlify Docs*. Available at: https://docs.netlify.com (Accessed: 02 November 2026).

OpenStreetMap (n.d.) *OpenStreetMap*. Available at: https://www.openstreetmap.org (Accessed: 02 November 2026).

W3C (2023) *Web Content Accessibility Guidelines (WCAG) 2.2*. Available at: https://www.w3.org/TR/WCAG22/ (Accessed: 02 November 2026).
