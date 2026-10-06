---
title: JavaScript statement page template
slug: MDN/Writing_guidelines/Page_structures/Page_types/JavaScript_statement_page_template
page-type: mdn-writing-guide
sidebar: mdnsidebar
---

> [!NOTE]
> _Remove this whole explanatory note before publishing_
>
> ---
>
> **Page front matter:**
>
> The front matter at the top of the page is used to define "page metadata". The values should be updated appropriately for the particular statement.
>
> ```md
> ---
> title: statement
> slug: Web/JavaScript/Reference/Statements/statement
> page-type: javascript-statement
> status:
>   - deprecated
>   - experimental
>   - non-standard
> browser-compat: javascript.statements.statement
> sidebar: jssidebar
> ---
> ```
>
> - **title**
>   - : Title heading displayed at the top of the page. Format as `statement`.
> - **slug**
>   - : The end of the URL path after `https://developer.mozilla.org/en-US/docs/`. This will be formatted like `Web/JavaScript/Reference/Statements/statement`.
> - **page-type**
>   - : The `page-type` key for JavaScript statements is `javascript-statement`.
> - **status**
>   - : Flags describing the status of this feature. An array which may contain one or more of the following: `experimental`, `deprecated`, `non-standard`. This key should not be set manually: it is set automatically based on values in the browser compatibility data for the feature. See ["How feature statuses are added or updated"](/en-US/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).
> - **browser-compat**
>   - : Replace the placeholder value `javascript.statements.statement` with the query string for the statement in the [Browser compat data repo](https://github.com/mdn/browser-compat-data).
>     The toolchain automatically uses the key to populate the compatibility and specification sections (replacing the `\{{Compat}}` and `\{{Specifications}}` macros).
>
>     Note that you may first need to create/update an entry for the statement in our [Browser compat data repo](https://github.com/mdn/browser-compat-data), and the entry for the API will need to include specification information.
>     See our [guide on how to do this](/en-US/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
> - **sidebar**
>   - : This is `jssidebar` for JavaScript statement pages.
>     See [Page structures: Sidebars](/en-US/docs/MDN/Writing_guidelines/Page_structures/Sidebars) for details.
>
> ---
>
> **Top-of-page macros**
>
> A number of macro calls appear at the top of the content section (immediately below the page front matter).
>
> These macros are automatically added by the toolchain (there is no need to add/remove):
>
> - `\{{SeeCompatTable}}` — this generates a **This is an experimental technology** banner that indicates the technology is [experimental](/en-US/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental).
>   If it is experimental, and the technology is hidden behind a pref in Firefox, you should also fill in an entry for it in the [Experimental features in Firefox](/en-US/docs/Mozilla/Firefox/Experimental_features) page.
> - `\{{Non-standard_Header}}` — this generates a **Non-standard** banner that indicates that the feature is not part of any specification.
>
> Do not provide status header macros manually. Refer to the section [How feature statuses are added or updated](/en-US/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated) to add these statuses to the page.
>
> Samples of the **Experimental** and **Non-standard** banners are shown right after this note block.
>
> _Remember to remove this whole explanatory note before publishing._

> [!NOTE]
> Remember the single most important principle for writing consistent JavaScript reference pages: **look around**! Many related pages have consistent structures beyond what's required in this template. For example, all proxy handlers, most array methods, etc. Start by looking for existing documentation for similar APIs and copy its structure.

{{SeeCompatTable}}{{Non-standard_Header}}

The **`statement`** statement does something. This should ideally be 1 or 2 short sentences. Generally, don't write more than a single paragraph with more than a few sentences: significant detail goes into the description.

Write an [interactive example](/en-US/docs/MDN/Writing_guidelines/Page_structures/Code_examples#interactive_examples) that demonstrates important aspects of the statement.

{{InteractiveExample("JavaScript Demo: statement")}}

```js interactive-example
let result = "negative";
if (3 > 0) {
  result = "positive";
}
console.log(result);
// Expected output: "positive"
```

## Syntax

Fill in a syntax box, according to the guidance in our [syntax sections](/en-US/docs/MDN/Writing_guidelines/Page_structures/Syntax_sections) article. Show each form of the statement and describe its syntax components directly below the code block. For example, an `if` statement has the following syntax:

```js-nolint
if (condition)
  statement1
else
  statement2
```

- `condition`
  - : Describe the expression and how its value is used.
- `statement1`
  - : Describe the statement or block and when it is executed.
- `statement2`
  - : Describe the statement or block and when it is executed.

## Description

Most of the description of the statement should go here. Explain its control flow, scope, syntax restrictions, and interactions with other statements, as applicable. Be as comprehensive as possible. Readers should be able to understand the statement in its entirety from this section without reading the examples section below. Examples presented in this section, should they be necessary, should be concise and do not have to be real-world-relevant.

## Examples

Note that we use the plural "Examples" even if the page only contains one example.

### A descriptive heading

Each example must have an H3 heading naming the example. The heading should be descriptive of what the example is doing. For example, "A simple example" does not say anything about the example and therefore, not a good heading. The heading should be concise. For a longer description, use the paragraph after the heading. The first example may be called "Using the [statement name] statement".

See our guide on how to add [code examples](/en-US/docs/MDN/Writing_guidelines/Page_structures/Code_examples) for more information.

## Specifications

`\{{Specifications}}`

_To use this macro, remove the backticks and backslash in the markdown file._

## Browser compatibility

`\{{Compat}}`

_To use this macro, remove the backticks and backslash in the markdown file._

## See also

Include links to reference pages and guides related to the current statement. For more guidelines, see the [See also section](/en-US/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) in the _Writing style guide_.

- link1
- link2
- external_link (year)
