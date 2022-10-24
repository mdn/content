---
title: CSS Functional Notation
slug: Web/CSS/CSS_Functions
page-type: guide
tags:
  - CSS
  - CSS Data Type
  - CSS Function
  - Functional Notation
  - Functions
  - Reference
  - Types
  - data types
spec-urls:
  - https://drafts.csswg.org/css-values/
  - https://drafts.csswg.org/css-color/
  - https://drafts.csswg.org/css-images/
---

{{CSSRef}}

**CSS functional notation** is a type of [CSS value](/en-US/docs/Web/CSS/CSS_Values_and_Units) that can represent more complex data types or invoke special data processing or calculations.

## Syntax

```css
selector {
  property: functional-notation([argument]? [, argument]!);
}
```

The syntax starts with the **name of the functional notation**, followed by a left parenthesis `(`. Next up are the notation argument(s), and the function is finished off with a closing parenthesis `)`.

Functions can take multiple arguments, which are formatted similarly to CSS property values. Whitespace is allowed, but they are optional inside the parentheses. In some functional notations multiple arguments are separated by commas, while others use spaces.

## Transform functions

These functions are used when the {{cssxref("&lt;transform-function&gt;")}} CSS [data type](/en-US/docs/Web/CSS/CSS_Types) is used as a value of {{cssxref("transform")}}.

- {{cssxref("transform-function/matrix", "matrix()")}}
  - : Describes a homogeneous 2D transformation matrix.
- {{cssxref("transform-function/matrix3d", "matrix3d()")}}
  - : Describes a 3D transformation as a 4×4 homogeneous matrix.
- {{cssxref("transform-function/perspective", "perspective()")}}
  - : Sets the distance between the user and the z=0 plane.
- {{cssxref("transform-function/rotate", "rotate()")}}
  - : Rotates an element around a fixed point on the 2D plane.
- {{cssxref("transform-function/rotate3d", "rotate3d()")}}
  - : Rotates an element around a fixed axis in 3D space.
- {{cssxref("transform-function/rotateX", "rotateX()")}}
  - : Rotates an element around the horizontal axis.
- {{cssxref("transform-function/rotateY", "rotateY()")}}
  - : Rotates an element around the vertical axis.
- {{cssxref("transform-function/rotateZ", "rotateZ()")}}
  - : Rotates an element around the z-axis.
- {{cssxref("transform-function/scale", "scale()")}}
  - : Scales an element up or down on the 2D plane.
- {{cssxref("transform-function/scale3d", "scale3d()")}}
  - : Scales an element up or down in 3D space.
- {{cssxref("transform-function/scaleX", "scaleX()")}}
  - : Scales an element up or down horizontally.
- {{cssxref("transform-function/scaleY", "scaleY()")}}
  - : Scales an element up or down vertically.
- {{cssxref("transform-function/scaleZ", "scaleZ()")}}
  - : Scales an element up or down along the z-axis.
- {{cssxref("transform-function/skew", "skew()")}}
  - : Skews an element on the 2D plane.
- {{cssxref("transform-function/skewX", "skewX()")}}
  - : Skews an element in the horizontal direction.
- {{cssxref("transform-function/skewY", "skewY()")}}
  - : Skews an element in the vertical direction.
- {{cssxref("transform-function/translate", "translate()")}}
  - : Translates an element on the 2D plane.
- {{cssxref("transform-function/translate3d", "translate3d()")}}
  - : Translates an element in 3D space.
- {{cssxref("transform-function/translateX", "translateX()")}}
  - : Translates an element horizontally.
- {{cssxref("transform-function/translateY", "translateY()")}}
  - : Translates an element vertically.
- {{cssxref("transform-function/translateZ", "translateZ()")}}
  - : Translates an element along the z-axis.

## Math functions

The math functions allow CSS numeric values to be written as mathematical expressions.

### Basic arithmetic

- {{cssxref("calc", "calc()")}}
  - : A math function that allows basic arithmetic to be performed on numerical CSS values.

### Comparison functions

- {{cssxref("min", "min()")}}
  - : A comparison function that represents the smallest of a list of values.
- {{cssxref("max", "max()")}}
  - : A comparison function that represents the largest of a list of values.
- {{cssxref("clamp", "clamp()")}}
  - : A comparison function that takes a minimum, central, and maximum value and represents its central calculation.

### Stepped value functions

