---
title: RTCRtpSynchronizationSource
slug: Web/API/RTCRtpSynchronizationSource
tags:
  - API
  - Dictionary
  - Interface
  - Media
  - RTCRtpSynchronizationSource
  - RTP
  - Reference
  - Synchronization Source
  - WebRTC
browser-compat: api.RTCRtpSynchronizationSource
---
{{APIRef("WebRTC API")}}

The **`RTCRtpSynchronizationSource`** dictionary of the [WebRTC API](/en-US/docs/Web/API/WebRTC_API) is used by {{domxref("RTCRtpReceiver.getSynchronizationSources", "getSynchronizationSources()")}} to describe a particular synchronization source (SSRC).

A synchronization source is a single source that shares timing and sequence number space. Since `RTCRtpSynchronizationSource` implements {{domxref("RTCRtpContributingSource")}}, its properties are also available.

The information provided is based on the last ten seconds of media received.

> **Note:** While the published specification describes this as an interface, it has since been changed to a dictionary in follow-up drafts.

## Properties

_Also implements the properties of {{domxref("RTCRtpContributingSource")}}._

- {{domxref("RTCRtpSynchronizationSource.voiceActivityFlag", "voiceActivityFlag")}} {{optional_inline}}
  - : A Boolean value indicating whether or not voice activity is included in the last RTP packet played from the source. If the peer has indicated that it's not supporting voice activity detection, this field is not provided.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
