---
title: "RTCRtpReceiver: jitterBufferTarget property"
short-title: jitterBufferTarget
slug: Web/API/RTCRtpReceiver/jitterBufferTarget
page-type: web-api-instance-property
browser-compat: api.RTCRtpReceiver.jitterBufferTarget
---

{{APIRef("WebRTC API")}}

The **`jitterBufferTarget`** property of the {{domxref("RTCRtpReceiver")}} interface is a {{domxref("DOMHighResTimeStamp")}} that indicates the application's preferred duration, in milliseconds, for which the jitter buffer should hold media before playing it out.

The application can use it to influence the tradeoff between playout delay and the risk of running out of audio or video frames due to network jitter.

## Value

A {{domxref("DOMHighResTimeStamp")}} that indicates the current jitter buffer target hold time, in milliseconds.

The value can be set to a positive value of no greater than 4000 milliseconds.

## Exceptions

- {{jsxref("RangeError")}}
  - : Thrown if the target is set to a negative value or a value that is greater than 4000 milliseconds.

## Description

The value of the attribute influences the amount of buffering done by the user agent, which in turn affects retransmissions and packet loss recovery.

Note that the attribute "influences" the jitter buffer target of the user agent, but does not directly set it.
The actual user agent jitter buffer target will vary between maximum and minimum allowed values that reflects a target range that the user agent can provide based on network conditions and memory constraints, and can change at any time.
The value returned by `jitterBufferTarget` is not affected by the actual target of the user agent.

The average jitter buffer delay can be calculated by dividing the [`RTCInboundRtpStreamStats.jitterBufferDelay`](/en-US/docs/Web/API/RTCInboundRtpStreamStats) by the [`RTCInboundRtpStreamStats.jitterBufferEmittedCount`](/en-US/docs/Web/API/RTCInboundRtpStreamStats).
In order to observe the effects of modifying the jitter buffer target you can track the change in the value of this average over time.

If `RTCRtpReceiver` audio and video tracks are synchronized, then the larger of the two receivers `jitterBufferTarget` should be used for both receivers.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
