---
title: DOMTokenList.forEach()
slug: Web/API/DOMTokenList/forEach
tags:
- DOM
- DOMTokenList
- Iterable
- Method
- Reference
- Web
- forEach
browser-compat: api.DOMTokenList.forEach
---
<p>{{APIRef("DOM")}}</p>

<p>The <strong><code>forEach()</code></strong> method of the {{domxref("DOMTokenList")}}
  interface calls the callback given in parameter once for each value pair in the list, in
  insertion order.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js"><var>tokenList</var>.forEach(<var>callback</var> [, <var>thisArg</var>]);
</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><code><var>callback</var></code></dt>
  <dd>Function to execute for each element, eventually taking three arguments:
    <dl>
      <dt><code><var>currentValue</var></code></dt>
      <dd>The current element being processed in the array.</dd>
      <dt><code><var>currentIndex</var></code></dt>
      <dd>The index of the current element being processed in the array.</dd>
      <dt><code><var>listObj</var></code></dt>
      <dd>The array that <code>forEach()</code> is being applied to.</dd>
    </dl>
  </dd>
  <dt><code><var>thisArg</var></code> {{Optional_inline}}</dt>
  <dd>Value to use as {{jsxref("Operators/this", "this")}} when executing <code><var>callback</var></code>.
  </dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>{{jsxref('undefined')}}.</p>

<h2 id="Example">Example</h2>

<p>In the following example we retrieve the list of classes set on a
  {{htmlelement("span")}} element as a <code>DOMTokenList</code> using
  {{domxref("Element.classList")}}. We when retrieve an iterator containing the values
  using <code>forEach()</code>, writing each one to the <code>&lt;span&gt;</code>'s
  {{domxref("Node.textContent")}} inside the <code>forEach()</code> inner function.</p>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;span class="a b c"&gt;&lt;/span&gt;</pre>

<h3 id="JavaScript">JavaScript</h3>

<pre class="brush: js">let span = document.querySelector("span");
let classes = span.classList;
let iterator = classes.values();

classes.forEach(
  function(value, key, listObj) {
    span.textContent += `${value} ${key}/${this}  ++  `;
  },
  "arg"
);</pre>

<h3 id="Result">Result</h3>

<p>{{ EmbedLiveSample('Example', '100%', 60) }}</p>

<h2 id="Polyfill">Polyfill</h2>

<p>This {{Glossary("Polyfill","polyfill")}} adds compatibility to all Browsers supporting
  <a href="https://caniuse.com/#search=es5">ES5</a>:</p>

<pre class="brush: js">if (window.DOMTokenList &amp;&amp; !DOMTokenList.prototype.forEach) {
  DOMTokenList.prototype.forEach = function (callback, thisArg) {
    thisArg = thisArg || window;
    for (var i = 0; i &lt; this.length; i++) {
      callback.call(thisArg, this[i], i, this);
    }
  };
}
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{domxref("DOMSettableTokenList")}} (object that extends DOMTokenList with settable
    <em>.value</em> property)</li>
</ul>
