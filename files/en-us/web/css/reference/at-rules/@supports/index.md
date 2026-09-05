---
title: "`@supports` CSS at-rule"
short-title: "@supports"
slug: Web/CSS/Reference/At-rules/@supports
page-type: css-at-rule
browser-compat: css.at-rules.supports
sidebar: cssref
---

The **`@supports`** [CSS](/en-US/docs/Web/CSS) [at-rule](/en-US/docs/Web/CSS/Guides/Syntax/At-rules) lets you specify CSS declarations that depend on a browser's support for CSS features.
Using this at-rule is commonly called a _feature query_.
The rule must be placed at the top level of your code or nested inside any other conditional group at-rule.

In JavaScript, `@supports` can be accessed via the CSS object model interface {{DOMxRef("CSSSupportsRule")}}.

{{InteractiveExample("CSS Demo: @supports", "tabbed-standard")}}

```css interactive-example
.flex-container > * {
  padding: 0.3em;
  list-style-type: none;
  text-shadow: 0 0 2px red;
  float: left;
}

@supports (display: flex) {
  .flex-container > * {
    text-shadow: 0 0 2px blue;
    float: none;
  }

  .flex-container {
    display: flex;
  }
}
```

```html interactive-example
<ul class="flex-container">
  <li><a href="#">Index</a></li>
  <li><a href="#">About me</a></li>
  <li><a href="#">Contact</a></li>
</ul>
```

## Syntax

```css
@supports (<supports-condition>) {
  /* If the condition is true, use the CSS in this block. */
}

@supports (<supports-condition>) and (<supports-condition>) {
  /* If both conditions are true, use the CSS in this block. */
}
```

The `@supports` at-rule consists of a block of statements with a _supports condition._
The conditions can be combined by conjunctions (`and`), disjunctions (`or`), and/or negations (`not`).
The precedence of operators can be defined with parentheses.

Supports conditions can use either a `<property>: <value>` declaration syntax or a `<function()>` syntax.
The following sections describe the use of each type of supports condition.

### Declaration syntax

The declaration syntax checks if a browser supports the specified `<property>: <value>` declaration.
The declaration must be surrounded by parentheses.
The following example returns true if the browser supports the expression `transform-origin: 5% 5%`:

```css
@supports (transform-origin: 5% 5%) {
}
```

### Function syntax

The function syntax checks if a browser supports values or expressions within the function.
The functions supported in the function syntax are described in the following sections.

#### `at-rule()`

The `at-rule()` function checks whether a browser supports the specified [at-rule](/en-US/docs/Web/CSS/Guides/Syntax/At-rules).
The following example returns true and applies the contained CSS styles if the browser supports the {{cssxref("@keyframes")}} at-rule:

```css
@supports at-rule(@keyframes) {
}
```

#### `font-format()`

The `font-format()` function checks whether a browser supports the specified font format for layout and rendering.
The following example returns true and applies the contained CSS styles if the browser supports the `opentype` font format:

```css
@supports font-format(opentype) {
}
```

The following table describes the available formats (`<font-format>` values) that can be queried with this function:

| Format              | Description                     | File extensions |
| :------------------ | :------------------------------ | :-------------- |
| `collection`        | OpenType Collection             | `.otc`, `.ttc`  |
| `embedded-opentype` | Embedded OpenType               | `.eot`          |
| `opentype`          | OpenType                        | `.ttf`, `.otf`  |
| `svg`               | SVG Font (deprecated)           | `.svg`, `.svgz` |
| `truetype`          | TrueType                        | `.ttf`          |
| `woff`              | WOFF 1.0 (Web Open Font Format) | `.woff`         |
| `woff2`             | WOFF 2.0 (Web Open Font Format) | `.woff2`        |

#### `font-tech()`

The `font-tech()` function checks whether a browser supports the specified font technology for layout and rendering.
The following example returns true and applies the contained CSS styles if the browser supports the `COLRv1` font technology:

```css
@supports font-tech(color-COLRv1) {
}
```

The table below describes the font technologies (`<font-tech>`), including color font technologies (`<color-font-tech>`), font feature technologies (`<font-features-tech>`), and other available font technologies that can be queried using the `font-tech()` function:

