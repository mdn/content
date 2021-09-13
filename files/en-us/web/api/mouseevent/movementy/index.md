---
title: MouseEvent.movementY
slug: Web/API/MouseEvent/movementY
tags:
  - API
  - DOM
  - DOM Events
  - MouseEvent
  - MovementY
  - Property
  - Read-only
  - Reference
  - mouse lock
  - pointer lock
browser-compat: api.MouseEvent.movementY
---
<div>{{APIRef("DOM Events")}}</div>

<p>The <strong><code>movementY</code></strong> read-only property of the
  {{domxref("MouseEvent")}} interface provides the difference in the Y coordinate of the
  mouse pointer between the given event and the previous {{event("mousemove")}} event. In
  other words, the value of the property is computed like this:
  <code>currentEvent.movementY = currentEvent.screenY - previousEvent.screenY</code>.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">var <em>yShift</em> = <em>instanceOfMouseEvent</em>.movementY;
</pre>

<h3 id="Return_value">Return value</h3>

<p>A number</p>

<h2 id="Example">Example</h2>

<p>This example logs the amount of mouse movement using {{domxref("MouseEvent.movementX",
  "movementX")}} and <code>movementY</code>.</p>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;p id="log"&gt;Move your mouse around.&lt;/p&gt;</pre>

<h3 id="JavaScript">JavaScript</h3>

<pre class="brush: js">function logMovement(event) {
  log.innerText = `movement: ${event.movementX}, ${event.movementY}\n${log.innerText}`;
}

const log = document.getElementById('log');
document.addEventListener('mousemove', logMovement);</pre>

<h3 id="Result">Result</h3>

<p>{{EmbedLiveSample("Example")}}</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{domxref("MouseEvent.movementX")}}</li>
  <li>{{domxref("MouseEvent")}}</li>
  <li><a href="/en-US/docs/Web/API/Pointer_Lock_API">Pointer Lock</a></li>
</ul>
