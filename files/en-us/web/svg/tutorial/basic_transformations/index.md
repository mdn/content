---
title: Basic Transformations
slug: Web/SVG/Tutorial/Basic_Transformations
tags:
  - Intermediate
  - SVG
  - SVG:Tutorial
---
{{PreviousNext("Web/SVG/Tutorial/Texts", "Web/SVG/Tutorial/Clipping_and_masking")}}

Now we're ready to start distorting our beautiful images. But first, let's formally introduce the {{SVGElement("g")}} element. With this helper, you can assign properties to a complete set of elements. Actually, that's its only purpose.

## Example

```html
<svg width="30" height="10">
    <g fill="red">
        <rect x="0" y="0" width="10" height="10" />
        <rect x="20" y="0" width="10" height="10" />
    </g>
</svg>
```

{{ EmbedLiveSample('Example', '', '100') }}

All following transformations are summed up in an element's `transform` attribute. Transformations can be chained by concatenating them, separated by whitespace.

## Translation

It may be necessary to move an element around, even though you can position it with the according attributes. For this purpose, the `translate()` transformation stands ready.

```html
<svg width="40" height="50" style="background-color:#bff;">
    <rect x="0" y="0" width="10" height="10" transform="translate(30,40)" />
</svg>
```

The example will render a rectangle, translated to the point (30,40) instead of (0,0).

{{ EmbedLiveSample('Translation', '', '100') }}

If the second value is not given, it is assumed to be _0_.

## Rotation

Rotating an element is quite a common task. Use the `rotate()` transformation for this:

```html
<svg width="31" height="31">
    <rect x="12" y="-10" width="20" height="20" transform="rotate(45)" />
</svg>
```

This example shows a square that is rotated by 45 degrees. The value for `rotate()` is given in degrees.

{{ EmbedLiveSample('Rotation', '', '100') }}

## Multiple transformations

Transformations can be concatenated easily just by separating them with spaces. For example, `translate()` and `rotate()` are common used transformations.

```html
<svg width="40" height="50" style="background-color:#bff;">
    <rect x="0" y="0" width="10" height="10" transform="translate(30,40) rotate(45)" />
</svg>
```

This example shows again the small square shown above that this time is also rotated by 45 degrees.

## Skewing

To make a rhombus out of our rectangle, the `skewX()` and `skewY()` transformations are available. Each one takes an angle that determines how far the element will be skewed.

## Scaling

`scale()` changes the size of an element. It takes two numbers, the first being the _x_ scale factor and the second being the _y_ scale factor. The factors are taken as the ratio of the transformed dimension to the original. For example, _0.5 shrinks by 50%. If the second number is omitted, it is assumed to be equal to the first._

## Complex transformations with `matrix()`

All the above transformations can be expressed by a 2x3 transformation matrix. To combine several transformations, one can set the resulting matrix directly with the `matrix(a, b, c, d, e, f)` transformation which maps coordinates from a previous coordinate system into a new coordinate system by

<math display="block"><semantics><mrow><mo>{</mo><mtable rowspacing="0.5ex"><mtr><mtd><msub><mi>x</mi><mstyle mathvariant="normal"><mrow><mi>newCoordSys</mi></mrow></mstyle></msub><mo>=</mo><mi>a</mi><msub><mi>x</mi><mstyle mathvariant="normal"><mrow><mi>prevCoordSys</mi></mrow></mstyle></msub><mo>+</mo><mi>c</mi><msub><mi>y</mi><mstyle mathvariant="normal"><mrow><mi>prevCoordSys</mi></mrow></mstyle></msub><mo>+</mo><mi>e</mi></mtd></mtr><mtr><mtd><msub><mi>y</mi><mstyle mathvariant="normal"><mrow><mi>newCoordSys</mi></mrow></mstyle></msub><mo>=</mo><mi>b</mi><msub><mi>x</mi><mstyle mathvariant="normal"><mrow><mi>prevCoordSys</mi></mrow></mstyle></msub><mo>+</mo><mi>d</mi><msub><mi>y</mi><mstyle mathvariant="normal"><mrow><mi>prevCoordSys</mi></mrow></mstyle></msub><mo>+</mo><mi>f</mi></mtd></mtr></mtable></mrow><annotation encoding="TeX">\left\{ \begin{matrix} x_{\mathrm{prevCoordSys}} = a x_{\mathrm{newCoordSys}} + c y_{\mathrm{newCoordSys}} + e \\ y_{\mathrm{prevCoordSys}} = b x_{\mathrm{newCoordSys}} + d y_{\mathrm{newCoordSys}} + f \end{matrix} \right.</annotation></semantics></math>

See a [concrete example on the SVG transform documentation](/en-US/docs/Web/SVG/Attribute/transform#general_transformation). Detailed information about this property can be found in the [SVG Recommendation](https://www.w3.org/TR/SVG/coords.html#TransformMatrixDefined).

## Effects on Coordinate Systems

When using transformations you establish a new coordinate system inside the element the transformations apply to. That means, the units you specify for the element and its children might not follow the 1:1 pixel mapping, but are also distorted, skewed, translated and scaled according to the transformation.

```html
<svg width="100" height="100">
    <g transform="scale(2)">
        <rect width="50" height="50" />
    </g>
</svg>
```

The resulting rectangular in the above example will be 100x100px. The more intriguing effects arise, when you rely on attributes like `userSpaceOnUse` and the such.

{{ EmbedLiveSample('Effects_on_Coordinate_Systems', '', '150') }}

## Embedding SVG in SVG

In contrast to HTML, SVG allows you to embed other `svg` elements seamlessly. This way you can also create new coordinate systems by utilizing the `viewBox`, `width` and `height` of the inner `svg` element.

```html
<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="100" height="100">
  <svg width="100" height="100" viewBox="0 0 50 50">
    <rect width="50" height="50" />
  </svg>
</svg>
```

The example above has basically the same effect as the one above, namely that the rect will be twice as large as specified.

{{ EmbedLiveSample('Embedding_SVG_in_SVG', '100', '150') }}

{{PreviousNext("Web/SVG/Tutorial/Texts", "Web/SVG/Tutorial/Clipping_and_masking")}}
