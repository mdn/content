---
title: RTCPeerConnection.createDataChannel()
slug: Web/API/RTCPeerConnection/createDataChannel
page-type: web-api-instance-method
tags:
  - API
  - Media
  - Method
  - RTCPeerConnection
  - Reference
  - WebRTC
  - createDataChannel
browser-compat: api.RTCPeerConnection.createDataChannel
---
{{APIRef("WebRTC")}}

The **`createDataChannel()`** method
on the {{domxref("RTCPeerConnection")}} interface
creates a new channel linked with the remote peer,
over which any kind of data may be transmitted.
This can be useful for back-channel content,
such as images, file transfer, text chat, game update
packets, and so forth.

If the new data channel is the first one added to the connection, renegotiation is
started by delivering a {{DOMxRef("RTCPeerConnection/negotiationneeded_event", "negotiationneeded")}} event.

## Syntax

```js
createDataChannel(label)
createDataChannel(label, options)
```

### Parameters

- `label`
  - : A human-readable name for the channel.
    This string may not be longer than 65,535 bytes.
- `options` {{optional_inline}}

  - : An object providing configuration options for the data channel.
    It can contain the following fields:

    - `ordered` {{optional_inline}}
      - : Indicates whether or not
        messages sent on the {{domxref("RTCDataChannel")}}
        are required to arrive at their destination in the same order
        in which they were sent (`true`),
        or if they're allowed to arrive out-of-order (`false`).
        **Default: `true`.**
    - `maxPacketLifeTime` {{optional_inline}}
      - : The maximum number of milliseconds
        that attempts to transfer a message may take in unreliable mode.
        While this value is a 16-bit unsigned number,
        each user agent may clamp it
        to whatever maximum it deems appropriate.
        **Default: `null`.**
    - `maxRetransmits` {{optional_inline}}
      - : The maximum number of times
        the user agent should attempt to retransmit a message
        which fails the first time in unreliable mode.
        While this value is a 16-bit unsigned number,
        each user agent may clamp it to whatever maximum it deems appropriate.
        **Default: `null`.**
    - `protocol` {{optional_inline}}
      - : The name of the sub-protocol
        being used on the {{domxref("RTCDataChannel")}},
        if any;
        otherwise, the empty string (`""`).
        **Default: empty string (`""`).**
        This string may not be longer than 65,535 _bytes_.
    - `negotiated` {{optional_inline}}
      - : By default (`false`),
        data channels are negotiated in-band,
        where one side calls `createDataChannel`, and
        the other side listens to the {{domxref("RTCDataChannelEvent")}} event
        using the {{DOMxRef("RTCPeerConnection.datachannel_event", "ondatachannel")}} event handler.
        Alternatively (`true`),
        they can be negotiated out of-band,
        where both sides call `createDataChannel`
        with an agreed-upon ID.
        **Default: `false`.**
    - `id` {{optional_inline}}
      - : A 16-bit numeric ID for the channel;
        permitted values are 0 to 65534.
        If you don't include this option,
        the user agent will select an ID for you.

> **Note:** These options represent the script-settable subset of the properties on the
> {{domxref("RTCDataChannel")}} interface.

### Return value

A new {{domxref("RTCDataChannel")}} object with the specified `label`,
configured using the options specified by `options` if that parameter is
included; otherwise, the defaults listed above are established.

### Exceptions

- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if the {{domxref("RTCPeerConnection")}} is closed.
- {{jsxref("TypeError")}}
  - : Thrown in the following situations:
    - The label and/or protocol string is too long; these cannot be longer than 65,535
      bytes (bytes, rather than characters).
    - The `id` is 65535. While this is a valid unsigned 16-bit value, it's
      not a permitted value for `id`.
- `SyntaxError` {{domxref("DOMException")}}
  - : Thrown if values were specified for both the `maxPacketLifeTime` and
    `maxRetransmits` options. You may specify a non-`null`
    value for only one of these.
- `ResourceInUse` {{domxref("DOMException")}}
  - : Thrown if an `id` was specified, but another {{domxref("RTCDataChannel")}} is
    already using the same value.
- `OperationError` {{domxref("DOMException")}}
  - : Thrown if either the specified `id` is already in use, or if no `id` was
    specified, the WebRTC layer was unable to automatically generate an ID because all IDs
    are in use.

## Examples

This example shows how to create a data channel and set up handlers for the
{{DOMxRef("RTCDataChannel/open_event", "open")}} and {{DOMxRef("RTCDataChannel/message_event", "message")}} events to send and receive messages on it
(For brevity, the example assumes onnegotiationneeded is set up).

```js
// Offerer side

const pc = new RTCPeerConnection(options);
const channel = pc.createDataChannel("chat");
channel.onopen = (event) => {
  channel.send('Hi you!');
}
channel.onmessage = (event) => {
  console.log(event.data);
}
```

```js
// Answerer side

const pc = new RTCPeerConnection(options);
pc.ondatachannel = (event) => {
  const channel = event.channel;
    channel.onopen = (event) => {
    channel.send('Hi back!');
  }
  channel.onmessage = (event) => {
    console.log(event.data);
  }
}
```

Alternatively, more symmetrical out-of-band negotiation can be used, using an
agreed-upon id (0 here):

```js
// Both sides

const pc = new RTCPeerConnection(options);
const channel = pc.createDataChannel("chat", {negotiated: true, id: 0});
channel.onopen = (event) => {
  channel.send('Hi!');
}
channel.onmessage = (event) => {
  console.log(event.data);
}
```

For a more thorough example showing how the connection and channel are established, see
[A simple RTCDataChannel sample](/en-US/docs/Web/API/WebRTC_API/Simple_RTCDataChannel_sample).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("RTCDataChannel")}}
- [A simple RTCDataChannel sample](/en-US/docs/Web/API/WebRTC_API/Simple_RTCDataChannel_sample)
- {{domxref("RTCPeerConnection")}}
