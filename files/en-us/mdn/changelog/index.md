---
title: MDN Web Docs changelog
slug: MDN/Changelog
page-type: guide
---

{{MDNSidebar}}

This document provides a record of MDN content processes, constructs, and best practices that have changed, and when they changed. It is useful to allow regular contributors to check in and see what has changed about the process of creating content for MDN.

## October 2022

The [MDN project documentation](/en-US/docs/MDN) is refreshed and organized under two main categories:

- **Writing:** Documentation about how to write for MDN, what we document, definitions of experimental, style guidelines and so on are found under the [Writing guidelines](/en-US/docs/MDN/Writing_guidelines) pages.
- **Community:** Information about open source etiquette, discussions, processes for pull requests and issues, users and teams, and general hints for contributors are found under the [Community](/en-US/docs/MDN/Community) pages.

For more details on what has changed, see the [Revamp of MDN Web Docs Contribution Docs](https://hacks.mozilla.org/2022/10/revamp-of-mdn-web-docs-contribution-docs/) blog post published to Mozilla Hacks.

## November 2021

Conversion to Markdown is done, so remove the old CSS style guide and redirect to the Markdown in MDN page.

## July 2021

### Updates to CSS style guide for Markdown

Multiple updates to the CSS style guide to reflect the move towards Markdown, and encourage authors to write HTML in a Markdown-compatible way.

- Note and warning boxes no longer have a separate `<h4>` heading for the title (e.g. `<h4>Warning</h4>`).

  See our [Markdown in MDN](/en-US/docs/MDN/Writing_guidelines/Howto/Markdown_in_MDN#notes_warnings_and_callouts) guide for the correct syntax.

- The `seoSummary` class should no longer be used.
- The `standard-table` class should no longer be used. The styling provided by this class is now applied to tables by default.
- The {{HTMLElement("details")}} element should no longer be used.
- The `hidden`, `example-good`, and `example-bad` classes used to be primarily for code blocks but could be used on other elements. Now they can only be used on code blocks.

## February 2021

### Multiline JavaScript and API syntax blocks

Previously, the syntax blocks of JavaScript builtin and WebAPI methods that can be used in multiple different ways (i.e. various parameters are optional) were commonly written using [BNF formal syntax notation](https://en.wikipedia.org/wiki/Backus%E2%80%93Naur_form). Most notably, square brackets were used to signify optional parameters.

This was problematic — many developers were confused by this, and it conflicts with valid syntax forms in other programming languages (e.g. `[]` is also an array in JavaScript).

As a result, going forward we are now writing multiple syntax forms of a method on separate lines inside the syntax block. See [Syntax sections > Multiple lines/Optional parameters](/en-US/docs/MDN/Writing_guidelines/Page_structures/Syntax_sections#multiple_linesoptional_parameters) for further information and examples.

### Documenting mixins

[Interface mixins](https://heycam.github.io/webidl/#idl-interface-mixins) in Web IDL are used in specifications to define Web APIs.
For web developers, they aren't observable directly; they act as helpers to avoid repeating API definitions.

Previously we commonly defined a landing page for a mixin class itself, and put the defined members on subpages underneath it,
before linking to those from the landing pages of the interfaces that implement those mixins.
This was confusing for readers because mixins are spec constructs — you never access the defined members using the mixin classes.
To avoid this confusion we've instead put the pages for members defined on mixins directly under the implementing class pages.
For more details, see the guide page on
[how to write an API reference](/en-US/docs/MDN/Writing_guidelines/Howto/Write_an_API_reference/Information_contained_in_a_WebIDL_file#mixins)
and the discussion leading to this change at [mdn/content#1940](https://github.com/mdn/content/issues/1940).

## January 2021

### Markup for note and warning boxes

Previously on MDN, note and warning boxes would be wrapped by `<div>` elements with `note` and `warning` classes, respectively. More often than not, their first paragraphs would start with a `<strong>`-wrapped `note` or `warning` text.

In January this changed — the `class` attribute should now include an additional `notecard` class, and the strong text is instead included in a heading at the top of the block.

See our [Markdown in MDN](/en-US/docs/MDN/Writing_guidelines/Howto/Markdown_in_MDN#notes_warnings_and_callouts) guide for further information and syntax guides.
