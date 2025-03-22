---
title: RTCStatsReport
slug: Web/API/RTCStatsReport
page-type: web-api-interface
browser-compat: api.RTCStatsReport
---

{{APIRef("WebRTC")}}

The **`RTCStatsReport`** interface of the [WebRTC API](/en-US/docs/Web/API/WebRTC_API) provides a statistics report for a {{domxref("RTCPeerConnection")}}, {{domxref("RTCRtpSender")}}, or {{domxref("RTCRtpReceiver")}}.

An `RTCStatsReport` instance is a read-only [`Map`-like object](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map#map-like_browser_apis), in which each key is an identifier for an object for which statistics are being reported, and the corresponding value is a dictionary object providing the statistics.

## Instance properties

- {{domxref("RTCStatsReport.size")}}
  - : Returns the number of items in the `RTCStatsReport` object.

## Instance methods

- {{domxref("RTCStatsReport.entries()")}}
  - : Returns a new [Iterator](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator) object that contains a two-member array of `[id, statistic-dictionary]` for each element in the `RTCStatsReport` object, in insertion order.
- {{domxref("RTCStatsReport.forEach()")}}
  - : Calls `callbackFn` once for each key-value pair present in the `RTCStatsReport` object, in insertion order.
    If a `thisArg` parameter is provided to `forEach`, it will be used as the `this` value for each callback.
- {{domxref("RTCStatsReport.get()")}}
  - : Returns the statistics dictionary associated with the passed `id`, or `undefined` if there is none.
- {{domxref("RTCStatsReport.has()")}}
  - : Returns a boolean indicating whether the `RTCStatsReport` contains a statistics dictionary associated with the specified `id`.
- {{domxref("RTCStatsReport.keys()")}}
  - : Returns a new [Iterator](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator) object that contains the keys (IDs) for each element in the `RTCStatsReport` object, in insertion order.
- {{domxref("RTCStatsReport.values()")}}
  - : Returns a new [Iterator](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator) object that contains the values (statistics object) for each element in the `RTCStatsReport` object, in insertion order.
- [`RTCStatsReport[Symbol.iterator]()`](/en-US/docs/Web/API/RTCStatsReport/Symbol.iterator)
  - : Returns a new [Iterator](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator) object that contains a two-member array of `[id, statistic-dictionary]` for each element in the `RTCStatsReport` object, in insertion order.

## Description

A {{jsxref("Promise")}} that resolves to an `RTCStatsReport` is returned from the {{domxref("RTCRtpReceiver.getStats()")}}, {{domxref("RTCRtpSender.getStats()")}} and {{domxref("RTCPeerConnection.getStats()")}} methods.
Calling `getStats()` on an {{domxref("RTCPeerConnection")}} lets you specify whether you wish to obtain outbound statistics, inbound statistics, or statistics for the whole connection.
The {{domxref("RTCRtpReceiver")}} and {{domxref("RTCRtpSender")}} versions of `getStats()` only return inbound and outbound statistics, respectively.

The statistics report is a read-only [`Map`-like](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map) object: an ordered dictionary, where the properties are `id` strings that uniquely identify the WebRTC object that was inspected to produce a particular set of statistics, and the value is a dictionary object containing those statistics.
A `RTCStatsReport` can be iterated and used the same ways as a read-only `Map`.

The report may contain many different categories of statistics, including inbound and outbound statistics for both the current and remote ends of the peer connection, information about codecs, certificates and media used, and so on.
Each category of statistic is provided in a different type of statistics dictionary object, which can be identified from its [`type`](#type) property.

### Common instance properties

All the dictionary types have the following properties:

- `id`
  - : A string that uniquely identifies the object was monitored to produce the set of statistics.
    This value persists across reports for (at least) the lifetime of the connection.
    Note however that for some statistics the ID may vary between browsers and for subsequent connections, even to the same peer.
- `timestamp`
  - : A high resolution timestamp object ({{domxref("DOMHighResTimeStamp")}}) object indicating the time at which the sample was taken.
    Many reported statistics are cumulative values; the timestamp allows rates and averages to be calculated between any two reports, at any desired reporting rate.
- `type`
  - : A string with a value that indicates the type of statistics that the object contains, such as `candidate-pair`, `inbound-rtp`, `certificate`, and so on.
    The [types of statistics and their corresponding objects](#the_statistic_types) are listed below.

Users typically iterate a `RTCStatsReport`, using a {{domxref("RTCStatsReport.forEach()", "forEach()")}} or [`for...of`](/en-US/docs/Web/JavaScript/Reference/Statements/for...of) loop, selecting the statistics of interest using the `type` property.
Once a particular statistic object has been identified using its `type`, the `id` property can subsequently be used with {{domxref("RTCStatsReport.get()", "get()")}} to obtain the same statistic report at a different time.

The timestamp can be used to calculate average values for statistics that accumulate over the lifetime of a connection.

### The statistic types

The statistics `type` values and their corresponding dictionaries are listed below.

| type                  | Dictionary                                                               | Description                                                                                                                                                                                                |
| --------------------- | ------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `candidate-pair`      | {{domxref("RTCIceCandidatePairStats")}}                                  | Statistics describing the change from one {{domxref("RTCIceTransport")}} to another, such as during an [ICE restart](/en-US/docs/Web/API/WebRTC_API/Session_lifetime#ice_restart).                         |
| `certificate`         | {{domxref("RTCCertificateStats")}}                                       | Statistics about a certificate being used by an {{domxref("RTCIceTransport")}}.                                                                                                                            |
| `codec`               | {{domxref("RTCCodecStats")}}                                             | Statistics about a specific codec being used by streams being sent or received by this connection.                                                                                                         |
| `data-channel`        | {{domxref("RTCDataChannelStats")}}                                       | Statistics related to one {{domxref("RTCDataChannel")}} on the connection.                                                                                                                                 |
| `inbound-rtp`         | {{domxref("RTCInboundRtpStreamStats")}}                                  | Statistics describing the state of one of the connection's inbound data streams.                                                                                                                           |
| `local-candidate`     | {{domxref("RTCIceCandidateStats")}}                                      | Statistics about a local ICE candidate associated with the connection's {{domxref("RTCIceTransport")}}s.                                                                                                   |
| `media-source`        | {{domxref("RTCAudioSourceStats")}} or {{domxref("RTCVideoSourceStats")}} | Statistics about the media produced by the {{domxref("MediaStreamTrack")}} attached to an RTP sender. The dictionary this key maps to depends on the track's {{domxref("MediaStreamTrack.kind", "kind")}}. |
| `outbound-rtp`        | {{domxref("RTCOutboundRtpStreamStats")}}                                 | Statistics describing the state of one of the outbound data streams on this connection.                                                                                                                    |
| `peer-connection`     | {{domxref("RTCPeerConnectionStats")}}                                    | Statistics describing the state of the {{domxref("RTCPeerConnection")}}.                                                                                                                                   |
| `remote-candidate`    | {{domxref("RTCIceCandidateStats")}}                                      | Statistics about a remote ICE candidate associated with the connection's {{domxref("RTCIceTransport")}}s.                                                                                                  |
| `remote-inbound-rtp`  | {{domxref("RTCRemoteInboundRtpStreamStats")}}                            | Statistics describing the state of the inbound data stream from the perspective of the remote peer.                                                                                                        |
| `remote-outbound-rtp` | {{domxref("RTCRemoteOutboundRtpStreamStats")}}                           | Statistics describing the state of the outbound data stream from the perspective of the remote peer.                                                                                                       |
| `transport`           | {{domxref("RTCTransportStats")}}                                         | Statistics about a transport used by the connection.                                                                                                                                                       |

## Examples

### Iterate report from an RTCPeerConnection using forEach loop

This example logs shows how you might log video-related statistics for the local {{domxref("RTCRtpReceiver")}} responsible for receiving streamed media.

Given a variable `myPeerConnection`, which is an instance of `RTCPeerConnection`, the code uses `await` to wait for the statistics report, and then iterates it using {{domxref("RTCStatsReport.forEach()")}}.
It then filters the dictionaries for just those reports that have the `type` of `inbound-rtp` and `kind` of `video`.

```js
const stats = await myPeerConnection.getStats();

stats.forEach((report) => {
  if (report.type === "inbound-rtp" && report.kind === "video") {
    // Log the frame rate
    console.log(report.framesPerSecond);
  }
});
```

### Iterate report from an RTCRtpSender using a for...of loop

This example shows how you might iterate the outbound statistics from an {{domxref("RTCRtpSender")}}.

The code follows a similar pattern to the previous example, but iterates using a `for...of`-loop on the {{domxref("RTCStatsReport.values()")}}, and filters on the `type` of `outbound-rtp`.
It assumes you already have an `RTCRtpSender` object named "sender".

```js
const stats = await sender.getStats();

for (const stat of stats.values()) {
  if (stat.type != "outbound-rtp") continue;
  Object.keys(stat).forEach((statName) => {
    console.log(`${statName}: ${report[statName]}`);
  });
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebRTC API](/en-US/docs/Web/API/WebRTC_API)
- {{domxref("RTCPeerConnection")}}
- {{domxref("RTCPeerConnection.getStats()")}}, {{domxref("RTCRtpReceiver.getStats()")}}, and {{domxref("RTCRtpSender.getStats()")}}
