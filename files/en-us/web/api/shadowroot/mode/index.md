---
title: ShadowRoot.mode
slug: Web/API/ShadowRoot/mode
tags:
- API
- Property
- Reference
- ShadowRoot
- mode
- shadow dom
browser-compat: api.ShadowRoot.mode
---
<div>{{APIRef("Shadow DOM")}}</div>

<p>The <strong><code>mode</code></strong> read-only property of the {{domxref("ShadowRoot")}}
	specifies its mode — either <code>open</code> or <code>closed</code>. This defines
	whether or not the shadow root's internal features are accessible from JavaScript.</p>

<p>When the <code>mode</code> of a shadow root is "<code>closed</code>", the shadow root’s
	implementation internals are inaccessible and unchangeable from JavaScript—in the same
	way the implementation internals of, for example, the {{HTMLElement("video")}} element
	are inaccessible and unchangeable from JavaScript.</p>

<h2 id="Syntax">Syntax</h2>

<pre
	class="brush: js">var <em>mode</em> = <em>shadowRoot</em>.mode</pre>

<h3 id="Value">Value</h3>

<p>A value defined in the
	<code><a href="https://dom.spec.whatwg.org/#enumdef-shadowrootmode">ShadowRootMode</a></code>
	enum — either <code>open</code> or <code>closed</code>.</p>

<h2 id="Examples">Examples</h2>

<pre class="brush: js">
  // We create a closed shadow root, that is not accessible
  let element = document.createElement("div");
  element.attachShadow({ mode: "closed" });
  element.shadowRoot // null as the shadow root is closed

  // We create an open shadow root, that is accessible
  let element2 = document.createElement("div");
  element2.attachShadow({ mode: "open" });
  console.log("The shadow is" + element2.shadowRoot.mode) // logs "The shadow is open"
  element2.shadowRoot.innerHTML("<p>Opened shadow</p>") // The shadow is open, we can access it from outside
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>