- {{cssxref("round", "round()")}} {{Experimental_Inline}}
  - : A stepped value function that returns a rounded number based on a rounding strategy.
- {{cssxref("mod", "mod()")}} {{Experimental_Inline}}
  - : A function that divides one number by another and returns the modulus (with the same sign as the divisor).
- {{cssxref("rem", "rem()")}} {{Experimental_Inline}}
  - : A function that divides one number by another and returns the remainder (with the same sign as the dividend).

### Trigonometric functions

- {{cssxref("sin", "sin()")}} {{Experimental_Inline}}
  - : A trigonometric function that returns the sine of a number.
- {{cssxref("cos", "cos()")}} {{Experimental_Inline}}
  - : A trigonometric function that returns the cosine of a number.
- {{cssxref("tan", "tan()")}} {{Experimental_Inline}}
  - : A trigonometric function that returns the tangent of a number.
- {{cssxref("asin", "asin()")}} {{Experimental_Inline}}
  - : A trigonometric function that returns the inverse sine of a number.
- {{cssxref("acos", "acos()")}} {{Experimental_Inline}}
  - : A trigonometric function that returns the inverse cosine of a number.
- {{cssxref("atan", "atan()")}} {{Experimental_Inline}}
  - : A trigonometric function that returns the inverse tangent of a number.
- {{cssxref("atan2", "atan2()")}} {{Experimental_Inline}}
  - : A trigonometric function that returns the inverse tangent of two-numbers in a plane.

### Exponential functions

- {{cssxref("pow", "pow()")}} {{Experimental_Inline}}
  - : An exponential function that returns a base raised to the power of a number.
- {{cssxref("sqrt", "sqrt()")}} {{Experimental_Inline}}
  - : An exponential function that returns the square root of a number.
- {{cssxref("hypot", "hypot()")}} {{Experimental_Inline}}
  - : An exponential function that returns the square root of the sum of squares of its arguments.
- {{cssxref("log", "log()")}} {{Experimental_Inline}}
  - : An exponential function that returns the logarithm of a number.
- {{cssxref("exp", "exp()")}} {{Experimental_Inline}}
  - : An exponential function that returns `e` raised to the power of a number.

### Sign-related functions

- {{cssxref("abs", "abs()")}} {{Experimental_Inline}}
  - : Takes a calculation and returns the absolute value.
- {{cssxref("sign_function", "sign()")}} {{Experimental_Inline}}
  - : Takes a calculation and returns the sign (positive or negative) of the number.

## Filter functions

The **`<filter-function>`** [CSS](/en-US/docs/Web/CSS) [data type](/en-US/docs/Web/CSS/CSS_Types) represents a graphical effect that can change the appearance of an input image. It is used in the {{cssxref("filter")}} and {{cssxref("backdrop-filter")}} properties.

- {{cssxref("filter-function/blur", "blur()")}}
  - : Blurs the image.
- {{cssxref("filter-function/brightness", "brightness()")}}
  - : Makes the image brighter or darker.
- {{cssxref("filter-function/contrast", "contrast()")}}
  - : Increases or decreases the image's contrast.
- {{cssxref("filter-function/drop-shadow", "drop-shadow()")}}
  - : Applies a drop shadow behind the image.
- {{cssxref("filter-function/grayscale", "grayscale()")}}
  - : Converts the image to grayscale.
- {{cssxref("filter-function/hue-rotate", "hue-rotate()")}}
  - : Changes the overall hue of the image.
- {{cssxref("filter-function/invert", "invert()")}}
  - : Inverts the colors of the image.
- {{cssxref("filter-function/opacity", "opacity()")}}
  - : Makes the image transparent.
- {{cssxref("filter-function/saturate", "saturate()")}}
  - : Super-saturates or desaturates the input image.
- {{cssxref("filter-function/sepia", "sepia()")}}
  - : Converts the image to sepia.

## Color functions

Functions which specify different color representations. These may be used anywhere a {{cssxref("&lt;color_value&gt;","&lt;color&gt;")}} is valid.

- {{cssxref("color_value/color", "color()")}} {{Experimental_Inline}}
  - : Allows a color to be specified in a particular, specified colorspace (rather than the implicit sRGB colorspace that most of the other color functions operate in).
