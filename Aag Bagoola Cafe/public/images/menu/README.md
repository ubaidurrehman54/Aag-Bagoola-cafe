# Menu photos

- Put each menu photo in the subfolder for its menu section: `tea`, `slush`, `boba`, `coffee` or `shake`.
- File names must be lowercase, with hyphens instead of spaces (for example, `karak-chai.jpg`).
- Use `.jpg`, `.webp` or `.png`, crop to a 4:3 ratio, and keep each file under 300 KB.
- Each file name and extension must match the `image` value of that menu item in the menu data in `index.html`.
- If a photo is missing or fails to load, its card displays `/images/menu/placeholder.svg`.
- The site is plain HTML at the project root; `netlify.toml` maps `/images/*` URLs to these files under `public/images/` when deployed to Netlify.
