---
title: 'Document: lostpointercapture event'
slug: Web/API/Document/lostpointercapture_event
tags:
  - API
  - Document
  - Event
  - PointerEvent
  - Reference
  - lostpointercapture
browser-compat: api.Document.lostpointercapture_event
---
<div>{{APIRef}}</div>

<p>The <strong><code>lostpointercapture</code></strong> event is fired when a <a href="/en-US/docs/Web/API/Pointer_events#pointer_capture">captured pointer</a> is released.</p>

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
   <td>{{domxref("GlobalEventHandlers/onlostpointercapture", "onlostpointercapture")}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Examples">Examples</h2>

<p>This example listens for the <code>lostpointercapture</code> event, and captures the pointer for an element on <code>pointerdown</code>. When the user subsequently releases the pointer, the <code>lostpointercapture</code> event will be fired.</p>

<pre class="brush: js">const para = document.querySelector('p');

document.addEventListener('lostpointercapture', () =&gt; {
  console.log('I\'ve been released!')
});

para.addEventListener('pointerdown', (event) =&gt; {
  para.setPointerCapture(event.pointerId);
});
</pre>

<p>The same example, but using the <code>onlostpointercapture</code> event handler property:</p>

<pre class="brush: js">const para = document.querySelector('p');

document.onlostpointercapture = () =&gt; {
  console.log('I\'ve been released!')
};

para.addEventListener('pointerdown', (event) =&gt; {
  para.setPointerCapture(event.pointerId);
});
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>Related events
  <ul>
   <li>{{domxref("Document/lostpointercapture_event", "lostpointercapture")}}</li>
   <li>{{domxref("Document/pointerover_event", "pointerover")}}</li>
   <li>{{domxref("Document/pointerenter_event", "pointerenter")}}</li>
   <li>{{domxref("Document/pointerdown_event", "pointerdown")}}</li>
   <li>{{domxref("Document/pointermove_event", "pointermove")}}</li>
   <li>{{domxref("Document/pointerup_event", "pointerup")}}</li>
   <li>{{domxref("Document/pointercancel_event", "pointercancel")}}</li>
   <li>{{domxref("Document/pointerout_event", "pointerout")}}</li>
   <li>{{domxref("Document/pointerleave_event", "pointerleave")}}</li>
  </ul>
 </li>
 <li>{{domxref("GlobalEventHandlers.onlostpointercapture")}} event handler property</li>
 <li>This event on <code>HTMLElement</code> targets: {{domxref("HTMLElement/lostpointercapture_event", "lostpointercapture")}} event</li>
</ul>
