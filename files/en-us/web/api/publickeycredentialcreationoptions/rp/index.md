---
title: PublicKeyCredentialCreationOptions.rp
slug: Web/API/PublicKeyCredentialCreationOptions/rp
tags:
- API
- Property
- PublicKeyCredentialCreationOptions
- Reference
- Web Authentication API
- WebAuthn
browser-compat: api.PublicKeyCredentialCreationOptions.rp
---
<p>{{APIRef("Web Authentication API")}}{{securecontext_header}}</p>

<p>The <strong><code>rp</code></strong> property of the
  {{domxref("PublicKeyCredentialCreationOptions")}} dictionary is an object describing the
  relying party which requested the credential creation (via
  {{domxref("CredentialsContainer.create()","navigator.credentials.create()")}}).</p>

<h2 id="Syntax">Syntax</h2>

<pre
  class="brush: js"><em>relyingPartyObj</em> = <em>publicKeyCredentialCreationOptions</em>.rp</pre>

<h2 id="Properties">Properties</h2>

<dl>
  <dt><code>icon</code> {{optional_inline}}</dt>
  <dd>An URL as a {{domxref("USVString")}} value which points to an image resource which
    can be the logo/icon of the relying party.</dd>
  <dt><code>id</code></dt>
  <dd>A {{domxref("DOMString")}} uniquely identifying a relying party. The default value
    of this property is the domain of the current document (e.g.
    <code>"login.example.com"</code>). It may be overridden with a suffix of the current
    domain (e.g. <code>"example.com"</code>).</dd>
  <dt><code>name</code></dt>
  <dd>A {{domxref("DOMString")}} giving a human-readable name for the relying party. This
    property is intended for display (e.g. <code>"Example CORP"</code>).</dd>
</dl>

<h2 id="Examples">Examples</h2>

<pre class="brush: js">var publicKey = {
  challenge: /* from the server */,
  rp: {
    name: "Example CORP",
    id  : "login.example.com",
    icon: "https://login.example.com/login.ico"
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
