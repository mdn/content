---
title: 'Yari: MDN''s rendering platform'
slug: MDN/Yari
tags:
  - Yari
  - Landing
  - MDN Meta
---
{{MDNSidebar}}

Yari is the code that renders MDN Web Docs. It takes a [JAMStack](https://jamstack.org/) approach, which involves taking the MDN content stored as flat source files in a GitHub repo (which include front matter and macro calls), rendering them out to static HTML files, and serving those as quickly and efficiently as possible.

The core MDN platform now actually consists of two GitHub repos:

- [The MDN content repo](https://github.com/mdn/content) — this is where the MDN content is stored, along with information such as contributor history and redirects. Visit this repo if you want to contribute to the MDN content.
- [The Yari project](https://github.com/mdn/yari) — this is the platform code that renders and displays the MDN content, and deals with associated services such as user accounts. Visit this repo if you want to contribute to the MDN platform.

## See also

- [MDN Web Docs evolves! Lowdown on the upcoming new platform](https://hacks.mozilla.org/2020/10/mdn-web-docs-evolves-lowdown-on-the-upcoming-new-platform/) — explanation of the need for a platform change, and the new architecture.
- As needed, take a deep dive into the [Welcome Yari: MDN Web Docs has a new platform](https://hacks.mozilla.org/2020/12/welcome-yari-mdn-web-docs-has-a-new-platform/) — formal announcement of the new platform launch.
