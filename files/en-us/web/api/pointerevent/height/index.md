---
title: PointerEvent.height
slug: Web/API/PointerEvent/height
tags:
  - API
  - DOM
  - Interface
  - PointerEvent
  - Property
  - Reference
browser-compat: api.PointerEvent.height
---
<div>{{ APIRef("Pointer Events") }}</div>

<p>The <code><strong>height</strong></code> read-only property of the
  {{domxref("PointerEvent")}} interface represents the height of the pointer's contact
  geometry, along the y-axis (in CSS pixels). Depending on the source of the pointer
  device (for example a finger), for a given pointer, each event may produce a different
  value.</p>

<p>If the input hardware cannot report the contact geometry to the browser, the height
  defaults to <code>1</code>.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">var <em>contactHeight</em> = <em>pointerEvent</em>.height;
</pre>

<h3 id="Return_value">Return value</h3>

<dl>
  <dt><code>contactHeight</code></dt>
  <dd>The height of the event's contact area (in CSS pixels).</dd>
</dl>

<h2 id="Example">Example</h2>

<p>An example of this property is included in the <a
    href="/en-US/docs/Web/API/PointerEvent/width#example">PointerEvent.width example</a>.
</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>
