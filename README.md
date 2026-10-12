# Portfolio Website

My personal portfolio website, built with HTML, CSS and a little JavaScript. It shows the projects I've built while learning Python, with a link to each repo, and a dark theme with a red accent that can be switched to light.

**Live site:** [https://playfu1-d0ubt.github.io/portfolio/](https://playfu1-d0ubt.github.io/portfolio/)

## What it does

- Shows a card for each of my projects, with a short description and a link to its GitHub repo
- Has a dark theme with a red accent, and a toggle to switch between light and dark
- Adjusts its layout to fit phones, tablets and desktops
- Is hosted for free on GitHub Pages, so it updates whenever I push a change

## How to run

You need a web browser. There is nothing to install.

To view it online, open the live site above.

To run it on your own computer:

```bash
git clone git@github.com:playfu1-d0ubt/ADD-YOUR-REPO-NAME.git
cd ADD-YOUR-REPO-NAME
```

Then open `index.html` in your browser, or start a small local server and go to `http://localhost:8000`:

```bash
python3 -m http.server 8000
```

Stop the server with `Ctrl+C`.

### Publishing changes

The site is served by GitHub Pages, so pushing to the main branch updates it. A change can take a minute or two to appear.

```bash
git add .
git commit -m "Update projects"
git push
```

## Limitations

- The project cards don't have preview images yet. I tried screenshots, didn't like how they looked, and removed them.
- There is no About or Contact section yet.
- The projects are listed in one block, with no tag filters.
- No custom favicon or 404 page yet.
- I haven't run a Lighthouse accessibility and performance check yet.

## What I learned

**What I practised:** HTML and CSS layout, responsive design so the page fits different screen sizes, a little JavaScript for the light and dark toggle, and publishing a site with GitHub Pages.

**Design choices:** I picked a dark theme with a red accent, and added a toggle so it also works in light mode.

**Trying and removing an idea:** project screenshots looked cluttered on the cards, so I took them out. Testing a change and undoing it is part of building a design.

**Ideas for later:**

- Preview images that suit the design
- An About and Contact section
- Tag filters for the project list
- A favicon and a custom 404 page