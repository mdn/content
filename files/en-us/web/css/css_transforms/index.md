---
title: CSS transforms
slug: Web/CSS/CSS_transforms
page-type: css-module
spec-urls: https://drafts.csswg.org/css-transforms/
---

{{CSSRef}}

The **CSS transforms** module defines how elements styled with CSS can be transformed in two-dimensional or three-dimensional space.

## CSS transforms in action

Use the sliders in the frame below to modify the translation, rotation, scale, and skew CSS transform properties of the cube in 3D space.

{{EmbedGHLiveSample("css-examples/modules/transforms.html", '100%', 900)}}

The cube in the above example is comprised of six `<div>` elements, all of which are styled with CSS to create the cube's faces.

The cube is not drawn using a 2D or 3D canvas context, so you can inspect the faces of the cube with your browser's developer tools as you would inspect any other DOM element. Try using your browser's developer tools element picker to inspect different faces of the cube as you transform its position and rotation.

You can [view this example's source on GitHub](https://github.com/mdn/css-examples/blob/main/modules/transforms.html).

## Reference

### Properties

- {{cssxref("backface-visibility")}}
- {{cssxref("perspective")}}
- {{cssxref("perspective-origin")}}
- {{cssxref("rotate")}}
- {{cssxref("scale")}}
- [`skew`](/en-US/docs/Web/CSS/transform-function/skew)
- {{cssxref("transform")}}
- {{cssxref("transform-box")}}
- {{cssxref("transform-origin")}}
- {{cssxref("transform-style")}}
- {{cssxref("translate")}}

### Functions

- See {{cssxref("&lt;transform-function&gt;")}}
  - All of the CSS transform functions, such as [`translateX()`](/en-US/docs/Web/CSS/transform-function/translateX), are listed on their own page.

### Data types

- {{cssxref("&lt;transform-function&gt;")}}

## Guides

- [Using CSS transforms](/en-US/docs/Web/CSS/CSS_transforms/Using_CSS_transforms)
  - : Step-by-step tutorial about how to transform elements styled with CSS.
- [Styling animated buttons with CSS transforms](/en-US/docs/Web/CSS/CSS_transforms/styling_animated_buttons_with_css_transforms)
  - : Contains several examples of `<input>` elements styled using animated CSS transforms.

## Related concepts

- You can couple CSS transforms with [CSS animations](/en-US/docs/Web/CSS/animation) or [CSS transitions](/en-US/docs/Web/CSS/transition) to transform an element over time.
  - [Interpolation](/en-US/docs/Glossary/Interpolation) is used to calculate the transformation values during an animation.
- Transformations modify the [coordinate system](/en-US/docs/Web/CSS/CSSOM_view/Coordinate_systems) within which an element is positioned.
- The concepts of "transformations" and "matrix math" are closely related. This relationship is clarified in [this "Matrix math for the web" guide](/en-US/docs/Web/API/WebGL_API/Matrix_math_for_the_web).
- You can force an element to be rendered with [GPU acceleration](/en-US/docs/Web/Performance/Fundamentals#use_css_transforms) by applying the CSS style `transform: translate3d(0, 0, 0);` to the element. Rendering elements using GPU hardware acceleration may improve your page's performance at the cost of increasing your page's memory usage and impacting battery life.
- [SVG transforms](/en-US/docs/Web/SVG/Attribute/transform) can be applied to scalable vector graphics.

## Specifications

{{Specifications}}
