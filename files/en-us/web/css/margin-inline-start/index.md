---
title: margin-inline-start
slug: Web/CSS/margin-inline-start
page-type: css-property
browser-compat: css.properties.margin-inline-start
---

{{CSSRef}}

The **`margin-inline-start`** [CSS](/en-US/docs/Web/CSS) property defines the logical inline start margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation. It corresponds to the {{cssxref("margin-top")}}, {{cssxref("margin-right")}}, {{cssxref("margin-bottom")}}, or {{cssxref("margin-left")}} property depending on the values defined for {{cssxref("writing-mode")}}, {{cssxref("direction")}}, and {{cssxref("text-orientation")}}.

{{InteractiveExample("CSS Demo: margin-inline-start")}}

```css interactive-example-choice
margin-inline-start: 20px;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
margin-inline-start: 20px;
writing-mode: vertical-rl;
```

```css interactive-example-choice
margin-inline-start: 20%;
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
margin-inline-start: 10px; /* An absolute length */
margin-inline-start: 1em; /* relative to the text size */
margin-inline-start: 5%; /* relative to the nearest block container's width */
margin-inline-start: anchor-size(block);
margin-inline-start: calc(anchor-size(--myAnchor width, 30px) / 4);

/* Keyword values */
margin-inline-start: auto;

/* Global values */
margin-inline-start: inherit;
margin-inline-start: initial;
margin-inline-start: revert;
margin-inline-start: revert-layer;
margin-inline-start: unset;
```

It relates to {{cssxref("margin-block-start")}}, {{cssxref("margin-block-end")}}, and {{cssxref("margin-inline-end")}}, which define the other margins of the element.

### Values

The `margin-inline-start` property takes the same values as the {{cssxref("margin-left")}} property.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Setting inline start margin

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
  margin-inline-start: 20px;
  background-color: #c8c800;
}
```

#### Result

{{EmbedLiveSample("Setting_inline_start_margin", 140, 140)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [CSS Logical Properties and Values](/en-US/docs/Web/CSS/CSS_logical_properties_and_values)
- {{cssxref("margin-inline-end")}}
- The mapped physical properties: {{cssxref("margin-top")}}, {{cssxref("margin-right")}}, {{cssxref("margin-bottom")}}, and {{cssxref("margin-left")}}
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
