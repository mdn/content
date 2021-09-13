---
title: DOMTokenList.remove()
slug: Web/API/DOMTokenList/remove
tags:
- API
- DOM
- DOMTokenList
- Method
- Reference
- remove
browser-compat: api.DOMTokenList.remove
---
<p>{{APIRef("DOM")}}</p>

<p>The <code><strong>remove()</strong></code> method of the {{domxref("DOMTokenList")}}
  interface removes the specified <em>tokens</em> from the list.</p>

<h2 id="Syntax">Syntax</h2>

<pre
  class="brush: js"><var>tokenList</var>.remove(<var>token1</var>[, <var>token2</var>[, ...<var>tokenN</var>]]);</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><code><var>token<em>N</em></var></code></dt>
  <dd>A {{domxref("DOMString")}} representing the token you want to remove from the list.
    If the string is not in the list, no error is thrown, and nothing happens.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p><code>undefined</code></p>

<h2 id="Examples">Examples</h2>

<p>In the following example we retrieve the list of classes set on a
  {{htmlelement("span")}} element as a <code>DOMTokenList</code> using
  {{domxref("Element.classList")}}. We then remove a token from the list, and write the
  list into the <code>&lt;span&gt;</code>'s {{domxref("Node.textContent")}}.</p>

<p>First, the HTML:</p>

<pre class="brush: html">&lt;div id="ab" class="a b c"&gt;&lt;/div&gt;
&lt;div id="a" class="a b c"&gt;&lt;/div&gt;</pre>

<p>Now the JavaScript:</p>

<pre class="brush: js">let span = document.getElementById("ab");
let classes = span.classList;
classes.remove("c");
span.textContent = classes;
</pre>

<p>To remove multiple classes at once, you can supply multiple tokens. The order you
  supply the tokens doesn't have to match the order they appear in the list:</p>

<pre class="brush: js">let span2 = document.getElementById("a")
let classes2 = span2.classList;

classes2.remove("c", "b");
span2.textContent = classes2;
</pre>

<p>The output looks like this:</p>

<p>{{ EmbedLiveSample('Examples', '100%', 60) }}</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>
