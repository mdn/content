---
title: Device Posture API
slug: Web/API/Device_Posture_API
page-type: web-api-overview
browser-compat: api.DevicePosture
---

{{DefaultAPISidebar("Device Posture API")}}{{seecompattable}}

The **Device Posture API** allows developers to create user interfaces that adapt to a foldable device's posture and respond to posture changes.

## Concepts and usage

Foldable devices present unique design challenges to developers — they can be used like a regular flat screen or like a book. In addition, some of them feature a single folded screen, and some of them feature two screens with a hinged join in the middle. Care must be taken to ensure that content is not hidden by the physical join, or rendered difficult to read due to close proximity to the central fold.

The Device Posture API defines **postures**, which indicate the current physical state of a foldable device. The current available postures are:

- `continuous`
  - : Indicates a flat screen — this can include a foldable device while it is being used flat, a seamless curved display, or a standard desktop, laptop, tablet or mobile screen.
    ![A selection of flat screens including mobiles and tablets, and a seamless curved display](continuous-screens.png)
- `folded`
  - : Indicates a folded screen — this can include a foldable device being used in a book or laptop posture.
    ![A selection of folded screens, including foldable mobiles and tablets in book and laptop postures](folded-screens.png)

The Device Posture API includes features enabling you to run scripts and vary layouts depending on current device posture and posture changes:

- The {{domxref("DevicePosture", "Navigator.devicePosture")}} object, which contains a {{domxref("DevicePosture.type", "type")}} property containing the device's current posture and a {{domxref("DevicePosture.change_event", "change")}} event that fires when the device posture changes.
- The [`device-posture`](/en-US/docs/Web/CSS/@media/device-posture) [media query](/en-US/docs/Web/CSS/CSS_media_queries) feature, which applies CSS conditionally depending on what posture the device is currently in.

## CSS features

- The [`device-posture`](/en-US/docs/Web/CSS/@media/device-posture) [media query](/en-US/docs/Web/CSS/CSS_media_queries) feature
  - : Detects the device's current posture.

## Interfaces

- {{domxref("DevicePosture")}}
  - : Represents the device's posture, providing access to the current posture `type` and a `change` event that fires on posture change.

### Extensions to other interfaces

- {{domxref("Navigator.devicePosture")}}
  - : The entry point for the Device Posture API — returns the browser's `DevicePosture` object.

## Examples

You can find a complete example showing all of the features in action in the [Device Posture API demo](https://mdn.github.io/dom-examples/device-posture-api/).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Origin trial for Foldable APIs](https://developer.chrome.com/blog/foldable-apis-ot) on developer.chrome.com (2024)
