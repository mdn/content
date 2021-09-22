---
title: General guidelines for all code
slug: MDN/Guidelines/Code_guidelines/General
tags:
  - Code
  - General
  - Guide
  - Guidelines
  - MDN Meta
---
{{MDNSidebar}}

The following code example guidelines apply to all code, whether we are talking about HTML, CSS, JavaScript, or something else.

## In this article

- [Indentation, spacing, size](/en-US/docs/MDN/Guidelines/Code_guidelines/General#indentation_spacing_size)

  - [Indentation](/en-US/docs/MDN/Guidelines/Code_guidelines/General#indentation)
  - [Code line length](/en-US/docs/MDN/Guidelines/Code_guidelines/General#code_line_length)
  - [Code block height](/en-US/docs/MDN/Guidelines/Code_guidelines/General#code_block_height)

- [Guidelines for displaying examples](/en-US/docs/MDN/Guidelines/Code_guidelines/General#guidelines_for_displaying_examples)

  - [Size of rendered example](/en-US/docs/MDN/Guidelines/Code_guidelines/General#size_of_rendered_example)
  - [Use of images and other media](/en-US/docs/MDN/Guidelines/Code_guidelines/General#use_of_images_and_other_media)
  - [Use of color](/en-US/docs/MDN/Guidelines/Code_guidelines/General#use_of_color)
  - [Highlight good and bad practice examples](/en-US/docs/MDN/Guidelines/Code_guidelines/General#highlight_good_and_bad_practice_examples)

- [Writing syntax sections on reference pages](/en-US/docs/MDN/Guidelines/Code_guidelines/General#writing_syntax_sections_on_reference_pages)

## Indentation, spacing, size

### Indentation

All code should use 2 spaces for indentation, for example:

```html example-good
<div>
  <p>This is my paragraph.</p>
</div>
```

```js example-good
function myFunc() {
  if(thingy) {
    console.log('Yup, that worked.');
  }
}
```

### Code line length

Lines of code should be a maximum of 80 characters long (64 for [interactive examples](https://github.com/mdn/interactive-examples)). You should break lines sensibly for the sake of readability, but not at the expense of best practices.

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

### Code block height

Code blocks should be as long as they need to be, but no longer. Ideally, aim for something short like 15-25 lines. If a code block is going to be a lot longer, consider just showing the most useful snippet, and link to the full example on a GitHub repo or codepen, say.

## Guidelines for displaying examples

### Size of rendered example

The MDN main content pane is about 700px wide on desktop, so embedded MDN examples must look OK at that width (set the width of embedded examples at 100%).

For height, we'd recommend keeping the rendered example at below 700px in height if at all possible, for maximum onscreen legibility.

You should also think about making your examples responsive to  some degree, so they are also useful on mobile devices.

### Use of images and other media

Sometimes you'll want to include images or other media in an example. If you do:

- Make sure their license allows you to use them. Try to use media that has a very permissive license such as [CC0](https://creativecommons.org/share-your-work/public-domain/cc0/), or at least one that is compatible with our general content license —  [Creative Commons Attribution-ShareAlike license](https://creativecommons.org/licenses/by-sa/2.5/) (CC-BY-SA).
- For images, run them through <https://tinypng.com> or <https://imageoptim.com>, to reduce the page weight of the examples.
- For `SVG`, run the code through [SVGOMG](https://jakearchibald.github.io/svgomg/), and ensure that the `SVG` file has an empty line at the end of the file.
- When displaying icons on a page (e.g. via {{cssxref("background-image")}}), use icons from the [mdn-dinocons](https://github.com/mdn/mdn-dinocons) repository, where appropriate, and try to match their style in other cases.

### Use of color

Lower case for hex, can use keywords for shades and primary colors (e.g. black, white, red), use more complex schemes only when needed (e.g. to include transparency)

Prefer to use keywords for primary and other "basic" colors, for example:

```css example-good
color: black;
color: white;
color: red;
```

Use rgb() for more complex colors (including semi-transparent ones):

```css example-good
color: rgb(0, 0, 0, 0.5);
color: rgb(248, 242, 230);
```

If you have to use hex colors, then use lower-case:

```css example-good
color: #058ed9;
color: #a39a92;
```

and use the short form where relevant:

```css example-good
color: #ff0;
color: #fff;
```

The [sass/vars/\_color-palette.scss](https://github.com/mdn/mdn-minimalist/blob/main/sass/vars/_color-palette.scss) file in the [mdn-minimalist](https://github.com/mdn/mdn-minimalist) repository has a set of useful colors that complement the overall MDN design.

### Highlight good and bad practice examples

As you will notice from looking around these guidelines, the code blocks that are supposed to be good practice examples are highlighted with a smiley face in green, and the code blocks that are supposed to be bad practice examples are highlighted with a sad face in red.

To do this, you first use the MDN editor controls to put your code block in a `<pre>` block and give it appropriate syntax highlighting. The source of the code will look something like this:

```js
function myFunc() {
  console.log('Hello!');
};</pre>
```

To make it into a good example, you insert `example-good` just before the closing quote of the `class` attribute:

```html
<pre class="brush: js example-good">
  ...
```

To make it into a bad example, you insert `example-bad` just before the closing quote of the `class` attribute:

```html
<pre class="brush: js example-bad">
  ...
```

We would like to encourage you to use these. You don't need to use these everywhere — only when you are specifically calling out good and bad practices in your code.

## Writing syntax sections on reference pages

MDN reference pages include Syntax sections that show unambiguously what the syntax of a feature can/should be, for example a JavaScript method, CSS property, HTML element, etc. Guidelines for writing these are given on the [Syntax sections](/en-US/docs/MDN/Structures/Syntax_sections) document.
