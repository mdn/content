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

### Use modern CSS features when supported

You can use new features once every major browser — Chrome, Edge, Firefox, and Safari — supports them (a.k.a. {{glossary("Baseline")}}).

This rule does not apply to the CSS feature being documented on the page (which is dictated instead by the [criteria for inclusion](/en-US/docs/MDN/Writing_guidelines/Criteria_for_inclusion)). For example, you can document [non-standard or experimental](/en-US/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete) features and write complete examples demonstrating their behavior, but you should refrain from using these features in the demos for other unrelated features, such as a web API.

### Follow common best practices

There are some uniformly acknowledged principles that we don't need to exhaustively state here:

- Ensure that your code doesn't have syntax errors, which can result in the [property or declaration being ignored](/en-US/docs/Web/CSS/CSS_syntax/Error_handling). Standard syntax that hasn't been implemented is acceptable, if it fits our [general rule about modern CSS features](#use_modern_css_features_when_supported).
- Don't use [non-standard, deprecated, or obsolete](/en-US/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete) features. This guideline extends to [prefixed features](/en-US/docs/Glossary/Vendor_Prefix#css_prefixes): use the prefixed alternative _only if_ the standard feature is not available (see our [general rule about modern CSS features](#use_modern_css_features_when_supported)). If the reader needs broader compatibility, they can either add the prefixed fallback themselves or use a CSS postprocessor.
- Don't write redundant or non-functional code, which is a common indicator of bugs or refactoring leftovers. This includes repeated properties in a declaration, empty declarations, empty comments, or selectors that don't match any elements.

### Don't use preprocessors

Don't use preprocessor syntax, such as [Sass](https://sass-lang.com/), [Less](https://lesscss.org/), or [Stylus](https://stylus-lang.com/), in the example code. On MDN Web Docs, we document the vanilla CSS language. Using preprocessors will only raise the bar to understanding the examples, potentially confusing readers.

### Don't use specific CSS methodologies

In the same spirit as the previous guideline, don't write example codes on MDN Web Docs using a specific CSS methodology such as [BEM](https://getbem.com/naming/) or [SMACSS](https://smacss.com/). Even though they are valid CSS syntax, the naming conventions can be confusing to people not familiar with those methodologies.

### Don't use resets

For maximum control over CSS across platforms, many people used to use CSS resets to remove all styles before then building things back up themselves. This certainly has its merits, but especially in the modern world, CSS resets can be overkill, resulting in a lot of extra time spent reimplementing things that weren't completely broken in the first place, such as default margins and list styles.

### Formal syntax and pseudocode

Formal syntax is an integral part of MDN's CSS documentation (as an example, see the [Formal syntax](/en-US/docs/Web/CSS/Reference/Properties/background-image#formal_syntax) section on the `background-image` property page). Because a lot of developers are familiar with syntax in this format, it's acceptable to write pseudocode in a formal-syntax-like fashion in descriptions and examples. However, any code that is not syntactically well-formed CSS should not be marked as CSS. Syntax errors in `css` code blocks result in the code being unparsable by static checkers, confuse readers who expect to see valid CSS code, and may even result in nonsensical syntax highlighting. Either mark your code block as `plain`, or use the `CSSSyntaxRaw` macro to render the complete formal syntax.

Don't write descriptions like this (this is not real formal syntax anyway; it's just pseudo-CSS with some placeholders):

````md example-bad
The `border` property has the following general form:

```css
border: <border-width> <border-style> <border-color>;
```
````

Instead, use `plain`:

````md example-good
The `border` property has the following general form:

```plain
border: <border-width> <border-style> <border-color>;
```
````

Or, when you feel appropriate, write actual formal syntax using the `CSSSyntaxRaw` macro:

```md example-good
The `border` property is specified as a line width, a line style, and a color, in any order:

\{{CSSSyntaxRaw(`border = <line-width> || <line-style> || <color>`)}}
```

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

