---
title: Navigator.productSub
slug: Web/API/Navigator/productSub
tags:
- API
- Deprecated
- HTML DOM
- Navigator
- Property
- Read-only
browser-compat: api.Navigator.productSub
---
<div>{{ ApiRef("HTML DOM") }} {{Deprecated_Header}}</div>

<p>The <code><strong>Navigator.productSub</strong></code> read-only property returns the
  build number of the current browser.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js"><em>prodSub</em> = navigator.productSub</pre>

<ul>
  <li><code>prodSub</code> is a string.</li>
</ul>

<h2 id="Example">Example</h2>

<pre class="brush:js">&lt;script&gt;
function prodsub() {
  var dt = document.getElementById("d").childNodes[0];
  dt.data = navigator.productSub;
}
&lt;/script&gt;

&lt;button onclick="prodsub();"&gt;productSub&lt;/button&gt;
// returns: 20010725</pre>

<h2 id="Notes">Notes</h2>

<p>On IE, this property returns undefined.</p>

<p>On Apple Safari and Google Chrome this property always returns <code>20030107</code>.
</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>
