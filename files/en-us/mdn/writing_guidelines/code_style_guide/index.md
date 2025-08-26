---
title: Guidelines for writing code examples
short-title: Code style
slug: MDN/Writing_guidelines/Code_style_guide
page-type: mdn-writing-guide
sidebar: mdnsidebar
---

This article describes code style and formatting guidelines for code examples on MDN Web Docs, irrespective of programming language.
For guidelines about prose and other content, see the [writing style guide](/en-US/docs/MDN/Writing_guidelines/Writing_style_guide#code_examples).

For technology-specific guidelines, see the following articles:

- [HTML guidelines](/en-US/docs/MDN/Writing_guidelines/Code_style_guide/HTML)
- [CSS guidelines](/en-US/docs/MDN/Writing_guidelines/Code_style_guide/CSS)
- [JavaScript guidelines](/en-US/docs/MDN/Writing_guidelines/Code_style_guide/JavaScript)
- [Shell prompt guidelines](/en-US/docs/MDN/Writing_guidelines/Code_style_guide/Shell)

## General principles for code examples

There is one overarching consideration that you need to keep in mind: **Readers will copy and paste examples into their own code and may put it into production.**
Therefore, you should make sure that code examples are usable, follow generally accepted best practices, and do not do anything that will cause an application to be insecure, inefficient, bloated, or inaccessible.

If the code example is not runnable or production-worthy, include a warning in a code comment and in the explanatory text; for example, if it is only a snippet and not a full example, make this clear. This also means that you should provide all of the information necessary to run the example including any dependencies and setup information.

Code examples should be straightforward enough to be understandable, but complex enough to do something interesting, and (preferably) useful.
The aim is not necessarily to produce efficient, clever code that impresses experts and has great functionality, but rather to share reduced working examples that can be understood and learned from as quickly as possible.

Some more general guidelines include:

- Code examples should be short and should ideally only show the feature you are immediately interested in.
- Write your code to be as understandable as possible, even if it is not the most efficient way to write it.
- Don't include unnecessary server-side code, libraries, frameworks, preprocessors, and other such dependencies. They make the code less portable and harder to run and understand. Use vanilla code where possible.
- Don't assume readers' knowledge of any libraries, frameworks, preprocessors, or other non-native features. For example, use class names that make sense within the example rather than class names that make sense to BEM or Bootstrap users.
- Be inclusive in your code examples; consider that MDN readers come from all over the world, and are diverse in their ethnicities, religions, ages, genders, etc. Ensure text in code examples reflects that diversity and is inclusive of all people.
- Don't use deprecated features for brevity (such as presentation elements like {{HTMLElement("big")}} or {{domxref("Document.write", "document.write()")}}); do it correctly.
- In the case of API demos, if you are using multiple APIs together, point out which APIs are included and which features come from where.

## MDN code style and formatting

Opinions on correct indentation, whitespace, and line lengths have always been controversial. Discussions on these topics are a distraction from creating and maintaining content.
On MDN Web Docs, we use [Prettier](https://prettier.io/) as a code formatter to keep the code style consistent and to avoid off-topic discussions. You can check our [configuration file](https://github.com/mdn/content/blob/main/.prettierrc.json) to learn about the current rules, and read the [Prettier documentation](https://prettier.io/docs/index.html).

Aside from automated formatting, there are a few other rules for code examples on MDN so that the result is rendered well.

### Choose the correct language

To ensure proper formatting and syntax highlighting of code blocks, specify the language of the code block properly.
See [Example code blocks in MDN Markdown](/en-US/docs/MDN/Writing_guidelines/Howto/Markdown_in_MDN#example_code_blocks) for a list of languages supported by MDN, as well as details on how to request a new language.

If the code block is pseudocode, the output of a command, or otherwise not a programming language, set the language to `plain`:

````md
```plain
StaleElementReferenceException: The element reference of ABD-123 is stale…
```
````

> [!WARNING]
> If the desired language is not yet supported by MDN, do **not** set the language of a code block to a similar language, as doing so may have unintended side effects with Prettier formatting and syntax highlighting.

### Code line length

Code lines shouldn't be so long that they require horizontal scrolling to read.
Break long lines at natural breaking points for the sake of readability, but not at the expense of best practices.
For example, this is not great:

```js example-bad
let tommyCat =
  "Said Tommy the Cat as he reeled back to clear whatever foreign matter may have nestled its way into his mighty throat. Many a fat alley rat had met its demise while staring point blank down the cavernous barrel of this awesome prowling machine.";
```

This is better, but somewhat awkward:

```js
const tommyCat =
  "Said Tommy the Cat as he reeled back to clear whatever foreign " +
  "matter may have nestled its way into his mighty throat. Many a fat alley rat " +
  "had met its demise while staring point blank down the cavernous barrel of " +
  "this awesome prowling machine.";
```

Even better is to use a template literal:

```js example-good
const tommyCat = `Said Tommy the Cat as he reeled back to clear whatever foreign
  matter may have nestled its way into his mighty throat. Many a fat alley rat
  had met its demise while staring point blank down the cavernous barrel of
  this awesome prowling machine.`;
```

### Code block height

Code blocks should be as long as they need to be, but no longer. Ideally, aim for something short, like 15-25 lines. If a code block is going to be a lot longer, consider showing the most useful part and link to a complete example in a GitHub repo, Gist, or CodePen, for example.

### Inline code formatting

Use inline code syntax to mark up function names, variable names, and method names. For example: "the `frenchText()` function" is written in markdown as:

```md
the `frenchText()` function
```

Method names should be followed by a pair of parentheses: for example, `doSomethingUseful()`. The parentheses help differentiate methods from other code terms.

## Guidelines for proper rendering

These guidelines should be followed to ensure that the code examples you write display properly on MDN Web Docs. You should also consider responsiveness making writing code examples so that they are also useful on mobile devices.

### Size of the rendered code example

- **Set the width to 100%**: The main content pane on MDN Web Docs is about 700px wide on desktop, so the embedded code examples must look OK at that width.
- **Set height below 700px**: We recommend keeping this height for the rendered code example width for maximum onscreen legibility.

### Highlight examples as good or bad

You'll notice on this page that the code blocks that represent good practices to follow are rendered with a green check mark in the right corner, and the code blocks that demonstrate bad practices are rendered with a white cross in a red circle.

You can follow the same style while writing code examples. You don't need to use this style everywhere — only in places where you want to specifically call out good and bad usage in code examples.

A code block is written in markdown using "code fences" to demarcate the code block, followed by the language in the info string. For example:

````md
```js
function myFunc() {
  console.log("Hello!");
}
```
````

To represent the code block as a good or bad example, add `example-good` or `example-bad` after the language string, like so:

````md
```html example-good
<p>Good example</p>
```

```html example-bad
<p>Bad example</p>
```
````

These will be rendered as:

```html example-good
<p>Good example</p>
```

```html example-bad
<p>Bad example</p>
```

## Guidelines for using placeholder text

Use the placeholder lorem-ipsum text generated from [lipsum.com](https://www.lipsum.com/) or the [Lorem ipsum](https://marketplace.visualstudio.com/items?itemName=Tyriar.lorem-ipsum) VS Code plugin. The standard lorem-ipsum text is included in our spell-checker configuration, so it will not be reported as typos in IDEs or in tests during code review. Using a consistent placeholder text makes example code easier to review, especially when it appears repeatedly. It also helps keep examples clearly for illustration purposes and avoids distracting readers with irrelevant content.
