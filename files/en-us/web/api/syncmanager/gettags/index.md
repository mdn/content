---
title: SyncManager.getTags()
slug: Web/API/SyncManager/getTags
tags:
- API
- Experimental
- Method
- Reference
- ServiceWorker
- SyncManager
- getTags
browser-compat: api.SyncManager.getTags
---
<p>{{APIRef("Service Workers API")}}{{Non-standard_header}}</p>

<p>The <code><strong>SyncManager.getTags</strong></code> method of the
  {{domxref("SyncManager")}} interface returns a list of developer-defined identifiers for
  <code>SyncManager</code> registrations.</p>

<h2 id="Syntax">Syntax</h2>

<pre
  class="brush: js">SyncManager.getTags().then(function(<em>tags[]</em>) { ... })</pre>

<h3 id="Returns">Returns</h3>

<p>A {{jsxref("Promise")}} that resolves to an array of {{jsxref("DOMString")}}s
  containing developer-defined identifiers for <code>SyncManager</code> registrations.</p>

<h3 id="Parameters">Parameters</h3>

<p>None.</p>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>
