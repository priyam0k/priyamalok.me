/*
================================================================================
| Blog Post Data - SINGLE SOURCE OF TRUTH                                      |
================================================================================
|
| To add a new blog post or musing, create a new entry in this 'posts' array.
|
| Each post is an object with the following properties:
|   - title: The title of your post (string).
|   - url: The destination link. Can be a local file ('blog/post.html'),
|          an external link ('https://example.com'), or a root link ('/').
|   - date: The publication date (string).
|   - description: A short summary or snippet of the post (string).
|   - source: The domain where the content is hosted (e.g., 'priyamalok.me' or 'youtube.com').
|   - tags: An array of tags associated with the post (array of strings).
|
| The posts are displayed in the order they appear here. Add new posts to the top.
|
*/

const posts = [
    {
        title: "City of the sun :)",
        url: "https://youtu.be/NP1AU5O9pC0?list=LM",
        date: "Aug 01, 2025",
        description: "Procrastination and missed opportunities, desire for a more fulfilling life, passage of time and the realization of missed moments.",
        source: "youtube.com",
        tags: ["music", "life"]
    },
    {
        title: "An analysis of blockchain in insurance, sparked by curiosity",
        url: "blog/an-analysis-of-blockchain-in-insurance-sparked-by-curiosity.html",
        date: "Jul 31, 2025",
        description: "A recent mentorship session sparked a memory of a conversation with MJ The Fellow Actuary about the future of blockchain in insurance.",
        source: "priyamalok.me",
        tags: ["blockchain", "insurance"]
    },
    {
        title: "A journey through PriceWriter podcasts",
        url: "blog/a-journey-through-pricewriter-podcasts.html",
        date: "Jul 28, 2025",
        description: "After following the PriceWriter podcasts for over a year, I'm reflecting on my favorite parts and key learnings.",
        source: "priyamalok.me",
        tags: ["pricewriter", "actuarial", "pricing"]
    },
    {
        title: "Parametric insurance: global comparative analysis",
        url: "blog/parametric-insurance-global-comparative-analysis.html",
        date: "Jul 26, 2025",
        description: "A comparative analysis of parametric insurance markets in India, the U.S., and the U.K., unpacking the actuarial foundations and product innovations.",
        source: "priyamalok.me",
        tags: ["parametric insurance", "insurance", "analysis", "actuarial"]
    },
    {
        title: "Pricing a non-stationary world: a quantitative analysis",
        url: "blog/pricing-a-non-stationary-world-a-quantitative-analysis.html",
        date: "Jul 24, 2025",
        description: "An analysis of the escalating crisis in property insurance, driven by the increasing frequency and severity of climate-related catastrophes.",
        source: "priyamalok.me",
        tags: ["pricing", "analysis", "climate risk", "insurance"]
    },
    {
        title: "Project: Interactive guide to general insurance principles",
        url: "blog/post-gi-mindmap.html",
        date: "Jul 03, 2025",
        description: "An interactive mind map designed to explore the core principles of General Insurance, from financial management to reinsurance.",
        source: "priyamalok.me",
        tags: ["project", "insurance", "studying"]
    },
    {
        title: "A deep dive into the PredicTri framework",
        url: "blog/a-deep-dive-into-the-predictri-framework.html",
        date: "Jul 04, 2025",
        description: "An interactive analysis of the PredicTri framework, which aims to modernize P&C reserving using Bayesian methods and machine learning.",
        source: "priyamalok.me",
        tags: ["predictri", "insurance", "reserving"]
    },
    {
        title: "Reading between the yields: a global risk barometer",
        url: "blog/reading-between-the-yields.html",
        date: "May 21, 2025",
        description: "A detailed comparative analysis of 10-year government bond yields across developed, strategic, and emerging economies.",
        source: "priyamalok.me",
        tags: ["finance", "economics"]
    },
    {
        title: "Hi, I am Priyam, This is my personal homepage.",
        url: "/",
        date: "Dec 05, 2024",
        description: "An aspiring actuarial model developer. Stumbled upon trading and capital markets at 17, which sparked my passion for understanding finance.",
        source: "priyamalok.me",
        tags: ["intro", "life"]
    }
];
