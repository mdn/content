---
title: Code examples on MDN
short-title: Code examples
slug: MDN/Writing_guidelines/Page_structures/Code_examples
page-type: mdn-writing-guide
sidebar: mdnsidebar
---

On MDN, you'll see numerous code examples that demonstrate how to use web platform features that we document.
This article describes the ways you can add code examples to pages, along with the types you can use and when to use them.

> [!NOTE]
> This page describes **how** code gets included in MDN pages.
> If you want linting and style hints for adding code in an MDN page, see our [Code style guide](/en-US/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide).

## What types of code example are on MDN?

There are four types of code examples available:

- **Static examples** — Code blocks that display source code on a page.
- **Live samples** — A macro takes code blocks from a page, combines them into an {{htmlelement("iframe")}}, and embeds the iframe in the page to show the result.
  The published page displays the source code blocks and the results side-by-side.
- **Interactive examples** — A macro renders source code onto the page and renders the results in a panel beside the source.
  Readers can edit the source code and re-run the example to see the effect of their changes.
- **GitHub embeds** — A macro takes a document in a GitHub repo in the [MDN organization](https://github.com/mdn/), puts it in an {{htmlelement("iframe")}} , and embeds it into the page to show the result.

## When should you use each one?

Each type of code example has its own use cases:

- **Static examples** are useful if you need to show code and it's not important to demonstrate the results of the code on the published page, or you are showing an intermediate step in an article.
  Readers will often look for these types of code blocks that show how use of a feature so they can copy and paste a minimal example into their project.
  Additionally, you might want a static code block demonstrating an API or a feature that doesn't work well as a live sample.
- **Live samples** are useful if you want to show source code, then show it running, and you're not that bothered about it being a standalone example.
  They are useful because you only need to update the code once to update both the code blocks on the page and the live results side-by-side.
- **Interactive examples** are used on reference pages.
  They are limited to one occurrence per page, and must be in a specific place on the page after the introduction.
  They're useful for showing what the common or practical uses of a feature is.
- **GitHub embeds** are useful when you've got an existing example you want to embed, don't want to show the source code for, and/or you want to make sure the example is available in standalone form.
  Because on-page code and source code are in two different places, the maintenance costs are higher.

## General guidelines

There are style and content considerations to keep in mind when adding or updating samples on MDN.

- When placing samples on a page, try to ensure that all of the features or options of the API or concept you're writing about are covered.
  At a minimum, the most-common options or properties should be demonstrated.
- Precede each example with an explanation of what the example does and why it's interesting or useful.
- Follow each piece of code with an explanation of what it does.
- When possible, break large examples into smaller pieces. For instance, the "live sample" system will automatically concatenate all your code together into one piece before running the example, so you can actually break your JavaScript, HTML, and/or CSS into smaller pieces with descriptive text after each piece if you choose to do so. This is a great way to help explain long or complicated stretches of code more clearly.
- Go beyond demonstrating how each piece of the API or technology works. Consider possible real-world use cases you might try to demonstrate.

## Static examples

Static examples are code blocks that show how a feature looks like in source code.
These are put on a page using Markdown "code fences", as described in [Example code blocks](/en-US/docs/MDN/Writing_guidelines/Howto/Markdown_in_MDN#example_code_blocks).
When used in documentation pages, they look like this:

```js
// This is a JS example
const test = "Hello";
console.log(test);
```

## Interactive examples

The [`InteractiveExample`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/embeds/interactive_example.rs) macro is used to embed interactive examples at the top of MDN reference pages.
They are for readers who want to try an example without having to read through the full article for a topic or feature.

> [!WARNING]
> Currently **only JavaScript** examples are supported.
> See https://github.com/orgs/mdn/discussions/782 for implementation details.

The `InteractiveExample` macro accepts a title for the example as a string, followed by a keyword to specify the height of the example.
The code blocks to include in the example appear after the macro call and contain the keyword `interactive-example` in the info string after the code block's language.
The [JavaScript `Array.concat()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat#try_it) usage is a good example of this macro, which looks like this in the markdown source:

````md
\{{InteractiveExample("JavaScript Demo: Array.concat()", "shorter")}}

```js interactive-example
const array1 = ["a", "b", "c"];
const array2 = ["d", "e", "f"];
const array3 = array1.concat(array2);

console.log(array3);
// Expected output: Array ["a", "b", "c", "d", "e", "f"]
```
````

There are a few limitations to interactive examples:

- They are specialized per technology — the UI for JavaScript is different from the UI for CSS, and they only illustrate one technology in isolation.
  They are not appropriate if you want to show, for example, how to combine a particular HTML/CSS/JS structure.
- They are not intended for large code examples — the UI supports a range of **fixed heights**, which only really work for short (say, 10–15 line) examples.
- An MDN page can have only one interactive example.

## Live samples

Live samples are inserted into the page using the [`EmbedLiveSample`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/embeds/embed_live_sample.rs) macro.
An \\{{EmbedLiveSample}} macro takes code blocks from a page, combines them into an {{htmlelement("iframe")}}, and inserts the result into the page.
See the [Live samples guide](/en-US/docs/MDN/Writing_guidelines/Page_structures/Live_samples) for more information.

## GitHub live samples

GitHub live samples are embedded into the page using the [`EmbedGHLiveSample`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/embeds/embed_gh_live_sample.rs) macro.
An \\{{EmbedGHLiveSample}} takes the content at a specified URL (which must be an **MDN** GitHub repository), and inserts it into the page in an {{htmlelement("iframe")}}.

The macro has three parameters:

1. The URL of the document to embed — this is relative to the MDN organization, the top level directory of which is at `https://mdn.github.io/`. So this parameter needs to contain the part of the URL after that, e.g. `my-subdirectory/example.html`. You can omit the filename if it is called `index.html`.
2. The width of the `<iframe>`, which can be expressed as a percentage or in pixels.
3. The height of the `<iframe>`, which can be expressed as a percentage or in pixels.

Let's look at an example. Say we wanted to embed the code at <https://mdn.github.io/learning-area/css/styling-boxes/backgrounds/>. We could use the following call:

\\{{EmbedGHLiveSample("learning-area/css/styling-boxes/backgrounds/", '100%', 100)}}

This looks like so when rendered:

{{EmbedGHLiveSample("learning-area/css/styling-boxes/backgrounds/", '100%', 100)}}
