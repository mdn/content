---
title: HTMLSlotElement.assign()
slug: Web/API/HTMLSlotElement/assign
tags:
- API
- HTMLSlotElement
- Method
- Reference
- Web Components
- assign
- shadow dom
browser-compat: api.HTMLSlotElement.assign
---
<div>{{APIRef("Shadow DOM API")}}</div>

<p>The <strong><code>assign()</code></strong> method of the
  {{domxref("HTMLSlotElement")}} interface sets the slot's <strong>manually assigned nodes</strong> to an ordered set of slottables. The manually assigned nodes set is initially empty until nodes are assigned using <code>assign()</code>.</p>

<h2 id="Syntax">Syntax</h2>

<pre
  class="brush: js">
HTMLSlotElement.assign(nodes)</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><code>nodes</code></dt>
  <dd>A set of {{domxref("Element")}} or {{domxref("Text")}} nodes.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>Undefined.</p>

<h2 id="Examples">Examples</h2>

<p>In the below example, the <code>assign()</code> method is used to display the correct tab in a tabbed application. The function is called and passed the panel to show, which is then assigned to the slot.</p>

<pre class="brush: js">function UpdateDisplayTab(elem, tabIdx) {
  const shadow = elem.shadowRoot;
  const slot = shadow.querySelector("slot");
  const panels = elem.querySelectorAll('tab-panel');
  if (panels.length && tabIdx && tabIdx &lt;= panels.length ) {
    slot.assign([panels[tabIdx-1]]);
  } else {
    slot.assign([]);
  }
}</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>
