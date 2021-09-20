---
title: RTCIceCandidateStats.networkType
slug: Web/API/RTCIceCandidateStats/networkType
tags:
  - API
  - Candidate
  - Connection
  - Connectivity
  - Network
  - Networking
  - Property
  - RTCIceCandidateStats
  - Reference
  - Statistics
  - Stats
  - WebRTC
  - WebRTC API
  - networkType
browser-compat: api.RTCIceCandidateStats.networkType
---
{{APIRef("WebRTC")}}{{deprecated_header}}

The {{domxref("RTCIceCandidateStats")}} dictionary's
**`networkType`** property specifies the type of network used by
a local candidate to communicate with a remote peer.

> **Note:** The `networkType` property is only included in
> `RTCIceCandidateStats` objects for local candidates (that is, candidates
> generated locally and included in an {{Glossary("SDP")}} offer or answer that has been
> sent to the remote peer).

## Syntax

```js
networkType = rtcIceCandidateStats.networkType;
```

### Value

A {{domxref("DOMString")}} whose value is taken from the {{domxref("RTCNetworkType")}}
enumerated type. The string indicates the type of network connection that the described
candidate would use to communicate with the other peer.

The permitted values are:

{{page("/en-US/docs/Web/API/RTCNetworkType", "Values")}}

## Example

This example sets up a periodic function using
{{domxref("setInterval()")}} that outputs
statistics reports for candidates that use or would use a cellular data network to a log
view.

```js
window.setInterval(function() {
  myPeerConnection.getStats(null).then(stats => {
    let statsOutput = "";

    stats.forEach(report => {
      if ((stats.type === "local-candidate" || stats.type === "remote.candidate") && stats.networkType === "cellular") {
        statsOutput += `<h2>Report: ${report.type}</h3>\n<strong>ID:</strong> ${report.id}<br>\n` +
                       `<strong>Timestamp:</strong> ${report.timestamp}<br>\n`;

        // Now the statistics for this report; we intentially drop the ones we
        // sorted to the top above

        Object.keys(report).forEach(statName => {
          if (statName !== "id" && statName !== "timestamp" && statName !== "type") {
            statsOutput += `<strong>${statName}:</strong> ${report[statName]}<br>\n`;
          }
        });
      }
    });

    document.querySelector(".stats-box").innerHTML = statsOutput;
  });
}, 1000);
```

## Browser compatibility

{{Compat}}
