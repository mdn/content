---
title: HTTP header page template
slug: MDN/Writing_guidelines/Page_structures/Page_types/HTTP_header_page_template
page-type: mdn-writing-guide
sidebar: mdnsidebar
---

> **Note:** _Remove this whole explanatory note before publishing_
>
> ---
>
> **Page front matter:**
>
> The frontmatter at the top of the page is used to define "page metadata".
> The values should be updated appropriately for the particular header.
>
> ```md
> ---
> title: NameOfTheHeader
> slug: Web/HTTP/Reference/Headers/NameOfTheHeader
> page-type: http-header
> status:
>   - deprecated
>   - experimental
>   - non-standard
> browser-compat: path.to.feature.NameOfTheHeader
> sidebar: httpsidebar
> ---
> ```
>
> - **title**
>   - : Title heading displayed at the top of the page. Format as _NameOfTheHeader_. For example, the [Cache-Control](/en-US/docs/Web/HTTP/Reference/Headers/Cache-Control) header has a _title_ of `Cache-Control`.
> - **slug**
>   - : The end of the URL path after `https://developer.mozilla.org/en-US/docs/`. This will be formatted like `Web/HTTP/Reference/Headers/NameOfTheHeader`. For example, the [Cache-Control](/en-US/docs/Web/HTTP/Reference/Headers/Cache-Control) slug is `Web/HTTP/Reference/Headers/Cache-Control`.
> - **page-type**
>   - : For HTTP headers, must be `http-header`. For other HTTP `page-type` values, see the [HTTP section](/en-US/docs/MDN/Writing_guidelines/Page_structures/Page_types/Page_type_key#http_page_types) of the documentation for the `page-type` front matter key.
> - **status**
>   - : Flags describing the status of this feature. An array which may contain one or more of the following: `experimental`, `deprecated`, `non-standard`. This key should not be set manually: it is set automatically based on values in the browser compatibility data for the feature. See ["How feature statuses are added or updated"](/en-US/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).
> - **browser-compat**
>
>   - : Replace the placeholder value `path.to.feature.NameOfTheHeader` with the query string for the header in the [Browser compat data repo](https://github.com/mdn/browser-compat-data).
>     The toolchain automatically uses the key to populate the compatibility section (replacing the `\{{Compat}}` macro).
>
>     Note that you may first need to create/update an entry for the HTTP header in our <a href="https://github.com/mdn/browser-compat-data">Browser compat data repo</a>, and the entry for the header will need to include specification information.
>     See our [guide on how to do this](/en-US/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
>
>     Browser compatibility does not apply for HTTP headers where no specific implementation is provided (such as automatically adding a request header to some requests or changing behavior based on data in a response header).
>     For these cases, remove the browser-compat key and value.
>
> - **sidebar**
>   - : This is always `httpsidebar`.
>     See [Page structures: Sidebars](/en-US/docs/MDN/Writing_guidelines/Page_structures/Sidebars) for details.
>
> ---
>
> **Top-of-page macros**
>
> A number of macros appear at the top of the content section immediately after the page front matter.
> These macros are automatically added by tooling, so avoid adding or removing them:
>
> - `\{{SeeCompatTable}}` — this generates a **This is an experimental technology** banner that indicates the header is [experimental](/en-US/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental).
>   If it is experimental, and the technology is hidden behind a pref in Firefox, you should also fill in an entry for it in the [Experimental features in Firefox](/en-US/docs/Mozilla/Firefox/Experimental_features) page.
> - `\{{deprecated_header}}` — this generates a **Deprecated** banner that indicates that use of the header is [discouraged](/en-US/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated).
> - `\{{Non-standard_Header}}` — this generates a **Non-standard** banner that indicates that the feature is not part of any specification.
>
> Do not provide status header macros manually. Refer to the section ["How feature statuses are added or updated"](/en-US/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated) to add these statuses to the page.
>
> Samples of the **Experimental**, **Deprecated**, and **Non-standard** banners are shown right after this note block.
>
> _Remember to remove this whole explanatory note before publishing_

{{SeeCompatTable}}{{Deprecated_Header}}{{Non-standard_Header}}

The first sentence of the page must follow this format:

> The HTTP **`header-name`** (header type) is used for X in Y circumstances.

The 'header type' should say if it's a {{Glossary("request header")}}, a {{Glossary("response header")}}, or if it may be either.
The summary paragraph should ideally be one or two short sentences.

You can mention notable gotchas or common pitfalls in this section, linking to examples or more detailed documentation (guides, etc.) in this section.
Two or three paragraphs in this section is appropriate, and if there are substantial usage notes to include, use a "Description" section after "Directives" below.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>
        Include header category (or categories), e.g.
        {{Glossary("Request header")}},
        {{Glossary("Response header")}},
        <a href="/en-US/docs/Web/HTTP/Guides/Client_hints">Client hint</a>
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden request header")}}</th>
      <td>"Yes" or "No"</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted response header")}}
      </th>
      <td>"Yes" or "No"</td>
    </tr>
  </tbody>
</table>

## Syntax

Fill in a syntax box, like the one below, according to the guidance in our [syntax sections](/en-US/docs/MDN/Writing_guidelines/Page_structures/Syntax_sections) article.

```http
NameOfTheHeader: <directive1>
NameOfTheHeader: <directive1>, <directive2>, …
```

If the header has a lot of available directives, feel free to include multiple syntax boxes, subsections and explanations as appropriate:

```http
NameOfTheHeader: <directive3>, …, <directiveN>
```

The directives are case-insensitive and have an optional argument, that can use both token and quoted-string syntax.
Multiple directives are comma-separated (delete information as appropriate).

## Directives

- `directive1`
  - : Include a brief description of the directive and what it does here.
    Include one term and definition for each directive.
- `directive2`
  - : etc.

If the header has a lot of available directives,
feel free to include multiple definition lists, subsections, and explanations as appropriate.

## Description

If there is too much content to include in the opening paragraphs, provide as much detail as necessary here, such as background information, hints for usage, and links to documentation.

## Examples

Note that we use the plural "Examples" even if the page only contains one example.

### A descriptive heading

Each example **must** have an H3 heading (`###`) naming the example. The heading should be descriptive of what the example is doing. For example, "A simple example" does not say anything about the example and therefore, not a good heading. The heading should be concise. For a longer description, use the paragraph after the heading.

See our guide on how to add [code examples](/en-US/docs/MDN/Writing_guidelines/Page_structures/Code_examples) for more information.

> [!NOTE]
> Sometimes you will want to link to examples given on another page.
>
> **Scenario 1:** If you have some examples on this page and some more examples on another page:
>
> Include an H3 heading (`###`) for each example on this page and then a final H3 heading (`###`) with the text "More examples", under which you can link to the examples on other pages. For example:
>
> ```md
> ## Examples
>
> ### Using the fetch API
>
> Example of Fetch
>
> ### More examples
>
> Links to more examples on other pages
> ```
>
> **Scenario 2:** If you _only_ have examples on another page and none on this page:
>
> Don't add any H3 headings; just add the links directly under the H2 heading "Examples". For example:
>
> ```md
> ## Examples
>
> For examples of this API, see [the page on fetch()](https://example.org/).
> ```

## Specifications

`\{{Specifications}}`

_To use this macro, remove the backticks and backslash in the markdown file._

## Browser compatibility

_If the browser has no specific handling for the header, remove the macro below._
_Otherwise, to use this macro, remove the backticks and backslash in the markdown file._

`\{{Compat}}`

_If the browser has specific handling for the header, remove the text below:_

This header has no specification-defined user-agent integration ("browser compatibility" does not apply).
Developers can set and get HTTP headers using `fetch()` in order to provide application-specific implementation behavior.

## See also

Include links to reference pages and guides related to the current HTTP header.
For more guidelines, see the [See also section](/en-US/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) in the _Writing style guide_.
You can link to relevant response statuses like `\{{HTTPStatus("123", "123 Reason")}}` and headers like `\{{HTTPHeader("Header-Name")}}`.
You may group related statuses and headers in a single list item for brevity.

- link1
- link2
- external_link (year)
