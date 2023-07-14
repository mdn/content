---
title: border-start-end-radius
slug: Web/CSS/border-start-end-radius
page-type: css-property
browser-compat: css.properties.border-start-end-radius
---

{{CSSRef}}

The **`border-start-end-radius`** [CSS](/en-US/docs/Web/CSS) property defines a logical border radius on an element, which maps to a physical border radius depending on the element's {{cssxref("writing-mode")}}, {{cssxref("direction")}}, and {{cssxref("text-orientation")}}. This is useful when building styles to work regardless of the [text orientation](/en-US/docs/Web/CSS/text-orientation) and [writing mode](/en-US/docs/Web/CSS/CSS_Writing_Modes).

{{EmbedInteractiveExample("pages/css/border-start-end-radius.html")}}

This property affects the corner between the block-start and the inline-end sides of the element. For instance, in a `horizontal-tb` writing mode with `ltr` direction, it corresponds to the {{CSSxRef("border-top-right-radius")}} property.

## Syntax

```css
/* <length> values */
/* With one value the corner will be a circle */
border-start-end-radius: 10px;
border-start-end-radius: 1em;

/* With two values the corner will be an ellipse */
border-start-end-radius: 1em 2em;

/* Global values */
border-start-end-radius: inherit;
border-start-end-radius: initial;
border-start-end-radius: revert;
border-start-end-radius: revert-layer;
border-start-end-radius: unset;
```

### Values

- `<length-percentage>`
  - : Denotes the size of the circle radius or the semi-major and semi-minor axes of the ellipse. As absolute length it can be expressed in any unit allowed by the CSS {{cssxref("&lt;length&gt;")}} data type. Percentages for the horizontal axis refer to the width of the box, percentages for the vertical axis refer to the height of the box. Negative values are invalid.

## Formal definition

{{CSSInfo}}

## Formal syntax

{{CSSSyntax}}

## Examples

### Border radius with vertical text

#### HTML

```html
<div>
  <p class="exampleText">Example</p>
</div>
```

#### CSS

```css
div {
  background-color: rebeccapurple;
  width: 120px;
  height: 120px;
  border-start-end-radius: 10px;
}

.exampleText {
  writing-mode: vertical-rl;
  padding: 10px;
  background-color: #fff;
  border-start-end-radius: 10px;
}
```

#### Results

{{EmbedLiveSample("Border_radius_with_vertical_text", 140, 140)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [CSS Logical Properties and Values](/en-US/docs/Web/CSS/CSS_Logical_Properties)
- The mapped physical property: {{CSSxRef("border-bottom-left-radius")}}
- {{CSSxRef("writing-mode")}}, {{CSSxRef("direction")}}, {{CSSxRef("text-orientation")}}
