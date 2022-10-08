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

These functions are used when the {{CSSxRef("&lt;transform-function&gt;")}} CSS [data type](/en-US/docs/Web/CSS/CSS_Types) is used as a value of {{CSSxRef("transform")}} property.

### Translate functions

- {{CSSxRef("transform-function/translateX", "translateX()")}}
  - : A transform function that translates an element horizontally.
- {{CSSxRef("transform-function/translateY", "translateY()")}}
  - : A transform function that translates an element vertically.
- {{CSSxRef("transform-function/translateZ", "translateZ()")}}
  - : A transform function that translates an element along the z-axis.
- {{CSSxRef("transform-function/translate", "translate()")}}
  - : A transform function that translates an element on the 2D plane.
- {{CSSxRef("transform-function/translate3d", "translate3d()")}}
  - : A transform function that translates an element in 3D space.

### Rotation functions

- {{CSSxRef("transform-function/rotateX", "rotateX()")}}
  - : A transform function that rotates an element around the horizontal axis.
- {{CSSxRef("transform-function/rotateY", "rotateY()")}}
  - : A transform function that rotates an element around the vertical axis.
- {{CSSxRef("transform-function/rotateZ", "rotateZ()")}}
  - : A transform function that rotates an element around the z-axis.
- {{CSSxRef("transform-function/rotate", "rotate()")}}
  - : A transform function that rotates an element around a fixed point on the 2D plane.
- {{CSSxRef("transform-function/rotate3d", "rotate3d()")}}
  - : A transform function that rotates an element around a fixed axis in 3D space.

### Scaling functions

- {{CSSxRef("transform-function/scaleX", "scaleX()")}}
  - : A transform function that scales an element up or down horizontally.
- {{CSSxRef("transform-function/scaleY", "scaleY()")}}
  - : A transform function that scales an element up or down vertically.
- {{CSSxRef("transform-function/scaleZ", "scaleZ()")}}
  - : A transform function that scales an element up or down along the z-axis.
- {{CSSxRef("transform-function/scale", "scale()")}}
  - : A transform function that scales an element up or down on the 2D plane.
- {{CSSxRef("transform-function/scale3d", "scale3d()")}}
  - : A transform function that scales an element up or down in 3D space.

### Skew functions

- {{CSSxRef("transform-function/skewX", "skewX()")}}
  - : A transform function that skews an element in the horizontal direction.
- {{CSSxRef("transform-function/skewY", "skewY()")}}
  - : A transform function that skews an element in the vertical direction.
- {{CSSxRef("transform-function/skew", "skew()")}}
  - : A transform function that skews an element on the 2D plane.

### Matrix functions

- {{CSSxRef("transform-function/matrix", "matrix()")}}
  - : A transform function that describes a homogeneous 2D transformation matrix.
- {{CSSxRef("transform-function/matrix3d", "matrix3d()")}}
  - : A transform function that describes a 3D transformation as a 4×4 homogeneous matrix.

### Perspective functions

- {{CSSxRef("transform-function/perspective", "perspective()")}}
  - : A transform function that sets the distance between the user and the z=0 plane.

## Math functions

The math functions allow CSS numeric values to be written as mathematical expressions.

### Basic arithmetic

- {{CSSxRef("calc")}}
  - : A math function that allows basic arithmetic to be performed on numerical CSS values.

### Comparison functions

- {{CSSxRef("min")}}
  - : A comparison function that returns the smallest of a list of values.
- {{CSSxRef("max")}}
  - : A comparison function that returns the largest of a list of values.
- {{CSSxRef("clamp")}}
  - : A comparison function that takes a minimum, central, and maximum value and returns its central calculation.

### Stepped value functions

- {{CSSxRef("round", "round()")}} {{Experimental_Inline}}
  - : A stepped value function that returns a rounded number based on a rounding strategy.
- {{CSSxRef("mod", "mod()")}} {{Experimental_Inline}}
  - : A function that divides one number by another and returns the modulus (with the same sign as the divisor).
