---
title: inset-block-start
slug: Web/CSS/inset-block-start
page-type: css-property
browser-compat: css.properties.inset-block-start
---

{{CSSRef}}

The **`inset-block-start`** [CSS](/en-US/docs/Web/CSS) property defines the logical block start offset of an element, which maps to a physical inset depending on the element's writing mode, directionality, and text orientation. It corresponds to the {{cssxref("top")}}, {{cssxref("right")}}, {{cssxref("bottom")}}, or {{cssxref("left")}} property depending on the values defined for {{cssxref("writing-mode")}}, {{cssxref("direction")}}, and {{cssxref("text-orientation")}}.

This {{glossary("inset properties", "inset property")}} has no effect on non-positioned elements.

{{InteractiveExample("CSS Demo: inset-block-start")}}

```css interactive-example-choice
inset-block-start: 20px;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
inset-block-start: 20px;
writing-mode: vertical-rl;
```

```css interactive-example-choice
inset-block-start: 20%;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
inset-block-start: auto;
writing-mode: vertical-lr;
```

```html interactive-example
<div class="example-container">
  <div id="example-element">I am absolutely positioned.</div>
  <p>
    As much mud in the streets as if the waters had but newly retired from the
    face of the earth, and it would not be wonderful to meet a Megalosaurus,
    forty feet long or so, waddling like an elephantine lizard up Holborn Hill.
  </p>
</div>
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

## Syntax

```css
/* <length> values */
inset-block-start: 3px;
inset-block-start: 2.4em;
inset-block-start: anchor(end);
inset-block-start: calc(anchor-size(--myAnchor height, 70px) * 2);

/* <percentage>s of the width or height of the containing block */
inset-block-start: 10%;

/* Keyword value */
inset-block-start: auto;

/* Global values */
inset-block-start: inherit;
inset-block-start: initial;
inset-block-start: revert;
inset-block-start: revert-layer;
inset-block-start: unset;
```

### Values

The `inset-block-start` property takes the same values as the {{cssxref("left")}} property.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Setting block start offset

#### HTML

```html
<div>
  <p class="exampleText">Example text</p>
</div>
```

#### CSS

```css
div {
  background-color: yellow;
  width: 120px;
  height: 120px;
}

.exampleText {
  writing-mode: vertical-lr;
  position: relative;
  inset-block-start: 20px;
  background-color: #c8c800;
}
```

#### Result

{{EmbedLiveSample("Setting_block_start_offset", 140, 140)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The properties which defines other insets: {{cssxref("inset-block-end")}}, {{cssxref("inset-inline-start")}}, and {{cssxref("inset-inline-end")}}
- The mapped physical properties: {{cssxref("top")}}, {{cssxref("right")}}, {{cssxref("bottom")}}, and {{cssxref("left")}}
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
