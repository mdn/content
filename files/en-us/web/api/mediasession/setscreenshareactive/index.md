---
title: "MediaSession: setScreenshareActive() method"
short-title: setScreenshareActive()
slug: Web/API/MediaSession/setScreenshareActive
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.MediaSession.setScreenshareActive
---

{{APIRef("Media Session API")}}{{SeeCompatTable}}

The **`setScreenshareActive()`** method of the {{domxref("MediaSession")}} interface is used to indicate to the user agent whether the user's screenshare is considered to be active.

Call this method on the `navigator` object's {{domxref("navigator.mediaSession", "mediaSession")}} object.

Note that the status of the screenshare is not tracked in the {{domxref("MediaSession")}} itself, but must be tracked separately.

## Syntax

```js-nolint
setScreenshareActive(active)
```

### Parameters

- `active`
  - : A boolean indicating whether the screenshare is considered active or not.

### Return value

None ({{jsxref("undefined")}}).

## Examples

Below is an example of updating the screenshare active state of the current
{{domxref('MediaSession')}}, as well as listening to requests to change the screenshare status with {{domxref("MediaSession.setActionHandler", "setActionHandler()")}}.

```js
let screenshareActive = false;

navigator.mediaSession.setCameraActive(cameraActive);

navigator.mediaSession.setActionHandler("togglescreenshare", () => {
  screenshareActive = !screenshareActive;
  navigator.mediaSession.setCameraActive(screenshareActive);
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
