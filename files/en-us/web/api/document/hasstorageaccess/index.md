---
title: Document.hasStorageAccess()
slug: Web/API/Document/hasStorageAccess
tags:
- API
- DOM
- Document
- Method
- Reference
- Storage Access API
- hasStorageAccess
browser-compat: api.Document.hasStorageAccess
---
<div>{{APIRef}}{{SeeCompatTable}}</div>

<p>The <strong><code>hasStorageAccess()</code></strong> method of the
  {{domxref("Document")}} interface returns a {{jsxref("Promise")}} that resolves with a
  boolean value indicating whether the document has access to its first-party storage.</p>

<p>See <a href="/en-US/docs/Web/API/Storage_Access_API">Storage Access API</a> for more
  information.</p>

<h2 id="Syntax">Syntax</h2>

<pre
  class="brush: js">var <em>promise</em> = document.hasStorageAccess();</pre>

<h3 id="Parameters">Parameters</h3>

<p>None.</p>

<h3 id="Return_value">Return value</h3>

<p>A {{jsxref("Promise")}} that resolves with a boolean value indicating whether the
  document has access to its first-party storage.</p>

<p>If the promise gets resolved and a user gesture event was being processed when the
  function was originally called, the resolve handler will run as if a user gesture was
  being processed, so it will be able to call APIs that require user activation.</p>

<h2 id="Examples">Examples</h2>

<pre class="brush: js">document.hasStorageAccess().then(hasAccess =&gt; {
  if (hasAccess) {
    // storage access has been granted already.
  } else {
    // storage access hasn't been granted already;
    // you may want to call requestStorageAccess().
  }
});</pre>

<h2 id="Specifications">Specifications</h2>

<p>The API is currently only at the proposal stage — the standardization process has yet
  to begin. You can currently find specification details of the API at Apple's <a
    href="https://webkit.org/blog/8124/introducing-storage-access-api/">Introducing
    Storage Access API</a> blog post, and <a
    href="https://github.com/whatwg/html/issues/3338">WHATWG HTML issue 3338 — Proposal:
    Storage Access API</a>.</p>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<p><a href="/en-US/docs/Web/API/Storage_Access_API">Storage Access API</a></p>
