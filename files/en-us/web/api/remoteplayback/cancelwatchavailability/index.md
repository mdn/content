---
title: RemotePlayback.cancelWatchAvailability()
slug: Web/API/RemotePlayback/cancelWatchAvailability
page-type: web-api-instance-method
tags:
  - API
  - Method
  - Reference
  - cancelWatchAvailability
  - RemotePlayback
browser-compat: api.RemotePlayback.cancelWatchAvailability
---
{{DefaultAPISidebar("Remote Playback API")}}

The **`cancelWatchAvailability()`** method of the {{domxref("RemotePlayback")}} interface cancels the request to watch for one or all available devices.

## Syntax

```js
cancelWatchAvailability()
cancelWatchAvailability(id)
```

### Parameters

- `id` {{optional_inline}}

  - : The `callbackId` of a particular remote playback device.

    If a `callbackId` of a specific device is passed in, then that device will be removed from the list of watched devices. Otherwise, the whole list will be cleared.

### Return value

A {{jsxref("Promise")}} that resolves with `undefined`.

### Exceptions

- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if {{domxref("HTMLMediaElement.disableRemotePlayback","disableRemotePlayback")}} is `true` for the media element.
- `NotFoundError` {{domxref("DOMException")}}
  - : Thrown if an `id` is passed but it does not match any available `callbackId`.

## Examples

Once a remote playback device has been identified and is connected, the monitoring of available devices can be stopped using `cancelWatchAvailability().`

```js
function switchToRemoteUI() {
  // Indicate that the state is 'connecting' or 'connected' to the user.
  // For example, hide the video element as only controls are needed.
  videoElem.style.display = "none";

  // Stop monitoring the availability of remote playback devices.
  videoElem.remote.cancelWatchAvailability();
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
