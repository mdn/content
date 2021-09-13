---
title: RTCConfiguration.certificates
slug: Web/API/RTCConfiguration/certificates
tags:
- API
- Configuration
- DLTS
- Property
- RTCConfiguration
- RTCPeerConnection
- Reference
- Security
- Settings
- WebRTC
- WebRTC API
- WebRTC Device API
- certificates
- parameters
browser-compat: api.RTCConfiguration.certificates
---
<p>{{APIRef("WebRTC API")}}</p>

<p>The {{domxref("RTCConfiguration")}} dictionary's optional
  <code><strong>certificates</strong></code> property is an array of
  {{domxref("RTCCertificate")}} objects providing the security certificates available for
  use when authenticating duing the connection process.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">let <em>rtcConfiguration</em> = {
  certificates: <em>certificateList</em>
};

let <em>rtcConfiguration</em>.certificates = [ <em>cert1</em>... ];
let <em>certificates</em> = <em>rtcConfiguration</em>.certificates;

</pre>

<h3 id="Value">Value</h3>

<p>An array of {{domxref("RTCCertificate")}} objects, each specifying one security
  certificate available for use when connecting to a remote peer. If this property isn't
  specified, the browser will automatically generate and use a certificate to secure the
  connection.</p>

<p>See {{anch("Using certificates")}} below for more information on why you might want
  to—or not to—explicitly provide certificates.</p>

<h2 id="Description">Description</h2>

<p>If this property isn't included in the configuration, a set of certificates is
  automatically generated for each instance of {{domxref("RTCPeerConnection")}}. Although
  a given {{Glossary("DTLS")}} connection only uses a single certificate, providing
  multiple options in the <code>certificates</code> list may improve the odds of
  establishing a connection by increasing the chances a mutually-compatible encryption
  algorithm and key size may be found.</p>

<p>The method by which a browser decides which certificate to use is
  implementation-dependent. Some browsers may choose the first listed certificate and
  ignore the rest of the list; others may take a different approach.</p>

<h3 id="Using_certificates">Using certificates</h3>

<p>When you wish to provide your own certificates for use by an
  {{domxref("RTCPeerConnection")}} instead of having the <code>RTCPeerConnection</code>
  generate them automatically, you do so by calling the static
  {{domxref("RTCPeerConnection.generateCertificate()")}} function.</p>

<p>The <code>certificates</code> property's value cannot be changed once it's first
  specified. If it's included in the configuration passed into a call to a connection's
  {{domxref("RTCPeerConnection.setConfiguration", "setConfiguration()")}}, it is ignored.
</p>

<p>This attribute supports providing multiple certificates because even though a given
  DTLS connection uses only one certificate, providing multiple certificates allows
  support for multiple encryption algorithms. The implementation of
  <code>RTCPeerConnection</code> will choose which certificate to use based on the
  algorithms it and the remote peer support, as determined during DTLS handshake.</p>

<p>If you don't provide certificates, new ones are generated automatically. One obvious
  benefit to providing your own is identity key continuity—if you use the same certificate
  for subsequent calls, the remote peer can tell you're the same caller. This also avoids
  the cost of generating new keys.</p>

<p><strong>&lt;&lt;&lt;--- add link to information about identity ---&gt;&gt;&gt;</strong>
</p>

<h2 id="Examples">Examples</h2>

<p>This example uses {{domxref("RTCPeerConnection.generateCertificate()")}} to create a
  certificate, then uses it to open a new {{domxref("RTCPeerConnection")}}.</p>

<pre class="brush: js">RTCPeerConnection.generateCertificate({
    name: 'RSASSA-PKCS1-v1_5',
    hash: 'SHA-256',
    modulusLength: 2048,
    publicExponent: new Uint8Array([1, 0, 1])
}).then(function(cert) {
  var pc = new RTCPeerConnection({certificates: [cert]});
});</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>
