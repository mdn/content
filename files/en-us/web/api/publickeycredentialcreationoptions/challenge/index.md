---
title: PublicKeyCredentialCreationOptions.challenge
slug: Web/API/PublicKeyCredentialCreationOptions/challenge
tags:
- API
- Property
- PublicKeyCredentialCreationOptions
- Reference
- Web Authentication API
- WebAuthn
browser-compat: api.PublicKeyCredentialCreationOptions.challenge
---
<p>{{APIRef("Web Authentication API")}}{{securecontext_header}}</p>

<p>The <strong><code>challenge</code></strong> property of the
  {{domxref("PublicKeyCredentialCreationOptions")}} dictionary is a
  {{domxref("BufferSource")}} used as <a
    href="https://en.wikipedia.org/wiki/Challenge%E2%80%93response_authentication">a
    cryptographic challenge</a>. This is randomly generated then sent from the relying
  party's server. This value (among other client data) will be signed by the
  authenticator, using its private key, and must be sent back for verification to the
  server as part of {{domxref("AuthenticatorAttestationResponse.attestationObject")}}.</p>

<div class="notecard note">
  <p><strong>Note:</strong> When the credential is retrieved with a
    {{domxref("CredentialsContainer.get()","navigator.credentials.get()")}} call, the
    signature of the challenge is contained in
    {{domxref("AuthenticatorAssertionResponse.signature")}}.</p>
</div>

<div class="notecard note">
  <p><strong>Note:</strong> A challenge will be at least 16 bytes long.</p>
</div>

<h2 id="Syntax">Syntax</h2>

<pre
  class="brush: js"><em>challenge </em>= <em>publicKeyCredentialCreationOptions</em>.challenge</pre>

<h3 id="Value">Value</h3>

<p>A {{domxref("BufferSource")}} which is at least 16 bytes long. Contains a cryptographic
  challenge emitted from the relying party's server which must be signed by the
  authenticator's private key and sent back (within the
  {{domxref("AuthenticatorAttestationResponse.attestationObject","response","",1)}}) to
  the relying party's server for verification.</p>

<h2 id="Examples">Examples</h2>

<pre class="brush: js">var publicKey = {
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
  pubKeyCredParams: [
    {
      type: "public-key",
      alg: -7
    }
  ]
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

<h2 id="See_also">See also</h2>

<ul>
  <li>{{domxref("AuthenticatorAttestationResponse.attestationObject")}} which contains the
    signature of the challenge within its <code>attStmt</code> property.</li>
  <li>{{domxref("PublicKeyCredentialRequestOptions.challenge")}}, the analogous option
    property used when fetching a credential.</li>
  <li>{{domxref("AuthenticatorAssertionResponse.signature")}} which is produced using the
    challenge and the private key of the authenticator when fetching a credential.</li>
</ul>
