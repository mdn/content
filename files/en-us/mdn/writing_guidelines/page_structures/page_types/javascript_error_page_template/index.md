---
title: JavaScript error page template
slug: MDN/Writing_guidelines/Page_structures/Page_types/JavaScript_error_page_template
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
> The front matter at the top of the page is used to define "page metadata". The values should be updated appropriately for the particular error.
>
> ```md
> ---
> title: "TypeOfError: message of error"
> slug: Web/JavaScript/Reference/Errors/Message_of_error
> page-type: javascript-error
> sidebar: jssidebar
> ---
> ```
>
> - **title**
>   - : Title heading displayed at the top of the page. Format as `TypeOfError: message of error`. For example, the [SyntaxError: await is only valid in async functions, async generators and modules](/en-US/docs/Web/JavaScript/Reference/Errors/Bad_await) error. The message of the error should reflect the error message in Firefox. If the error message contains a placeholder like an identifier, use an arbitrary name like `x`. Do not use `{0}` like in the Firefox source code.
> - **slug**
>   - : The end of the URL path after `https://developer.mozilla.org/en-US/docs/`. This should be formatted like `Web/JavaScript/Reference/Errors/Message_of_error`. Typically, it can be formed just by replacing spaces with underscores in the title, but sometimes the error message is too long, in which case use discretion and shorten it. Adapting the Firefox error code like `JSMSG_INCOMPATIBLE_PROTO` to `Incompatible_proto` is also acceptable, though less recommended.
> - **page-type**
>   - : The `page-type` key for JavaScript errors is `javascript-error`.
> - **sidebar**
>   - : This is `jssidebar` for JavaScript error pages.
>     See [Page structures: Sidebars](/en-US/docs/MDN/Writing_guidelines/Page_structures/Sidebars) for details.
>
> Note that browser compatibility and specification information is irrelevant for error pages.
>
> _Remember to remove this whole explanatory note before publishing._

> [!NOTE]
> Remember the single most important principle for writing consistent JavaScript reference pages: **look around**! Many related pages have consistent structures beyond what's required in this template. For example, all proxy handlers, most array methods, etc. Start by looking for existing documentation for similar APIs and copy its structure.

The JavaScript exception "message of error" occurs when...

## Message

```plain
TypeOfError: message of error as in V8 (V8-based)
TypeOfError: message of error as in SM (Firefox)
TypeOfError: message of error as in JSC (Safari)
```

If two engines share the same error message, then list them in the following order:

- The first line is always what V8 shows. Other engines may be listed in the parentheses, such as "(V8-based & Safari)".
- The second line is always what Firefox shows, unless it has already been included in the first line. In that case, the second line is what Safari shows.

If an error message in Firefox corresponds to multiple error messages in other engines, then list all corresponding error messages in the other engines in consecutive lines.

```plain
TypeOfError: message of error as in V8 1 (V8-based)
TypeOfError: message of error as in V8 2 (V8-based)
TypeOfError: message of error as in SM (Firefox)
TypeOfError: message of error as in JSC 1 (Safari)
TypeOfError: message of error as in JSC 2 (Safari)
```

If there are two highly similar error messages in Firefox, you may also choose to document both in the same error page. In this case, put each Firefox error message in its group:

```plain
TypeOfError: message of error as in V8 1 (V8-based)
TypeOfError: message of error as in SM 1 (Firefox)
TypeOfError: message of error as in JSC 1 (Safari)

TypeOfError: message of error as in V8 2 (V8-based)
TypeOfError: message of error as in SM 2 (Firefox)
TypeOfError: message of error as in JSC 2 (Safari)
```

In essence, the error references are all keyed by Firefox error messages, with other engines' error messages provided for information only.

## Error type

\\{{jsxref("TypeOfError")}}.

## What went wrong?

One or two paragraphs explaining what you might be doing wrong, why JavaScript decides it's a bad idea, and some possible solutions.

## Examples

Note that we use the plural "Examples" even if the page only contains one example.

### A descriptive heading

Unlike other pages, H3 headings for error pages are not strictly necessary. Sometimes, there's only one scenario where the error can occur, in which case it's fine to omit the H3 heading, and use prose to walk through what's happening instead. Use headings when there are multiple possible causes of the error. The heading should be descriptive of what the example is doing. For example, "A simple example" does not say anything about the example and therefore, not a good heading. The heading should be concise.

See our guide on how to add [code examples](/en-US/docs/MDN/Writing_guidelines/Page_structures/Code_examples) for more information.

Note that for errors, it's often a good idea to use `example-bad` and `example-good`. For example:

Here's what you may be doing:

```js example-bad
// Your bad code here
```

Consider changing it to:

```js example-good
// Fixed good code here
```

## See also

Include links to reference pages and guides related to the current error. For more guidelines, see the [See also section](/en-US/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) in the _Writing style guide_.

- link1
- link2
- external_link (year)
