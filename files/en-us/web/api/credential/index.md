---
title: Credential
slug: Web/API/Credential
tags:
  - API
  - Credential Management API
  - Experimental
  - Interface
  - NeedsExample
  - Reference
  - credential management
browser-compat: api.Credential
---
<div>{{SeeCompatTable}}{{APIRef("Credential Management API")}}{{securecontext_header}}</div>

<p>The <strong><code>Credential</code></strong> interface of the <a href="/en-US/docs/Web/API/Credential_Management_API">Credential Management API</a> provides information about an entity (usually a user) as a prerequisite to a trust decision.</p>

<p><code>Credential</code> objects may be of 3 different types:</p>

<ul>
 <li>{{domxref("PasswordCredential")}}</li>
 <li>{{domxref("PublicKeyCredential")}}</li>
 <li>{{domxref("FederatedCredential")}}</li>
</ul>

<h2 id="Properties">Properties</h2>

<dl>
 <dt>{{domxref("Credential.id")}} {{readonlyInline}}</dt>
 <dd>Returns a {{domxref("DOMString")}} containing the credential's identifier. This might be any one of a GUID, username, or email address.</dd>
 <dt>{{domxref("Credential.type")}} {{readonlyInline}}</dt>
 <dd>Returns a {{domxref("DOMString")}} containing the credential's type. Valid values are <code>password</code>, <code>federated</code> and <code>public-key</code>. (For {{domxref("PasswordCredential")}}, {{domxref("FederatedCredential")}} and {{domxref("PublicKeyCredential")}})</dd>
</dl>

<h3 id="Event_handlers">Event handlers</h3>

<p>None.</p>

<h2 id="Methods">Methods</h2>

<p>None.</p>

<h2 id="Examples">Examples</h2>

<pre class="brush: js">let pwdCredential = new PasswordCredential({
  id: "example-username", // Username/ID
  name: "John Doe", // Display name
  password: "correct horse battery staple" // Password
});

console.assert(pwdCredential.type === "password");
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>
