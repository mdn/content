---
title: JavaScript function page template
slug: MDN/Writing_guidelines/Page_structures/Page_types/JavaScript_function_page_template
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
> The front matter at the top of the page is used to define "page metadata". The values should be updated appropriately for the particular function.
>
> ```md
> ---
> title: nameOfFunction()
> slug: Web/JavaScript/Reference/Global_Objects/nameOfFunction
> page-type: javascript-function
> status:
>   - deprecated
>   - experimental
>   - non-standard
> browser-compat: javascript.builtins.nameOfFunction
> sidebar: jssidebar
> ---
> ```
>
> - **title**
>   - : Title heading displayed at the top of the page. Format as `nameOfFunction()`. For example, the [`parseFloat()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseFloat) function has a _title_ of `parseFloat()`.
> - **slug**
>   - : The end of the URL path after `https://developer.mozilla.org/en-US/docs/`. This should be formatted like `Web/JavaScript/Reference/Global_Objects/nameOfFunction`.
> - **page-type**
>   - : The `page-type` key for JavaScript functions is `javascript-function`.
> - **status**
>   - : Flags describing the status of this feature. An array which may contain one or more of the following: `experimental`, `deprecated`, `non-standard`. This key should not be set manually: it is set automatically based on values in the browser compatibility data for the feature. See ["How feature statuses are added or updated"](/en-US/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).
> - **browser-compat**
>   - : Replace the placeholder value `javascript.builtins.nameOfFunction` with the query string for the function in the [Browser compat data repo](https://github.com/mdn/browser-compat-data).
>     The toolchain automatically uses the key to populate the compatibility and specification sections (replacing the `\{{Compat}}` and `\{{Specifications}}` macros).
>
>     Note that you may first need to create/update an entry for the function in our [Browser compat data repo](https://github.com/mdn/browser-compat-data), and the entry for the API will need to include specification information.
>     See our [guide on how to do this](/en-US/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
> - **sidebar**
>   - : This is `jssidebar` for JavaScript function pages.
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

The **`nameOfFunction()`** function does something. This should ideally be 1 or 2 short sentences. Generally, don't write more than a single paragraph with more than a few sentences: significant detail goes into the description.

Write an [interactive example](/en-US/docs/MDN/Writing_guidelines/Page_structures/Code_examples#interactive_examples) that demonstrates important aspects of the function.

{{InteractiveExample("JavaScript Demo: nameOfFunction()")}}

```js interactive-example
const result = nameOfFunction(1);
console.log(result);
// Expected output: 42
```

## Syntax

Fill in a syntax box, according to the guidance in our [syntax sections](/en-US/docs/MDN/Writing_guidelines/Page_structures/Syntax_sections) article.

```js-nolint
nameOfFunction(parameter1)
nameOfFunction(parameter1, parameter2)
```

### Parameters

- `parameter1`
  - : Include a brief description of the parameter and what it does here. Include one term and definition for each parameter. If the parameter is not optional, remove the \\{{optional_inline}} macro call.
- `parameter2` {{optional_inline}}
  - : etc.

> [!NOTE]
> This section is mandatory. If there aren't any parameters, put `None.` instead of the definition list.

### Return value

Include a description of the function's return value, including data type and what it represents. For example: "A {{jsxref("Number")}} representing something."

If the function doesn't return anything, just put "None ({{jsxref('undefined')}}).".

If the function returns a promise, use the format "A {{jsxref("Promise")}} asynchronously fulfilled with a {{jsxref("Number")}} representing something". Rejected promises go into the "Exceptions" section.

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown in one of the following cases:
    - Condition 1.
    - Condition 2.
    - etc.
- {{jsxref("RangeError")}}
  - : Throw if...

Be as comprehensive as possible. Generally, don't list exceptions that may be thrown from invoking user code, such as running getters or doing type coercion. Don't list exceptions from type mismatch, such as passing a symbol to a parameter that expects a string, or passing a non-function as a callback.

## Description

Most of the description of the function should go here. Be as comprehensive as possible. Readers should be able to understand the API in its entirety from this section without reading the examples section below. Examples presented in this section, should they be necessary, should be concise and do not have to be real-world-relevant.

## Examples

Note that we use the plural "Examples" even if the page only contains one example.

### A descriptive heading

Each example must have an H3 heading naming the example. The heading should be descriptive of what the example is doing. For example, "A simple example" does not say anything about the example and therefore, not a good heading. The heading should be concise. For a longer description, use the paragraph after the heading. The first example may be called "Using nameOfFunction()".

See our guide on how to add [code examples](/en-US/docs/MDN/Writing_guidelines/Page_structures/Code_examples) for more information.

## Specifications

`\{{Specifications}}`

_To use this macro, remove the backticks and backslash in the markdown file._

## Browser compatibility

`\{{Compat}}`

_To use this macro, remove the backticks and backslash in the markdown file._

## See also

Include links to reference pages and guides related to the current function. For more guidelines, see the [See also section](/en-US/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) in the _Writing style guide_.

- [Polyfill of `nameOfFunction` in `core-js`](https://github.com/zloirock/core-js#anchor)
- [es-shims polyfill of `nameOfFunction`](https://www.npmjs.com/package/es-aggregate-error)
- link1
- link2
- external_link (year)
