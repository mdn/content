---
title: "RemotePlayback: prompt() method"
short-title: prompt()
slug: Web/API/RemotePlayback/prompt
page-type: web-api-instance-method
browser-compat: api.RemotePlayback.prompt
---

{{DefaultAPISidebar("Remote Playback API")}}

The **`prompt()`** method of the {{domxref("RemotePlayback")}} interface prompts the user to select an available remote playback device and give permission for the current media to be played using that device.

If the user gives permission, the {{domxref("RemotePlayback.state","state")}} will be set to `connecting` and the user agent will connect to the device to initiate playback.

If the user chooses to instead disconnect from the device, the {{domxref("RemotePlayback.state","state")}} will be set to `disconnected` and user agent will disconnect from this device.

## Syntax

```js-nolint
prompt()
```

### Parameters

None.

### Return value

A {{jsxref("Promise")}} that resolves with `undefined` after the user accepts or rejects the prompt.

### Exceptions

The promise will be rejected with one of the following exceptions:

- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if {{domxref("HTMLMediaElement.disableRemotePlayback","disableRemotePlayback")}} is `true` for the media element.
- `OperationError` {{domxref("DOMException")}}
  - : Thrown if there is already an unsettled promise for this media element, or browsing context.
- `InvalidAccessError` {{domxref("DOMException")}}
  - : Thrown if the user has not interacted with this device recently.
- `NotSupportedError` {{domxref("DOMException")}}
  - : Thrown if the user agent knows that remote playback of this particular media is not feasible.
- `NotFoundError` {{domxref("DOMException")}}
  - : Thrown if remote playback is unavailable.

## Security

[Transient user activation](/en-US/docs/Web/Security/User_activation) is required. The user has to interact with the page or a UI element in order for this feature to work.

## Examples

In the following example the user is prompted to select a remote playback device to play a video.

```js
devicesBtn.onclick = () => {
  // Request the user to select a remote playback device.
  videoElem.remote
    .prompt()
    // Update the UI and monitor the connected state.
    .then(updateRemotePlaybackState);
  // Otherwise, the user cancelled the selection UI or no screens were found.
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
