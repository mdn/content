---
title: CSS motion path
short-title: Motion path
slug: Web/CSS/Guides/Motion_path
page-type: css-module
spec-urls: https://drafts.fxtf.org/motion/
sidebar: cssref
---

The **CSS motion path** module allows authors to animate any graphical object along a custom path.

The [CSS transforms](/en-US/docs/Web/CSS/Guides/Transforms) module provides features that enable boxes to be repositioned, rotated, scaled, and skewed relative to its laid out position, without disrupting the layout of any other elements on the page. These transforms can be animated and transitioned, but only in relatively basic ways.

The features of the CSS motion path module provide offset transforms: transforms that align a point on an element to an offset distance along an offset path, optionally rotating the transformed element to follow the path direction. This module enables powerful transform possibilities, for example:

- Positioning using polar coordinates rather than limiting transformation to the standard rectangular {{cssxref("transform")}} function coordinates.
- Animating an element along a defined path.

CSS motion paths allow the definition of complex 2D spatial transitions by leveraging [CSS shape functions](/en-US/docs/Web/CSS/Reference/Values/Functions#shape_functions).

For example, you can define a specific path of any shape you want with the {{cssxref("offset-path")}} property. You can then animate an element to move along that path by animating the {{cssxref("offset-distance")}} property, and rotate it at any point with the {{cssxref("offset-rotate")}} property.

## Motion paths in action

```html hidden
<div id="heart">
  <div id="motion-demo"></div>
</div>
```

```css hidden
#motion-demo {
  offset-path: path(
    "M20,70 A40,40,0,0,1,100,70 A40,40,0,0,1,180,70 Q180,130,100,190 Q20,130,20,70 Z"
  );
  animation: move 3000ms infinite linear;
  width: 10px;
  height: 10px;
  background: red;
}

#heart {
  width: 200px;
  height: 200px;
  background-color: lightpink;
  clip-path: path(
    "M20,70 A40,40,0,0,1,100,70 A40,40,0,0,1,180,70 Q180,130,100,190 Q20,130,20,70 Z"
  );
}

@keyframes move {
  100% {
    offset-distance: 100%;
  }
}
```

{{EmbedLiveSample('Motion paths in action', '100%', 220)}}

In this example, we used [CSS masking](/en-US/docs/Web/CSS/Guides/Masking) and [CSS shapes](/en-US/docs/Web/CSS/Guides/Shapes) to clip a container with a light pink background into a heart shape. We used a {{cssxref("basic-shape/path","path()")}} function as the value of the {{cssxref("clip-path")}} property. Its child is a `10px` by `10px` red box that is made to follow the edge of its parent. We did this by using the same {{cssxref("basic-shape")}} as the path, setting the box's {{cssxref("offset-path")}} property to the same `path()` function value. We used [CSS animations](/en-US/docs/Web/CSS/Guides/Animations) to change the {{cssxref("offset-distance")}} from `0%` to `100%` over three seconds.

## Reference

### Properties

- {{cssxref("offset")}} shorthand
- {{cssxref("offset-anchor")}}
- {{cssxref("offset-distance")}}
- {{cssxref("offset-path")}}
- {{cssxref("offset-position")}}
- {{cssxref("offset-rotate")}}

### Functions

- {{cssxref("ray")}}

## Guides

- [Using CSS animations](/en-US/docs/Web/CSS/Guides/Animations/Using)
  - : Step-by-step tutorial on how to create animations using CSS.

## Related concepts

[CSS transforms](/en-US/docs/Web/CSS/Guides/Transforms) module

- {{cssxref("transform")}}
- {{cssxref("transform-origin")}}
- {{cssxref("translate")}}

[CSS masking](/en-US/docs/Web/CSS/Guides/Masking) module

- {{cssxref("clip-path")}}
- {{cssxref("clip-rule")}}

[CSS shapes](/en-US/docs/Web/CSS/Guides/Shapes) module

- {{cssxref("&lt;basic-shape&gt;")}}
- {{cssxref("basic-shape/circle","circle()")}}
- {{cssxref("basic-shape/ellipse","ellipse()")}}
- {{cssxref("basic-shape/inset","inset()")}}
- {{cssxref("basic-shape/path","path()")}}
- {{cssxref("basic-shape/polygon","polygon()")}}
- {{cssxref("basic-shape/rect","rect()")}}
- {{cssxref("basic-shape/shape","shape()")}}
- {{cssxref("basic-shape/xywh","xywh()")}}

[CSS animations](/en-US/docs/Web/CSS/Guides/Animations) module

- {{cssxref("animation")}} shorthand
- {{cssxref("@keyframes")}}

[CSS box model](/en-US/docs/Web/CSS/Guides/Box_model) module

- [`<coord-box>`](/en-US/docs/Web/CSS/Reference/Properties/offset-path#coord-box)

## Specifications

{{Specifications}}

## See also

- {{cssxref("position_value", "&lt;position&gt;")}}
- {{cssxref("&lt;easing-function&gt;")}}
- {{cssxref("radial-gradient")}} function
- [`prefers-reduced-motion`](/en-US/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion) media query
- {{cssxref("will-change")}} CSS property