- {{CSSxRef("rem", "rem()")}} {{Experimental_Inline}}
  - : A function that divides one number by another and returns the remainder (with the same sign as the dividend).

### Trigonometric functions

- {{CSSxRef("sin")}} {{Experimental_Inline}}
  - : A trigonometric function that returns the sine of a number.
- {{CSSxRef("cos")}} {{Experimental_Inline}}
  - : A trigonometric function that returns the cosine of a number.
- {{CSSxRef("tan")}} {{Experimental_Inline}}
  - : A trigonometric function that returns the tangent of a number.
- {{CSSxRef("asin")}} {{Experimental_Inline}}
  - : A trigonometric function that returns the inverse sine of a number.
- {{CSSxRef("acos")}} {{Experimental_Inline}}
  - : A trigonometric function that returns the inverse cosine of a number.
- {{CSSxRef("atan")}} {{Experimental_Inline}}
  - : A trigonometric function that returns the inverse tangent of a number.
- {{CSSxRef("atan2")}} {{Experimental_Inline}}
  - : A trigonometric function that returns the inverse tangent of two-numbers in a plane.

### Exponential functions

- {{CSSxRef("pow")}} {{Experimental_Inline}}
  - : An exponential function that returns a base raised to the power of a number.
- {{CSSxRef("sqrt")}} {{Experimental_Inline}}
  - : An exponential function that returns the square root of a number.
- {{CSSxRef("hypot")}} {{Experimental_Inline}}
  - : An exponential function that returns the square root of the sum of squares of its arguments.
- {{CSSxRef("log")}} {{Experimental_Inline}}
  - : An exponential function that returns the logarithm of a number.
- {{CSSxRef("exp")}} {{Experimental_Inline}}
  - : An exponential function that returns `e` raised to the power of a number.

### Sign-related functions

- {{CSSxRef("abs")}} {{Experimental_Inline}}
  - : A function that returns the absolute value of a number.
- {{CSSxRef("sign")}} {{Experimental_Inline}}
  - : A function that returns the sign (positive or negative) of the number.

## Filter functions

The {{CSSxRef("&lt;filter-function&gt;")}} CSS [data type](/en-US/docs/Web/CSS/CSS_Types) represents a graphical effect that can change the appearance of an input image. It is used in the {{CSSxRef("filter")}} and {{CSSxRef("backdrop-filter")}} properties.

- {{CSSxRef("filter-function/blur", "blur()")}}
  - : A filter function that blurs the image.
- {{CSSxRef("filter-function/brightness", "brightness()")}}
  - : A filter function that brightens or darkens an image.
- {{CSSxRef("filter-function/contrast", "contrast()")}}
  - : A filter function that increases or decreases the image's contrast.
- {{CSSxRef("filter-function/drop-shadow", "drop-shadow()")}}
  - : A filter function that applies a drop shadow behind an image.
- {{CSSxRef("filter-function/grayscale", "grayscale()")}}
  - : A filter function that converts the image to grayscale.
- {{CSSxRef("filter-function/hue-rotate", "hue-rotate()")}}
  - : A filter function that changes the overall hue of the image.
- {{CSSxRef("filter-function/invert", "invert()")}}
  - : A filter function that inverts the colors of the image.
- {{CSSxRef("filter-function/opacity", "opacity()")}}
  - : A filter function that makes the image transparent.
- {{CSSxRef("filter-function/saturate", "saturate()")}}
  - : A filter function that super-saturates or de-saturates an image.
- {{CSSxRef("filter-function/sepia", "sepia()")}}
  - : A filter function that converts the image to sepia.

## Color functions

The {{CSSxRef("color_value","&lt;color&gt;")}} CSS [data type](/en-US/docs/Web/CSS/CSS_Types) specifies different color representations.

- {{CSSxRef("color_value/color", "color()")}} {{Experimental_Inline}}
  - : Allows a color to be specified in a particular, specified colorspace (rather than the implicit sRGB colorspace that most of the other color functions operate in).
