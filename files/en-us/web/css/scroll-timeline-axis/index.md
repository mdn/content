---
title: scroll-timeline-axis
slug: Web/CSS/scroll-timeline-axis
page-type: css-property
status:
  - experimental
browser-compat: css.properties.scroll-timeline-axis
---

{{CSSRef}}{{SeeCompatTable}}

The **`scroll-timeline-axis`** [CSS](/en-US/docs/Web/CSS) property is used to specify the scrollbar direction that will be used to provide the timeline for a scroll-driven animation.

In a scroll-timeline animation, the animation progress is determined by a scrollbar position rather than time or some other dimension.
The [`scroll-timeline-name`](/en-US/docs/Web/CSS/scroll-timeline-name) property defines a name that can be used to identify an element as the source of a scroll-timeline; the `scroll-timeline-axis` defines the direction of the scrollbar in the container that will provide the timeline.

> **Note:** If the element does not overflow its container in the axis dimension or if the overflow is hidden or clipped, no timeline will be created.

The `scroll-timeline-axis` (and `scroll-timeline-name`) property can also be set using the [`scroll-timeline`](/en-US/docs/Web/CSS/scroll-timeline) shorthand property.

## Syntax

```css
scroll-timeline-axis: block;
scroll-timeline-axis: inline;
scroll-timeline-axis: vertical;
scroll-timeline-axis: horizontal;
```

### Values

Allowed values for the `scroll-timeline-axis` are:

- `block`
  - : Represents the scrollbar in the block axis of the scroll container. This is the default value.
    The block axis is the direction perpendicular to the flow of text within a line.
    For horizontal writing modes, such as standard English, this is the same as `vertical`, while for vertical writing modes, it is the same as `horizontal`.
- `inline`
  - : Represents the scrollbar in the inline axis of the scroll container.
    The inline axis is the direction parallel to the flow of text in a line.
    For horizontal writing modes, this is the same as the `horizontal` axis, while for vertical writing modes, this is the same as `vertical`.
- `vertical`
  - : Represents the scrollbar in the vertical axis of the scroll container.
- `horizontal`
  - : Represents the scrollbar in the horizontal axis of the scroll container.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Defining the axis of the scroll timeline

In this example, a scroll timeline named `squareTimeline` is defined using the `scroll-timeline-name` property on the element with the ID `container`, and then this name is applied to the animation on the `#square` element using `animation-timeline: squareTimeline`.

To demonstrate the effect of `scroll-timeline-axis`, a `horizontal` (non-default) scrollbar is used in this example to drive the rotation of the square.

#### HTML

The HTML for the example is shown below.

```html
<div id="container">
  <div id="square"></div>
  <div id="stretcher"></div>
</div>
```

#### CSS

The CSS for the container sets it as the source of a scroll timeline named `squareTimeline` using the `scroll-timeline-name` property.
The scroll axis is set by `scroll-timeline-axis: horizontal;` so that the _horizontal scrollbar_ position will determine the animation timeline.

The height and width of the container are set to `200px`. The container is also set to create scrollbars if it overflows (the CSS `height` and `width` rules on the `stretcher` element below make the content overflow its container).

```css
#container {
  height: 200px;
  width: 200px;
  overflow: scroll;
  scroll-timeline-name: squareTimeline;
  scroll-timeline-axis: horizontal;
}
```

The CSS below defines a square that rotates according to the timeline provided by the `animation-timeline` property, which is set to the `squareTimeline` timeline named above.

```css
#square {
  background-color: deeppink;
  width: 100px;
  height: 100px;
  margin-top: 100px;
  animation-name: rotateAnimation;
  animation-duration: 1ms;
  animation-timeline: squareTimeline;
  position: absolute;
  bottom: 50px;
}

#stretcher {
  height: 200px;
  width: 200px;
  background: #dedede;
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

The `stretcher` CSS rule sets the block height and width to values large enough to create content that overflows the container element, thereby creating scroll bars.
Without this element, the content would not overflow the container, there would be no scrollbar, and hence no scroll timeline to associate with the animation timeline.

#### Result

Scroll the horizontal bar at the bottom to see the square animate as you scroll.

{{EmbedLiveSample("Defining_the_axis_of_the_scroll_timeline", "100%", "200px")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`animation-timeline`](/en-US/docs/Web/CSS/animation-timeline) property
- [`scroll-timeline`](/en-US/docs/Web/CSS/scroll-timeline) shorthand property
- [`scroll-timeline-name`](/en-US/docs/Web/CSS/scroll-timeline-name) property
