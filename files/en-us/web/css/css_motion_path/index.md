---
title: CSS Motion Path
slug: Web/CSS/CSS_Motion_Path
tags:
  - CSS
  - CSS Motion Path
  - Guide
  - Motion Path
  - Overview
  - Reference
browser-compat: css.properties.offset-path
---
{{CSSRef}}

**Motion Path** is a CSS module that allows authors to animate any graphical object along a custom path.

The idea is that when you want to animate an element moving along a path, you previously only had animating translation, position, etc. at your disposal, which wasn't ideal and only allowed for simple movements. With {{cssxref("offset-path")}} you can define a specific path of any shape you want. You then animate it along that path by animating {{cssxref("offset-distance")}}, and can choose to rotate it at any point using {{cssxref("offset-rotate")}}.

## Basic example

```html
<div id="motion-demo"></div>
```

```css
#motion-demo {
  offset-path: path('M20,20 C20,100 200,0 200,100');
  animation: move 3000ms infinite alternate ease-in-out;
  width: 40px;
  height: 40px;
  background: cyan;
}

@keyframes move {
  0% {
    offset-distance: 0%;
  }
  100% {
    offset-distance: 100%;
  }
}
```

{{EmbedLiveSample('Basic_example', '100%', 150)}}

## Reference

### Properties

- {{cssxref("offset")}}
- {{cssxref("offset-anchor")}}
- {{cssxref("offset-distance")}}
- {{cssxref("offset-path")}}
- {{cssxref("offset-position")}}
- {{cssxref("offset-rotate")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
