---
title: Guidelines for styling CSS code examples
slug: MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/CSS
page-type: mdn-writing-guide
tags:
  - meta
  - writing-guide
---
{{MDNSidebar}}

The following guidelines cover how to write CSS example code for MDN Web Docs.

## General guidelines for CSS code examples

### Plan your CSS

Before diving in and writing huge chunks of CSS, plan your styles carefully. What general styles are going to be needed, what different layouts do you need to create, what specific overrides need to be created, and are they reusable? Above all, you need to try to **avoid too much overriding**. If you keep finding yourself writing styles and then cancelling them again a few rules down, you probably need to rethink your strategy.

### Use flexible/relative units

For maximum flexibility over the widest possible range of devices, it is a good idea to size containers, padding, etc. using relative units like ems and rems or percentages and viewport units if you want them to vary depending on viewport width. You can read some more about this in our [Responsive design building blocks](/en-US/docs/Web/Progressive_web_apps/Responsive/responsive_design_building_blocks#fluid_grids) article.

### Don't use preprocessors

Don't use preprocessor syntax, such as [Sass](https://sass-lang.com/), [Less](https://lesscss.org/), or [Stylus,](https://stylus-lang.com/), in the example code. On MDN Web Docs, we document the vanilla CSS language. Using preprocessors will only raise the bar to understanding the examples, potentially confusing readers.

### Don't use specific CSS methodologies

In the same spirit as the previous guideline, don't write example codes on MDN Web Docs using a specific CSS methodology such as [BEM](http://getbem.com/naming/) or [SMACSS](http://smacss.com/). Even though they are valid CSS syntax, the naming conventions can be confusing to people not familiar with those methodologies.

### Don't use resets <!--is this valid in current times-->

For maximum control over CSS across platforms, a lot of people used to use CSS resets to remove every style, before then building things back up themselves. This certainly has its merits, but especially in the modern world, CSS resets can be an overkill, resulting in a lot of extra time spent reimplementing things that weren't completely broken in the first place, like default margins, list styles, etc.

If you really feel like you need to use a reset, consider using [normalize.css by Nicolas Gallagher](https://necolas.github.io/normalize.css/), which aims to just make things more consistent across browsers, get rid of some default annoyances that we always remove (the margins on `<body>`, for example) and fix a few bugs.

## !important

`!important` is the last resort that is generally used only when you need to override something and there is no other way to do it. Using `!important` is a bad practice and you should avoid it wherever possible.

```css example-bad
.bad-code {
  font-size: 4rem !important;
}
```

## CSS comments

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

## Double quotes around values

Where quotes can or should be included, use them, and use double quotes. For example:

```css example-good
[data-vegetable="liquid"] {
  background-color: goldenrod;
  background-image: url("../../media/examples/lizard.png");
}
```

## Longhand vs. shorthand rules

Usually when teaching the specifics of CSS syntax, it is clearer and more obvious to use longhand properties, rather than terse shorthand (unless of course you're explaining shorthand through the example). Remember that the point of examples on MDN Web Docs is to teach people, not to be clever or efficient. We explain here why recommend writing longhand rules.

- It is often harder to understand what the shorthand is doing. In the example below, it takes a while to pick apart exactly what the {{cssxref("font")}} syntax is doing.

  ```css
  font: small-caps bold 2rem/1.5 sans-serif;
  ```

  Whereas the following style is clearer:

  ```css
  font-variant: small-caps;
  font-weight: bold;
  font-size: 2rem;
  line-height: 1.5;
  font-family: sans-serif;
  ```

- CSS shorthand comes with potential added pitfalls — default values are set for parts of the syntax that you don't explicitly set, which can produce unexpected resets of values you've set earlier in the cascade or other expected effects. The {{cssxref("grid")}} property, for example, sets all of the following default values for items that are not specified:

  - {{cssxref("grid-template-rows")}}: `none`
  - {{cssxref("grid-template-columns")}}: `none`
  - {{cssxref("grid-template-areas")}}: `none`
  - {{cssxref("grid-auto-rows")}}: `auto`
  - {{cssxref("grid-auto-columns")}}: `auto`
  - {{cssxref("grid-auto-flow")}}: `row`
  - {{cssxref("column-gap")}}: `0`
  - {{cssxref("row-gap")}}: `0`
  - {{cssxref("column-gap")}}: `normal`
  - {{cssxref("row-gap")}}: `normal`

- Some shorthands only work as expected if you include the different value components in a certain order. This is the case in CSS animations. In the example below, the expected order is written as a comment:

  ```css
  /* duration | timing-function | delay | iteration-count
    direction | fill-mode | play-state | name */
  animation: 3s ease-in 1s 2 reverse both paused slidein;
  ```

  In this example, the first value that can be parsed as a [`<time>`](/en-US/docs/Web/CSS/time) is assigned to the [`animation-duration`](/en-US/docs/Web/CSS/animation-duration) property, and the second value that can be parsed as time is assigned to [`animation-delay`](/en-US/docs/Web/CSS/animation-delay). (For more information, see [animation syntax](/en-US/docs/Web/CSS/animation#syntax) details.)

## Mobile-first media queries

In a stylesheet that contains [media query](/en-US/docs/Web/CSS/Media_Queries/Using_media_queries) styles for different target viewport sizes, first include the narrow screen/mobile styling before any other media queries are encountered. Add styling for wider viewport sizes via successive media queries. Following this rule has many advantages that are explained in the [Mobile First](/en-US/docs/Web/Progressive_web_apps/Responsive/Mobile_first) article.

```css example-good
/* Default CSS layout for narrow screens */

@media (min-width: 480px) {
  /* CSS for medium width screens */
}

@media (min-width: 800px) {
  /* CSS for wide screens */
}

@media (min-width: 1100px) {
  /* CSS for really wide screens */
}
```

## Selectors

- Don't use ID selectors because they are:
  - less flexible; you can't add more if you discover you need more than one.
  - harder to override because they have higher specificity than classes.

  ```css example-good
  .editorial-summary {
    ...
  }
  ```

  ```css example-bad
  #editorial-summary {
    ...
  }
  ```

- When a rule has multiple selectors, put each selector on a new line. This makes the selector list easier to read and can help to make code lines shorter.

  Do this:

  ```css example-good
  h1,
  h2,
  h3 {
    font-family: sans-serif;
    text-align: center;
  }
  ```

  Not this: <!--I thought this is the preferred style-->

  ```css example-bad
  h1, h2, h3 {
    font-family: sans-serif;
    text-align: center;
  }
  ```

## Space after function parameters

Function parameters should have spaces after their separating commas, but not before:

```css example-good
color: rgb(255, 0, 0);
background-image: linear-gradient(to bottom, red, black);
```

## Syntax style

There are a variety of CSS writing styles you can use, but we prefer the expanded style, with the selector/opening brace, close brace, and each declaration on a separate line. This maximizes readability, and again, promotes consistency on MDN Web Docs.

In addition, keep these specifics in mind:

- Include a space between the selector(s) and the opening curly brace.
- Always include a semi-colon at the end of the last declaration, even though it isn't strictly necessary.
- Put the closing curly brace on a new line.
- In each declaration, put a space after the separating colon, but not before.
- Use two spaces for code indentation.

```css example-good
p {
  color: white;
  background-color: black;
  padding: 1rem;
}
```

```css example-bad
p { color: white; background-color: black; padding: 1rem; }
```

## Value to turn off properties

When turning off borders (and any other properties that can take `0` or `none` as values), use `0` rather than `none`:

```css example-good
border: 0;
```

## See also

[CSS reference index](/en-US/docs/Web/CSS/Reference#index) - browse through our CSS property reference pages to check out some good, concise, meaningful CSS snippets. Our interactive examples in the "Try it" section are generally written to follow the  guidelines described on this page.
