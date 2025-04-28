---
title: Glossary page template
slug: MDN/Writing_guidelines/Page_structures/Page_types/Glossary_page_template
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
> The values should be updated appropriately for the particular method.
>
> ```md
> ---
> title: Term being defined
> slug: Glossary/Term_being_defined
> page-type: glossary-definition OR glossary-disambiguation
> sidebar: glossarysidebar
> ---
> ```
>
> - **title**
>   - : Title heading displayed at top of page.
>     Format as: `Term being defined`.
> - **slug**
>   - : The end of the URL path after `https://developer.mozilla.org/en-US/docs/`).
>     This will be formatted as snake case of the title: `Glossary/Term_being_defined`.
> - **page-type**
>   - : `glossary-definition` for a definition page or `glossary-disambiguation` for a disambiguation page.
> - **sidebar**
>   - : This is always `glossarysidebar`.
>     See [Page structures: Sidebars](/en-US/docs/MDN/Writing_guidelines/Page_structures/Sidebars) for details.
>
> ---
>
> _Remember to remove this whole explanatory note before publishing_

The **TermBeingDefined** is _(include a concise definition of the term)_.

Include further supporting information as required, but not much — no more than 2 more small paragraphs. Any further detailed information, code examples, tutorials, etc. should go in separate articles.

## See also

Include a list of links pointing to more detailed general and technical information. For example, you can add links to Wikipedia articles, other encyclopedia entries, technical tutorials, and specifications. For guidelines on adding this list of links, see the [See also section](/en-US/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) in the _Writing style guide_.

- link1
- link2
