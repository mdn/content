---
title: RemotePlayback.onconnect
slug: Web/API/RemotePlayback/onconnect
tags:
  - API
  - Property
  - Reference
  - onconnect
  - RemotePlayback
browser-compat: api.RemotePlayback.onconnect
---
{{DefaultAPISidebar("Remote Playback API")}}

The **`onconnect`** event handler of the {{domxref("RemotePlayback")}} interface processes the events fired when the user agent connects to the remote device.

## Syntax

```js
RemotePlayback.onconnect = function;
RemotePlayback.addEventListener('connect', function);
```

## Example

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
