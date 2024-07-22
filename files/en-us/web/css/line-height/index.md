---
title: line-height
slug: Web/CSS/line-height
page-type: css-property
browser-compat: css.properties.line-height
---

{{CSSRef}}

The **`line-height`** [CSS](/en-US/docs/Web/CSS) property sets the height of a line box in horizontal [writing modes](/en-US/docs/Web/CSS/writing-mode#vertical-rl). In vertical writing modes, it sets the width of a line box. It's commonly used to set the distance between lines of text. On block-level elements in horizontal writing modes, it specifies the preferred height of line boxes within the element, and on non-[replaced](/en-US/docs/Web/CSS/Replaced_element) inline elements, it specifies the height that is used to calculate line box height.

{{EmbedInteractiveExample("pages/css/line-height.html")}}

## Syntax

```css
/* Keyword value */
line-height: normal;

/* Unitless values: use this number multiplied
by the element's font size */
line-height: 3.5;

/* <length> values */
line-height: 3em;

/* <percentage> values */
line-height: 34%;

/* Global values */
line-height: inherit;
line-height: initial;
line-height: revert;
line-height: revert-layer;
line-height: unset;
```

The `line-height` property is specified as any one of the following:

- a `<number>`
- a `<length>`
- a `<percentage>`
- the keyword `normal`.

### Values

- `normal`
  - : Depends on the user agent. Desktop browsers (including Firefox) use a default value of roughly **`1.2`**, depending on the element's `font-family`.
- `<number>` (unitless)
  - : The used value is this unitless {{cssxref("&lt;number&gt;")}} multiplied by the element's own font size. The computed value is the same as the specified `<number>`. In most cases, **this is the preferred way** to set `line-height` and avoid unexpected results due to inheritance.
- `<length>`
  - : The specified {{cssxref("&lt;length&gt;")}} is used in the calculation of the line box height. Values given in **em** units may produce unexpected results (see example below).
- `<percentage>`
  - : Relative to the font size of the element itself. The computed value is this {{cssxref("&lt;percentage&gt;")}} multiplied by the element's computed font size. **Percentage** values may produce unexpected results (see the second example below).

## Accessibility concerns

Use a minimum value of `1.5` for `line-height` for main paragraph content. This will help people experiencing low vision conditions, as well as people with cognitive concerns such as Dyslexia. If the page is zoomed to increase the text size, using a unitless value ensures that the line height will scale proportionately.

[W3C Understanding WCAG 2.1](https://www.w3.org/TR/WCAG21/#visual-presentation)

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Basic example

```css
/* All rules below have the same resultant line height */

/* number/unitless */
div {
  line-height: 1.2;
  font-size: 10pt;
}

/* length */
div {
  line-height: 1.2em;
  font-size: 10pt;
}

/* percentage */
div {
  line-height: 120%;
  font-size: 10pt;
}

/* font shorthand */
div {
  font:
    10pt/1.2 Georgia,
    "Bitstream Charter",
    serif;
}
```

It is often more convenient to set `line-height` by using the {{cssxref("font")}} shorthand as shown above, but this requires the `font-family` property to be specified as well.

### Prefer unitless numbers for line-height values

This example shows why it is better to use {{cssxref("&lt;number&gt;")}} values instead of {{cssxref("&lt;length&gt;")}} values. We will use two {{HTMLElement("div")}} elements. The first div, with the green border, uses a unitless `line-height` value. The second div, with the red border, uses a `line-height` value defined in `em`s.

#### HTML

```html
<div class="box green">
  <h1>Avoid unexpected results by using unitless line-height.</h1>
  Length and percentage line-heights have poor inheritance behavior.
</div>

<div class="box red">
  <h1>Avoid unexpected results by using unitless line-height.</h1>
  Length and percentage line-heights have poor inheritance behavior
</div>

<!-- The first <h1> line-height is calculated from its own font-size   (30px × 1.1) = 33px -->
<!-- The second <h1> line-height results from the red div's font-size  (15px × 1.1) = 16.5px, probably not what you want -->
```

#### CSS

```css
.green {
  line-height: 1.1;
  border: solid limegreen;
}

.red {
  line-height: 1.1em;
  border: solid red;
}

h1 {
  font-size: 30px;
}

.box {
  width: 18em;
  display: inline-block;
  vertical-align: top;
  font-size: 15px;
}
```

#### Result

{{EmbedLiveSample('Prefer_unitless_numbers_for_line-height_values', 600, 200)}}

### Space between lines in vertical writing modes

The `line-height` property can be used to adjust space between vertical lines in vertical writing modes.

```html hidden
<div class="haiku">
  古池や蛙飛び込む水の音<br />
  ふるいけやかわずとびこむみずのおと<br />
  富士の風や扇にのせて江戸土産<br />
  ふじのかぜやおうぎにのせてえどみやげ<br />
</div>

<div class="haiku wide">
  古池や蛙飛び込む水の音<br />
  ふるいけやかわずとびこむみずのおと<br />
  富士の風や扇にのせて江戸土産<br />
  ふじのかぜやおうぎにのせてえどみやげ<br />
</div>
```

```css
.haiku {
  border: 1px solid;
  margin-bottom: 1rem;
  padding: 0.5rem;
  background-color: wheat;

  writing-mode: vertical-rl;
}

.wide {
  line-height: 2;
}
```

#### Result

{{EmbedLiveSample('Space between lines in vertical writing modes', '100%', 650)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{Cssxref("font")}}, {{Cssxref("font-size")}}
