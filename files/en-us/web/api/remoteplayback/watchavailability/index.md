---
title: "RemotePlayback: watchAvailability() method"
short-title: watchAvailability()
slug: Web/API/RemotePlayback/watchAvailability
page-type: web-api-instance-method
browser-compat: api.RemotePlayback.watchAvailability
---

{{APIRef("Remote Playback API")}}

The **`watchAvailability()`** method of the {{domxref("RemotePlayback")}} interface watches the list of available remote playback devices and returns a {{jsxref("Promise")}} that resolves with the `callbackId` of a remote playback device.

## Syntax

```js-nolint
watchAvailability(RemotePlaybackAvailabilityCallback)
```

### Parameters

- `RemotePlaybackAvailabilityCallback(boolean)`
  - : A callback that allows the page to obtain the remote playback device availability for the corresponding media element. It is passed a boolean which, if true, indicates that remote playback is available.

### Return value

A {{jsxref("Promise")}} that resolves with an integer. This is the `callbackId` for the identified remote playback device.

### Exceptions

- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if {{domxref("HTMLMediaElement.disableRemotePlayback","disableRemotePlayback")}} is `true` for the media element.
- `NotSupportedError` {{domxref("DOMException")}}
  - : Thrown if the user agent is unable to continuously monitor the list of available remote playback devices.

## Examples

In the following example, after checking that there is no currently connected device, `watchAvailability()` is used to watch for remote devices becoming available. [See the working example](https://beaufortfrancois.github.io/sandbox/media/remote-playback.html) (Requires a supported device and a connected remote playback device).

```js
if (video.remote.state === "disconnected") {
  video.remote.watchAvailability(handleAvailabilityChange).then((id) => {
    log(`> Started watching remote device availability: ${id}`);
    callbackId = id;
  });
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
