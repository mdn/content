---
title: scroll()
slug: Web/CSS/animation-timeline/scroll
page-type: css-function
status:
  - experimental
browser-compat: css.properties.animation-timeline.scroll
---

{{CSSRef}}{{SeeCompatTable}}

The **`scroll()`** [CSS function](/en-US/docs/Web/CSS/CSS_Functions) can be used with {{cssxref("animation-timeline")}} to indicate an ancestor element and scrollbar axis that will provide the anonymous scroll timeline for animating the current element.

The function is used to specify whether the element that provides the scroll timeline is the root element, or the nearest ancestor element that has any scrollbars.
It also sets which scroll axis provides the scroll timeline.

Note that if the indicated axis does not contain a scrollbar then the animation timeline will be inactive (have zero progress).

## Syntax

```css
animation-timeline: scroll();

/* values for both axis and scroller element */
animation-timeline: scroll(block nearest); /* Default */
animation-timeline: scroll(inline nearest);
animation-timeline: scroll(vertical nearest);
animation-timeline: scroll(horizontal nearest);
animation-timeline: scroll(block root);
animation-timeline: scroll(inline root);
animation-timeline: scroll(vertical root);
animation-timeline: scroll(horizontal root);

/* values for either axis or scroller element */
animation-timeline: scroll(nearest);
animation-timeline: scroll(root);
animation-timeline: scroll(inline);
animation-timeline: scroll(vertical);
animation-timeline: scroll(vertical);
animation-timeline: scroll(horizontal);
```

### Parameters

Allowed values for indicating the element that will provide the scroll timeline:

- `nearest`
  - : (Default) The first parent of this element that has scrollbars in either axis.
- `root`
  - : The root element.

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

### Formal syntax

{{CSSSyntax}}

## Examples

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
- [`scroll-timeline-axis`](/en-US/docs/Web/CSS/scroll-timeline-axis)
- [`scroll-timeline`](/en-US/docs/Web/CSS/scroll-timeline)
- [`animation-timeline`](/en-US/docs/Web/CSS/animation-timeline)
