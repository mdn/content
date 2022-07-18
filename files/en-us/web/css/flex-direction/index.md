---
title: flex-direction
slug: Web/CSS/flex-direction
tags:
  - CSS
  - CSS Flexible Boxes
  - CSS Property
  - Reference
  - recipe:css-property
browser-compat: css.properties.flex-direction
---
{{CSSRef}}

The **`flex-direction`** [CSS](/en-US/docs/Web/CSS) property sets how flex items are placed in the flex container defining the main axis and the direction (normal or reversed).

{{EmbedInteractiveExample("pages/css/flex-direction.html")}}

Note that the values `row` and `row-reverse` are affected by the directionality of the flex container. If its {{HTMLAttrxRef("dir")}} attribute is `ltr`, `row` represents the horizontal axis oriented from the left to the right, and `row-reverse` from the right to the left; if the `dir` attribute is `rtl`, `row` represents the axis oriented from the right to the left, and `row-reverse` from the left to the right.

## Syntax

```css
/* The direction text is laid out in a line */
flex-direction: row;

/* Like <row>, but reversed */
flex-direction: row-reverse;

/* The direction in which lines of text are stacked */
flex-direction: column;

/* Like <column>, but reversed */
flex-direction: column-reverse;

/* Global values */
flex-direction: inherit;
flex-direction: initial;
flex-direction: revert;
flex-direction: revert-layer;
flex-direction: unset;
```

### Values

The following values are accepted:

- `row`
  - : The flex container's main-axis is defined to be the same as the text direction. The **main-start** and **main-end** points are the same as the content direction.
- `row-reverse`
  - : Behaves the same as `row` but the **main-start** and **main-end** points are opposite to the content direction.
- `column`
  - : The flex container's main-axis is the same as the block-axis. The **main-start** and **main-end** points are the same as the **before** and **after** points of the writing-mode.
- `column-reverse`
  - : Behaves the same as `column` but the **main-start** and **main-end** are opposite to the content direction.

## Accessibility concerns

Using the `flex-direction` property with values of `row-reverse` or `column-reverse` will create a disconnect between the visual presentation of content and DOM order. This will adversely affect users experiencing low vision navigating with the aid of assistive technology such as a screen reader. If the visual (CSS) order is important, then screen reader users will not have access to the correct reading order.

- [Flexbox & the keyboard navigation disconnect — Tink](https://tink.uk/flexbox-the-keyboard-navigation-disconnect/)
- [Source Order Matters | Adrian Roselli](https://adrianroselli.com/2015/09/source-order-matters.html)
- [MDN Understanding WCAG, Guideline 1.3 explanations](/en-US/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.3_%e2%80%94_create_content_that_can_be_presented_in_different_ways)
- [Understanding Success Criterion 1.3.2 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-sequence.html)

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Reversing flex container columns and rows

#### HTML

```html
<h4>This is a Column-Reverse</h4>
<div id="col-rev" class="content">
  <div class="box red">A</div>
  <div class="box lightblue">B</div>
  <div class="box yellow">C</div>
</div>
<h4>This is a Row-Reverse</h4>
<div id="row-rev" class="content">
  <div class="box red">A</div>
  <div class="box lightblue">B</div>
  <div class="box yellow">C</div>
</div>
```

#### CSS

```css
.content {
  width: 200px;
  height: 200px;
  border: 1px solid #c3c3c3;
  display: flex;
}

.box {
  width: 50px;
  height: 50px;
}

#col-rev {
  flex-direction: column-reverse;
}

#row-rev {
  flex-direction: row-reverse;
}

.red {
  background-color: red;
}

.lightblue {
  background-color: lightblue;
}

.yellow {
  background-color: yellow;
}
```

#### Result

{{EmbedLiveSample('Reversing_flex_container_columns_and_rows', '', '550')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- CSS Flexbox Guide: _[Basic Concepts of Flexbox](/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)_
- CSS Flexbox Guide: _[Ordering flex items](/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Ordering_Flex_Items)_
