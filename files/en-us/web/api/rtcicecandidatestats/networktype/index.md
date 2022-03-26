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

A string which indicates the type of network connection that the described candidate would use to communicate with the other peer.

The permitted values are:

- `bluetooth`
  - : A Bluetooth connection is used by the described connection.
- `cellular`
  - : The connection uses a cellular data service to connect. This includes all cellular data services including EDGE (2G), HSPA (3G), LTE (4G), and NR (5G).
- `ethernet`
  - : The described connection uses an Ethernet network.
- `wifi`
  - : The described connection uses WiFi.
- `wimax`
  - : The described connection uses a {{interwiki("wikipedia", "WiMAX")}} network.
- `vpn`
  - : The connection uses a Virtual Private Network (VPN). The VPN obscures the underlying network type, which is not discernible.
- `unknown`
  - : The user's browser is unable or unwilling to identify the underlying connection technology used by the described connection. This may be because the browser isn't able to determine the network type for some reason or it may be intentionally getting obscured for security reasons, such as to avoid {{interwiki("wikipedia", "device fingerprinting")}}.

> **Note:** Keep in mind that the specified value only reflects the initial connection between the local peer and the next hop along the network toward reaching the remote peer. For example, if the `networkType` is `wifi` but the user is connected using a cellular hotspot, the connection will be bottlenecked by the underlying cellular network (and any other networks between the two peers).

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

        // Now the statistics for this report; we intentionally drop the ones we
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
