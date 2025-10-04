# Hugo Migration for priyamalok.me

This repository contains the Hugo-based version of Priyam Alok's personal website, migrated from a static HTML/JavaScript setup.

## Project Structure

```
hugo-site/
├── hugo.toml              # Hugo configuration
├── content/               # Content files (Markdown)
│   ├── _index.md         # Homepage content
│   ├── blog/             # Blog posts
│   │   ├── _index.md     # Blog section page
│   │   └── *.md          # Individual blog posts
│   └── project/          # Project posts
│       ├── _index.md     # Projects section page
│       └── *.md          # Individual projects
├── layouts/              # Hugo templates
│   ├── _default/         # Default templates
│   │   ├── baseof.html   # Base template
│   │   ├── home.html     # Homepage template
│   │   └── single.html   # Single post template
│   ├── blog/             # Blog-specific templates
│   │   └── list.html     # Blog listing page
│   ├── tags/             # Tag templates
│   │   ├── list.html     # All tags page
│   │   └── term.html     # Individual tag page
│   └── partials/         # Reusable template parts
│       ├── header.html   # Site header
│       └── footer.html   # Site footer
└── static/               # Static assets (images, CSS, JS)
    ├── favicon.png
    ├── logo.jpg
    └── *.png
```

## Migration Benefits

### Before (Static HTML + JavaScript)
- Manual HTML file creation for each post
- Content managed in `post.js` array
- Repetitive header/footer updates across all files
- No build process or optimization

### After (Hugo)
- Content written in Markdown with front matter
- Automatic page generation from templates
- DRY principle applied to layouts
- Built-in optimization and minification
- Live development server with hot reload

## Development Workflow

### Prerequisites
- Hugo Extended (automatically downloaded by scripts)
- PowerShell (Windows) or bash (macOS/Linux)

### Local Development
```powershell
# Start development server
.\serve.ps1

# Or manually with Hugo
hugo server --source hugo-site
```

Visit `http://localhost:1313` to see your site with live reload.

### Building for Production
```powershell
# Build optimized site
.\build.ps1

# Or manually with Hugo
hugo --source hugo-site --destination public --minify
```

### Adding New Content

#### New Blog Post
1. Create `hugo-site/content/blog/your-post-slug.md`
2. Add front matter:
```yaml
---
title: "Your Post Title"
date: 2025-10-04
draft: false
description: "Brief description of your post"
tags: ["tag1", "tag2"]
slug: "your-post-slug"
---
```
3. Write content in Markdown below the front matter

#### New Project
1. Create `hugo-site/content/project/your-project-slug.md`
2. Use similar front matter structure
3. Add `type: "project"` if needed for special handling

#### External Links (like YouTube)
```yaml
---
title: "External Content Title"
date: 2025-08-01
external_url: "https://example.com"
tags: ["music", "life"]
---
```

## Content Migration from post.js

All content from the original `post.js` has been converted to Markdown files:

- **Blog posts**: `content/blog/*.md`
- **Projects**: `content/project/*.md`
- **External links**: Handled with `external_url` front matter parameter
- **Tags**: Converted to Hugo's built-in taxonomy system

## Design Preservation

The Hugo templates maintain the exact visual design of the original site:
- **Typography**: Source Serif 4 and Source Sans 3 fonts
- **Colors**: Original color scheme (#d9534f for links, etc.)
- **Layout**: Responsive design with same breakpoints
- **Components**: Identical header, footer, and navigation

## Deployment

### GitHub Pages (Recommended)
The site includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that automatically builds and deploys the site to GitHub Pages when you push to the main branch.

### Manual Deployment
1. Run `.\build.ps1` to generate the site
2. Upload contents of `public/` directory to your hosting provider

## SEO and Performance Improvements

Hugo provides several built-in optimizations:
- **Minification**: CSS, JS, and HTML are minified in production
- **Image Processing**: Automatic image optimization (can be configured)
- **RSS Feeds**: Automatically generated for blog and tags
- **Sitemap**: Auto-generated sitemap.xml
- **Fast Builds**: Hugo typically builds in milliseconds

## Customization

### Adding New Page Types
1. Create new content type in `content/new-type/`
2. Add corresponding template in `layouts/new-type/`
3. Update menu in `hugo.toml` if needed

### Modifying Design
- Edit CSS in `layouts/_default/baseof.html`
- Modify templates in `layouts/` directories
- Add new partials in `layouts/partials/`

### Configuration Changes
Edit `hugo-site/hugo.toml` for:
- Site metadata
- Menu structure
- Permalink patterns
- Taxonomy settings

## Maintenance

The Hugo setup is much easier to maintain than the previous static HTML approach:
- **Content**: Write in Markdown, no HTML needed
- **Design Changes**: Edit templates once, affects all pages
- **New Features**: Leverage Hugo's ecosystem and themes
- **Performance**: Built-in optimization and caching

## Next Steps

1. **Content Migration**: Convert remaining blog posts from HTML to Markdown
2. **Enhanced Features**: Add search, comments, or analytics if desired
3. **Theme Development**: Consider extracting layouts into a reusable Hugo theme
4. **Content Workflow**: Set up content management workflow (Git-based or headless CMS)