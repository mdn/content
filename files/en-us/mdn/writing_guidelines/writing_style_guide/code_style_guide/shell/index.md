---
title: Guidelines for writing shell prompt code examples
slug: MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/Shell
page-type: mdn-writing-guide
sidebar: mdnsidebar
---

The following guidelines cover how to write Shell prompt code examples for MDN Web Docs.

## What is a "shell"

A shell is a program that waits for you to type in a command and then press the return key. To indicate which commands you should type, content on MDN Web Docs lists them in a code block, similar to code examples.

Such a block looks like this:

```bash example-good
# This may take a while...
git clone https://github.com/mdn/content
cd content
```

## General guidelines for shell prompt code examples

### Choosing a format

Opinions on correct indentation, whitespace, and line lengths have always been controversial. Discussions on these topics are a distraction from creating and maintaining content.

On MDN Web Docs, we use [Prettier](https://prettier.io/) as a code formatter to keep the code style consistent (and to avoid off-topic discussions). You can consult our [configuration file](https://github.com/mdn/content/blob/main/.prettierrc.json) to learn about the current rules, and read the [Prettier documentation](https://prettier.io/docs/en/index.html).

Prettier formats all the code and keeps the style consistent. Nevertheless, there are a few additional rules that you need to follow.

### Writing shell code blocks

When writing a shell code block:

- Do not include a `$` or `>` at the beginning of a shell instruction. It confuses more than it helps and it is not useful when copying the instructions.
- Comments start with `#`.
- Choose "bash" to indicate the language in markdown.

## See also

[Django server-side development docs](/en-US/docs/Learn_web_development/Extensions/Server-side/Django) show good practice presentation of shell prompt commands.
