---
title: scroll()
slug: Web/CSS/animation-timeline/scroll
page-type: css-function
status:
  - experimental
browser-compat: css.properties.animation-timeline.scroll
---

{{CSSRef}}{{SeeCompatTable}}

The **`scroll()`** [CSS function](/en-US/docs/Web/CSS/CSS_Functions) can be used with {{cssxref("animation-timeline")}} to indicate a scrollable element (_scroller_) and scrollbar axis that will provide an anonymous scroll progress timeline for animating the current element. The scroll progress timeline is progressed through by scrolling the scroller between top and bottom (or left and right). The position in the scroll range is converted into a percentage of progress — 0% at the start and 100% at the end.

> [!NOTE]
> If the indicated axis does not contain a scrollbar, then the animation timeline will be inactive (have zero progress).

> [!NOTE]
> Each use of `scroll()` corresponds to its own unique instance of {{domxref("ScrollTimeline")}} in the [Web Animations API](/en-US/docs/Web/API/Web_Animations_API).

## Syntax

```css
/* Function with no parameters set */
animation-timeline: scroll();

/* Values for selecting the scroller element */
animation-timeline: scroll(nearest); /* Default */
animation-timeline: scroll(root);
animation-timeline: scroll(self);

/* Values for selecting the axis */
animation-timeline: scroll(block); /* Default */
animation-timeline: scroll(inline);
animation-timeline: scroll(y);
animation-timeline: scroll(x);

/* Examples that specify scroller and axis */
animation-timeline: scroll(block nearest); /* Default */
animation-timeline: scroll(inline root);
animation-timeline: scroll(x self);
```

### Parameters

- scroller

  - : The value for indicating the scroller element that will provide the scroll progress timeline can be any one of the following:

    - `nearest`
      - : The nearest ancestor of the current element that has scrollbars on either axis. This is the default value.
    - `root`
      - : The root element of the document.
    - `self`
      - : The current element itself.

- axis

  - : The scrollbar axis value can be any one of the following:

    - `block`
      - : The scrollbar on the block axis of the scroll container, which is the axis in the direction perpendicular to the flow of text within a line. For horizontal writing modes, such as standard English, this is the same as `y`, while for vertical writing modes, it is the same as `x`. This is the default value.
    - `inline`
      - : The scrollbar on the inline axis of the scroll container, which is the axis in the direction parallel to the flow of text in a line. For horizontal writing modes, this is the same as `x`, while for vertical writing modes, this is the same as `y`.
    - `y`
      - : The scrollbar on the vertical axis of the scroll container.
    - `x`
      - : The scrollbar on the horizontal axis of the scroll container.

> [!NOTE]
> The scroller and axis values can be specified in any order.

## Formal syntax

{{CSSSyntax}}

## Examples

### Setting an anonymous scroll progress timeline

In this example, the `#square` element is animated using an anonymous scroll progress timeline, which is applied to the element to be animated using the `scroll()` function.
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
In this case, the timeline is provided by `scroll(block nearest)`, which means that it will select the scrollbar in the block direction of the nearest ancestor element that has scrollbars; in this case the vertical scrollbar of the "container" element.

> **Note:** `block` and `nearest` are actually the default parameter values, so we could have used just `scroll()`.

```css
#square {
  background-color: deeppink;
  width: 100px;
  height: 100px;
  margin-top: 100px;
  position: absolute;
  bottom: 0;

  animation-name: rotateAnimation;
  animation-duration: 1ms; /* Firefox requires this to apply the animation */
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
These two together ensure that the container has a vertical scrollbar, which allows it to be used as the source of the anonymous scroll progress timeline.

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

{{EmbedLiveSample("Setting an anonymous scroll progress timeline", "100%", "320px")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [CSS scroll-driven animations](/en-US/docs/Web/CSS/CSS_scroll-driven_animations)
- [Using CSS animations](/en-US/docs/Web/CSS/CSS_animations/Using_CSS_animations)
- [`animation-timeline`](/en-US/docs/Web/CSS/animation-timeline)
