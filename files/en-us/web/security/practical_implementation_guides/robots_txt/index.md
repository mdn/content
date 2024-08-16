---
title: robots.txt configuration
slug: Web/Security/Practical_implementation_guides/Robots_txt
page-type: guide
---

{{QuickLinksWithSubpages("/en-US/docs/Web/Security")}}

[`robots.txt`](/en-US/docs/Glossary/Robots.txt) is a text file that tells robots (such as search engine indexers) how to behave, by instructing them not to crawl certain paths on the website. It is placed within the root directory of a website.

## Problem

Many factors can increase the load on your website; this includes web crawlers. In addition, if allowed to crawl the entirety of a site, web crawlers can cause pollution of search results with resources that don't benefit from being searchable.

## Solution

Use `robots.txt` to reduce website load and stop unsuitable content appearing in search results. Using this file is optional and should only be used for these purposes. It should not be used as a way to prevent the disclosure of private information or to hide portions of a website.

While using this file can prevent pages from appearing in search engine results, it does not secure websites against attackers. On the contrary, it can unintentionally help them: `robots.txt` is publicly accessible, and by adding your sensitive page paths to it, you are showing their locations to potential attackers.

Also be aware that some robots, such as malware robots and email address harvesters, will ignore your `robots.txt` file.

## Examples

Stop all search engines from crawling a site:

```http
User-agent: *
Disallow: /
```

Hide certain directories (this is not recommended):

```http example-bad
User-agent: *
Disallow: /secret/admin-interface
```

## See also

- [About /robots.txt](https://www.robotstxt.org/robotstxt.html) on `robotstxt.org`
