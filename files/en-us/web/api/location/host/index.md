---
title: 'Location: host'
slug: Web/API/Location/host
tags:
- API
- Location
- Property
- Reference
browser-compat: api.Location.host
---
<div>{{ApiRef("Location")}}</div>

<p>The <strong><code>host</code></strong> property of the {{domxref("Location")}}
  interface is a {{domxref("USVString")}} containing the host, that is the
  <em>hostname</em>, and then, if the <em>port</em> of the URL is nonempty, a
  <code>':'</code>, and the <em>port</em> of the URL.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js"><em>string</em> = <em>object</em>.host;
<em>object.<code>host</code></em> = <em>string</em>;
</pre>

<h2 id="Examples">Examples</h2>

<pre class="brush: js">var anchor = document.createElement("a");

anchor.href = "https://developer.mozilla.org/en-US/Location.host"
anchor.host == "developer.mozilla.org"

anchor.href = "https://developer.mozilla.org:443/en-US/Location.host"
anchor.host == "developer.mozilla.org"
// The port number is not included because 443 is the scheme's default port

anchor.href = "https://developer.mozilla.org:4097/en-US/Location.host"
anchor.host == "developer.mozilla.org:4097"
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>
