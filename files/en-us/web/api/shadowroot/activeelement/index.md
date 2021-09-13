---
title: ShadowRoot.activeElement
slug: Web/API/ShadowRoot/activeElement
tags:
- API
- Property
- Reference
- ShadowRoot
- Web Components
- shadow dom
browser-compat: api.ShadowRoot.activeElement
---
<div>{{APIRef("Shadow DOM")}}</div>

<p>The <strong><code>activeElement</code></strong> read-only property of the
{{domxref("ShadowRoot")}} interface returns the element within the shadow tree that has focus.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js"><var>shadowRoot</var>.activeElement</pre>

<h3 id="Value">Value</h3>

<p>The {{domxref('Element')}} which currently has focus, or <code>null</code> if there is no focused element.</p>

<h2 id="Examples">Examples</h2>

<pre class="brush: js">let customElem = document.querySelector('my-shadow-dom-element');
let shadow = customElem.shadowRoot;
let focusedElem = shadow.activeElement;</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2>See also</h2>

<ul>
  <li>{{domxref("Document.activeElement")}}</li>
</ul>
