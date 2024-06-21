---
title: z-index
slug: Web/CSS/z-index
page-type: css-property
browser-compat: css.properties.z-index
---

{{CSSRef}}

The **`z-index`** [CSS](/en-US/docs/Web/CSS) property sets the z-order of a [positioned](/en-US/docs/Web/CSS/position) element and its descendants or flex and grid items. Overlapping elements with a larger z-index cover those with a smaller one.

{{EmbedInteractiveExample("pages/css/z-index.html")}}

For a positioned box (that is, one with any `position` other than `static`), the `z-index` property specifies:

1. The stack level of the box in the current [stacking context](/en-US/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context).
2. Whether the box establishes a local stacking context.

## Syntax

```css
/* Keyword value */
z-index: auto;

/* <integer> values */
z-index: 0;
z-index: 3;
z-index: 289;
z-index: -1; /* Negative values to lower the priority */

/* Global values */
z-index: inherit;
z-index: initial;
z-index: revert;
z-index: revert-layer;
z-index: unset;
```

The `z-index` property is specified as either the keyword `auto` or an `<integer>`.

### Values

- `auto`
  - : The box does not establish a new local stacking context. The stack level of the generated box in the current stacking context is `0`.
- `<integer>`
  - : This {{cssxref("&lt;integer&gt;")}} is the stack level of the generated box in the current stacking context. The box also establishes a local stacking context. This means that the z-indexes of descendants are not compared to the z-indexes of elements outside this element.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Visually layering elements

#### HTML

```html
<div class="wrapper">
  <div class="dashed-box">Dashed box</div>
  <div class="gold-box">Gold box</div>
  <div class="green-box">Green box</div>
</div>
```

#### CSS

```css
.wrapper {
  position: relative;
}

.dashed-box {
  position: relative;
  z-index: 1;
  border: dashed;
  height: 8em;
  margin-bottom: 1em;
  margin-top: 2em;
}
.gold-box {
  position: absolute;
  z-index: 3; /* put .gold-box above .green-box and .dashed-box */
  background: gold;
  width: 80%;
  left: 60px;
  top: 3em;
}
.green-box {
  position: absolute;
  z-index: 2; /* put .green-box above .dashed-box */
  background: lightgreen;
  width: 20%;
  left: 65%;
  top: -25px;
  height: 7em;
  opacity: 0.9;
}
```

#### Result

{{EmbedLiveSample('Visually_layering_elements', '550', '200')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- CSS {{Cssxref("position")}} property
- [Understanding CSS z-indexes](/en-US/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index)
