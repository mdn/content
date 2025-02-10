---
title: device-posture
slug: Web/CSS/@media/device-posture
page-type: css-media-feature
status:
  - experimental
browser-compat: css.at-rules.media.device-posture
---

{{CSSRef}}{{seecompattable}}

The **`device-posture`** [CSS](/en-US/docs/Web/CSS) [media feature](/en-US/docs/Web/CSS/@media#media_features) can be used to detect the device's [current posture](/en-US/docs/Web/API/Device_Posture_API), that is, whether the viewport is in a flat (`continuous`) or folded state (`folded`).

## Syntax

The `device-posture` feature is specified as a keyword value chosen from the list below:

- `continuous`
  - : Indicates a flat screen state. Foldable devices are `continuous` while they are flat; either fully opened or fully closed. Non-foldable devices are considered flat and therefore always `continuous` — this includes seamless curved displays and standard desktop, laptop, tablet, and mobile screens.
- `folded`
  - : Indicates a folded screen state. Foldable devices are `folded` while used in a book or laptop posture.

## Examples

In this example, the `device-posture` media feature detects when a device is in a folded posture, adding a margin based on its [`orientation`](/en-US/docs/Web/CSS/@media/orientation) to create a larger gutter between the application's two panels for easier reading.

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

To see the above code in action, view the [Device Posture API demo](https://mdn.github.io/dom-examples/device-posture-api/) on a foldable device if possible. Current browser developer tools enable emulating foldable devices, but don't include emulation of partially folded devices — only fully open or closed devices — so they will always return `continuous`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("DevicePosture")}}
- [Device Posture API](/en-US/docs/Web/API/Device_Posture_API)
- [Using Media Queries](/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [@media](/en-US/docs/Web/CSS/@media)
