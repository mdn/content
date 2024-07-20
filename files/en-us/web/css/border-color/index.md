---
title: border-color
slug: Web/CSS/border-color
page-type: css-shorthand-property
browser-compat: css.properties.border-color
---

{{CSSRef}}

The **`border-color`** [shorthand](/en-US/docs/Web/CSS/Shorthand_properties) [CSS](/en-US/docs/Web/CSS) property sets the color of an element's border.

{{EmbedInteractiveExample("pages/css/border-color.html")}}

Each side can be set individually using {{CSSxRef("border-top-color")}}, {{CSSxRef("border-right-color")}}, {{CSSxRef("border-bottom-color")}}, and {{CSSxRef("border-left-color")}}; or using the writing mode-aware {{CSSxRef("border-block-start-color")}}, {{CSSxRef("border-block-end-color")}}, {{CSSxRef("border-inline-start-color")}}, and {{CSSxRef("border-inline-end-color")}}.

You can find out more information about border colors in [Applying colors to HTML elements](/en-US/docs/Web/CSS/CSS_colors/Applying_color#borders).

## Constituent properties

This property is a shorthand for the following CSS properties:

- [`border-bottom-color`](/en-US/docs/Web/CSS/border-bottom-color)
- [`border-left-color`](/en-US/docs/Web/CSS/border-left-color)
- [`border-right-color`](/en-US/docs/Web/CSS/border-right-color)
- [`border-top-color`](/en-US/docs/Web/CSS/border-top-color)

## Syntax

```css
/* <color> values */
border-color: red;

/* top and bottom | left and right */
border-color: red #f015ca;

/* top | left and right | bottom */
border-color: red rgb(240 30 50 / 70%) green;

/* top | right | bottom | left */
border-color: red yellow green blue;

/* Global values */
border-color: inherit;
border-color: initial;
border-color: revert;
border-color: revert-layer;
border-color: unset;
```

The `border-color` property may be specified using one, two, three, or four values.

- When **one** value is specified, it applies the same color to **all four sides**.
- When **two** values are specified, the first color applies to the **top and bottom**, the second to the **left and right**.
- When **three** values are specified, the first color applies to the **top**, the second to the **left and right**, the third to the **bottom**.
- When **four** values are specified, the colors apply to the **top**, **right**, **bottom**, and **left** in that order (clockwise).

### Values

- {{CSSxRef("&lt;color&gt;")}}
  - : Defines the color of the border.

## Formal definition

{{CSSInfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Complete border-color usage

#### HTML

```html
<div id="justone">
  <p><code>border-color: red;</code> is equivalent to</p>
  <ul>
    <li><code>border-top-color: red;</code></li>
    <li><code>border-right-color: red;</code></li>
    <li><code>border-bottom-color: red;</code></li>
    <li><code>border-left-color: red;</code></li>
  </ul>
</div>
<div id="horzvert">
  <p><code>border-color: gold red;</code> is equivalent to</p>
  <ul>
    <li><code>border-top-color: gold;</code></li>
    <li><code>border-right-color: red;</code></li>
    <li><code>border-bottom-color: gold;</code></li>
    <li><code>border-left-color: red;</code></li>
  </ul>
</div>
<div id="topvertbott">
  <p><code>border-color: red cyan gold;</code> is equivalent to</p>
  <ul>
    <li><code>border-top-color: red;</code></li>
    <li><code>border-right-color: cyan;</code></li>
    <li><code>border-bottom-color: gold;</code></li>
    <li><code>border-left-color: cyan;</code></li>
  </ul>
</div>
<div id="trbl">
  <p><code>border-color: red cyan black gold;</code> is equivalent to</p>
  <ul>
    <li><code>border-top-color: red;</code></li>
    <li><code>border-right-color: cyan;</code></li>
    <li><code>border-bottom-color: black;</code></li>
    <li><code>border-left-color: gold;</code></li>
  </ul>
</div>
```

#### CSS

```css
#justone {
  border-color: red;
}

#horzvert {
  border-color: gold red;
}

#topvertbott {
  border-color: red cyan gold;
}

#trbl {
  border-color: red cyan black gold;
}

/* Set width and style for all divs */
div {
  border: solid 0.3em;
  width: auto;
  margin: 0.5em;
  padding: 0.5em;
}

ul {
  margin: 0;
  list-style: none;
}
```

#### Result

{{EmbedLiveSample("Complete_border-color_usage", 600, 700)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Border-color related CSS properties: {{CSSxRef("border")}}, {{CSSxRef("border-top-color")}}, {{CSSxRef("border-right-color")}}, {{CSSxRef("border-bottom-color")}}, {{CSSxRef("border-left-color")}},
- Other border-related CSS properties: {{CSSxRef("border-width")}}, {{CSSxRef("border-style")}}
- The {{CSSxRef("&lt;color&gt;")}} data type
- Other color-related properties: {{CSSxRef("color")}}, {{CSSxRef("background-color")}}, {{CSSxRef("outline-color")}}, {{CSSxRef("text-decoration-color")}}, {{CSSxRef("text-emphasis-color")}}, {{CSSxRef("text-shadow")}}, {{CSSxRef("caret-color")}}, and {{CSSxRef("column-rule-color")}}
- [Applying color to HTML elements using CSS](/en-US/docs/Web/CSS/CSS_colors/Applying_color)
