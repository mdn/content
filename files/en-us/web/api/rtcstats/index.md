---
title: RTCStats
slug: Web/API/RTCStats
tags:
  - API
  - Dictionary
  - RTCStats
  - Reference
  - Report
  - Statistics
  - Stats
  - WebRTC
  - rtc
browser-compat: api.RTCStats
---
{{APIRef("WebRTC")}}

The **`RTCStats`** dictionary is the basic statistics object used by WebRTC's statistics monitoring model, providing the properties required of all statistics data objects.

Specific classes of statistic are defined as dictionaries based on `RTCStats`. For example, statistics about a received {{Glossary("RTP")}} stream are represented by {{domxref("RTCReceivedRtpStreamStats")}}.

## Properties

- {{domxref("RTCStats.id", "id")}}
  - : A {{domxref("DOMString")}} which uniquely identifies the object which was inspected to produce this object based on `RTCStats`.
- {{domxref("RTCStats.timestamp", "timestamp")}}
  - : A {{domxref("DOMHighResTimeStamp")}} object indicating the time at which the sample was taken for this statistics object.
- {{domxref("RTCStats.type", "type")}}
  - : A {{domxref("DOMString")}} indicating the type of statistics the object contains, taken from the enum type {{domxref("RTCStatsType")}}.

## The statistics type hierarchy

The various dictionaries that are used to define the contents of the objects that contain each of the various types of statistics for WebRTC are structured in such a way that they build upon the core `RTCStats` dictionary, each layer adding more relevant information.

- {{domxref("RTCStats")}} is the foundation of all WebRTC statistics objects

  - {{domxref("RTCRtpStreamStats")}} adds to `RTCStats` information that applies to all RTP endpoints (that is, both local and remote endpoints, and regardless of whether the endpoint is a sender or a receiver)

    - {{domxref("RTCReceivedRtpStreamStats")}} further adds statistics measured at the receiving end of an RTP stream, regardless of whether it's local or remote.

      - {{domxref("RTCInboundRtpStreamStats")}} contains statistics that can only be measured on a receiver at the local end of the RTP connection.
      - {{domxref("RTCOutboundRtpStreamStats")}} contains statistics related to the receiver at the remote end of the RTP stream.

    - {{domxref("RTCSentRtpStreamStats")}} offers statistics related to the sending end of an RTP stream.

      - {{domxref("RTCOutboundRtpStreamStats")}} contains statistics about the local sending endpoint of an RTP stream.
      - {{domxref("RTCRemoteOutboundRtpStreamStats")}} holds statistics related to the remote sending end an RTP stream.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
