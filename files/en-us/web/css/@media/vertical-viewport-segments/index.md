---
title: vertical-viewport-segments
slug: Web/CSS/@media/vertical-viewport-segments
page-type: css-media-feature
browser-compat: css.at-rules.media.vertical-viewport-segments
sidebar: cssref
---

The **`vertical-viewport-segments`** [CSS](/en-US/docs/Web/CSS) [media feature](/en-US/docs/Web/CSS/@media#media_features) detects whether the device has a specified number of viewport segments laid out vertically (top to bottom).

Related to the [Viewport Segments API](/en-US/docs/Web/API/Viewport_segments_API), the `vertical-viewport-segments` feature can be used to create responsive designs that work well on multi-viewport devices — devices with a display that is divided into logically separate viewport segments, such as foldable or hinged devices.

## Syntax

The `vertical-viewport-segments` feature is specified as an {{cssxref("integer")}} value of `1` or greater, representing the number of vertical viewport segments the device has.

- The value will be `1` for:
  - A non-foldable device (for example, a standard single-screen smartphone or tablet).
  - A foldable device that is either unfolded or closed (in the [`continuous` device posture](/en-US/docs/Web/API/Device_Posture_API#continuous)).
  - A two-screen hinged device or a foldable device that is currently folded and is oriented horizontally so the segments are side by side.
- The value will be `2` for a two-screen hinged device or a foldable device that is currently folded (in the [`folded` device posture](/en-US/docs/Web/API/Device_Posture_API#folded)) and is oriented vertically so the segments are on top of one another.
- The value may be greater than `2` for foldable devices with more than one fold.

## Examples

### Basic `vertical-viewport-segments` usage

In this snippet we use a `vertical-viewport-segments` media query to handle the case of foldable devices where the segments are top-to-bottom.

We set the top container to have a height equal to the top segment height (`env(viewport-segment-height 0 0)`), and the bottom container to have a height equal to the bottom segment height (`env(viewport-segment-height 0 1)`).

To calculate how much height the fold takes up in between the two, we subtract the bottom edge offset of the top container from the top edge offset of the bottom container (`calc(env(viewport-segment-top 0 1) - env(viewport-segment-bottom 0 0));`).

```css
.wrapper {
  height: 100%;
  display: flex;
}

@media (vertical-viewport-segments: 2) {
  .wrapper {
    flex-direction: column;
  }

  .list-view {
    height: env(viewport-segment-height 0 0);
  }

  .fold {
    width: 100%;
    height: calc(
      env(viewport-segment-top 0 1) - env(viewport-segment-bottom 0 0)
    );
    background-color: black;
  }

  .detail-view {
    height: env(viewport-segment-height 0 1);
  }
}
```

See our [Viewport segment API demo](https://mdn.github.io/dom-examples/viewport-segments-api/) for a full working demo ([source code](https://github.com/mdn/dom-examples/tree/main/viewport-segments-api)). Also check out [Using the Viewport Segments API](/en-US/docs/Web/API/Viewport_segments_API/Using) for a full demo explanation.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("@media/horizontal-viewport-segments", "horizontal-viewport-segments")}} `@media` feature
- [Viewport Segments API](/en-US/docs/Web/API/Viewport_segments_API)
- [Origin trial for Foldable APIs](https://developer.chrome.com/blog/foldable-apis-ot) via developer.chrome.com (2024)
