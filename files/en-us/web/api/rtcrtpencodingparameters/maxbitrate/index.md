---
title: "RTCRtpEncodingParameters: maxBitrate property"
short-title: maxBitrate
slug: Web/API/RTCRtpEncodingParameters/maxBitrate
page-type: web-api-instance-property
browser-compat: api.RTCRtpEncodingParameters.maxBitrate
---

{{APIRef("WebRTC")}}

The {{domxref("RTCRtpEncodingParameters")}} dictionary's
**`maxBitrate`** property specifies the maximum number of bits
per second to allow a track encoded with this encoding to use.

## Value

An unsigned long integer value specifying the maximum bandwidth this encoding is
permitted to use for a track of media it encodes in terms of bits per second. Other
parameters may further reduce the bandwidth used by the track; for example,
{{domxref("RTCRtpEncodingParameters.maxFramerate", "maxFramerate")}} will, if set low
enough, constrain the bandwidth as well.

In addition, there's no guarantee that the network interface can support the specified
bandwidth, in which case the actual bandwidth will be lower.

This value is computed using the standard Transport Independent Application Specific
Maximum (TIAS) bandwidth as defined by {{RFC(3890, "", "6.2.2")}}; this is the maximum
bandwidth needed without considering protocol overheads from IP, TCP or UDP, and so
forth.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("RTCRtpEncodingParameters.maxFramerate")}}
