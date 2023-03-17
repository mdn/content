---
title: CSS Colors
slug: Web/CSS/CSS_Colors
page-type: css-module
spec-urls:
  - https://drafts.csswg.org/css-color/
  - https://drafts.csswg.org/css-color-5/
---

{{CSSRef}}

The **CSS color** module defines colors, color types, color blending, opacity, and how you can apply these colors and effects to HTML content.

Not all CSS properties that take a {{cssxref("&lt;color&gt;")}} as a value are part of this module, but they do depend upon it.

### Colors in action

To view a new color, along with the color value written in [red-green-blue](/en-US/docs/Web/CSS/color_value/rgb), [hexadecimal](/en-US/docs/Web/CSS/hex-color), [hue, saturation, and lightness](/en-US/docs/Web/CSS/color_value/hsl), and [hue, whiteness, and blackness](/en-US/docs/Web/CSS/color_value/hwb) CSS color formats, open the [color picker](/en-US/docs/Web/HTML/Element/input/color) and select a new color in the box below. Change the opacity of the color with the opacity [slider](/en-US/docs/Web/HTML/Element/input/range).

{{EmbedGHLiveSample("css-examples/modules/colors.html", '100%', 450)}}

To see the code for this color syntax converter, [view the source on Github](https://github.com/mdn/css-examples/blob/main/modules/colors.html).

## Reference

### Properties

- {{cssxref("color")}}
- {{cssxref("opacity")}}

### At-rules and descriptors

- {{cssxref("@color-profile")}}
  - `components` descriptor
  - `rendering-intent` descriptor
  - `src` descriptor

### Functions

- Absolute color functions, including:
  - [`rgb()`](/en-US/docs/Web/CSS/color_value/rgb) and its `rgba()` alias
  - [`hsl()`](/en-US/docs/Web/CSS/color_value/hsl) and its `hsla()` alias
  - [`hwb()`](/en-US/docs/Web/CSS/color_value/hwb)
  - [`lab()`](/en-US/docs/Web/CSS/color_value/lab)
  - [`lch()`](/en-US/docs/Web/CSS/color_value/lch)
  - [`oklab()`](/en-US/docs/Web/CSS/color_value/oklab)
  - [`oklch()`](/en-US/docs/Web/CSS/color_value/oklch)
  - [`color()`](/en-US/docs/Web/CSS/color_value/color)
- [`color-contrast()`](/en-US/docs/Web/CSS/color_value/color-contrast) {{Experimental_Inline}}
- [`color-mix()`](/en-US/docs/Web/CSS/color_value/color-contrast)
- [`device-cmyk()`](/en-US/docs/Web/CSS/color_value/device-cmyk) {{Experimental_Inline}}

### Data types

- {{cssxref("&lt;color&gt;")}}
- [`<absolute-color-function>`](#Functions)
- {{cssxref("hex-color")}}
- {{cssxref("named-color")}}
- {{cssxref("alpha-value")}}
- {{cssxref("hue")}}
- {{cssxref("system-color")}}
- [`<colorspace-params>`](/en-US/docs/Web/CSS/color_value/color#using_predefined_colorspaces_with_color)

### Keywords

- [`currentcolor`](/en-US/docs/Web/CSS/color_value#currentcolor_keyword)
- [`transparent`](/en-US/docs/Web/CSS/named-color#transparent)

### Interfaces

- `CSSColorProfileRule` {{Experimental_Inline}}

## Guides

- [Applying color to HTML elements using CSS](/en-US/docs/Web/CSS/CSS_Colors/Applying_color)
  - : A guide to using CSS to apply color to a variety of types of content. All color-related CSS properties are touched upon.
- [Understanding color and luminance](/en-US/docs/Web/Accessibility/Understanding_Colors_and_Luminance)
  - : Color perception and using colors with color insensitive (color blind) users, reduced vision users and users with vestibular disorders or other neurological disorders in mind.
- [WCAG 1.4.1: Color contrast](/en-US/docs/Web/Accessibility/Understanding_WCAG/Perceivable/Color_contrast)
  - : Explanation of contrast requirements between background and foreground content to ensure legibility.
- [Color picker tool](/en-US/docs/Web/CSS/CSS_Colors/Color_picker_tool)
  - : This tool makes it easy to create, adjust, and experiment with custom colors.

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
  - {{cssxref("outline-color")}}
  - {{cssxref("scrollbar-color")}}
  - {{cssxref("text-decoration-color")}}
  - {{cssxref("text-emphasis-color")}}
  - {{cssxref("text-shadow")}}
  - {{cssxref("-webkit-tap-highlight-color")}}
- SVG color properties that are part of other specifications:
  - [`fill`](/en-US/docs/Web/SVG/Attribute/fill)
  - [`flood-color`](/en-US/docs/Web/SVG/Attribute/flood-color)
  - [`lighting-color`](/en-US/docs/Web/SVG/Attribute/lighting-color)
  - [`stop-color`](/en-US/docs/Web/SVG/Attribute/stop-color)
  - [`stroke`](/en-US/docs/Web/SVG/Attribute/stroke)
- SVG [`color`](/en-US/docs/Web/SVG/Attribute/color) attribute
- {{glossary("Color wheel")}} glossary term
- {{glossary("Interpolation")}} glossary term
- The [`@font-palette-values`](/en-US/docs/Web/CSS/@font-palette-values) at-rule [`override-colors`](/en-US/docs/Web/CSS/@font-palette-values/override-colors) descriptor
- The [`@color-profile`](/en-US/docs/Web/CSS/@color-profile) at-rule
- The [`color-gamut`](/en-US/docs/Web/CSS/@media/color-gamut) @media feature
- The [`forced-colors`](/en-US/docs/Web/CSS/@media/forced-colors) @media feature

## Specifications

{{Specifications}}

## See also

- [CSS color adjustment](/en-us/web/css/css_color_adjustment) module, and the {{cssxref("print-color-adjust")}} property.
- [CSS images](/en-US/docs/Web/CSS/CSS_Images) module, which is where CSS [`<gradient>`](/en-US/docs/Web/CSS/gradient) images are defined.
- The [`VideoColorSpace`](/en-US/docs/Web/API/VideoColorSpace) interface
- The SVG [`<feColorMatrix>`](/en-US/docs/Web/SVG/Element/feColorMatrix) element
- [Canvas API: applying styles and colors](/en-US/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors#colors)
