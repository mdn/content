---
title: CSS guidelines
slug: MDN/Guidelines/Code_guidelines/CSS
tags:
  - CSS
  - Code
  - Guide
  - Guidelines
  - MDN Meta
---
{{MDNSidebar}}

The following guidelines cover how to write CSS for MDN code examples.

## In this article

- [High-level guidelines](/en-US/docs/MDN/Guidelines/Code_guidelines/CSS#high-level_guidelines)

  - [Don't use preprocessors](/en-US/docs/MDN/Guidelines/Code_guidelines/CSS#dont_use_preprocessors)
  - [Don't use specific CSS methodologies](/en-US/docs/MDN/Guidelines/Code_guidelines/CSS#dont_use_specific_css_methodologies)
  - [Use flexible/relative units](/en-US/docs/MDN/Guidelines/Code_guidelines/CSS#use_flexiblerelative_units)
  - [Don't use resets](/en-US/docs/MDN/Guidelines/Code_guidelines/CSS#dont_use_resets)
  - [Plan your CSS — avoid overriding](/en-US/docs/MDN/Guidelines/Code_guidelines/CSS#plan_your_css_%e2%80%94_avoid_overriding)

- [General CSS coding style](/en-US/docs/MDN/Guidelines/Code_guidelines/CSS#general_css_coding_style)

  - [Use expanded syntax](/en-US/docs/MDN/Guidelines/Code_guidelines/CSS#use_expanded_syntax)
  - [Favor longhand rules over terse shorthand](/en-US/docs/MDN/Guidelines/Code_guidelines/CSS#favor_longhand_rules_over_terse_shorthand)
  - [Use double quotes around values](/en-US/docs/MDN/Guidelines/Code_guidelines/CSS#use_double_quotes_around_values)
  - [Spacing around function parameters](/en-US/docs/MDN/Guidelines/Code_guidelines/CSS#spacing_around_function_parameters)
  - [CSS comments](/en-US/docs/MDN/Guidelines/Code_guidelines/CSS#css_comments)
  - [Don't use !important](/en-US/docs/MDN/Guidelines/Code_guidelines/CSS#dont_use_!important)

- [Specific CSS syntax points](/en-US/docs/MDN/Guidelines/Code_guidelines/CSS#specific_css_syntax_points)

  - [Turning off borders and other properties](/en-US/docs/MDN/Guidelines/Code_guidelines/CSS#turning_off_borders_and_other_properties)
  - [Use "mobile first" media queries](/en-US/docs/MDN/Guidelines/Code_guidelines/CSS#use_mobile_first_media_queries)

- [Selectors](/en-US/docs/MDN/Guidelines/Code_guidelines/CSS#selectors)

  - [Don't use ID selectors](/en-US/docs/MDN/Guidelines/Code_guidelines/CSS#dont_use_id_selectors)
  - [Put multiple selectors on separate lines](/en-US/docs/MDN/Guidelines/Code_guidelines/CSS#put_multiple_selectors_on_separate_lines)

## High-level guidelines

### Don't use preprocessors

Don't use preprocessor syntax, e.g. [Sass](https://sass-lang.com/), [Less](https://lesscss.org/), or [Stylus,](https://stylus-lang.com/) in your MDN example code. MDN documents the vanilla CSS language, and using preprocessors only serves to raise the bar to understanding the examples, potentially confusing readers.

### Don't use specific CSS methodologies

In the same spirit as the previous guideline, don't write MDN example code using a specific CSS methodology such as [BEM](http://getbem.com/naming/) or [SMACSS](https://smacss.com/). Even though they are valid CSS syntax, the naming conventions can be confusing to people not familiar with those methodologies.

### Use flexible/relative units

For maximum flexibility over the widest possible range of devices, it is a good idea to size containers, padding, etc. using relative units like ems and rems, or percentages and viewport units if you want them to vary depending on viewport width. You can read some more about this in our [Responsive design building blocks](/en-US/docs/Web/Progressive_web_apps/Responsive/responsive_design_building_blocks#fluid_grids) article.

### Don't use resets

For maximum control over CSS across platforms, a lot of people used to use CSS resets to remove every style, before then building things back up themselves. This certainly has its merits, but especially in the modern world CSS resets can be overkill, resulting in lots of extra time spent reimplementing things that weren't completely broken in the first place, like default margins, list styles, etc.

If you really feel like you need to use a reset, consider using [normalize.css by Nicolas Gallagher](https://necolas.github.io/normalize.css/), which aims to just make things more consistent across browsers, get rid of some default annoyances that we always remove (the margins on `<body>`, for example) and fix a few bugs.

### Plan your CSS — avoid overriding

Before diving in and writing huge chunks of CSS, plan your styles carefully. What general styles are going to be needed, what different layouts do you need to create, what specific overrides need to be created, and are they reusable? Above all, you need to try to avoid too much overriding. If you keep finding yourself writing styles and then cancelling them again a few rulesets down, you probably need to rethink your strategy.

## General CSS coding style

### Use expanded syntax

There are a variety of CSS writing styles you can use, but we prefer the expanded style, with the selector/opening brace, close brace, and each declaration on a separate line. This maximizes readability, and again, promotes consistency on MDN.

Use this:

```css example-good
p {
  color: white;
  background-color: black;
  padding: 1rem;
}
```

Not this:

```css example-bad
p { color: white; background-color: black; padding: 1rem; }
```

In addition, keep these specifics in mind:

- Include a space between the selector(s) and the opening curly brace.
- Always include a semi-colon at the end of the last declaration, even though it isn't strictly necessary.
- Put the closing curly brace on a new line.
- In each declaration, put a space after the separating colon, but not before.
- Use 2 spaces for code indentation.

### Favor longhand rules over terse shorthand

Usually when teaching the specifics of CSS syntax, it is clearer and more obvious to use longhand properties, rather than terse shorthand (unless of course teaching the shorthand is the point of the example). Remember that the point of MDN examples is to teach people, not to be clever or efficient.

To start with, it is often harder to understand what the shorthand is doing. It takes a while to pick apart exactly what {{cssxref("font")}} syntax is doing, for example:

```css
font: small-caps bold 2rem/1.5 sans-serif;
```

Whereas this is more immediate in terms of understanding:

```css
font-variant: small-caps;
font-weight: bold;
font-size: 2rem;
line-height: 1.5;
font-family: sans-serif;
```

Second, CSS shorthand comes with potential added pitfalls — default values are set for parts of the syntax that you don't explicitly set, which can produce unexpected resets of values you've set earlier in the cascade, or other expected effects. The {{cssxref("grid")}} property for example sets all of the following default values for items that are not specified:

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

In addition, some shorthands only work as expected if you include the different value components in a certain order. In CSS animations for example:

```css
/* duration | timing-function | delay | iteration-count
   direction | fill-mode | play-state | name */
animation: 3s ease-in 1s 2 reverse both paused slidein;
```

As an example, the first value that can be parsed as a [`<time>`](/en-US/docs/Web/CSS/time "The <time> CSS data type represents a time value expressed in seconds or milliseconds. It is used in animation, transition, and related properties.") is assigned to the [`animation-duration`](/en-US/docs/Web/CSS/animation-duration "The animation-duration CSS property sets the length of time that an animation takes to complete one cycle."), and the second one is assigned to [`animation-delay`](/en-US/docs/Web/CSS/animation-delay "The animation-delay CSS property sets when an animation starts. The animation can start later, immediately from its beginning, or immediately and partway through the animation."). For more details, read the full [animation syntax](/en-US/docs/Web/CSS/animation#syntax) details.

### Use double quotes around values

Where quotes can or should be included, use them, and use double quotes. For example:

```css example-good
[data-vegetable="liquid"] {
  background-color: goldenrod;
  background-image: url("../../media/examples/lizard.png");
}
```

### Spacing around function parameters

Function parameters should have spaces after their separating commas, but not before:

```css example-good
color: rgb(255, 0, 0);
background-image: linear-gradient(to bottom, red, black);
```

### CSS comments

Use CSS-style comments to comment code that isn't self-documenting:

```css example-good
/* This is a CSS-style comment */
```

Put your comments on separate lines preceding the code they are referring to:

```css example-good
h3 {
  /* Creates a red drop shadow, offset 1px right and down, w/2px blur radius */
  text-shadow: 1px 1px 2px red;
  /* Sets the font-size to double the default document font size */
  font-size: 2rem;
}
```

Also note that you should leave a space between the asterisks and the comment, in each case.

### Don't use !important

`!important` is a last resort generally only used when you need to override something and there is no other way. It is a bad practice and you should avoid it wherever possible.

Bad:

```css example-bad
.bad-code {
  font-size: 4rem !important;
}
```

## Specific CSS syntax points

### Turning off borders and other properties

When turning off borders (and any other properties that can take `0` or `none` as values), use `0` rather than `none`:

```css example-good
border: 0;
```

### Use "mobile first" media queries

When including different sets of styles for different target viewport sizes using media queries inside the same stylesheet, it is a good idea to make the default styling before any media queries have been applied to the document the narrow screen/mobile styling, and then override this for wider viewports inside successive media queries.

```css example-good
/*Default CSS layout for narrow screens*/

@media (min-width: 480px) {
  /*CSS for medium width screens*/
}

@media (min-width: 800px) {
  /*CSS for wide screens*/
}

@media (min-width: 1100px) {
  /*CSS for really wide screens*/
}
```

This has many advantages, outlined in our [Mobile First](/en-US/docs/Web/Progressive_web_apps/Responsive/Mobile_first) article.

## Selectors

### Don't use ID selectors

There is really no need to use ID selectors — they are less flexible (you can't add more if you discover you need more than one), and are harder to override if needed, being of a higher specificity than classes.

Good:

```css example-good
.editorial-summary {
  ...
}
```

Bad:

```css example-bad
#editorial-summary {
  ...
}
```

### Put multiple selectors on separate lines

When a rule has multiple selectors, put each selector on a new line. This makes the selector list easier to read, and can help to make code lines shorter.

Do this:

```css example-good
h1,
h2,
h3 {
  font-family: sans-serif;
  text-align: center;
}
```

Not this:

```css example-bad
h1, h2, h3 {
  font-family: sans-serif;
  text-align: center;
}
```

## Good CSS examples on MDN

You can find good, concise, meaningful CSS snippets at the top of our CSS property reference pages — browse through our [CSS keyword index](/en-US/docs/Web/CSS/Reference#keyword_index) to find some. Our interactive examples are generally written to follow the above guidelines, although be aware that they may differ in some places as they were mostly written before the guidelines were newly written.
