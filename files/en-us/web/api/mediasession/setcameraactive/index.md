---
title: "MediaSession: setCameraActive() method"
short-title: setCameraActive()
slug: Web/API/MediaSession/setCameraActive
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.MediaSession.setCameraActive
---

{{APIRef("Media Session API")}}{{SeeCompatTable}}

The {{domxref("MediaSession")}} method **`setCameraActive()`** is used to indicate to the user agent whether the user's camera is considered to be active.

Call this method on the `navigator` object's
{{domxref("navigator.mediaSession", "mediaSession")}} object.

Note that the status of the camera is not tracked in the {{domxref("MediaSession")}} itself, but must be tracked separately.

## Syntax

```js-nolint
setCameraActive(active)
```

### Parameters

- `active`
  - : A boolean indicating whether the camera is considered active or not.

### Return value

None ({{jsxref("undefined")}}).

## Examples

Below is an example of updating the camera active state of the current
{{domxref('MediaSession')}}, as well as listening to requests to change the camera status with {{domxref("MediaSession.setActionHandler", "setActionHandler()")}}.

```js
let cameraActive = false;

navigator.mediaSession.setCameraActive(cameraActive);

navigator.mediaSession.setActionHandler("togglecamera", () => {
  cameraActive = !cameraActive;
  navigator.mediaSession.setCameraActive(cameraActive);
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
