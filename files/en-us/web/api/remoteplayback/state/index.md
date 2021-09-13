---
title: RemotePlayback.state
slug: Web/API/RemotePlayback/state
tags:
  - API
  - Property
  - Reference
  - state
  - RemotePlayback
browser-compat: api.RemotePlayback.state
---
{{DefaultAPISidebar("Remote Playback API")}}

The **`state`** read-only property of the {{domxref("RemotePlayback")}} interface returns the current state of the `RemotePlayback` connection.

## Syntax

```js
let state = RemotePlayback.state;
```

### Value

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
RemotePlayback.onconnect = function() {
  console.log(RemotePlayback.state);
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
