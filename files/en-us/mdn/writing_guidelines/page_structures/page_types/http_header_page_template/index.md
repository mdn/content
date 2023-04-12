---
title: HTTP header page template
slug: MDN/Writing_guidelines/Page_structures/Page_types/HTTP_header_page_template
page-type: mdn-writing-guide
browser-compat: path.to.feature.NameOfTheHeader
---

{{MDNSidebar}}

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
> slug: Web/HTTP/Headers/NameOfTheHeader
> page-type: http-header
> status:
>   - experimental
>   - deprecated
>   - non-standard
> browser-compat: path.to.feature.NameOfTheHeader
> ---
> ```
>
> - **title**
>   - : Title heading displayed at top of page. Format as _NameOfTheHeader_. For example, the [Cache-Control](/en-US/docs/Web/HTTP/Headers/Cache-Control) header has a _title_ of `Cache-Control`.
> - **slug**
>   - : The end of the URL path after `https://developer.mozilla.org/en-US/docs/`. This will be formatted like `Web/HTTP/Headers/NameOfTheHeader`. For example, the [Cache-Control](/en-US/docs/Web/HTTP/Headers/Cache-Control) slug is `Web/HTTP/Headers/Cache-Control`.
> - **page-type**
>   - : For HTTP headers, must be `http-header`. For other HTTP `page-type` values, see the [HTTP section](/en-US/docs/MDN/Writing_guidelines/Page_structures/Page_types/Page_type_key#http_page_types) of the documentation for the `page-type` front matter key.
> - **status**
>   - : Include (appropriate) technology status keys: [**experimental**](/en-US/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental), [**deprecated**](/en-US/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated), **non-standard** (if not on a standards track).
> - **browser-compat**
>
>   - : Replace the placeholder value <code>path.to.feature.NameOfTheHeader</code> with the query string for the header in the [Browser compat data repo](https://github.com/mdn/browser-compat-data).
>     The toolchain automatically uses the key to populate the compatibility section (replacing the `\{{Compat}}` macro).
>
>     Note that you may first need to create/update an entry for the HTTP header in our <a href="https://github.com/mdn/browser-compat-data">Browser compat data repo</a>, and the entry for the header will need to include specification information.
>     See our [guide on how to do this](/en-US/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
>
> ---
>
> **Top-of-page macros**
>
> A number of macro calls appear at the top of the content section (immediately below the page frontmatter).
> You should update or delete them according to the advice below:
>
> - `\{{SeeCompatTable}}` — this generates a **This is an experimental technology** banner that indicates the header is [experimental](/en-US/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental).
>   If the header you are documenting is not experimental, you can remove this.
>   If it is experimental, and the technology is hidden behind a pref in Firefox, you should also fill in an entry for it in the [Experimental features in Firefox](/en-US/docs/Mozilla/Firefox/Experimental_features) page.
> - `\{{deprecated_header}}` — this generates a **Deprecated** banner that indicates that use of the header is [discouraged](/en-US/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated).
>   If it isn't, then you can remove the macro call.
> - `\{{httpsidebar}}` — this generates the HTTP sidebar that must appear on every HTTP reference page.
>   Remember to remove the `\{{MDNSidebar}}` macro when you copy this page.
>
> _Remember to remove this whole explanatory note before publishing_

{{SeeCompatTable}}{{deprecated_header}}{{httpsidebar}}

The summary paragraph — start by naming the http header and saying what it does.
This should ideally be 1 or 2 short sentences.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>
        Include header category (or categories), e.g.
        {{Glossary("Request header")}},
        {{Glossary("Response header")}},
        <a href="/en-US/docs/Web/HTTP/Client_hints">Client hint</a>
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>yes or no</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted response header")}}
      </th>
      <td>yes or no</td>
    </tr>
  </tbody>
</table>

## Syntax

Fill in a syntax box, like the one below, according to the guidance in our [syntax sections](/en-US/docs/MDN/Writing_guidelines/Page_structures/Syntax_sections) article.
If the header has a lot of available directives, feel free to include multiple syntax boxes, subsections and explanations as appropriate.

```http
NameOfTheHeader: <directive1>
NameOfTheHeader: <directive1>, <directive2>, …
```

The directives are case-insensitive and have an optional argument, that can use both token and quoted-string syntax.
Multiple directives are comma-separated (delete information as appropriate).

## Directives

- `directive1`
  - : Include a brief description of the directive and what it does here.
    Include one term and definition for each directive.
- `directive2`
  - : etc.

If the header has a lot of available directives, feel free to include multiple definition lists, subsections and explanations as appropriate.

## Examples

Note that we use the plural "Examples" even if the page only contains one example.

### A descriptive heading

Each example must have an H3 heading (`###`) naming the example. The heading should be descriptive of what the example is doing. For example, "A simple example" does not say anything about the example and therefore, not a good heading. The heading should be concise. For a longer description, use the paragraph after the heading.

See our guide on how to add [code examples](/en-US/docs/MDN/Writing_guidelines/Page_structures/Code_examples) for more information.

> **Note:** Sometimes you will want to link to examples given on another page.
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
> For examples of this API, see [the page on fetch()](https://example.org).
> ```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

Include links to reference pages and guides related to the current HTTP header. For more guidelines, see the [See also section](/en-US/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) in the _Writing style guide_.

- link1
- link2
