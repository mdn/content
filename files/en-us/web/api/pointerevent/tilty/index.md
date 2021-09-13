---
title: PointerEvent.tiltY
slug: Web/API/PointerEvent/tiltY
tags:
- API
- DOM
- Interface
- PointerEvent
- Property
- Reference
browser-compat: api.PointerEvent.tiltY
---
<div>{{ APIRef("Pointer Events") }}</div>

<p>The <strong><code>tiltY</code></strong> read-only property of the
  {{domxref("PointerEvent")}} interface is the angle (in degrees) between the <em>X-Z
    plane</em> of the pointer and the screen. This property is typically only useful for a
  pen/stylus pointer type.</p>

<p>For an illustration of this property, see <a
    href="https://w3c.github.io/pointerevents/#dom-pointerevent-tilty">Figure 3 in the
    specification</a>.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">var <em>tiltY</em> = pointerEvent.<em>tiltY</em>;
</pre>

<h3 id="Return_value">Return value</h3>

<dl>
  <dt><code>tiltY</code></dt>
  <dd>The angle in degrees between the X-Z plane of the pointer (stylus) and the screen.
    The range of values is <code>-90</code> to <code>90</code>, inclusive, where a
    positive value is a tilt towards the user. For devices that do not support this
    property, the value is <code>0</code>.</dd>
</dl>

<h2 id="Example">Example</h2>

<p>This example illustrates simple accessing of the
  {{domxref("PointerEvent.tiltX","tiltX")}} and <code>tiltY</code> properties.</p>

<pre class="brush: js">someElement.addEventListener("pointerdown", function(event) {
  process_tilt(event.tiltX, event.tiltY);
}, false);</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>
