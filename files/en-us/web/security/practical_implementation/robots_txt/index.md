---
title: Robots.txt
slug: Web/Security/Practical_implementation/Robots_txt
page-type: guide
---

[`robots.txt`](/en-US/docs/Glossary/Robots.txt) is a text file placed within the root directory of a site that tells robots (such as search engine indexers) how to behave, by instructing them not to crawl certain paths on the website.

## Problem

You may wish to reduce load on your website through disabling the crawling of automatically generated content, and prevent the pollution of search results with resources that don't benefit from being searchable.

## Solution

Use `robots.txt` to fix these problems.

Using `robots.txt` is optional. Sites should only use it for the above purposes.

It should not be used as a way to prevent the disclosure of private information or to hide portions of a website. Although this does prevent these sites from appearing in search engines, it does not prevent its discovery from attackers; `robots.txt` can be read to determine such details.

## Examples

Stop all search engines from crawling a site:

```text
User-agent: *
Disallow: /
```

Using `robots.txt` to hide certain directories is a terrible idea:

```text
User-agent: *
Disallow: /secret/admin-interface
```

## See also

- [About /robots.txt](https://www.robotstxt.org/robotstxt.html)

{{QuickLinksWithSubpages("/en-US/docs/Web/Security")}}
