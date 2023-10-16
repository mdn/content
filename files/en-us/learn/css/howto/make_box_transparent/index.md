---
title: How to make a box semi-transparent
slug: Learn/CSS/Howto/Make_box_transparent
page-type: learn-faq
---

{{LearnSidebar}}

This guide will help you to understand the ways to make a box semi-transparent using CSS.

## Change the opacity of the box and content

If you would like the box and all of the contents of the box to change opacity, then the CSS {{cssxref("opacity")}} property is the tool to reach for. Opacity is the opposite of transparency; therefore `opacity: 1` is fully opaque—you will not see through the box at all.

Using a value of `0` would make the box completely transparent, and values between the two will change the opacity, with higher values giving less transparency.

## Changing the opacity of the background color only

In many cases you will only want to make the background color itself partly transparent, keeping the text and other elements fully opaque. To achieve this, use a color value which has an alpha channel—such as [rgba](/en-US/docs/Web/CSS/color_value#rgb_color_model). As with `opacity`, a value of `1` for the alpha channel value makes the color fully opaque. Therefore `background-color: rgba(0,0,0,.5);` will set the background color to 50% opacity.

Try changing the opacity and alpha channel values in the below examples to see more or less of the background image behind the box.

{{EmbedGHLiveSample("css-examples/howto/opacity.html", '100%', 770)}}

> **Note:** Take care that your text retains enough contrast with the background in cases where you are overlaying an image; otherwise you may make the content hard to read.

## See also

- [Applying color to HTML elements using CSS.](/en-US/docs/Web/CSS/CSS_colors/Applying_color)
