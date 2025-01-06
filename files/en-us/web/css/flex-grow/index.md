---
title: flex-grow
slug: Web/CSS/flex-grow
page-type: css-property
browser-compat: css.properties.flex-grow
---

{{CSSRef}}

The **`flex-grow`** [CSS](/en-US/docs/Web/CSS) property sets the flex grow factor, which specifies how much of the flex container's [**positive free space**](/en-US/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis), if any, should be assigned to the flex item's [main size](/en-US/docs/Learn_web_development/Core/CSS_layout/Flexbox#the_flex_model).

When the flex-container's main size is larger than the combined main sizes of its flex items, this positive free space can be distributed among the flex items, with each item's growth being their growth factor value as a proportion of the sum total of all the flex items' flex grow factors.

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
  - : See {{cssxref("&lt;number&gt;")}}. Negative values are invalid. Defaults to 0, which prevents the flex item from growing.

## Description

This property specifies how much of the remaining space in the flex container should be assigned to the item (the flex grow factor).

The [main size](/en-US/docs/Learn_web_development/Core/CSS_layout/Flexbox#the_flex_model) is either the width or height of the item, depending on the {{cssxref("flex-direction")}} value.

The remaining space, or positive free space, is the size of the flex container minus the size of all flex items' sizes together. If all sibling items have the same flex grow factor, then all items will receive the same share of remaining space. The common practice is to set `flex-grow: 1`, but setting the flex grow factor for all the flex items to `88`, `100`, `1.2`, or any other value greater than `0` will produce the same result: the value is a ratio.

If the `flex-grow` values differ, the positive free space is distributed according to the ratio defined by the different flex grow factors. The `flex-grow` factor values of all the sibling flex items are added together. The flex container's positive free space, if any, is then divided by that total. The main size of each flex item with a `flex-grow` value greater than `0` will grow by this quotient multiplied by its own growth factor.

For example, if four `100px` flex items are in a `700px` container and the flex items have `flex-grow` factors of `0`, `1`, `2`, and `3`, respectively, the total main size of the four items is `400px`, meaning there is `300px` of positive free space to be distributed. The sum of the four grow factors (`0 + 1 + 2 + 3 = 6`) is equal to six. Therefore, each grow factor is equal to `50px` (`(300px / 6 )`. Each flex item is given 50px of free space multiplied by its `flex-grow` factor — so `0`, `50px`, `100px`, and `150px` respectively. The total flex item sizes become `100px`, `150px`, `200px`, and `250px`, respectively.

`flex-grow` is generally used alongside the other {{cssxref("flex")}} shorthand properties, {{cssxref("flex-shrink")}} and {{cssxref("flex-basis")}}. Using the `flex` shorthand property is recommended to ensure all values are set.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Setting flex item grow factor

In this example, the sum of six flex-grow factors is equal to eight, meaning each growth-factor value is `12.5%` of the remaining space.

#### HTML

```html
<h1>This is a <code>flex-grow</code> example</h1>
<p>
  A, B, C, and F have <code>flex-grow: 1</code> set. D and E have
  <code>flex-grow: 2</code> set.
</p>
<div id="content">
  <div class="small" style="background-color:red;">A</div>
  <div class="small" style="background-color:lightblue;">B</div>
  <div class="small" style="background-color:yellow;">C</div>
  <div class="double" style="background-color:brown;">D</div>
  <div class="double" style="background-color:lightgreen;">E</div>
  <div class="small" style="background-color:brown;">F</div>
</div>
```

#### CSS

```css
#content {
  display: flex;
}

div > div {
  border: 3px solid rgb(0 0 0 / 20%);
}

.small {
  flex-grow: 1;
}

.double {
  flex-grow: 2;
  border: 3px solid rgb(0 0 0 / 20%);
}
```

#### Result

{{EmbedLiveSample('Setting flex item grow factor')}}

When the six flex items are distributed along the container's main axis, if the sum of the main content of those flex items is less than the size of the container's main axis, the extra space is distributed among the size flex items, with `A`, `B`, `C`, and `F`, each getting `12.5%` of the remaining space and `D` and `E` each getting `25%` of the extra space.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("flex")}} shorthand
- [Basic Concepts of Flexbox](/en-US/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [Controlling Ratios of flex items along the main axis](/en-US/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis)
- [CSS flexible box layout](/en-US/docs/Web/CSS/CSS_flexible_box_layout) module
- [`flex-grow` is weird. Or is it?](https://css-tricks.com/flex-grow-is-weird/) via CSS-Tricks (2017)
