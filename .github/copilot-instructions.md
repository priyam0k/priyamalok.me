# Copilot Instructions for priyamalok.me

## Project Overview
This is a **Hugo-based personal website** for Priyam Alok, an actuarial model developer. The site features blog posts, projects, and portfolio content focused on insurance tech, finance, and life musings. **The site has been migrated from static HTML/JavaScript to Hugo for better maintainability and content management.**

## Architecture & Key Components

### Hugo Site Structure
```
hugo-site/
├── hugo.toml              # Hugo configuration and site settings
├── content/               # All content in Markdown format
│   ├── _index.md         # Homepage content
│   ├── blog/             # Blog posts with front matter
│   └── project/          # Project showcase content
├── layouts/              # Hugo templates (Go templates)
│   ├── _default/         # Default layouts (baseof, single, home)
│   ├── partials/         # Reusable components (header, footer)
│   ├── blog/             # Blog-specific templates
│   └── tags/             # Tag taxonomy templates
└── static/               # Static assets (images, favicon)
```

### Content Management System
- **Hugo-Based**: Content written in Markdown with YAML front matter
- **Front Matter**: Each post has metadata (title, date, tags, description, slug)
- **Taxonomies**: Built-in tag system for content organization
- **External Links**: Handled via `external_url` parameter in front matter

### Migration from Legacy System
- **Previous**: Static HTML files with `post.js` array as content database
- **Current**: Hugo with Markdown content files and Go templates
- **Benefits**: DRY templates, automatic optimization, live reload development

## Content Creation Patterns

### Blog Post Format
```yaml
---
title: "Post Title"
date: 2025-10-04
draft: false
description: "Brief post description"
tags: ["tag1", "tag2"]
slug: "url-slug"
---

Markdown content here...
```

### Project Post Format
```yaml
---
title: "Project Name"
date: 2025-09-23
type: "project"
description: "Project description"
tags: ["actuarial-exams"]
slug: "project-slug"
---

Project content...
```

### External Links (YouTube, etc.)
```yaml
---
title: "External Content"
date: 2025-08-01
external_url: "https://example.com"
tags: ["music", "life"]
---
```

## Design System & Styling

### Typography & Colors (Preserved from Original)
- **Primary Font**: `Source Serif 4` for body text
- **Headers/Navigation**: `Source Sans 3` for headings and nav
- **Link Color**: `#d9534f` (red) with `#f0c3c2` underline
- **Code Styling**: Custom monospace with red accent color

### Template Structure
- **Base Template**: `layouts/_default/baseof.html` - main page structure
- **Header Partial**: `layouts/partials/header.html` - consistent navigation
- **Footer Partial**: `layouts/partials/footer.html` - social links
- **Blog List**: `layouts/blog/list.html` - combines blog posts and projects

### Responsive Design
- **Mobile-First**: TailwindCSS classes with `sm:` breakpoints
- **Navigation**: Desktop/mobile navigation variants
- **Layout**: Flexbox-based responsive grid

## Development Workflow

### Local Development
```powershell
.\serve.ps1              # Start Hugo development server
# OR
hugo server --source hugo-site
```

### Production Build
```powershell
.\build.ps1              # Build optimized site
# OR  
hugo --source hugo-site --minify
```

### Content Workflow
1. **New Post**: Create `.md` file in `content/blog/` or `content/project/`
2. **Front Matter**: Add required metadata (title, date, tags, description)
3. **Content**: Write in Markdown below front matter
4. **Preview**: Use `hugo server` for live reload
5. **Deploy**: Push to main branch triggers GitHub Actions

## Template Development Patterns

### Hugo Template Functions Used
- `{{ range .Site.RegularPages }}` - iterate through content
- `{{ .Date.Format "January 2, 2006" }}` - date formatting
- `{{ .Params.external_url }}` - access front matter parameters
- `{{ if .Params.tags }}` - conditional rendering
- `{{ range .Site.Taxonomies.tags.ByCount }}` - tag processing

### Content Filtering
- **Combined Posts**: Blog and project posts shown together chronologically
- **Tag Filtering**: Built-in Hugo taxonomy system
- **External Links**: Special handling for off-site content

## Deployment & Performance

### GitHub Actions Workflow
- **Trigger**: Push to main branch
- **Hugo Version**: 0.121.0 Extended
- **Output**: Built site deployed to GitHub Pages
- **Domain**: Custom domain (priyamalok.me) via CNAME

### Performance Optimizations
- **Minification**: Hugo's built-in CSS/HTML/JS minification
- **CDN Assets**: TailwindCSS and Google Fonts via CDN
- **Image Optimization**: Error handling and fallback images
- **Fast Builds**: Hugo typically builds in milliseconds

## Content Guidelines (Preserved)

### Topic Focus
- **Actuarial Science**: GLM/GBM, pricing models, reserving techniques
- **Insurance Tech**: Blockchain, parametric insurance, catastrophe modeling
- **Finance & Economics**: Market analysis, risk management
- **Personal Development**: Career growth, learning experiences

### Tag Conventions
- **Technical**: `glm`, `gbm`, `pricing`, `reserving`, `predictri`
- **Business**: `economics`, `finance`, `blockchain`
- **Personal**: `life`, `music`, `intro`
- **Educational**: `actuarial-exams`

## Critical Files for AI Agents
- `hugo-site/hugo.toml`: Site configuration and parameters
- `hugo-site/layouts/_default/baseof.html`: Main page template
- `hugo-site/layouts/blog/list.html`: Combined blog/project listing
- `hugo-site/content/`: All Markdown content files
- `.github/workflows/deploy.yml`: Deployment automation

## Migration Notes
- **Legacy Support**: Old `post.js` system completely replaced
- **URL Preservation**: Slug-based URLs maintain SEO value  
- **Design Consistency**: Exact visual replication of original site
- **Enhanced Workflow**: Much easier content creation and maintenance