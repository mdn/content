---
title: Main Axis
slug: Glossary/Main_Axis
tags:
  - CSS
  - Glossary
  - Main axis
  - flexbox
---
The main axis in {{glossary("flexbox")}} is defined by the direction set by the {{cssxref("flex-direction")}} property. There are four possible values for `flex-direction`. These are:

- `row`
- `row-reverse`
- `column`
- `column-reverse`

Should you choose `row` or `row-reverse` then your main axis will run along the row in the inline direction.

![In this image the flex-direction is row which forms the main axis](basics1.png)

Choose `column` or `column-reverse` and your main axis will run top to bottom of the page in the block direction.

![Three flex items taking up the full width of the container, displayed one below the other in code order.  Flex-direction is set to column. The main axis is vertical i.e. from top to bottom](basics2.png)

On the main axis you can control the sizing of flex items by adding any available space to the items themselves, by way of `flex` properties on the items. Or, you can control the space between and around items by using the `justify-content` property.

## See also

### Property reference

- {{cssxref("flex-basis")}}
- {{cssxref("flex-direction")}}
- {{cssxref("flex-grow")}}
- {{cssxref("flex-shrink")}}
- {{cssxref("justify-content")}}
- {{cssxref("flex")}}

### Further reading

- CSS Flexbox Guide: _[Basic Concepts of Flexbox](/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)_
- CSS Flexbox Guide: _[Aligning items in a flex container](/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Aligning_Items_in_a_Flex_Container)_
- CSS Flexbox Guide: _[Controlling Ratios of flex items along the main axis](/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Controlling_Ratios_of_Flex_Items_Along_the_Main_Ax)_
