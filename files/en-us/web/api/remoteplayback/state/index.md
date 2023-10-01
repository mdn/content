---
title: "RemotePlayback: state property"
short-title: state
slug: Web/API/RemotePlayback/state
page-type: web-api-instance-property
browser-compat: api.RemotePlayback.state
---

{{DefaultAPISidebar("Remote Playback API")}}

The **`state`** read-only property of the {{domxref("RemotePlayback")}} interface returns the current state of the `RemotePlayback` connection.

## Value

One of:

- `"connecting"`
  - : The user agent is attempting to initiate remote playback with the selected device.
- `"connected"`
  - : The transition from local to remote playback has happened. All commands will now take place on the remote device.
- `"disconnected"`
  - : The remote playback has not been initiated, has failed to initiate, or has been stopped.

## Examples

In the following example the value of {{domxref("RemotePlayback.state")}} is printed to the console when the user agent successfully connects.

```js
RemotePlayback.onconnect = () => {
  console.log(RemotePlayback.state);
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
