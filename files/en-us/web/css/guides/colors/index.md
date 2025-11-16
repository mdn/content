---
title: CSS colors
short-title: Colors
slug: Web/CSS/Guides/Colors
page-type: css-module
spec-urls:
  - https://drafts.csswg.org/css-color/
  - https://drafts.csswg.org/css-color-5/
sidebar: cssref
---

The **CSS colors** module defines colors, color types, color blending, opacity, and how you can apply these colors and effects to HTML content.

While this module has only two CSS properties, {{cssxref("color")}} and {{cssxref("opacity")}}, over 20 CSS and SVG properties, CSS images, at-rules, and @media rules depend on these two properties.

## Colors in action

The color syntax converter below shows the values of the currently selected color in [red-green-blue](/en-US/docs/Web/CSS/Reference/Values/color_value/rgb) (RGB), [hexadecimal](/en-US/docs/Web/CSS/Reference/Values/hex-color) (HEX), [hue, saturation, and lightness](/en-US/docs/Web/CSS/Reference/Values/color_value/hsl) (HSL), and [hue, whiteness, and blackness](/en-US/docs/Web/CSS/Reference/Values/color_value/hwb) (HWB) CSS color formats. All the RGB, HEX, HSL, and HWB color values here, while written differently, represent the same color value.

{{EmbedGHLiveSample("css-examples/modules/colors.html", '100%', 450)}}

Selecting a color via the [color picker](/en-US/docs/Web/HTML/Reference/Elements/input/color) and an opacity via the [slider](/en-US/docs/Web/HTML/Reference/Elements/input/range) updates the RGB, HEX, HSL, and HWB values. When you choose a new color or opacity value, the color of the background and the slider update via the CSS properties {{cssxref("background-color")}} and {{cssxref("accent-color")}}, respectively.

