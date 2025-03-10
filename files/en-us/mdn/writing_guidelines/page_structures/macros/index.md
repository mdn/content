---
title: Using macros
slug: MDN/Writing_guidelines/Page_structures/Macros
page-type: mdn-writing-guide
sidebar: mdnsidebar
---

The [rari](https://github.com/mdn/rari) backend is MDN's build system and provides a macro syntax for common tasks.

## Using a macro in content

To use a macro, you enclose the name of the macro in a pair of double-braces (`{{ }}`) along with its parameters, if any:

```plain
\{{macroname(parameter-list)}}
```

A few notes about macro calls:

- Macro names are case-sensitive, but some attempt is made to correct for common capitalization errors; you may use all lowercase even if the macro name uses caps within it, and you may capitalize a macro whose name normally starts with a lower-case letter.
- Parameters are separated by commas.
- If there are no parameters, you may leave out the parentheses entirely; `\{{macroname()}}` and `\{{macroname}}` are identical.
- Numeric parameters can be in quotes or not. It's up to you (however, if you have a version number with multiple decimals in it, it needs to be in quotes).

Macros can be as simple as just inserting a larger block of text or swapping in contents from another part of MDN, or as complex as building an entire index of content by searching through parts of the site, styling the output, and adding links.

You can read up on our most commonly used macros on the [Commonly used macros](/en-US/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros) page.

## See also

- [Sidebar macros](/en-US/docs/MDN/Writing_guidelines/Page_structures/Sidebars)
- [Link macros](/en-US/docs/MDN/Writing_guidelines/Page_structures/Links)
- [Feature status macros](/en-US/docs/MDN/Writing_guidelines/Page_structures/Feature_status)
