---
title: horizontal-viewport-segments
slug: Web/CSS/@media/horizontal-viewport-segments
page-type: css-media-feature
browser-compat: css.at-rules.media.horizontal-viewport-segments
sidebar: cssref
---

The **`horizontal-viewport-segments`** [CSS](/en-US/docs/Web/CSS) [media feature](/en-US/docs/Web/CSS/@media#media_features) detects whether the device has a specified number of viewport segments laid out horizontally.

This media feature is part of the [Viewport segments API](/en-US/docs/Web/API/Viewport_segments_API), which can be used to create responsive designs that work well on devices with a single display separated out into logically separate viewport segments, such as foldable or hinged devices.

## Syntax

The `horizontal-viewport-segments` feature is specified as an integer of `1` or greater, representing the number of horizontal viewport segments the device has.

- The value will be `2` for a two-screen foldable device that is currently folded (in the [`folded` device posture](/en-US/docs/Web/API/Device_Posture_API#folded)) either horizontally or vertically.
- The value will be `1` for a foldable device that is either unfolded or closed (in the [`continuous` device posture](/en-US/docs/Web/API/Device_Posture_API#continuous)), or a non-foldable device.
- The value may be greater than `2` in future implementations, for foldable devices with more than two screens. Current implementations do not support more than two foldable screens.

## Examples

### Basic `horizontal-viewport-segments` usage

In this snippet we use a `horizontal-viewport-segments` media query to handle the case of foldable devices where the segments are side-by-side.

We set the left container to have a width equal to the left segment width (`env(viewport-segment-width 0 0)`; see [viewport segment environment variables](/en-US/docs/Web/CSS/env#viewport-segment-width) for more details), and the right container to have a width equal to the right segment width (`env(viewport-segment-width 1 0)`).

To calculate how much width the fold takes up in between the two, we subtract the left edge offset of the right container from the right edge offset of the left container (`calc(env(viewport-segment-left 1 0) - env(viewport-segment-right 0 0));`).

```css
.wrapper {
  height: 100%;
  display: flex;
}

@media (horizontal-viewport-segments: 2) {
  .wrapper {
    flex-direction: row;
  }

  .list-view {
    width: env(viewport-segment-width 0 0);
  }

  .fold {
    width: calc(
      env(viewport-segment-left 1 0) - env(viewport-segment-right 0 0)
    );
    background-color: black;
    height: 100%;
  }

  .detail-view {
    width: env(viewport-segment-width 1 0);
  }
}
```

See our [Viewport segment API demo](https://mdn.github.io/dom-examples/viewport-segment-api/) for a full working demo ([source code](https://github.com/mdn/dom-examples/tree/main/viewport-segment-api)). Also check out [Using the Viewport segments API](/en-US/docs/Web/API/Viewport_segments_API/Using) for a full demo explanation.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("@media/vertical-viewport-segments", "vertical-viewport-segments")}} `@media` feature
- [Viewport segments API](/en-US/docs/Web/API/Viewport_segments_API)
- [Origin trial for Foldable APIs](https://developer.chrome.com/blog/foldable-apis-ot) on developer.chrome.com (2024)
