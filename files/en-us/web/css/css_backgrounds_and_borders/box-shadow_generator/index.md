---
title: Box-shadow generator
slug: Web/CSS/CSS_Backgrounds_and_Borders/Box-shadow_generator
tags:
  - CSS
  - Tools
  - box-shadow
---
This tool lets you construct CSS {{cssxref("box-shadow")}} effects, to add box shadow effects to your CSS objects.

{{EmbedGHLiveSample("css-examples/tools/box-shadow-generator/", '100%', 900)}}

The box-shadow generator enables you to add one or more box shadows to an element.

On opening the tool, you'll find a rectangle in the top-right section of the tool. That's the element you're going to be applying shadows to. When this element is selected (as it is, when you first load the page) you can apply some basic styling to it:

- Set the element's {{cssxref("color")}} using the color picker tool.
- Give the element a {{cssxref("border")}} using the "border" checkbox.
- Use the sliders to set the element's {{cssxref("top")}}, {{cssxref("left")}}, {{cssxref("width")}}, and {{cssxref("height")}} properties.

To add a box shadow, click the "+" button at the top-left. This adds a shadow, and lists it in the column on the left. Now you can set the values of the new shadow:

- Set the shadow's {{cssxref("color")}} using the color picker tool.
- Set the shadow to be inset using the "inset" checkbox.
- Use the sliders to set the element's position, blur, and spread.

To add another shadow, click "+" again. Now any values you set will apply to this new shadow. Change the order in which these two shadows are applied using the ↑ and ↓ buttons at the top-left. Select the first shadow again by clicking it in column on the left. To update the element's own styles, select it by clicking the button labelled "element" along the top.

You can add {{cssxref("::before")}} and {{cssxref("::after")}} pseudo-elements to the element, and give them box shadows as well. To switch between the element and its pseudo-elements, use the buttons along the top labeled "element", ":before", and ":after".

The box at the bottom-right contains the CSS for the element and any `before::` or `::after` pseudo-elements.
