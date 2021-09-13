---
title: RTCOfferOptions
slug: Web/API/RTCOfferOptions
tags:
  - Dictionary
  - Media
  - Offer
  - RTCOfferOptions
  - Reference
  - SDP
  - WebRTC
  - WebRTC API
  - rtc
browser-compat: api.RTCOfferOptions
---
<div>{{APIRef("WebRTC")}}</div>

<p>The <code><strong>RTCOfferOptions</strong></code> dictionary is used to provide optional settings when creating an {{domxref("RTCPeerConnection")}} offer with the {{domxref("RTCPeerConnection.createOffer", "createOffer()")}} method.</p>

<h2 id="Properties">Properties</h2>

<p><em>This dictionary also inherits properties from the {{domxref("RTCOfferAnswerOptions")}} dictionary, on which it's based.</em></p>

<dl>
 <dt>{{domxref("RTCOfferOptions.iceRestart", "iceRestart")}} {{optional_inline}}</dt>
 <dd>A Boolean which, when set to <code>true</code>, tells <code>createOffer()</code> to generate and use new values for the identifying properties of the SDP it creates, resulting in a request that triggers renegotiation of the ICE connection. This is useful if network conditions have changed in a way that make the current configuration untenable or impractical, for instance.</dd>
</dl>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>
