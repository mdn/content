---
title: Quicklinks
slug: MDN/Writing_guidelines/Page_structures/Quicklinks
page-type: mdn-writing-guide
---

{{MDNSidebar}}

MDN supports adding quicklinks to pages. **Quicklinks** are boxes containing a potentially hierarchical list of links to other pages on MDN or off-site. This article describes how to create quicklinks boxes.

When a quicklink is included, the server creates a section of content containing an unordered list of links.

The contents of the section depend on if the quicklinks include links based on a directory's structure, a page type, or a list of predefined pages hard-coded in Yari, and where the quicklinks macro is located.

You can and often **should** use macros to generate quicklinks.
Any time you need to use the same set of quicklinks on more than one page, you should turn them into a macro.

### Quicklink sidebars

Every page has a sidebar. These sidebars are created by quicklink macros added after the frontmatter and before the content on every page. Here are a few, with what they do:

- `\{{CSSRef}}`
  - : Present on every CSS page, it generates different CSS sidebars depending on tags, like "properties", "selectors", "at-rules", "descriptors", etc., included in the page.

- `\{{ListSubpagesForSidebar(<parameters>)}}`

  - : Inserts a tree of subpages of the slug of the pages specified as the first parameter. Include two parameters, with the second being `true`, to display the links as plain text instead of like code. Include a third parameter, set to `true`, to include the parent page at the top of the list with the link text "Overview".

- `\{{DefaultAPISidebar("<API_Title>")}}`
  - : The API sidebar displayed for overview pages; the single parameter is the name of the API group in GroupData.

- Other sidebar macros
  - : Other sidebar generating macro calls include `\{{GlossarySidebar}}`, `\{{LearnSidebar}}`,`\{{HTMLSidebar}}`, `\{{HTTPSidebar}}`, `\{{PWASidebar}}`, etc.

The appropriate macro to use depends on the page type and is listed in the template for each page type.

#### Including extra content in a sidebar

To include a sidebar with additional content and not be limited to the macro's output, include the macro at the end of the page (instead of right after the frontmatter) and nest the macro in a {{htmlelement("section")}} element with `id="Quick_links"` set. 

For example:

```md
<section id="Quick_links">

1. [**WAI-ARIA roles**](/en-US/docs/Web/Accessibility/ARIA/Roles)

   \{{ListSubpagesForSidebar("/en-US/docs/Web/Accessibility/ARIA/Roles", "true")}}

</section>
```

### Quicklinks in content

- `\{{LandingPageListSubPages()}}`
  - : Inserts a definition list ({{HTMLelement("dl")}}) of the subpages of the current page, with each page's title as the {{HTMLelement("dt")}} term and its SEO summary as the {{HTMLelement("dd")}} term. The optional parameter accepts the slug list of pages to output instead of the subpages of the current page.

There is a [list of commonly used macros](/en-US/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros) which output links in content, including:

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

There are around 100 [available macros](https://github.com/mdn/yari/tree/main/kumascript/macros). Here's are a few standard macros for generating quicklinks and an example of a hardcoded Yari macro list.

- [`CSSRef`](https://github.com/mdn/yari/blob/main/kumascript/macros/CSSRef.ejs)
  - : Builds the standard quicklinks for CSS Reference pages.
- [`HTMLSidebar`](https://github.com/mdn/yari/blob/main/kumascript/macros/HTMLSidebar.ejs)
  - : Builds the standard quicklinks for HTML Reference pages.
- [`QuickLinksWithSubpages`](https://github.com/mdn/yari/blob/main/kumascript/macros/QuickLinksWithSubpages.ejs)
  - : Creates a set of quicklinks using the current page's (or the specified page's) children as the destinations.
    This creates hierarchical lists up to two levels deep.
    The pages' titles are used as the link text and their summaries as tooltips.


### Additional macros

In addition to quicklinks, there are a several other macros that you can include.

#### Page sections

The following macros are included on all reference pages, but are also supported by all page types:

- `\{{Compat}}` / `\{{Compat(&lt;feature>)}}` / `\{{Compat(&lt;feature>, &lt;depth>)}}`
  - : Generates a [compatibility table](/en-US/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables) for the feature passed as the parameter. If no parameter is included, it defaults to the features defined by `browser-compat` in the frontmatter. An optional depth parameter sets how deep sub features should be added to the table. The depth, if omitted, defaults to 1, meaning only the first level of sub feature data from BCD will be included.

- `\{{Specifications}}` / `\{{Specifications(&lt;feature>)}}`
  - : Includes the specification for the feature specified in the parameter. If no parameter is passed, the specification listed is defined by the value for `spec_urls` in the frontmatter, if present, or from the specification listed in browser compatibility data defined by `browser-compat` in the frontmatter. The specification is rendered as an external link.

### Banner macros

- `\{{SeeCompatTable}}`
  - : Generates a **This is an experimental technology** banner indicating the technology is [experimental](/en-US/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) with a link to the [Browser compatibility](/en-US/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables) that every [reference page](/en-US/docs/MDN/Writing_guidelines/Page_structures/Page_types) contains.

- `\{{Deprecated_Header}}` 
  - : Generates a **Deprecated** banner indicating the technology is [deprecated](/en-US/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated) and should not be used.

- `\{{SecureContext_Header}}`
  - : Generates a **Secure context** banner indicating a [secure context](/en-US/docs/Web/Security/Secure_Contexts) is required for the feature.

For more information, see the [banners and notices guide](/en-US/docs/MDN/Writing_guidelines/Page_structures/Banners_and_notices)

## See also

- [Using macros](/en-US/docs/MDN/Writing_guidelines/Page_structures/Macros)
- [Macros](https://github.com/mdn/yari/tree/main/kumascript/macros) on Github
- [Commonly used macros](/en-US/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros)
