---
title: Guidelines for styling shell prompt code examples
slug: MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/Shell
page-type: mdn-writing-guide
---

{{MDNSidebar}}

A shell is a program that waits for you to type in a command and then press the return key. To indicate which commands you should type, content on MDN Web Docs lists them in a code block, similar to code examples. Such a block looks like this:

```bash example-good
# This may take a while...
hg clone https://hg.mozilla.org/mozilla-central/ firefox
cd firefox
```

The following guidelines cover how to write Shell prompt code examples for MDN Web Docs.

## General guidelines for shell prompt examples

When writing a shell code block:

- Do not include a `$` or `>` at the beginning of a shell instruction. It confuses more than it helps and it is not useful when copying the instructions.
- Comments start with `#`.
- Choose "bash" to indicate the language in markdown.

## See also

[Django server-side development docs](/en-US/docs/Learn/Server-side/Django) show good practice presentation of shell prompt commands.
