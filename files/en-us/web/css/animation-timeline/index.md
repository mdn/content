---
title: animation-timeline
slug: Web/CSS/animation-timeline
page-type: css-property
status:
  - experimental
browser-compat: css.properties.animation-timeline
---

{{CSSRef}}{{SeeCompatTable}}

The **`animation-timeline`** [CSS](/en-US/docs/Web/CSS) property specifies the timeline that is used to control the progress of an animation.

The timeline can be provided by the current position on a scrollbar, in which case it is referred to as a scrollbar timeline.
The element that provides the scrollbar timeline can be specified in two ways:

- A _named scroll timeline_ is one in which the element that will provide the scrollbar timeline is explicitly named, by applying the {{cssxref("scroll-timeline-name")}} property (or the {{cssxref("scroll-timeline")}} shorthand property).
  The name is then associated with the element to animate using the `animation-timeline` property.
- An _anonymous scroll timeline_ is set using the {{cssxref("animation-timeline/scroll", "scroll()")}} functional notation, which indicates that the element providing the scroll timeline is an ancestor of the element to be animated.
  The ancestor can either be set as either the root element or the nearest ancestor that has a scroll bar in either axis.

Whether the scrollbar uses a scrollbar at the top/bottom or left/right of the element can also be specified.
If the selected axis does not have a scrollbar the associated animation timeline will be inactive.

<!-- {{EmbedInteractiveExample("pages/css/animation-name.html")}} -->

The animation timeline can also be set using the {{cssxref("animation")}} shorthand property.

## Syntax

```css
/* Keyword */
animation-timeline: none;
animation-timeline: auto;

/* Single animation named timeline */
animation-timeline: some_scrollbar_timeline_name;
animation-timeline: -specific;
animation-timeline: sliding-vertically;

/* Single animation anonymous timeline */
animation-timeline: scroll();
animation-timeline: scroll(root inline);

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

- `none`
  - : The animation is not associated with a timeline.
- `auto`
  - : The animation's timeline is the document's default [DocumentTimeline](/en-US/docs/Web/API/DocumentTimeline).
- `scroll()` {{Experimental_Inline}}

  - : The "anonymous" timeline is provided by some ancestor of the current element.

    See {{cssxref("animation-timeline/scroll", "scroll()")}} for additional information.

- `<timeline-name>`
  - : A {{cssxref('custom-ident')}} or string identifying the named scroll timeline, declared with the {{cssxref('scroll-timeline-name')}} property (or {{cssxref('scroll-timeline')}} shorthand property).
    If two or more scroll timelines share the same name, the last declared within the cascade will be used.
    If no matching scroll timeline is found, the animation is not associated with a timeline.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Setting a named scroll timeline

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

Scroll to see the square element being animated.

{{EmbedLiveSample("Setting a named scroll timeline", "100%", "320px")}}

### Setting an anonymous scroll timeline

The `#square` element is animated using an anonymous scrollbar timeline, which is applied to the element to be animated using the `scroll()` functional notation.
The timeline in this particular example is provided by the nearest parent element that has (any) scrollbar, from the scrollbar in the block direction.

#### HTML

The HTML for the example is shown below.

```html
<div id="container">
  <div id="square"></div>
  <div id="stretcher"></div>
</div>
```

#### CSS

The CSS below defines a square that rotates in alternate directions according to the timeline provided by the `animation-timeline` property.
In this case the timeline is provided by `scroll(block nearest)`, which means that it will select the scrollbar in the block direction of the nearest ancestor element that has scrollbars; in this case the vertical scrollbar of the "container" element.

Note that the `block nearest` options below are actually the default, so we could instead just have had: `scroll()`.

```css
#square {
  background-color: deeppink;
  width: 100px;
  height: 100px;
  margin-top: 100px;
  position: absolute;
  bottom: 0;

  animation-name: rotateAnimation;
  animation-duration: 3s;
  animation-direction: alternate;
  animation-timeline: scroll(block nearest);
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

The CSS for the container sets its height to 300px and we also set the container to create a vertical scrollbar if it overflows.
The "stretcher" CSS sets the block height to 600px, which forces the container element to overflow.
These two together ensure that the container has a vertical scrollbar, which allows it to be used as the source of the anonymous scrollbar timeline.

```css
#container {
  height: 300px;
  overflow-y: scroll;
  position: relative;
}

#stretcher {
  height: 600px;
}
```

#### Result

Scroll to see the square element being animated.

{{EmbedLiveSample("Setting an anonymous scroll timeline", "100%", "320px")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using CSS animations](/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations)
- Other related animation properties: {{cssxref("animation")}}, {{cssxref("animation-composition")}}, {{cssxref("animation-delay")}}, {{cssxref("animation-direction")}}, {{cssxref("animation-duration")}}, {{cssxref("animation-fill-mode")}}, {{cssxref("animation-iteration-count")}}, {{cssxref("animation-name")}}, {{cssxref("animation-play-state")}}, {{cssxref("animation-timing-function")}}
