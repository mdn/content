---
title: Document.URL
slug: Web/API/Document/URL
tags:
- API
- DOM
- Document
- Property
- Reference
browser-compat: api.Document.URL
---
<div>{{APIRef("DOM")}}</div>

<p>The <code><strong>URL</strong></code> read-only property of the {{domxref("Document")}}
  interface returns the document location as a string.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">const <em>url</em> = <em>document</em>.URL
</pre>

<h2 id="Example">Example</h2>

<h3 id="JavaScript">JavaScript</h3>

<pre class="brush: js">document.getElementById("url").textContent = document.URL;</pre>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;p id="urlText"&gt;
  URL:&lt;br/&gt;
  &lt;span id="url"&gt;URL goes here&lt;/span&gt;
&lt;/p&gt;</pre>

<h3 id="Result">Result</h3>

<p>{{EmbedLiveSample("Example", "100%", 100)}}</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>The {{domxref("document.documentURI")}} property which returns the same value.</li>
</ul>
