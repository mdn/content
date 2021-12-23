---
title: Using CSS transforms
slug: Web/CSS/CSS_Transforms/Using_CSS_transforms
tags:
  - 3D
  - Advanced
  - CSS
  - CSS Transforms
  - Graphics
  - Guide
  - Rotate
  - Scale
  - Scaling
  - perspective
  - rotation
---
{{CSSRef}}

By modifying the coordinate space, **CSS transforms** change the shape and position of the affected content without disrupting the normal document flow. This guide provides an introduction to using transforms.

CSS transforms are implemented using a set of CSS properties that let you apply affine linear transformations to HTML elements. These transformations include rotation, skewing, scaling, and translation both in the plane and in the 3D space.

> **Warning:** Only elements positioned by the [box model](/en-US/docs/Web/CSS/CSS_Box_Model) can be `transform`ed. As a rule of thumb, an element is positioned by the box model if it has `display: block`.

## CSS transforms properties

Two major properties are used to define CSS transforms: {{cssxref("transform")}} and {{cssxref("transform-origin")}}

- {{cssxref("transform-origin")}}
  - : Specifies the position of the origin. By default, it is at the center of the element and can be moved. It is used by several transforms, like rotations, scaling or skewing, that need a specific point as a parameter.
- {{cssxref("transform")}}
  - : Specifies the transforms to apply to the element. It is a space-separated list of transforms, which are applied one after the other, as requested by the composition operation. Composite transforms are effectively applied in order from right to left.

## Examples

Here is an unaltered image of the MDN logo:

![MDN Logo](logo.png)

### Rotating

Here is the MDN logo rotated 90 degrees from its bottom-left corner.

```html
<img style="transform: rotate(90deg);
            transform-origin: bottom left;"
     src="logo.png">
```

{{EmbedLiveSample('Rotating', 'auto', 240) }}

### Skewing and translating

Here is the MDN logo, skewed by 10 degrees and translated by 150 pixels on the X-axis.

```html
<img style="transform: skewx(10deg) translatex(150px);
            transform-origin: bottom left;"
     src="logo.png">
```

{{EmbedLiveSample('Skewing_and_translating') }}

## 3D specific CSS properties

Performing CSS transformations in 3D space is a bit more complex. You have to start by configuring the 3D space by giving it a perspective, then you have to configure how your 2D elements will behave in that space.

### Perspective

The first element to set is the {{cssxref("perspective")}}. The perspective is what gives us the 3D impression. The farther from the viewer the elements are, the smaller they are.

{{page("/en-US/docs/Web/CSS/perspective", "Setting perspective", 0, 0, 3)}}

The second element to configure is the position of the viewer, with the {{ cssxref("perspective-origin") }} property. By default the perspective is centered on the viewer, which is not always adequate.

{{page("/en-US/docs/Web/CSS/perspective-origin", "Changing the perspective origin", 0, 0, 3)}}

Once you have done this, you can work on the element in the 3D space.

## See also

- [Using device orientation with 3D Transforms](/en-US/docs/Web/Events/Using_device_orientation_with_3D_transforms "Using Deviceorientation with 3D Transforms")
- [Intro to CSS 3D transforms](https://desandro.github.io/3dtransforms/) (Blog post by David DeSandro)
- [CSS Transform Playground](https://css-transform.moro.es/) (Online tool to visualize CSS Transform functions)
