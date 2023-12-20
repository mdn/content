---
title: scroll-timeline-name
slug: Web/CSS/scroll-timeline-name
page-type: css-property
status:
  - experimental
browser-compat: css.properties.scroll-timeline-name
---

{{CSSRef}}{{SeeCompatTable}}

The **`scroll-timeline-name`** [CSS](/en-US/docs/Web/CSS) property is used to define the name of a _named scroll progress timeline_, which is progressed through by scrolling a scrollable element (_scroller_) between top and bottom (or left and right). `scroll-timeline-name` is set on the scroller that will provide the timeline.

The name is then referenced in an [`animation-timeline`](/en-US/docs/Web/CSS/animation-timeline) declaration to indicate the container's element that is used to drive the progress of the animation through the scrolling action.

> **Note:** If the element does not overflow its container in the axis dimension or if the overflow is hidden or clipped, no timeline will be created.

The {{cssxref("scroll-timeline-axis")}} and `scroll-timeline-name` properties can also be set using the [`scroll-timeline`](/en-US/docs/Web/CSS/scroll-timeline) shorthand property.

## Syntax

```css
scroll-timeline-name: none;
scroll-timeline-name: --custom_name_for_timeline;
```

### Values

Allowed values for `scroll-timeline-name` are:

- `none`
  - : The timeline has no name.
- `<dashed-ident>`

  - : An arbitrary custom identifier defining a name for a scroll progress timeline, which can then be referenced in an [`animation-timeline`](/en-US/docs/Web/CSS/animation-timeline) property.

    > **Note:** [`<dashed-ident>`](/en-US/docs/Web/CSS/dashed-ident) values must start with `--`, which helps avoid name clashes with standard CSS keywords.

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

The CSS for the container sets it as the source of a scroll timeline named `--squareTimeline` using the `scroll-timeline-name` property. No [scrollbar axis](/en-US/docs/Web/CSS/scroll-timeline-axis) is defined here because the vertical axis will be used by default.

The height of the container is set to `300px`, and the container is also set to create a vertical scrollbar if it overflows (the CSS `height` rule on the `stretcher` element below does make the content overflow its container).

```css
#container {
  height: 300px;
  overflow-y: scroll;
  scroll-timeline-name: --squareTimeline;
  position: relative;
}
```

The CSS below defines a square that rotates according to the timeline provided by the `animation-timeline` property, which is set to the `--squareTimeline` timeline named above.

```css
#square {
  background-color: deeppink;
  width: 100px;
  height: 100px;
  margin-top: 100px;
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

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`animation-timeline`](/en-US/docs/Web/CSS/animation-timeline)
- [`scroll-timeline`](/en-US/docs/Web/CSS/scroll-timeline), [`scroll-timeline-axis`](/en-US/docs/Web/CSS/scroll-timeline-axis)
- {{cssxref("timeline-scope")}}
- [CSS scroll-driven animations](/en-US/docs/Web/CSS/CSS_scroll-driven_animations)
