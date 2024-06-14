---
title: robots.txt configuration
slug: Web/Security/Practical_implementation_guides/Robots_txt
page-type: guide
---

{{QuickLinksWithSubpages("/en-US/docs/Web/Security")}}

[`robots.txt`](/en-US/docs/Glossary/Robots.txt) is a text file that tells robots (such as search engine indexers) how to behave, by instructing them not to crawl certain paths on the website. It is placed within the root directory of a website.

## Problem

Many factors increase the load on your website. You may wish to reduce website load by disabling the crawling of automatically generated content. As an added benefit, this prevents the pollution of search results with resources that don't benefit from being searchable.

## Solution

Use `robots.txt` to reduce website load and stop unsuitable content appearing in search results.

Using `robots.txt` is optional and sites should use it only for these purposes. It should not be used as a way to prevent the disclosure of private information or to hide portions of a website. While using this file can prevent these sites from appearing in search engine results, it does not secure websites against attackers who can still determine such details because `robots.txt` is publicly accessible.

## Examples

Stop all search engines from crawling a site:

```text
User-agent: *
Disallow: /
```

Hide certain directories (this is not recommended):

```text example-bad
User-agent: *
Disallow: /secret/admin-interface
```

## See also

- [About /robots.txt](https://www.robotstxt.org/robotstxt.html) on `robotstxt.org`.
