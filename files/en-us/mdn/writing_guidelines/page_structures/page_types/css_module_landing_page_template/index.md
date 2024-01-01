---
title: CSS module landing page template
slug: MDN/Writing_guidelines/Page_structures/Page_types/CSS_module_landing_page_template
page-type: mdn-writing-guide
---

{{MDNSidebar}}

> **Note:** _Remember to remove this note block before publishing._
>
> ---
>
> **Page front matter:**
>
> The front matter at the top of the page is used to define "page metadata".
> The values should be updated appropriately for the particular module.
>
> ```md
> ---
> title: CSS NameOfTheModule
> slug: Web/CSS/CSS_NameOfTheModule
> page-type: css-module
> spec-urls:
>   - url1
>   - url2
> ---
> ```
>
> - **title**
>   - : The `title` value is displayed at the top of the page.
>     This is the text "CSS" followed by the name of the module.
>     For example, the title for the [grid layout](/en-US/docs/Web/CSS/CSS_grid_layout) module landing page is _CSS grid layout_.
> - **slug**
>   - : The `slug` value is the end of the URL path after `https://developer.mozilla.org/en-US/docs/`.
>     This will be formatted as `Web/CSS/CSS_NameOfTheModule`.
>     For example, the slug for the [grid layout](/en-US/docs/Web/CSS/CSS_grid_layout) module landing page is `Web/CSS/CSS_grid_layout`.
> - **page-type**
>   - : The `page-type` value for CSS module landing pages is `css-module`.
> - **spec-urls**
>
>   - : The `spec-urls` value is a URL of the specification. In case there is more than one version of the specification that is relevant, present them in a bulleted list. For example, the value for `spec-urls` key for the [filter effects](/en-US/docs/Web/CSS/CSS_filter_effects) module landing page is:
>
>     ```plain
>     - `https://drafts.fxtf.org/filter-effects-2/`
>     - `https://drafts.fxtf.org/filter-effects-1/`
>     ```
>
> ---
>
> **Top-of-page macros**
>
> The `\{{CSSRef}}` macro call appears at the top of the content section (immediately below the page front matter).
> This macro must be present on every CSS module landing page. It generates a suitable CSS sidebar, depending on the tags included on the page.
> Remove the `\{{MDNSidebar}}` macro when you use this template.
>
> ---
>
> _Remember to remove this note block before publishing._

Begin the content on the page with an introductory paragraph, which names the module and says what it does.
This should ideally be one or two short sentences.

## NameOfTheModule in action

In this section, include an interactive example of the module that helps to demonstrate the usefulness or the power of various properties provided by this module. The purpose of this section is to demonstrate a few use cases and to create interest and curiosity in the mind of the readers learning about this module.

Provide a short description of how readers can interact with the example. Don't go into a lot of detail to explain the example, and don't include code snippets. Add a link to the source code for the example in the [`css-examples`](https://github.com/mdn/css-examples/tree/main/modules) repository. For example, for the filter effects module interactive example, you would say:
"To see the code for this example, [view the source on GitHub](https://github.com/mdn/css-examples/blob/main/modules/filters.html)."

## Reference

Create the relevant subsections to list the related properties, functions, data types, and so on.

### Properties

List of all shorthand and longhand properties provided by the module.

### At-rules

List of CSS at-rules provided by the module. Omit this section if there are no relevant CSS at-rules for this module.

### Functions

List of CSS functions provided by the module. Omit this section if there are no relevant CSS functions for this module.

### Data types

List of CSS data types provided by the module. Omit this section if there are no relevant CSS data types for this module.

### Events

List of API events provided by the module. Omit this section if there are no relevant events for this module.

### Interfaces

List the related API and interfaces provided by the module. Omit this section if there are no relevant API interfaces for this module.

## Guides

- LinkToGuide1
  - : Description of the guide in one or two sentences.
- LinkToGuide2
  - : Description of the guide in one or two sentences.

## Related concepts

List all other properties, data types, or glossary terms that may be relevant or related to this module.

## Specifications

`\{{Specifications}}`

_To use this macro, remove the backticks and backslash in the markdown file._

## See also

Include links to reference pages and guides related to the current property. Check the [See also](/en-US/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) section in our _Writing style guide_ for more hints and directions.

- link1
- link2
- external_link (year)
