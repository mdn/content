---
title: RTCIceCandidateStats
slug: Web/API/RTCIceCandidateStats
tags:
  - API
  - Candidate
  - Dictionary
  - ICE
  - Ice Candidate
  - RTCIceCandidate
  - RTCIceCandidateStats
  - Reference
  - Statistics
  - Stats
  - WebRTC
  - WebRTC API
browser-compat: api.RTCIceCandidateStats
---
<div>{{APIRef("WebRTC")}}</div>

<p>The WebRTC API's <code><strong>RTCIceCandidateStats</strong></code> dictionary provides statistics related to an {{domxref("RTCIceCandidate")}}.</p>

<h2 id="Properties">Properties</h2>

<p><code>RTCIceCandidateStats</code> is based upon the {{domxref("RTCStats")}} dictionary, so it includes those properties in addition to the ones below.</p>

<dl>
 <dt>{{domxref("RTCIceCandidateStats.address", "address")}} {{optional_inline}}</dt>
 <dd>A string containing the address of the candidate. This value may be an IPv4 address, an IPv6 address, or a fully-qualified domain name. This property was previously named <code>ip</code> and only accepted IP addresses.</dd>
 <dt>{{domxref("RTCIceCandidateStats.candidateType", "candidateType")}} {{optional_inline}}</dt>
 <dd>A string matching one of the values in <a href="/en-US/docs/Web/API/RTCIceCandidate/type#Values"><code>RTCIceCandidate.type</code></a>, indicating what kind of candidate the object provides statistics for.</dd>
 <dt>{{domxref("RTCIceCandidateStats.deleted", "deleted")}} {{optional_inline}}</dt>
 <dd>A Boolean value indicating whether or not the candidate has been released or deleted; the default value is <code>false</code>. For local candidates, it's value is <code>true</code> if the candidate has been deleted or released. For host candidates, <code>true</code> means that any network resources (usually a network socket) associated with the candidate have already been released. For {{Glossary("TURN")}} candidates, the TURN allocation is no longer active for deleted candidates. This property is not present for remote candidates.</dd>
 <dt>{{domxref("RTCIceCandidateStats.networkType", "networkType")}} {{optional_inline}}</dt>
 <dd>A string from the {{domxref("RTCNetworkType")}} enumerated type which indicates the type of interface used for a local candidate. This property is only present for local candidates.</dd>
 <dt>{{domxref("RTCIceCandidateStats.port", "port")}} {{optional_inline}}</dt>
 <dd>The network port number used by the candidate.</dd>
 <dt>{{domxref("RTCIceCandidateStats.priority", "priority")}} {{optional_inline}}</dt>
 <dd>The candidate's priority, corresponding to {{domxref("RTCIceCandidate.priority")}}.</dd>
 <dt>{{domxref("RTCIceCandidateStats.protocol", "protocol")}} {{optional_inline}}</dt>
 <dd>A string specifying the protocol (<code>tcp</code> or <code>udp</code>) used to transmit data on the <code>port</code>.</dd>
 <dt>{{domxref("RTCIceCandidateStats.relayProtocol", "relayProtocol")}} {{optional_inline}}</dt>
 <dd>A string identifying the protocol used by the endpoint for communicating with the {{Glossary("TURN")}} server; valid values are <code>tcp</code>, <code>udp</code>, and <code>tls</code>. Only present for local candidates.</dd>
 <dt>{{domxref("RTCIceCandidateStats.transportId", "transportId")}} {{optional_inline}}</dt>
 <dd>A string uniquely identifiying the transport object that was inspected in order to obtain the {{domxref("RTCTransportStats")}} associated with the candidate correspondin to these statistics.</dd>
 <dt>{{domxref("RTCIceCandidateStats.url", "url")}} {{optional_inline}}</dt>
 <dd>For local candidates, the <code>url</code> property is the {{Glossary("URL")}} of the {{Glossary("ICE")}} server from which the candidate was received. This URL matches the one included in the {{domxref("RTCPeerConnectionIceEvent")}} object representing the {{event("icecandidate")}} event that delivered the candidate to the local peer.</dd>
</dl>

<h2 id="Example">Example</h2>

<p>This example features a function, <code>isUsableNetworkType()</code>, whose job it is to look at an <code>RTCIceCandidateStats</code> object's {{domxref("RTCIceCandidateStats.networkType", "networkType")}} and determine whether or not the type of network is acceptable for use.</p>

<p>This function is then called for {{domxref("RTCStats")}} objects whose type is <code>local-candidate</code>, indicating that the object is in fact an <code>RTCIceCandidateStats</code> with information about a local ICE candidate.</p>

<pre class="brush: js">const isUsableNetworkType = stats =&gt; {
  switch(stats.networkType) {
    case "ethernet":
    case "vpn":
      return true;

    case "bluetooth":
    case "cellular":
    case "wimax":
    case "unknown":
    default:
      return false;
  }
}

if (rtcStats &amp;&amp; rtcStats.type === "local-candidate") {
  if (!isUsableNetworkType(rtcStats)) {
    abortConnection();
    return;
  }
}
</pre>

<p>This code calls a function called <code>abortConnection()</code> if the <code>RTCStats</code> object represents information about a local candidate is which would be using a network connection other than Ethernet or a VPN.</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>
