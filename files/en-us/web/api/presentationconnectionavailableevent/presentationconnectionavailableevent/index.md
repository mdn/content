---
title: PresentationConnectionAvailableEvent
slug: >-
  Web/API/PresentationConnectionAvailableEvent/PresentationConnectionAvailableEvent
tags:
  - API
  - Constructor
  - Experimental
  - Presentation API
  - PresentationConnectionAvailableEvent
  - Reference
browser-compat: api.PresentationConnectionAvailableEvent.PresentationConnectionAvailableEvent
---
<p>The <strong><code>PresentationConnectionAvailableInit()</code></strong> constructor creates a new {{domxref("PresentationConnectionAvailableEvent")}}.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">var pcaEvent = new PresentationConnectionAvailableInit(typeArg, eventInit)</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
	<dt><code>typeArg</code></dt>
	<dd>A {{jsxref("DOMSTring")}} giving the name of the event. For this event it should be <code>connectionavailable</code>.</dd>
	<dt><code>eventInit</code></dt>
	<dd>A <code>PresentationConnectionAvailableInit</code> dictionary, which only contains a reference to a <code>PresentationConnection</code> object.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>An instance of the {{domxref("PresentationConnectionAvailableEvent")}} interface.</p>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>
