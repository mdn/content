---
title: 'Window: transitioncancel event'
slug: Web/API/Window/transitioncancel_event
tags:
  - API
  - Event
  - Reference
  - Web
  - Window
  - events
  - transitioncancel
browser-compat: api.Window.transitioncancel_event
---
<div>{{APIRef}}{{SeeCompatTable}}</div>

<p>The <strong><code>transitioncancel</code></strong> event is fired when a <a href="/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions">CSS transition</a> is canceled.</p>

<p>See {{domxref("GlobalEventHandlers.ontransitioncancel")}} for more information.</p>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row">Bubbles</th>
   <td>Yes</td>
  </tr>
  <tr>
   <th scope="row">Cancelable</th>
   <td>No</td>
  </tr>
  <tr>
   <th scope="row">Interface</th>
   <td>{{domxref("TransitionEvent")}}</td>
  </tr>
  <tr>
   <th scope="row">Event handler property</th>
   <td>{{domxref("GlobalEventHandlers.ontransitioncancel")}}</td>
  </tr>
 </tbody>
</table>

<p>The original target for this event is the {{domxref("Element")}} that had the transition applied. You can listen for this event on the {{domxref("Window")}} interface to handle it in the capture or bubbling phases. For full details on this event please see the page on <a href="/en-US/docs/Web/API/HTMLElement/transitioncancel_event">HTMLElement: transitioncancel</a>.</p>

<h2 id="Examples">Examples</h2>

<p>This code adds a listener to the <code>transitioncancel</code> event:</p>

<pre class="brush: js">window.addEventListener('transitioncancel', () =&gt; {
  console.log('Transition canceled');
});</pre>

<p>The same, but using the {{domxref("GlobalEventHandlers.ontransitioncancel", "ontransitioncancel")}} property instead of <code>addEventListener()</code>:</p>

<pre class="brush: js">window.ontransitioncancel = () =&gt; {
  console.log('Transition canceled');
};</pre>

<p><a href="/en-US/docs/Web/API/HTMLElement/transitioncancel_event#Live_example">See a live example of this event.</a></p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>The {{domxref("GlobalEventHandlers.ontransitioncancel")}} event handler</li>
 <li>The {{domxref("TransitionEvent")}} interface</li>
 <li>CSS properties: {{cssxref("transition")}}, {{cssxref("transition-delay")}}, {{cssxref("transition-duration")}}, {{cssxref("transition-property")}}, {{cssxref("transition-timing-function")}}</li>
 <li>Related events: {{domxref("Window/transitionrun_event", "transitionrun")}}, {{domxref("Window/transitionstart_event", "transitionstart")}}, {{domxref("Window/transitionend_event", "transitionend")}}</li>
 <li>This event on {{domxref("HTMLElement")}} targets: {{domxref("HTMLElement/transitioncancel_event", "transitioncancel")}}</li>
 <li>This event on {{domxref("Document")}} targets: {{domxref("Document/transitioncancel_event", "transitioncancel")}}</li>
</ul>
