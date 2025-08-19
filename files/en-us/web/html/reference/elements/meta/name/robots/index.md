---
title: <meta name="robots">
short-title: robots
slug: Web/HTML/Reference/Elements/meta/name/robots
page-type: html-attribute-value
sidebar: htmlsidebar
---

The **`robots`** value for the [`name`](/en-US/docs/Web/HTML/Reference/Elements/meta/name) attribute of the {{htmlelement("meta")}} element (often called a "robots tag") defines the crawl and indexing behavior that web {{glossary("Crawler", "crawlers")}} should use with the page.
If specified, you define instructions for crawlers in the [`content`](/en-US/docs/Web/HTML/Reference/Elements/meta#content) attribute of the `<meta>` element as a comma-separated list of one or more rules.

For example, to hint to crawlers that a page should be excluded from their search indexes, a `noindex` value can be used:

```html
<meta name="robots" content="noindex" />
```

> [!NOTE]
> Only cooperative robots follow these rules.
> A crawler still needs to access the resource to read headers and meta elements (see [X-Robots-Tag: Interaction with robots.txt](/en-US/docs/Web/HTTP/Reference/Headers/X-Robots-Tag#interaction_with_robots.txt)).
> If you want to prevent bandwidth consumption by crawlers, a restrictive {{Glossary("robots.txt")}} file is more effective than indexing rules as it blocks resources from being crawled entirely.

## Usage notes

A `<meta name="robots">` element can have the following additional attributes:

- [`content`](/en-US/docs/Web/HTML/Reference/Elements/meta#content)
  - : The `content` attribute must be defined, and its value sets indexing and crawling behavior for cooperative search engine robots.
    Accepts one or more of the following keywords as a comma-separated list:
    - `index`
      - : Allows the robot to index the page. This is the default behavior.
        Used by all major crawlers.
    - `noindex`
      - : Requests the robot not to index the page.
        Used by all major crawlers.
    - `follow`
      - : Allows the robot to follow links on the page. This is the default behavior.
        Used by all major crawlers.
    - `nofollow`
      - : Requests the robot not to follow the links on the page.
        Used by all major crawlers.
    - `all`
      - : Equivalent to `index, follow`.
        Used by: [Google](https://developers.google.com/search/docs/crawling-indexing/special-tags?visit_id=637855965067987211-415685194&rd=1).
    - `none`
      - : Equivalent to `noindex, nofollow`.
        Used by: [Google](https://developers.google.com/search/docs/crawling-indexing/special-tags?visit_id=637855965074074862-574753619&rd=1).
    - `noarchive`
      - : Requests that the search engine not cache the page content.
        Used by: [Google](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag), [Yahoo](https://help.yahoo.com/kb/search-for-desktop/SLN2213.html), [Bing](https://www.bing.com/webmasters/help/which-robots-metatags-does-bing-support-5198d240).
    - `nosnippet`
      - : Prevents displaying any description of the page in search engine results.
        Used by: [Google](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag), [Bing](https://www.bing.com/webmasters/help/which-robots-metatags-does-bing-support-5198d240).
    - `noimageindex`
      - : Requests that this page not appear as the referring page of an indexed image.
        Used by: [Google](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag).
    - `nocache`
      - : Synonym of `noarchive`.
        Used by: [Bing](https://www.bing.com/webmasters/help/which-robots-metatags-does-bing-support-5198d240).

## Description

There are several important considerations to note when setting a `robots` meta value:

- Only cooperative robots follow these rules. They won't prevent malicious actors like email harvesters from ignoring the directives.
- If defined in a `<meta>` tag, robots still need to access the page to read these rules. To reduce bandwidth, consider using a [robots.txt file](/en-US/docs/Web/Security/Practical_implementation_guides/Robots_txt) instead.
- The `<meta name="robots">` tag and `robots.txt` serve different roles: `robots.txt` controls crawling, while the `robots` meta tag influences indexing and other behavior.
- A page blocked by `robots.txt` may still be indexed if linked from other sources.
- The `noindex` directive will only take effect after the robot revisits the page, so ensure `robots.txt` doesn't prevent this.
- Some values, such as `index` vs. `noindex` or `follow` vs. `nofollow`, are mutually exclusive. Behavior is undefined when conflicting values are used.
- Robots like Google, Yahoo, and Bing also support these directives in the HTTP header {{HTTPHeader("X-Robots-Tag")}}, which is useful for non-HTML content such as PDFs or images.

## Examples

### Using a robots keyword

The following example uses `nofollow` to request that a crawler doesn't follow links on a page and `noindex` to request that the page is excluded from indexing:

```html
<meta name="robots" content="nofollow, noindex" />
```

## Specifications

While not part of any specification, it is a de-facto standard method for communicating with search bots, web crawlers, and similar user agents.

## Browser compatibility

This feature is intended for crawlers to observe, so "browser" compatibility doesn't apply.

## See also

- {{httpheader("X-Robots-Tag")}} HTTP header
- [robots.txt configuration](/en-US/docs/Web/Security/Practical_implementation_guides/Robots_txt) guide
- {{Glossary("robots.txt")}} glossary entry
- {{Glossary("Search engine")}} glossary entry
- {{RFC("9309", "Robots Exclusion Protocol")}}
- [WHATWG Wiki MetaExtensions page](https://wiki.whatwg.org/wiki/MetaExtensions)
- [Using the robots meta tag](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag#robotsmeta) on developers.google.com
