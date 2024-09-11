---
title: Link macros
slug: MDN/Writing_guidelines/Page_structures/Links
page-type: mdn-writing-guide
---

{{MDNSidebar}}

MDN provides numerous macros to create always up-to-date links to MDN content. In this guide, you will learn about MDN cross-reference macros that you can use to include a single link to another page or a list of links to all of a document's subpages.

## Lists of links

MDN provides macros that create a list of links:

- [`\{{LandingPageListSubPages}}`](https://github.com/mdn/yari/blob/main/kumascript/macros/LandingPageListSubpages.ejs)

  - : Inserts a definition list ({{HTMLElement("dl")}}) of the subpages of the current page, with each page's title as the {{HTMLElement("dt")}} term and its first paragraph as the {{HTMLElement("dd")}} term.

- [`\{{ListSubpagesForSidebar()}}`](https://github.com/mdn/yari/blob/main/kumascript/macros/ListSubpagesForSidebar.ejs)

  - : When included without parameters, inserts an ordered list of links to the current page's subpages. This macro is most often used within [sidebars](/en-US/docs/MDN/Writing_guidelines/Page_structures/Sidebars) (hence the macro name), where the bullets are not rendered. The first parameter is a slug of the link tree's parent page. The link text is displayed as code. Setting a second parameter to `true` or `1` converts the links to plain text. Setting a third parameter to `true` or `1` adds a link to the slug (parent) page at the top of the list with "Overview" as the link text.

- [`\{{QuickLinksWithSubpages()}}`](https://github.com/mdn/yari/blob/main/kumascript/macros/QuickLinksWithSubpages.ejs)

  - : Creates a set of quicklinks using the current page's (or the specified page's) children as the destinations. This creates hierarchical lists up to two levels deep. The pages' titles are used as the link text and their summaries as tooltips.

### Example link list

To include an ordered list of links that includes this page and its siblings, write the following:

```md
\{{ListSubpagesForSidebar("/en-US/docs/MDN/Writing_guidelines/Page_structures/Macros", 1)}}
```

This produces:

{{ListSubpagesForSidebar("/en-US/docs/MDN/Writing_guidelines/Page_structures/Macros", 1)}}

## Cross-reference links

Some macros create a single link to cross-reference a CSS, JavaScript, SVG, or HTML feature, including attributes, elements, properties, data types, and APIs. The macros that create single links require at least one parameter: the feature being referenced.

These macros are:

- [`\{{CSSxRef("")}}`](https://github.com/mdn/yari/blob/main/kumascript/macros/cssxref.ejs)
- [`\{{DOMxRef("")}}`](https://github.com/mdn/yari/blob/main/kumascript/macros/DOMxRef.ejs)
- [`\{{HTMLElement("")}}`](https://github.com/mdn/yari/blob/main/kumascript/macros/HTMLElement.ejs)
- [`\{{glossary("")}}`](https://github.com/mdn/yari/blob/main/kumascript/macros/Glossary.ejs)
- [`\{{JSxRef("")}}`](https://github.com/mdn/yari/blob/main/kumascript/macros/jsxref.ejs)
- [`\{{SVGAttr("")}}`](https://github.com/mdn/yari/blob/main/kumascript/macros/SVGAttr.ejs)
- [`\{{SVGElement("")}}`](https://github.com/mdn/yari/blob/main/kumascript/macros/SVGElement.ejs)
- [`\{{HTTPMethod("")}}`](https://github.com/mdn/yari/blob/main/kumascript/macros/HTTPMethod.ejs)
- [`\{{HTTPStatus("")}}`](https://github.com/mdn/yari/blob/main/kumascript/macros/HTTPStatus.ejs)

The first parameter of each of these macros is the last section of the slug of the document being referenced. For example, for HTML Elements, include `\{{HTMLElement("")}}` with the part of the slug that comes after `Web/HTML/Element/` in the slug being the first parameter. With `\{{CSSxRef("")}}`, add the part of the slug that comes after `Web/CSS/` in the slug. The link will go to this page.

By default, the text displayed is the linked resource as written in the first parameter, in angle brackets for the case of `\{{HTMLElement()}}`. This may not be what you want. For example, the slug for the range input type is `Web/HTML/Element/input/range`. Including `\{{HTMLElement("input/range")}}` produces "{{HTMLElement("input/range")}}". That is not what you want. All the macros accept additional parameters, so you can provide the text you want to display.

The second parameter, if present, provides the link text. In the input range case, we would write `\{{HTMLElement("input/range", "<code>&lt;input type=&quot;range&quot;&gt;</code>")}}` which produces "{{HTMLElement("input/range", "<code>&lt;input type=&quot;range&quot;&gt;</code>")}}". This particular macro removes the {{htmlelement("code")}} and angle brackets when the second parameter includes a space, so we added the brackets and code tags.

Each macro is different!

To prevent HTML code semantics and CSS code styling, some cross-reference macros include a parameter with the `"nocode"` to disable this styling.

For example, `\{{CSSxRef("background-color")}}` creates the code link "{{CSSxRef("background-color")}}" and `\{{domxref("CSS.supports_static", "check support", "", "nocode")}}` creates the plain text link "{{domxref("CSS.supports_static", "check support", "", "nocode")}}".

Make sure to look at the source code to understand how the macro you are using works and to understand the various parameters; while the parameters are generally well documented, exceptions like "don't render as code if the second parameter includes a space" that we saw in the `\{{HTMLElement("")}}` macro is in the code but not otherwise documented.

To learn which parameters each macro supports and the order of parameters for each macro, the macro's source file, linked above, includes documentation. There is a [list of commonly used macros](/en-US/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros), each of which outputs links in the main content area of the page.

## See also

- [Using macros](/en-US/docs/MDN/Writing_guidelines/Page_structures/Macros)
- [Macros](https://github.com/mdn/yari/tree/main/kumascript/macros) on GitHub
- [Commonly used macros](/en-US/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros), including BCD macros ( `\{{Compat}}`, `\{{Compat(&lt;feature>)}}`, and `\{{Compat(&lt;feature>, &lt;depth>)}}`) and specification macros (`\{{Specifications}}` / `\{{Specifications(&lt;feature>)}}`)
- [Banners and notices guide](/en-US/docs/MDN/Writing_guidelines/Page_structures/Banners_and_notices) including the `\{{SeeCompatTable}}`, `\{{Deprecated_Header}}`, and `\{{SecureContext_Header}}` macros.
