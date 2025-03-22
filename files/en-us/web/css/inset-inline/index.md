---
title: inset-inline
slug: Web/CSS/inset-inline
page-type: css-shorthand-property
browser-compat: css.properties.inset-inline
---

{{CSSRef}}

The **`inset-inline`** [CSS](/en-US/docs/Web/CSS) property defines the logical start and end offsets of an element in the inline direction, which maps to physical offsets depending on the element's writing mode, directionality, and text orientation. It corresponds to the {{cssxref("top")}} and {{cssxref("bottom")}}, or {{cssxref("right")}} and {{cssxref("left")}} properties depending on the values defined for {{cssxref("writing-mode")}}, {{cssxref("direction")}}, and {{cssxref("text-orientation")}}.

This {{glossary("inset properties", "inset property")}} has no effect on non-positioned elements.

{{InteractiveExample("CSS Demo: inset-inline")}}

```css interactive-example-choice
inset-inline: 5% 10%;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
inset-inline: 10px 40px;
writing-mode: vertical-rl;
```

```css interactive-example-choice
inset-inline: 5% 10%;
writing-mode: horizontal-tb;
direction: rtl;
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

## Constituent properties

This property is a shorthand for the following CSS properties:

- {{cssxref("inset-inline-end")}}
- {{cssxref("inset-inline-start")}}

## Syntax

```css
/* <length> values */
inset-inline: 3px 10px;
inset-inline: 2.4em 3em;
inset-inline: 10px; /* value applied to start and end */
inset-inline: auto calc(anchor(self-start) + 20px);
inset-inline: 400px anchor-size(--myAnchor height, 100px);

/* <percentage>s of the width or height of the containing block */
inset-inline: 10% 5%;

/* Keyword value */
inset-inline: auto;

/* Global values */
inset-inline: inherit;
inset-inline: initial;
inset-inline: revert;
inset-inline: revert-layer;
inset-inline: unset;
```

### Values

The `inset-inline` property takes the same values as the {{cssxref("left")}} property.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Setting inline start and end offsets

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
  inset-inline: 20px 50px;
  background-color: #c8c800;
}
```

#### Result

{{EmbedLiveSample("Setting_inline_start_and_end_offsets", 140, 140)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The mapped physical properties: {{cssxref("top")}}, {{cssxref("right")}}, {{cssxref("bottom")}}, and {{cssxref("left")}}
- The mapped physical shortcut: {{cssxref("inset")}}
- The mapped block shortcut: {{cssxref("inset-block")}}
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
