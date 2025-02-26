---
title: "WebSocketStream: url property"
short-title: url
slug: Web/API/WebSocketStream/url
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.WebSocketStream.url
---

{{APIRef("WebSockets API")}}{{SeeCompatTable}}{{AvailableInWorkers}}

The **`url`** read-only property of the
{{domxref("WebSocketStream")}} interface returns the URL of the WebSocket server that the `WebSocketStream` instance was created with.

## Value

A string.

## Examples

```js
const wss = new WebSocketStream("wss://example.com/wss");

// Logs "example.com/wss" to the console
console.log(wss.url);
```

## Specifications

Not currently a part of any specification. See https://github.com/whatwg/websockets/pull/48 for standardization progress.

## Browser compatibility

{{Compat}}

## See also

- [WebSocketStream: integrating streams with the WebSocket API](https://developer.chrome.com/docs/capabilities/web-apis/websocketstream), developer.chrome.com (2020)
