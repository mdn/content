---
title: RTCStatsReport
slug: Web/API/RTCStatsReport
page-type: web-api-interface
browser-compat: api.RTCStatsReport
---

{{APIRef("WebRTC")}}

The **`RTCStatsReport`** interface of the [WebRTC API](/en-US/docs/Web/API/WebRTC_API) provides a statistics report for a {{domxref("RTCPeerConnection")}}, {{domxref("RTCRtpSender")}}, or {{domxref("RTCRtpReceiver")}}.

## Instance properties

- {{domxref("RTCStatsReport.size")}}
  - : Returns the number of `id`/statistics dictionaries (key/value) pairs in the `RTCStatsReport` object.

## Instance methods

- {{domxref("RTCStatsReport.entries()")}}
  - : Returns a new Iterator object that contains a two-member array of `[id, statistic-dictionary]` for each element in the `RTCStatsReport` object, in insertion order.
- {{domxref("RTCStatsReport.forEach()")}}
  - : Calls `callbackFn` once for each key-value pair present in the `RTCStatsReport` object, in insertion order.
    If a `thisArg` parameter is provided to `forEach`, it will be used as the `this` value for each callback.
- {{domxref("RTCStatsReport.get()")}}
  - : Returns the statistics dictionary associated with the passed `id`, or `undefined` if there is none.
- {{domxref("RTCStatsReport.has()")}}
  - : Returns a boolean indicating whether the `RTCStatsReport` has a statistics dictionary associated with the specified `id`.
- {{domxref("RTCStatsReport.keys()")}}
  - : Returns a new Iterator object that contains the keys (ids) for each element in the `RTCStatsReport` object, in insertion order.
- {{domxref("RTCStatsReport.values()")}}
  - : Returns a new Iterator object that contains the values for each element in the `RTCStatsReport` object, in insertion order.
- [`RTCStatsReport.[@@iterator]()`](/en-US/docs/Web/API/RTCStatsReport/@@iterator) {{ReadOnlyInline}}
  - : Returns a new Iterator object that contains a two-member array of `[id, statistic-dictionary]` for each element in the `RTCStatsReport` object, in insertion order.

## Description

An `RTCStatsReport` {{jsxref("Promise")}} is returned from the {{domxref("RTCRtpReceiver.getStats()")}}, {{domxref("RTCRtpSender.getStats()")}} and {{domxref("RTCPeerConnection.getStats()")}} methods.
Calling `getStats()` on an {{domxref("RTCPeerConnection")}} lets you specify whether you wish to obtain outbound statistics, inbound statistics, or statistics for the whole connection.
The {{domxref("RTCRtpReceiver")}} and {{domxref("RTCRtpSender")}} versions of `getStats()` only return inbound and outbound statistics, respectively.

The statistics report is a read-only [`Map`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)-like object: an ordered dictionary, where the properties are `id` strings that uniquely identify the WebRTC object that was inspected to produce a particular set of statistics, and the value is a dictionary object containing those statistics.

The different categories of statistics that are collected are reported using different dictionary objects, as listed [below](#the_statistic_types).
All the dictionary types have an `id` property, a string that uniquely identifies the object that was inspected to produce the current dictionary, a `type` string that can be used to identify the particular category of statistic, and a high resolution `timestamp` that allows comparison over time (and averaging) of statistic values.

The `RTCStatsReport` can be iterated in the same ways as a `Map`.
In order to find a particular set of statistics users can filter by inspecting the `type`.
Media sources additionally have the property `kind`, which is used to differentiate between video and audio sources.

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

This example logs video-related statistics for the local {{domxref("RTCRtpReceiver")}} responsible for receiving streamed media.

The code first creates an `RTCPeerConnection`, uses `await` to wait for the statistics report, and then iterates it using {{domxref("RTCStatsReport.forEach()")}}.
It then filters the dictionaries for just those reports that have the `type` of `inbound-rtp` and `kind` of `video`.

```js
myPeerConnection = new RTCPeerConnection(pcOptions);
const stats = await myPeerConnection.getStats();

stats.forEach((report) => {
  if (report.type === "inbound-rtp" && report.kind === "video") {
    // Log the report
    Object.keys(report).forEach((statName) => {
      console.log(`${statName}: ${report[statName]}`);
    });
  }
});
```

### Iterate report from an RTCRtpSender using a for loop

This example shows how you might iterate the outbound statistics from an {{domxref("RTCRtpSender")}}.

The code follows a the same pattern as the previous example, but iterates using a `for`-loop on the {{domxref("RTCStatsReport.values()")}}, and filters on the `type` of `outbound-rtp`.
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
