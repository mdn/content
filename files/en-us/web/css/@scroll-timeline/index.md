---
title: "@scroll-timeline"
slug: Web/CSS/@scroll-timeline
tags:
  - Animations
  - Scroll
  - At-rule
  - CSS
  - Reference
  - Experimental
browser-compat: css.at-rules.scroll-timeline
---

{{CSSRef}}{{SeeCompatTable}}

The **`@scroll-timeline`** CSS [at-rule](/en-US/docs/Web/CSS/At-rule) defines an [`AnimationTimeline`](/en-US/docs/Web/API/AnimationTimeline) whose time values are determined by scrolling progress within a scroll container and not by minutes or seconds. Once specified, a scroll timeline is associated with a [CSS Animation](/en-US/docs/Web/CSS/CSS_Animations) by using the `animation-timeline` property.

## Syntax

```css
@scroll-timeline moveTimeline {
  source: auto;
  orientation: vertical;
  scroll-offsets: 0px, 500px;
}
```

### Values

- {{cssxref("custom-ident")}}

  - : A name identifying the scroll timeline. This name is used when specifying the scroll timeline with the [`animation-timeline`](/en-US/docs/Web/CSS/animation-timeline) property.

- `source` {{Experimental_Inline}}

  - : The scrollable element whose scrolling position drives the progress of the timeline. Can be:

    - `auto`

      - : The `Document` associated with the current global [Window object](/en-US/docs/Web/API/Window).

    - `selector("id-selector")`

      - : The scroll container identified by an element's id.

    - `none`
      - : No scroll container specified.

- `orientation` {{Experimental_Inline}}

  - : The scroll timeline's orientation:

    - `auto`

      - : Defaults to `vertical`

    - `block`

      - : Uses the scroll position along the block axis, conforming to writing mode and directionality.

    - `inline`

      - : Uses the scroll position along the inline axis, conforming to writing mode and directionality.

    - `horizontal`

      - : Uses the horizontal scroll position, regardless of writing mode or directionality.

    - `vertical`
      - : Uses the vertical scroll position, regardless of writing mode or directionality.

- `scroll-offsets` {{Experimental_Inline}}

  - : Determines the scroll timeline's scroll offsets:

    - `none`
      - : No scroll offsets specified.
    - `<length-percentage>`
      - : A comma separated list of [`<length-percentage>`](/en-US/docs/Web/CSS/length-percentage) values.
    - `<element-offset>`
      - : An element's position determines the scroll offset.

## Description

To use the scroll timeline, create a `@scroll-timeline` rule, which is used by the {{cssxref("animation-timeline")}} property to match an animation's timeline to its timeline declaration.

Each `@scroll-timeline` rule includes properties to determine the source, orientation and scroll-offsets of the scroll timeline.

### Scroll offsets

The `scroll-offset` property determines where, within the scrolling, the animation should occur. This can be set in one of three ways:

1. By using the CSS keyword `none`, which means no `scroll-offset` is specified.

2. It can be determined by a comma-separated list of [`<length-percentage>`](/en-US/docs/Web/CSS/length-percentage) values. Each value is mapped against the {{cssxref('animation-duration')}}. For instance, if an `animation-duration` is set to `2s` and the scroll offset to `0px, 30px, 100px`, then at 1s the scroll offset would be 30px. Typically, for a smooth scroll animation, you'd use two values here, such as `0px, 100px`.

3. The third way of determining a scroll offset is to use an element offset. This means you specify elements within the page, the locations of which determine the scroll timeline and which edge of these elements to use. Specifying elements is done using the `selector()` function, which receives an element's id. Edge is determined by keywords `start` or `end`. An optional threshold value between `0–1` can be used to represent the percentage of the element expected to be visible in the `source`.

```css
@scroll-timeline element-move {
  source: auto;
  orientation: vertical;
  scroll-offsets: selector(#myElement) start 0, selector(#myElement) end 0;
}
```

## Formal syntax

```
@scroll-timeline <timeline-name> { <declaration-list> }
```

## Examples

### Simple example

This example shows a square, which rotates as its container is scrolled vertically. We create an element (`#container`) with a fixed height to allow scroll. This is our `source` element.

Inside this container, we create another element (`#square`), which is styled appropriately to look like a square. This element has a rotation animation applied, using the {{cssxref('@keyframes')}} rule and `animation-name` property.

We create an `@scroll-timeline` called `squareTimeline`, setting the `source` as the container, the `orientation` as `vertical` and the `scroll-offset` to start at `0px` and end at `300px` (the height of our container). Then we apply this to the square using the `scroll-timeline` property.

#### HTML

```html
<div id="container">
  <div id="square"></div>
</div>
```

#### CSS

```css
#container {
  height: 300px;
}

#square {
  background-color: deeppink;
  width: 100px;
  height: 100px;
  margin-top: 100px;
  animation-name: rotateAnimation;
  animation-duration: 3s;
  animation-direction: alternate;
  animation-timeline: squareTimeline;
}

@scroll-timeline squareTimeline {
  source: selector("#container");
  orientation: "vertical";
  scroll-offsets: 0px, 300px;
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

#### Result

{{EmbedLiveSample("Simple_example")}}

## Browser compatibility

{{Compat}}

## See also

- [CSS animations](/en-US/docs/Web/CSS/CSS_Animations)
- [Practical use cases for scroll-linked animations in CSS with scroll timelines](https://css-tricks.com/practical-use-cases-for-scroll-linked-animations-in-css-with-scroll-timelines/)
