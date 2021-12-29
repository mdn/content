---
title: HTTP header page template
slug: MDN/Structures/Page_types/HTTP_header_page_template
tags:
  - HTTP
  - HTTP Header
  - Reference
  - Template
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
> ```
> ---
> title: NameOfTheHeader
> slug: Web/HTTP/Headers/NameOfTheHeader
> tags:
>   - NameOfTheHeader
>   - HTTP
>   - HTTP Header
>   - Request header
>   - Response header
>   - Reference
>   - Experimental
>   - Deprecated
> browser-compat: path.to.feature.NameOfTheHeader
> ---
> ```
> - **title**
>   - : Title heading displayed at top of page. Format as _NameOfTheHeader_. For example, the [Cache-Control](/en-US/docs/Web/HTTP/Headers/Cache-Control) header has a _title_ of `Cache-Control`.
> - **slug**
>   - : The end of the URL path after `https://developer.mozilla.org/en-US/docs/`). This will be formatted like `Web/HTTP/Headers/NameOfTheHeader`. For example, the [Cache-Control](/en-US/docs/Web/HTTP/Headers/Cache-Control) slug is `Web/HTTP/Headers/Cache-Control`.
> - **tags**
>   - : Always include the following tags: **HTTP**, **Reference**, **HTTP Header**, _NameOfTheHeader_ (e.g. **Cache-Control**).
>
>       Include the following tags as appropriate:
>       - Type of request/response: **Response header**, **Request header**, **Representation header**, **Payload header**, **Client hint**
>       - Header status: **Experimental** (if the technology is [experimental](/en-US/docs/MDN/Guidelines/Conventions_definitions#experimental)), **Deprecated** (if it is [deprecated](/en-US/docs/MDN/Guidelines/Conventions_definitions#deprecated_and_obsolete)).
>       - Any other tags that represent terms people might search for related to the technology. For example the [Cache-Control](/en-US/docs/Web/HTTP/Headers/Cache-Control) header includes the tag **Caching**.
> - **browser-compat**
>   - : Replace the placeholder value <code>path.to.feature.NameOfTheHeader</code> with the query string for the header in the [Browser compat data repo](https://github.com/mdn/browser-compat-data).
>       The toolchain automatically uses the key to populate the compatibility section (replacing the `\{{Compat}}` macro).
>
>       Note that you may first need to create/update an entry for the HTTP header in our <a href="https://github.com/mdn/browser-compat-data">Browser compat data repo</a>, and the entry for the header will need to include specification information.
>       See our [guide on how to do this](/en-US/docs/MDN/Structures/Compatibility_tables).
>
> ---
>
> **Top-of-page macros**
>
> A number of macro calls appear at the top of the content section (immediately below the page frontmatter).
> You should update or delete them according to the advice below:
> - `\{{SeeCompatTable}}` — this generates a **This is an experimental technology** banner that indicates the header is [experimental](/en-US/docs/MDN/Guidelines/Conventions_definitions#experimental)).
>   If the header you are documenting is not experimental, you can remove this.
>   If it is experimental, and the technology is hidden behind a pref in Firefox, you should also fill in an entry for it in the [Experimental features in Firefox](/en-US/docs/Mozilla/Firefox/Experimental_features) page.
> - `\{{deprecated_header}}` — this generates a **Deprecated** banner that indicates that use of the header is [discouraged](/en-US/docs/MDN/Guidelines/Conventions_definitions#deprecated_and_obsolete).
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

Fill in a syntax box, like the one below, according to the guidance in our [syntax sections](/en-US/docs/MDN/Structures/Syntax_sections) article.
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

Fill in a some examples that show common use cases of the HTTP header (for example, a typical request and response sequence).

```http
my HTTP header example
```

And/or include a list of links to useful code samples that live elsewhere:

- x
- y
- z

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Include list of
- other links related to
- this header that might
- be useful