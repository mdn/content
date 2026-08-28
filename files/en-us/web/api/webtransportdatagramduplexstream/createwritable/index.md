---
title: "WebTransportDatagramDuplexStream: createWritable() method"
short-title: createWritable()
slug: Web/API/WebTransportDatagramDuplexStream/createWritable
page-type: web-api-instance-method
browser-compat: api.WebTransportDatagramDuplexStream.createWritable
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

The **`createWritable()`** method of the {{domxref("WebTransportDatagramDuplexStream")}} interface returns a {{domxref("WebTransportDatagramsWritable")}} instance that can be used to write outgoing datagrams to the transport.

It should be used instead of the deprecated {{domxref("WebTransportDatagramDuplexStream.writable","writable")}} property where it is supported.

## Syntax

```js-nolint
createWritable()
createWritable(options)
```

### Parameters

- `options` {{optional_inline}}
  - : An object that may have the following properties:
    - `sendGroup` {{optional_inline}}
      - : A {{domxref("WebTransportSendGroup")}} that the returned stream's datagrams should be grouped under for the purposes of `sendOrder` prioritization, or `null` if they should be part of the default group.
        The default value is `null`.
    - `sendOrder` {{optional_inline}}
      - : An integer value specifying the send priority of the returned stream's datagrams.
        Within the stream's `sendGroup`, bytes queued on higher-priority streams and datagrams are sent ahead of those from lower-priority ones.
        The default value is `0`.

### Return value

A {{domxref("WebTransportDatagramsWritable")}} object, which extends {{domxref("WritableStream")}}.

### Exceptions

- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if the transport's state is `"closed"` or `"failed"`, or if `sendGroup` is specified (non-null) and is associated with a different `WebTransport`.

## Description

The **`createWritable()`** method is used to create a {{domxref("WebTransportDatagramsWritable")}} instance for writing outgoing datagrams.

The method allows you to specify a `sendGroup` that defines the group of streams and datagrams that this stream belongs to, and a `sendOrder` that sets the relative priority of this stream within that group.
Within a group, bytes queued on higher-priority streams and datagrams are sent before any bytes from lower-priority ones.
Different groups are expected to be treated as equals for the purposes of bandwidth allocation — though the precise way bandwidth is divided between groups is implementation-defined.

The transmission is unreliable, meaning that even though you can define the priority order, there is no guarantee that every datagram will be sent, or that they will arrive in any particular order.

## Examples

### Basic usage

This code shows how you can use the `createWritable()` method to get a `WebTransportDatagramsWritable` and use it to send data.

First we define a function to wrap our stream creation code.
This first constructs a `WebTransport`, and uses it with `createWritable()` to create a writable stream.
Note that because `createWritable()` is not supported on all browsers, the code falls back to the {{domxref("WebTransportDatagramDuplexStream.writable", "writable")}} property for creating the writable.

`getWriter()` is then called on `writable` to create a writer.
Because datagram delivery is unreliable, queued outgoing datagrams that aren't sent in time are dropped.
For this reason, the code awaits the writer's {{domxref("WritableStreamDefaultWriter.ready", "ready")}} promise before each write, so that datagrams are only written once the underlying transport is ready to send them.
It also catches any errors from `write()`, since a rejection means that a particular datagram was not sent.

```js
async function sendDatagrams(url, datagrams, writableOptions = {}) {
  const wt = new WebTransport(url);
  await wt.ready;
  const writable =
    typeof wt.datagrams.createWritable === "function"
      ? wt.datagrams.createWritable(writableOptions)
      : wt.datagrams.writable;
  const writer = writable.getWriter();
  for (const bytes of datagrams) {
    await writer.ready;
    writer.write(bytes).catch(() => {});
  }
}
```

This code shows how you might use the above method, passing a `sendOrder` of `1` in the default send group:

```js
const url = "https://example.com/webtransport";
const datagrams = [new Uint8Array([65, 66, 67]), new Uint8Array([68, 69, 70])];
await sendDatagrams(url, datagrams, { sendOrder: 1 });
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using WebTransport](https://developer.chrome.com/docs/capabilities/web-apis/webtransport)
- {{domxref("Streams API", "Streams API", "", "nocode")}}