| Technology                     | Supports                                                                                      |
| :----------------------------- | :-------------------------------------------------------------------------------------------- |
| **`<color-font-tech>`**        |                                                                                               |
| `color-colrv0`                 | Multi-colored glyphs via COLR version 0 table                                                 |
| `color-colrv1`                 | Multi-colored glyphs via COLR version 1 table                                                 |
| `color-svg`                    | SVG multi-colored tables                                                                      |
| `color-sbix`                   | Standard bitmap graphics tables                                                               |
| `color-cbdt`                   | Color bitmap data tables                                                                      |
| **`<font-features-tech>`**     |                                                                                               |
| `features-opentype`            | OpenType `GSUB` and `GPOS` tables                                                             |
| `features-aat`                 | TrueType `morx` and `kerx` tables                                                             |
| `features-graphite`            | Graphite features, namely `Silf`, `Glat`, `Gloc`, `Feat`, and `Sill` tables                   |
| **Other `<font-tech>` values** |                                                                                               |
| `incremental-patch`            | Incremental font loading using the patch subset method                                        |
| `incremental-range`            | Incremental font loading using the range request method                                       |
| `incremental-auto`             | Incremental font loading using method negotiation                                             |
| `variations`                   | Font variations in TrueType and OpenType fonts to control the font axis, weight, glyphs, etc. |
| `palettes`                     | Font palettes by means of `font-palette` to select one of many color palettes in the font     |

#### `named-feature()`

