---
title: DOMTokenList.value
slug: Web/API/DOMTokenList/value
tags:
- API
- DOM
- DOMTokenList
- Property
- Reference
- value
browser-compat: api.DOMTokenList.value
---
<p>{{APIRef("DOM")}}</p>

<p>The <code><strong>value</strong></code> property of the {{domxref("DOMTokenList")}}
  interface is a stringifier that returns the value of the list as a
  {{domxref("DOMString")}}, or clears and sets the list to the given value.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js"><var>tokenList</var>.value;</pre>

<h3 id="Value">Value</h3>

<p>A {{domxref("DOMString")}}</p>

<h2 id="Examples">Examples</h2>

<p>In the following example we retrieve the list of classes set on a
  {{htmlelement("span")}} element as a <code>DOMTokenList</code> using
  {{domxref("Element.classList")}}, then write the value of the list to the
  <code>&lt;span&gt;</code>'s {{domxref("Node.textContent")}}.</p>

<p>First, the HTML:</p>

<pre class="brush: html">&lt;span class="a b c"&gt;&lt;/span&gt;</pre>

<p>Now the JavaScript:</p>

<pre class="brush: js">let span = document.querySelector("span");
let classes = span.classList;
span.textContent = classes.value;
</pre>

<p>The output looks like this:</p>

<p>{{ EmbedLiveSample('Examples', '100%', 60) }}</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>
