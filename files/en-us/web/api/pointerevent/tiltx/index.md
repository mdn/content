---
title: PointerEvent.tiltX
slug: Web/API/PointerEvent/tiltX
tags:
- API
- DOM
- Interface
- PointerEvent
- Property
- Reference
browser-compat: api.PointerEvent.tiltX
---
<div>{{ APIRef("Pointer Events") }}</div>

<p>The <strong><code>tiltX</code></strong> read-only property of the
  {{domxref("PointerEvent")}} interface is the angle (in degrees) between the <em>Y-Z
    plane</em> of the pointer and the screen. This property is typically only useful for a
  pen/stylus pointer type.</p>

<p>For an illustration of this property see <a
    href="https://w3c.github.io/pointerevents/#dom-pointerevent-tiltx">Figure 2 in the
    specification</a>.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">var <em>tilt</em>X = pointerEvent.<em>tiltX</em>;
</pre>

<h3 id="Return_value">Return value</h3>

<dl>
  <dt><code>tiltX</code></dt>
  <dd>The angle in degrees between the Y-Z plane of the pointer (stylus) and the screen.
    The range of values is <code>-90</code> to <code>90</code>, inclusive, where a
    positive value is a tilt to the right. For devices that do not support this property,
    the value is <code>0</code>.</dd>
</dl>

<h2 id="Example">Example</h2>

<p>This example illustrates simple accessing of the <code>tiltX</code> and
  {{domxref("PointerEvent.tiltY","tiltY")}} properties.</p>

<pre class="brush: js">someElement.addEventListener("pointerdown", function(event) {
  process_tilt(event.tiltX, event.tiltY);
}, false);
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>
