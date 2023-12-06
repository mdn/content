---
title: CSS transforms
slug: Web/CSS/CSS_transforms
page-type: css-module
spec-urls: https://drafts.csswg.org/css-transforms-2/
---

{{CSSRef}}

The **CSS transforms** module defines how elements styled with CSS can be transformed in two-dimensional or three-dimensional space.

## CSS transforms in action

Use the sliders in the frame below to modify the translation, rotation, scale, and skew CSS transform properties of the cube in 3D space.

{{EmbedGHLiveSample("css-examples/modules/transforms.html", '100%', 900)}}

The cube in the above example is comprised of six `<div>` elements, all of which are styled with CSS to create the cube's faces.

The cube is not drawn using a 2D or 3D canvas context, so **you can inspect the faces of the cube with your browser's developer tools as you would inspect any other DOM element**. Try using your browser's developer tools element picker to inspect different faces of the cube as you transform its position and rotation.

> Note that the order in which 3D rotations are applied affects the resultant transformation. In the above example, rotations are applied in the order X → Y → Z.

You can [view this example's source on GitHub](https://github.com/mdn/css-examples/blob/main/modules/transforms.html).

## Reference

### Properties

- {{cssxref("backface-visibility")}}
- {{cssxref("perspective")}}
- {{cssxref("perspective-origin")}}
- {{cssxref("rotate")}}
- {{cssxref("scale")}}
- {{cssxref("transform")}}
- {{cssxref("transform-box")}}
- {{cssxref("transform-origin")}}
- {{cssxref("transform-style")}}
- {{cssxref("translate")}}
- {{cssxref("transform-origin")}}

### Functions

- {{cssxref("transform-function/matrix", "matrix()")}}
- {{cssxref("transform-function/matrix3d", "matrix3d()")}}
- {{cssxref("transform-function/perspective", "perspective()")}}
- {{cssxref("transform-function/rotate", "rotate()")}}
- {{cssxref("transform-function/rotate3d", "rotate3d()")}}
- {{cssxref("transform-function/rotateX", "rotateX()")}}
- {{cssxref("transform-function/rotateY", "rotateY()")}}
- {{cssxref("transform-function/rotateZ", "rotateZ()")}}
- {{cssxref("transform-function/scale", "scale()")}}
- {{cssxref("transform-function/scale3d", "scale3d()")}}
- {{cssxref("transform-function/scaleX", "scaleX()")}}
- {{cssxref("transform-function/scaleY", "scaleY()")}}
- {{cssxref("transform-function/scaleZ", "scaleZ()")}}
- {{cssxref("transform-function/skew", "skew()")}}
- {{cssxref("transform-function/skewX", "skewX()")}}
- {{cssxref("transform-function/skewY", "skewY()")}}
- {{cssxref("transform-function/translate", "translate()")}}
- {{cssxref("transform-function/translateX", "translateX()")}}
- {{cssxref("transform-function/translateY", "translateY()")}}
- {{cssxref("transform-function/translateZ", "translateZ()")}}

### Data types

- {{cssxref("&lt;transform-function&gt;")}}

## Guides

- [Using CSS transforms](/en-US/docs/Web/CSS/CSS_transforms/Using_CSS_transforms)
  - : Step-by-step tutorial about how to transform elements styled with CSS.
- [Forcing GPU acceleration with CSS transforms](/en-US/docs/Web/CSS/CSS_transforms/Forcing_gpu_acceleration_with_css_transforms)
  - : Using CSS transforms to enable hardware acceleration for animating DOM elements.

## Related concepts

- [SVG transform](/en-US/docs/Web/SVG/Attribute/transform) attribute

## Specifications

{{Specifications}}

## See also

- [CSS `animation`](/en-US/docs/Web/CSS/animation) reference page
- [CSS `transition`](/en-US/docs/Web/CSS/transition) reference page
- [Interpolation](/en-US/docs/Glossary/Interpolation) glossary definition
- [Coordinate system](/en-US/docs/Web/CSS/CSSOM_view/Coordinate_systems) guide
- [Matrix math for the web](/en-US/docs/Web/API/WebGL_API/Matrix_math_for_the_web) guide
