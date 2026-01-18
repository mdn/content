---
title: Commonly-used macros
slug: MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros
page-type: mdn-writing-guide
sidebar: mdnsidebar
---

This page lists many of the general-purpose macros that [rari](https://github.com/mdn/rari) provides for use on MDN.
For generic how-to information on using them in MDN content, see [Using macros](/en-US/docs/MDN/Writing_guidelines/Page_structures/Macros).

## Linking

MDN provides a number of link macros for easing the creation of links to glossary entries, reference pages, and other topics.

Link macros are recommended over normal Markdown links because they are succinct and translation-friendly.
For example, a glossary or reference link created using a macro does not need to be translated: in other locales it will automatically link to the correct version of the file.

These macros are also covered in more detail on the [Link macros](/en-US/docs/MDN/Writing_guidelines/Page_structures/Links) page.

### Linking to glossary terms

The [`Glossary`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/glossary.rs) macro creates a link to the specified term's page in [MDN Glossary](/en-US/docs/Glossary).
This macro accepts one required parameter and one optional parameter.

- The term is a required parameter. For example, to link to the glossary page for "HTML", the macro will be `\{{Glossary("HTML")}}`, and this will produce the link {{Glossary("HTML")}}.
- The display text is an optional parameter. For example, you can write the link in the previous example as `\{{Glossary("HTML", "HyperText Markup Language")}}`, which will produce the link {{Glossary("HTML", "HyperText Markup Language")}}.

### Linking to reference pages

There are macros for locale-independent linking to pages in specific reference areas of MDN, including HTML, CSS, JavaScript, SVG, and HTTP.

The macros are easy to use.
All you need to do is specify the name of the item to link to in the first parameter.
Similar to the glossary macro, most reference macros also accept a second parameter to allow you to change the display text

See the linked source files in the first column in the following table for details.

<table class="standard-table">
  <thead>
    <tr>
      <th>Macro</th>
      <th>Links to pages under</th>
      <th>Example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <a href="https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/links/cssxref.rs">CSSxRef</a>
      </td>
      <td>
        <a href="/en-US/docs/Web/CSS/Reference">CSS reference</a> (/Web/CSS/Reference)<br />
      </td>
      <td>
        <code>\{{CSSxRef("cursor")}}</code> results in {{CSSxRef("cursor")}}.<br />
        <code>\{{CSSxRef(":hover")}}</code> results in {{CSSxRef(":hover")}}.<br />
        <code>\{{CSSxRef("@media")}}</code> results in {{CSSxRef("@media")}}.<br />
        <code>\{{CSSxRef("pow")}}</code> results in {{CSSxRef("pow")}}.
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/links/domxref.rs">DOMxRef</a>
      </td>
      <td><a href="/en-US/docs/Web/API">DOM reference</a> (/Web/API)</td>
      <td>
        <code>\{{DOMxRef("document")}}</code> results in {{DOMxRef("Document")}}.<br />
        <code>\{{DOMxRef("document.getElementsByName()")}}</code> results in {{DOMxRef("document.getElementsByName()")}}.<br />
        <code>\{{DOMxRef("Node")}}</code> results in {{DOMxRef("Node")}}.<br />
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/links/htmlxref.rs">HTMLElement</a>
      </td>
      <td>
        <a href="/en-US/docs/Web/HTML/Reference/Elements">HTML elements reference</a> (/Web/HTML/Reference/Elements)
      </td>
      <td>
        <code>\{{HTMLElement("select")}}</code> results in {{HTMLElement("select")}}.
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/links/jsxref.rs">JSxRef</a>
      </td>
      <td>
        <a href="/en-US/docs/Web/JavaScript/Reference">JavaScript reference</a> (/Web/JavaScript/Reference)
      </td>
      <td>
        <code>\{{JSxRef("Promise")}}</code> results in {{JSxRef("Promise")}}.
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/links/svgattr.rs">SVGAttr</a>
      </td>
      <td>
        <a href="/en-US/docs/Web/SVG/Reference/Attribute">SVG attribute reference</a> (/Web/SVG/Reference/Attribute)
      </td>
      <td>
        <code>\{{SVGAttr("d")}}</code> results in {{SVGAttr("d")}}.
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/links/svgxref.rs">SVGElement</a>
      </td>
      <td>
        <a href="/en-US/docs/Web/SVG/Reference/Element">SVG Element reference</a> (/Web/SVG/Reference/Element)
      </td>
      <td>
        <code>\{{SVGElement("view")}}</code> results in {{SVGElement("view")}}.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/links/http.rs">HTTPHeader</a></code>
      </td>
      <td>
        <a href="/en-US/docs/Web/HTTP/Reference/Headers">HTTP headers</a> (/Web/HTTP/Reference/Headers)
      </td>
      <td>
        <code>\{{HTTPHeader("ACCEPT")}}</code> results in {{HTTPHeader("ACCEPT")}}.
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/links/http.rs">HTTPMethod</a>
      </td>
      <td>
        <a href="/en-US/docs/Web/HTTP/Reference/Methods">HTTP request methods</a> (/Web/HTTP/Reference/Methods)
      </td>
      <td>
        <code>\{{HTTPMethod("HEAD")}}</code> results in {{HTTPMethod("HEAD")}}.
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/links/http.rs">HTTPStatus</a>
      </td>
      <td>
        <a href="/en-US/docs/Web/HTTP/Reference/Status">HTTP response status codes</a> (/Web/HTTP/Reference/Status)
      </td>
      <td>
        <code>\{{HTTPStatus("404")}}</code> results in {{HTTPStatus("404")}}.
      </td>
    </tr>
  </tbody>
</table>

### Adding navigation aids for multi-page guides

[`Previous`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/previous_menu_next.rs), [`Next`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/previous_menu_next.rs), and [`PreviousNext`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/previous_menu_next.rs) provide navigation controls for articles that are part of a sequence.
For the single-way templates, the only parameter needed is the slug of the previous or next article in the sequence.
The [`PreviousNext`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/previous_menu_next.rs) macro requires two parameters: the first parameter is the slug for the previous article, and the second is the slug for the next article.

## Generating code samples

### Live samples

- [`EmbedLiveSample`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/embeds/embed_live_sample.rs) lets you embed the output of a code sample on a page, as described in [Live samples](/en-US/docs/MDN/Writing_guidelines/Page_structures/Live_samples).
- [`LiveSampleLink`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/embeds/live_sample_link.rs) creates a link to a page containing the output of a code sample on a page, as described in [Live samples](/en-US/docs/MDN/Writing_guidelines/Page_structures/Live_samples).
- [`EmbedGHLiveSample`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/embeds/embed_gh_live_sample.rs) allows to embed live samples from GitHub pages.
  You can get more information at [GitHub live samples](/en-US/docs/MDN/Writing_guidelines/Page_structures/Code_examples#github_live_samples).

## Adding general-purpose formatting

### Adding inline indicators for API documentation

[`Optional_Inline`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/badges.rs) and [`ReadOnlyInline`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/badges.rs) are used in API documentation, usually when describing the list of properties of an object or parameters of a function.

Usage: `\{{Optional_Inline}}` or `\{{ReadOnlyInline}}`.
Example:

- `isCustomObject` {{ReadOnlyInline}}
  - : Indicates, if `true`, that the object is a custom one.
- `parameterX` {{optional_inline}}
  - : Indicates…

## Adding status and compatibility indicators

### Adding inline indicators with no additional parameters

#### Non-standard

[`Non-standard_Inline`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/badges.rs) inserts an in-line mark indicating the API has not been standardized and is not on a standards track.

##### Syntax

`\{{Non-standard_Inline}}`

##### Examples

- Icon: {{Non-standard_Inline}}

#### Experimental

[`Experimental_Inline`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/badges.rs) inserts an in-line mark indicating the API is not widely implemented and may change in the future.
For more information on the definition **experimental**, see the [Experimental, deprecated, and obsolete](/en-US/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete) documentation.

##### Syntax

`\{{Experimental_Inline}}`

##### Examples

- Icon: {{Experimental_Inline}}

### Adding inline indicators that support specifying the technology

#### Deprecated

[`Deprecated_Inline`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/badges.rs) inserts an in-line deprecated mark ({{Deprecated_Inline}}) to discourage the use of an API that is officially deprecated (or has been removed).
For more information on the definition **deprecated**, see the [Experimental, deprecated, and obsolete](/en-US/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete) documentation.

##### Syntax

`\{{Deprecated_Inline}}`

##### Examples

- Icon: {{Deprecated_Inline}}

### Page or section header indicators

These templates have the same semantics as their inline counterparts described above.
The templates should be placed directly underneath the main page title (or breadcrumb navigation if available) in the reference page.
They can also be used to mark up a section on a page.

- [`Non-standard_Header`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/banners.rs): `\{{Non-standard_Header}}` {{Non-standard_Header}}
- [`SeeCompatTable`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/banners.rs) used on pages
  that document [experimental features](/en-US/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental).
  Example: `\{{SeeCompatTable}}` {{SeeCompatTable}}
- [`Deprecated_Header`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/banners.rs): `\{{Deprecated_Header}}` {{Deprecated_Header}}
- [`SecureContext_Header`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/banners.rs).
  Should be used on main pages like interface pages, API overview pages, and API entry points (e.g., `navigator.xyz`) but usually not on subpages like method and property pages.
  Example: `\{{SecureContext_Header}}` {{SecureContext_Header}}

#### Indicating that a feature is available in web workers

The [`AvailableInWorkers`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/banners.rs) macro inserts a localized note box indicating that a feature is available in a [worker context](/en-US/docs/Web/API/Web_Workers_API).
You can also pass some arguments to indicate that a feature works in specified worker context.

##### Syntax

```plain
\{{AvailableInWorkers}}
\{{AvailableInWorkers("window_and_worker_except_service")}}
```

##### Examples

{{AvailableInWorkers}}
{{AvailableInWorkers("window_and_worker_except_service")}}

## Linking to browser compatibility and specification

The following macros are included on all reference pages, but are also supported by all page types:

- `\{{Compat}}`
  - : Generates a [compatibility table](/en-US/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables) for the feature(s) defined by `browser-compat` in the frontmatter.
- `\{{Specifications}}`
  - : Includes a [specification table](/en-US/docs/MDN/Writing_guidelines/Page_structures/Specification_tables) for the feature(s) defined by `spec-urls` in the frontmatter, if present, or from the specification listed in browser compatibility data defined by `browser-compat` in the frontmatter.

## See also

- [Link macros](/en-US/docs/MDN/Writing_guidelines/Page_structures/Links)
- [Sidebar macros](/en-US/docs/MDN/Writing_guidelines/Page_structures/Sidebars)
- [Feature status macros](/en-US/docs/MDN/Writing_guidelines/Page_structures/Feature_status)
- [Other macros](/en-US/docs/MDN/Writing_guidelines/Page_structures/Macros/Other) (infrequently used or deprecated macros)
- [Page templates](/en-US/docs/MDN/Writing_guidelines/Page_structures/Page_types#page_templates)
- [Page components](/en-US/docs/MDN/Writing_guidelines/Writing_style_guide#page_components)