- {{cssxref("color_value/color-mix", "color-mix()")}} {{Experimental_Inline}}
  - : Takes two {{cssxref("color_value","color")}} values and returns the result of mixing them in a given colorspace by a given amount.
- {{cssxref("color_value/color-contrast", "color-contrast()")}} {{Experimental_Inline}}
  - : Takes a {{cssxref("color_value","color")}} value and compares it to a list of other {{cssxref("color_value","color")}} values, selecting the one with the highest contrast from the list.
- {{cssxref("color_value/device-cmyk", "device-cmyk()")}} {{Experimental_Inline}}
  - : Used to express CMYK colors in a device-independent way.
- {{cssxref("color_value/hsl", "hsl()")}}
  - : The HSL color model defines a given color according to its hue, saturation, and lightness components. An optional alpha component represents the color's transparency.
- {{cssxref("color_value/hsla", "hsla()")}}
  - : The HSL color model defines a given color according to its hue, saturation, and lightness components. The alpha component represents the color's transparency.
- {{cssxref("color_value/hwb", "hwb()")}} {{Experimental_Inline}}
  - : HWB (short for Hue-Whiteness-Blackness) is another method of specifying colors, similar to HSL.
- {{cssxref("color_value/lab", "lab()")}} {{Experimental_Inline}}
  - : Lab color is device-independent and specifies physical measurements of color.
- {{cssxref("color_value/lch", "lch()")}} {{Experimental_Inline}}
  - : LCH color is device-independent and specifies color using polar coordinates for chroma and hue.
- {{cssxref("color_value/oklab", "oklab()")}} {{Experimental_Inline}}
  - : OKLab color is device-independent and specifies physical measurements of color.
- {{cssxref("color_value/oklch", "oklch()")}} {{Experimental_Inline}}
  - : OKLCH color is device-independent and specifies color using polar coordinates for chroma and hue.
- {{cssxref("color_value/rgb", "rgb()")}}
  - : The RGB color model defines a given color according to its red, green, and blue components. An optional alpha component represents the color's transparency.
- {{cssxref("color_value/rgba", "rgba()")}}
  - : The RGB color model defines a given color according to its red, green, and blue components. The alpha component represents the color's transparency.

## Image functions

These functions may be used wherever an {{cssxref("&lt;image&gt;")}} is valid as the value for a property.

- {{cssxref("gradient/conic-gradient", "conic-gradient()")}}
  - : Conic gradients transition colors progressively around a circle.
- {{cssxref("image/image","image()")}} {{Experimental_Inline}}
  - : Defines an {{cssxref("&lt;image&gt;")}} in a similar fashion to the {{cssxref("url", "url()")}} function, but with added functionality including specifying the image's directionality and fallback images for when the preferred image is not supported.
- {{cssxref("image/image-set","image-set()")}} {{Experimental_Inline}}
  - : A method of letting the browser pick the most appropriate CSS image from a given set, primarily for high pixel density screens.
- {{cssxref("gradient/linear-gradient","linear-gradient()")}}
  - : Linear gradients transition colors progressively along an imaginary line.
- {{cssxref("gradient/radial-gradient","radial-gradient()")}}
  - : Radial gradients transition colors progressively from a center point (origin).
- {{cssxref("gradient/repeating-linear-gradient","repeating-linear-gradient()")}}
  - : Is similar to `linear-gradient()` and takes the same arguments, but it repeats the color stops infinitely in all directions so as to cover its entire container.
- {{cssxref("gradient/repeating-radial-gradient","repeating-radial-gradient()")}}
  - : Is similar to `radial-gradient()` and takes the same arguments, but it repeats the color stops infinitely in all directions so as to cover its entire container.
- {{cssxref("gradient/repeating-conic-gradient","repeating-conic-gradient()")}}
  - : Is similar to `conic-gradient()` and takes the same arguments, but it repeats the color stops infinitely in all directions so as to cover its entire container.
- {{cssxref("cross-fade", "cross-fade()")}}
  - : Can be used to blend two or more images at a defined transparency.
- {{cssxref("element", "element()")}}
  - : Defines an `<image>` value generated from an arbitrary HTML element.
- {{cssxref("paint", "paint()")}}
  - : Defines an `<image>` value generated with a PaintWorklet.

## Counter functions

The counter functions are generally used with the {{cssxref("content")}} property, although in theory may be used wherever a {{cssxref("&lt;string&gt;")}} is supported.

