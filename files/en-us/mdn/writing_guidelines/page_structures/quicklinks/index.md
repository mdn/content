---
title: Quicklinks
slug: MDN/Writing_guidelines/Page_structures/Quicklinks
page-type: mdn-writing-guide
---

{{MDNSidebar}}

MDN supports adding quicklinks to pages. **Quicklinks** are macros that create boxes containing a potentially hierarchical list of links to other pages on MDN or off-site, used in sidebars or in the main content of the page. This article describes how to create the different quicklinks macros and how to add these links to your content.

When a quicklink is included, the server creates a section of content containing an unordered list of links. The links created, where they are displayed, and how they are displayed depend on the macro used and parameters included in the markdown macro call. Some quicklinks include links based on a directory's structure or the page type. Others include a list of predefined pages hard-coded in Yari.

You can and often **should** use macros to generate quicklinks.
Any time you need to use the same set of quicklinks on more than one page, you should turn them into a macro.

### Quicklink sidebars

Every page has a sidebar. These sidebars are created by quicklink macros added after the frontmatter and before the content on every page, or, in some cases, at the end of the markdown file. Here are a few, with what they do:

- `\{{CSSRef}}`

  - : Present on every CSS page, it generates different CSS sidebars depending on tags, like "properties", "selectors", "at-rules", "descriptors", etc., included in the page.

- `\{{ListSubpagesForSidebar(<parameters>)}}`

  - : Inserts a tree of subpages of the slug of the pages specified as the first parameter. Include two parameters, with the second being `true` or `1`, to display the links as plain text instead of like code. Include a third parameter, set to `true` or `1`, to include the parent page at the top of the list with the link text "Overview".

- `\{{DefaultAPISidebar("<API_Title>")}}`

  - : The API sidebar displayed for overview pages; the single parameter is the name of the API group in GroupData.

- Other sidebar macros
  - : Other sidebar generating macro calls include `\{{GlossarySidebar}}`, `\{{LearnSidebar}}`,`\{{HTMLSidebar}}`, `\{{HTTPSidebar}}`, `\{{PWASidebar}}`, etc.

The appropriate macro to use depends on the page type and is listed in the template for each page type.

#### Including extra content in a sidebar

To include a sidebar with additional content (to display content above or below the list of links outputted by a macro), include the macro at the end of the page (instead of right after the frontmatter) and nest the macro in a {{htmlelement("section")}} element with `id="Quick_links"` set.

For example, adding the following at the end of a markdown file will create a side bar containing the links to all the ARIA role pages, preceded by a link to the ARIA roles overview page:

```md
<section id="Quick_links">

1. [**WAI-ARIA roles**](/en-US/docs/Web/Accessibility/ARIA/Roles)

   \{{ListSubpagesForSidebar("/en-US/docs/Web/Accessibility/ARIA/Roles", "true")}}

</section>
```

### Quicklinks in content

- `\{{LandingPageListSubPages()}}`
  - : Inserts a definition list ({{HTMLelement("dl")}}) of the subpages of the current page, with each page's title as the {{HTMLelement("dt")}} term and its SEO summary as the {{HTMLelement("dd")}} term. The optional parameter accepts the slug or the parent page of the directory of pages to output instead of the subpages of the current page.

There is a [list of commonly used macros](/en-US/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros) which output links in content. The macros that create links to a single web feature require at last one parameter: the feature being referenced. The second parameter, if present, provides the link text. By default, these links are displayed in as code in a monospace font. To prevent the code semantics and styling, `"nocode"` can be included as the third parameter.

For example, `\{{CSSxRef("background-color")}}` creates the code link "{{CSSxRef("background-color")}}".

The macros include:

- `\{{CSSxRef("")}}`
- `\{{DOMxRef("")}}`
- `\{{HTMLElement("")}}`
- `\{{JSxRef("")}}`
- `\{{SVGAttr("")}}`
- `\{{SVGElement("")}}`
- `\{{HTTPHeader("")}}`
- `\{{HTTPMethod("")}}`
- `\{{HTTPStatus("")}}`

### Underlying code for MDN macros

There are around 100 [available macros](https://github.com/mdn/yari/tree/main/kumascript/macros). Here are a few standard macros for generating quicklinks and an example of a hardcoded Yari macro list.

- [`CSSRef`](https://github.com/mdn/yari/blob/main/kumascript/macros/CSSRef.ejs)
  - : Builds the standard quicklinks for CSS Reference pages.
- [`HTMLSidebar`](https://github.com/mdn/yari/blob/main/kumascript/macros/HTMLSidebar.ejs)
  - : Builds the standard quicklinks for HTML Reference pages.
- [`QuickLinksWithSubpages`](https://github.com/mdn/yari/blob/main/kumascript/macros/QuickLinksWithSubpages.ejs)
  - : Creates a set of quicklinks using the current page's (or the specified page's) children as the destinations.
    This creates hierarchical lists up to two levels deep.
    The pages' titles are used as the link text and their summaries as tooltips.

## See also

- [Using macros](/en-US/docs/MDN/Writing_guidelines/Page_structures/Macros)
- [Macros](https://github.com/mdn/yari/tree/main/kumascript/macros) on Github
- [Commonly used macros](/en-US/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros), including BCD macros ( `\{{Compat}}`, `\{{Compat(&lt;feature>)}}`, and `\{{Compat(&lt;feature>, &lt;depth>)}}`) and specification macros (`\{{Specifications}}` / `\{{Specifications(&lt;feature>)}}`)
- [Banners and notices guide](/en-US/docs/MDN/Writing_guidelines/Page_structures/Banners_and_notices)including the `\{{SeeCompatTable}}`, `\{{Deprecated_Header}}`, and `\{{SecureContext_Header}}` macros.
