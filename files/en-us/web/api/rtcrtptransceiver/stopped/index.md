---
title: RTCRtpTransceiver.stopped
slug: Web/API/RTCRtpTransceiver/stopped
page-type: web-api-instance-property
tags:
  - API
  - Deprecated
  - Media
  - Property
  - RTCRtpTransceiver
  - RTP
  - Reference
  - WebRTC
  - stopped
browser-compat: api.RTCRtpTransceiver.stopped
---
{{APIRef("WebRTC")}}{{deprecated_header}}

The read-only **`stopped`** property
on the {{domxref("RTCRtpTransceiver")}} interface indicates whether or not the
transceiver's associated sender and receiver have both been stopped.

The transceiver is stopped if the {{domxref("RTCRtpTransceiver.stop", "stop()")}}
method has been called or if a change to either the local or the remote description has
caused the transceiver to be stopped for some reason.

> **Note:** This property is _deprecated_ and will be removed in the future. Instead, look
> at the value of {{domxref("RTCRtpTransceiver.currentDirection", "currentDirection")}}.
> Its value is `stopped` if the transceiver has stopped.

## Value

A Boolean value which is `true` if the transceiver's
{{domxref("RTCRtpTransceiver.sender", "sender")}} will no longer send data, and its
{{domxref("RTCRtpTransceiver.receiver", "receiver")}} will no longer receive data. If
either or both are still at work, the result is `false`.

## Usage notes

## Specifications

This feature is not part of any current specification. It is no longer on track to become a standard.

## Browser compatibility

{{Compat}}

## See also

- [WebRTC API](/en-US/docs/Web/API/WebRTC_API)
- [Introduction to the Real-time Transport Protocol (RTP)](/en-US/docs/Web/API/WebRTC_API/Intro_to_RTP)
