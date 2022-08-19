---
title: flex-grow
slug: Web/CSS/flex-grow
tags:
  - CSS
  - CSS Flexible Boxes
  - CSS Property
  - NeedsContent
  - Reference
  - recipe:css-property
browser-compat: css.properties.flex-grow
---
{{CSSRef}}

The **`flex-grow`** [CSS](/en-US/docs/Web/CSS) property sets the flex grow factor of a flex item's [main size](https://www.w3.org/TR/css-flexbox/#main-size).

{{EmbedInteractiveExample("pages/css/flex-grow.html")}}

## Syntax

```css
/* <number> values */
flex-grow: 3;
flex-grow: 0.6;

/* Global values */
flex-grow: inherit;
flex-grow: initial;
flex-grow: revert;
flex-grow: revert-layer;
flex-grow: unset;
```

The `flex-grow` property is specified as a single `<number>`.

### Values

- `<number>`
  - : See {{cssxref("&lt;number&gt;")}}. Negative values are invalid. Defaults to 0.

## Description

This property specifies how much of the remaining space in the flex container should be assigned to the item (the flex grow factor).

The [main size](https://www.w3.org/TR/css-flexbox/#main-size) is either width or height of the item which is dependent on the {{cssxref("flex-direction")}} value.

The remaining space is the size of the flex container minus the size of all flex items' sizes together. If all sibling items have the same flex grow factor, then all items will receive the same share of remaining space, otherwise it is distributed according to the ratio defined by the different flex grow factors.

`flex-grow` is used alongside the other flex properties {{cssxref("flex-shrink")}} and {{cssxref("flex-basis")}}, and normally defined using the {{cssxref("flex")}} shorthand to ensure all values are set.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Setting flex item grow factor

#### HTML

```html
<h4>This is a Flex-Grow</h4>
<h5>A,B,C and F are flex-grow:1 . D and E are flex-grow:2 .</h5>
<div id="content">
  <div class="box" style="background-color:red;">A</div>
  <div class="box" style="background-color:lightblue;">B</div>
  <div class="box" style="background-color:yellow;">C</div>
  <div class="box1" style="background-color:brown;">D</div>
  <div class="box1" style="background-color:lightgreen;">E</div>
  <div class="box" style="background-color:brown;">F</div>
</div>
```

#### CSS

```css
#content {
  display: flex;

  justify-content: space-around;
  flex-flow: row wrap;
  align-items: stretch;
}

.box {
  flex-grow: 1;
  border: 3px solid rgba(0,0,0,.2);
}

.box1 {
  flex-grow: 2;
  border: 3px solid rgba(0,0,0,.2);
}
```

#### Result

{{EmbedLiveSample('Setting flex item grow factor')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- CSS Flexbox Guide: _[Basic Concepts of Flexbox](/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)_
- CSS Flexbox Guide: _[Controlling Ratios of flex items along the main axis](/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Controlling_Ratios_of_Flex_Items_Along_the_Main_Ax)_
- [\`flex-grow\` is weird. Or is it?](https://css-tricks.com/flex-grow-is-weird/) article by Manuel Matuzovic on CSS-Tricks, which illustrates how flex-grow works
