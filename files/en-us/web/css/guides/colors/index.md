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

The color syntax converter below shows the values of the currently selected color in [red-green-blue](/files/en-us/web/css/reference/values/color_value/rgb/index.md) (RGB), [hexadecimal](/files/en-us/web/css/reference/values/hex-color/index.md) (HEX), [hue, saturation, and lightness](/files/en-us/web/css/reference/values/color_value/hsl/index.md) (HSL), and [hue, whiteness, and blackness](/files/en-us/web/css/reference/values/color_value/hwb/index.md) (HWB) CSS color formats. All the RGB, HEX, HSL, and HWB color values here, while written differently, represent the same color value.

{{EmbedGHLiveSample("css-examples/modules/colors.html", '100%', 450)}}

Selecting a color via the [color picker](/files/en-us/web/css/reference/values/hex-color/index.md) and an opacity via the [slider](/files/en-us/web/html/reference/elements/input/range/index.md) updates the RGB, HEX, HSL, and HWB values. When you choose a new color or opacity value, the color of the background and the slider update via the CSS properties {{cssxref("background-color")}} and {{cssxref("accent-color")}}, respectively.

To see the code for this color syntax converter, [view the source on GitHub](https://github.com/mdn/css-examples/blob/main/modules/colors.html).

## Reference

### Properties

- {{cssxref("color")}}
- {{cssxref("opacity")}}

### At-rules and descriptors

The CSS colors module also introduces the {{cssxref("@color-profile")}} at-rule, along with its `components`, `rendering-intent` and `src` descriptors. Currently, no browsers support these features.

### Functions

- Color functions:
  - [`rgb()`](/files/en-us/web/css/reference/values/color_value/rgb/index.md)
  - [`hsl()`](/files/en-us/web/css/reference/values/color_value/hsl/index.md)
  - [`hwb()`](/files/en-us/web/css/reference/values/color_value/hwb/index.md)
  - [`lab()`](/files/en-us/web/css/reference/values/color_value/lab/index.md)
  - [`lch()`](/files/en-us/web/css/reference/values/color_value/lch/index.md)
  - [`oklab()`](/files/en-us/web/css/reference/values/color_value/oklab/index.md)
  - [`oklch()`](/files/en-us/web/css/reference/values/color_value/oklch/index.md)
  - [`color()`](/files/en-us/web/css/reference/values/color_value/color/index.md)
- [`color-mix()`](/files/en-us/web/css/reference/values/color_value/color-mix/index.md)
- [`contrast-color()`](/files/en-us/web/css/reference/values/color_value/contrast-color/index.md)
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
- [`<colorspace-params>`](/files/en-us/web/css/reference/values/color_value/color/index.md) files/en-us/web/css/reference/values/color_value/color/index.md

### Glossary terms and keywords

- {{glossary("Color space")}}
- [`currentColor`](/files/en-us/web/css/reference/values/color_value/index.md#currentcolor_keyword)
- {{glossary("Interpolation")}}
- {{glossary("RGB")}}
- [`transparent`](/files/en-us/web/css/reference/values/named-color/index.md#transparent)

### Interfaces

The CSS color module also introduces the `CSSColorProfileRule` interface. Currently, no browsers support this feature.

## Guides

- [Applying color to HTML elements using CSS](/files/en-us/web/css/guides/colors/applying_color/index.md)
  - : A guide to using CSS to apply color to a variety of types of content, including all CSS properties that accept `<color>` as a value.
- [CSS color values](/files/en-us/web/css/guides/colors/color_values/index.md)
  - : An overview of color spaces and the different `<color>` functional notations available in CSS.
- [Using color wisely](/files/en-us/web/css/guides/colors/using_color_wisely/index.md)
  - : Color theory and resources, including finding the right colors to create an accessible color palette, contrast, and printing in color.
- [Using relative colors](/files/en-us/web/css/guides/colors/using_relative_colors/index.md)
  - : This article explains relative CSS color syntax, shows what the different options are, and looks at some illustrative examples.
- [Understanding color and luminance](/files/en-us/web/accessibility/guides/colors_and_luminance/index.md)
  - : Color perception and using colors with color insensitive (color blind) users, reduced vision users and users with vestibular disorders or other neurological disorders in mind.
- [WCAG 1.4.1: Color contrast](/files/en-us/web/accessibility/guides/understanding_wcag/perceivable/color_contrast/index.md)
  - : Explanation of contrast requirements between background and foreground content to ensure legibility.
- [CSS value serialization](/files/en-us/web/api/css_object_model/css_value_serialization/index.md)
  - : How [CSSOM APIs](/files/en-us/web/api/css_object_model/index.md) serialize color and other values into standardized string representations.

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
  - [`fill`](/files/en-us/web/svg/reference/attribute/fill/index.md)
  - [`flood-color`](/files/en-us/web/svg/reference/attribute/flood-color/index.md)
  - [`lighting-color`](/files/en-us/web/svg/reference/attribute/lighting-color/index.md)
  - [`stop-color`](/files/en-us/web/svg/reference/attribute/stop-color/index.md)
  - [`stroke`](/files/en-us/web/svg/reference/attribute/stroke/index.md)
- SVG [`color`](/files/en-us/web/svg/reference/attribute/color/index.md) attribute
- {{glossary("Color wheel")}} glossary term
- {{glossary("Interpolation")}} glossary term
- The {{cssxref("@font-palette-values")}} at-rule [`override-colors`](/files/en-us/web/css/reference/at-rules/%40font-palette-values/override-colors/index.md) descriptor
- The {{cssxref("@color-profile")}} at-rule
- The [`color-gamut`](/files/en-us/web/css/reference/at-rules/%40media/color-gamut/index.md) @media feature
- The [`forced-colors`](/files/en-us/web/css/reference/at-rules/%40media/forced-colors/index.md) @media feature

## Specifications

{{Specifications}}

## See also

- [CSS color adjustment](/files/en-us/web/css/guides/color_adjustment/index.md) module and {{cssxref("print-color-adjust")}}
- {{cssxref("gradient")}} defined in [CSS images](/files/en-us/web/css/guides/images/index.md) module
- The [`VideoColorSpace`](files/en-US/web/api/videocolorspace/index.md) interface 
- [`<feColorMatrix>`](/files/en-us/web/svg/reference/element/fecolormatrix/index.md) SVG element
- [Canvas API: applying styles and colors](/files/en-us/web/api/canvas_api/tutorial/applying_styles_and_colors/index.md) 
- Tools:
  - [Color format converter](/files/en-us/web/css/guides/colors/color_format_converter/index.md)
  - [Color mixer](/files/en-us/web/css/guides/colors/color_mixer/index.md)
