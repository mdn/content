---
title: Color space
slug: Glossary/Color_space
page-type: glossary-definition
---

{{GlossarySidebar}}

A **color space** is an organization of colors with respect to an underlying colorimetric model. A color model defines how the color components relate to a color space. Graphically, a point in a three-dimensional grid or cube represents a color. Each dimension (or axis) corresponds to a different channel. Colors can be expressed in multiple color spaces, or transformed from one color space to another, while still looking the same.

The _sRGB_ color space (standard red, green, blue) was created for the web, but we are no longer limited to this color space. In addition to several defined color spaces, CSS Color level 5 enables defining custom color spaces.

## Named color spaces

The predefined sRGB color spaces include `srgb`, `srgb-linear`, `display-p3`, `a98-rgb`, `prophoto-rgb`, and `rec2020`. The predefined XYZ color spaces include `xyz`, `xyz-d50`, and `xyz-d65`.

Color spaces are either rectangular or polar. Rectangular color spaces include `srgb`, `srgb-linear`, `display-p3`, `a98-rgb`, `prophoto-rgb`, `rec2020`, `lab`, `oklab`, `xyz`, `xyz-d50`, and `xyz-d65`. The polar color spaces include `hsl`, `hwb`, `lch`, and `oklch`.

### `sRGB` color spaces

sRGB, or "Standard RGB", is the underlying color space for {{Glossary("RGB")}} colors, including {{cssxref("hex-color")}}, {{cssxref("named-color")}}, {{cssxref("color_value/rgb", "rgb()")}}, {{cssxref("color_value/hsl", "hsl()")}} (hue, saturation, lightness), {{cssxref("color_value/hwb", "hwb()")}} (hue, whiteness, blackness).

The HSV (hue, saturation, and value) color space, and its synonym HSB (hue, saturation, and brightness), are represented in CSS as [`hwb()`](/en-US/docs/Web/CSS/color_value/hwb).Named colors are simply keywords mapped to specific hex values. Converting these various color notations to sRGB is straightforward mathematically. Note that {{cssxref("&lt;color&gt;","currentcolor","#currentcolor_keyword")}} can be any color, it is not restricted to sRGB.

- `srgb-linear` color space

  - : The predefined linear-light sRGB color space, `srgb-linear`, is the same as `srgb` except that the transfer function is linear-light with no gamma-encoding. The `srgb-linear` color space accepts the three red, green, and blue, or `r`, `g`, and `b`, values as numeric parameters, with in-gamut colors ranging from `0` to `1`. The whitepoint is D65.

- `display-p3` color space

  - : Defined by Apple, the **Display P3** color space combines the DCI-P3 color gamut, the D65 white point, and sRGB gamma curve. It is a wide gamut space typical of current wide-gamut monitors, enabling more vibrant greens and reds than the sRGB color gamut. The `display-p3` is based on `r`, `g`, and `b`, with in gamut values ranging from `0` to `1`. The whitepoint is D65.

- `a98-rgb` color space

  - : The `a98-rgb`, is the Adobe® 1998 RGB color space designed to represent all the CMYK colors as RGB. About 50% of the visible colors specified by the CIELab color space can be achieved, encompassing more cyan-green hues that other RGB. In-gamut `r`, `g`, and `b` values range from `0` to `1`. The transfer curve is a gamma function, close to but not exactly 1/2.2. The whitepoint is D65.

- `prophoto-rgb`

  - : Developed by Kodak, the `prophoto-rgb` color space can represent all the colors likely to occur in nature and about 90% of CIElab colors. In-gamut `r`, `g`, and `b` values range from `0` to `1`. The transfer curve is a gamma function, with a value of 1/1.8, and a small linear portion near black. The white point is D50, the same as is used by CIE Lab.

- `rec2020`

  - : `rec2020` is a broadcast industry standard for ultra high definition, 4k and 8k televisions. The ultra-wide gamut space is capable of representing almost all visible real-world colors, beyond the capabilities of most current displays. Coverage is expected to increase over time as displays improve. In-gamut `r`, `g`, and `b` values range from `0` to `1`. The whitepoint is D65.

Additional cylindrical sRGB spaces that are not in the CSS specification include: `HSI` (hue, saturation, and intensity), `Okhsv`, `Okhsl`, `HSLuv`, `HPLuv` and `Cubehelix`.

### CIELAB color spaces

The CIELAB color space, also referred to as L*a*b*, represents the entire range of color that humans can see. It expresses color as three values: L* for perceptual lightness and a* and b* for the four unique colors of human vision: red, green, blue and yellow.

