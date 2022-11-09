---
title: scroll-timeline-axis
slug: Web/CSS/scroll-timeline-axis
page-type: css-property
tags:
  - CSS
  - CSS Animations
  - CSS Property
  - Reference
  - recipe:css-property
  - Experimental
browser-compat: css.properties.scroll-timeline-axis
---

{{CSSRef}}{{SeeCompatTable}}

The **`scroll-timeline-axis`** [CSS](/en-US/docs/Web/CSS) property can be used to specify the scrollbar that will be used to provide the timeline for a scroll-timeline animation.

A scroll-timeline animation is one in which the animation progress is determined by a scrollbar position rather than time, or some other dimension.
The [`scroll-timeline-name`](/en-US/docs/Web/CSS/scroll-timeline-axis) property defines a name that can be used to identify an element as the source of a scroll-timeline; the `scroll-timeline-axis` is used to indicate whether the horizontal or vertical scrollbar in that element provides the timeline.
Note that if the element does not display a scrollbar in the axis dimension, then no timeline will be created.

The `scroll-timeline-axis` (and `scroll-timeline-name`) property can also be set using the [`scroll-timeline`](/en-US/docs/Web/CSS/scroll-timeline-name) shorthand property.

## Syntax

```css
scroll-timeline-axis: block;
scroll-timeline-axis: inline;
scroll-timeline-axis: vertical;
scroll-timeline-axis: horizontal;
```

### Values

Allowed values for the scrollbar axis are:

- `block`
  - : (Default) Scrollbar in the block axis of the scroll container.
    The block axis is the direction perpendicular to the flow of text within a line.
    For horizontal writing modes, such as standard English, this is the same as `vertical`, while for vertical writing modes it is the same as `horizontal`.
- `inline`
  - : Scrollbar in the inline axis of the scroll container.
    The inline axis is the direction parallel to the flow of text in a line.
    For horizontal writing modes this is the same as the `horizontal` axis, while for vertical writing modes this is the same as `vertical`.
- `vertical`
  - : Scrollbar in the vertical axis of the scroll container.
- `horizontal`
  - : Scrollbar in the horizontal axis of the scroll container.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

In this example, a scroll timeline named `squareTimeline` is defined using the `scroll-timeline-name` property on the element with the id `container`, and then this name is applied to the animation on the `#square` element using `animation-timeline: squareTimeline`.

To demonstrate the effect of `scroll-timeline-axis`, the horizontal (non-default) scrollbar is used in this example to control the rotation of the square.

### HTML

The HTML for the example is shown below.

```html
<div id="container">
  <div id="square"></div>
  <div id="stretcher"></div>
</div>
```

### CSS

The CSS for the container sets it as the source of a scroll timeline named `squareTimeline` using the `scroll-timeline-name` property.
We then set `scroll-timeline-axis: horizontal;` so that the _horizontal scrollbar_ position will determine the animation timeline.

The height and width of the container are set to 200px and we also set the container to create scrollbars if it overflows (below we will use CSS on the "stretcher" element to ensure that it does overflow).

```css
#container {
  height: 200px;
  width: 200px;
  overflow: scroll;
  scroll-timeline-name: squareTimeline;
  scroll-timeline-axis: horizontal;
}
```

The CSS below defines a square that rotates in alternate directions according to the timeline provided by the `animation-timeline` property, which is set to the `squareTimeline` timeline named above.
The position is set as absolute, so the element rotates in place.

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
  bottom: 50px;
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

The "stretcher" CSS simply sets the block height and width large enough to force the container element to overflow and create scroll bars.
Without this element there would be no scrollbar, and hence no scroll timeline to associate with the animation timeline.

```css
#stretcher {
  height: 300px;
  width: 1200px
}
```

### Result

Scroll the horizontal bar at the bottom to see the animation.

{{EmbedLiveSample("Setting a scroll timeline", "100%", "200px")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`scroll-timeline-name`](/en-US/docs/Web/CSS/scroll-timeline-axis)
- [`scroll-timeline`](/en-US/docs/Web/CSS/scroll-timeline)
- [`animation-timeline`](/en-US/docs/Web/CSS/animation-timeline)
