---
title: CSS value functions
slug: Web/CSS/CSS_Functions
page-type: guide
---

{{CSSRef}}

**CSS value functions** are statements that invoke special data processing or calculations to return a [CSS](/en-US/docs/Web/CSS) [value](/en-US/docs/Web/CSS/CSS_Values_and_Units) for a CSS property. CSS value functions represent more complex [data types](/en-US/docs/Web/CSS/CSS_Types) and they may take some input arguments to calculate the return value.

## Syntax

```css
selector {
  property: function([argument]? [, argument]!);
}
```

The value syntax starts with the **name of the function**, followed by a left parenthesis `(`. Next up are the argument(s), and the function is finished off with a closing parenthesis `)`.

Functions can take multiple arguments, which are formatted similarly to CSS property values. Whitespace is allowed, but they are optional inside the parentheses. In some functional notations multiple arguments are separated by commas, while others use spaces.

> **Note:** The CSS value functions are used as property values and should not be confused with pseudo-classes. The [functional pseudo-classes](/en-US/docs/Web/CSS/Pseudo-classes#functional_pseudo-classes), [linguistic pseudo-classes](/en-US/docs/Web/CSS/Pseudo-classes#linguistic_pseudo-classes), and several [tree-structural pseudo-classes](/en-US/docs/Web/CSS/Pseudo-classes#tree-structural_pseudo-classes) require parameter values, but they're not value functions. The [conditional at-rules](/en-US/docs/Web/CSS/At-rule#conditional_group_rules) are also not value functions; the parentheses are used for groupings.

## Transform functions

The {{CSSxRef("&lt;transform-function&gt;")}} CSS [data type](/en-US/docs/Web/CSS/CSS_Types) represent appearance transformation. It is used as a value of {{CSSxRef("transform")}} property.

### Translate functions

- {{CSSxRef("transform-function/translateX", "translateX()")}}
  - : Translates an element horizontally.
- {{CSSxRef("transform-function/translateY", "translateY()")}}
  - : Translates an element vertically.
- {{CSSxRef("transform-function/translateZ", "translateZ()")}}
  - : Translates an element along the z-axis.
- {{CSSxRef("transform-function/translate", "translate()")}}
  - : Translates an element on the 2D plane.
- {{CSSxRef("transform-function/translate3d", "translate3d()")}}
  - : Translates an element in 3D space.

### Rotation functions

- {{CSSxRef("transform-function/rotateX", "rotateX()")}}
  - : Rotates an element around the horizontal axis.
- {{CSSxRef("transform-function/rotateY", "rotateY()")}}
  - : Rotates an element around the vertical axis.
- {{CSSxRef("transform-function/rotateZ", "rotateZ()")}}
  - : Rotates an element around the z-axis.
- {{CSSxRef("transform-function/rotate", "rotate()")}}
  - : Rotates an element around a fixed point on the 2D plane.
- {{CSSxRef("transform-function/rotate3d", "rotate3d()")}}
  - : Rotates an element around a fixed axis in 3D space.

### Scaling functions

- {{CSSxRef("transform-function/scaleX", "scaleX()")}}
  - : Scales an element up or down horizontally.
- {{CSSxRef("transform-function/scaleY", "scaleY()")}}
  - : Scales an element up or down vertically.
- {{CSSxRef("transform-function/scaleZ", "scaleZ()")}}
  - : Scales an element up or down along the z-axis.
- {{CSSxRef("transform-function/scale", "scale()")}}
  - : Scales an element up or down on the 2D plane.
- {{CSSxRef("transform-function/scale3d", "scale3d()")}}
  - : Scales an element up or down in 3D space.

### Skew functions

- {{CSSxRef("transform-function/skewX", "skewX()")}}
  - : Skews an element in the horizontal direction.
- {{CSSxRef("transform-function/skewY", "skewY()")}}
  - : Skews an element in the vertical direction.
- {{CSSxRef("transform-function/skew", "skew()")}}
  - : Skews an element on the 2D plane.

### Matrix functions

- {{CSSxRef("transform-function/matrix", "matrix()")}}
  - : Describes a homogeneous 2D transformation matrix.
- {{CSSxRef("transform-function/matrix3d", "matrix3d()")}}
  - : Describes a 3D transformation as a 4×4 homogeneous matrix.

### Perspective functions

- {{CSSxRef("transform-function/perspective", "perspective()")}}
  - : Sets the distance between the user and the z=0 plane.

## Math functions

The math functions allow CSS numeric values to be written as mathematical expressions.

### Basic arithmetic

- {{CSSxRef("calc", "calc()")}}
  - : Performs basic arithmetic calculations on numerical values.

### Comparison functions

- {{CSSxRef("min", "min()")}}
  - : Calculates the smallest of a list of values.
- {{CSSxRef("max", "max()")}}
  - : Calculates the largest of a list of values.
- {{CSSxRef("clamp", "clamp()")}}
  - : Calculates the central of a minimum, central, and maximum values.

### Stepped value functions

- {{CSSxRef("round", "round()")}} {{Experimental_Inline}}
  - : Calculates a rounded number based on a rounding strategy.
- {{CSSxRef("mod", "mod()")}} {{Experimental_Inline}}
  - : Calculates a modulus (with the same sign as the divisor) when dividing one number by another.
- {{CSSxRef("rem", "rem()")}} {{Experimental_Inline}}
  - : Calculates a remainder (with the same sign as the dividend) when dividing one number by another.

### Trigonometric functions

- {{CSSxRef("sin", "sin()")}}
  - : Calculates the trigonometric sine of a number.
- {{CSSxRef("cos", "cos()")}}
  - : Calculates the trigonometric cosine of a number.
- {{CSSxRef("tan", "tan()")}}
  - : Calculates the trigonometric tangent of a number.
- {{CSSxRef("asin", "asin()")}}
  - : Calculates the trigonometric inverse sine of a number.
- {{CSSxRef("acos", "acos()")}}
  - : Calculates the trigonometric inverse cosine of a number.
- {{CSSxRef("atan", "atan()")}}
  - : Calculates the trigonometric inverse tangent of a number.
- {{CSSxRef("atan2", "atan2()")}}
  - : Calculates the trigonometric inverse tangent of two-numbers in a plane.

### Exponential functions

- {{CSSxRef("pow", "pow()")}}
  - : Calculates the base raised to the power of a number.
- {{CSSxRef("sqrt", "sqrt()")}}
  - : Calculates the square root of a number.
- {{CSSxRef("hypot", "hypot()")}}
  - : Calculates the square root of the sum of the squares of its arguments.
- {{CSSxRef("log", "log()")}}
  - : Calculates the logarithm of a number.
- {{CSSxRef("exp", "exp()")}}
  - : Calculates `e` raised to the power of a number.

### Sign-related functions

- {{CSSxRef("abs", "abs()")}}
  - : Calculates the absolute value of a number.
- {{CSSxRef("sign", "sign()")}}
  - : Calculates the sign (positive or negative) of the number.

## Filter functions

The {{CSSxRef("&lt;filter-function&gt;")}} CSS [data type](/en-US/docs/Web/CSS/CSS_Types) represents a graphical effect that can change the appearance of an input image. It is used in the {{CSSxRef("filter")}} and {{CSSxRef("backdrop-filter")}} properties.

- {{CSSxRef("filter-function/blur", "blur()")}}
  - : Increases the image gaussian blur.
- {{CSSxRef("filter-function/brightness", "brightness()")}}
  - : Brightens or darkens an image.
- {{CSSxRef("filter-function/contrast", "contrast()")}}
  - : Increases or decreases the image contrast.
- {{CSSxRef("filter-function/drop-shadow", "drop-shadow()")}}
  - : Applies a drop shadow behind an image.
- {{CSSxRef("filter-function/grayscale", "grayscale()")}}
  - : Converts an image to grayscale.
- {{CSSxRef("filter-function/hue-rotate", "hue-rotate()")}}
  - : Changes the overall hue of an image.
- {{CSSxRef("filter-function/invert", "invert()")}}
  - : Inverts the colors of an image.
- {{CSSxRef("filter-function/opacity", "opacity()")}}
  - : Adds transparency to an image.
- {{CSSxRef("filter-function/saturate", "saturate()")}}
  - : Changes the overall saturation of an image.
- {{CSSxRef("filter-function/sepia", "sepia()")}}
  - : Increases the sepia of an image.

## Color functions

The {{CSSxRef("color_value","&lt;color&gt;")}} CSS [data type](/en-US/docs/Web/CSS/CSS_Types) specifies different color representations.

- {{CSSxRef("color_value/rgb", "rgb()")}}
  - : Defines a given color according to its red, green, blue and alpha (transparency) components.
- {{CSSxRef("color_value/hsl", "hsl()")}}
  - : Defines a given color according to its hue, saturation, lightness and alpha (transparency) components.
- {{CSSxRef("color_value/hwb", "hwb()")}}
  - : Defines a given color according to its hue, whiteness and blackness components.
- {{CSSxRef("color_value/lch", "lch()")}}
  - : Defines a given color according to its lightness, chroma and hue components.
- {{CSSxRef("color_value/oklch", "oklch()")}}
  - : Defines a given color according to its lightness, chroma, hue and alpha (transparency) components.
- {{CSSxRef("color_value/lab", "lab()")}}
  - : Defines a given color according to its lightness, a-axis distance and b-axis distance in the lab colorspace.
- {{CSSxRef("color_value/oklab", "oklab()")}}
  - : Defines a given color according to its lightness, a-axis distance, b-axis distance in the lab colorspace and alpha (transparency).
- {{CSSxRef("color_value/color", "color()")}}
  - : Specifies a particular, specified colorspace rather than the implicit sRGB colorspace.
- {{CSSxRef("color_value/color-mix", "color-mix()")}}
  - : Mixes two color values in a given colorspace by a given amount.
- {{CSSxRef("color_value/color-contrast", "color-contrast()")}} {{Experimental_Inline}}
  - : Selects the highest color contrast from a list of colors, compare to a base color value.
- {{CSSxRef("color_value/device-cmyk", "device-cmyk()")}} {{Experimental_Inline}}
  - : Defines CMYK colors in a device-independent way.

## Image functions

The {{CSSxRef("&lt;image&gt;")}} CSS [data type](/en-US/docs/Web/CSS/CSS_Types) provides graphical representation of images or gradients.

### Gradient functions

- {{CSSxRef("gradient/linear-gradient","linear-gradient()")}}
  - : Linear gradients transition colors progressively along an imaginary line.
- {{CSSxRef("gradient/radial-gradient","radial-gradient()")}}
  - : Radial gradients transition colors progressively from a center point (origin).
- {{CSSxRef("gradient/conic-gradient", "conic-gradient()")}}
  - : Conic gradients transition colors progressively around a circle.
- {{CSSxRef("gradient/repeating-linear-gradient","repeating-linear-gradient()")}}
  - : Is similar to `linear-gradient()` and takes the same arguments, but it repeats the color stops infinitely in all directions so as to cover its entire container.
- {{CSSxRef("gradient/repeating-radial-gradient","repeating-radial-gradient()")}}
  - : Is similar to `radial-gradient()` and takes the same arguments, but it repeats the color stops infinitely in all directions so as to cover its entire container.
- {{CSSxRef("gradient/repeating-conic-gradient","repeating-conic-gradient()")}}
  - : Is similar to `conic-gradient()` and takes the same arguments, but it repeats the color stops infinitely in all directions so as to cover its entire container.

### Image functions

- {{CSSxRef("image/image","image()")}} {{Experimental_Inline}}
  - : Defines an {{CSSxRef("&lt;image&gt;")}} in a similar fashion to the {{CSSxRef("url", "url()")}} function, but with added functionality including specifying the image's directionality and fallback images for when the preferred image is not supported.
- {{CSSxRef("image/image-set","image-set()")}}
  - : Picks the most appropriate CSS image from a given set, primarily for high pixel density screens.
- {{CSSxRef("cross-fade", "cross-fade()")}}
  - : Blends two or more images at a defined transparency.
- {{CSSxRef("element", "element()")}} {{Experimental_Inline}}
  - : Defines an {{CSSxRef("&lt;image&gt;")}} value generated from an arbitrary HTML element.
- {{CSSxRef("image/paint", "paint()")}}
  - : Defines an {{CSSxRef("&lt;image&gt;")}} value generated with a PaintWorklet.

## Counter functions

CSS counter functions are generally used with the {{CSSxRef("content")}} property, although in theory, they may be used wherever a {{CSSxRef("&lt;string&gt;")}} is supported.

- {{CSSxRef("counter", "counter()")}}
  - : Returns a string representing the current value of the named counter if there is one.
- {{CSSxRef("counters", "counters()")}}
  - : Enables nested counters, returning a concatenated string representing the current values of the named counters, if there are any.
- {{CSSxRef("symbols", "symbols()")}}
  - : Defines the counter styles inline, directly as the value of a property.

## Shape functions

The {{CSSxRef("&lt;basic-shape&gt;")}} CSS [data type](/en-US/docs/Web/CSS/CSS_Types) represents a graphical shape. It is used in the {{CSSxRef("clip-path")}}, {{CSSxRef("offset-path")}}, and {{CSSxRef("shape-outside")}} properties.

- {{CSSxRef("basic-shape/circle","circle()")}}
  - : Defines a circle shape.
- {{CSSxRef("basic-shape/ellipse","ellipse()")}}
  - : Defines an ellipse shape.
- {{CSSxRef("basic-shape/inset","inset()")}}
  - : Defines an inset rectangle shape.
- {{CSSxRef("basic-shape/polygon","polygon()")}}
  - : Defines a polygon shape.
- {{CSSxRef("path", "path()")}}
  - : Accepts an SVG path string to enable a shape to be drawn.

## Reference functions

The following functions are used as a value of properties to reference a value defined elsewhere.

- {{CSSxRef("attr", "attr()")}}
  - : Uses the attributes defined on HTML element.
- {{CSSxRef("env", "env()")}}
  - : Uses the user-agent defined as environment variable.
- {{CSSxRef("url", "url()")}}
  - : Uses a file from the specified URL.
- {{CSSxRef("var", "var()")}}
  - : Uses the custom property value instead of any part of a value of another property.

## Grid functions

The following functions are used to define a [CSS Grid](/en-US/docs/Web/CSS/CSS_grid_layout).

- {{CSSxRef("fit-content", "fit-content()")}}
  - : Clamps a given size to an available size according to the formula `min(maximum size, max(minimum size, argument))`.
- {{CSSxRef("minmax", "minmax()")}}
  - : Defines a size range greater-than or equal-to _min_ and less-than or equal-to _max_.
- {{CSSxRef("repeat", "repeat()")}}
  - : Represents a repeated fragment of the track list, allowing a large number of columns or rows that exhibit a recurring pattern.

## Font functions

CSS font functions are used with the {{CSSxRef("font-variant-alternates")}} property to control the use of alternate glyphs.

- {{CSSxRef("font-variant-alternates#stylistic", "stylistic()")}}
  - : Enables stylistic alternates for individual characters. The parameter is a font-specific name mapped to a number. It corresponds to the OpenType value `salt`, like `salt 2`.
- {{CSSxRef("font-variant-alternates#styleset", "styleset()")}}
  - : Enables stylistic alternatives for sets of characters. The parameter is a font-specific name mapped to a number. It corresponds to the OpenType value `ssXY`, such as `ss02`.
- {{CSSxRef("font-variant-alternates#character-variant", "character-variant()")}}
  - : Enables specific stylistic alternatives for characters. It is similar to `styleset()`, but doesn't create coherent glyphs for a set of characters; individual characters will have independent and not necessarily coherent styles. The parameter is a font-specific name mapped to a number. It corresponds to the OpenType value `cvXY`, such as `cv02`.
- {{CSSxRef("font-variant-alternates#swash", "swash()")}}
  - : Enables [swash](https://en.wikipedia.org/wiki/Swash_%28typography%29) glyphs. The parameter is a font-specific name mapped to a number. It corresponds to the OpenType values `swsh` and `cswh`, such as `swsh 2` and `cswh 2`.
- {{CSSxRef("font-variant-alternates#ornaments", "ornaments()")}}
  - : Enables ornaments such as [fleurons](https://en.wikipedia.org/wiki/Fleuron_%28typography%29) and other dingbat glyphs. The parameter is a font-specific name mapped to a number. It corresponds to the OpenType value `ornm`, such as `ornm 2`.
- {{CSSxRef("font-variant-alternates#annotation", "annotation()")}}
  - : Enables annotations such as circled digits or inverted characters. The parameter is a font-specific name mapped to a number. It corresponds to the OpenType value `nalt`, such as `nalt 2`.

## Easing functions

The following functions are used as a value in transition and animation properties.

- {{cssxref("easing-function#cubic_b%C3%A9zier_easing_function", "cubic-bezier()")}}
  - : Easing function that defines a cubic Bézier curve.
- {{cssxref("easing-function#step_easing_function", "steps()")}}
  - : Iteration along a specified number of stops along the transition, displaying each stop for equal lengths of time.

## Animation functions

The following functions are used as a value of different `animation-timeline` properties. See {{CSSxRef("animation-timeline")}} for more details about these.

- {{cssxref("animation-timeline/scroll", "scroll()")}}
  - : Sets the {{cssxref("animation-timeline")}} of an element to an _anonymous scroll progress timeline_.
- {{cssxref("animation-timeline/view", "view()")}}
  - : Sets the {{cssxref("animation-timeline")}} of an element to an _anonymous view progress timeline_.

## See also

- [CSS Values and Units](/en-US/docs/Web/CSS/CSS_Values_and_Units)
- [Introduction to CSS: Values and Units](/en-US/docs/Learn/CSS/Building_blocks/Values_and_units)
