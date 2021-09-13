---
title: RTCNetworkType
slug: Web/API/RTCNetworkType
tags:
  - API
  - Connection
  - Enum
  - Enumerated Type
  - Enumeration
  - Network
  - RTCNetworkType
  - Reference
  - Statistics
  - Stats
  - Type
  - WebRTC
  - WebRTC API
  - networkType
  - Deprecated
browser-compat: api.RTCNetworkType
---
{{deprecated_header}}{{APIRef("WebRTC")}}

The [WebRTC](/en-US/docs/Web/API/WebRTC_API) **`RTCNetworkType`** enumerated type defines a set of strings used to identify the type of network used by a connection between two peers.

This type is used as the value or the following properties:

- {{domxref("RTCIceCandidate")}}'s {{domxref("RTCIceCandidateStats.networkType", "networkType")}}
- {{domxref("RTCStunServerConnectionStats")}}'s {{domxref("RTCStunServerConnectionStats.networkType", "networkType")}}

## Values

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

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
