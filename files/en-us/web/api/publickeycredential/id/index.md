---
title: PublicKeyCredential.id
slug: Web/API/PublicKeyCredential/id
tags:
  - API
  - Credential Management API
  - Property
  - PublicKeyCredential
  - Reference
  - Web Authentication API
  - WebAuthn
browser-compat: api.PublicKeyCredential.id
---
<p>{{APIRef("Web Authentication API")}}{{securecontext_header}}</p>

<p>The <strong><code>id</code></strong> read-only property of the
  {{domxref("PublicKeyCredential")}} interface is a {{domxref("DOMString")}}, inherited
  from {{domxref("Credential")}}, which represents the identifier of the current
  <code>PublicKeyCredential</code> instance.</p>

<p>This property is a <a
    href="/en-US/docs/Glossary/Base64">base64url
    encoded</a> version of {{domxref("PublicKeyCredential.rawId")}}.</p>

<div class="note">
  <p><strong>Note:</strong> This property may only be used in top-level contexts and will
    not be available in an {{HTMLElement("iframe")}} for example.</p>
</div>

<h2 id="Syntax">Syntax</h2>

<pre
  class="brush: js"><em>id</em> = <em>publicKeyCredential</em>.id</pre>

<h3 id="Value">Value</h3>

<p>A {{domxref("DOMString")}} being the <a
    href="/en-US/docs/Glossary/Base64">base64url
    encoded</a> version of {{domxref("PublicKeyCredential.rawId")}}.</p>

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
    var id = newCredentialInfo.id;
    // Do something with the id

    // send attestation response and client extensions
    // to the server to proceed with the registration
    // of the credential
  }).catch(function (err) {
     console.error(err);
  });
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{domxref("Credential.id")}}</li>
</ul>
