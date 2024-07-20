---
title: scroll-timeline
slug: Web/CSS/scroll-timeline
page-type: css-shorthand-property
status:
  - experimental
browser-compat: css.properties.scroll-timeline
---

{{CSSRef}}{{SeeCompatTable}}

The **`scroll-timeline`** [CSS](/en-US/docs/Web/CSS) [shorthand property](/en-US/docs/Web/CSS/Shorthand_properties) is used to define a _named scroll progress timeline_, which is progressed through by scrolling a scrollable element (_scroller_) between top and bottom (or left and right). `scroll-timeline` is set on the scroller that will provide the timeline. The starting scroll position represents 0% progress and the ending scroll position represents 100% progress. If the 0% position and 100% position coincide (i.e., the scroll container has no overflow to scroll), the timeline is inactive.

`scroll-timeline` can contain two constituent values — a name for the named scroll progress timeline, and an optional scroll axis value.

The name is then referenced in an [`animation-timeline`](/en-US/docs/Web/CSS/animation-timeline) declaration to indicate the container's element that is used to drive the progress of the animation through the scrolling action.

> **Note:** If the scroller does not overflow its container in the axis dimension or if the overflow is hidden or clipped, no timeline will be created.

## Constituent properties

This property is a shorthand for the following CSS properties:

- [`scroll-timeline-name`](/en-US/docs/Web/CSS/scroll-timeline-name)
- [`scroll-timeline-axis`](/en-US/docs/Web/CSS/scroll-timeline-axis)

## Syntax

```css
/* two values: one each for scroll-timeline-name and scroll-timeline-axis */
scroll-timeline: --custom_name_for_timeline block;
scroll-timeline: --custom_name_for_timeline inline;
scroll-timeline: --custom_name_for_timeline y;
scroll-timeline: --custom_name_for_timeline x;
scroll-timeline: none block;
scroll-timeline: none inline;
scroll-timeline: none y;
scroll-timeline: none x;

/* one value: scroll-timeline-name */
scroll-timeline: none;
scroll-timeline: --custom_name_for_timeline;
```

The `scroll-timeline` shorthand property can be applied to a container element as a combination of the `<scroll-timeline-name>` and `<scroll-timeline-axis>` values. At least one of the values must be specified. If both the values are specified, the order followed must be the `<scroll-timeline-name>` value followed by the `<scroll-timeline-axis>` value.

> **Note:** `<scroll-timeline-name>`s must be [`<dashed-ident>`](/en-US/docs/Web/CSS/dashed-ident) values, which means they must start with `--`. This helps avoid name clashes with standard CSS keywords.

### Values

- `<scroll-timeline-name>`

  - : See [`scroll-timeline-name`](/en-US/docs/Web/CSS/scroll-timeline-name).

- `<scroll-timeline-axis>`
  - : See [`scroll-timeline-axis`](/en-US/docs/Web/CSS/scroll-timeline-axis). The default value is `block`.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Creating a named scroll progress timeline animation

In this example, a scroll timeline named `--squareTimeline` is defined using the `scroll-timeline-name` property on the element with the ID `container`.
This is then applied to the animation on the `#square` element using `animation-timeline: --squareTimeline`.

#### HTML

The HTML for the example is shown below.

```html
<div id="container">
  <div id="square"></div>
  <div id="stretcher"></div>
</div>
```

#### CSS

The CSS for the container sets it as the source of a scroll timeline named `--squareTimeline` using the `scroll-timeline` property.
It also sets the scrollbar to use for the timeline as the vertical scrollbar (this is not actually needed as it is the default).

The height of the container is set to `300px`, and the container is also set to create a vertical scrollbar if it overflows (the CSS `height` rule on the `stretcher` element below does make the content overflow its container).

```css
#container {
  height: 300px;
  overflow-y: scroll;
  scroll-timeline: --squareTimeline y;
  /* Firefox supports the older "vertical" syntax */
  scroll-timeline: --squareTimeline vertical;
  position: relative;
}
```

The CSS below defines a square that rotates according to the timeline provided by the `animation-timeline` property, which is set to the `--squareTimeline` timeline named above.

```css
#square {
  background-color: deeppink;
  width: 100px;
  height: 100px;
  animation-name: rotateAnimation;
  animation-duration: 1ms; /* Firefox requires this to apply the animation */
  animation-timeline: --squareTimeline;
  position: absolute;
  bottom: 0;
}

#stretcher {
  height: 600px;
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

The `stretcher` CSS rule sets the block height to `600px`, which creates content that overflows the container element, thereby creating scroll bars.
Without this element, the content would not overflow the container, there would be no scrollbar, and hence no scroll timeline to associate with the animation timeline.

#### Result

Scroll the vertical bar to see the square animate as you scroll.

{{EmbedLiveSample("Creating_a_named_scroll_progress_timeline_animation", "100%", "320px")}}

The square animates as you scroll, and the animation duration when using `scroll-timeline` depends on the scroll speed (nevertheless, the `animation-duration` property has been defined so you can make out the scroll-driven animation).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`animation-timeline`](/en-US/docs/Web/CSS/animation-timeline)
- [`scroll-timeline-axis`](/en-US/docs/Web/CSS/scroll-timeline-axis), [`scroll-timeline-name`](/en-US/docs/Web/CSS/scroll-timeline-name)
- {{cssxref("timeline-scope")}}
- [CSS scroll-driven animations](/en-US/docs/Web/CSS/CSS_scroll-driven_animations)
