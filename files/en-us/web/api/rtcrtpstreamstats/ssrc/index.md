---
title: RTCRtpStreamStats.ssrc
slug: Web/API/RTCRtpStreamStats/ssrc
page-type: web-api-instance-property
tags:
  - API
  - Property
  - RTCRtpStreamStats
  - RTP
  - Reference
  - Statistics
  - Stats
  - WebRTC
  - WebRTC API
  - rtc
  - source
  - ssrc
browser-compat: api.RTCRtpStreamStats.ssrc
---
{{APIRef("WebRTC")}}

The {{domxref("RTCRtpStreamStats")}} dictionary's
**`ssrc`** property provides the Synchronization Source
(SSRC), an integer which uniquely identifies the source of the {{Glossary("RTP")}}
packets whose statistics are covered by the {{domxref("RTCStatsReport")}} that
includes this `RTCRtpStreamStats` dictionary.

## Value

The Synchronization Source (SSRC) is a 32-bit integer uniquely identifying the source
of the RTP packets whose statistics are covered by the {{domxref("RTCStatsReport")}}
object of which this `RTCRtpStreamStats` object is a component.

The manner in which these values are generated is not mandated by the specification,
although it does make recommendations. You should not make any assumptions based on the
value of `ssrc` other than that any two objects with the same
`ssrc` value refer to the same source. See {{RFC("3550", "", "8")}} for
additional information about `ssrc`.

> **Note:** The specification includes an example that generates values
> for `ssrc` using MD5. While not part of the standard, exactly, it is a good
> mechanism that may be used by some browsers; others may use other methods, such as
> random number generators. _Do not_ rely upon these values meaning anything
> other than "these objects are associated with the same source."

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
