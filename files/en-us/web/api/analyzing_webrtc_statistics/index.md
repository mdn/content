---
title: Analyzing WebRTC statistics
slug: Web/API/Analyzing_WebRTC_statistics
page-type: guide
browser-compat: api.RTCStatsReport
---

{{DefaultAPISidebar("WebRTC")}}

The [WebRTC API](/en-US/docs/Web/API/WebRTC_API) has a vast array of statistics available, covering the entire breadth of the WebRTC connectivity system, between senders and receivers, and from peer to peer.

## Collecting statistics

You can collect statistics at various levels throughout the WebRTC hierarchy of objects. Most broadly, you can call {{domxref("RTCPeerConnection.getStats", "getStats()")}} on an {{domxref("RTCPeerConnection")}} to get statistics for the connection overall. In this example, a new {{domxref("RTCPeerConnection")}} is created, and then {{domxref("setInterval()")}} is used to set the function `getConnectionStats()` to be called every second.

That function, in turn, uses {{domxref("RTCPeerConnection.getStats", "getStats()")}} to obtain statistics for the connection and to make use of that data.

```js
try {
  myPeerConnection = new RTCPeerConnection(pcOptions);

  statsInterval = setInterval(getConnectionStats, 1000);
  /* add event handlers, etc. */
} catch (err) {
  console.error(`Error creating RTCPeerConnection: ${err}`);
}

function getConnectionStats() {
  myPeerConnection.getStats(null).then((stats) => {
    let statsOutput = "";

    stats.forEach((report) => {
      if (report.type === "inbound-rtp" && report.kind === "video") {
        Object.keys(report).forEach((statName) => {
          statsOutput += `<strong>${statName}:</strong> ${report[statName]}<br>\n`;
        });
      }
    });

    document.querySelector(".stats-box").innerHTML = statsOutput;
  });
}
```

When the promise returned by `getStats()` is fulfilled, the resolution handler receives as input an {{domxref("RTCStatsReport")}} object containing the statistics information.
This object contains a read-only {{jsxref("Map")}} of dictionaries, each identified by a name string stored in its `type` property.

This example specifically looks for the report that has a `type` of `inbound-rtp` and a `kind` of `video`.
This way, we look only at the video-related statistics for the local {{domxref("RTCRtpReceiver")}} responsible for receiving the streamed media.

## Commonly used statistics

The {{domxref("RTCStatsReport")}} object contains a map of named dictionary objects.
The table below shows the statistic names, as stored in the `type` property of each object, and the corresponding dictionaries.

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

> **Note:** Earlier iterations of the specification included the types: `csrc`, `ice-server`, `receiver`, `sctp-transport`, `sender`, `track`, and `transceiver`.
> These are not supported in current browsers.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
