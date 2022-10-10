---
title: animation-timeline
slug: Web/CSS/animation-timeline
page-type: css-property
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

The **`animation-timeline`** [CSS](/en-US/docs/Web/CSS) property specifies the name of the timeline that defines the progress of the animation.

For an animation that depends on the position of a scrollbar, this name will be defined by the {{cssxref("scroll-timeline-name")}} or {{cssxref("scroll-timeline")}} property that is applied to the element that contains the scrollbar.

<!-- {{EmbedInteractiveExample("pages/css/animation-name.html")}} -->

The animation timeline can also be set by using the {{cssxref("animation")}} shorthand property.

## Syntax

```css
/* Single animation */
animation-timeline: none;
animation-timeline: some_scrollbar_timeline_name;
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
  - : A {{cssxref('custom-ident')}} or string identifying the scroll timeline, declared with the {{cssxref('scroll-timeline-name')}} property (or {{cssxref('scroll-timeline')}} shorthand property).
    If two or more scroll timelines share the same name, the last declared within the cascade will be used.
    If no matching scroll timeline is found, the animation is not associated with a timeline.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Setting a scroll timeline

A scroll timeline named `squareTimeline` is defined using the `scroll-timeline-name` property on the element with id `container`.
This is then applied to the animation on the `#square` element using `animation-timeline: squareTimeline`.

#### HTML

The HTML for the example is shown below.

```html
<div id="container">
  <div id="square"></div>
  <div id="stretcher"></div>
</div>
```

#### CSS

The CSS for the container sets it as the source of a scroll timeline named `squareTimeline` using the `scroll-timeline-name` property (we could also set which scrollbar axis to use with `scroll-timeline-axis`, but there will be only one scrollbar here, and it will be used by default).

The height of the container is set to 300px and we also set the container to create a vertical scrollbar if it overflows (below we will use CSS on the "stretcher" element to ensure that it does overflow).

```css
#container {
  height: 300px;
  overflow-y: scroll;
  scroll-timeline-name: squareTimeline;
  position: relative;
}
```

The CSS below defines a square that rotates in alternate directions according to the timeline provided by the `animation-timeline` property, which is set to the `squareTimeline` timeline named above.

```css
#square {
  background-color: deeppink;
  width: 100px;
  height: 100px;
  margin-top: 100px;
  animation-name: rotateAnimation;
  animation-duration: 3s;
  animation-direction: alternate;
  animation-timeline: squareTimeline;

  position: absolute;
  bottom: 0;
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

The "stretcher" CSS simply sets the block height to 600px, which forces the container element to overflow and create scroll bars.
Without this element there would be no scrollbar, and hence no scroll timeline to associate with the animation timeline.

```css
#stretcher {
  height: 600px;
}
```

#### Result

Scroll to see the animation.

{{EmbedLiveSample("Setting a scroll timeline", "100%", "320px")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using CSS animations](/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations)
- [@scroll-timeline at rule](/en-US/docs/Web/CSS/@scroll-timeline)
- Other related animation properties: {{cssxref("animation")}}, {{cssxref("animation-composition")}}, {{cssxref("animation-delay")}}, {{cssxref("animation-direction")}}, {{cssxref("animation-duration")}}, {{cssxref("animation-fill-mode")}}, {{cssxref("animation-iteration-count")}}, {{cssxref("animation-name")}}, {{cssxref("animation-play-state")}}, {{cssxref("animation-timing-function")}}
