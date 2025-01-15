---
title: device-posture
slug: Web/CSS/@media/device-posture
page-type: css-media-feature
browser-compat: css.at-rules.media.device-posture
---

{{CSSRef}}{{seecompattable}}

The **`device-posture`** [CSS](/en-US/docs/Web/CSS) [media feature](/en-US/docs/Web/CSS/@media#media_features) can be used to detect the device's [current posture](/en-US/docs/Web/API/Device_Posture_API).

## Syntax

The `device-posture` feature is specified as a keyword value chosen from the list below:

- `continuous`
  - : Indicates a flat screen posture — this can include a foldable device while it is being used flat, a seamless curved display, or a standard desktop, laptop, tablet or mobile screen.
- `folded`
  - : Indicates a folded screen posture — this can include a foldable device being used in a book or laptop posture.

## Examples

The following snippet is taken from our [Device Posture API test](#) demo. (TBD, FILL IN WHEN IT HAS BEEN APPROVED AND ADDED TO THE DOM-EXAMPLES DEMO). In this demo, we have two panels of equal size, laid out side-by-side on landscape screens and top-to-bottom on portrait screens. We use the `device-posture` media feature to detect when the device is in a folded posture, and add a larger gutter in between the two panels so that the content is less likely to be hidden by the physical join, or rendered difficult to read due to close proximity to the central fold.

```css
@media (device-posture: folded) and (orientation: landscape) {
  .list-view {
    margin-inline-end: 60px;
  }
}

@media (device-posture: folded) and (orientation: portrait) {
  .list-view {
    margin-block-end: 60px;
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("DevicePosture")}}
- [Device Posture API](/en-US/docs/Web/API/Device_Posture_API)
- [Using Media Queries](/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [@media](/en-US/docs/Web/CSS/@media)
