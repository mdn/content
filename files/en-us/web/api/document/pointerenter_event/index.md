---
title: 'Document: pointerenter event'
slug: Web/API/Document/pointerenter_event
tags:
  - API
  - Document
  - Event
  - PointerEvent
  - Reference
  - onpointerenter
  - pointerenter
browser-compat: api.Document.pointerenter_event
---
<div>{{APIRef}}</div>

<p>The <code>pointerenter</code> event fires when a pointing device is moved into the hit test boundaries of an element or one of its descendants, including as a result of a {{domxref("Document/pointerdown_event", "pointerdown")}} event from a device that does not support hover (see {{domxref("Document/pointerdown_event", "pointerdown")}}).</p>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row">Bubbles</th>
   <td>No</td>
  </tr>
  <tr>
   <th scope="row">Cancelable</th>
   <td>No</td>
  </tr>
  <tr>
   <th scope="row">Interface</th>
   <td>{{domxref("PointerEvent")}}</td>
  </tr>
  <tr>
   <th scope="row">Event handler property</th>
   <td>{{domxref("GlobalEventHandlers/onpointerenter", "onpointerenter")}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Examples">Examples</h2>

<p>Using <code>addEventListener()</code>:</p>

<pre class="brush: js">document.addEventListener('pointerenter', (event) =&gt; {
  console.log('Pointer entered element');
});</pre>

<p>Using the <code>onpointerenter</code> event handler property:</p>

<pre class="brush: js">document.onpointerenter = (event) =&gt; {
  console.log('Pointer entered element');
};</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>{{domxref("Document/gotpointercapture_event", "gotpointercapture")}}</li>
 <li>{{domxref("Document/lostpointercapture_event", "lostpointercapture")}}</li>
 <li>{{domxref("Document/pointerover_event", "pointerover")}}</li>
 <li>{{domxref("Document/pointerdown_event", "pointerdown")}}</li>
 <li>{{domxref("Document/pointermove_event", "pointermove")}}</li>
 <li>{{domxref("Document/pointerup_event", "pointerup")}}</li>
 <li>{{domxref("Document/pointercancel_event", "pointercancel")}}</li>
 <li>{{domxref("Document/pointerout_event", "pointerout")}}</li>
 <li>{{domxref("Document/pointerleave_event", "pointerleave")}}</li>
 <li>{{domxref("GlobalEventHandlers/onpointerenter", "onpointerenter")}} event handler property</li>
 <li>This event on <code>HTMLElement</code> targets: {{domxref("HTMLElement/pointerenter_event", "pointerenter")}} event</li>
</ul>
