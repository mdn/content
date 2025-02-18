---
title: Commonly-used macros
slug: MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros
page-type: mdn-writing-guide
sidebar: mdnsidebar
---

This page lists many of the general-purpose macros created for use on MDN.
For additional how-to information on using these macros, see [Using macros](/en-US/docs/MDN/Writing_guidelines/Page_structures/Macros).

See [Other macros](/en-US/docs/MDN/Writing_guidelines/Page_structures/Macros/Other) for information on macros that are infrequently used, are used only in special contexts, or are deprecated.

## Linking

MDN provides a number of link macros for easing the creation of links to reference pages, glossary entries, and other topics.

Link macros are recommended over normal Markdown links because they are succinct and translation-friendly.
For example, a glossary or reference link created using a macro does not need to be translated: in other locales it will automatically link to the correct version of the file.

### Glossary links

The [`Glossary`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/glossary.rs) macro creates a link to a specified term's entry in the MDN [glossary](/en-US/docs/Glossary).
This macro accepts one required parameter and one optional parameter:

1. The term's name (such as "HTML"): `\{{Glossary("HTML")}}` yields {{Glossary("HTML")}}
2. Optional: The text to display in the article instead of the term name: `\{{Glossary("CSS", "Cascading Style Sheets")}}` yields {{Glossary("CSS", "Cascading Style Sheets")}}

### Linking to pages in references

There are macros for locale-independent linking to pages in specific reference areas of MDN: JavaScript, CSS, HTML elements, SVG, etc.

The macros are easy to use.
Minimally all you need to do is specify the name of the item to link to in the first argument.
Most macros will also take a second argument allowing you to change the display text (documentation can be found at the links in the left-most column below).

<table class="standard-table">
  <thead>
    <tr>
      <th>Macro</th>
      <th>Links to page under</th>
      <th>Example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <a href="https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/links/cssxref.rs">CSSxRef</a>
      </td>
      <td>
        <a href="/en-US/docs/Web/CSS/Reference">CSS Reference</a> (/Web/CSS/Reference)
      </td>
      <td>
        <code>\{{CSSxRef("cursor")}}</code> results in {{CSSxRef("cursor")}}.
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/links/domxref.rs">DOMxRef</a>
      </td>
      <td><a href="/en-US/docs/Web/API">DOM Reference</a> (/Web/API)</td>
      <td>
        <code>\{{DOMxRef("Document")}}</code> or <code>\{{DOMxRef("document")}}</code> results in {{DOMxRef("Document")}},<br />
        <code>\{{DOMxRef("document.getElementsByName()")}}</code> result in {{DOMxRef("document.getElementsByName()")}}<br />
        <code>\{{DOMxRef("Node")}}</code> result in {{DOMxRef("Node")}}.<br />
        You can change the display text using a second parameter: <code>\{{DOMxRef("document.getElementsByName()","getElementsByName()")}}</code> results in {{DOMxRef("document.getElementsByName()","getElementsByName()")}}.
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/links/htmlxref.rs">HTMLElement</a>
      </td>
      <td>
        <a href="/en-US/docs/Web/HTML/Element">HTML Elements reference</a> (/Web/HTML/Element)
      </td>
      <td>
        <code>\{{HTMLElement("select")}}</code> results in {{HTMLElement("select")}}
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/links/jsxref.rs">JSxRef</a>
      </td>
      <td>
        <a href="/en-US/docs/Web/JavaScript/Reference">JavaScript reference</a> (/Web/JavaScript/Reference).
      </td>
      <td>
        <code>\{{JSxRef("Promise")}}</code> results in {{JSxRef("Promise")}}
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/links/svgattr.rs">SVGAttr</a>
      </td>
      <td>
        <a href="/en-US/docs/Web/SVG/Attribute">SVG attribute reference</a> (/Web/SVG/Attribute).
      </td>
      <td>
        <code>\{{SVGAttr("d")}}</code> results in {{SVGAttr("d")}}
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/links/svgxref.rs">SVGElement</a>
      </td>
      <td>
        <a href="/en-US/docs/Web/SVG/Attribute">SVG Element reference</a> (/Web/SVG/Element).
      </td>
      <td>
        <code>\{{SVGElement("view")}}</code> results in {{SVGElement("view")}}
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/links/http.rs">HTTPHeader</a></code>
      </td>
      <td>
        <a href="/en-US/docs/Web/HTTP/Headers">HTTP headers</a> (/Web/HTTP/Headers).
      </td>
      <td>
        <code>\{{HTTPHeader("ACCEPT")}}</code> results in {{HTTPHeader("ACCEPT")}}
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/links/http.rs">HTTPMethod</a>
      </td>
      <td>
        <a href="/en-US/docs/Web/HTTP/Methods">HTTP request methods</a> (/Web/HTTP/Methods).
      </td>
      <td>
        <code>\{{HTTPMethod("HEAD")}}</code> results in {{HTTPMethod("HEAD")}}
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/links/http.rs">HTTPStatus</a>
      </td>
      <td>
        <a href="/en-US/docs/Web/HTTP/Status">HTTP response status codes</a> (/Web/HTTP/Status)
      </td>
      <td>
        <code>\{{HTTPStatus("404")}}</code> results in {{HTTPStatus("404")}}
      </td>
    </tr>
  </tbody>
