---
title: CharacterData.insertData()
slug: Web/API/CharacterData/insertData
tags:
- API
- DOM
- Method
- Node
- Reference
- CharacterData
browser-compat: api.CharacterData.insertData
---
<div>{{APIRef("DOM")}}</div>

<p>
  The <code>insertData()</code> method of the {{domxref("CharacterData")}}
  interface inserts the provided data into this <code>CharacterData</code>
  Node's current data, at the provided offset from the start of the existing
  data. The provided data is spliced into the existing data.
</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js notranslate">
  <var>characterData</var>.insertData(<var>offset</var>, <var>data</var>)
</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><code><var>offset</var></code></dt>
  <dd>The offset number of characters to insert the provided data at.</dd>
  <dt><code><var>data</var></code></dt>
  <dd>The data to insert to the given <code>CharacterData</code> object.</dd>
</dl>

<h3 id="Returns">Return value</h3>

<p>{{jsxref("undefined")}}.</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>
