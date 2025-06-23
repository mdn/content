---
title: Alpha (alpha channel)
slug: Glossary/Alpha
page-type: glossary-definition
---

{{GlossarySidebar}}

The **alpha channel** specifies to opacity of a ({{CSSxRef("&lt;color&gt;")}}). Colors are represented in digital form as a collection of numbers, each representing the strength or intensity level of a given component of the color. Each of these components is called a **channel**. In a typical image file, the color channels describe how much red, green, and blue are used to make up the final color. To represent a color through which the background can be seen to some extent, a fourth channel is added to the color: the alpha channel.

For example, the color `#8921F2` (also described as `rgb(137 33 242)` or `hsl(270 89% 54)`) is a nice shade of purple. Below you see a small box of that color in the top-left corner and a box of the _same_ color but with an alpha channel set at 50% (or 0.5) opacity, `#8921F280`, where `80` is the hexadecimal equivalent of 50%. This color is also described as `rgb(137 33 242 / 50%)` or `hsl(270 89% 54 / 50%)`. The two boxes are drawn on top of a paragraph of text.

![Image showing the effect of an alpha channel on a color.](alpha-channel-example.png)

As you can see, the color without an alpha channel completely blocks the background text, while the box with the alpha channel leaves it visible through the purple background color.

## See also

- [CSS colors](/en-US/docs/Web/CSS/CSS_colors)
- [Learn: Values and units](/en-US/docs/Learn_web_development/Core/Styling_basics/Values_and_units)
- [Image file type and format guide](/en-US/docs/Web/Media/Guides/Formats/Image_types)
- [Alpha compositing](https://en.wikipedia.org/wiki/Alpha_compositing) on Wikipedia
- [RGBA color model](https://en.wikipedia.org/wiki/RGBA_color_model) on Wikipedia
- [Channel (digital image)](<https://en.wikipedia.org/wiki/Channel_(digital_image)>) on Wikipedia
