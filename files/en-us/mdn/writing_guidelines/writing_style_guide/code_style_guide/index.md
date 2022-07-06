---
title: Guidelines for styling code examples
slug: MDN/Writing_guidelines/Writing_style_guide/Code_style_guide
page-type: mdn-writing-guide
tags:
  - meta
  - writing-guide
---
{{MDNSidebar}}

These are guidelines for styling and formatting of code examples and apply to all code, be it HTML, CSS, or JavaScript. For guidelines about  what content to include while writing the code examples, see the style guide <!--Add link to the `### Code examples` section in writing style guide-->

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
    console.log('Yup, that worked.');
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
let tommyCat = 'Said Tommy the Cat as he reeled back to clear whatever foreign matter may have nestled its way into his mighty throat. Many a fat alley rat had met its demise while staring point blank down the cavernous barrel of this awesome prowling machine.';
```

This is better, but somewhat awkward:

```js
let tommyCat = 'Said Tommy the Cat as he reeled back to clear whatever foreign '
+ 'matter may have nestled its way into his mighty throat. Many a fat alley rat '
+ 'had met its demise while staring point blank down the cavernous barrel of '
+ 'this awesome prowling machine.';
```

Even better is to use a template literal:

```js example-good
let tommyCat = `Said Tommy the Cat as he reeled back to clear whatever foreign
  matter may have nestled its way into his mighty throat. Many a fat alley rat
  had met its demise while staring point blank down the cavernous barrel of
  this awesome prowling machine.`;
```

```js example-good
if (class.CONDITION || class.OTHER_CONDITION || class.SOME_OTHER_CONDITION
       || class.YET_ANOTHER_CONDITION ) {
  /* something */
}

var toolkitProfileService = Components.classes["@mozilla.org/toolkit/profile-service;1"]
                           .createInstance(Components.interfaces.nsIToolkitProfileService);
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
  console.log('Hello!');
};
```

To represent the code block as a good or bad example, add `example-good` or `example-bad` after the language string, like so:

````plain
```html example-good
<p class="brush: js example-good">
```

```html example-bad
<p class="brush: js example-bad">
```
````

These will be rendered as:

```html example-good
<p class="brush: js example-good">
```

```html example-bad
<p class="brush: js example-bad">
```
