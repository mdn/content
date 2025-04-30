---
title: padding-right
slug: Web/CSS/padding-right
page-type: css-property
browser-compat: css.properties.padding-right
---

{{CSSRef}}

The **`padding-right`** [CSS](/en-US/docs/Web/CSS) property sets the width of the [padding area](/en-US/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model#padding_area) on the right of an element.

{{InteractiveExample("CSS Demo: padding-right")}}

```css interactive-example-choice
padding-right: 1.5em;
```

```css interactive-example-choice
padding-right: 10%;
```

```css interactive-example-choice
padding-right: 20px;
```

```css interactive-example-choice
padding-right: 1ch;
```

```css interactive-example-choice
padding-right: 0;
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

> [!NOTE]
> The {{cssxref("padding")}} property can be used to set paddings on all four sides of an element with a single declaration.

## Syntax

```css
/* <length> values */
padding-right: 0.5em;
padding-right: 0;
padding-right: 2cm;

/* <percentage> value */
padding-right: 10%;

/* Global values */
padding-right: inherit;
padding-right: initial;
padding-right: revert;
padding-right: revert-layer;
padding-right: unset;
```

The `padding-right` property is specified as a single value chosen from the list below. Unlike margins, negative values are not allowed for padding.

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

### Setting right padding using pixels and percentages

```css
.content {
  padding-right: 5%;
}
.side-box {
  padding-right: 10px;
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("padding-top")}}, {{cssxref("padding-bottom")}}, and {{cssxref("padding-left")}}
- {{cssxref("padding")}} shorthand
- {{cssxref("padding-block-start")}}, {{cssxref("padding-block-end")}}, {{cssxref("padding-inline-start")}}, and {{cssxref("padding-inline-end")}}
- {{cssxref("padding-block")}} and {{cssxref("padding-inline")}} shorthands
- [Introduction to the CSS basic box model](/en-US/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
- [CSS box model](/en-US/docs/Web/CSS/CSS_box_model) module
