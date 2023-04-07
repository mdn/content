---
title: "CaptureController: CaptureController() constructor"
short-title: CaptureController()
slug: Web/API/CaptureController/CaptureController
page-type: web-api-constructor
status:
  - experimental
browser-compat: api.CaptureController.setFocusBehavior
---

{{APIRef("Screen Capture API")}}{{SeeCompatTable}}

The {{domxref("CaptureController")}} constructor creates a new `CaptureController` object instance.

## Syntax

```js-nolint
CaptureController()
```

### Parameters

None.

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
