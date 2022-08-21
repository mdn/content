---
title: RTCRtpSender.getStats()
slug: Web/API/RTCRtpSender/getStats
page-type: web-api-instance-method
tags:
  - API
  - Media
  - Method
  - RTCRtpSender
  - Reference
  - WebRTC
  - WebRTC Statistics
  - WebRTC Statistics API
  - getStats
browser-compat: api.RTCRtpSender.getStats
---
{{APIRef("WebRTC")}}

The {{domxref("RTCRtpSender")}} method **`getStats()`**
asynchronously requests an {{domxref("RTCStatsReport")}} object which provides
statistics about outgoing traffic on the {{domxref("RTCPeerConnection")}} which owns the
sender, returning a {{jsxref("Promise")}} which is fulfilled when the results are
available.

## Syntax

```js
getStats()
```

### Parameters

None.

### Return value

A JavaScript {{jsxref("Promise")}} which is fulfilled once the statistics are
available. The promise's fulfillment handler receives as a parameter a
{{domxref("RTCStatsReport")}} object containing the collected statistics.

The returned `RTCStatsReport` accumulates the statistics for all of the
streams being sent using the `RTCRtpSender`, as well as the statistics for
any dependencies those streams have.

## Examples

This simple example obtains the statistics for an `RTCRtpSender` and updates
an element's {{domxref("HTMLElement/innerText", "innerText")}} to display the current round
trip time for requests on the sender.

```js
sender.getStats().then((stats) => {
  document.getElementById("currentRTT").innerText =
          stats.roundTripTime;
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebRTC API](/en-US/docs/Web/API/WebRTC_API)
- {{domxref("RTCStatsReport")}}
- {{domxref("RTCRtpReceiver.getStats()")}}
- {{domxref("RTCPeerConnection.getStats()")}}
