---
title: Element.requestPointerLock()
slug: Web/API/Element/requestPointerLock
tags:
  - API
  - DOM
  - Experimental
  - Method
  - NeedsExample
  - PointerEvent
  - Reference
  - mouse lock
browser-compat: api.Element.requestPointerLock
---
<div>{{ APIRef("DOM") }}{{ SeeCompatTable }}</div>

<p>The <strong><code>Element.requestPointerLock()</code></strong> method lets you
  asynchronously ask for the pointer to be locked on the given element.</p>

<p>To track the success or failure of the request, it is necessary to listen for the
  {{event("pointerlockchange")}} and {{event("pointerlockerror")}} events at the
  {{domxref("Document")}} level.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js"><em>instanceOfElement</em>.requestPointerLock();
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{ domxref("Document.pointerLockElement") }}</li>
  <li>{{ domxref("Document.exitPointerLock()") }}</li>
  <li><a href="/en-US/docs/Web/API/Pointer_Lock_API">Pointer Lock</a></li>
</ul>
