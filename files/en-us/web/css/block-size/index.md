---
title: block-size
slug: Web/CSS/block-size
page-type: css-property
browser-compat: css.properties.block-size
sidebar: cssref
---

The **`block-size`** [CSS](/en-US/docs/Web/CSS) property defines the size of an element's block along the [block axis](/en-US/docs/Glossary/Grid_Axis). If the {{cssxref("writing-mode")}} is horizontal, it corresponds to the {{cssxref("height")}}; if the writing mode is vertical, it corresponds to the {{cssxref("width")}}. A related property is {{cssxref("inline-size")}}, which defines the other dimension of the element.

{{InteractiveExample("CSS Demo: block-size")}}

```css interactive-example-choice
block-size: 150px;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
block-size: 150px;
writing-mode: vertical-rl;
```

```css interactive-example-choice
block-size: auto;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
block-size: auto;
writing-mode: vertical-lr;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    This is a box where you can change the block-size.
  </div>
</section>
```

```css interactive-example
#example-element {
  display: flex;
  flex-direction: column;
  background-color: #5b6dcd;
  justify-content: center;
  color: white;
}
```

## Syntax

```css
/* <length> values */
block-size: 300px;
block-size: 25em;
block-size: anchor-size(height);
block-size: calc(anchor-size(--my-anchor block) * 0.75);

/* <percentage> values */
block-size: 75%;

/* Keyword values */
block-size: max-content;
block-size: min-content;
block-size: fit-content;
block-size: fit-content(20em);
block-size: auto;

/* Global values */
block-size: inherit;
block-size: initial;
block-size: revert;
block-size: revert-layer;
block-size: unset;
```

### Values

The `block-size` property takes the same values as the {{cssxref("width")}} and {{cssxref("height")}} properties.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Block size with vertical text

#### HTML

```html
<p class="exampleText">Example text</p>
```

#### CSS

```css
.exampleText {
  writing-mode: vertical-rl;
  background-color: yellow;
  block-size: 200px;
}
```

#### Result

{{EmbedLiveSample("Block_size_with_vertical_text")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The mapped physical properties: {{cssxref("width")}} and {{cssxref("height")}}
- {{cssxref("writing-mode")}}
