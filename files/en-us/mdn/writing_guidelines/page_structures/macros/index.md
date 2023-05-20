---
title: Using macros
slug: MDN/Writing_guidelines/Page_structures/Macros
page-type: mdn-writing-guide
---

{{MDNSidebar}}

The [Yari](https://github.com/mdn/yari) platform on which MDN runs provides a macro system, [KumaScript](https://github.com/mdn/yari/tree/main/docs/kumascript), which makes it possible to automate certain tasks. This article provides information on how to invoke MDN's macros within articles.

The [KumaScript guide](https://github.com/mdn/yari/blob/main/docs/kumascript/README.md) provides an in-depth look at how to use macros on MDN, so this section is more of a brief overview.

## How macros are implemented

Macros on MDN are implemented using server-executed [JavaScript](/en-US/docs/Web/JavaScript) code, interpreted using [Node.js](https://nodejs.org/en/). On top of that we have a number of libraries we've implemented that provide services and features to let macros interact with the platform and its contents.

## Using a macro in content

To use a macro, you enclose the call to the macro in a pair of double-braces along with its parameters, if any:

```plain
\{{macroname(parameter-list)}}
```

A few notes about macro calls:

- Macro names are case-sensitive, but some attempt is made to correct for common capitalization errors; you may use all lowercase even if the macro name uses caps within it, and you may capitalize a macro whose name normally starts with a lower-case letter.
- Parameters are separated by commas.
- If there are no parameters, you may leave out the parentheses entirely; `\{{macroname()}}` and `\{{macroname}}` are identical.
- Numeric parameters can be in quotes, or not. It's up to you (however, if you have a version number with multiple decimals in it, it needs to be in quotes).
- If you get errors, review your code carefully. If you still can't figure out what's going on, see [Troubleshooting KumaScript errors](https://github.com/mdn/yari/blob/main/docs/kumascript/troubleshooting-errors.md) for help.

Macros are heavily cached; for any set of input values (both parameters and environmental values such as the URL for which the macro was run), the results are stored and reused. This means that the macro is only actually run when the inputs change.

Macros can be as simple as just inserting a larger block of text or swapping in contents from another part of MDN, or as complex as building an entire index of content by searching through parts of the site, styling the output, and adding links.

You can read up on our most commonly-used macros on the [Commonly-used macros](/en-US/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros) page; also, you can browse through the [complete sources for all macros](https://github.com/mdn/yari/tree/main/kumascript/macros). Most of the macro sources have documentation built into them, as comments at the top.
