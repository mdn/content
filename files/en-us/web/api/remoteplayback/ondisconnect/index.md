---
title: RemotePlayback.ondisconnect
slug: Web/API/RemotePlayback/ondisconnect
tags:
  - API
  - Property
  - Reference
  - ondisconnect
  - RemotePlayback
browser-compat: api.RemotePlayback.ondisconnect
---
{{DefaultAPISidebar("Remote Playback API")}}

The **`ondisconnect`** event handler of the {{domxref("RemotePlayback")}} interface processes the events fired when the user agent disconnects from the remote device.

## Syntax

```js
RemotePlayback.ondisconnect = function;
RemotePlayback.addEventListener('disconnect', function);
```

## Example

In the following example the value of {{domxref("RemotePlayback.state")}} is printed to the console when the user agent disconnects from the remote device.

```js
RemotePlayback.disconnect = function() {
  console.log(RemotePlayback.state);
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
