---
title: CustomElementRegistry.upgrade()
slug: Web/API/CustomElementRegistry/upgrade
tags:
- API
- CustomElementRegistry
- Method
- Reference
- Upgrade
- Web Components
- custom elements
browser-compat: api.CustomElementRegistry.upgrade
---
<p>{{APIRef("CustomElementRegistry")}}</p>

<p>The <code><strong>upgrade()</strong></code> method of the
  {{domxref("CustomElementRegistry")}} interface upgrades all shadow-containing custom
  elements in a {{domxref("Node")}} subtree, even before they are connected to the main
  document.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">customElements.upgrade(<em>root</em>);
</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><code>root</code></dt>
  <dd>A {{domxref("Node")}} instance with shadow-containing descendant elements that are
    to be upgraded. If there are no descendant elements that can be upgraded, no error is
    thrown.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>Void.</p>

<h2 id="Examples">Examples</h2>

<p>Taken from the <a
    href="https://html.spec.whatwg.org/multipage/custom-elements.html#dom-customelementregistry-upgrade">HTML
    spec</a>:</p>

<pre class="brush: js">const el = document.createElement("spider-man");

class SpiderMan extends HTMLElement {}
customElements.define("spider-man", SpiderMan);

console.assert(!(el instanceof SpiderMan)); // not yet upgraded

customElements.upgrade(el);
console.assert(el instanceof SpiderMan);    // upgraded!
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>
