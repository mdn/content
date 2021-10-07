---
title: How to add a shadow to text
slug: Learn/CSS/Howto/Add_a_text_shadow
tags:
  - Basic
  - Beginner
  - CSS
  - CSS:Getting_Started
  - Guide
  - Web
---
{{LearnSidebar}}

In this guide you can find out how to add a shadow to any text on your page.

## Adding shadows to text

In our [guide to adding a shadow to boxes](/en-US/docs/Learn/CSS/Howto/Add_a_shadow), you can find out how to add a shadow to any element on your page. However, that technique only adds shadows to the element's surrounding box. To add a drop shadow to the text inside the box you need a different CSS property — {{cssxref("text-shadow")}}.

The `text-shadow` property takes a number of values:

- The offset on the x-axis
- The offset on the y-axis
- A blur radius
- A color

In the example below we have set the x-axis offset to 2px, the y-axis offset to 4px, the blur radius to 4px, and the color to a semi-transparent blue. Play with the different values to see how they change the shadow.

{{EmbedGHLiveSample("css-examples/howto/text-shadow.html", '100%', 500)}}

> **Note:** It can be quite easy to make text hard to read with text shadows. Make sure that the choices you make still leave your text readable and provide enough [color contrast](/en-US/docs/Web/Accessibility/Understanding_WCAG/Perceivable/Color_contrast) for visitors who have difficulty with low-contrast text.
