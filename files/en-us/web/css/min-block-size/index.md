---
title: min-block-size
slug: Web/CSS/min-block-size
page-type: css-property
browser-compat: css.properties.min-block-size
---

{{CSSRef}}

The **`min-block-size`** [CSS](/en-US/docs/Web/CSS) property defines the minimum horizontal or vertical size of an element's block, depending on its writing mode. It corresponds to either the {{cssxref("min-width")}} or the {{cssxref("min-height")}} property, depending on the value of {{cssxref("writing-mode")}}.

If the writing mode is vertically oriented, the value of `min-block-size` relates to the minimum width of the element; otherwise, it relates to the minimum height of the element. A related property is {{cssxref("min-inline-size")}}, which defines the other dimension of the element.

{{InteractiveExample("CSS Demo: min-block-size")}}

```css interactive-example-choice
min-block-size: 150px;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
min-block-size: 150px;
writing-mode: vertical-rl;
```

```css interactive-example-choice
min-block-size: 20px;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
min-block-size: 15em;
writing-mode: vertical-lr;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    This is a box where you can change the minimum block size. <br />If there is
    more content than the minimum the box will grow in the block dimension as
    needed by the content.
  </div>
</section>
```

```css interactive-example
#example-element {
  display: flex;
  flex-direction: column;
  background-color: #5b6dcd;
  justify-content: center;
  color: #ffffff;
}
```

## Syntax

```css
/* <length> values */
min-block-size: 100px;
min-block-size: 5em;
min-block-size: anchor-size(self-inline);

/* <percentage> values */
min-block-size: 10%;

/* Keyword values */
min-block-size: max-content;
min-block-size: min-content;
min-block-size: fit-content;
min-block-size: fit-content(20em);

/* Global values */
min-block-size: inherit;
min-block-size: initial;
min-block-size: revert;
min-block-size: revert-layer;
min-block-size: unset;
```

### Values

The `min-block-size` property takes the same values as the {{cssxref("min-width")}} and {{cssxref("min-height")}} properties.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Setting minimum block size for vertical text

#### HTML

```html
<p class="exampleText">Example text</p>
```

#### CSS

```css
.exampleText {
  writing-mode: vertical-rl;
  background-color: yellow;
  min-block-size: 200px;
}
```

#### Result

{{EmbedLiveSample("Setting_minimum_block_size_for_vertical_text")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The mapped physical properties: {{cssxref("min-width")}} and {{cssxref("min-height")}}
- {{cssxref("writing-mode")}}
