---
title: CaptureController
slug: Web/API/CaptureController
page-type: web-api-interface
status:
  - experimental
browser-compat: api.CaptureController
---

{{APIRef("Screen Capture API")}}{{SeeCompatTable}}

The **`CaptureController`** interface provides methods that can be used to further manipulate a capture session separate from its initiation via {{domxref("MediaDevices.getDisplayMedia()")}}.

A `CaptureController` object is associated with a capture session by passing it into a {{domxref("MediaDevices.getDisplayMedia", "getDisplayMedia()")}} call as the value of the options object's `controller` property.

## Constructor

- {{ domxref("CaptureController.CaptureController", "CaptureController()") }} {{Experimental_Inline}}
  - : Creates a new `CaptureController` object instance.

## Instance methods

- {{ domxref("CaptureController.setFocusBehavior", "setFocusBehavior()") }} {{Experimental_Inline}}
  - : Controls whether the captured tab or window will be focused or whether the focus will remain with the tab containing the capturing app.

## Examples

```js
// Create a new CaptureController instance
const controller = new CaptureController();

// Prompt the user to share a tab, window, or screen.
const stream = await navigator.mediaDevices.getDisplayMedia({ controller });

// Query the displaySurface value of the captured video track
const [track] = stream.getVideoTracks();
const displaySurface = track.getSettings().displaySurface;

if (displaySurface == "browser") {
  // Focus the captured tab.
  controller.setFocusBehavior("focus-captured-surface");
} else if (displaySurface == "window") {
  // Do not move focus to the captured window.
  // Keep the capturing page focused.
  controller.setFocusBehavior("no-focus-change");
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Screen Capture API](/en-US/docs/Web/API/Screen_Capture_API)
- {{domxref("MediaDevices.getDisplayMedia()")}}
- [Better screen sharing with Conditional Focus](https://developer.chrome.com/docs/web-platform/conditional-focus/)