The `named-feature()` function checks whether a browser supports the specified named feature. The following example returns true and applies the contained CSS styles if the browser supports the [`anchor-position-follows-transforms`](#anchor-position-follows-transforms) feature:

```css
@supports named-feature(anchor-position-follows-transforms) {
}
```

The following {{cssxref("ident")}} values can be specified as arguments for the `named-feature()` function:

- `anchor-position-follows-transforms`
  - : Checks whether the browser's [anchor positioning](/en-US/docs/Web/CSS/Guides/Anchor_positioning) calculations are [transform](/en-US/docs/Web/CSS/Guides/Transforms)-aware. In other words, when an anchor element has transforms applied, do elements positioned relative to that anchor have their placement shifted to the correct position relative to the anchor's transformed size or position? Older versions of the anchor positioning specification did not take transforms into account.

These named features represent valuable conditions that are not possible to test using other `@supports` mechanisms.

> [!NOTE]
> The specification also defines the [`single-axis-scroll-container`](https://drafts.csswg.org/css-conditional-5/#single-axis-scroll-container) feature. However, this is not currently supported in any browser.

#### `selector()`

The `selector()` function checks whether a browser supports the specified selector syntax.
The following example returns true and applies the contained CSS styles if the browser supports the [child combinator](/en-US/docs/Web/CSS/Reference/Selectors/Child_combinator):

```css
@supports selector(h2 > p) {
}
```

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

> [!NOTE]
> There is no need to enclose the `not` operator between two parentheses at the top level.
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
@supports (transform-style: preserve) or (-moz-transform-style: preserve) or
  (-webkit-transform-style: preserve) {
}

@supports (transform-style: preserve-3d) or
  (
    (-moz-transform-style: preserve-3d) or
      (-webkit-transform-style: preserve-3d)
  ) {
}
```

> [!NOTE]
> When using both `and` and `or` operators, the parentheses must be used to define the order in which they apply. Otherwise, the condition is invalid and the whole rule is ignored.

## Formal syntax

{{csssyntax}}

## Examples

### Testing for the support of a CSS property

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
@supports (text-stroke: 10px) or (-webkit-text-stroke: 10px) {
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

### Testing for the support of a font technology

The following example applies the [Bungee Spice](https://fonts.google.com/specimen/Bungee+Spice) color font if the browser supports the `COLRv1` font technology:

```css
@supports font-tech(color-COLRv1) {
  body {
    font-family: "Bungee Spice", fantasy;
  }
}
```

It's also possible to test for the support of a font technology by using the `tech` function inside the {{CSSxRef("@font-face")}} at-rule.
In the following example, if a browser doesn't support the color font technology in the [`bungee-spice.woff2`](https://fonts.google.com/specimen/Bungee+Spice) font, a regular [`bungee.woff2`](https://fonts.google.com/specimen/Bungee) font will be used instead.

```css
@font-face {
  font-family: "Bungee Spice";
  src:
    url("bungee-spice.woff2") tech(color-COLRv1) format("woff2"),
    url("bungee.woff2") format("woff2");
}
```

### Testing for the support of a font format

The following example uses the WOFF2 version of the font if the browser supports this font format, otherwise it falls back to the previously specified WOFF version:

```css
@font-face {
  font-family: "Open Sans WOFF";
  src: url("open-sans.woff") format("woff");
}

@font-face {
  font-family: "Open Sans WOFF2";
  src: url("open-sans.woff2") format("woff2");
}

body {
  font-family: "Open Sans WOFF", sans-serif;
}

@supports font-format(woff2) {
  body {
    font-family: "Open Sans WOFF2", sans-serif;
  }
}
```

However, a more efficient way to specify multiple font formats is to list them in the `src` descriptor of a single {{cssxref("@font-face")}} at-rule in the order from the most preferred format to the least preferred:

```css
@font-face {
  font-family: "Open Sans";
  src:
    url("open-sans.woff2") format("woff2"),
    url("open-sans.woff") format("woff");
}

body {
  font-family: "Open Sans", sans-serif;
}
```

### Testing for the support of an at-rule

The following example applies a set of scoped color scheme styles if the browser supports the {{cssxref("@scope")}} at-rule:

```css
@supports at-rule(@scope) {
  @scope (.light-scheme) {
    :scope {
      background-color: plum;
    }

    a {
      color: darkmagenta;
    }
  }

  @scope (.dark-scheme) {
    :scope {
      background-color: darkmagenta;
      color: antiquewhite;
    }

    a {
      color: plum;
    }
  }
}
```

### Testing for the support of a named feature

This example shows how to use the `named-feature()` function to adjust [anchor-positioning](/en-US/docs/Web/CSS/Guides/Anchor_positioning) instances when a transform is applied to an anchor element and the browser doesn't automatically shift anchor-positioned element placement to account for the anchor element's transformed size, position, etc.

#### HTML

We include two {{htmlelement("div")}} elements to represent our anchor and positioned elements:

```html live-sample___named-feature
<div class="anchor" tabindex="0">Anchor</div>

<div class="positionedElem">Positioned</div>
```

#### CSS

We store the size of our anchor element in a [CSS custom property](/en-US/docs/Web/CSS/Reference/Properties/--*), and use that to define the size of the first `<div>` element, which we designate as an anchor by giving it an {{cssxref("anchor-name")}}:

```css live-sample___named-feature
:root {
  --anchor-length: 100px;
}

.anchor {
  anchor-name: --myAnchor;
  width: var(--anchor-length);
  height: var(--anchor-length);
}
```

```css hidden live-sample___named-feature
.anchor,
.positionedElem {
  border: 1px solid gray;
  background-color: lightgray;
  display: flex;
  justify-content: center;
  align-items: center;
}
```

We position our second `<div>` relative to the first `<div>` by setting its {{cssxref("position")}} to `absolute`, setting its {{cssxref("position-anchor")}} equal to the first `<div>`'s `anchor-name` identifier, and setting its {{cssxref("left")}} and {{cssxref("top")}} properties to {{cssxref("anchor()")}} functions. The `anchor(right)` function positions the positioned element's left edge next to the anchor's right edge, while `top: anchor(top);` positions the two element's top edges flush with one another. Finally, we set a {{cssxref("margin-left")}} of `20px` to create some horizontal space between the two elements:

```css live-sample___named-feature
.positionedElem {
  position: absolute;
  position-anchor: --myAnchor;
  left: anchor(right);
  top: anchor(top);
  margin-left: 20px;
}
```

On {{cssxref(":hover")}} and {{cssxref(":focus")}}, we {{cssxref("scale")}} the anchor by a factor of `1.5`. We set its {{cssxref("transform-origin")}} to `top left` so that the anchor's top-left corner stays in the same place, and the scaling happens towards the bottom-right corner:

```css live-sample___named-feature
.anchor:hover,
.anchor:focus {
  transform-origin: top left;
  scale: 1.5;
}
```

We can detect browsers that don't automatically adjust transformed anchor-positioned elements when their anchors are transformed using `@supports not named-feature(anchor-position-follows-transforms)` and manually correct the positioned element's position by setting the `left` value to `anchor(right)` plus half the `--anchor-length` custom property value when the anchor element is hovered or focused:

```css live-sample___named-feature
@supports not named-feature(anchor-position-follows-transforms) {
  .anchor:hover + .positionedElem,
  .anchor:focus + .positionedElem {
    left: calc(anchor(right) + (var(--anchor-length) * 0.5));
  }
}
```

#### Result

{{embedlivesample("named-feature", "100%", 200)}}

Hover or focus the anchor `<div>` to transform it; you should see the positioned `<div>` move over so that it is still positioned the same distance from the anchor's right edge, both in browsers with transform-aware anchor positioning, and those without.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using feature queries](/en-US/docs/Web/CSS/Guides/Conditional_rules/Using_feature_queries)
- [CSS at-rule functions](/en-US/docs/Web/CSS/Reference/At-rules/At-rule_functions)
- {{DOMxRef("CSSSupportsRule")}}
- {{DOMxref("CSS.supports_static", "CSS.supports()")}} method
