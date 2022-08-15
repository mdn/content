---
title: How to write an entry in the glossary
slug: MDN/Writing_guidelines/Howto/Write_a_new_entry_in_the_glossary
page-type: mdn-writing-guide
tags:
  - meta
  - writing-guide
---
{{MDNSidebar}}

This article explains how to add and link to entries in the [MDN Web Docs glossary](/en-US/docs/Glossary).
It also provides guidelines about glossary entry layout and content.
The glossary provides definitions for all the terms, jargon, abbreviations, and acronyms you'll come across when reading MDN content about the web and web development.

It's possible that the glossary will never be complete because the web is always changing.
By contributing new entries or fixing problems, you can help us update the glossary and fill-in gaps.

Contributing to the glossary is an easy way to help make the web more understandable for everyone.
You don't need high level technical skills.
Glossary entries are intended to be straightforward and brief.

## How to write an entry

First, choose what topic you'd like to write a glossary entry for.
If you're looking for topics that need a glossary entry, check the [list of undocumented terms](/en-US/docs/Glossary#contribute_to_the_glossary) at the end of the [Glossary landing page](/en-US/docs/Glossary).

If you have an idea for a new glossary entry, [create a new page](https://github.com/mdn/content#adding-a-new-document) for it underneath the [glossary landing page](https://github.com/mdn/content/tree/main/files/en-us/glossary).

### Write a summary

The first paragraph of any glossary page is a simple and short description of the term.
Preferably, this should be no more than two sentences.
Make sure anyone reading the description can immediately understand the defined term.

> **Note:** Please don't copy-and-paste from other definitions or content on the internet.
> (And especially not Wikipedia, since its range of license versions is smaller and incompatible with MDN.) Your glossary entry should be original content.

#### Writing a good glossary entry

Add a few extra paragraphs if you must, but it's easy to find yourself writing an entire article.
Writing an article is fine, but please don't create it in/for the glossary.
If you aren't sure where to put your article, feel free to [reach out to discuss it](/en-US/docs/MDN/Community/Contributing/Getting_started#step_4_ask_for_help).

There are a few simple guidelines to consider for writing a better glossary entry:

- When you use terms in the glossary's description of the term or when you use abbreviation, you should create appropriate links.
  Often, this just involves creating links to other pages in the glossary.
- Use appropriate related terms (with links) in the glossary entry, if it can be done without making the article difficult to follow.
  Having a good network of related and useful links makes a page—or set of pages—much easier to use.
- Think about the search terms you would choose if you wanted to find this page.
  Try to use all the words you would use to search for the term, but without making the glossary entry nonsensical, long, or difficult to read.

### Expand with links

A glossary entry should always end with a _Learn more_ section.
This section should contain links to help the reader move forward: discovering more details; learning to use the relevant technology.

It is good practice to organize the links into three groups:

- General knowledge
  - : These links provide higher-level information about the term or topic.
    For example: a link to a relevant [Wikipedia](https://www.wikipedia.org/) page.
- Technical reference
  - : These links offer in-depth technical information, on MDN Web Docs or other sites.
- Learn about it
  - : These are links to tutorials, exercises, examples, or any other instructional content that helps the reader learn.

## Dealing with disambiguation

Some terms can have multiple meanings depending upon context.
To resolve ambiguity, follow these guidelines:

- The term's main page must be a disambiguation page containing the [`GlossaryDisambiguation`](https://github.com/mdn/yari/blob/main/kumascript/macros/GlossaryDisambiguation.ejs) macro.
- The term has subpages that define the term for different contexts.

Let's illustrate this with an example.
The term _signature_ can have different meanings in at least two different contexts: security and function.

1. The page [Glossary/Signature](/en-US/docs/Glossary/Signature) is the disambiguation page with the [`GlossaryDisambiguation`](https://github.com/mdn/yari/blob/main/kumascript/macros/GlossaryDisambiguation.ejs) macro.
2. The page [Glossary/Signature/Security](/en-US/docs/Glossary/Signature/Security) is the page defining a signature in a security context.
3. The page [Glossary/Signature/Function](/en-US/docs/Glossary/Signature/Function) is the page defining a function signature.
