---
title: SVG animation with SMIL
slug: Web/SVG/SVG_animation_with_SMIL
tags:
  - Animation
  - Firefox 4
  - Gecko 2.0
  - SVG
  - SVG Animation
---
> **Warning:** Although Chrome 45 deprecated SMIL in favor of CSS animations and Web animations, the Chrome developers have since [suspended](https://groups.google.com/a/chromium.org/d/msg/blink-dev/5o0yiO440LM/YGEJBsjUAwAJ) that deprecation.

Firefox 4 introduced support for animating [SVG](/en-US/docs/Web/SVG) using [Synchronized Multimedia Integration Language](https://www.w3.org/TR/REC-smil/) (SMIL). SMIL allows you to:

- animate the numeric attributes of an element (x, y, …)
- animate transform attributes (translation or rotation)
- animate color attributes
- follow a motion path

This is done adding an SVG element like {{ SVGElement("animate") }} inside the SVG element to animate. Below are examples for the four different ways.

## Animating attributes of an element

The following example animates the **cx** attribute of a circle. To do so, we add an {{ SVGElement("animate") }} element inside the {{ SVGElement("circle") }} element. The important attributes for {{ SVGElement("animate") }} are:

- **attributeName**
  - : The name of the attribute to animate.
- from
  - : The initial value of the attribute.
- to
  - : The final value.
- dur
  - : The duration of the animation (for example, write '5s' for 5 seconds).

If you want to animate more attributes inside the same element, just add more {{ SVGElement("animate") }} elements.

```html
<svg width="300" height="100">
  <title>Attribute Animation with SMIL</title>
  <rect x="0" y="0" width="300" height="100" stroke="black" stroke-width="1" />
  <circle cx="0" cy="50" r="15" fill="blue" stroke="black" stroke-width="1">
    <animate
       attributeName="cx" from="0" to="500"
       dur="5s" repeatCount="indefinite" />
  </circle>
</svg>
```

{{ EmbedLiveSample('Animating_attributes_of_an_element', '100%', 120) }}

## Animating the transform attributes

The {{ SVGElement("animateTransform") }} element let you animate **transform** attributes. This new element is necessary because we are not animating a simple attribute like **x** which is just a number. Rotation attributes look like this: `rotation(theta, x, y)`, where `theta` is the angle in degrees, and `x` and `y` are absolute positions. In the example below, we animate the center of the rotation and the angle.

```html
<svg width="300" height="100">
  <title>SVG SMIL Animate with transform</title>
  <rect x="0" y="0" width="300" height="100" stroke="black" stroke-width="1" />
  <rect x="0" y="50" width="15" height="34" fill="blue" stroke="black" stroke-width="1">
    <animateTransform
       attributeName="transform"
       begin="0s"
       dur="20s"
       type="rotate"
       from="0 60 60"
       to="360 100 60"
       repeatCount="indefinite"
    />
  </rect>
</svg>
```

{{ EmbedLiveSample('Animating_the_transform_attributes', '100%', 120) }}

## Animation following a path

The {{ SVGElement("animateMotion") }} element lets you animate an element position and rotation according to a path. The path is defined the same way as in {{ SVGElement("path") }}. You can set the attribute to define whether the object rotates following the tangent of the path.

### Example 1: Linear motion

In this example, a blue circle bounces between the left and right edges of a black box, over and over again, indefinitely. The animation here is handled by the {{ SVGElement("animateMotion") }} element. In this case, we're establishing a path consisting of a **MoveTo** command to establish the starting point for the animation, then the **Horizontal-line** command to move the circle 300 pixels to the right, followed by the **Z command**, which closes the path, establishing a loop back to the beginning. By setting the value of the **repeatCount** attribute to `indefinite`, we indicate that the animation should loop forever, as long as the SVG image exists.

```html
<svg xmlns="http://www.w3.org/2000/svg" width="300" height="100">
  <title>SVG SMIL Animate with Path</title>
  <rect x="0" y="0" width="300" height="100" stroke="black" stroke-width="1" />
  <circle cx="0" cy="50" r="15" fill="blue" stroke="black" stroke-width="1">
    <animateMotion
       path="M 0 0 H 300 Z"
       dur="3s" repeatCount="indefinite" />
  </circle>
</svg>
```

{{ EmbedLiveSample('Example_1_Linear_motion', '100%', 120) }}

[View live sample](https://media.prod.mdn.mozit.cloud/samples/svg/svganimdemo1.html)

### Example 2: Curved motion

Same example as before with a curved path and following the direction of the path.

```html
<svg width="300" height="100">
  <title>SVG SMIL Animate with Path</title>
  <rect x="0" y="0" width="300" height="100" stroke="black" stroke-width="1" />
  <rect x="0" y="0" width="20" height="20" fill="blue" stroke="black" stroke-width="1">
    <animateMotion
       path="M 250,80 H 50 Q 30,80 30,50 Q 30,20 50,20 H 250 Q 280,20,280,50 Q 280,80,250,80Z"
       dur="3s" repeatCount="indefinite" rotate="auto" />
  </rect>
</svg>
```

{{ EmbedLiveSample('Example_2_Curved_motion', '100%', 120) }}

## See also

- [SVG](/en-US/docs/Web/SVG)
- [SVG Animation Specification](https://www.w3.org/TR/SVG/animate.html)
- [SMIL Specification](https://www.w3.org/TR/REC-smil/)
