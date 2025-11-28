# Blackwell Docs Theme

**Blackwell Systems™** shared Docsify theme and branding assets.

> **Copyright (c) 2025 Dayna Blackwell. All Rights Reserved.**
>
> This repository contains proprietary brand assets. See [LICENSE](LICENSE) and [BRAND.md](BRAND.md) for terms.

## Quick Start

### 1. Enable GitHub Pages

In this repo's settings, enable GitHub Pages from the `main` branch. This serves assets at:

```
https://blackwell-systems.github.io/blackwell-docs-theme/
```

### 2. Use in Your Project

Copy the template files from `templates/` to your project's `docs/` folder:

```bash
# From your project root
cp path/to/blackwell-docs-theme/templates/index.html docs/
cp path/to/blackwell-docs-theme/templates/_coverpage.md docs/
cp path/to/blackwell-docs-theme/templates/_sidebar.md docs/
```

Then customize the placeholders:
- Replace `PROJECT_NAME` with your project name
- Replace `PROJECT_DESCRIPTION` with a short description
- Update the feature bullets in `_coverpage.md`
- Adjust sidebar links in `_sidebar.md`

### 3. Minimal Setup (index.html only)

If you just want the branding, add these lines to your existing `index.html`:

```html
<head>
  <!-- Base docsify theme -->
  <link rel="stylesheet" href="//unpkg.com/docsify/themes/vue.css" />

  <!-- Shared Blackwell branding -->
  <link rel="stylesheet" href="https://blackwell-systems.github.io/blackwell-docs-theme/docsify.css" />
  <link rel="icon" href="https://blackwell-systems.github.io/blackwell-docs-theme/favicon.svg" />
</head>

<script>
  window.$docsify = {
    logo: 'https://blackwell-systems.github.io/blackwell-docs-theme/logo.svg',
    // ... your other config
  };
</script>

<!-- After docsify.min.js -->
<script src="https://blackwell-systems.github.io/blackwell-docs-theme/blackwell.js"></script>
```

## Assets

| File | Description |
|------|-------------|
| `docsify.css` | Complete theme styles (coverpage, sidebar, content) |
| `logo.svg` | Blackwell Systems logo (180x180) |
| `favicon.svg` | Browser tab icon |
| `blackwell.js` | Optional Docsify plugin with helpers |

## Templates

| File | Description |
|------|-------------|
| `templates/index.html` | Complete Docsify setup with all branding |
| `templates/_coverpage.md` | Landing page template |
| `templates/_sidebar.md` | Navigation sidebar template |

## Customization

### Local Overrides

Add project-specific styles without modifying the shared theme:

```html
<!-- In your index.html -->
<link rel="stylesheet" href="https://blackwell-systems.github.io/blackwell-docs-theme/docsify.css" />
<link rel="stylesheet" href="./_overrides.css" />
```

### CSS Variables

The theme uses CSS custom properties you can override:

```css
:root {
  --blackwell-bg-dark: #1a1a1a;
  --blackwell-bg-gradient-start: #444;
  --blackwell-bg-gradient-end: #000;
  --blackwell-text-primary: #ffffff;
  --blackwell-text-muted: rgba(255, 255, 255, 0.85);
  --blackwell-accent: #ffffff;
  --blackwell-border-muted: rgba(255, 255, 255, 0.5);
}
```

### Using blackwell.js Helpers

The JavaScript file provides optional utilities:

```javascript
// Use default config as a base
window.$docsify = Object.assign({}, BlackwellTheme.defaults, {
  name: 'My Project',
  repo: 'https://github.com/blackwell-systems/my-project'
});

// Generate GitHub links
var links = BlackwellTheme.githubLinks('blackwell-systems', 'my-project');
// links.repo, links.issues, links.releases

// Enable "Edit on GitHub" links
window.$docsify.plugins = [
  BlackwellTheme.plugins.editOnGithub
];
```

## Project Structure

```
blackwell-docs-theme/
├── docsify.css          # Shared styles
├── logo.svg             # Primary logo
├── favicon.svg          # Browser icon
├── blackwell.js         # Optional plugin/helpers
├── README.md            # This file
└── templates/
    ├── index.html       # Complete docsify setup
    ├── _coverpage.md    # Landing page template
    └── _sidebar.md      # Navigation template
```

## Updating the Brand

When you update assets in this repo:

1. Commit and push to `main`
2. GitHub Pages auto-deploys
3. All projects using the shared URLs get updates automatically

No need to update individual repositories.

## Local Development

Preview the theme locally:

```bash
# Install docsify-cli
npm install -g docsify-cli

# Serve from this directory
docsify serve .
```

Then open `http://localhost:3000` to see the theme in action.

## Legal

### Proprietary License

All materials in this repository are proprietary and confidential. Unauthorized copying, modification, distribution, or use is strictly prohibited.

### Trademarks

**Blackwell Systems™** and the Blackwell Systems logo are trademarks of Dayna Blackwell.

### Brand Guidelines

See [BRAND.md](BRAND.md) for complete brand usage guidelines and restrictions.

---

*Blackwell Systems™ is a trademark of Dayna Blackwell.*
*Copyright (c) 2025 Dayna Blackwell. All Rights Reserved.*
