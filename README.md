# BackroomFind Property Rentals

## Student Details

- Name: Lerato Mulambo
- Student Number: ST10546650
- Module: WEBDE5020
- Assessment: Portfolio of Evidence (POE) Part 2

---

## Project Overview

BackroomFind is a property rental website designed to help tenants find affordable long-term backroom accommodation in South Africa. The website connects tenants directly with landlords and lets visitors browse available rooms, read about the service, make an enquiry and get in touch.

---

## Website Pages

- [Home](index.html)
- [About](about.html)
- [Services](services.html)
- [Enquiry](enquiry.html)
- [Contact](contact.html)
- [CSS Stylesheet](Style.css)

All pages use the shared stylesheet:

```html
<link rel="stylesheet" href="Style.css">
```

---

## Project Structure

```
Assessment-Part-2/
├── index.html
├── about.html
├── services.html
├── enquiry.html
├── contact.html
├── README.md
├── Style.css
├── script.js
├── map.js
├── listings.json
├── Images/
└── (page screenshots)
```

All HTML filenames are lowercase so the navigation links work on GitHub Pages, which is case-sensitive.

---

## Technologies Used

- HTML5
- CSS3 (Flexbox and CSS Grid)
- Visual Studio Code
- GitHub

---

## CSS Styling for Desktop Solution

### 2.1 External Stylesheet

An external stylesheet named `Style.css` is stored in the project root and linked to every HTML page to keep the appearance consistent across the website.

- Single stylesheet used on all pages
- Easy to maintain
- Consistent design

### 2.2 Base Style

Default styles applied to the whole site:

- Margin and padding reset
- Box-sizing reset
- Font family
- Font size and line height
- Text and background colours

### 2.3 Typography Styles

- Body font: Aptos, with Arial and sans-serif fallbacks
- Headings (`h1`, `h2`, `h3`): Poppins, with Arial and sans-serif fallbacks
- Heading hierarchy set with `rem` font sizes (for example `h1` at 2.5rem and `h2` at 1.8rem)
- Font weights and line height set for readability

### 2.4 Layout Structure

Flexbox and CSS Grid are used to create the page layouts.

- **Flexbox:** the navigation bar and page sections
- **CSS Grid:** the room listings on the Home page

```css
.room-container{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    margin-top: 20px;
}
```

### 2.5 Visual Styles

- Colour scheme (green `#25D366`, navy `#1E3A5F`, light grey backgrounds)
- Borders and border radius
- Box shadows
- Hover transitions

### 2.6 Pseudo-classes

`:hover`, `:focus` and `:active` are used to improve usability.

```css
.btn:hover,
button:hover{
    background-color: #1E3A5F;
}

.btn:active,
button:active{
    transform: scale(0.98);
}

.room-card:active{
    transform: translateY(2px);
}

input:focus,
textarea:focus,
select:focus{
    outline: 2px solid #25D366;
}
```

---

## Responsive Design

### 3.1 Breakpoints

Three media queries are used:

| Breakpoint | Device | Changes |
|---|---|---|
| 1024px | Small desktop / large tablet | Reduced spacing, room cards in 2 columns |
| 768px | Tablet | Navigation wraps, room cards in 1 column, adjusted typography |
| 480px | Mobile | Full-width stacked navigation links, smaller typography |

```css
@media screen and (max-width: 768px){
    .room-container{
        grid-template-columns: 1fr;
    }
}
```

### 3.2 Relative Units

`rem` and `%` units are used for font sizes, widths and spacing so the layout scales with the screen.

### 3.3 Responsive Images

```css
img{
    max-width: 100%;
    height: auto;
}
```

On mobile, room images also use `object-fit: cover` with a maximum height so they stay neat.

### 3.4 Testing and Iteration

The website was tested in browser developer tools at desktop, tablet and mobile sizes. Adjustments were made to layout, navigation, typography, images and spacing.

---

## Screenshots

### Home Page

