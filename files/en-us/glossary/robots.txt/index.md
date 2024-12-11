---
title: Robots.txt
slug: Glossary/Robots.txt
page-type: glossary-definition
---

{{GlossarySidebar}}

A **robots.txt** is a file which is usually placed in the root of a website (for example, `https://www.example.com/robots.txt`).
It specifies whether {{Glossary("crawler", "crawlers")}} are allowed or disallowed from accessing an entire website or to certain resources on a website.
A restrictive `robots.txt` file can prevent bandwidth consumption by crawlers.

A site owner can forbid crawlers to detect a certain path (and all files in that path) or a specific file.
This is often done to prevent these resources from being indexed or served by search engines.

If a crawler is allowed to access resources, you can define [indexing rules](/en-US/docs/Web/HTTP/Headers/X-Robots-Tag#directives) for those resources via `<meta name="robots">` elements and {{HTTPHeader("X-Robots-Tag")}} HTTP headers.
Search-related crawlers use these rules to determine how to index and serve resources in search results, or to adjust the crawl rate for specific resources over time.

## See also

- {{HTTPHeader("X-Robots-Tag")}}
- {{Glossary("Search engine")}}
- {{RFC("9309", "Robots Exclusion Protocol")}}
- [How Google interprets the robots.txt specification](https://developers.google.com/search/docs/crawling-indexing/robots/robots_txt) on developers.google.com
- https://www.robotstxt.org
- [Robots.txt](https://en.wikipedia.org/wiki/Robots.txt) on Wikipedia
