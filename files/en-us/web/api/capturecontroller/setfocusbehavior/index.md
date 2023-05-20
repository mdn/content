---
title: "CaptureController: setFocusBehavior() method"
short-title: setFocusBehavior()
slug: Web/API/CaptureController/setFocusBehavior
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.CaptureController.setFocusBehavior
---

{{APIRef("Screen Capture API")}}{{SeeCompatTable}}

The {{domxref("CaptureController")}} interface's **`setFocusBehavior()`** method controls whether the captured tab or window will be focused when an associated {{domxref("MediaDevices.getDisplayMedia()")}} {{jsxref("Promise")}} fulfills, or whether the focus will remain with the tab containing the capturing app.

You can set this behavior multiple times before the {{domxref("MediaDevices.getDisplayMedia()")}} call, or once immediately after its `Promise` resolves. After that, the focus behavior is said to be finalized, and can't be changed.

## Syntax

```js-nolint
setFocusBehavior(focusBehavior)
```

### Parameters

- `focusBehavior`
  - : An enumerated value that describes whether the user agent should transfer focus to the captured display surface, or keep the capturing app focused. Possible values are `focus-captured-surface` (transfer focus) and `no-focus-change` (keep focus on the capturing app).

### Return value

None (`undefined`).

### Exceptions

- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if:
    - The capture stream has been stopped.
    - The user chose to share a screen ({{domxref("MediaTrackSettings.displaySurface", "displaySurface")}} type `monitor`) rather than a `browser` tab or `window` — you can't focus a monitor. In this case the exception is thrown after the {{domxref("MediaDevices.getDisplayMedia()")}} `Promise` resolves.
    - Enough time has elapsed after the {{domxref("MediaDevices.getDisplayMedia()")}} `Promise` fulfills that the focus behavior has been finalized.

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