![Home Page Screenshot](Index%20Screenshot.png)

### About Page

![About Page Screenshot](About%20Screenshot.png)

### Services Page

![Services Page Screenshot](Services%20Screenshot.png)

### Enquiry Page

![Enquiry Page Screenshot](Enquiry%20Screenshot.png)

### Contact Page

![Contact Page Screenshot](Contact%20Screenhot.png)

### Mobile View

![Mobile Screenshot](Mobile%20Screenshot.jpg)

---

## Changelog

### Corrections Implemented (from Part 1 feedback)

- Added the external stylesheet that was missing
- Corrected broken HTML code on the Home page
- Fixed navigation links across all pages and renamed the HTML files to lowercase so they match the links
- Added a proper file and folder structure (`Images` and project-root assets)
- Improved the README with complete project information
- Added GitHub repository evidence and commits
- Performed website testing and debugging
- Added image references and source attribution

### Part 2 Updates

- Created the shared external stylesheet in the project root and linked it from every page
- Applied base styling and typography styling
- Implemented Flexbox layouts and a CSS Grid layout for room listings
- Added the colour scheme and visual styling
- Added `:hover`, `:focus` and `:active` effects
- Added responsive media queries at 1024px, 768px and 480px
- Optimised responsive images
- Updated the website layout based on feedback
- Added labels to the search box on the Home page and tidied the About page markup
- Corrected README errors and broken links

### Part 3 Corrections and Enhancements

#### Feedback Corrections

- Updated all pages to link to the shared root-level `Style.css`
- Used a responsive CSS Grid layout for the room cards
- Added `:active` states for navigation links, buttons and room cards
- Corrected image paths and updated the README project structure

#### Interactive Features

- Added an FAQ accordion to the Services page
- Added a room-details modal to the Services page
- Added an image lightbox to the Home page
- Added location-based filtering for Home page room cards
- Added `listings.json` and an asynchronous fetch; the fetched data is currently logged to the browser console and does not replace the room cards

#### Mapping Feature

- Added a Leaflet map to the Contact page
- Added Jabulani and Meadowlands location markers with popups
- Fit the map view to show both markers; Leaflet's built-in map navigation controls are available

#### SEO Improvements

- Added page-specific title tags, meta descriptions and meta keywords


---

## Challenges and Solutions

**Challenge 1:** Responsive layout issues on smaller screens.
**Solution:** Used media queries and a Grid layout that changes the number of columns.

**Challenge 2:** Navigation alignment problems.
**Solution:** Used Flexbox to align and wrap the navigation links.

**Challenge 3:** Image resizing issues.
**Solution:** Used `max-width: 100%` and `height: auto`, plus `object-fit` on mobile.

**Challenge 4:** Stylesheet not loading because of a wrong file path.
**Solution:** Updated every HTML page to link to `Style.css` in the project root.

---

## Future Improvements

- Add user login functionality
- Add search filters
- Integrate maps
- Add online booking features
- Improve accessibility


---

## GitHub Repository

https://github.com/ST10546650/Assessment-Part-2

---

## References

Adobe (2024) *Adobe Color*. Available at: https://color.adobe.com (Accessed: [add date]).

Google Fonts (2024) *Poppins*. Available at: https://fonts.google.com/specimen/Poppins (Accessed: [add date]).

MDN Web Docs (2024) *HTML: HyperText Markup Language*. Available at: https://developer.mozilla.org/en-US/docs/Web/HTML (Accessed: [add date]).

MDN Web Docs (2024) *CSS: Cascading Style Sheets*. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS (Accessed: [add date]).

Netlify (2024) *Netlify Docs*. Available at: https://docs.netlify.com (Accessed: [add date]).

Nielsen Norman Group (2024) *Mobile-first design*. Available at: https://www.nngroup.com (Accessed: [add date]).

WhatsApp (2024) *WhatsApp Business Platform*. Available at: https://business.whatsapp.com (Accessed: [add date]).
