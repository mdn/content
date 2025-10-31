---
title: scroll()
slug: Web/CSS/animation-timeline/scroll
page-type: css-function
browser-compat: css.properties.animation-timeline.scroll
sidebar: cssref
---

The **`scroll()`** [CSS function](/en-US/docs/Web/CSS/CSS_values_and_units/CSS_value_functions) can be used to define the scroller and axis of an [anonymous scroll progress timeline](/en-US/docs/Web/CSS/CSS_scroll-driven_animations/Timelines#anonymous_scroll_progress_timelines).

## Syntax

```css
/* No arguments */
animation-timeline: scroll();

/* <scroller> argument only */
animation-timeline: scroll(nearest);
animation-timeline: scroll(root);
animation-timeline: scroll(self);

/*`<axis>` argument only */
animation-timeline: scroll(block);
animation-timeline: scroll(inline);
animation-timeline: scroll(y);
animation-timeline: scroll(x);

/* <scroller> and <axis> */
animation-timeline: scroll(block nearest);
animation-timeline: scroll(inline root);
animation-timeline: scroll(x self);
```

### Parameters

- `<scroller>`
  - : The scroller element that will provide the scroll progress timeline. Valid values include:
    - `nearest`
      - : The nearest ancestor of the current element that has scrollbars on either axis. This is the default value.
    - `root`
      - : The root element of the document.
    - `self`
      - : The current element itself.

- `<axis>`
  - : An {{ cssxref("axis") }} keyword value describing the direction, or axis, of the scrollport that controls the scroll-driven animation. The default value is `block`.

## Description

The `scroll()` CSS function can be used as a singe animation timeline value within the comma-separated {{cssxref("animation-timeline")}} property to specify a scroll progress timeline for a {{cssxref("@keyframes")}} animation. It defines the scrollable element (_scroller_) and scrollbar axis that will provide the animation timeline.

By default, `scroll()` references the `block` axis of the `nearest` ancestor scroll container, but these defaults can be modified by the arguments passed by the function. The scroller and axis values can be specified in any order. The following five declarations are equivalent:

```css
animation-timeline: scroll();
animation-timeline: scroll(block);
animation-timeline: scroll(nearest);
animation-timeline: scroll(block nearest);
animation-timeline: scroll(nearest block);
```

The scroll progress timeline is progressed through by scrolling the scroller horizontally or vertically, depending on the `<axis>` and [writing mode](/en-US/docs/Web/CSS/CSS_writing_modes/Writing_mode_systems). If the indicated axis does not contain a scrollbar, then the animation timeline will be inactive.

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

> [!NOTE]
> `block` and `nearest` are actually the default parameter values, so we could have used just `scroll()`.

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

- [Using CSS animations](/en-US/docs/Web/CSS/CSS_animations/Using_CSS_animations)
- [CSS animations](/en-US/docs/Web/CSS/CSS_animations) module
- [CSS scroll-driven animations](/en-US/docs/Web/CSS/CSS_scroll-driven_animations) module
- {{domxref("ScrollTimeline")}}
- [Web Animations API](/en-US/docs/Web/API/Web_Animations_API)
