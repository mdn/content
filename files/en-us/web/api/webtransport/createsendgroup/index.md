---
title: "WebTransport: createSendGroup() method"
short-title: createSendGroup()
slug: Web/API/WebTransport/createSendGroup
page-type: web-api-instance-method
browser-compat: api.WebTransport.createSendGroup
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

The **`createSendGroup()`** method of the {{domxref("WebTransport")}} interface creates and returns a {{domxref("WebTransportSendGroup")}}.

## Syntax

```js-nolint
createSendGroup()
```

### Parameters

None.

### Return value

A {{domxref("WebTransportSendGroup")}} object.

### Exceptions

- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if the transport's state is `"closed"` or `"failed"`.

## Description

The **`createSendGroup()`** method creates a new `WebTransportSendGroup` associated with the `WebTransport` object on which it is called.

The `WebTransportSendGroup` is used to group together streams and/or datagrams created on the same `WebTransport`, for the purpose of controlling their relative priority for sending queued bytes.
Within the same group, bytes on higher-priority streams and datagrams are sent before bytes from lower-priority ones.

The returned `WebTransportSendGroup` is not initially associated with any streams or datagrams.
You can associate it with a stream or datagram writable by passing it as the `sendGroup` option when the object is created — see {{domxref("WebTransport.createUnidirectionalStream()")}}, {{domxref("WebTransport.createBidirectionalStream()")}}, and {{domxref("WebTransportDatagramDuplexStream.createWritable()")}} — or by setting the object's `sendGroup` property afterwards — see `WebTransportSendStream.sendGroup` and {{domxref("WebTransportDatagramsWritable.sendGroup")}}.

Different groups are expected to be treated as equals for the purposes of bandwidth allocation — though the precise way bandwidth is divided between groups is implementation-defined.

## Examples

### Basic usage

This example creates a send group, then associates a unidirectional stream and the connection's outgoing datagram stream with it, giving each a `sendOrder` that defines their relative priority.

```js
const sendGroup = transport.createSendGroup();

const stream = await transport.createUnidirectionalStream({
  sendGroup,
  sendOrder: 1,
});

// Higher sendOrder: queued bytes on this stream are sent first
const datagrams = transport.datagrams.createWritable({
  sendGroup,
  sendOrder: 2,
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Streams API", "Streams API", "", "nocode")}}
- [Using WebTransport](https://developer.chrome.com/docs/capabilities/web-apis/webtransport)
