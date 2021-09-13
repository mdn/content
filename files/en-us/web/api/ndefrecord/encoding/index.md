---
title: NDEFRecord.encoding
slug: Web/API/NDEFRecord/encoding
tags:
  - Encoding
  - NDEF
  - Reference
  - Web NFC
browser-compat: api.NDEFRecord.encoding
---
<div>{{securecontext_header}}{{SeeCompatTable}}{{APIRef()}}</div>
<p>The <strong><code>encoding</code></strong>
    property of the {{DOMxRef("NDEFRecord")}} interface returns the encoding of
    a textual payload, or <code>null</code> otherwise.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">NDEFRecord.encoding</pre>

<h3 id="Value">Value</h3>

<p>A {{DOMxRef("USVString")}} which can be one of the following: <code>"utf-8"</code>,
  <code>"utf-16"</code>, <code>"utf-16le"</code>, or <code>"utf-16be"</code>.</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>
