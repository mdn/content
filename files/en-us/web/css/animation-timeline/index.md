---
title: animation-timeline
slug: Web/CSS/animation-timeline
tags:
  - CSS
  - CSS Animations
  - CSS Property
  - Reference
  - recipe:css-property
  - Experimental
browser-compat: css.properties.animation-timeline
---
{{CSSRef}}{{SeeCompatTable}}

The **`animation-timeline`** [CSS](/en-US/docs/Web/CSS) property specifies the names of one or more {{cssxref("@scroll-timeline")}} at-rules describing the scroll animations to apply to the element.

<!-- {{EmbedInteractiveExample("pages/css/animation-name.html")}} -->

It is often convenient to use the shorthand property {{cssxref("animation")}} to set all animation properties at once.

## Syntax

```css
/* Single animation */
animation-timeline: none;
animation-timeline: test_05;
animation-timeline: -specific;
animation-timeline: sliding-vertically;

/* Multiple animations */
animation-timeline: test1, animation4;
animation-timeline: none, -moz-specific, sliding;

/* Global values */
animation-timeline: inherit;
animation-timeline: initial;
animation-timeline: revert;
animation-timeline: revert-layer;
animation-timeline: unset;
```

### Values

- `auto`
  - : The animation's timeline is the document's default [DocumentTimeline](/en-US/docs/Web/API/DocumentTimeline).
- `none`
  - : The animation is not associated with a timeline.
- `<timeline-name>`
  - : A {{cssxref('custom-ident')}} or string identifying the scroll timeline, declared with the {{cssxref('@scroll-timeline')}} rule. If two or more scroll timelines share the same name, the last declared within the cascade will be used. If no matching scroll timeline is found, the animation is not associated with a timeline.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Setting a scroll timeline

A scroll timeline named `squareTimeline` is declared and applied to the `#square` element using `animation-timeline: squareTimeline`.

#### HTML

```html
<div id="container">
  <div id="square"></div>
</div>
```

#### CSS

```css
#container {
  height: 300px;
}

#square {
  background-color: deeppink;
  width: 100px; height: 100px;
  margin-top: 100px;
  animation-name: rotateAnimation;
  animation-duration: 3s;
  animation-direction: alternate;
  animation-timeline: squareTimeline;
}

@scroll-timeline squareTimeline {
  source: selector('#container');
  orientation: "vertical";
  scroll-offsets:  0px, 300px;
}

@keyframes rotateAnimation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
```

#### Result

Scroll to see the animation.

{{EmbedLiveSample("Setting a scroll timeline")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using CSS animations](/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations)
- [@scroll-timeline at rule](/en-US/docs/Web/CSS/@scroll-timeline)
