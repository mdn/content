---
title: Color space
slug: Glossary/Color_space
page-type: glossary-definition
---

{{GlossarySidebar}}

A **color space** is an organization of colors with respect to an underlying colorimetric model. A color model defines how the color components relate to a color space. Graphically, a point in a three-dimensional grid or cube represents a color. Each dimension (or axis) corresponds to a different channel. Colors can be expressed in multiple color spaces, or transformed from one color space to another, while still looking the same.

The _sRGB_ color space (standard red, green, blue) was created for the web, but we are no longer limited to this color space. In addition to several defined color spaces, CSS Color level 5 enables defining custom color spaces.

The predefined sRGB color spaces include `srgb`, `srgb-linear`, `display-p3`, `a98-rgb`, `prophoto-rgb`, and `rec2020`. The predefined XYZ color spaces include `xyz`, `xyz-d50`, and `xyz-d65`.

## Named color spaces

- `sRGB` color spaces

  - : sRGB, or "Standard RGB", is the underlying color space for {{Glossary("RGB")}} colors, including {{cssxref("hex-color")}}, {{cssxref("named-color")}}, {{cssxref("color_value/rgb", "rgb()")}}, {{cssxref("color_value/hsl", "hsl()")}} (hue, saturation, lightness), {{cssxref("color_value/hwb", "hwb()")}} (hue, whiteness, blackness). The HSV (hue, saturation, and value) color space, and its synonym HSB (hue, saturation, and brightness), are represented in CSS as [`hwb()`](/en-US/docs/Web/CSS/color_value/hwb).Named colors are simply keywords mapped to specific hex values. Converting these various color notations to sRGB is straightforward mathematically. Note that {{cssxref("&lt;color&gt;","currentcolor","#currentcolor_keyword")}} can be any color, it is not restricted to sRGB.

    Additional cylindrical sRGB spaces that are not in the CSS specification include: `HSI` (hue, saturation, and intensity), `Okhsv`, `Okhsl`, `HSLuv`, `HPLuv` and `Cubehelix`. For all of these, the {{cssxref("ident")}} used as the color space in {{CSSXref("color_value/color", "color()")}} is `srgb`. Other predefined RGB color spaces include `srgb-linear`, `display-p3`, `a98-rgb`, `prophoto-rgb`, and `rec2020`.

  - `srgb-linear` color space

    - : The predefined linear-light sRGB color space, `srgb-linear`, is the same as `srgb` except that the transfer function is linear-light with no gamma-encoding. The `srgb-linear` color space accepts the three red, green, and blue, or `r`, `g`, and `b`, values as numeric parameters, with in-gamut colors ranging from `0` to `1`. The whitepoint is D65.

  - `display-p3` color space

    - : Defined by Apple, the **Display P3** color space combines the DCI-P3 color gamut, the D65 white point, and sRGB gamma curve. It is a wide gamut space typical of current wide-gamut monitors, enabling more vibrant greens and reds than the sRGB color gamut. The `display-p3` is based on `r`, `g`, and `b`, with in gamut values ranging from `0` to `1`. The whitepoint is D65.

  - `a98-rgb` color space

    - : In-gamut `r`, `g`, and `b` values range from `0` to `1`. The transfer curve is a gamma function, close to but not exactly 1/2.2.

  - `prophoto-rgb`

    - : The `prophoto-rgb` color space is used by photographers.

  - `rec2020`

    - : `rec2020` is a broadcast industry standard, ultra-wide gamut space capable of representing almost all visible real-world colors.

- [CIELAB](https://en.wikipedia.org/wiki/CIELAB_color_space) color spaces

  - : The CIELAB color space, also referred to as L*a*b*, represents the entire range of color that humans can see. It expresses color as three values: L* for perceptual lightness and a* and b* for the four unique colors of human vision: red, green, blue and yellow.

    Lab is rectangular coordinate system, with a central lightness `L` axis. Positive values along the `a` axis are a purplish red while negative values are the complement: green. Positive values along the `b` axis are yellow and negative are blue/violet. Desaturated colors have small values for `a` and `b` with greater absolute values being more saturated.

    CIELab color functions include {{CSSXref("color_value/lab", "lab()")}} (lightness, a-axis, b-axis) and {{CSSXref("color_value/lch", "lch()")}} (lightness, chroma, hue) as well as {{CSSXref("color_value/oklab", "oklab()")}} and {{CSSXref("color_value/oklch", "oklch()")}}. The lightness values are the same, but `lch()` is a polar, cylindrical coordinate system using polar coordinates `C` (chroma) and `H` (hue) rather than axes. Note the hue and lightness here are not the same as the same named values in `hsl()` or other sRGB color spaces.

    CIE Lab color spaces, including LCH, Oklab and Oklch, are device-independent color spaces.

- CIE XYZ color spaces

  - : Created by the International Commission on Illumination (CIE) in 1931, the XYZ color spaces are the first defined quantitative links between distributions of wavelengths in the electromagnetic visible spectrum and perceived colors in human color vision. xyz, xyz-d50, and xyz-d65.

REC709 Color Space.

## See also

- {{cssxref("@media/color-gamut", "color-gamut")}} `@media` feature
- [CSS data type: `<color>`](/en-US/docs/Web/CSS/color_value)
- [sRGB color space](https://webstore.iec.ch/publication/6168)
- [sRGB](https://en.wikipedia.org/wiki/SRGB) color space
- [CIELAB](https://en.wikipedia.org/wiki/CIELAB_color_space) color space
- [Oklab](https://bottosson.github.io/posts/oklab/) color space
