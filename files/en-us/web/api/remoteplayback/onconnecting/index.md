---
title: RemotePlayback.onconnecting
slug: Web/API/RemotePlayback/onconnecting
tags:
  - API
  - Property
  - Reference
  - onconnecting
  - RemotePlayback
browser-compat: api.RemotePlayback.onconnecting
---
{{DefaultAPISidebar("Remote Playback API")}}

The **`onconnecting`** event handler of the {{domxref("RemotePlayback")}} interface processes the events fired when the user agent initiates remote playback.

## Syntax

```js
RemotePlayback.onconnecting = function;
RemotePlayback.addEventListener('connecting', function);
```

## Example

In the following example the value of {{domxref("RemotePlayback.state")}} is printed to the console when the user agent initiates a connection.

```js
RemotePlayback.onconnecting = function() {
  console.log(RemotePlayback.state);
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
