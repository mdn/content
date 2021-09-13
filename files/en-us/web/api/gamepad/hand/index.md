---
title: Gamepad.hand
slug: Web/API/Gamepad/hand
tags:
  - API
  - Experimental
  - Gamepad
  - Gamepad API
  - Property
  - Reference
  - hand
browser-compat: api.Gamepad.hand
---
<div>{{APIRef("Gamepad")}}{{SeeCompatTable}}</div>

<p>The <strong><code>hand</code></strong> read-only property of the {{domxref("Gamepad")}} interface returns an enum defining what hand the controller is being held in, or is most likely to be held in.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">var myHand = gamepadInstance.hand;</pre>

<h3 id="Value">Value</h3>

<p>A <code><a href="https://w3c.github.io/gamepad/extensions.html#gamepadhand-enum">GamepadHand</a></code> enum; possible values are:</p>

<ul>
	<li><code>left</code> — the left hand.</li>
	<li><code>right</code> — the right hand.</li>
	<li>Empty string ("") — this value is returned if the other values are not applicable, e.g. the controller is held in both hands, or would be fine in either.</li>
</ul>

<h2 id="Examples">Examples</h2>

<p>TBC</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
	<li><a href="/en-US/docs/Web/API/Gamepad_API">Gamepad API</a></li>
</ul>