- {{CSSxRef("color_value/color-mix", "color-mix()")}} {{Experimental_Inline}}
  - : Takes two {{CSSxRef("color_value","color")}} values and returns the result of mixing them in a given colorspace by a given amount.
- {{CSSxRef("color_value/color-contrast", "color-contrast()")}} {{Experimental_Inline}}
  - : Takes a {{CSSxRef("color_value","color")}} value and compares it to a list of other {{CSSxRef("color_value","color")}} values, selecting the one with the highest contrast from the list.
- {{CSSxRef("color_value/device-cmyk", "device-cmyk()")}} {{Experimental_Inline}}
  - : Used to express CMYK colors in a device-independent way.
- {{CSSxRef("color_value/hsl", "hsl()")}}
  - : The HSL color model defines a given color according to its hue, saturation, and lightness components. An optional alpha component represents the color's transparency.
- {{CSSxRef("color_value/hsla", "hsla()")}}
  - : The HSL color model defines a given color according to its hue, saturation, and lightness components. The alpha component represents the color's transparency.
- {{CSSxRef("color_value/hwb", "hwb()")}} {{Experimental_Inline}}
  - : HWB (short for Hue-Whiteness-Blackness) is another method of specifying colors, similar to HSL.
- {{CSSxRef("color_value/lab", "lab()")}} {{Experimental_Inline}}
  - : Lab color is device-independent and specifies physical measurements of color.
- {{CSSxRef("color_value/lch", "lch()")}} {{Experimental_Inline}}
  - : LCH color is device-independent and specifies color using polar coordinates for chroma and hue.
- {{CSSxRef("color_value/oklab", "oklab()")}} {{Experimental_Inline}}
  - : OKLab color is device-independent and specifies physical measurements of color.
- {{CSSxRef("color_value/oklch", "oklch()")}} {{Experimental_Inline}}
  - : OKLCH color is device-independent and specifies color using polar coordinates for chroma and hue.
- {{CSSxRef("color_value/rgb", "rgb()")}}
  - : The RGB color model defines a given color according to its red, green, and blue components. An optional alpha component represents the color's transparency.
- {{CSSxRef("color_value/rgba", "rgba()")}}
  - : The RGB color model defines a given color according to its red, green, and blue components. The alpha component represents the color's transparency.

## Image functions

The {{CSSxRef("&lt;image&gt;")}} CSS [data type](/en-US/docs/Web/CSS/CSS_Types) represents graphical representation of images or a gradients.

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
- {{CSSxRef("image/image-set","image-set()")}} {{Experimental_Inline}}
  - : A method of letting the browser pick the most appropriate CSS image from a given set, primarily for high pixel density screens.
- {{CSSxRef("cross-fade")}}
  - : Can be used to blend two or more images at a defined transparency.
- {{CSSxRef("element")}}
  - : Defines an {{CSSxRef("&lt;image&gt;")}} value generated from an arbitrary HTML element.
- {{CSSxRef("paint")}}
  - : Defines an {{CSSxRef("&lt;image&gt;")}} value generated with a PaintWorklet.

## Counter functions

CSS counter functions are generally used with the {{CSSxRef("content")}} property, although in theory may be used wherever a {{CSSxRef("&lt;string&gt;")}} is supported.

- {{CSSxRef("counter")}}
  - : A counter function that returns a string representing the current value of the named counter, if there is one.
- {{CSSxRef("counters")}}
  - : A counter function that enables nested counters, returning a concatenated string representing the current values of the named counters, if there are any.
- {{CSSxRef("symbols")}}
  - : A counter function that defines the counter styles inline, directly as the value of a property.

## Font functions

CSS font functions are used with the {{CSSxRef("font-variant-alternates")}} property to control the use of alternate glyphs.

