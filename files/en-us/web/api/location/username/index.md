---
title: 'Location: username'
slug: Web/API/Location/username
tags:
- API
- Location
- Property
- Reference
browser-compat: api.Location.username
---
<div>{{deprecated_header}}</div>

<p>The <strong><code>username</code></strong> property of the {{domxref("Location")}}
  interface is a {{domxref("USVString")}} containing the username specified before the
  domain name.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js"><em>string</em> = <em>object</em>.username;
<em>object</em>.username = <em>string</em>;
</pre>

<h2 id="Examples">Examples</h2>

<pre class="brush: js">// Let's &lt;a id="myAnchor" href="https://anonymous:flabada@developer.mozilla.org/en-US/docs/Location.username"&gt; be in the document
var anchor = document.getElementByID("myAnchor");
var result = anchor.username; // Returns:'anonymous'
</pre>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>
