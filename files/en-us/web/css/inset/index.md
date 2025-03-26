---
title: inset
slug: Web/CSS/inset
page-type: css-shorthand-property
browser-compat: css.properties.inset
---

{{CSSRef}}

The **`inset`** [CSS](/en-US/docs/Web/CSS) property is a shorthand that corresponds to the {{cssxref("top")}}, {{cssxref("right")}}, {{cssxref("bottom")}}, and/or {{cssxref("left")}} properties. It has the same multi-value syntax of the {{cssxref("margin")}} shorthand.

This {{glossary("inset properties")}}, including `inset`, have no effect on non-positioned elements.

{{InteractiveExample("CSS Demo: inset")}}

```css interactive-example-choice
inset: 1em;
```

```css interactive-example-choice
inset: 5% 0;
```

```css interactive-example-choice
inset: 2em 50px 20px;
```

```css interactive-example-choice
inset: 10px 30% 20px 0;
```

```css interactive-example-choice
inset: 0;
```

```html interactive-example
<section id="default-example">
  <div class="example-container">
    <div id="example-element">I am absolutely positioned.</div>
    <p>
      As much mud in the streets as if the waters had but newly retired from the
      face of the earth, and it would not be wonderful to meet a Megalosaurus,
      forty feet long or so, waddling like an elephantine lizard up Holborn
      Hill.
    </p>
  </div>
</section>
```

```css interactive-example
.example-container {
  border: 0.75em solid #ad1457;
  padding: 0.75em;
  text-align: left;
  position: relative;
  width: 100%;
  min-height: 200px;
}

#example-element {
  background-color: #07136c;
  border: 6px solid #ffa000;
  color: white;
  position: absolute;
  inset: 0;
}
```

While part of the [CSS logical properties and values](/en-US/docs/Web/CSS/CSS_logical_properties_and_values) module, it does not define _logical_ offsets. It defines _physical_ offsets, regardless of the element's writing mode, directionality, and text orientation.

## Constituent properties

This property is a shorthand for the following CSS properties:

- {{Cssxref("top")}}
- {{Cssxref("right")}}
- {{Cssxref("bottom")}}
- {{Cssxref("left")}}

## Syntax

```css
/* <length> values */
inset: 10px; /* value applied to all edges */
inset: 4px 8px; /* top/bottom left/right */
inset: 5px 15px 10px; /* top left/right bottom */
inset: 2.4em 3em 3em 3em; /* top right bottom left */
inset: calc(anchor(50%) + 10px) anchor(self-start) auto auto;
inset: anchor-size(block) calc(anchor(50%) + 10px) auto
  calc(anchor-size(width) / 4);

/* <percentage>s of the width (left/right) or height (top/bottom) of the containing block */
inset: 10% 5% 5% 5%;

/* Keyword value */
inset: auto;

/* Global values */
inset: inherit;
inset: initial;
inset: revert;
inset: revert-layer;
inset: unset;
```

### Values

The `inset` property takes the same values as the {{cssxref("left")}} property.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Setting offsets for an element

#### HTML

```html
<div>
  <span class="exampleText">Example text</span>
</div>
```

#### CSS

```css
div {
  background-color: yellow;
  width: 150px;
  height: 120px;
  position: relative;
}

.exampleText {
  writing-mode: sideways-rl;
  position: absolute;
  inset: 20px 40px 30px 10px;
  background-color: #c8c800;
}
```

#### Result

{{EmbedLiveSample("Setting_offsets_for_an_element", 140, 140)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("top")}}, {{cssxref("right")}}, {{cssxref("bottom")}}, and {{cssxref("left")}}
- {{cssxref("inset-block")}} and {{cssxref("inset-inline")}}
- {{cssxref("position")}}
- [CSS positioned layout](/en-US/docs/Web/CSS/CSS_positioned_layout) module
- [CSS logical properties and values](/en-US/docs/Web/CSS/CSS_logical_properties_and_values)
