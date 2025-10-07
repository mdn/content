---
title: CSS motion path
slug: Web/CSS/CSS_motion_path
page-type: css-module
spec-urls: https://drafts.fxtf.org/motion/
sidebar: cssref
---

The **CSS motion path** module allows authors to animate any graphical object along a custom path.

For example, when you want to animate an element moving along a path, you can define a specific path of any shape you want with the {{cssxref("offset-path")}} property. You can then animate it along that path by animating {{cssxref("offset-distance")}} property, and even rotate it at any point with the {{cssxref("offset-rotate")}} property.

## Motion paths in action

```html hidden
<div id="heart">
  <div id="motion-demo"></div>
</div>
```

```css hidden
#motion-demo {
  offset-path: path("M20,70 A40,40,0,0,1,100,70 A40,40,0,0,1,180,70 Q180,130,100,190 Q20,130,20,70 Z");
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

In this example, we used [CSS masking](/en-US/docs/Web/CSS/CSS_masking) and [CSS shapes](/en-US/docs/Web/CSS/CSS_shapes) to clip a container with a light pink background into a heart. We used a {{cssxref("basic-shape/path","path()")}} function as the value of {{cssxref("clip-path")}} property. It's child is a 10px by 10px red box that is made to follow the edge of its parent. We did this by using the same {{cssxref("basic-shape")}} as the path, setting the box's {{cssxref("offset-path")}} to the same `path()` function value. We used [CSS animations](/en-US/docs/Web/CSS/CSS_animations) to change the {{cssxref("offset-distance")}} from `0%` to `100%` over three seconds.

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

- [Using CSS animations](/en-US/docs/Web/CSS/CSS_animations/Using_CSS_animations)
  - : Step-by-step tutorial on how to create animations using CSS.

## Related concepts

- [CSS shape functions](/en-US/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions#shape_functions)
- {{cssxref("basic-shape")}} data type
- [`<coord-box>`](/en-US/docs/Web/CSS/offset-path#coord-box)
- {{cssxref("url")}} function
- {{cssxref("radial-gradient")}} function
- [`<easing-function>`](/en-US/docs/Web/CSS/easing-function) data type
- [CSS shapes](/en-US/docs/Web/CSS/CSS_shapes) module
- {{cssxref("position_value", "&lt;position&gt;")}}

## Specifications

{{Specifications}}

## See also

- [`prefers-reduced-motion`](/en-US/docs/Web/CSS/@media/prefers-reduced-motion) media query
- {{cssxref("will-change")}} CSS propertyproperty
