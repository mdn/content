---
title: Guidelines for styling code examples
slug: MDN/Writing_guidelines/Writing_style_guide/Code_style_guide
page-type: mdn-writing-guide
---

{{MDNSidebar}}

The guidelines described in this article apply to the styling and formatting of code examples, irrespective of the language. For guidelines about what content to include while writing the code examples, see the [writing style guide](/en-US/docs/MDN/Writing_guidelines/writing_style_guide#code_examples).

For technology-specific guidelines, see the following articles:

- [HTML guidelines](/en-US/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/HTML)
- [CSS guidelines](/en-US/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/CSS)
- [JavaScript guidelines](/en-US/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/JavaScript)
- [Shell prompt guidelines](/en-US/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/Shell)

## General best practices

This section provides the best practices for creating an understandable minimal code example to demonstrate the usage of a specific feature or function.

Code examples that you add to MDN Web Docs should be:

- simple enough to be understandable, but
- complex enough to do something interesting, and preferably useful.

There is one overarching consideration that you need to keep in mind: **Readers will copy and paste the code sample into their own code and may put it into production.**

Therefore, you should make sure that the code example is usable, follows generally accepted best practices, and **does not** do anything that will cause an application to be insecure, grossly inefficient, bloated, or inaccessible. If the code example is not runnable or production-worthy, be sure to include a warning in a code comment and in the explanatory text; for example, if it is only a snippet and not a full example, make this clear. This also means that you should provide **all** of the information necessary to run the example including any dependencies and setup information.

Code examples should be as self-contained and easy to understand as possible. The aim is not necessarily to produce efficient, clever code that impresses experts and has great functionality, but rather to produce reduced working examples that can be understood as quickly as possible.

Some more general best practices include:

- The code example should be short and ideally show only the feature you are immediately interested in.
- **Only** include code that is essential for the example. A large amount of non-relevant code can easily distract or confuse the reader. If you want to provide a full, more lengthy example, put it in one of our [GitHub repos](https://github.com/mdn/) (or a JSBin, Codepen, or similar) and then provide the link to the full version above or below the sample.
- Don't include unnecessary server-side code, libraries, frameworks, preprocessors, and other such dependencies. They make the code less portable and harder to run and understand. Use vanilla code where possible.
- Don't assume readers' knowledge of any libraries, frameworks, preprocessors, or other non-native features. For example, use class names that make sense within the example rather than class names that make sense to BEM or Bootstrap users.
- Write your code to be as clean and understandable as possible, even if it is not the most efficient way to write it.
- Don't use bad practices for brevity (such as presentation elements like {{HTMLElement("big")}} or {{domxref("Document.write", "document.write()")}}); do it correctly.
- In the case of API demos, if you are using multiple APIs together, point out which APIs are included and which features come from where.

## Guidelines for formatting

These guidelines for formatting code examples for MDN Web Docs are also good practices when you are coding.

### Indentation

- Use two spaces per tab for indentation in all code examples.
- Place the open-brace ("`{`") characters on the same line as the statement that opens the block.

```html example-good
<div>
  <p>This is my paragraph.</p>
</div>
```

```js example-good
function myFunc() {
  if (thingy) {
    console.log("Yup, that worked.");
  }
}
```

### Spacing

Add a space between a control statement or loop keyword and its opening parenthesis.

```js example-good
if (condition) {
  /* handle the condition */
} else {
  /* handle the "else" case */
}
```

### Code line length

- Code lines shouldn't be so long that they require horizontal scrolling to read.
- As a recommended practice, keep code lines up to a maximum of 80 characters long (64 for [interactive examples](https://github.com/mdn/interactive-examples)).
- Break long lines at natural breaking points for the sake of readability, but not at the expense of best practices.

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

```js example-good
if (
  obj.CONDITION ||
  obj.OTHER_CONDITION ||
  obj.SOME_OTHER_CONDITION ||
  obj.YET_ANOTHER_CONDITION
) {
  /* something */
}

const toolkitProfileService = Components.classes[
  "@mozilla.org/toolkit/profile-service;1"
].createInstance(Components.interfaces.nsIToolkitProfileService);
```

### Code block height

Code blocks should be as long as they need to be, but no longer. Ideally, aim for something short like 15-25 lines. If a code block is going to be a lot longer, consider just showing the most useful snippet, and link to the full example on a GitHub repo or codepen, say. <!--is this the current recommendation?-->

#### Inline code formatting

Use the {{HTMLElement("code")}} tags to mark up function names, variable names, and method names.
For example: "the `frenchText()` function".

**Method names should be followed by a pair of parentheses.** For example, `doSomethingUseful()`.
The parentheses help differentiate methods from other code terms.

## Guidelines for proper rendering

These guidelines should be followed to ensure that the code examples you write display properly on MDN Web Docs. You should also consider responsiveness making writing code examples so that they are also useful on mobile devices.

### Size of the rendered code example

- **Set the width to 100%**: The main content pane on MDN Web Docs is about 700px wide on desktop, so the embedded code examples must look OK at that width.
- **Set height below 700px**: We recommend keeping this height for the rendered code example width for maximum onscreen legibility.

### Color in the rendered code example

- Use keywords for primary and other "basic" colors, for example:

  ```css example-good
  color: black;
  color: white;
  color: red;
  ```

- Use `rgb()` for more complex colors (including semi-transparent ones):

  ```css example-good
  color: rgb(0, 0, 0, 0.5);
  color: rgb(248, 242, 230);
  ```

- If you have to use hex colors, then use lower-case:

  ```css example-good
  color: #058ed9;
  color: #a39a92;
  ```

- Use the short form where relevant:

  ```css example-good
  color: #ff0;
  color: #fff;
  ```

### Mark rendered examples as good or bad

You'll notice on this page that the code blocks that represent good practices to follow are rendered with a green check mark in the right corner, and the code blocks that demonstrate bad practices are rendered with white cross in red circle.

You can follow the same style while writing code examples. You don't need to use this style everywhere — only on pages where you want to specifically call out good and bad practices in your code examples.

To get this rendering, use "code fences" to demarcate the code block, followed by the language info string. For example:

```js
function myFunc() {
  console.log("Hello!");
}
```

To represent the code block as a good or bad example, add `example-good` or `example-bad` after the language string, like so:

````md
```html example-good
<p class="brush: js example-good"></p>
```

```html example-bad
<p class="brush: js example-bad"></p>
```
````

These will be rendered as:

```html example-good
<p class="brush: js example-good"></p>
```

```html example-bad
<p class="brush: js example-bad"></p>
```
