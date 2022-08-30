---
title: CSS property page template
slug: MDN/Writing_guidelines/Page_structures/Page_types/CSS_property_page_template
page-type: mdn-writing-guide
tags:
  - meta
  - writing-guide
browser-compat: css.properties.NameOfTheProperty
---
{{MDNSidebar}}

> **Note:** _Remove this whole explanatory note before publishing_
>
> ---
>
> **Page front matter:**
>
> The frontmatter at the top of the page is used to define "page metadata".
> The values should be updated appropriately for the particular property.
>
> ```md
> ---
> title: NameOfTheProperty
> slug: Web/CSS/NameOfTheProperty
> tags:
>   - CSS
>   - Reference
>   - CSS Property
>   - NameOfTheProperty
>   - Experimental
>   - Deprecated
> browser-compat: css.properties.NameOfTheProperty
> ---
> ```
>
> - **title**
>   - : Title heading displayed at top of page. Format as _NameOfTheProperty_.
>     For example, the [`background-color`](/en-US/docs/Web/CSS/background-color) property has a title of _background-color_.
> - **slug**
>   - : The end of the URL path after `https://developer.mozilla.org/en-US/docs/`). This will be formatted like `Web/CSS/NameOfTheProperty`.
>     For example, the [`background-color`](/en-US/docs/Web/CSS/background-color) property slug is `Web/CSS/background-color`.
> - **tags**
>   - : Always include the following tags: **CSS**, **Reference**, **CSS Property**, _NameOfTheProperty_ (e.g. **background-color**).
>
>     Include the following tags as appropriate:
>     - Category of property: **Layout**, **Graphics**, **CSS Background**, **CSS Colors**, _other tags as appropriate_
>     - Technology status: **Experimental** (if the technology is [experimental](/en-US/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental)), **Deprecated** (if it is [deprecated](/en-US/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated_and_obsolete)).
>     - Any other tags that represent terms people might search for related to the technology.
> - **browser-compat**
>   - : Replace the placeholder value <code>css.properties.NameOfTheProperty</code> with the query string for the property in the [Browser compat data repo](https://github.com/mdn/browser-compat-data).
>     The toolchain automatically uses the key to populate the compatibility and specifications sections (replacing the `\{{Compat}}` and `\{{Specifications}}` macros in those sections, respectively).
>
>     Note that you may first need to create/update an entry for the property and its specification in our <a href="https://github.com/mdn/browser-compat-data">Browser compat data repo</a>.
>     See our [guide on how to do this](/en-US/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
>
> ---
>
> **Top-of-page macros**
>
> A number of macro calls appear at the top of the content section (immediately below the page frontmatter).
> You should update or delete them according to the advice below:
>
> - `\{{SeeCompatTable}}` — this generates a **This is an experimental technology** banner that indicates the technology is [experimental](/en-US/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental).
>   If the technology you are documenting is not experimental, you can remove this.
>   If it is experimental, and the technology is hidden behind a pref in Firefox, you should also fill in an entry for it in the [Experimental features in Firefox](/en-US/docs/Mozilla/Firefox/Experimental_features) page.
> - `\{{Deprecated_Header}}` — this generates a **Deprecated** banner that indicates that use of the technology is [discouraged](/en-US/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated_and_obsolete).
>   If it isn't, then you can remove the macro call.
> - `\{{CSSRef}}` — this must be present on every CSS property page. It generates a suitable CSS sidebar, depending on what tags are included on the page.
>   Remember to remove the `\{{MDNSidebar}}` macro when you copy this page.
>
> ---
>
> **Formal definition and Formal syntax sections**
>
> The content of the _Formal definition_ and _Formal syntax_ sections is generated in place of `\{{CSSInfo}}` and `\{{CSSSyntax}}` macro, respectively.
> For these to populate you must ensure an appropriate entry has been filled in for the property in our [properties.json](https://github.com/mdn/data/blob/main/css/properties.json) data file.
> See [properties.md](https://github.com/mdn/data/blob/main/css/properties.md) for more information.
>
> _Remember to remove this whole explanatory note before publishing_

{{SeeCompatTable}}{{deprecated_header}}{{CSSRef}}

The summary paragraph — start by naming the property and saying what it does.
This should ideally be 1 or 2 short sentences.

```css
/* Insert code block showing common use cases */
/* or categories of values */
```

## Syntax

Include a description of the property and what component subvalues make up a complete value.

### Values

- {{cssxref("subvalue1")}}
  - : Include a description of the subvalue, what its datatype is, and what it represents. Include one term and definition for each subvalue.
- {{cssxref("subvalue2")}}
  - : etc.

## Formal definition

{{CSSInfo}}

## Formal syntax

{{CSSSyntax}}

## Examples

### A descriptive heading

Each example must have an H3 heading (`###`) naming the example. The heading should be descriptive of what the example is doing. For example, "A simple example" does not say anything about the example and therefore, not a good heading. The heading should be concise. For a longer description, use the paragraph after the heading.

See our guide on how to add [code examples](/en-US/docs/MDN/Writing_guidelines/Page_structures/Code_examples) for more information.

> **Note:** Sometimes you will want to link to examples given on another page.
>
> **Scenario 1:** If you have some examples on this page and some more examples on another page:
>
> Include an H3 heading (`###`) for each example on this page and then a final H3 heading (`###`) with the text "More examples", under which you can link to the examples on other pages. For example:
>
>  ```md
>  ## Examples
>
>  ### Using the fetch API
>  Example of Fetch
>
>  ### More examples
>  Links to more examples on other pages
>  ```
>
> **Scenario 2:** If you _only_ have examples on another page and none on this page:
>
> Don't add any H3 headings; just add the links directly under the H2 heading "Examples". For example:
>
>  ```md
>   ## Examples
>
>   For examples of this API, see [the page on fetch()](https://example.org).
>

## Accessibility concerns

Optionally, warn of any potential accessibility concerns that exist with using this property, and how to work around them. Remove this section if there are none to list.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Include list of
- other links related to
- this Element that might
- be useful
