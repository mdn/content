---
title: DOMTokenList.add()
slug: Web/API/DOMTokenList/add
tags:
- API
- Add
- DOM
- DOMTokenList
- Method
- Reference
browser-compat: api.DOMTokenList.add
---
<p>{{APIRef("DOM")}}</p>

<p>The <code><strong>add()</strong></code> method of the {{domxref("DOMTokenList")}}
  interface adds the given <em>token</em> to the list.</p>

<h2 id="Syntax">Syntax</h2>

<pre
  class="brush: js"><var>tokenList</var>.add(<var>token1</var>[, <var>token2</var>[, ...<var>tokenN</var>]]);</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><code><var>token<em>N</em></var></code></dt>
  <dd>A {{domxref("DOMString")}} representing the token (or tokens) to add to the
    <code><var>tokenList</var></code>.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p><code>undefined</code></p>

<h2 id="Examples">Examples</h2>

<p>In the following example we retrieve the list of classes set on a
  {{htmlelement("span")}} element as a <code>DOMTokenList</code> using
  {{domxref("Element.classList")}}. We then add a new token to the list, and write the
  list into the <code>&lt;span&gt;</code>'s {{domxref("Node.textContent")}}.</p>

<p>First, the HTML:</p>

<pre class="brush: html">&lt;span class="a b c"&gt;&lt;/span&gt;</pre>

<p>Now the JavaScript:</p>

<pre class="brush: js">let span = document.querySelector("span");
let classes = span.classList;
classes.add("d");
span.textContent = classes;
</pre>

<p>The output looks like this:</p>

<p>{{ EmbedLiveSample('Examples', '100%', 60) }}</p>

<p>You can add multiple tokens as well:</p>

<pre class="brush: js">span.classList.add("d", "e", "f");
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>
