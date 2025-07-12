---
title: Guidelines for writing CSS code examples
short-title: CSS examples
slug: MDN/Writing_guidelines/Code_style_guide/CSS
page-type: mdn-writing-guide
sidebar: mdnsidebar
---

The following guidelines cover how to write CSS example code for MDN Web Docs.

## General guidelines for CSS code examples

### Choosing a format

Opinions on correct indentation, whitespace, and line lengths have always been controversial. Discussions on these topics are a distraction from creating and maintaining content.

On MDN Web Docs, we use [Prettier](https://prettier.io/) as a code formatter to keep the code style consistent (and to avoid off-topic discussions). You can consult our [configuration file](https://github.com/mdn/content/blob/main/.prettierrc.json) to learn about the current rules, and read the [Prettier documentation](https://prettier.io/docs/index.html).

Prettier formats all the code and keeps the style consistent. Nevertheless, there are a few additional rules that you need to follow.

### Plan your CSS

Before diving in and writing huge chunks of CSS, plan your styles carefully. What general styles are going to be needed, what different layouts do you need to create, what specific overrides need to be created, and are they reusable? Above all, you need to try to **avoid too much overriding**. If you keep finding yourself writing styles and then cancelling them again a few rules down, you probably need to rethink your strategy.

### Using modern CSS features

You can use new features once every major browser — Chrome, Edge, Firefox, and Safari — supports them.

### Follow common best practices

There are some uniformly acknowledged principles that we don't need to exhaustively state here:

- Don't write syntax errors that result in the property or declaration being ignored. Standard syntax that hasn't been implemented is acceptable.
- Don't use non-standard, deprecated, or obsolete features. This extends to prefixed features: unless the standard feature is unavailable, you don't need to write the prefixed alternative. Readers who need compatibility can either add the prefixed fallback themselves or use a CSS postprocessor.
- Don't write redundant and useless code that are common indications of bug or refactor artifacts. They include identical properties in a declaration, empty declarations, empty comments, selectors that never match anything, etc.

### Don't use preprocessors

Don't use preprocessor syntax, such as [Sass](https://sass-lang.com/), [Less](https://lesscss.org/), or [Stylus](https://stylus-lang.com/), in the example code. On MDN Web Docs, we document the vanilla CSS language. Using preprocessors will only raise the bar to understanding the examples, potentially confusing readers.

### Don't use specific CSS methodologies

In the same spirit as the previous guideline, don't write example codes on MDN Web Docs using a specific CSS methodology such as [BEM](https://getbem.com/naming/) or [SMACSS](https://smacss.com/). Even though they are valid CSS syntax, the naming conventions can be confusing to people not familiar with those methodologies.

### Don't use resets

For maximum control over CSS across platforms, a lot of people used to use CSS resets to remove every style, before then building things back up themselves. This certainly has its merits, but especially in the modern world, CSS resets can be an overkill, resulting in a lot of extra time spent reimplementing things that weren't completely broken in the first place, like default margins, list styles, etc.

### Pseudocode and formal syntax

Formal syntax is more front and central for CSS docs than other docs, and readers tend to understand them to some degree, so they are not forbidden. However, if your code is not syntactically well-formed CSS, do not mark it as CSS. Either mark your code block as `plain`, or use the `CSSSyntaxRaw` macro to render complete formal syntax.

Furthermore, a single value is not syntactically well-formed CSS. CSS code at least requires a property and its value. If you are documenting the `rgb()` function, write this:

```css example-good
color: rgb(31 41 59);
color: rgb(31 41 59 / 26%);
```

Don't use this style:

```css example-bad
rgb(31 41 59);
rgb(31 41 59 / 26%);
```

## Animations

### Keyframe selectors

When specifying keyframes, the `0%` and `100%` selectors can also be written as `from` and `to`. If a `@keyframes` rule _only contains_ these two selectors, use `from` and `to` instead of `0%` and `100%`. This makes your code more semantic.

```css example-bad
@keyframes example {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
```

```css example-good
@keyframes example {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
```

On the other hand, if your `@keyframes` rule contains more than just the start and end frames, use the `0%` and `100%` selectors for uniformity.

```css example-good
@keyframes example {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.8;
  }
  100% {
    opacity: 1;
  }
}
```

## Cascade, properties, and selectors

### Controlling specificity

If possible, avoid surprises for controlling specificity, such as using `:where()` or duplicating selectors. Consider:

- Changing the order of declarations
- Rearranging properties such that they don't override each other
- Using ID selectors

### !important

`!important` is the last resort that is generally used only when you need to override something and there is no other way to do it. Using `!important` is a bad practice and you should avoid it wherever possible.

```css example-bad
.bad-code {
  font-size: 4rem !important;
}
```

### Ordering

Generally, when two declarations target the same element(s), the one with higher specificity should come later in the stylesheet.

```css example-good
button {
  color: blue;
}

.my-form button {
  color: red;
}
```

Within a declaration, prefer to have related properties (such as sizing, positioning, color, etc.) located together. Custom properties should be declared at the top, which makes the code more readable if the custom property is to be used within the same block.

### Empty lines

Empty lines between declaration blocks are recommended. You can remove them if consecutive declarations are highly related, such as variations of the same utility class.

Empty lines between properties should be used sparingly. Only use them when each group of properties form a clear semantic block.

### Shorthand properties

- If _every_ constituent property of a shorthand property is specified to a non-default value, use the shorthand property instead of the constituent properties. This makes your code shorter and easier to read. Replace this:

  ```css example-bad
  margin-top: 1em;
  margin-right: 2em;
  margin-bottom: 1em;
  margin-left: 2em;
  ```

  With this:

  ```css example-good
  margin: 1em 2em;
  ```

- If _some_ constituent properties of a shorthand property are specified to a non-default value, the use of the shorthand property is optional. Both of these are acceptable:

  ```css example-good
  margin-top: 1em;
  margin-bottom: 1em;
  ```

  ```css example-good
  margin: 1em 0;
  ```

- Use the shortest shorthand syntax available. Write this:

  ```css example-good
  margin: 1em;
  ```

  Avoid these:

  ```css example-bad
  margin: 1em 1em;
  margin: 1em 1em 1em 1em;
  ```

- Write shorthand properties in the canonical order. Write this:

  ```css example-good
  border: 1px solid red;
  ```

  Don't write this:

  ```css example-bad
  border: solid red 1px;
  ```

- If you use the shorthand property, make sure none of its constituent properties are specified at the same time, because the longhand is ignored. Avoid this:

  ```css example-bad
  margin-top: 1em;
  margin: 2em; /* Oops, margin-top is ignored */
  ```

### Use class selectors

Generally, prefer class selectors (and use `class` instead of `id` in your HTML). They can be composed: multiple elements can use the same class, and the same class can be used for multiple elements.

```css example-good
.footnote {
  /* ... */
}
```

```css example-bad
#footnote {
  /* ... */
}
```

ID selectors are acceptable if unique handles are required elsewhere; for example, form controls. They are also an acceptable device for controlling specificity.

### Old pseudo-element selectors

The `::before`, `::after`, `::first-letter`, and `::first-line` pseudo-elements can also be written with single colons. Avoid the single-colon syntax because they are conceptually pseudo-elements and not pseudo-classes.

### Complex selector lists

The `:is()`, `:where()`, and `:not()` pseudo-classes accept complex selector lists. Use them to shorten your selector.

Write this:

```css example-good
input:not(:checked, :disabled) {
  /* ... */
}
```

Don't write this:

```css example-bad
input:not(:checked):not(:disabled) {
  /* ... */
}
```

## Casing

By default, all identifiers should be lowercase. This applies to selectors, functions, and keywords. Custom identifiers should use kebab-case, such as `--custom-property` or `my-animation`.

The exceptions are the keyword values defined in SVG, which for historical reasons are camelCase, and should be written as such to enhance readability. They include: `currentColor`, {{cssxref("text-rendering")}} values, {{cssxref("shape-rendering")}} values, {{cssxref("pointer-events")}} values, and {{cssxref("color-interpolation-filters")}} values.

## Colors

### Choosing a notation

Generally, if the specific color palette is not a concern, default to using common named colors. For example, use `black` instead of `rgb(0 0 0)` or `#000000`, and `green` instead of `chartreuse`.

If a specific color is needed, default to using the `rgb()` notation. `hsl()` and other functions should only be used where the particular representation has a meaning (for example, a color wheel or a gradient). Hexadecimal notation is terser but may be less readable; it is interchangeable with `rgb()` depending on which one is more convenient for you.

Whatever color function you use, always use the modern syntax: `rgb(31 41 59 / 26%)` and not the legacy comma-separated syntax. Always use the function without the `a` suffix (`rgb` instead of `rgba`), because it's shorter and doesn't require changing the name if you later decide to add an alpha channel.

When using the hexadecimal notation, always use the six (or eight) digit version to avoid cognitive load: `#aabbcc` instead of `#abc`.

### Color parameters

For consistency, all parameters should use numbers by default, instead of percentages or degrees. This includes the alpha channel too. However, if the specific representation is meaningful (for example, animations, gradients, or calculations), then use the suitable type.

If the alpha channel is `1`, omit it. Write `rgb(31 41 59)` instead of `rgb(31 41 59 / 1)`.

### Choosing colors

In addition to the recommendation of using common named colors, your color palette should meet our [accessibility guidelines](/en-US/docs/Web/Accessibility/Guides/Colors_and_Luminance). In particular, if the colors distinguish elements (such as a "red box" and a "blue box"), make sure that the colors are distinguishable by people with color vision deficiency.

## Comments

Use CSS-style comments to comment code that isn't self-documenting. Also note that you should leave a space between the asterisks and the comment.

```css example-good
/* This is a CSS-style comment */
```

Put your comments on separate lines preceding the code they are referring to, like so:

```css example-good
h3 {
  /* Creates a red drop shadow, offset 1px right and down, w/2px blur radius */
  text-shadow: 1px 1px 2px red;
  /* Sets the font-size to double the default document font size */
  font-size: 2rem;
}
```

## Fonts

### Specifying font families

When specifying a font family, always add a generic family name as the last fallback. This ensures that if the specified font is not available, the browser displays a more suitable font than the default font. [Web-safe fonts](/en-US/docs/Learn_web_development/Core/Text_styling/Fundamentals#web_safe_fonts) are exempt from this rule.

```css example-bad
body {
  font-family: "Helvetica";
}
```

```css example-good
body {
  /* The "sans-serif" family is not needed because Arial is a web-safe font */
  font-family: "Helvetica", "Arial";
}

math {
  font-family: "Latin Modern Math", "STIX Two Math", math;
}
```

### Specifying font weights

Prefer keyword values such as `normal` and `bold`, and relative weights such as `bolder` and `lighter`. Only use number values where the specific weight is desired. You should always replace `400` with `normal` and `700` with `bold`, unless for consistency with other similar declarations.

## Lengths

### Use flexible/relative units

For maximum flexibility over the widest possible range of devices, default to relative units like `em`, `rem`, percentages, and viewport units (if you want them to vary depending on viewport width) for all lengths. You can read some more about this in our [guide to CSS values and units](/en-US/docs/Learn_web_development/Core/Styling_basics/Values_and_units#relative_length_units).

Write this:

```css example-good
margin: 0.5em;
max-width: 50%;
```

Avoid this:

```css example-bad
margin: 20px;
max-width: 500px;
```

## Media queries

### Range syntax

Use the modern range syntax instead of `min-` and `max-`. The former allows specifying exclusive ranges, allows simultaneously specifying upper and lower bounds, and is overall more concise and readable.

```css example-good
@media (width >= 480px) {
  /* ... */
}
@media (600px < height < 900px) {
  /* ... */
}
```

```css example-bad
@media (min-width: 480px) {
  /* ... */
}
@media (min-height: 600px) and (max-height: 900px) {
  /* ... */
}
```

This principle extends to HTML attributes, such as the `media` attribute of `<link>` elements.

If you have different alternative styles, be especially careful with your media queries. Remember that `width` and `height` can be fractional values; make sure that with every value, there is one and only one alternative style in effect.

### Mobile-first media queries

In a stylesheet that contains [media query](/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries) styles for different target viewport sizes, first include the narrow screen/mobile styling before any other media queries are encountered. Add styling for wider viewport sizes via successive media queries. Following this rule has many advantages that are explained in [Responsive design](/en-US/docs/Learn_web_development/Core/CSS_layout/Responsive_Design).

```css example-good
/* Default CSS layout for narrow screens */

@media (width >= 480px) {
  /* CSS for medium width screens */
}

@media (width >= 800px) {
  /* CSS for wide screens */
}

@media (width >= 1100px) {
  /* CSS for really wide screens */
}
```

## Strings

Wherever quotes are optional in the CSS syntax, use them, and use double quotes. Do this:

```css example-good
[data-vegetable="liquid"] {
  background-image: url("../../media/examples/lizard.png");
  font-family: "Helvetica", "Arial";
}
```

Don't do this, because the types of characters allowed are more limited and sometimes lead to subtle syntax errors:

```css-nolint example-bad
[data-vegetable=liquid] {
  background-image: url(../../media/examples/lizard.png);
  font-family: Helvetica, Arial;
}
```

With the `@import` at-rule, specify the module path as a string, not as a `url()`.

```css example-good
@import "style.css";
```

```css example-bad
@import url("style.css");
```

## See also

[CSS reference index](/en-US/docs/Web/CSS/Reference#index) - browse through our CSS property reference pages to check out some good, concise, meaningful CSS snippets. Our interactive examples in the "Try it" section are generally written to follow the guidelines described on this page.
