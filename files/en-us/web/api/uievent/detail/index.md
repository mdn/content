---
title: UIEvent.detail
slug: Web/API/UIEvent/detail
tags:
  - API
  - DOM
  - Property
  - Read-only
  - Reference
browser-compat: api.UIEvent.detail
---
<div>{{APIRef("DOM Events")}}</div>

<p>The <strong><code>UIEvent.detail</code></strong> read-only property, when non-zero, provides the current (or next, depending on the event) click count.</p>

<p>For {{event("click")}} or {{event("dblclick")}} events, <code>UIEvent.detail</code> is the current click count.</p>

<p>For {{event("mousedown")}} or {{event("mouseup")}} events, <code>UIEvent.detail</code> is <em>1 plus</em> the current click count.</p>

<p>For all other {{domxref("UIEvent")}} objects, <code>UIEvent.detail</code> is always zero.</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>
