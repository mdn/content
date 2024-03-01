---
title: RTCDataChannelStats
slug: Web/API/RTCDataChannelStats
page-type: web-api-interface
browser-compat: api.RTCStatsReport.type_data-channel
---

{{DefaultAPISidebar("WebRTC")}}

The **`RTCDataChannelStats`** dictionary of the [WebRTC API](/en-US/docs/Web/API/WebRTC_API) provides statistics related to one {{domxref("RTCDataChannel")}} object on the connection.

The report can be obtained by iterating the {{domxref("RTCStatsReport")}} returned by {{domxref("RTCPeerConnection.getStats()")}} until you find an entry with the [`type`](#type) of `data-channel`.

The data channels statistics can be correlated to a particular channel by comparing the [`dataChannelIdentifier`](#datachannelidentifier) property to a matching {{domxref("RTCDataChannel.id")}}.

## Instance properties

- {{domxref("RTCDataChannelStats.label", "label")}}
  - : A string containing the {{domxref("RTCDataChannel.label", "label")}} of the associated `RTCDataChannel`.
- {{domxref("RTCDataChannelStats.protocol", "protocol")}}
  - : A string containing the {{domxref("RTCDataChannel.protocol", "protocol")}} of the associated `RTCDataChannel`.
- {{domxref("RTCDataChannelStats.dataChannelIdentifier", "dataChannelIdentifier")}}
  - : A positive integer value containing the {{domxref("RTCDataChannel.id", "id")}} of the associated `RTCDataChannel`.
- {{domxref("RTCDataChannelStats.state", "state")}}
  - : The {{domxref("RTCDataChannel.readyState", "readyState")}} of the associated `RTCDataChannel`.
- {{domxref("RTCDataChannelStats.messagesSent", "messagesSent")}}
  - : A positive integer value indicating the total number of messages sent on the channel.
- {{domxref("RTCDataChannelStats.bytesSent", "bytesSent")}}
  - : A positive integer value indicating the total number of payload bytes sent on the associated `RTCDataChannel`.
- {{domxref("RTCDataChannelStats.messagesReceived", "messagesReceived")}}
  - : A positive integer value indicating the total number of messages received on the associated.
- {{domxref("RTCDataChannelStats.bytesReceived", "bytesReceived")}}
  - : A positive integer value indicating the total number of payload bytes received on the associated `RTCDataChannel`.

### Common instance properties

The following properties are common to all WebRTC statistics objects (See [`RTCStatsReport`](/en-US/docs/Web/API/RTCStatsReport#common_instance_properties) for more information).

<!-- RTCStats -->

- {{domxref("RTCDataChannelStats.id", "id")}}
  - : A string that uniquely identifies the object that is being monitored to produce this set of statistics.
- {{domxref("RTCDataChannelStats.timestamp", "timestamp")}}
  - : A {{domxref("DOMHighResTimeStamp")}} object indicating the time at which the sample was taken for this statistics object.
- {{domxref("RTCDataChannelStats.type", "type")}}
  - : A string with the value `"data-channel"`, indicating the type of statistics that the object contains.

## Examples

Given a variable `myPeerConnection`, which is an instance of {{domxref("RTCPeerConnection")}}, the code below uses `await` to wait for the statistics report, and then iterates it using `RTCStatsReport.forEach()`.
It then filters the dictionaries for just those reports that have the type of `data-channel` and logs the result.

```js
const stats = await myPeerConnection.getStats();

stats.forEach((report) => {
  if (report.type === "data-channel") {
    // Log the channel information
    console.log(report);
  }
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("RTCStatsReport")}}
- {{domxref("RTCRtpCodecParameters")}}