Note that this rule does not apply to the first code block in the "Syntax" section, which is specified instead by [Syntax sections](/en-US/docs/MDN/Writing_guidelines/Page_structures/Syntax_sections#css_reference_syntax), and requires functions to be written without the property name.

## Animations

### Keyframe selectors

When specifying keyframes, the `0%` and `100%` selectors can also be written as `from` and `to`. If a `@keyframes` rule _only contains_ these two selectors, use `from` and `to` instead of `0%` and `100%`. This makes your code more semantic.

So avoid this:

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

Use `from` and `to` instead:

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

If possible, avoid surprises for increasing or decreasing specificity, such as overusing the [`:where()`](/en-US/docs/Web/CSS/Reference/Selectors/:where) pseudo-class or duplicating selectors. Instead, consider the following techniques to manage specificity:

- Changing the order of declarations to take advantage of the cascade
- Rearranging properties in each declaration such that they don't override each other
- Using ID selectors, in cases where the HTML [`id` itself is justified](#use_class_selectors)

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

Within a declaration, prefer to have related properties (such as for sizing, positioning, and color) located together. Custom properties should be declared at the top of the declaration block, which allows quick identification of all available custom properties.

### Empty lines

Empty lines between declaration blocks are recommended. You can remove them if consecutive declarations are highly related, such as variations of the same utility class.

Empty lines between properties should be used sparingly. Add them only when each group of properties forms a clear semantic block.

### Shorthand properties

- If _every_ constituent property of a shorthand property is assigned a non-default value, use the shorthand property instead of the constituent longhand properties. This makes your code shorter and easier to read.

  Replace these longhand properties:

  ```css example-bad
  margin-top: 1em;
  margin-right: 2em;
  margin-bottom: 1em;
  margin-left: 2em;
  ```

  with their corresponding shorthand:

  ```css example-good
  margin: 1em 2em;
  ```

- If only _some_ constituent properties of a shorthand property are assigned a non-default value, the use of the shorthand property is optional. Both of these are acceptable:

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

- Write shorthand properties in the [canonical order](/en-US/docs/Glossary/Canonical_order). Write this:

  ```css example-good
  /* width style color */
  border: 1px solid red;
  ```

  Don't write this:

  ```css example-bad
  border: solid red 1px;
  ```

- For every shorthand, either use it or its longhand constituents, and never a mix of both, because the overriding relationship is complex and bug-prone. Avoid these:

  ```css example-bad
  margin-top: 1em;
  margin: 2em; /* Oops, margin-top is ignored */

  border-width: 1px;
  border-bottom-width: 5px; /* Overrides one border's width *only* */
  ```

### Use class selectors

Generally, prefer [class selectors](/en-US/docs/Web/CSS/Reference/Selectors/Class_selectors) (and use `class` instead of `id` in your HTML). They can be composed: multiple elements can use the same class, and the same class can be used for multiple elements.

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

Use classes for styling, and reserve IDs for non-CSS purposes, such as for use in JavaScript or for linking to unique page anchors (`<a href="#section1">`). In the case where the use of ID is justified, you can use it as a selector, potentially to [control specificity](#controlling_specificity).

### Old pseudo-element selectors

The `::before`, `::after`, `::first-letter`, and `::first-line` [pseudo-elements](/en-US/docs/Web/CSS/Reference/Selectors/Pseudo-elements) can also be written with single colons (like `:before`). Avoid the single-colon syntax because it is discouraged and could be misidentified as a [pseudo-class](/en-US/docs/Web/CSS/Reference/Selectors/Pseudo-classes) (`:hover`) by readers.

### Complex selector lists

The `:is()`, `:where()`, and `:not()` pseudo-classes accept [complex selector lists](/en-US/docs/Web/CSS/CSS_selectors/Selector_structure#complex_selector). Use them to shorten your selector.

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

By default, all identifiers should be lowercase. This applies to selectors, functions, and keywords. Custom identifiers should use [kebab-case](/en-US/docs/Glossary/Kebab_case), such as `--custom-property` or `my-animation`. See the [HTML style guide](/en-US/docs/MDN/Writing_guidelines/Code_style_guide/HTML#casing_convention_on_mdn) for casing conventions of HTML IDs and classes which are referenced as CSS selectors.

Exceptions include keyword values defined in SVG, which for historical reasons are [camelCase](/en-US/docs/Glossary/Camel_case), and should be written as such to enhance readability. These keywords include: [`currentColor`](/en-US/docs/Web/CSS/color_value#currentcolor_keyword), {{cssxref("text-rendering")}} values, {{cssxref("shape-rendering")}} values, {{cssxref("pointer-events")}} values, and {{cssxref("color-interpolation-filters")}} values.

## Colors

### Choosing a notation

Generally, if the specific color palette is not a concern, default to using common named colors. For example, use `black` instead of `rgb(0 0 0)` or `#000000`, and `green` instead of `chartreuse`.

If a specific color is needed, default to using the `rgb()` notation. `hsl()` and other functions should only be used where the particular representation has a meaning (for example, a color wheel or a gradient). Hexadecimal notation is terser but may be less readable; it is interchangeable with `rgb()` depending on which one is more convenient for you.

Whatever color function you use, always use the modern syntax (`rgb(31 41 59 / 0.26)`), not the legacy comma-separated one. Always use the function without the `a` suffix (`rgb` instead of `rgba`), because it's shorter and doesn't require changing the name if you later decide to add or remove the alpha channel.

When using the hexadecimal notation, always use the six (or eight) digit version to avoid cognitive load: `#aabbcc` instead of `#abc`.

### Color parameters

For consistency, all parameters should use numbers by default instead of percentages or degrees. This also applies to the alpha channel. However, if a specific representation is meaningful (for example, in animations, gradients, or calculations), use the suitable type in the context.

If the alpha channel is `1`, omit it. Write `rgb(31 41 59)` instead of `rgb(31 41 59 / 1)`.

### Choosing colors

In addition to the recommendation of using common named colors, your color palette should meet our [accessibility guidelines](/en-US/docs/Web/Accessibility/Guides/Colors_and_Luminance). In particular, if the colors distinguish elements (such as a "red box" and a "blue box"), ensure that the colors are distinguishable to people with color vision deficiency. Aim for at least 4.5:1 [contrast ratio](/en-US/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast) (WCAG AA) between text and background.

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

When specifying a font family, always add a [generic font family](/en-US/docs/Web/CSS/Reference/Properties/font-family#generic-name) name as the last fallback. This ensures that if the specified font is not available, the browser displays a more suitable fallback font. [Web-safe fonts](/en-US/docs/Learn_web_development/Core/Text_styling/Fundamentals#web_safe_fonts) are exempt from this rule.

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

Prefer keyword values such as `normal` and `bold`, and relative weights such as `bolder` and `lighter`. Only use number values where the specific weight is desired. You should always replace `400` with `normal` and `700` with `bold`, except when declaring ranges with variable fonts, or for consistency with other similar declarations.

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

This principle extends to non-CSS usage of media queries, such as the [`media`](/en-US/docs/Web/HTML/Reference/Elements/link#media) attribute of `<link>` elements or {{domxref("window.matchMedia()")}}.

If you have different alternative styles selected by media thresholds, be especially careful with your media queries. Remember that `width` and `height` can be fractional values; make sure that with every value, there is one and only one alternative style in effect.

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

Don't do the following, because the types of characters allowed are more limited and sometimes lead to subtle syntax errors:

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
