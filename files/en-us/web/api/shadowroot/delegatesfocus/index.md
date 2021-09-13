---
title: ShadowRoot.delegatesFocus
slug: Web/API/ShadowRoot/delegatesFocus
tags:
- API
- Property
- Reference
- ShadowRoot
- Web Components
- delegatesFocus
- shadow dom
browser-compat: api.ShadowRoot.delegatesFocus
---
<div>{{APIRef("Shadow DOM")}}</div>

<p>The <strong><code>delegatesFocus</code></strong> read-only property of the
  {{domxref("ShadowRoot")}} interface returns a boolean that indicates whether
  delegatesFocus was set when the shadow was attached (see
  {{domxref("Element.attachShadow()")}}).</p>

<h2 id="Syntax">Syntax</h2>

<pre
  class="brush: js">var <var>df</var> = <var>shadowRoot</var>.delegatesFocus</pre>

<h3 id="Value">Value</h3>

<p>A boolean value — <code>true</code> if the shadow root does delegate focus,
  <code>false</code> if it doesn't.</p>

<h2 id="Examples">Examples</h2>

<pre class="brush: js">let customElem = document.querySelector('my-shadow-dom-element');
let shadow = customElem.shadowRoot;

  ...

// Does it delegate focus?
let hostElem = shadow.delegatesFocus;</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>
