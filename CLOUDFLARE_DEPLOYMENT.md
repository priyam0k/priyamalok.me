# Cloudflare Pages Deployment Guide

## Migration from Main to Hugo Branch

This repository has been migrated from a static HTML/JavaScript setup to Hugo. The Hugo-based site is on the `hugo` branch and should be used for Cloudflare Pages deployment.

## Cloudflare Pages Configuration

### Build Settings for Cloudflare Pages

When setting up your Cloudflare Pages project, use these settings:

```
Framework preset: Hugo
Build command: cd hugo-site && hugo --gc --minify
Build output directory: hugo-site/public
Root directory: / (leave empty or set to root)
Environment variables: HUGO_VERSION = 0.121.0
```

### Branch Configuration

1. **Current Setup**: Main branch contains old static HTML files
2. **New Setup**: Hugo branch contains the Hugo-based site
3. **Action Required**: Change Cloudflare Pages to deploy from `hugo` branch

### Steps to Switch Deployment Branch in Cloudflare Pages:

1. Go to your Cloudflare Dashboard
2. Navigate to Pages → Your Site
3. Click on "Settings" tab
4. Go to "Builds & deployments" section
5. Under "Production branch", change from `main` to `hugo`
6. Update build settings as specified above
7. Trigger a new deployment

## Local Development

### Prerequisites
- Windows PowerShell (scripts included)
- Git

### Development Workflow

```powershell
# Clone and switch to hugo branch
git checkout hugo

# Start development server
.\serve.ps1

# Make changes to content in hugo-site/content/
# Hugo will automatically rebuild and refresh browser

# Build for production testing
.\build.ps1
```

### Adding New Content

#### New Blog Post
1. Create file: `hugo-site/content/blog/your-post-slug.md`
2. Add front matter:
```yaml
---
title: "Your Post Title"
date: 2025-10-04
draft: false
description: "Brief description"
tags: ["tag1", "tag2"]
slug: "your-post-slug"
---

Your content in Markdown here...
```

#### New Project
1. Create file: `hugo-site/content/project/your-project-slug.md`
2. Use similar front matter structure
3. Add `type: "project"` if needed

#### External Links (YouTube, etc.)
```yaml
---
title: "External Content"
date: 2025-08-01
external_url: "https://example.com"
tags: ["music", "life"]
---
```

## Hugo Site Structure

```
hugo-site/
├── hugo.toml              # Site configuration
├── content/               # All content (Markdown files)
│   ├── _index.md         # Homepage
│   ├── blog/             # Blog posts
│   │   ├── _index.md     # Blog section page
│   │   └── *.md          # Individual posts
│   └── project/          # Projects
│       ├── _index.md     # Project section page
│       └── *.md          # Individual projects
├── layouts/              # Hugo templates
│   ├── _default/         # Default templates
│   ├── partials/         # Reusable components
│   ├── blog/             # Blog-specific templates
│   └── tags/             # Tag system templates
├── static/               # Static assets
│   ├── _headers          # Cloudflare Pages headers
│   ├── _redirects        # URL redirects
│   ├── *.png, *.jpg      # Images
│   └── favicon.png
└── public/               # Generated site (ignored in git)
```

## Performance Optimizations

The Hugo setup includes several optimizations for Cloudflare Pages:

- **Minification**: CSS, HTML, and JS are minified
- **Cache Headers**: Long-term caching for static assets
- **Security Headers**: XSS protection, content type sniffing prevention
- **SEO**: Automatic sitemap, RSS feeds, meta tags
- **Fast Builds**: Hugo typically builds in under 100ms

## Content Migration Status

✅ **Completed:**
- Hugo site structure and configuration
- Basic content files (homepage, sample blog posts)
- Template system matching original design
- Build and deployment configuration
- Cloudflare Pages optimization

🔄 **In Progress:**
- Migration of remaining blog post content from HTML to Markdown
- Testing all functionality

## Deployment Benefits

### Before (Static HTML on Main Branch)
- Manual HTML file creation
- No build process
- Limited optimization
- Difficult to maintain consistency

### After (Hugo on Hugo Branch)
- Markdown-based content creation
- Automatic optimization and minification
- Template-based consistency
- Live development server
- Built-in SEO features

## Troubleshooting

### Build Fails on Cloudflare Pages
1. Check Hugo version (should be 0.121.0 or later)
2. Verify build command: `cd hugo-site && hugo --gc --minify`
3. Ensure build output directory is `hugo-site/public`
4. Check for any draft posts (`draft: true` in front matter)

### Content Not Showing
1. Verify front matter syntax (YAML with `---` delimiters)
2. Check file location (`content/blog/` or `content/project/`)
3. Ensure `draft: false` in front matter
4. Validate date format: `2025-10-04`

### Styling Issues
1. Check if TailwindCSS is loading (CDN link in base template)
2. Verify custom CSS in `layouts/_default/baseof.html`
3. Test locally with `.\serve.ps1` first

## Next Steps After Branch Switch

1. **Test Deployment**: Trigger a build on Cloudflare Pages after switching to hugo branch
2. **Verify URLs**: Ensure all links work correctly
3. **Complete Content Migration**: Convert remaining HTML blog posts to Markdown
4. **Monitor Performance**: Check Cloudflare Analytics for improvements
5. **Update DNS**: Ensure custom domain settings are correct

## Support

For Hugo-specific questions, refer to:
- [Hugo Documentation](https://gohugo.io/documentation/)
- [Hugo Templating](https://gohugo.io/templates/)
- [Cloudflare Pages Hugo Guide](https://developers.cloudflare.com/pages/framework-guides/deploy-a-hugo-site/)

The migration preserves your exact design while providing a much more maintainable and performant foundation for your personal website.