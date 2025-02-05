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

In this example, the `device-posture` media feature detects when a device is in a folded posture, adding a margin based on its [`orientation`](/en-US/docs/Web/CSS/@media/orientation), to create a larger gutter between a device's two panels.

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
