---
title: "Migrating to Zola: A Practical Guide to a Faster Website"
date: 2025-10-04
draft: false
description: "For the longest time, my personal website was a handful of handcrafted HTML files..."
tags: ["rust"]
slug: "migrating-to-zola"
---

For the longest time, my personal website was a handful of handcrafted HTML files. It was the epitome of simplicity, and for a while, it worked perfectly. But as I added more blog posts to the "Musings" section, a familiar friction emerged: every new post meant duplicating an entire HTML file, carefully replacing the content, and hoping I didn't break a link. This manual process was not just tedious; it was fragile. It was time to adopt a Static Site Generator (SSG).

After evaluating the landscape, I settled on [Zola](https://www.getzola.org/), a lesser-known but powerful tool written in Rust. This is the story of that migration and why it was one of the best decisions I've made for my digital home.

## The Problem with "Simple" HTML

The main challenge wasn't complexity—it was consistency. Any change to the navigation, footer, or even a simple CSS style required editing every single HTML file. This is a classic case where "Don't Repeat Yourself" (DRY) principles are desperately needed. An SSG solves this by design, using templates to build the final pages from common components and unique content files.

My requirements were straightforward:

- **Minimal dependencies:** I didn't want to manage a complex toolchain.
- **Speed:** The build process should be near-instantaneous.
- **Simplicity:** The templating and content format should be intuitive.

Zola checked every box. It's a single binary. It's written in Rust and is incredibly fast. And its use of the Tera templating engine (similar to Jinja2) and Markdown for content felt immediately familiar.

## The Migration: Step by Step

Migrating was a process of deconstruction and reconstruction. I took my existing HTML and broke it down into reusable parts that Zola could understand.

### 1. Project Scaffolding

Getting started was as simple as running `zola init my-website`. This creates the standard directory structure: `content/`, `templates/`, `static/`, and a `config.toml` file for site-wide settings.

### 2. Creating the Base Template

I copied the entire structure of my `index.html` into `templates/base.html`. Then, I identified the part that changes from page to page—the main content—and replaced it with a Tera block.

```html
<!-- templates/base.html -->
<!DOCTYPE html>
<html lang="en">
<head>
    <!-- ... Meta tags, CSS links, etc. ... -->
    <title>{{ config.title }}</title>
</head>
<body>
    <div class="max-w-3xl w-full ...">
        {% include "header.html" %}

        <main class="text-lg leading-relaxed text-slate-800">
            {% block content %}{% endblock content %}
        </main>
        
        {% include "footer.html" %}
    </div>
</body>
</html>
```

I also extracted the header and footer into their own files (`header.html`, `footer.html`) and included them as shown above. This immediately cleaned up the structure.

### 3. Converting Pages to Markdown

Next, I created Markdown files for each page in the `content/` directory. For example, a blog post now lives at `content/blog/migrating-to-zola.md`. Each file starts with TOML "front matter" to define metadata.

```toml
+++
title = "Migrating to Zola: A Practical Guide"
date = 2025-10-04
template = "blog_page.html" # A specific template for blog posts
+++

My post content, written in simple Markdown, goes here...
```

This separation of content from presentation is the core power of an SSG.

## The Payoff: A Workflow Transformed

The difference is night and day. What used to be a 10-minute copy-paste-and-edit job is now a simple, focused task: writing. I create a new `.md` file, write my content, and Zola handles the rest. Running `zola serve` provides a live-reloading local server, and `zola build` generates the optimized static files for deployment.

This migration wasn't just about adopting a new tool; it was about investing in a better, more sustainable workflow. If you're maintaining a static site by hand, I can't recommend this transition enough. Zola provides the perfect balance of power and simplicity, allowing you to focus on what truly matters: your content.