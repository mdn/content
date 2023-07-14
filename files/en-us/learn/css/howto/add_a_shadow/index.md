---
title: How to add a shadow to an element
slug: Learn/CSS/Howto/Add_a_shadow
page-type: learn-faq
---

{{LearnSidebar}}

In this guide you can find out how to add a shadow to any box on your page.

## Adding box shadows

Shadows are a common design feature that can help elements stand out on your page. In CSS, shadows on the boxes of elements are created using the {{cssxref("box-shadow")}} property (if you want to add a shadow to the text itself, you need {{cssxref("text-shadow")}}).

The `box-shadow` property takes a number of values:

- The offset on the x-axis
- The offset on the y-axis
- A blur radius
- A spread radius
- A color
- The `inset` keyword

In the example below we have set the X and Y axes to 5px, the blur to 10px and the spread to 2px. I am using a semi-transparent black as my color. Play with the different values to see how they change the shadow.

{{EmbedGHLiveSample("css-examples/howto/box-shadow-button.html", '100%', 500)}}

> **Note:** We are not using `inset` in this example, this means that the shadow is the default drop shadow with the box on top of the shadow. Inset shadows appear inside the box as if the content were pushed back into the page.

## See also

- The [Box shadow generator](/en-US/docs/Web/CSS/CSS_Backgrounds_and_Borders/Box-shadow_generator)
- [Learn CSS: Advanced styling effects.](/en-US/docs/Learn/CSS/Building_blocks/Advanced_styling_effects)
