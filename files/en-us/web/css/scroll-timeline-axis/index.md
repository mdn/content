---
title: scroll-timeline-axis
slug: Web/CSS/scroll-timeline-axis
page-type: css-property
browser-compat: css.properties.scroll-timeline-axis
sidebar: cssref
---

The **`scroll-timeline-axis`** [CSS](/en-US/docs/Web/CSS) property is used to specify the scrollbar direction that will be used to provide the [timeline for a scroll driven animation](/en-us/web/css/css_scroll-driven_animations/timelines) animation, which is progressed through by scrolling a scrollable element (_scroller_).

## Syntax

```css
/* Logical property values */
scroll-timeline-axis: block;
scroll-timeline-axis: inline;

/* Physical property values */
scroll-timeline-axis: y;
scroll-timeline-axis: x;
```

### Values

- `<axis>`
  - : An {{ cssxref("axis") }} keyword value describing the direction, or axis, of the scrollport that controls the scroll-driven animation. The default value is `block`.

## Description

The `scroll-timeline-axis`property specifies which scrollbar will be used to provide the timeline for a [scroll progress timeline](/en-us/web/css/css_scroll-driven_animations/timelines) animation. The value is the `<axis>` of the scrollbar. The `scroll-timeline` property is set on the scroller that will provide the timeline.

If the scroller element does not overflow its container in the axis dimension or if the overflow is hidden or clipped, no scroll progress timeline will be created.

The `scroll-timeline-axis` and {{cssxref("scroll-timeline-name")}} properties can also be set using the [`scroll-timeline`](/en-US/docs/Web/CSS/scroll-timeline) shorthand property.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Defining the axis of the scroll progress timeline

In this example, a scroll progress timeline named `--my-scroller` is defined using the `scroll-timeline-name` property on the <code>:root</code> element ({{htmlelement("html")}}). This timeline is then applied to the animation on the element with the `animation` class using `animation-timeline: --my-scroller`.

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

The CSS for the container sets the <code>:root</code> as the source of a scroll progress timeline named `--my-scroller` using the `scroll-timeline-name` property.
The scroll axis is set using `scroll-timeline-axis: x;` (Chromium) and `scroll-timeline-axis: horizontal;` (Firefox) — this causes the _horizontal scrollbar_ position to determine the animation timeline.

The width of the `.content` element is set to a large value to make it overflow the `:root` element.

Also worth noting is that the `.animation` element has the timeline applied to it using `animation-timeline: --my-scroller;`, and it also has an `animation-duration` applied to it so that the example will work in Firefox.

```css
:root {
  scroll-timeline-name: --my-scroller;

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
  animation-timeline: --my-scroller;
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

- {{cssxref("animation-timeline")}}
- {{cssxref("scroll-timeline")}}
- {{cssxref("scroll-timeline-name")}}
- {{cssxref("timeline-scope")}}
- [Scroll-driven animation timelines](/en-US/docs/Web/CSS/CSS_scroll-driven_animations/Timelines)
- [CSS scroll-driven animations](/en-US/docs/Web/CSS/CSS_scroll-driven_animations) module
