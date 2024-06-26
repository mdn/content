---
title: Color space
slug: Glossary/Color_space
page-type: glossary-definition
---

{{GlossarySidebar}}

**Color spaces** are named organizations of colors for underlying color models of coordinate-based color arrangements. A color model defines how the components of a color (for example, the `h`, `w`, and `b` channels of an [`hwb()`](/en-US/docs/Web/CSS/color_value/hwb) color) relate to a color space. Most color spaces are three- or four- dimensional grids that represent colors. Each dimension (or axis) corresponds to a different channel. Colors can be expressed in multiple color spaces, and can be transformed from one color space to another, while still looking the same.

Color spaces categorize and define specific ranges of colors. Each color space is defined by a mathematical model and associated rule set. Each color space has a defined {{glossary("Gamut", "gamut")}}, which refers to the specific range of colors it can represent. These rules enable consistent and reproducible color representation across different devices and software.

The _sRGB_ color space (standard red, green, and blue) was created for the web, but we are no longer limited to this color space. [CSS Color Module Level 4](https://drafts.csswg.org/css-color-4) specifies several predefined color spaces, and [CSS Color Module Level 5](https://drafts.csswg.org/css-color-5/) goes further, specifying features for defining custom color spaces.

## Named color spaces

The predefined [RGB color spaces](#rgb_color_spaces) include `srgb`, `srgb-linear`, `display-p3`, `a98-rgb`, `prophoto-rgb`, and `rec2020`. The predefined [CIELAB color spaces](#cielab_color_spaces) include `lab-d50` and `lab-d65`. The predefined [XYZ color spaces](#xyz_color_spaces) include `xyz-d50`, and `xyz-d65` (and `xyz`, an alias for `xyz-d65`).

Color spaces are either [rectangular or polar](https://ericportis.com/posts/2024/okay-color-spaces/). Rectangular color spaces include `srgb`, `srgb-linear`, `display-p3`, `a98-rgb`, `prophoto-rgb`, `rec2020`, `lab`, `oklab`, `xyz-d50`, and `xyz-d65` (or `xyz`). The polar color spaces include `hsl`, `hwb`, `lch`, and `oklch`.

### RGB color spaces

RGB is a color model that represents colors as mixtures of three underlying components — red, green, and blue color channels — that create various hues when combined. sRGB, or "Standard RGB", is the underlying color space for {{Glossary("RGB")}} colors. sRGB is intended to codify the display specification of PC and the {{glossary("world wide web", "Web")}} based imaging systems. It is now usually the assumed color space for those without tagged or without an embedded color profile.

There are several RGB color spaces, like the _Adobe RGB_ color space, that can represent a wider {{glossary("gamut")}} of color than the _sRGB_ color space. The coordinates in _sRGB_ and _Adobe RGB_ (`a98-rgb`) are different. There are many ways to describe the RGB components of a color. In {{Glossary("CSS")}} they can be represented as a single 24-bit integer in hexadecimal notation (for example, `#add8e6` is light blue), or in [`rgb()`](/en-US/docs/Web/CSS/color_value/rgb) functional notation as three separate numbers between 0 and 255 (for example, `rgb(46 139.5 87)`).

CSS `<color>` values in the sRGB color spaces include {{cssxref("hex-color")}}, {{cssxref("named-color")}}, {{cssxref("color_value/rgb", "rgb()")}}, {{cssxref("color_value/hsl", "hsl()")}} (hue, saturation, lightness), and {{cssxref("color_value/hwb", "hwb()")}} (hue, whiteness, blackness). There are also the `srgb`, `srgb-linear`, `a98-rgb`, and `prophoto-rgb` color spaces for the [`color()`](/en-US/docs/Web/CSS/color_value/color) function.

The HSV (hue, saturation, and value) color space, and its synonym HSB (hue, saturation, and brightness), are represented in CSS as [`hwb()`](/en-US/docs/Web/CSS/color_value/hwb). Named colors are simply keywords mapped to specific hex values. Converting these various color notations to sRGB is straightforward mathematically. Note that {{cssxref("&lt;color&gt;","currentcolor","#currentcolor_keyword")}} can be any color — it is not restricted to sRGB.

The `rgb()` color function is not the only color function that can represent the _sRGB_ color space. Cylindrical coordinate systems like the [`HSL`](/en-US/docs/Web/CSS/color_value/hsl) (_hue-saturation-lightness_) or [`HWB`](/en-US/docs/Web/CSS/color_value/hwb) (_hue-whiteness-blackness_) color models are also used to represent a sRGB color on the web.

- `srgb` color space

  - : The sRGB color space, or "Standard RGB", is the standard RGB (red, green, blue) color space. It was created to be used on monitors, printers, and the Web. It is the most widely used color space and is supported by most operating systems, software programs, monitors, and printers. sRGB is based on `r`, `g`, and `b`, with in-gamut values ranging from `0` to `1`. The whitepoint is D65.

- `srgb-linear` color space

  - : The predefined linear-light sRGB color space, `srgb-linear`, is the same as `srgb` except that the transfer function is linear-light with no gamma-encoding. The `srgb-linear` color space accepts the three `r`, `g`, and `b` values as numeric parameters, with in-gamut colors ranging from `0` to `1`. The whitepoint is D65.

- `display-p3` color space

  - : Defined by Apple, the **Display P3** color space combines the DCI-P3 color gamut, the D65 whitepoint, and sRGB gamma curve. It is a wide gamut space typical of current wide-gamut monitors, enabling more vibrant greens and reds than the sRGB color gamut. The `display-p3` is based on `r`, `g`, and `b`, with in-gamut values ranging from `0` to `1`. The whitepoint is D65.

- `a98-rgb` color space

  - : `a98-rgb` is the Adobe® 1998 RGB color space designed to represent all the CMYK colors as RGB. About 50% of the visible colors specified by the [CIELab color space](#cielab_color_spaces) can be achieved, encompassing more cyan-green hues than other RGB color spaces. In-gamut `r`, `g`, and `b` values range from `0` to `1`. The transfer curve is a gamma function, close to but not exactly 1/2.2. The whitepoint is D65.

- `prophoto-rgb`

  - : Developed by Kodak, the `prophoto-rgb` color space can represent all the colors likely to occur in nature and about 90% of [CIElab colors](#cielab_color_spaces). In-gamut `r`, `g`, and `b` values range from `0` to `1`. The transfer curve is a gamma function, with a value of 1/1.8, and a small linear portion near black. The whitepoint is D50, the same one used by CIELab.

- `rec2020`

  - : `rec2020` is a broadcast industry standard for ultra-high definition 4k and 8k televisions. The ultra-wide gamut space is capable of representing almost all visible real-world colors, beyond the capabilities of most current displays. Coverage is expected to increase over time as displays improve. In-gamut `r`, `g`, and `b` values range from `0` to `1`. The whitepoint is D65.

> **Note:** Additional cylindrical RGB spaces that are not in the CSS specification include: `HSI` (hue, saturation, and intensity), `Okhsv`, `Okhsl`, `HSLuv`, `HPLuv`, and `Cubehelix`.

### CIELAB color spaces

The CIELAB (or CIELab) color space, also referred to as L\*a\*b* (or Lab* for short), represents the entire range of color that humans can see. This color space was defined by International Commission on Illumination (CIE). It expresses color as three values: L\* for perceptual lightness, and a\* and b\* for the four unique colors of human vision: red, green, blue, and yellow.

Lab is a rectangular coordinate system, with a central lightness `L` axis. Positive values along the `a` axis are a purplish red while negative values are the complement: green. Positive values along the `b` axis are yellow and negative are blue/violet. Desaturated colors have small values for `a` and `b` with greater absolute values being more saturated.

CIELab color functions include {{CSSXref("color_value/lab", "lab()")}} (lightness, a-axis, b-axis) and {{CSSXref("color_value/lch", "lch()")}} (lightness, chroma, hue) as well as {{CSSXref("color_value/oklab", "oklab()")}} and {{CSSXref("color_value/oklch", "oklch()")}}. The lightness values are the same, but `lch()` and `oklch` are polar, cylindrical coordinate systems, that use polar coordinates `C` (chroma) and `H` (hue) rather than axes.

> **Note:** The hue and lightness in `lch()` and `oklch` are different from the same-named values in {{cssxref("color_value/hsl", "hsl()")}} or other sRGB color spaces.

CIELab color spaces, including Lab, Lch, Oklab, and Oklch, are device-independent color spaces.

- `lab-d50` color space

  - : Expresses color as `L` in a range from `0` to `100`, and `a` and `b` with a range from `-125` to `125`. The `a` and `b` axes are not bound by these range values, which are references in defining percentage inputs and outputs in relation to the `Display P3` color space. The whitepoint is D50.

- `lab-d65` color space

  - : This color space is the same as `lab-d50`, except that the whitepoint is D65.

- `oklab` color space

  - : Similar to `lab-d65`, but the range for `L` is `0` to `1`, and `a` and `b` range from `-0.4` to `0.4`.

### XYZ color spaces

While combinations of red, green, and blue work well for representing colors on screen, sRGB doesn't directly correspond to how humans perceive color. Created by the International Commission on Illumination (CIE) in 1931, the CIE 1931 XYZ (or XYZ for short) color spaces are the first defined quantitative links between distributions of wavelengths in the electromagnetic visible spectrum and perceived colors in human vision.

People with normal vision have three kinds of cone cells that sense light, having peaks of spectral sensitivity in differing wavelengths. The CIE X, Y, and Z parameters correspond to levels of stimuli of the three kinds of cone cells which, in principle, describe every visible color. The `Y` channel represents the luminance of a color. The `Z` channel reflects the amount of blue in the color but is not the same as the `B` in RGB. The `X` axis is orthogonal to the Y- and Z- axis of the XYZ color 3D coordinate system.

- `xyz` and `xyz-d65` color space

  - : The `xyz` identifier is a synonym for the `xyz-d65` color space. The axes are not limited to a `0` to `1` range as the color space is not bound to this range; these values are only used as reference points in defining percentage inputs and outputs. The whitepoint is D65.

- `xyz-d50` color space

  - : `xyz-d50` is the same as `xyz-d65` except it uses D50 as the whitepoint.

## See also

- {{cssxref("@media/color-gamut", "color-gamut")}} `@media` feature
- [CSS data type: `<color>`](/en-US/docs/Web/CSS/color_value)
- [sRGB color space](https://webstore.iec.ch/publication/6168)
- [CIELAB color space](https://en.wikipedia.org/wiki/CIELAB_color_space) on Wikipedia
- [CIE 1931 color space](https://en.wikipedia.org/wiki/CIE_1931_color_space) on Wikipedia
- [Oklab color space](https://bottosson.github.io/posts/oklab/)
