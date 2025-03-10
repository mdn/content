---
title: margin-inline-end
slug: Web/CSS/margin-inline-end
page-type: css-property
browser-compat: css.properties.margin-inline-end
---

{{CSSRef}}

The **`margin-inline-end`** [CSS](/en-US/docs/Web/CSS) property defines the logical inline end margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation. In other words, it corresponds to the {{cssxref("margin-top")}}, {{cssxref("margin-right")}}, {{cssxref("margin-bottom")}} or {{cssxref("margin-left")}} property depending on the values defined for {{cssxref("writing-mode")}}, {{cssxref("direction")}}, and {{cssxref("text-orientation")}}.

{{InteractiveExample("CSS Demo: margin-inline-end")}}

```css interactive-example-choice
margin-inline-end: 20px;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
margin-inline-end: 20px;
writing-mode: vertical-rl;
```

```css interactive-example-choice
margin-inline-end: 20%;
writing-mode: horizontal-tb;
direction: rtl;
```

```html interactive-example
<section id="default-example">
  <div id="container">
    <div class="col">One</div>
    <div class="col transition-all" id="example-element">Two</div>
    <div class="col">Three</div>
  </div>
</section>
```

```css interactive-example
#container {
  width: 300px;
  height: 200px;
  display: flex;
  align-content: flex-start;
  justify-content: flex-start;
}

.col {
  width: 33.33%;
  border: solid #ce7777 10px;
  background-color: #2b3a55;
  color: white;
  flex-shrink: 0;
}

#example-element {
  border: solid 10px #ffbf00;
  background-color: #2b3a55;
  unicode-bidi: bidi-override;
}
```

## Syntax

```css
/* <length> values */
margin-inline-end: 10px; /* An absolute length */
margin-inline-end: 1em; /* relative to the text size */
margin-inline-end: 5%; /* relative to the nearest block container's width */
margin-inline-end: anchor-size(height);
margin-inline-end: calc(anchor-size(--myAnchor self-inline, 25px) / 5);

/* Keyword values */
margin-inline-end: auto;

/* Global values */
margin-inline-end: inherit;
margin-inline-end: initial;
margin-inline-end: revert;
margin-inline-end: revert-layer;
margin-inline-end: unset;
```

It relates to {{cssxref("margin-block-start")}}, {{cssxref("margin-block-end")}}, and {{cssxref("margin-inline-start")}}, which define the other margins of the element.

### Values

The `margin-inline-end` property takes the same values as the {{cssxref("margin-left")}} property.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Setting inline end margin

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
  margin-inline-end: 20px;
  background-color: #c8c800;
}
```

#### Result

{{EmbedLiveSample("Setting_inline_end_margin", 140, 140)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [CSS Logical Properties and Values](/en-US/docs/Web/CSS/CSS_logical_properties_and_values)
- {{cssxref("margin-inline-start")}}
- The mapped physical properties: {{cssxref("margin-top")}}, {{cssxref("margin-right")}}, {{cssxref("margin-bottom")}}, and {{cssxref("margin-left")}}
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
