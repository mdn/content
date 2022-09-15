---
title: How to replace deprecated KumaScript macros
slug: MDN/Writing_guidelines/Page_structures/Macros/Deprecated_macros
page-type: mdn-writing-guide
tags:
  - meta
  - writing-guide
---

{{MDNSidebar}}

The following is a list of [KumaScript macros](https://github.com/mdn/yari/tree/main/kumascript/macros) that has been deprecated and should no longer be used. This document also provides guidance on how to replace these macros should you encounter them in the content.

## The \{{Link}} macro

The `Link` macro [is now deprecated](https://github.com/mdn/yari/pull/6865) and
should no longer be used. Any occurrences that still exist in actively-maintained
content should be replaced with a plain Markdown style link.

### How to replace the macro

A common usage of the macro is as follows:

```plain
The \{{Link("/en-US/docs/Web/JavaScript/Guide/Numbers_and_dates")}} page on MDN
```

This can be replaced with the following Markdown:

```markdown
The [Numbers and dates](/en-US/docs/Web/JavaScript/Guide/Numbers_and_dates) page on MDN
```

When replacing `Link` macros:

- The **link text** must match the title of the page it's linking to.
- Internal links are **root-relative** so you should omit `https://developer.mozilla.org` at the beginning of the URL.
