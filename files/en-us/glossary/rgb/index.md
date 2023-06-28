---
title: RGB
slug: Glossary/RGB
page-type: glossary-definition
---

{{GlossarySidebar}}

_Red-Green-Blue_ (**RGB**) is a color model that represents colors as mixtures of three underlying components (or channels), namely: _red_, _green_, and _blue_. This model describes a color with a sequence of three numbers (typically between 0.0 and 1.0, or between 0 and 255). Each number represents the primary colors' different intensities (or contributions) in determining the final color.

Alone an RGB value has no meaning. A color model defines how the three components relate to a color space. Graphically, a point in a three-dimensional grid or cube represents a color. Each dimension (or axis) corresponds to a different channel. The RGB color model is then a _cubic_, or _Cartesian_, coordinate system of the underlying color space.

For the web, the underlying color space for an RGB value is _sRGB_ (Standard RGB), and each RGB component is a number between 0 and 255. Float values are supported.

Note that there are other RGB color spaces, like the _Adobe RGB_ color space, that can represent a wider {{glossary("gamut")}} of color than the _sRGB_ color space. The coordinates in _sRGB_ and _Adobe RGB_ are different.

There are many ways to describe the RGB components of a color. In {{Glossary("CSS")}} they can be represented as a single 24-bit integer in hexadecimal notation (for example, `#add8e6` is light blue), or in functional notation, [`rgb()`](/en-US/docs/Web/CSS/color_value/rgb) as three separate floats between 0 and 255 (for example, `rgb(46 139.5 87)`). In {{Glossary("OpenGL")}}, {{Glossary("WebGL")}}, and {{Glossary("GLSL")}} the red-green-blue components are fractions (floating-point numbers between 0.0 and 1.0), although in the actual color buffer they are typically stored as 8-bit integers.

RGB is not the only color model that can represent the _sRGB_ color space. Cylindrical coordinate systems like the [`HSL`](/en-US/docs/Web/CSS/color_value/hsl) (_hue-saturation-lightness_) or [`HWB`](/en-US/docs/Web/CSS/color_value/hwb) (_hue-whiteness-blackness_) color models are also used to represent a sRGB color on the web.

## See also

- [RGB color model on Wikipedia](https://en.wikipedia.org/wiki/RGB_color_model)
- [sRGB color space on Wikipedia](https://en.wikipedia.org/wiki/SRGB)
- [Adobe RGB color space on Wikipedia](https://en.wikipedia.org/wiki/Adobe_RGB_color_space)
- [CSS data type: \<color>](/en-US/docs/Web/CSS/color_value)
