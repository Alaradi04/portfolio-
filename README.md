# Hassan Alaradi — Portfolio

A responsive, static portfolio site built with HTML, CSS, and vanilla JavaScript. It uses the project screenshots in `pic/infaq/` and `pic/readers/` directly; no build step or package installation is required.

## Run locally

From this folder, start a local static server:

```powershell
py -m http.server 8000
```

Then open <http://localhost:8000>. If Python is not installed, open the folder in Visual Studio Code and use the Live Server extension.

## Deploy

Upload this folder, including both `pic/` directories, to a static hosting service such as GitHub Pages or Netlify. No server-side runtime or build command is needed. When publishing under a subpath, keep the relative asset paths and the `pic/` folders together.

## Personalize before publishing

- Replace the email, LinkedIn, and GitHub placeholders in `index.html` with verified contact details.
- Readers' source files were not present in the supplied workspace, so its framework, languages, and data store are intentionally not listed.
- The site uses Google Fonts when an internet connection is available and falls back to system fonts otherwise.
