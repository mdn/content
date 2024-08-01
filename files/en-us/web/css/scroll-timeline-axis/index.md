---
title: scroll-timeline-axis
slug: Web/CSS/scroll-timeline-axis
page-type: css-property
status:
  - experimental
browser-compat: css.properties.scroll-timeline-axis
---

{{CSSRef}}{{SeeCompatTable}}

The **`scroll-timeline-axis`** [CSS](/en-US/docs/Web/CSS) property is used to specify the scrollbar direction that will be used to provide the timeline for a _named scroll progress timeline_ animation, which is progressed through by scrolling a scrollable element (_scroller_) between top and bottom (or left and right). `scroll-timeline` is set on the scroller that will provide the timeline. See [CSS scroll-driven animations](/en-US/docs/Web/CSS/CSS_scroll-driven_animations) for more details.

> [!NOTE]
> If the scroller element does not overflow its container in the axis dimension or if the overflow is hidden or clipped, no scroll progress timeline will be created.

The `scroll-timeline-axis` and {{cssxref("scroll-timeline-name")}} properties can also be set using the [`scroll-timeline`](/en-US/docs/Web/CSS/scroll-timeline) shorthand property.

## Syntax

```css
/* Logical property values */
scroll-timeline-axis: block;
scroll-timeline-axis: inline;
/* Non-logical property values */
scroll-timeline-axis: y;
scroll-timeline-axis: x;
```

### Values

Allowed values for `scroll-timeline-axis` are:

- `block`
  - : The scrollbar on the block axis of the scroller element, which is the axis in the direction perpendicular to the flow of text within a line. For horizontal writing modes, such as standard English, this is the same as `y`, while for vertical writing modes, it is the same as `x`. This is the default value.
- `inline`
  - : The scrollbar on the inline axis of the scroller element, which is the axis in the direction parallel to the flow of text in a line. For horizontal writing modes, this is the same as `x`, while for vertical writing modes, this is the same as `y`.
- `y`
  - : The scrollbar on the vertical axis of the scroller element.
- `x`
  - : The scrollbar on the horizontal axis of the scroller element.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Defining the axis of the scroll progress timeline

In this example, a scroll progress timeline named `--myScroller` is defined using the `scroll-timeline-name` property on the <code>:root</code> element ({{htmlelement("html")}}). This timeline is then applied to the animation on the element with the `animation` class using `animation-timeline: --myScroller`.

To demonstrate the effect of `scroll-timeline-axis`, a horizontal (non-default) scrollbar is used in this example to drive the animation.

#### HTML

The HTML for the example is shown below.

```html
<body>
  <div class="content"></div>
  <div class="box animation"></div>
</body>
```

#### CSS

The CSS for the container sets the <code>:root</code> as the source of a scroll progress timeline named `--myScroller` using the `scroll-timeline-name` property.
The scroll axis is set using `scroll-timeline-axis: x;` (Chromium) and `scroll-timeline-axis: horizontal;` (Firefox) — this causes the _horizontal scrollbar_ position to determine the animation timeline.

The width of the `.content` element is set to a large value to make it overflow the `:root` element.

Also worth noting is that the `.animation` element has the timeline applied to it using `animation-timeline: --myScroller;`, and it also has an `animation-duration` applied to it so that the example will work in Firefox.

```css
:root {
  scroll-timeline-name: --myScroller;

  /* Chromium supports the new x/y syntax */
  scroll-timeline-axis: x;
  /* Firefox still supports the old horizontal/vertical syntax */
  scroll-timeline-axis: horizontal;
}

body {
  margin: 0;
  overflow-y: hidden;
}

.content {
  height: 100vh;
  width: 2000px;
}

.box {
  width: 100px;
  height: 100px;
  border-radius: 10px;
  background-color: rebeccapurple;
  position: fixed;
  top: 25px;
  left: 25px;
}

.animation {
  animation: rotate-appear;
  animation-timeline: --myScroller;
  animation-duration: 1ms; /* Firefox requires this to apply the animation */
}

@keyframes rotate-appear {
  from {
    rotate: 0deg;
    top: 0%;
  }

  to {
    rotate: 720deg;
    top: 100%;
  }
}
```

#### Result

Scroll the horizontal bar at the bottom to see the square animate as you scroll.

{{EmbedLiveSample("Defining_the_axis_of_the_scroll_progress_timeline", "100%", "200px")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`animation-timeline`](/en-US/docs/Web/CSS/animation-timeline)
- [`scroll-timeline`](/en-US/docs/Web/CSS/scroll-timeline), [`scroll-timeline-name`](/en-US/docs/Web/CSS/scroll-timeline-name)
- {{cssxref("timeline-scope")}}
- [CSS scroll-driven animations](/en-US/docs/Web/CSS/CSS_scroll-driven_animations)
