# Khalid Khan — Portfolio

A single-page portfolio built with plain HTML, CSS, and JavaScript (no frameworks, no build step).

## Files

```
khalid-portfolio/
├── index.html    # Page structure and content
├── styles.css    # All styling (dark theme, layout, responsive rules)
└── script.js     # Nav toggle, skills expand/collapse, contact form, scroll reveal
```

## How to view it

1. Open this folder in VS Code (`File → Open Folder…`).
2. Install the **Live Server** extension (if you don't have it already).
3. Right-click `index.html` → **Open with Live Server**.

You can also just double-click `index.html` to open it directly in a browser, though a local
server (Live Server) is recommended so relative paths behave the same way they will once deployed.

## Things to finish before it's fully live

- **Your photo**: in `index.html`, find `class="hero-photo"` and replace the placeholder `src`
  with your own image — e.g. drop `khalid.jpg` into this folder and set `src="khalid.jpg"`.
- **Resume**: add your actual `resume.pdf` file into this same folder. The "Download Resume"
  buttons already point to `resume.pdf`, so once the file exists they'll work with no code changes.
- **Project links**: in `index.html`, search for `View Project` — those are placeholder links
  (`href="#"`). Replace them with your real live demo or repo URLs as they become available.
- **Contact form**: the form in the Contact section is frontend-only right now (see the comment
  in `script.js` inside `initContactForm()`). Connect it to a service like Formspree, EmailJS, or
  your own backend endpoint when you're ready for it to actually deliver messages.

## Navigation

There's no separate top nav bar — the header just shows the logo. The dotted-leader list in the
hero (About / Projects / Tech Stack / Contacts) is the site's only navigation, so there's nothing
duplicated. It also stays highlighted to show which section you're currently viewing as you
scroll.

## Customizing

- Colors and fonts are defined as CSS variables at the top of `styles.css` (`:root { ... }`) —
  change them there to update the whole site consistently.
- Each section in `index.html` is clearly commented (`<!-- ============ ... ============ -->`)
  so you can find and edit content without digging through the whole file.
