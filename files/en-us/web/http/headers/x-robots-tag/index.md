---
title: X-Robots-Tag
slug: Web/HTTP/Headers/X-Robots-Tag
page-type: http-header
status:
  - non-standard
---

{{HTTPSidebar}}

The **`X-Robots-Tag`** {{Glossary("response header")}} defines how {{glossary("Crawler", "crawlers")}} should index URLs. While not part of any specification, it is a de-facto standard method for communicating with search bots, web crawlers, and similar user agents.
Search-related crawlers use the rules from the `X-Robots-Tag` header to adjust how to present web pages or other resources in search results.

Indexing rules defined via `<meta name="robots">` tags and `X-Robots-Tag` headers are discovered when a URL is crawled.
Specifying rules in a HTTP header is appropriate for non-HTML documents like images, PDFs, or other media.

> [!NOTE]
> Only cooperative robots follow these rules and a crawler still needs to access the page in order to read these rules (see [Interaction with robots.txt](#interaction_with_robots.txt)).
> A {{Glossary("robots.txt")}} file is more appropriate to restrict or prevent bandwidth consumption by crawlers.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>No</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
X-Robots-Tag: <indexing-rules>
```

## Directives

- `<indexing-rules>`

  - : A comma-separated list of rules for indexing the resource at the current URL.
    Any of the following rules may be used:

    - `all`
      - : No restrictions for indexing or serving in search results.
        This rule is the default value and has no effect if explicitly listed.
    - `noindex`
      - : Do not show this page, media, or resource in search results.
        If you don't specify this rule, the page, media, or resource may be indexed and shown in search results.
    - `nofollow`
      - : Do not follow the links on this page.
        If you don't specify this rule, search engines may use the links on the page to discover those linked pages.
    - `none`
      - : Equivalent to `noindex, nofollow`.
    - `nosnippet`
      - : Do not show a text snippet or video preview in the search results for this page.
        A static image thumbnail (if available) may still be visible.
        If you don't specify this rule, search engines may generate a text snippet and video preview based on information found on the page.
        To exclude certain sections of your content from appearing in search result snippets, use the `data-nosnippet` HTML attribute.
    - `indexifembedded`
      - : A search engine is allowed to index the content of a page if it's embedded in another page through iframes or similar HTML tags, in spite of a `noindex` rule.
        `indexifembedded` only has an effect if it's accompanied by `noindex`.
    - `max-snippet: <number>`
      - : Use a maximum of `<number>` characters as a textual snippet for this search result.
        Ignored if no valid `<number>` is specified.
    - `max-image-preview: <setting>`

      - : The maximum size of an image preview for this page in a search results.
        If omitted, search engines may show an image preview of the default size.
        If you don't want search engines to use larger thumbnail images, specify a `max-image-preview` value of `standard` or `none`. Values include:

        - `none`
          - : No image preview is to be shown.
        - `standard`
          - : A default image preview may be shown.
        - `large`
          - : A larger image preview, up to the width of the viewport, may be shown.

    - `max-video-preview: <number>`
      - : Use a maximum of `<number>` seconds as a video snippet for videos on this page in search results.
        If you don't specify the `max-video-preview` rule, search engines may show a video snippet in search results, and a search engines decide how long a preview may be.
        Ignored if no valid `<number>` is specified.
        Special values are as follows:
        - `0`
          - : At most, a static image may be used, in accordance to the `max-image-preview` setting.
        - `-1`
          - : No video length limit.
    - `notranslate`
      - : Don't offer translation of this page in search results.
        If omitted, search engines may translate the search result title and snippet into the language of the search query.
    - `noimageindex`
      - : Do not index images on this page.
        If omitted, images on the page may be indexed and shown in search results.
    - `unavailable_after: <date/time>`

      - : Requests not to show this page in search results after the specified `<date/time>`.
        Ignored if no valid `<date/time>` is specified.
        A date must be specified in a format such as {{RFC("822")}}, {{RFC("850")}}, or ISO 8601.

        By default there is no expiration date for content.
        If you don't specify this rule, this page may be shown in search results indefinitely.
        Crawlers are expected to considerably decrease the crawl rate of the URL after the specified date and time.

## Description

Indexing rules via `<meta name="robots">` and `X-Robots-Tag` are discovered when a URL is crawled.
Most crawlers support rules in the `X-Robots-Tag` HTTP header that can be used in a `<meta name="robots">` tag.

In the case of conflicting robots rules, the more restrictive rule applies.
For example, if a page has both `max-snippet:50` and `nosnippet` rules, the `nosnippet` rule will apply.

Some values are mutually exclusive, like `index` and `noindex`, or `follow` and `nofollow`.
In these cases the crawler's behavior is undefined and may vary.

> [!NOTE]
> The `X-Robots-Tag` rules may not be treated the same by all search engines.

### Interaction with robots.txt

If a page is disallowed from crawling through a `robots.txt` file, then any information about indexing or serving rules specified using `<meta name="robots">` or the `X-Robots-Tag` HTTP header will not be detected and will therefore be ignored.

A page that can't be crawled may still be indexed if it is referenced by another document.
If you want to remove a page from search indexes, `X-Robots-Tag: noindex` will typically work, but a robot must first revisit the page to detect the `X-Robots-Tag` rule.

## Examples

### Using X-Robots-Tag

The following `X-Robots-Tag` header adds `noindex`, asking crawlers not to show this page, media, or resource in search results:

```http
HTTP/1.1 200 OK
Date: Tue, 03 Dec 2024 17:08:49 GMT
X-Robots-Tag: noindex
```

### Multiple headers

The following response has two `X-Robots-Tag` headers, each with an indexing rule specified:

```http
HTTP/1.1 200 OK
Date: Tue, 03 Dec 2024 17:08:49 GMT
X-Robots-Tag: noimageindex
X-Robots-Tag: unavailable_after: Wed, 03 Dec 2025 13:09:53 GMT
```

### Specifying user agents

It's possible to specify which user agent the rules should apply to.
The following example contains two `X-Robots-Tag` headers which ask that `googlebot` not follow the links on this page and that a fictional `BadBot` crawler not index the page or follow any links on it, either:

```http
HTTP/1.1 200 OK
Date: Tue, 03 Dec 2024 17:08:49 GMT
X-Robots-Tag: googlebot: nofollow
X-Robots-Tag: BadBot: noindex, nofollow
```

## Specifications

Not part of any current specification.

## See also

- {{Glossary("Search engine")}}
- {{RFC("9309", "Robots Exclusion Protocol")}}
- [Using the X-Robots-Tag HTTP header](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag#xrobotstag) on developers.google.com
