---
title: Shell prompt guidelines
slug: MDN/Guidelines/Code_guidelines/Shell
tags:
  - Code
  - Guide
  - Guidelines
  - MDN Meta
  - Shell
---
{{MDNSidebar}}

The following guidelines cover how to write Shell prompts on MDN pages.

## Shell prompts in brief

A shell is a program that waits for you to type in a command and then press the return key. To indicate which commands you should type, MDN documentation lists them in a code block, similar to code examples. Such a block looks like this:

```bash example-good
# This may take a while...
hg clone https://hg.mozilla.org/mozilla-central/ firefox
cd firefox
```

## Guidelines

There are a some guidelines to follow when writing a shell code block:

- Do not include a "$" or ">" at the beginning of a shell instruction. It confuses more than it helps and it is not useful when copying the instructions.
- Comments start with "#".
- Choose the "Bash" syntax highlighter.

## Good shell prompt examples on MDN

Our [Django server-side development docs](/en-US/docs/Learn/Server-side/Django) show good practice presentation of shell prompt commands, etc. on MDN. See [Setting up a Django development environment](/en-US/docs/Learn/Server-side/Django/development_environment) for example.