- {{cssxref("counter", "counter()")}}
  - : Returns a string representing the current value of the named counter, if there is one.
- {{cssxref("counters", "counters()")}}
  - : Enables nested counters, returning a concatenated string representing the current values of the named counters, if there are any.
- {{cssxref("symbols", "symbols()")}}
  - : Lets you define counter styles inline, directly as the value of a property.

## Font functions

The {{cssxref("font-variant-alternates")}} property controls the use of alternate glyphs, the following functions are values for this property.

- {{cssxref("font-variant-alternates/stylistic", "stylistic()")}}
  - : This function enables stylistic alternates for individual characters. The parameter is a font-specific name mapped to a number. It corresponds to the OpenType value `salt`, like `salt 2`.
- {{cssxref("font-variant-alternates/styleset", "styleset()")}}
  - : This function enables stylistic alternatives for sets of characters. The parameter is a font-specific name mapped to a number. It corresponds to the OpenType value `ssXY`, like `ss02`.
- {{cssxref("font-variant-alternates/character-variant", "character-variant()")}}
  - : This function enables specific stylistic alternatives for characters. It is similar to `styleset()`, but doesn't create coherent glyphs for a set of characters; individual characters will have independent and not necessarily coherent styles. The parameter is a font-specific name mapped to a number. It corresponds to the OpenType value `cvXY`, like `cv02`.
- {{cssxref("font-variant-alternates/swash", "swash()")}}
  - : This function enables [swash](https://en.wikipedia.org/wiki/Swash_%28typography%29) glyphs. The parameter is a font-specific name mapped to a number. It corresponds to the OpenType values `swsh` and `cswh`, like `swsh 2` and `cswh 2`.
- {{cssxref("font-variant-alternates/ornaments", "ornaments()")}}
  - : This function enables ornaments, like [fleurons](https://en.wikipedia.org/wiki/Fleuron_%28typography%29) and other dingbat glyphs. The parameter is a font-specific name mapped to a number. It corresponds to the OpenType value `ornm`, like `ornm 2`.
- {{cssxref("font-variant-alternates/annotation", "annotation()")}}
  - : This function enables annotations, like circled digits or inverted characters. The parameter is a font-specific name mapped to a number. It corresponds to the OpenType value `nalt`, like `nalt 2`.

## Shape functions

The following functions may be used as values for the {{cssxref("&lt;basic-shape&gt;")}} data type, which is used in the {{cssxref("clip-path")}}, {{cssxref("offset-path")}}, and {{cssxref("shape-outside")}} properties.

- {{cssxref("basic-shape/circle","circle()")}}
  - : Defines a circle.
- {{cssxref("basic-shape/ellipse","ellipse()")}}
  - : Defines an ellipse.
- {{cssxref("basic-shape/inset","inset()")}}
  - : Defines an inset rectangle.
- {{cssxref("basic-shape/polygon","polygon()")}}
  - : Defines a polygon.
- {{cssxref("path", "path()")}}
  - : Accepts an SVG path string to enable a shape to be drawn.

## Reference functions

The following functions are used as a value of properties to reference a value defined elsewhere.

- {{cssxref("attr", "attr()")}}
  - : Used to retrieve the value of an attribute of the selected element and use it in the stylesheet.
- {{cssxref("env", "env()")}}
  - : Used to insert the value of a user-agent defined environment variable.
- {{cssxref("url", "url()")}}
  - : Used to include a file.
- {{cssxref("var", "var()")}}
  - : Used to insert a value of a custom property instead of any part of a value of another property.

## Grid functions

The following functions are used to define a [CSS Grid](/en-US/docs/Web/CSS/CSS_Grid_Layout).

- {{cssxref("fit-content", "fit-content()")}}
  - : Clamps a given size to an available size according to the formula `min(maximum size, max(minimum size, argument))`.
- {{cssxref("minmax", "minmax()")}}
  - : Defines a size range greater than or equal to _min_ and less than or equal to _max_.
- {{cssxref("repeat", "repeat()")}}
  - : Represents a repeated fragment of the track list, allowing a large number of columns or rows that exhibit a recurring pattern.

## Specifications

{{Specifications}}

## See also

- [CSS Values and Units](/en-US/docs/Web/CSS/CSS_Values_and_Units)
- [Introduction to CSS: Values and Units](/en-US/docs/Learn/CSS/Building_blocks/Values_and_units)
