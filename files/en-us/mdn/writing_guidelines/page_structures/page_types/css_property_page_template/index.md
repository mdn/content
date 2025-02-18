---
title: CSS property page template
slug: MDN/Writing_guidelines/Page_structures/Page_types/CSS_property_page_template
page-type: mdn-writing-guide
sidebar: mdnsidebar
---

> **Note:** _Remove this note block before publishing._
>
> ---
>
> **Page front matter:**
>
> The front matter at the top of the page is used to define "page metadata".
> The values should be updated appropriately for the particular property.
>
> ```md
> ---
> title: NameOfTheProperty
> slug: Web/CSS/NameOfTheProperty
> page-type: css-property OR css-shorthand-property
> status:
>   - experimental
>   - deprecated
>   - non-standard
> browser-compat: css.properties.NameOfTheProperty
> ---
> ```
>
> - **title**
>   - : The `title` value is displayed at the top of the page. The title format is _NameOfTheProperty_.
>     For example, the [`background-color`](/en-US/docs/Web/CSS/background-color) property has a title of _background-color_.
> - **slug**
>   - : The `slug` value is the end of the URL path after `https://developer.mozilla.org/en-US/docs/`. This will be formatted as `Web/CSS/NameOfTheProperty`.
>     For example, the slug for the [`background-color`](/en-US/docs/Web/CSS/background-color) property is `Web/CSS/background-color`. For a multi-word component such as `Getting_started` in a slug, the slug should use an underscore as in `/en-US/docs/Learn_web_development/Core/Structuring_content`.
> - **page-type**
>   - : The `page-type` value for CSS properties is `css-property`. For a shorthand CSS property, the value is `css-shorthand-property`. For example, the `page-type` value for the [animation](/en-US/docs/Web/CSS/animation) property is `css-shorthand-property` because it is a shorthand property, whereas the `page-type` value for the [animation-delay](/en-US/docs/Web/CSS/animation-delay) property is `css-property`.
> - **status**
>   - : Flags describing the status of this feature. An array which may contain one or more of the following: `experimental`, `deprecated`, `non-standard`. This key should not be set manually: it is set automatically based on values in the browser compatibility data for the feature. See ["How to add or update feature statuses"](/en-US/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_to_add_or_update_feature_statuses).
> - **browser-compat**
>   - : Replace the placeholder value <code>css.properties.NameOfTheProperty</code> with the query string for the property in the [Browser compat data repo](https://github.com/mdn/browser-compat-data/tree/main/css/properties). Check the _Other macros in the page_ section of this note block to see how this key-value is used to generate content for the _Specifications_ and _Browser compatibility_ sections.
>
> ---
>
> **Top-of-the-page macros**
>
> A number of macro calls appear at the top of the content section (immediately below the page front matter).
> These macros are automatically added by the toolchain (there is no need to add/remove):
>
> - `\{{SeeCompatTable}}`: This macro generates an **Experimental** banner, which indicates that the technology is [experimental](/en-US/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental).
>   If the technology is experimental and is hidden behind a preference in Firefox, you should also fill in an entry for it in the [Experimental features in Firefox](/en-US/docs/Mozilla/Firefox/Experimental_features) page.
> - `\{{Deprecated_Header}}`: This macro generates a **Deprecated** banner, which indicates that the use of the technology is [discouraged](/en-US/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated).
> - `\{{Non-standard_Header}}` — this generates a **Non-standard** banner that indicates that the feature is not part of any specification.
>
> You should update or delete the following macros according to the advice below:
>
> - `\{{CSSRef}}`: This macro must be present on every CSS property page. It generates a suitable CSS sidebar, depending on the tags included on the page.
>   Remember to remove the `\{{MDNSidebar}}` macro when you use this template.
>
> Do not provide status header macros manually. Refer to the section ["How to add or update feature statuses"](/en-US/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_to_add_or_update_feature_statuses) to add these statuses to the page.
>
> Samples of the **Experimental**, **Deprecated**, and **Non-standard** banners are shown right after this note block.
>
> ---
>
> **Other macros in the page**
>
> - Formal syntax section: The content for the _Formal syntax_ section is generated using the `\{{CSSSyntax}}` macro. This macro fetches data from the specifications using the [@webref/css npm package](https://www.npmjs.com/package/@webref/css).
> - Formal definition section: The content for the _Formal definition_ section is generated using the `\{{CSSInfo}}` macro. For this section to have data, you must ensure an appropriate entry has been filled in for the corresponding property in the [properties.json](https://github.com/mdn/data/blob/main/css/properties.json) data file in the `mdn/data` repository. See the [Properties](https://github.com/mdn/data/blob/main/css/properties.md) page for more information.
> - Specifications and Browser compatibility sections: The build tool automatically uses the `browser-compat` key-value pair from the page front matter to insert data into the _Specifications_ and _Browser compatibility_ sections (replacing the `\{{Specifications}}` and `\{{Compat}}` macros in those sections, respectively).
>
>   Note that you may first need to create/update an entry for the property and its specification in our <a href="https://github.com/mdn/browser-compat-data">Browser compat data repo</a>.
>   See our [compatibility tables guide](/en-US/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables) for information on adding or editing entries.
>
> _Remember to remove this note block before publishing._

{{CSSRef}}{{SeeCompatTable}}{{Deprecated_Header}}{{Non-standard_Header}}

Begin the content on the page with an introductory paragraph, which names the property and says what it does.
This should ideally be one or two short sentences.

## Try it

_This title is auto-generated by the macro `\{{EmbedInteractiveExample}}`._

This section is for interactive examples added using the `\{{EmbedInteractiveExample}}` macro. See the [Interactive examples](/en-US/docs/MDN/Writing_guidelines/Page_structures/Code_examples#interactive_examples) section in our _Writing guidelines_ for more information.

## Constituent properties

Add this section only for shorthand properties, such as [animation](/en-US/docs/Web/CSS/animation), to list all the related longhand properties.

## Syntax

Include the common use cases as a code block and describe the component subvalues that make up a complete value.

```css
/* Insert code block showing common use cases */
/* or categories of values */
```

### Values

Include one term and definition for each subvalue.

- `subvalue1`
  - : Include a description of the subvalue, its data type, and what it represents.
- `subvalue2`
  - : Include a description of the subvalue, its data type, and what it represents.

## Description

This is an optional section to include a description of the property and explain how it works. Use this section to explain related terms and add use cases for the property.

## Formal definition

`\{{CSSInfo}}`

_To use this macro, remove the backticks and backslash in the markdown file._

## Formal syntax

`\{{CSSSyntax}}`

_To use this macro, remove the backticks and backslash in the markdown file._

## Accessibility

This is an optional section. Include accessibility guidelines, best practices, and potential concerns that developers should be aware of while using this property. You can also include workarounds or solutions where applicable.

## Examples

Note that we use the plural "Examples" even if the page only contains one example.

### Add a descriptive heading

Each example must have an H3 heading (`###`) naming the example. The heading should be descriptive of what the example is doing. For example, "A simple example" does not say anything about the example and therefore, not a good heading. The heading should be concise. For a longer description, use the paragraph after the heading.

See our guide on how to add [code examples](/en-US/docs/MDN/Writing_guidelines/Page_structures/Code_examples) for more information.

> [!NOTE]
> Sometimes you will want to link to examples given on another page.
>
> **Scenario 1:** If you have some examples on this page and some more examples on another page:
>
> Include an H3 heading (`###`) for each example on this page and then a final H3 heading (`###`) with the text "More examples", under which you can link to the examples on other pages. For example:
>
> ```md
> ## Examples
>
> ### Using the fetch API
>
> Example of Fetch
>
> ### More examples
>
> Links to more examples on other pages
> ```
>
> **Scenario 2:** If you _only_ have examples on another page and none on this page:
>
> Don't add any H3 headings; just add the links directly under the H2 heading "Examples". For example:
>
> ```md
> ## Examples
>
> For examples of this API, see [the page on fetch()](https://example.org/).
> ```

## Specifications

`\{{Specifications}}`

_To use this macro, remove the backticks and backslash in the markdown file._

## Browser compatibility

`\{{Compat}}`

_To use this macro, remove the backticks and backslash in the markdown file._

## See also

Include links to reference pages and guides related to the current property. For more guidelines, see the [See also section](/en-US/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) in the _Writing style guide_.

- link1
- link2
- external_link (year)
