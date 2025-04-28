---
title: CSS selector page template
slug: MDN/Writing_guidelines/Page_structures/Page_types/CSS_selector_page_template
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
> The values should be updated appropriately for the particular selector.
>
> ```md
> ---
> title: :NameOfTheSelector
> slug: Web/CSS/:NameOfTheSelector
> page-type: css-selector OR css-pseudo-class OR css-pseudo-element OR css-combinator
> status:
>   - deprecated
>   - experimental
>   - non-standard
> browser-compat: css.selectors.NameOfTheSelector
> sidebar: cssref
> ---
> ```
>
> - **title**
>   - : Title heading displayed at the top of the page. Format as _:NameOfTheSelector_.
>     For example, the [`:hover`](/en-US/docs/Web/CSS/:hover) selector has a title of _:hover_.
> - **slug**
>   - : The end of the URL path after `https://developer.mozilla.org/en-US/docs/`). This will be formatted like `Web/CSS/:NameOfTheSelector`.
>     For example, the [`:hover`](/en-US/docs/Web/CSS/:hover) selector slug is `Web/CSS/:hover`.
> - **page-type**
>   - : The `page-type` key for CSS properties is one of `css-selector`, `css-pseudo-class`, or `css-pseudo-element`, depending on whether the selector is a [pseudo-class](/en-US/docs/Web/CSS/Pseudo-classes), a [pseudo-element](/en-US/docs/Web/CSS/Pseudo-elements), a [combinator](/en-US/docs/Web/CSS/CSS_selectors/Selectors_and_combinators#combinators), or a [simple selector](/en-US/docs/Web/CSS/CSS_selectors/Selector_structure#simple_selector).
> - **status**
>   - : Flags describing the status of this feature. An array which may contain one or more of the following: `experimental`, `deprecated`, `non-standard`. This key should not be set manually: it is set automatically based on values in the browser compatibility data for the feature. See ["How feature statuses are added or updated"](/en-US/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).
> - **browser-compat**
>
>   - : Replace the placeholder value <code>css.selectors.NameOfTheSelector</code> with the query string for the selector in the [Browser compat data repo](https://github.com/mdn/browser-compat-data).
>     The toolchain automatically uses the key to populate the compatibility and specifications sections (replacing the `\{{Compat}}` and `\{{Specifications}}` macros in those sections, respectively).
>
>     Note that you may first need to create/update an entry for the selector and its specification in our <a href="https://github.com/mdn/browser-compat-data">Browser compat data repo</a>.
>     See our [guide on how to do this](/en-US/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
>
> - **sidebar**
>   - : This is `cssref` for all CSS guide and reference pages.
>     See [Page structures: Sidebars](/en-US/docs/MDN/Writing_guidelines/Page_structures/Sidebars) for details.
>
> ---
>
> **Top-of-page macros**
>
> A number of macros appear at the top of the content section immediately after the page front matter.
> These macros are automatically added by tooling, so avoid adding or removing them:
>
> - `\{{SeeCompatTable}}` — this generates a **This is an experimental technology** banner that indicates the technology is [experimental](/en-US/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental).
>   If it is experimental, and the technology is hidden behind a pref in Firefox, you should also fill in an entry for it in the [Experimental features in Firefox](/en-US/docs/Mozilla/Firefox/Experimental_features) page.
> - `\{{Deprecated_Header}}` — this generates a **Deprecated** banner that indicates that use of the technology is [discouraged](/en-US/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated).
> - `\{{Non-standard_Header}}` — this generates a **Non-standard** banner that indicates that the feature is not part of any specification.
>
> You should update or delete the following macros according to the advice below:
>
> Do not provide status header macros manually. Refer to the section ["How feature statuses are added or updated"](/en-US/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated) to add these statuses to the page.
>
> Samples of the **Experimental**, **Deprecated**, and **Non-standard** banners are shown right after this note block.
>
> ---
>
> **Syntax section (`\{{CSSSyntax}}`)**
>
> The content of the Syntax section is generated using the `\{{CSSSyntax}}` macro.
> For these to populate, you must ensure an appropriate entry has been filled in for the selector in our [selectors.json](https://github.com/mdn/data/blob/main/css/selectors.json) data file.
> See [selectors.md](https://github.com/mdn/data/blob/main/css/selectors.md) for more information.
>
> _Remember to remove this whole explanatory note before publishing_

{{SeeCompatTable}}{{Deprecated_Header}}{{Non-standard_Header}}

The summary paragraph — start by naming the selector and saying what it does. This should ideally be one or two short sentences.

```css
/* Insert code block showing common use cases */
```

## Syntax

`\{{CSSSyntax}}`

_To use this macro, remove the backticks and backslash in the markdown file._

## Accessibility

This is an optional section. Include accessibility guidelines, best practices, and potential concerns that developers should be aware of while using this property. You can also include workarounds or solutions where applicable.

## Examples

Note that we use the plural "Examples" even if the page only contains one example.

### A descriptive heading

Each example must have an H3 heading (`###`) naming the example. The heading should be descriptive of what the example is doing. For example, "A simple example" does not say anything about the example and therefore, not a good heading. The heading should be concise. For a longer description, use the paragraph after the heading.

See our guide on how to add [code examples](/en-US/docs/MDN/Writing_guidelines/Page_structures/Code_examples) for more information.

> [!NOTE]
> Sometimes, you will want to link to examples given on another page.
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

Include links to reference pages and guides related to the current selector. For more guidelines, see the [See also section](/en-US/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) in the _Writing style guide_.

- link1
- link2