Lab is rectangular coordinate system, with a central lightness `L` axis. Positive values along the `a` axis are a purplish red while negative values are the complement: green. Positive values along the `b` axis are yellow and negative are blue/violet. Desaturated colors have small values for `a` and `b` with greater absolute values being more saturated.

CIELab color functions include {{CSSXref("color_value/lab", "lab()")}} (lightness, a-axis, b-axis) and {{CSSXref("color_value/lch", "lch()")}} (lightness, chroma, hue) as well as {{CSSXref("color_value/oklab", "oklab()")}} and {{CSSXref("color_value/oklch", "oklch()")}}. The lightness values are the same, but `lch()` is a polar, cylindrical coordinate system using polar coordinates `C` (chroma) and `H` (hue) rather than axes. Note the hue and lightness here are not the same as the same named values in `hsl()` or other sRGB color spaces.

CIE Lab color spaces, including LCH, Oklab and Oklch, are device-independent color spaces.

### XYZ color spaces

Created by the International Commission on Illumination (CIE) in 1931, the XYZ color spaces are the first defined quantitative links between distributions of wavelengths in the electromagnetic visible spectrum and perceived colors in human color vision.

- `xyz` color space

  - : explain

- `xyz-d50` color space

  - : explain

- `xyz-d65` color space

  - : explain

## See also

- {{cssxref("@media/color-gamut", "color-gamut")}} `@media` feature
- [CSS data type: `<color>`](/en-US/docs/Web/CSS/color_value)
- [sRGB color space](https://webstore.iec.ch/publication/6168)
- [sRGB](https://en.wikipedia.org/wiki/SRGB) color space
- [CIELAB](https://en.wikipedia.org/wiki/CIELAB_color_space) color space
- [Oklab](https://bottosson.github.io/posts/oklab/) color space

NOTES:

REC709 Color Space.

**RGB**, _Red-Green-Blue_, is a color model that represents colors as mixtures of three underlying components - red, green, and blue color channels. The **HSL**, _Hue-Saturation-Lightness_, color model represents colors as ,
sRGB is intended as a common color space for the creation of images for viewing on the Internet and World Wide Web (WWW). The resultant color space closely approximates a Gamma correction of 2.2,[7] the average response of a CRT display to linear voltage levels.

Note that there are other RGB color spaces, like the _Adobe RGB_ color space, that can represent a wider {{glossary("gamut")}} of color than the _sRGB_ color space. The coordinates in _sRGB_ and _Adobe RGB_ are different.

There are many ways to describe the RGB components of a color. In {{Glossary("CSS")}} they can be represented as a single 24-bit integer in hexadecimal notation (for example, `#add8e6` is light blue), or in functional notation, [`rgb()`](/en-US/docs/Web/CSS/color_value/rgb) as three separate numbers between 0 and 255 (for example, `rgb(46 139.5 87)`). There are also the `srgb`, `srgb-linear`, `a98-rgb`, and `prophoto-rgb` color spaces for the [`color()`](/en-US/docs/Web/CSS/color_value/color) function.

RGB is not the only color model that can represent the _sRGB_ color space. Cylindrical coordinate systems like the [`HSL`](/en-US/docs/Web/CSS/color_value/hsl) (_hue-saturation-lightness_) or [`HWB`](/en-US/docs/Web/CSS/color_value/hwb) (_hue-whiteness-blackness_) color models are also used to represent a sRGB color on the web.

When rendered, for example by CanvasDrawImage drawImage(), a VideoFrame must be converted to a color space compatible with the rendering target, unless color conversion is explicitly disabled.

Color space conversion during ImageBitmap construction is controlled by ImageBitmapOptions colorSpaceConversion. Setting this value to "none" disables color space conversion.

enum VideoColorPrimaries {
"bt709",
"bt470bg",
"smpte170m",
"bt2020",
"smpte432",
};
bt709
Color primaries used by BT.709 and sRGB, as described by [H.273] section 8.1 table 2 value 1.
bt470bg
Color primaries used by BT.601 PAL, as described by [H.273] section 8.1 table 2 value 5.
smpte170m
Color primaries used by BT.601 NTSC, as described by [H.273] section 8.1 table 2 value 6.
bt2020
Color primaries used by BT.2020 and BT.2100, as described by [H.273] section 8.1 table 2 value 9.
smpte432
Color primaries used by P3 D65, as described by [H.273] section 8.1 table 2 value 12.