- {{CSSxRef("font-variant-alternates/stylistic", "stylistic()")}}
  - : A font function that enables stylistic alternates for individual characters. The parameter is a font-specific name mapped to a number. It corresponds to the OpenType value `salt`, like `salt 2`.
- {{CSSxRef("font-variant-alternates/styleset", "styleset()")}}
  - : A font function that enables stylistic alternatives for sets of characters. The parameter is a font-specific name mapped to a number. It corresponds to the OpenType value `ssXY`, like `ss02`.
- {{CSSxRef("font-variant-alternates/character-variant", "character-variant()")}}
  - : A font function that enables specific stylistic alternatives for characters. It is similar to `styleset()`, but doesn't create coherent glyphs for a set of characters; individual characters will have independent and not necessarily coherent styles. The parameter is a font-specific name mapped to a number. It corresponds to the OpenType value `cvXY`, like `cv02`.
- {{CSSxRef("font-variant-alternates/swash", "swash()")}}
  - : A font function that enables [swash](https://en.wikipedia.org/wiki/Swash_%28typography%29) glyphs. The parameter is a font-specific name mapped to a number. It corresponds to the OpenType values `swsh` and `cswh`, like `swsh 2` and `cswh 2`.
- {{CSSxRef("font-variant-alternates/ornaments", "ornaments()")}}
  - : A font function that enables ornaments, like [fleurons](https://en.wikipedia.org/wiki/Fleuron_%28typography%29) and other dingbat glyphs. The parameter is a font-specific name mapped to a number. It corresponds to the OpenType value `ornm`, like `ornm 2`.
- {{CSSxRef("font-variant-alternates/annotation", "annotation()")}}
  - : A font function that enables annotations, like circled digits or inverted characters. The parameter is a font-specific name mapped to a number. It corresponds to the OpenType value `nalt`, like `nalt 2`.

## Shape functions

The {{CSSxRef("&lt;basic-shape&gt;")}} CSS [data type](/en-US/docs/Web/CSS/CSS_Types) represents graphical shape. It is used in the {{CSSxRef("clip-path")}}, {{CSSxRef("offset-path")}}, and {{CSSxRef("shape-outside")}} properties.

- {{CSSxRef("basic-shape/circle","circle()")}}
  - : A shape function that defines a circle.
- {{CSSxRef("basic-shape/ellipse","ellipse()")}}
  - : A shape function that defines an ellipse.
- {{CSSxRef("basic-shape/inset","inset()")}}
  - : A shape function that defines an inset rectangle.
- {{CSSxRef("basic-shape/polygon","polygon()")}}
  - : A shape function that defines a polygon.
- {{CSSxRef("path")}}
  - : A shape function that accepts an SVG path string to enable a shape to be drawn.

## Reference functions

The following functions are used as a value of properties to reference a value defined elsewhere.

- {{CSSxRef("attr")}}
  - : A function that retrieves the value of an attribute of the selected element and use it in a stylesheet.
- {{CSSxRef("env")}}
  - : A function that inserts the value of a user-agent defined environment variable.
- {{CSSxRef("url")}}
  - : A function that includes a file from a URL.
- {{CSSxRef("var")}}
  - : A function that inserts a value of a custom property instead of any part of a value of another property.

## CSS grid functions

The following functions are used to define a CSS grid.

- {{CSSxRef("fit-content", "fit-content()")}}
  - : A grid function that clamps a given size to an available size according to the formula `min(maximum size, max(minimum size, argument))`.
- {{CSSxRef("minmax")}}
  - : A grid function that defines a size range greater than or equal to _min_ and less than or equal to _max_.
- {{CSSxRef("repeat")}}
  - : A grid function that represents a repeated fragment of the track list, allowing a large number of columns or rows that exhibit a recurring pattern.

## Specifications

{{Specifications}}

## See also

- [CSS Values and Units](/en-US/docs/Web/CSS/CSS_Values_and_Units)
- [Introduction to CSS: Values and Units](/en-US/docs/Learn/CSS/Building_blocks/Values_and_units)
