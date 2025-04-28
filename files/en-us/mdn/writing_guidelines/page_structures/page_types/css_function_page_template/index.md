---
title: CSS function page template
slug: MDN/Writing_guidelines/Page_structures/Page_types/CSS_function_page_template
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
> The values should be updated appropriately for the particular function. Note the presence (or absence) of parenthesis.
>
> ```md
> ---
> title: NameOfTheFunction()
> slug: Web/CSS/NameOfTheFunction
> page-type: css-function
> status:
>   - deprecated
>   - experimental
>   - non-standard
> browser-compat: css.types.NameOfTheFunction
> sidebar: cssref
> ---
> ```
>
> - **title**
>   - : The `title` value is displayed at the top of the page. The title format is _NameOfTheFunction()_.
>     For example, the [`pow()`](/en-US/docs/Web/CSS/pow) function has a title of _pow()_.
> - **slug**
>   - : The `slug` value is the end of the URL path after `https://developer.mozilla.org/en-US/docs/`. This will be formatted as `Web/CSS/NameOfTheFunction`. Note the absence of parentheses in the slug.
>     For example, the slug for the [`pow()`](/en-US/docs/Web/CSS/pow) function is `Web/CSS/pow`.
> - **page-type**
>   - : The `page-type` value for CSS functions is `css-function`.
> - **status**
>   - : Flags describing the status of this feature. An array which may contain one or more of the following: `experimental`, `deprecated`, `non-standard`. This key should not be set manually: it is set automatically based on values in the browser compatibility data for the feature. See ["How feature statuses are added or updated"](/en-US/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).
> - **browser-compat**
>   - : Replace the placeholder value `css.types.NameOfTheFunction` with the query string for the function in the [Browser compat data repo](https://github.com/mdn/browser-compat-data/tree/main/css/types). Check the _Other macros in the page_ section of this note block to see how this key-value is used to generate content for the _Specifications_ and _Browser compatibility_ sections.
> - **sidebar**
>   - : This is `cssref` for all CSS guide and reference pages.
>     See [Page structures: Sidebars](/en-US/docs/MDN/Writing_guidelines/Page_structures/Sidebars) for details.
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
> Do not provide status header macros manually. Refer to the section ["How feature statuses are added or updated"](/en-US/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated) to add these statuses to the page.
>
> Samples of the **Experimental**, **Deprecated**, and **Non-standard** banners are shown right after this note block.
>
> ---
>
> **Other macros in the page**
>
> - Formal syntax section: The content for the _Formal syntax_ section is generated using the `\{{CSSSyntax}}` macro. This macro fetches data from the specifications using the [@webref/css npm package](https://www.npmjs.com/package/@webref/css).
> - Specifications and Browser compatibility sections: The build tool automatically uses the `browser-compat` key-value pair from the page front matter to insert data into the _Specifications_ and _Browser compatibility_ sections (replacing the `\{{Specifications}}` and `\{{Compat}}` macros in those sections, respectively).
>
>   Note that you may first need to create/update an entry for the function and its specification in our <a href="https://github.com/mdn/browser-compat-data">Browser compat data repo</a>.
>   See our [compatibility tables guide](/en-US/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables) for information on adding or editing entries.
>
> _Remember to remove this note block before publishing._

{{SeeCompatTable}}{{Deprecated_Header}}{{Non-standard_Header}}

Begin the content on the page with an introductory paragraph, which names the function and says what it does.
This should ideally be one or two short sentences.

## Try it

This section is generated by the `InteractiveExample` macro.
This includes the "Try it" section title and the code editor.
See the [Interactive examples](/en-US/docs/MDN/Writing_guidelines/Page_structures/Code_examples#interactive_examples) section in our _Writing guidelines_ for more information.

## Syntax

Include a CSS code block to show the main use cases of the syntax, including examples of parameters that the function can accept. Only include the function itself, not a complete declaration in which it occurs. For example, use `minmax(200px, 1fr)`, not `grid-template-columns: minmax(min-content, 300px)`.

Don't end the syntax lines with semicolons: this should emphasize that we are not showing complete valid CSS code here, just the syntax usage.

Show all the invocation patterns that the function can take. Preceding all such cases, add a comment to describe the use case and another comment to name the parameters and highlight syntax punctuation and the order of parameters. The parameter names in the comment should match the parameters listed in the "Parameters" section.

The comment showing each invocation pattern should be followed by exactly one empty line.

For example:

```css
/* Without a fallback */
/* var( <custom-property-name> ) */
var(--custom-prop)

/* With an empty fallback */
/* var( <custom-property-name> , ) */
var(--custom-prop,)

/* With a fallback value */
/* var( <custom-property-name> , <declaration-value> ) */
var(--custom-prop, initial)
var(--custom-prop, #FF0000)
var(--my-background, linear-gradient(transparent, aqua), pink)
var(--custom-prop, var(--default-value))
var(--custom-prop, var(--default-value, red))
```

### Parameters

List the parameters that the function can accept as a {{htmlelement("dl")}}. List them in the order that they appear in the _Formal syntax_ section. Indicate if a parameter is optional using the `optional_inline` badge.
Include one term and definition for each parameter.

- `<custom-property-name>`
  - : Include a description of the parameter, its data type, and its default value if any.
- `<declaration-value>` {{optional_inline}}
  - : Include a description of the parameter, its data type, and its default value if any.

> [!WARNING]
> Do not add [inline status macros](/en-US/docs/MDN/Writing_guidelines/Page_structures/Feature_status#feature_status_icons_in_definition_lists) on CSS pages.

### Return value

Describe the value returned by the function. Begin the description with the word "Returns"; for example, "Returns a `<number>` or `<dimension>`."

## Description

This section is optional but recommended. It contains a description of the function and explains how it works. Use this section to explain related terms and add use cases for the function.

## Formal syntax

Not all functions have formal syntax: if a function doesn't, omit this whole section.

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
> ### Using the polygon() function
>
> Example of polygon()
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
> For examples of this function, see [the page on basic-shape](https://example.org/).
> ```

## Specifications

`\{{Specifications}}`

_To use this macro, remove the backticks and backslash in the markdown file._

## Browser compatibility

`\{{Compat}}`

_To use this macro, remove the backticks and backslash in the markdown file._

## See also

Include links to reference pages and guides related to the current function. For more guidelines, see the [See also section](/en-US/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) in the _Writing style guide_.

- link1
- link2
- external_link (year)
