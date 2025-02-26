---
title: Color picker tool
slug: Web/CSS/CSS_colors/Color_picker_tool
page-type: guide
---

{{CSSRef}}

This tool lets you pick a color in the sRGB {{glossary("color space")}} and converts it between various CSS [color formats](/en-US/docs/Web/CSS/color_value), helping you understand the syntax of the following sRGB color notations:

- {{cssxref("hex-color")}}, a _hexadecimal color representation_ of an [sRGB](/en-US/docs/Glossary/RGB) color using its primary color components (red, green, blue) written as hexadecimal numbers, as well as its transparency.
- {{CSSxRef("color_value/rgb", "rgb()")}}, which defines a given color according to its red, green, blue and alpha (transparency) components.
- {{CSSxRef("color_value/hsl", "hsl()")}}, which defines a given color according to its hue, saturation, lightness and alpha (transparency) components.
- {{CSSxRef("color_value/hwb", "hwb()")}}, which defines a given color according to its hue, whiteness, blackness and alpha (transparency) components.
- {{CSSxRef("color_value/color", "color()")}}, which defines a color in the given color space.

When you select a color, it gets displayed in four standard CSS color formats. Control over the alpha channel is also supported.

{{EmbedGHLiveSample("css-examples/modules/colors.html", '100%', 450)}}

The generated color values can be used anywhere the {{cssxref("color_value", "&lt;color&gt")}} data type is supported in CSS.

## See also

- [Applying color with CSS properties](/en-US/docs/Web/CSS/CSS_colors/Applying_color)
- [CSS color values](/en-US/docs/Web/CSS/CSS_colors/Color_values)
- [Using color wisely](/en-US/docs/Web/CSS/CSS_colors/Using_color_wisely)
- [Using relative colors](/en-US/docs/Web/CSS/CSS_colors/Relative_colors)
- [Understanding color and luminance](/en-US/docs/Web/Accessibility/Understanding_Colors_and_Luminance)
- [WCAG 1.4.1: Color contrast](/en-US/docs/Web/Accessibility/Understanding_WCAG/Perceivable/Color_contrast)
- [Learn: Styling backgrounds and borders using CSS](/en-US/docs/Learn_web_development/Core/Styling_basics/Backgrounds_and_borders)
- [Learn accessibility: Color and color contrast](/en-US/docs/Learn_web_development/Core/Accessibility/CSS_and_JavaScript#color_and_color_contrast)
