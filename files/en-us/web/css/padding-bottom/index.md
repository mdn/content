---
title: padding-bottom
slug: Web/CSS/padding-bottom
page-type: css-property
browser-compat: css.properties.padding-bottom
sidebar: cssref
---

The **`padding-bottom`** [CSS](/en-US/docs/Web/CSS) property sets the height of the [padding area](/en-US/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model#padding_area) on the bottom of an element.

{{InteractiveExample("CSS Demo: padding-bottom")}}

```css interactive-example-choice
padding-bottom: 1em;
```

```css interactive-example-choice
padding-bottom: 10%;
```

```css interactive-example-choice
padding-bottom: 20px;
```

```css interactive-example-choice
padding-bottom: 1ch;
```

```css interactive-example-choice
padding-bottom: 0;
```

```html interactive-example
<section id="default-example">
  <div class="transition-all" id="example-element">
    <div class="box">
      Far out in the uncharted backwaters of the unfashionable end of the
      western spiral arm of the Galaxy lies a small unregarded yellow sun.
    </div>
  </div>
</section>
```

```css interactive-example
#example-element {
  border: 10px solid #ffc129;
  overflow: hidden;
  text-align: left;
}

.box {
  border: dashed 1px;
}
```

An element's padding area is the space between its content and its border.

![The effect of the CSS padding-bottom property on the element box](padding-bottom.svg)

> [!NOTE]
> The {{cssxref("padding")}} property can be used to set paddings on all four sides of an element with a single declaration.

## Syntax

```css
/* <length> values */
padding-bottom: 0.5em;
padding-bottom: 0;
padding-bottom: 2cm;

/* <percentage> value */
padding-bottom: 10%;

/* Global values */
padding-bottom: inherit;
padding-bottom: initial;
padding-bottom: revert;
padding-bottom: revert-layer;
padding-bottom: unset;
```

The `padding-bottom` property is specified as a single value chosen from the list below. Unlike margins, negative values are not allowed for padding.

### Values

- {{cssxref("&lt;length&gt;")}}
  - : The size of the padding as a fixed value. Must be nonnegative.
- {{cssxref("&lt;percentage&gt;")}}
  - : The size of the padding as a percentage, relative to the inline size (_width_ in a horizontal language, defined by {{cssxref("writing-mode")}}) of the [containing block](/en-US/docs/Web/CSS/CSS_display/Containing_block). Must be nonnegative.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Setting padding bottom with pixels and percentages

```css
.content {
  padding-bottom: 5%;
}
.side-box {
  padding-bottom: 10px;
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("padding-top")}}, {{cssxref("padding-right")}}, and {{cssxref("padding-left")}}
- {{cssxref("padding")}} shorthand
- {{cssxref("padding-block-start")}}, {{cssxref("padding-block-end")}}, {{cssxref("padding-inline-start")}}, and {{cssxref("padding-inline-end")}}
- {{cssxref("padding-block")}} and {{cssxref("padding-inline")}} shorthands
- [Introduction to the CSS box model](/en-US/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model) guide
- [CSS box model](/en-US/docs/Web/CSS/CSS_box_model) module
