---
title: RTCDataChannel.stream
slug: Web/API/RTCDataChannel/stream
tags:
  - Non-standard
  - Deprecated
  - Property
  - RTCDataChannel
  - Read-only
  - Reference
  - WebRTC
  - stream
browser-compat: api.RTCDataChannel.stream
---
{{APIRef("WebRTC")}}{{deprecated_header}}

The deprecated read-only `RTCDataChannel` property **`stream`**
returns an ID number (between 0 and 65,535) which uniquely identifies the
{{domxref("RTCDataChannel")}}. This ID is set at the time the data channel is
created, either by the user agent (if {{domxref("RTCDataChannel.negotiated")}} is
`false`) or by the site or app script (if `negotiated` is
`true`).

> **Warning:** This property has been replaced with the {{domxref("RTCDataChannel.id")}} property.
> If you have code that uses `stream`, you will need to update, since
> browsers have begun to remove support for `stream`.

## Syntax

```js
var stream = aDataChannel.stream;
```

### Value

An `unsigned short` value (that is, an integer between 0 and 65,535) which
uniquely identifies the data channel.

## Example

    var dataChannel = pc.createDataChannel("SampleChannel");

    console.log("Data channel stream ID: " + dataChannel.stream);

## Specifications

This feature is not part of any current specification. It is not on track to become a standard.

## Browser compatibility

{{Compat}}

## See also

- [WebRTC](/en-US/docs/Web/API/WebRTC_API)
- [Using WebRTC data
  channels](/en-US/docs/Web/API/WebRTC_API/Using_data_channels)
- {{domxref("RTCDataChannel")}}
- {{domxref("RTCDataChannel.id")}}
