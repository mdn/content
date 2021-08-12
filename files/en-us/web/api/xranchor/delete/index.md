---
title: XRAnchor.delete()
slug: Web/API/XRAnchor/delete
tags:
- API
- Method
- Reference
- AR
- VR
- XR
- WebXR
browser-compat: api.XRAnchor.delete
---
<div>{{APIRef("WebXR Device API")}}</div>

<p>The <code><strong>delete()</strong></code> method of the {{domxref("XRAnchor")}} interface removes an anchor. This can be useful when an application is no longer interested in receiving updates to an anchor.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">delete()</pre>

<h3 id="Parameters">Parameters</h3>

<p>None.</p>

<h3 id="Return_value">Return value</h3>

<p>Returns {{jsxref("undefined")}}.</p>

<h2>Examples</h2>

<h3>Removing all anchors</h3>

<pre class="brush: js">
let anchorsCollection = new Set();

// Upon creating anchors, add them to the Set
// anchorsCollection.add(anchor);

for (const anchor of anchorsCollection) {
  anchor.delete();
}

anchorsCollection.clear();
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>
