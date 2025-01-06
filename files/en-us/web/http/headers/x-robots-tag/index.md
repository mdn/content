---
title: X-Robots-Tag
slug: Web/HTTP/Headers/X-Robots-Tag
page-type: http-header
status:
  - non-standard
---

{{HTTPSidebar}}

The **`X-Robots-Tag`** {{Glossary("response header")}} defines how {{glossary("Crawler", "crawlers")}} should index URLs.
While not part of any specification, it is a de-facto standard method for communicating with search bots, web crawlers, and similar user agents.
Search-related crawlers use the rules from the `X-Robots-Tag` header to adjust how to present web pages or other resources in search results.

Indexing rules defined via `<meta name="robots">` elements and `X-Robots-Tag` headers are discovered when a URL is crawled.
Specifying indexing rules in a HTTP header is useful for non-HTML documents like images, PDFs, or other media.

> [!NOTE]
> Only cooperative robots follow these rules, and a crawler still needs to access the resource to read headers and meta elements (see [Interaction with robots.txt](#interaction_with_robots.txt)).
> If you want to prevent bandwidth consumption by crawlers, a restrictive {{Glossary("robots.txt")}} file is more effective than indexing rules as it blocks resources from being crawled entirely.

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

One or more indexing rules as a comma-separated list:

```http
X-Robots-Tag: <indexing-rule>
X-Robots-Tag: <indexing-rule>, …, <indexing-ruleN>
```

An optional `<bot-name>:` specifies the user agent that the subsequent rules should apply to:

```http
X-Robots-Tag: <indexing-rule>, <bot-name>: <indexing-rule>
X-Robots-Tag: <bot-name>: <indexing-rule>, …, <indexing-ruleN>
```

See [Specifying user agents](#specifying_user_agents) for an example.

## Directives

Any of the following indexing rules may be used:

- `all`
  - : No restrictions for indexing or serving in search results.
    This rule is the default value and has no effect if explicitly listed.
- `noindex`
  - : Do not show this page, media, or resource in search results.
    If omitted, the page, media, or resource may be indexed and shown in search results.
- `nofollow`
  - : Do not follow the links on this page.
    If omitted, search engines may use the links on the page to discover those linked pages.
- `none`
  - : Equivalent to `noindex, nofollow`.
- `nosnippet`
  - : Do not show a text snippet or video preview in the search results for this page.
    A static image thumbnail (if available) may still be visible.
    If omitted, search engines may generate a text snippet and video preview based on information found on the page.
    To exclude certain sections of your content from appearing in search result snippets, use the [`data-nosnippet` HTML attribute](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag#data-nosnippet-attr).
- `indexifembedded`
  - : A search engine is allowed to index the content of a page if it's embedded in another page through iframes or similar HTML elements, in spite of a `noindex` rule.
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
    If omitted, search engines may show a video snippet in search results, and the search engine decides how long a preview may be.
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
    If omitted, this page may be shown in search results indefinitely.
    Crawlers are expected to considerably decrease the crawl rate of the URL after the specified date and time.

## Description

Indexing rules via `<meta name="robots">` and `X-Robots-Tag` are discovered when a URL is crawled.
Most crawlers support rules in the `X-Robots-Tag` HTTP header that can be used in a `<meta name="robots">` element.

In the case of conflicting robot rules within the `X-Robots-Tag` or between the `X-Robots-Tag` HTTP header and the `<meta name="robots">` element, the more restrictive rule applies.
For example, if a page has both `max-snippet:50` and `nosnippet` rules, the `nosnippet` rule will apply.
Indexing rules won't be discovered or applied if paths are blocked from being crawled by a `robots.txt` file.

Some values are mutually exclusive, such as `index` and `noindex`, or `follow` and `nofollow`.
In these cases, the crawler's behavior is undefined and may vary.

### Interaction with robots.txt

If a resource is blocked from crawling through a `robots.txt` file, then any information about indexing or serving rules specified using `<meta name="robots">` or the `X-Robots-Tag` HTTP header will not be detected and will therefore be ignored.

A page that's blocked from crawling may still be indexed if it is referenced from another document (see the [`nofollow`](#nofollow) directive).
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
X-Robots-Tag: BadBot: noindex, nofollow
X-Robots-Tag: googlebot: nofollow
```

In the response below, the same indexing rules are defined, but in a single header.
Each indexing rule applies to the user agent specified behind it:

```http
HTTP/1.1 200 OK
Date: Tue, 03 Dec 2024 17:08:49 GMT
X-Robots-Tag: BadBot: noindex, nofollow, googlebot: nofollow
```

For situations where multiple crawlers are specified along with different rules, the search engine will use the sum of the negative rules.
For example:

```http
X-Robots-Tag: nofollow
X-Robots-Tag: googlebot: noindex
```

The page containing these headers will be interpreted as having a `noindex, nofollow` rule when crawled by `googlebot`.

## Specifications

Not part of any current specification.

## See also

- {{Glossary("Robots.txt")}}
- {{Glossary("Search engine")}}
- {{RFC("9309", "Robots Exclusion Protocol")}}
- [Using the X-Robots-Tag HTTP header](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag#xrobotstag) on developers.google.com
