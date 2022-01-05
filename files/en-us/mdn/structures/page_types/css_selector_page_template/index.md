---
title: CSS selector page template
slug: MDN/Structures/Page_types/CSS_selector_page_template
tags:
  - CSS
  - Reference
  - Selector
  - Template
browser-compat: css.selectors.NameOfTheSelector
---
{{MDNSidebar}}

> **Note:** _Remove this whole explanatory note before publishing_
>
> ---
>
> **Page front matter:**
>
> The frontmatter at the top of the page is used to define "page metadata".
> The values should be updated appropriately for the particular selector.
>
> ```
> ---
> title: :NameOfTheSelector
> slug: Web/CSS/:NameOfTheSelector
> tags:
>   - CSS
>   - Reference
>   - Selector
>   - NameOfTheSelector
>   - Experimental
>   - Deprecated
> browser-compat: css.selectors.NameOfTheSelector
> ---
> ```
> - **title**
>   - : Title heading displayed at top of page. Format as _:NameOfTheSelector_.
>       For example, the [`:hover`](/en-US/docs/Web/CSS/:hover) selector has a title of _:hover_.
> - **slug**
>   - : The end of the URL path after `https://developer.mozilla.org/en-US/docs/`). This will be formatted like `Web/CSS/:NameOfTheSelector`.
>       For example, the the [`:hover`](/en-US/docs/Web/CSS/:hover) selector slug is `Web/CSS/:hover`.
> - **tags**
>   - : Always include the following tags: **CSS**, **Reference**, _NameOfTheSelector_ (e.g. **:hover**).
>
>       Include the following tags as appropriate:
>       - Type of selector: **Layout**, **Basic Selectors**, **Combinators**, **Pseudo-classes**, **Pseudo-elements**
>       - Technology status: **Experimental** (if the technology is [experimental](/en-US/docs/MDN/Guidelines/Conventions_definitions#experimental)), **Deprecated** (if it is [deprecated](/en-US/docs/MDN/Guidelines/Conventions_definitions#deprecated_and_obsolete)).
>       - Any other tags that represent terms people might search for related to the technology.
> - **browser-compat**
>   - : Replace the placeholder value <code>css.selectors.NameOfTheSelector</code> with the query string for the selector in the [Browser compat data repo](https://github.com/mdn/browser-compat-data).
>       The toolchain automatically uses the key to populate the compatibility and specifications sections (replacing the `\{{Compat}}` and `\{{Specifications}}` macros in those sections, respectively).
>
>       Note that you may first need to create/update an entry for the selector and its specification in our <a href="https://github.com/mdn/browser-compat-data">Browser compat data repo</a>.
>       See our [guide on how to do this](/en-US/docs/MDN/Structures/Compatibility_tables).
>
> ---
>
> **Top-of-page macros**
>
> A number of macro calls appear at the top of the content section (immediately below the page frontmatter).
> You should update or delete them according to the advice below:
> - `\{{SeeCompatTable}}` — this generates a **This is an experimental technology** banner that indicates the technology is [experimental](/en-US/docs/MDN/Guidelines/Conventions_definitions#experimental)).
>   If the technology you are documenting is not experimental, you can remove this.
>   If it is experimental, and the technology is hidden behind a pref in Firefox, you should also fill in an entry for it in the [Experimental features in Firefox](/en-US/docs/Mozilla/Firefox/Experimental_features) page.
> - `\{{Deprecated_Header}}` — this generates a **Deprecated** banner that indicates that use of the technology is [discouraged](/en-US/docs/MDN/Guidelines/Conventions_definitions#deprecated_and_obsolete).
>   If it isn't, then you can remove the macro call.
> - `\{{CSSRef}}` — this must be present on every CSS selector page. It generates a suitable CSS sidebar, depending on what tags are included on the page.
>   Remember to remove the `\{{MDNSidebar}}` macro when you copy this page.
>
> ---
>
> **Syntax section (`\{{CSSSyntax}}`)**
>
> The content of the Syntax section is generated using the `\{{CSSSyntax}}` macro.
> For these to populate you must ensure an appropriate entry has been filled in for the selector in our [selectors.json](https://github.com/mdn/data/blob/master/css/selectors.json) data file.
> See [selectors.md](https://github.com/mdn/data/blob/master/css/selectors.md) for more information.
>
> _Remember to remove this whole explanatory note before publishing_


{{CSSRef}}{{SeeCompatTable}}{{Deprecated_Header}}

The summary paragraph — start by naming the selector and saying what it does. This should ideally be 1 or 2 short sentences.

```css
/* Insert code block showing common use cases */
```

## Syntax

{{CSSSyntax}}

## Examples

Fill in a simple example that nicely shows a typical usage of the selector, then perhaps some more complex examples (see our guide on how to add [code examples](/en-US/docs/MDN/Structures/Code_examples) for more information).

```css
my code block
```

And/or include a list of links to useful code samples that live elsewhere:

- x
- y
- z

## Accessibility concerns

Optionally, warn of any potential accessibility concerns that exist with using this selector, and how to work around them.
Remove this section if there are none to list.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Include list of
- other links related to
- this Element that might
- be useful