---
title: RemotePlayback.watchAvailability()
slug: Web/API/RemotePlayback/watchAvailability
tags:
  - API
  - Method
  - Reference
  - watchAvailability
  - RemotePlayback
browser-compat: api.RemotePlayback.watchAvailability
---
{{DefaultAPISidebar("Remote Playback API")}}

The **`watchAvailability()`** method of the {{domxref("RemotePlayback")}} interface watches the list of available remote playment devices and returns a {{jsxref("Promise")}} that resolves with the `callbackId` of a remote playback device.

## Syntax

```js
RemotePlayback.watchAvailability(RemotePlaybackAvailabilityCallback);
```

### Parameters

- `RemotePlaybackAvailabilityCallback(boolean)`
  - : A callback that allows the page to obtain the remote playback device availability for the corresponding media element. It is passed a boolean which, if true, indicates that remote playback is available.

### Return value

A {{jsxref("Promise")}} that resolves with an integer. This is the `callbackId` for the identified remote playback device.

### Exceptions

- {{domxref("DOMException")}} `InvalidStateError`
  - : Thrown if {{domxref("HTMLMediaElement.disableRemotePlayback","disableRemotePlayback")}} is `true` for the media element.
- {{domxref("DOMException")}} `NotSupportedError`
  - : Thrown if the user agent is unable to continuously monitor the list of available remote playback devices.

## Examples

In the following example, after checking that there is no currently connected device, `watchAvailability()` is used to watch for remote devices becoming available. [See the working example](https://beaufortfrancois.github.io/sandbox/media/remote-playback.html) (Requires a supported device and a connected remote playback device).

```js
 if (video.remote.state == 'disconnected') {
  video.remote.watchAvailability(handleAvailabilityChange)
  .then(id => {
    log('> Started watching remote device availability: ' + id);
    callbackId = id
  });
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
