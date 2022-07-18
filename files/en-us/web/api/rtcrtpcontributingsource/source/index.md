---
title: RTCRtpContributingSource.source
slug: Web/API/RTCRtpContributingSource/source
page-type: web-api-instance-property
tags:
  - API
  - Media
  - Property
  - RTCRtpContributingSource
  - Reference
  - WebRTC
  - source
browser-compat: api.RTCRtpContributingSource.source
---
{{APIRef("WebRTC API")}}

The read-only **`source`** property of
the {{domxref("RTCRtpContributingSource")}} dictionary contains the source identifier of
a particular stream of RTP packets.

The value is the contributing source (CSRC)
or synchronization source (SSRC) identifier, depending on whether the object is an
`RTCRtpContributingSource` or {{domxref("RTCRtpSynchronizationSource")}},
which is based on the former.

## Value

An unsigned, 32-bit integer value which uniquely identifies the source of RTP packets
described by this `RTCRtpContributingSource` (in which case the value is a
CSRC identifier) or `RTCRtpSynchronizationSource` (the value is an SSRC
identifier).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