</table>

### Navigation aids for multi-page guides

[`Previous`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/previous_menu_next.rs), [`Next`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/previous_menu_next.rs), and [`PreviousNext`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/previous_menu_next.rs) provide navigation controls for articles which are part of sequences.
For the single-way templates, the only parameter needed is the wiki location of the previous or next article in the sequence.
For [`PreviousNext`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/previous_menu_next.rs), the two parameters needed are the wiki locations of the appropriate articles.
The first parameter is for the previous article, and the second is for the next article.

## Code samples

### Live samples

- [`EmbedLiveSample`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/embeds/embed_live_sample.rs) lets you embed the output of a code sample on a page, as described in [Live samples](/en-US/docs/MDN/Writing_guidelines/Page_structures/Live_samples).
- [`LiveSampleLink`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/embeds/live_sample_link.rs) creates a link to a page containing the output of a code sample on a page, as described in [Live samples](/en-US/docs/MDN/Writing_guidelines/Page_structures/Live_samples).
- [`EmbedGHLiveSample`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/embeds/embed_gh_live_sample.rs) allows to embed live samples from GitHub pages.
  You can get more information at [GitHub live samples](/en-US/docs/MDN/Writing_guidelines/Page_structures/Code_examples#github_live_samples).

## General-purpose formatting

### Inline indicators for API documentation

[`Optional_Inline`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/badges.rs) and [`ReadOnlyInline`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/badges.rs) are used in API documentation, usually when describing the list of properties of an object or parameters of a function.

Usage: `\{{Optional_Inline}}` or `\{{ReadOnlyInline}}`.
Example:

- `isCustomObject` {{ReadOnlyInline}}
  - : Indicates, if `true`, that the object is a custom one.
- `parameterX` {{optional_inline}}
  - : Blah blah blah…

## Status and compatibility indicators

### Inline indicators with no additional parameters

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

### Inline indicators that support specifying the technology

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
  Should be used on main pages like interface pages, API overview pages, and API entry points (e.g. `navigator.xyz`) but usually not on subpages like method and property pages.
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

## Browser compatibility and specification macros

The following macros are included on all reference pages, but are also supported by all page types:

- `\{{Compat}}` / `\{{Compat(&lt;feature>)}}` / `\{{Compat(&lt;feature>, &lt;depth>)}}`

  - : Generates a [compatibility table](/en-US/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables) for the feature passed as the parameter. If no parameter is included, it defaults to the features defined by `browser-compat` in the frontmatter. An optional depth parameter sets how deep sub features should be added to the table. The depth, if omitted, defaults to 1, meaning only the first level of sub feature data from BCD will be included.

- `\{{Specifications}}` / `\{{Specifications(&lt;feature>)}}`
  - : Includes the specification for the feature specified in the parameter. If no parameter is passed, the specification listed is defined by the value for `spec-urls` in the frontmatter, if present, or from the specification listed in browser compatibility data defined by `browser-compat` in the frontmatter. The specification is rendered as an external link.

## See also

- [Sidebar macros](/en-US/docs/MDN/Writing_guidelines/Page_structures/Sidebars)
- [Page templates](/en-US/docs/MDN/Writing_guidelines/Page_structures/Page_types#page_templates)
- [Page components](/en-US/docs/MDN/Writing_guidelines/Writing_style_guide#page_components)
- [Feature status macros](/en-US/docs/MDN/Writing_guidelines/Page_structures/Feature_status)
