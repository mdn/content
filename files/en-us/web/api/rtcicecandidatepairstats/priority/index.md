---
title: RTCIceCandidatePairStats.priority
slug: Web/API/RTCIceCandidatePairStats/priority
page-type: web-api-instance-property
tags:
  - API
  - ICE
  - Deprecated
  - Property
  - RTCIceCandidatePairStats
  - Reference
  - Statistics
  - Stats
  - WebRTC
  - WebRTC API
  - priority
browser-compat: api.RTCIceCandidatePairStats.priority
---
{{APIRef("WebRTC")}}{{deprecated_header}}

The _obsolete_ {{domxref("RTCIceCandidatePairStats")}}
property **`priority`** reports the priority of the candidate
pair as an integer value. The higher the value, the more likely the WebRTC
layer is to select the candidate pair when the time comes to establish (or re-establish)
a connection between the two peers.

## Value

An integer value indicating the priority of this pair of candidates as compared to
other pairs on the same peer connection. The higher this value, the better the WebRTC
layer thinks this pair of candidates is compared to the others, and the more likely a
pair is to be selected for use.

> **Note:** This property was removed from the specification as its value
> cannot be guaranteed to be accurately represented in a JavaScript number. You can
> calculate its value using the algorithm described in {{RFC(5245, "", "5.7.2")}} if
> you need this information and can accept the risk that the result may not be entirely
> accurate.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
