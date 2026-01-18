---
title: Link macros
slug: MDN/Writing_guidelines/Page_structures/Links
page-type: mdn-writing-guide
sidebar: mdnsidebar
---

MDN provides numerous macros to create always up-to-date links to MDN content. In this guide, you will learn about MDN cross-reference macros that you can use to include a single link to another page or a list of links to all of a document's subpages.

## Lists of links

MDN provides macros that create a list of links:

- [`\{{SubpagesWithSummaries}}`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/subpages_with_summaries.rs)
  - : Inserts a definition list ({{HTMLElement("dl")}}) of the subpages of the current page, with each page's title as the {{HTMLElement("dt")}} term and its first paragraph as the {{HTMLElement("dd")}} term.

- [`\{{ListSubpagesForSidebar()}}`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/list_subpages_for_sidebar.rs)
  - : When included without parameters, inserts an ordered list of links to the current page's subpages. The first parameter is a slug of the link tree's parent page. The link text is displayed as code. Setting a second parameter to `true` or `1` converts the links to plain text. Setting a third parameter to `true` or `1` adds a link to the slug (parent) page at the top of the list with "Overview" as the link text.

- [`\{{QuickLinksWithSubpages()}}`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/quick_links_with_subpages.rs)
  - : Creates a set of quicklinks using the current page's (or the specified page's) children as the destinations. This creates hierarchical lists up to two levels deep. The pages' titles are used as the link text and their summaries as tooltips.

For example, to include an ordered list of links that includes this page and its siblings, write the following:

```md
\{{ListSubpagesForSidebar("/en-US/docs/MDN/Writing_guidelines/Page_structures/Macros", 1)}}
```

## Cross-reference links

Some macros create a single link to cross-reference a CSS, JavaScript, SVG, or HTML feature, including attributes, elements, properties, data types, and APIs. The macros that create single links require at least one parameter: the feature being referenced.

These macros are:

- [`\{{CSSxRef("")}}`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/links/cssxref.rs)
- [`\{{DOMxRef("")}}`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/links/domxref.rs)
- [`\{{HTMLElement("")}}`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/links/htmlxref.rs)
- [`\{{glossary("")}}`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/glossary.rs)
- [`\{{JSxRef("")}}`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/links/jsxref.rs)
- [`\{{SVGAttr("")}}`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/links/svgattr.rs)
- [`\{{SVGElement("")}}`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/links/svgxref.rs)
- [`\{{HTTPMethod("")}}`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/links/http.rs)
- [`\{{HTTPStatus("")}}`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/links/http.rs)

### Basic usage

For the first required parameter, you derive the feature name from the last section of the slug of the document you want to link to.
For example, to link to the `<select>` element page with the slug `Web/HTML/Reference/Elements/select`, you will write the macro as `\{{HTMLElement("select")}}`.
This will produce the link "{{HTMLElement("select")}}", which is both code formatted as well as includes the angular brackets.
This is because macros add additional feature-specific formatting to the link text.
So you never have to worry about anything more than the feature name itself when using a macro.
This is why using macros to add links is quick and easy.

### Customizing display text