To see the code for this color syntax converter, [view the source on GitHub](https://github.com/mdn/css-examples/blob/main/modules/colors.html).

## Reference

### Properties

- {{cssxref("color")}}
- {{cssxref("opacity")}}

### At-rules and descriptors

The CSS colors module also introduces the {{cssxref("@color-profile")}} at-rule, along with its `components`, `rendering-intent` and `src` descriptors. Currently, no browsers support these features.

### Functions

- Color functions:
  - [`rgb()`](/en-US/docs/Web/CSS/Reference/Values/color_value/rgb)
  - [`hsl()`](/en-US/docs/Web/CSS/Reference/Values/color_value/hsl)
  - [`hwb()`](/en-US/docs/Web/CSS/Reference/Values/color_value/hwb)
  - [`lab()`](/en-US/docs/Web/CSS/Reference/Values/color_value/lab)
  - [`lch()`](/en-US/docs/Web/CSS/Reference/Values/color_value/lch)
  - [`oklab()`](/en-US/docs/Web/CSS/Reference/Values/color_value/oklab)
  - [`oklch()`](/en-US/docs/Web/CSS/Reference/Values/color_value/oklch)
  - [`color()`](/en-US/docs/Web/CSS/Reference/Values/color_value/color)
- [`color-mix()`](/en-US/docs/Web/CSS/Reference/Values/color_value/color-mix)
- [`contrast-color()`](/en-US/docs/Web/CSS/Reference/Values/color_value/contrast-color)
- {{CSSXref("color_value/light-dark", "light-dark()")}}

The CSS color modules also introduce the {{CSSXref("color_value/device-cmyk", "device-cmyk()")}} function. Currently, no browsers support this feature.

### Data types

- {{cssxref("&lt;color&gt;")}}
- [`<color-function>`](#functions)
- {{cssxref("hex-color")}}
- {{cssxref("named-color")}}
- {{cssxref("alpha-value")}}
- {{cssxref("hue")}}
- {{cssxref("system-color")}}
- [`<colorspace-params>`](/en-US/docs/Web/CSS/Reference/Values/color_value/color#using_predefined_color_spaces_with_color)

### Glossary terms and keywords

- {{glossary("Color space")}}
- [`currentColor`](/en-US/docs/Web/CSS/Reference/Values/color_value#currentcolor_keyword)
- {{glossary("Interpolation")}}
- {{glossary("RGB")}}
- [`transparent`](/en-US/docs/Web/CSS/Reference/Values/named-color#transparent)

### Interfaces

The CSS color module also introduces the `CSSColorProfileRule` interface. Currently, no browsers support this feature.

## Guides

- [Applying color to HTML elements using CSS](/en-US/docs/Web/CSS/Guides/Colors/Applying_color)
  - : A guide to using CSS to apply color to a variety of types of content, including all CSS properties that accept `<color>` as a value.
- [CSS color values](/en-US/docs/Web/CSS/Guides/Colors/Color_values)
  - : An overview of color spaces and the different `<color>` functional notations available in CSS.
- [Using color wisely](/en-US/docs/Web/CSS/Guides/Colors/Using_color_wisely)
  - : Color theory and resources, including finding the right colors to create an accessible color palette, contrast, and printing in color.
- [Using relative colors](/en-US/docs/Web/CSS/Guides/Colors/Using_relative_colors)
  - : This article explains relative CSS color syntax, shows what the different options are, and looks at some illustrative examples.
- [Understanding color and luminance](/en-US/docs/Web/Accessibility/Guides/Colors_and_Luminance)
  - : Color perception and using colors with color insensitive (color blind) users, reduced vision users and users with vestibular disorders or other neurological disorders in mind.
- [WCAG 1.4.1: Color contrast](/en-US/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast)
  - : Explanation of contrast requirements between background and foreground content to ensure legibility.

## Related concepts

- CSS properties that are part of other specifications:
  - {{cssxref("accent-color")}}
  - {{cssxref("background-color")}}
  - {{cssxref("background-image")}}
  - {{cssxref("border-color")}}
  - {{cssxref("box-shadow")}}
  - {{cssxref("caret-color")}}
  - {{cssxref("color")}}
  - {{cssxref("color-scheme")}}
  - {{cssxref("column-rule-color")}}
  - {{cssxref("dynamic-range-limit")}}
  - {{cssxref("outline-color")}}
  - {{cssxref("scrollbar-color")}}
  - {{cssxref("text-decoration-color")}}
  - {{cssxref("text-emphasis-color")}}
  - {{cssxref("text-shadow")}}
  - {{cssxref("-webkit-tap-highlight-color")}}
- {{cssxref("dynamic-range-limit-mix()")}} function
- SVG color properties that are part of other specifications:
  - {{svgattr("fill")}}
  - {{svgattr("flood-color")}}
  - {{svgattr("lighting-color")}}
  - {{svgattr("stop-color")}}
  - {{svgattr("stroke")}}
- SVG {{svgattr("color")}} attribute
- {{glossary("Color wheel")}} glossary term
- {{glossary("Interpolation")}} glossary term
- The {{cssxref("@font-palette-values")}} at-rule [`override-colors`](/en-US/docs/Web/CSS/Reference/At-rules/@font-palette-values/override-colors) descriptor
- The {{cssxref("@color-profile")}} at-rule
- The [`color-gamut`](/en-US/docs/Web/CSS/Reference/At-rules/@media/color-gamut) @media feature
- The [`forced-colors`](/en-US/docs/Web/CSS/Reference/At-rules/@media/forced-colors) @media feature

## Specifications

{{Specifications}}

## See also

- [CSS color adjustment](/en-US/docs/Web/CSS/Guides/Color_adjustment) module and the {{cssxref("print-color-adjust")}} property.
- [CSS images](/en-US/docs/Web/CSS/Guides/Images) module, which is where CSS {{cssxref("&lt;gradient&gt;")}} images are defined.
- The [`VideoColorSpace`](/en-US/docs/Web/API/VideoColorSpace) interface
- The SVG {{svgelement("feColorMatrix")}} element
- [Canvas API: applying styles and colors](/en-US/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors#colors)
- [Color format converter](/en-US/docs/Web/CSS/Guides/Colors/Color_format_converter)
- [Color mixer](/en-US/docs/Web/CSS/Guides/Colors/Color_mixer)
