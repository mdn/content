---
title: PublicKeyCredentialCreationOptions.excludeCredentials
slug: Web/API/PublicKeyCredentialCreationOptions/excludeCredentials
tags:
- API
- Property
- PublicKeyCredentialCreationOptions
- Reference
- Web Authentication API
- WebAuthn
browser-compat: api.PublicKeyCredentialCreationOptions.excludeCredentials
---
<div>{{APIRef("Web Authentication API")}}{{securecontext_header}}</div>

<p><strong><code>excludeCredentials</code></strong>, an optional property of the
  {{domxref("PublicKeyCredentialCreationOptions")}} dictionary, is an {{jsxref("Array")}}
  whose elements are descriptors for the public keys already existing for a given user.
  This is provided by the relying party's server if it wants to prevent creation of new
  credentials for an existing user.</p>

<h2 id="Syntax">Syntax</h2>

<pre
  class="brush: js"><em>excludeCredentials </em>= <em>publicKeyCredentialCreationOptions</em>.excludeCredentials</pre>

<h3 id="Value">Value</h3>

<p>An {{jsxref("Array")}} whose elements are objects with the following properties:</p>

<dl>
  <dt><code>type</code></dt>
  <dd>A string describing type of public-key credential to be created. As of this writing
    (March 2019), only "<code>public-key</code>" may be used.</dd>
  <dt><code>id</code></dt>
  <dd>A {{domxref("BufferSource")}} matching an existing public key credential identifier
    ({{domxref("PublicKeyCredential.rawId")}}). This identifier is generated during the
    creation of the <code>PublicKeyCredential</code> instance.</dd>
  <dt><code>transports</code> {{optional_inline}}</dt>
  <dd>An {{jsxref("Array")}} of strings describing the possible transports between the
    client and the authenticator. The value of the strings may be:
    <ul>
      <li>"<code>usb</code>": the authenticator can be contacted via a removable USB link
      </li>
      <li>"<code>nfc</code>": the authenticator may be used over <a
          href="https://en.wikipedia.org/wiki/Near-field_communication">NFC (Near Field
          Communication)</a></li>
      <li>"<code>ble</code>": the authenticator may be used over <a
          href="https://en.wikipedia.org/wiki/Bluetooth_Low_Energy">BLE (Bluetooth Low
          Energy)</a></li>
      <li>"<code>internal</code>": the authenticator is specifically bound to the client
        device (cannot be removed).</li>
    </ul>
  </dd>
</dl>

<p>If the authenticator already contains one of such a public key credential, the client
  will throw a {{domxref("DOMException")}} or asks the user if they want to create a new
  credential.</p>

<h2 id="Examples">Examples</h2>

<pre class="brush: js">var publicKey = {
  excludeCredentials: [
    {
      type: "public-key",
      // the id for john.doe@example.com
      id  : new Uint8Array(26) /* this actually is given by the server */
    },
    {
      type: "public-key",
      // the id for john-doe@example.com
      id : new Uint8Array(26) /* another id */
    }
  ],
  challenge: new Uint8Array(26) /* this actually is given from the server */,
  rp: {
    name: "Example CORP",
    id  : "login.example.com"
  },
  user: {
    id: new Uint8Array(26), /* To be changed for each user */
    name: "jdoe@example.com",
    displayName: "John Doe",
  },
  pubKeyCredParams: [ {
    type: "public-key",
    alg: -7 } ]
};

navigator.credentials.create({ publicKey })
  .then(function (newCredentialInfo) {
    // send attestation response and client extensions
    // to the server to proceed with the registration
    // of the credential
  }).catch(function (err) {
     console.error(err);
  });</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>