By default, the display text of the link is the first parameter passed to the macro. To show a different text, use the second parameter. For example, `\{{JSxRef("Array")}}` produces {{JSxRef("Array")}}. To display a variation of that text, use `\{{JSxRef("Array", "JavaScript arrays")}}`, which produces {{JSxRef("Array", "JavaScript arrays")}}. You'll notice that the resulting link is code formatted because of the macro's default behavior. Check the section on [Disabling code formatting](#disabling_code_formatting) to see how to skip the code styling.

### Linking to nested pages

Some reference features have nested pages for related features. For example, the HTML `<input>` element has multiple nested pages for different input types, such as `Web/HTML/Reference/Elements/input/range` for the range input type.

Passing the path info to the macro in the first parameter as in `\{{HTMLElement("input/range")}}` produces the link as "{{HTMLElement("input/range")}}", which is not what you want. Use the second parameter to show a different link text. So for a link to the range input type, we would write the macro as `\{{HTMLElement("input/range", "<code>&lt;input type=&quot;range&quot;&gt;<code>")}}` to produce "{{HTMLElement("input/range", "<code>&lt;input type=&quot;range&quot;&gt;</code>")}}". (Note that if the second parameter includes a space, like the one between `input` and `type` here, this macro removes the code formatting; so we've added the {{HTMLElement("code")}} tags explicitly.)

### Using `CSSxRef` with the CSS reference

Each macro is slightly different.

The `CSSxRef` macro automatically determines the correct path from the feature name you provide as the first parameter to the macro. The macro detects whether a feature is a property, a selector, an at-rule, a function, or a data type, and links to the appropriate document under `Web/CSS/Reference/`.

For example:

- `\{{CSSxRef("cursor")}}` links to the property page at `Web/CSS/Reference/Properties/cursor`.
- `\{{CSSxRef(":hover")}}` links to the pseudo-class page at `Web/CSS/Reference/Selectors/:hover`.
- `\{{CSSxRef("@media")}}` links to the at-rule page at `Web/CSS/Reference/At-rules/@media`.
- `\{{CSSxRef("pow")}}` links to the function page at `Web/CSS/Reference/Values/pow`.
- `\{{CSSxRef("<color>")}}` links to the data type page at `Web/CSS/Reference/Values/color_value`.

Just like the `HTMLElement` macro, the `CSSxRef` macro adds the appropriate styling to the link text based on the type of the feature. So, `\{{CSSxRef("acos")}}` adds angular brackets to the resultant link text as in {{CSSxRef("acos")}}.

A few other behaviors of the `CSSxRef` macro worth noting include:

- Nested pages are handled automatically. For example:
  - `\{{CSSxRef("basic-shape/circle")}}` links to the document at `Web/CSS/Reference/Values/basic-shape/circle` with the link {{CSSxRef("basic-shape/circle")}}.
  - `\{{CSSxRef("animation-timeline/scroll")}}` links to the document at `Web/CSS/Reference/Properties/animation-timeline/scroll` with the link {{CSSxRef("animation-timeline/scroll")}}.
- Some CSS features have the same name. In addition to their directory location, their slugs contain suffixes to reflect their type. For example, the `position` property has the slug `Web/CSS/Reference/Properties/position`, while the `<position>` data type has the slug `Web/CSS/Reference/Values/position_value`.

  The `CSSxRef` macro handles these same-named features automatically. So, `\{{CSSxRef("position")}}` links to the property page with the link {{CSSxRef("position")}}, and `\{{CSSxRef("<position>")}}` links to the data type page with the link {{CSSxRef("&lt;position&gt;")}}.

  Other features with shared names include:
  - `color` property (`Web/CSS/Reference/Properties/color`) vs. `<color>` data type (`Web/CSS/Reference/Values/color_value`)

    **Macro**: `\{{CSSxRef("color")}}` vs. `\{{CSSxRef("<color>")}}`

  - `fit-content()` function (`Web/CSS/Reference/Values/fit-content_function`) vs. `fit-content` keyword (`Web/CSS/Reference/Values/fit-content`)

    **Macro**: `\{{CSSxRef("fit-content_function", "fit-content()")}}` vs. `\{{CSSxRef("fit-content")}}` (this is currently an exception where you need to provide the second parameter to get the correct link text for the function.)

  - `flex` property (`Web/CSS/Reference/Properties/flex`) vs. `<flex>` data type (`Web/CSS/Reference/Values/flex_value`)

    **Macro**: `\{{CSSxRef("flex")}}` vs. `\{{CSSxRef("<flex>")}}`

  - `:host` pseudo-class (`Web/CSS/Reference/Selectors/:host`) vs. `:host()` pseudo-class function (`Web/CSS/Reference/Values/:host_function`)

    **Macro**: `\{{CSSxRef(":host")}}` vs. `\{{CSSxRef(":host()")}}`

  - `overflow` property (`Web/CSS/Reference/Properties/overflow`) vs. `<overflow>` data type (`Web/CSS/Reference/Values/overflow_value`)

    **Macro**: `\{{CSSxRef("overflow")}}` vs. `\{{CSSxRef("<overflow>")}}`

  - `url()` function (`Web/CSS/Reference/Values/url_function`) vs. `<url>` data type (`Web/CSS/Reference/Values/url_value`)

    **Macro**: `\{{CSSxRef("url()")}}` vs. `\{{CSSxRef("<url>")}}`

### Disabling code formatting

The cross-reference macros apply code formatting to the link text by default.
To avoid HTML code semantics and CSS code styling applied by the macros, use the `"nocode"` parameter.

For example, `\{{CSSxRef("background-color")}}` creates the "{{CSSxRef("background-color")}}" link with code styling, while `\{{domxref("CSS.supports_static", "check support", "", "nocode")}}` creates the plain text link "{{domxref("CSS.supports_static", "check support", "", "nocode")}}". Similarly, to create the JavaScript array link without code formatting, we would write `\{{JSxRef("Array", "JavaScript arrays", "", "nocode")}}` to produce "{{JSxRef("Array", "JavaScript arrays", "", "nocode")}}".

## See also

- [Using macros](/en-US/docs/MDN/Writing_guidelines/Page_structures/Macros)
- [Commonly used macros](/en-US/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros), including BCD macros (`\{{Compat}}`) and specification macros (`\{{Specifications}}`).
- [Banners and notices guide](/en-US/docs/MDN/Writing_guidelines/Page_structures/Banners_and_notices) including the `\{{SeeCompatTable}}`, `\{{Deprecated_Header}}`, and `\{{SecureContext_Header}}` macros.
