---
title: "RTCRtpReceiver: getStats() method"
short-title: getStats()
slug: Web/API/RTCRtpReceiver/getStats
page-type: web-api-instance-method
browser-compat: api.RTCRtpReceiver.getStats
---

{{APIRef("WebRTC")}}

The {{domxref("RTCRtpReceiver")}} method **`getStats()`** asynchronously requests an {{domxref("RTCStatsReport")}} object which provides statistics about incoming traffic on the owning {{domxref("RTCPeerConnection")}}, returning a {{jsxref("Promise")}} whose fulfillment handler will be called once the results are available.

## Syntax

```js-nolint
getStats()
```

### Parameters

None.

### Return value

A JavaScript {{jsxref("Promise")}} which is fulfilled once the statistics are available.
The promise's fulfillment handler receives as a parameter a {{domxref("RTCStatsReport")}} object containing the collected statistics.

The returned statistics include those from all streams which are coming in through the `RTCRtpReceiver`, as well as any of their dependencies.

These might include, for example, statistics with [types](/en-US/docs/Web/API/RTCStatsReport#the_statistic_types): [`inbound-rtp`](/en-US/docs/Web/API/RTCInboundRtpStreamStats), [`candidate-pair`](/en-US/docs/Web/API/RTCIceCandidatePairStats), [`local-candidate`](/en-US/docs/Web/API/RTCIceCandidateStats), [`remote-candidate`](/en-US/docs/Web/API/RTCIceCandidateStats).

## Examples

This simple example obtains the statistics for an `RTCRtpReceiver` and updates an element's {{domxref("HTMLElement/innerText", "innerText")}} to display the number of packets lost.

```js
receiver.getStats().then((stats) => {
  document.getElementById("lostpackets").innerText = stats.packetsLost;
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebRTC API](/en-US/docs/Web/API/WebRTC_API)
- {{domxref("RTCStatsReport")}}
- {{domxref("RTCRtpSender.getStats()")}}
- {{domxref("RTCPeerConnection.getStats()")}}
