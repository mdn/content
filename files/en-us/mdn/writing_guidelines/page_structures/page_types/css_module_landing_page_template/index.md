---
title: CSS module landing page template
slug: MDN/Writing_guidelines/Page_structures/Page_types/CSS_module_landing_page_template
page-type: mdn-writing-guide
sidebar: mdnsidebar
---

> [!NOTE]
> _Remember to remove this note block before publishing._
>
> ---
>
> **Page front matter:**
>
> The front matter at the top of the page defines "page metadata".
> The values should be updated appropriately for the particular module.
>
> ```md
> ---
> title: CSS NameOfTheModule
> slug: Web/CSS/Guides/NameOfTheModule
> page-type: css-module
> spec-urls:
>   - url1
>   - url2
> sidebar: cssref
> ---
> ```
>
> - **title**
>   - : The `title` value is displayed at the top of the page.
>     This is the text "CSS" followed by the name of the module.
>     For example, the title for the [grid layout](/en-US/docs/Web/CSS/Guides/Grid_layout) module landing page is _CSS grid layout_.
> - **slug**
>   - : The `slug` value is the end of the URL path after `https://developer.mozilla.org/en-US/docs/`.
>     This will be formatted as `Web/CSS/Guides/NameOfTheModule`.
>     For example, the slug for the [grid layout](/en-US/docs/Web/CSS/Guides/Grid_layout) module landing page is `Web/CSS/Guides/Grid_layout`.
> - **page-type**
>   - : The `page-type` value for CSS module landing pages is always `css-module`.
> - **spec-urls**
>   - : The `spec-urls` value is a URL of the specification or a bulleted list of the URLs of multiple levels of the same specification in cases where there are multiple versions of a specification, such as levels 1, 2, and 3. Include only the modules that are revisions of a single spec, in descending order. For example, the `spec-urls` key for the [filter effects](/en-US/docs/Web/CSS/Guides/Filter_effects) module landing page is as follows:
>
> ```plain
> spec-urls:
>     - https://drafts.fxtf.org/filter-effects-2/
>     - https://drafts.fxtf.org/filter-effects-1/
> ```
>
> - **sidebar**
>   - : This is `cssref` for all CSS guide and reference pages.
>     See [Page structures: Sidebars](/en-US/docs/MDN/Writing_guidelines/Page_structures/Sidebars) for details.
>
> ---
>
> _Remember to remove this note block before publishing._

Begin the page content with an introductory paragraph that names the module and explains what it does. Briefly provide an overview of the features defined in the specification and, if relevant, describe how they interact with features from related specifications. This description is a quick overview, NOT a tutorial or guide, so keep it brief.

## NameOfTheModule in action

In this section, include an example using `\{{EmbedLiveSample}}` (see [Live examples](/en-US/docs/MDN/Writing_guidelines/Page_structures/Live_samples) for more information) that helps demonstrate the usefulness and power of various properties provided by this module.
The purpose of this section is to demonstrate use cases and to create interest and curiosity in the minds of the readers learning about this module. Keep the code hidden unless it is essential to understanding the use cases (for example, namespacing or nesting).

If relevant, provide a short description of how readers can interact with the example.

## Reference

Create the relevant subsections to list the related properties, functions, data types, and so on. The reference section should include only the features introduced in the single specification. If a feature is in the spec but not supported, mention it in a paragraph under the appropriate header. Related features defined in other specifications go under "related concepts", and NOT in this section.

### Properties

A list of all shorthand and longhand properties provided by the module that are supported in at least one major browser.

Add a paragraph stating the properties introduced by the module that are not yet supported by any browser, if any.

Omit this section if the module does not define any properties.

### At-rules

A list of CSS at-rules provided by the module that are supported in at least one major browser.

Add a paragraph stating the at-rules introduced by the module that are not yet supported by any browser, if any.

Omit this section if the module does not define any at-rules.

### Functions

A list of CSS functions provided by the module that are supported in at least one major browser.

Add a paragraph stating the functions introduced by the module that are not yet supported by any browser, if any.

Omit this section if the module does not define any CSS functions.

### Data types

A list of CSS data types provided by the module that are supported in at least one major browser.

Add a paragraph stating the data types introduced by the module that are not yet supported by any browser, if any.

Omit this section if the module does not define any data types.

### Events

A list of API events provided by the module that are supported in at least one major browser.

Add a paragraph stating the events introduced by the module that are not yet supported by any browser, if any.

Omit this section if the module does not define any events.

### Interfaces

A list of the related API interfaces provided by the module that are supported in at least one major browser.

Add a paragraph stating the interfaces introduced by the module that are not yet supported by any browser, if any.

Omit this section if the module does not define any API interfaces.

### Glossary terms and definitions

List the related glossary terms and other terms defined within the reference pages listed above. Omit this section if there is nothing relevant to include.

## Guides

A definition list of the related guides within the module structure, in order of increasing complexity, followed by related guides from other modules. Only include MDN guides.

- LinkToGuide1
  - : One-sentence description of the guide.
- LinkToGuide2
  - : One-sentence description of the guide.

## Related concepts

List all other properties, data types, glossary terms, etc. that are related to this module.

## Specifications

`\{{Specifications}}`

_To use this macro, remove the backticks and backslash in the markdown file._

## See also

Include links to any other reference pages and other content that is relevant but doesn't fit in the other sections. If there are any relevant external guides worth linking to, place them at the end of the list (not under the "Guides" section, which is limited to MDN guides). Check the [See also](/en-US/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) section in our _Writing style guide_ for more hints and directions.

- link1
- link2
- external_link (year)
