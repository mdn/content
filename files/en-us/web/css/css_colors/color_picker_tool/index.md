---
title: Color picker tool
slug: Web/CSS/CSS_colors/Color_picker_tool
page-type: guide
---

{{CSSRef}}

This tool lets you pick a color in the sRGB {{glossary("color space")}} and converts it between various CSS [color formats](/en-US/docs/Web/CSS/color_value), including:

- {{cssxref("hex-color")}}, a _hexadecimal color syntax_ of an [sRGB](/en-US/docs/Glossary/RGB) color using its primary color components (red, green, blue) written as hexadecimal numbers, as well as its transparency.
- {{CSSxRef("color_value/rgb", "rgb()")}}, which defines a given color according to its red, green, blue and alpha (transparency) components.
- {{CSSxRef("color_value/hsl", "hsl()")}}, which defines a given color according to its hue, saturation, lightness and alpha (transparency) components.
- {{CSSxRef("color_value/hwb", "hwb()")}}, which defines a given color according to its hue, whiteness, blackness and alpha (transparency) components.
- {{CSSxRef("color_value/color", "color()")}}, which defines a color in any given color space.

When you select a color, it gets displayed in four standard CSS color formats. Control over the alpha channel is also supported.

This tool will help you understand the syntax of the color notations in the sRGB color space.

{{EmbedGHLiveSample("css-examples/modules/colors.html", '100%', 450)}}

The generated color values can be used anywhere the {{cssxref("color_value", "&lt;color&gt")}} data type is supported in CSS.

The older sRGB color notations, `<hex-color>`, `hsl()`, `hwb()`, and `rgb()`, do not express the full spectrum of visible colors. When using `hsl()`, `hwb()`, and `rgb()` to define a [relative color](/en-US/docs/Web/CSS/CSS_colors/Relative_colors), the output color is serialized to `color(srgb)` to avoid these limitations, meaning querying the output color value via the {{domxref("HTMLElement.style")}} property or the {{domxref("CSSStyleDeclaration.getPropertyValue()")}} method returns the output color as a [`color(srgb ...)`](/en-US/docs/Web/CSS/color_value/color) value.

## See also

- [Applying color with CSS properties](/en-US/docs/Web/CSS/CSS_colors/Applying_color)
- [CSS color values](/en-US/docs/Web/CSS/CSS_colors/Color_values)
- [Using color wisely](/en-US/docs/Web/CSS/CSS_colors/Using_color_wisely)
- [Using relative colors](/en-US/docs/Web/CSS/CSS_colors/Relative_colors)
- [Understanding color and luminance](/en-US/docs/Web/Accessibility/Understanding_Colors_and_Luminance)ders or other neurological disorders in mind.
- [WCAG 1.4.1: Color contrast](/en-US/docs/Web/Accessibility/Understanding_WCAG/Perceivable/Color_contrast)
- [Learn: Fundamental text and font styling](/en-US/docs/Learn/CSS/Styling_text/Fundamentals)
- [Building block: Styling borders using CSS](/en-US/docs/Learn/CSS/Building_blocks/Backgrounds_and_borders)
- [Building block: Changing background styles using CSS](/en-US/docs/Learn/CSS/Building_blocks/Backgrounds_and_borders)
- [Learn accessibility: Color and color contrast](/en-US/docs/Learn/Accessibility/CSS_and_JavaScript#color_and_color_contrast)
