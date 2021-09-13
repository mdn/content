---
title: RTCIdentityAssertion
slug: Web/API/RTCIdentityAssertion
tags:
  - API
  - Experimental
  - Interface
  - RTCIdentityAssertion
  - Reference
  - WebRTC
  - WebRTC API
browser-compat: api.RTCIdentityAssertion
---
<p>{{APIRef("WebRTC")}}{{SeeCompatTable}}</p>

<p>The <strong><code>RTCIdentityAssertion</code></strong> interface of the <a href="/en-US/docs/Web/API/WebRTC_API">WebRTC API</a> represents the identity of the a remote peer of the current connection. If no peer has yet been set and verified this interface returns <code>null</code>. Once set it can't be changed.</p>

<h2 id="Properties">Properties</h2>

<dl>
 <dt>{{domxref("RTCIdentityAssertion.idp")}}</dt>
 <dd>Indicates the provider of the identity assertion.</dd>
 <dt>{{domxref("RTCIdentityAssertion.name")}}</dt>
 <dd>Indicates the name of the identity assertion provider.</dd>
</dl>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>
