# ARMAN MESHRAM — Portfolio

A responsive, multi-page portfolio made with plain HTML, CSS, and vanilla JavaScript. There is no build step; the site can be hosted from the repository root on GitHub Pages.

## Add your personal files

- **Profile photo:** add your portrait as `assets/img/arman.jpg`. The Home and About pages expect this path.
- **Resume:** add `assets/resume/Arman_Meshram_Resume.pdf`. Header and page buttons link to this file.
- **Certificates:** six certificate PDFs and their PNG previews, plus the Maincrafts internship certificate image, are included under `assets/certs/`. Each card opens its preview; the six PDF-backed cards download the original PDF. Add the Maincrafts verification URL when available.
- **Gallery:** add event photos as `assets/img/gallery/gallery-1.jpg` through `gallery-6.jpg`. Replace the matching placeholder alt text in `about.html` with a concise description of each photo.

The supplied portrait, resume, and certificate files are installed. Gallery photos were not supplied yet; add your own event photos and update their placeholder alt text.

## Personalize content

Search the HTML files and `js/script.js` for `PLACEHOLDER`. Some achievement entries and gallery alt text are still marked for future details. The About page currently lists the B.Tech program, CGPA 7, ICSIT 2025 volunteering, and YCCE Nagpur hackathon participation. Skills, projects, and certificates are grouped near the top of `js/script.js` for easier editing. Skill proficiency values use three tiers: 1 = Learning, 2 = Comfortable, 3 = Strong; adjust these to your own assessment.

## Contact form

The form uses a placeholder Formspree endpoint. Create a Formspree form and replace `YOUR_FORM_ID` in `contact.html` with its endpoint ID. The form validates locally and only shows the success state after Formspree reports a successful submission. Without the endpoint, it prompts you to configure one.

## Preview locally

Open `index.html` in a browser, or serve the folder with any static HTTP server. Google Fonts are loaded from Google Fonts when an internet connection is available; the page remains usable with fallback fonts offline.

## Deploy on GitHub Pages

1. Commit the site files to the repository's root branch.
2. In GitHub, open **Settings → Pages**.
3. Choose **Deploy from a branch**, select the branch and `/ (root)`, then save.
4. Wait for the Pages URL to become available. Page and asset links are relative, so they work both from the repository root and from a GitHub Pages project path.

All six pages share `css/style.css` and `js/script.js`. No package manager or compilation is required.
