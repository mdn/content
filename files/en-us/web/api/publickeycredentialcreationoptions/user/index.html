---
title: PublicKeyCredentialCreationOptions.user
slug: Web/API/PublicKeyCredentialCreationOptions/user
tags:
- API
- Property
- PublicKeyCredentialCreationOptions
- Reference
- Web Authentication API
- WebAuthn
browser-compat: api.PublicKeyCredentialCreationOptions.user
---
<p>{{APIRef("Web Authentication API")}}{{securecontext_header}}</p>

<p>The <strong><code>user</code></strong> property of the
  {{domxref("PublicKeyCredentialCreationOptions")}} dictionary is an object describing the
  user account for which the credentials are generated (via
  {{domxref("CredentialsContainer.create()","navigator.credentials.create()")}}).</p>

<h2 id="Syntax">Syntax</h2>

<pre
  class="brush: js"><em>userAccount </em>= <em>publicKeyCredentialCreationOptions</em>.user</pre>

<h2 id="Properties">Properties</h2>

<dl>
  <dt><code>displayName</code></dt>
  <dd>A {{domxref("DOMString")}} which is human readable and intended for display. It may
    be the full name of the user (e.g. <code>"John Doe"</code>). This is not intended to
    store the login of the user (see <code>name</code> below).</dd>
  <dt><code>icon</code> {{optional_inline}}</dt>
  <dd>An URL as a {{domxref("USVString")}} value which points to an image resource which
    can be the avatar image for the user.</dd>
  <dt><code>id</code></dt>
  <dd>A {{domxref("BufferSource")}} uniquely identifying a given user. This an opaque
    identifier which can be used by the authenticator to link the user account with its
    corresponding credentials. This value will later be used when fetching the credentials
    in {{domxref("AuthenticatorAssertionResponse.userHandle")}}.</dd>
  <dt><code>name</code></dt>
  <dd>A {{domxref("DOMString")}} giving a human-readable name for the user's identifier
    (e.g. <code>"jdoe@example.com"</code>).This property is intended for display and may
    be use to distinguish different account with the same <code>displayName</code>.</dd>
</dl>

<h2 id="Examples">Examples</h2>

<pre class="brush: js">var publicKey = {
  challenge: new Uint8Array(26) /* this actually is given from the server */,
  rp: {
    name: "Example CORP",
    id  : "login.example.com"
  },
  user: {
    // To be changed for each user
    id: new Uint8Array.from(window.atob("LAEGMLKJNRLKGNAMLAFALFKA="), c=&gt;c.charCodeAt(0));

    name: "jdoe@example.com",
    displayName: "John Doe",
    icon: "https://gravatar.com/avatar/jdoe.png"
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
  <li>{{domxref("AuthenticatorAssertionResponse.userHandle")}} which should match the
    <code>id</code> property of <code>user</code> for the same user/credential.</li>
</ul>
