---
title: AuthenticatorAttestationResponse.getTransports()
slug: Web/API/AuthenticatorAttestationResponse/getTransports
tags:
- API
- AuthenticatorAttestationResponse
- Method
- Reference
- Web Authentication API
- WebAuthn
browser-compat: api.AuthenticatorAttestationResponse.getTransports
---
<p>{{APIRef("Web Authentication API")}}{{securecontext_header}}</p>

<p><strong><code>getTransports()</code></strong> is a method of the
  {{domxref("AuthenticatorAttestationResponse")}} interface that returns an
  {{jsxref("Array")}} containing strings describing the different transports which may be
  used by the authenticator.</p>

<p>Such transports may be USB, NFC, BLE or internal (applicable when the authenticator is
  not removable from the device).</p>

<div class="notecard note">
  <p><strong>Note:</strong> An <code>AuthenticatorAttestationResponse</code> instance is
    available on {{domxref("PublicKeyCredential.response")}} after calling
    {{domxref("CredentialsContainer.create()","navigator.credentials.create()")}}.</p>
</div>

<div class="note">
  <p><strong>Note:</strong> This method may only be used in top-level contexts and will
    not be available in an {{HTMLElement("iframe")}} for example.</p>
</div>

<h2 id="Syntax">Syntax</h2>

<pre
  class="brush: js">arrTransports = authenticatorAttestationResponse.getTransports()</pre>

<h3 id="Parameters">Parameters</h3>

<p>None.</p>

<h3 id="Return_value">Return value</h3>

<p>An {{jsxref("Array")}} containing the different transports supported by the
  authenticator or nothing if this information is not available.of the processing of the
  different extensions by the client. The elements of this array are supposed to be in
  lexicographical order. Their values may be :</p>

<ul>
  <li><code>"usb"</code>: the authenticator can be contacted via a removable USB link</li>
  <li><code>"nfc"</code>: the authenticator may be used over <a
      href="https://en.wikipedia.org/wiki/Near-field_communication">NFC (Near Field
      Communication)</a></li>
  <li><code>"ble"</code>: the authenticator may be used over <a
      href="https://en.wikipedia.org/wiki/Bluetooth_Low_Energy">BLE (Bluetooth Low
      Energy)</a></li>
  <li><code>"internal"</code>: the authenticator is specifically bound to the client
    device (cannot be removed).</li>
</ul>

<h2 id="Examples">Examples</h2>

<pre class="brush: js">var publicKey = {
  challenge: /* from the server */,
  rp: {
    name: "Example CORP",
    id  : "login.example.com"
  },
  user: {
    id: new Uint8Array(16),
    name: "jdoe@example.com",
    displayName: "John Doe"
  },
  pubKeyCredParams: [
    {
      type: "public-key",
      alg: -7
    }
  ]
};

navigator.credentials.create({ publicKey })
  .then(function (newCredentialInfo) {
    var transports = newCredentialInfo.response.getTransports();
    console.table(transports); // may be something like ["internal", "nfc", "usb"]
  }).catch(function (err) {
     console.error(err);
  });</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>
