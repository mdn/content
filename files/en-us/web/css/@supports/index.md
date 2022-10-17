---
title: "@supports"
slug: Web/CSS/@supports
page-type: css-at-rule
tags:
  - At-rule
  - CSS
  - Layout
  - Reference
  - Web
  - supports
browser-compat: css.at-rules.supports
---

{{CSSRef}}

The **`@supports`** [CSS](/en-US/docs/Web/CSS) [at-rule](/en-US/docs/Web/CSS/At-rule) lets you specify CSS declarations that depend on a browser's support for CSS features.
Using this at-rule is commonly called a _feature query_.
The rule must be placed at the top level of your code or nested inside any other [conditional group at-rule](/en-US/docs/Web/CSS/At-rule#conditional_group_rules).

{{EmbedInteractiveExample("pages/tabbed/at-rule-supports.html", "tabbed-standard")}}

In JavaScript, `@supports` can be accessed via the CSS object model interface {{DOMxRef("CSSSupportsRule")}}.

## Syntax

The `@supports` at-rule consists of a block of statements with a _supports condition._
The supports condition is a set of one or more name-value pairs (e.g., `<property>: <value>`).

```css
@supports (<supports-condition>) {
  /* If the condition is true, use the CSS in this block. */
}
```

The conditions can be combined by conjunctions (`and`), disjunctions (`or`), and/or negations (`not`).

```css
@supports (<supports-condition>) and (<supports-condition>) {
  /* If both conditions are true, use the CSS in this block. */
}
```

The precedence of operators can be defined with parentheses.
Supports conditions can use either a declaration syntax of `<property>: <value>` or a `<function()>` syntax.
The following sections describe the use of each type of supports condition.

### Declaration syntax

The declaration syntax checks if a browser considers any given `<property>: <value>` declaration to be valid CSS.
The declaration must be surrounded by parentheses.
The following example returns true if the browser's {{CSSxRef("transform-origin")}} property considers `5% 5%` valid:

```css
@supports (transform-origin: 5% 5%) {
}
```

### Function syntax

The function syntax checks if a browser considers the values within supported functions to be valid CSS.
The supported functions are described in the following sections.

#### `selector()` {{Experimental_Inline}}

A conditional function to evaluate if the browser supports a specific selector syntax.
The following example returns true if the browser supports the [child combinator](/en-US/docs/Web/CSS/Child_combinator):

```css
@supports selector(A > B) {
}
```

#### `font-tech()`

A conditional function to evaluate if the browser supports a specific font technology in layout and rendering.
The following example returns true if the browser supports the `COLRv1` font technology:

```css
@supports font-tech(color-COLRv1) {
}
```

This table describes the available font technologies that can be queried with this function:

| Technology          | Description                                                                                          |
| :------------------ | :--------------------------------------------------------------------------------------------------- |
| `color-colrv0`      | COLR version 0 table multi-colored glyph support                                                     |
| `color-colrv1`      | COLR version 1 table multi-colored glyph support                                                     |
| `color-svg`         | SVG table multi-colored support                                                                      |
| `color-sbix`        | Standard bitmap graphics table support                                                               |
| `color-cbdt`        | Color bitmap data table support                                                                      |
| `features-opentype` | OpenType `GSUB` and `GPOS` table support                                                             |
| `features-aat`      | TrueType `morx` and `kerx` tables                                                                    |
| `features-graphite` | Graphite feature support, namely `Silf`, `Glat` , `Gloc` , `Feat`, and `Sill` table support.         |
| `incremental`       | Incremental font loading                                                                             |
| `variations`        | Font variation support in TrueType and OpenType fonts to control the font axis, weight, glyphs, etc. |
| `palettes`          | Font pallet support by means of `font-palette` to select one of many color palettes in the font      |

#### `font-format()`

A conditional function to evaluate if the browser supports a specific font format in layout and rendering.
The following example returns true if the browser supports the `opentype` font technology:

```css
@supports font-format(opentype) {
}
```

The following table describes the available formats that can be queried with this function:

| Format              | Description                     | File extensions |
| :------------------ | :------------------------------ | :-------------- |
| `collection`        | OpenType Collection             | `.otc`, `.ttc`  |
| `embedded-opentype` | Embedded OpenType               | `.eot`          |
| `opentype`          | OpenType                        | `.ttf`, `.otf`  |
| `svg`               | SVG Font (deprecated)           | `.svg`, `.svgz` |
| `truetype`          | TrueType                        | `.ttf`          |
| `woff`              | WOFF 1.0 (Web Open Font Format) | `.woff`         |
| `woff2`             | WOFF 2.0 (Web Open Font Format) | `.woff2`        |

### The not operator

The `not` operator precedes an expression resulting in the negation of the expression.
The following returns true if the browser's {{CSSxRef("transform-origin")}} property considers `10em 10em 10em` **to be invalid:**

```css
@supports not (transform-origin: 10em 10em 10em) {
}
```

As with any operator, the `not` operator can be applied to a declaration of any complexity.
The following examples are both valid:

```css
@supports not (not (transform-origin: 2px)) {
}
@supports (display: grid) and (not (display: inline-grid)) {
}
```

> **Note:** There is no need to enclose the `not` operator between two parentheses at the top level.
> To combine it with other operators, like `and` and `or`, the parentheses are required.

### The and operator

The `and` operator creates a new expression from the conjunction of two shorter expressions. It returns true only if **both** of the shorter expressions are also true. The following example returns true if and only if the two shorter expressions are simultaneously true:

```css
@supports (display: table-cell) and (display: list-item) {
}
```

Multiple conjunctions can be juxtaposed without the need of more parentheses. The following are both equivalent:

```css
@supports (display: table-cell) and (display: list-item) and (display: contents) {
}
@supports (display: table-cell) and
  ((display: list-item) and (display: contents)) {
}
```

### The or operator

The `or` operator creates a new expression from the disjunction of two shorter expressions. It returns true if **one or both** of the shorter expressions is also true. The following example returns true if at least one of the two shorter expressions is true:

```css
@supports (transform-style: preserve) or (-moz-transform-style: preserve) {
}
```

Multiple disjunctions can be juxtaposed without the need of more parentheses. The following are both equivalent:

```css
@supports (transform-style: preserve) or (-moz-transform-style: preserve) or (-webkit-transform-style: preserve) {}

@supports (transform-style: preserve-3d) or ((-moz-transform-style: preserve-3d) or (-webkit-transform-style: preserve-3d))) {}
```

> **Note:** When using both `and` and `or` operators, the parentheses must be used to define the order in which they apply. Otherwise, the condition is invalid and the whole rule is ignored.

## Examples

### Testing for the support of a given CSS property

```css
@supports (animation-name: test) {
  /* CSS applied when animations are supported without a prefix */
  @keyframes {
    /* Other at-rules can be nested inside */
  }
}
```

### Testing for the support of a given CSS property or a prefixed version

```css
@supports ((text-stroke: 10px) or (-webkit-text-stroke: 10px) {
  /* CSS applied when text-stroke, prefixed or not, is supported */
}
```

### Testing for the non-support of a specific CSS property

```css
@supports not ((text-align-last: justify) or (-moz-text-align-last: justify)) {
  /* CSS to provide fallback alternative for text-align-last: justify */
}
```

### Testing for the support of a selector

CSS conditional rules provide the ability to test for the support of a selector such as {{cssxref(":has",":has()")}}.

```css
/* This rule won't be applied in browsers that don't support :has() */
ul:has(> li li) {
  /* CSS is applied when the :has(…) pseudo-class is supported */
}

@supports not selector(:has(a, b)) {
  /* Fallback for when :has() is unsupported */
  ul > li,
  ol > li {
    /* The above expanded for browsers that don't support :has(…) */
  }
}

/* Note: So far, there's no browser that supports the `of` argument of :nth-child(…) */
@supports selector(:nth-child(1n of a, b)) {
  /* This rule needs to be inside the @supports block, otherwise
     it will be partially applied in browsers which don't support
     the `of` argument of :nth-child(…) */
  :is(:nth-child(1n of ul, ol) a, details > summary) {
    /* CSS applied when the :is(…) selector and
       the `of` argument of :nth-child(…) are both supported */
  }
}
```

### Testing for support of a font technology

The following example returns true if the browser supports the `COLRv1` font technology:

```css
@import url("https://fonts.googleapis.com/css2?family=Bungee+Spice");

@supports font-tech(color-COLRv1) {
  font-family: "Bungee Spice";
}
```

Note that it's also possible to test for the support of a font technology using the `tech` function inside `@font-face` rules.
If the browser can't support the font technology, a fallback font (`Bungee-fallback.otf`) can be used instead:

```css
@font-face {
  font-family: "Bungee Spice";
  src: url("https://fonts.googleapis.com/css2?family=Bungee+Spice") tech(color-COLRv1),
    url("Bungee-fallback.otf") format("opentype");
}
```

### Testing for support of a font format

The following example returns true if the browser supports the `woff2` font format:

```css
@supports font-format(woff2) {
  font-family: "Open Sans";
  src: url("open-sans.woff2") format("woff2");
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using feature queries](/en-US/docs/Web/CSS/CSS_Conditional_Rules/Using_Feature_Queries)
- The CSSOM class {{DOMxRef("CSSSupportsRule")}}, and the {{DOMxRef("CSS.supports()")}} method that allows the same check to be performed via JavaScript.
