---
title: PresentationConnection.send()
slug: Web/API/PresentationConnection/send
tags:
- API
- Experimental
- Method
- NeedsContent
- NeedsExample
- Presentation API
- PresentationConnection
- Reference
- send
browser-compat: api.PresentationConnection.send
---
<div>{{APIRef("Presentation")}}</div>

<p>The <strong><code>send()</code></strong> method of the
  {{domxref("PresentationConnection")}} interface tells a controlling browsing context to
  send binary or text data to a presenting browsing context.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">PresentationConnection.send(data);</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><code>data</code></dt>
  <dd>The data to send to the presentation context. It will be one of the following:
    <ul>
      <li>{{jsxref("String")}}</li>
      <li>{{domxref("Blob")}}</li>
      <li>{{jsxref("Array")}}</li>
    </ul>
  </dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p><code>undefined</code>.</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>
