---
title: vertical-viewport-segments
slug: Web/CSS/@media/vertical-viewport-segments
page-type: css-media-feature
browser-compat: css.at-rules.media.vertical-viewport-segments
sidebar: cssref
---

The **`vertical-viewport-segments`** [CSS](/en-US/docs/Web/CSS) [media feature](/en-US/docs/Web/CSS/@media#media_features) detects whether the device has a specified number of viewport segments laid out vertically.

This media feature is part of the [Viewport segments API](/en-US/docs/Web/API/Viewport_segments_API), which can be used to create responsive designs that work well on devices with a single display separated out into logically separate viewport segments, such as foldable or hinged devices.

## Syntax

The `vertical-viewport-segments` feature is specified as an integer of `1` or greater, representing the number of vertical viewport segments the device has.

- The value will usually be `2`, as foldable devices generally have two viewport segments (arranged either horizontally or vertically).
- A value of `1` doesn't serve a useful purpose — you can use this to detect a viewport with only one vertical segment, but this is the standard case for devices anyway, and you can apply CSS to this case without using any media queries.
- Future devices may have more than two screens arranged in a column (or row), meaning that values of greater than `2` may be useful in the future.

## Examples

### Basic `vertical-viewport-segments` usage

In this snippet we use a `vertical-viewport-segments` media query to handle the case of foldable devices where the segments are top-to-bottom.

We set the top container to have a height equal to the top segment height (`env(viewport-segment-height 0 0)`; see [viewport segment environment variables](/en-US/docs/Web/CSS/env#viewport-segment-width) for more details), and the bottom container to have a height equal to the bottom segment height (`env(viewport-segment-height 0 1)`).

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

See our [Viewport segment API demo](https://mdn.github.io/dom-examples/viewport-segment-api/) for a full working demo ([source code](https://github.com/mdn/dom-examples/tree/main/viewport-segment-api)). Also check out [Using the Viewport segments API](/en-US/docs/Web/API/Viewport_segments_API/Using) for a full demo explanation.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("@media/horizontal-viewport-segments", "horizontal-viewport-segments")}} `@media` feature
- [Viewport segments API](/en-US/docs/Web/API/Viewport_segments_API)
- [Origin trial for Foldable APIs](https://developer.chrome.com/blog/foldable-apis-ot) on developer.chrome.com (2024)
