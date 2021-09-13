---
title: 'HTMLElement: transitioncancel event'
slug: Web/API/HTMLElement/transitioncancel_event
tags:
  - CSS Transitions
  - Event
  - HTML DOM
  - HTMLElement
  - Reference
  - TransitionEvent
  - transitioncancel
browser-compat: api.HTMLElement.transitioncancel_event
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

<h2 id="Examples">Examples</h2>

<p>This code gets an element that has a transition defined and adds a listener to the <code>transitioncancel</code> event:</p>

<pre class="brush: js">const transition = document.querySelector('.transition');

transition.addEventListener('transitioncancel', () =&gt; {
  console.log('Transition canceled');
});</pre>

<p>The same, but using the {{domxref("GlobalEventHandlers.ontransitioncancel", "ontransitioncancel")}} property instead of <code>addEventListener()</code>:</p>

<pre class="brush: js">const transition = document.querySelector('.transition');

transition.ontransitioncancel = () =&gt; {
  console.log('Transition canceled');
};
</pre>

<h3 id="Live_example">Live example</h3>

<p>In the following example, we have a simple {{htmlelement("div")}} element, styled with a transition that includes a delay:</p>

<pre class="brush: html">&lt;div class="transition"&gt;&lt;/div&gt;
&lt;div class="message"&gt;&lt;/div&gt;</pre>

<pre class="brush: css">.transition {
  width: 100px;
  height: 100px;
  background: rgba(255,0,0,1);
  transition-property: transform background;
  transition-duration: 2s;
  transition-delay: 2s;
}

.transition:hover {
  transform: rotate(90deg);
  background: rgba(255,0,0,0);
}</pre>

<p>To this, we'll add some JavaScript to indicate that the <code><a href="/en-US/docs/Web/API/HTMLElement/transitionstart_event">transitionstart</a></code>, <code><a href="/en-US/docs/Web/API/HTMLElement/transitionrun_event">transitionrun</a></code>, <code><a href="/en-US/docs/Web/API/Window/transitioncancel_event">transitioncancel</a></code> and <code><a href="/en-US/docs/Web/API/Window/transitionend_event">transitionend</a></code> events fire. In this example, to cancel the transition, stop hovering over the transitioning box before the transition ends. For the transition end event to fire, stay hovered over the transition until the transition ends.</p>

<pre class="brush: js">const message = document.querySelector('.message');
const el = document.querySelector('.transition');

el.addEventListener('transitionrun', function() {
  message.textContent = 'transitionrun fired';
});

el.addEventListener('transitionstart', function() {
  message.textContent = 'transitionstart fired';
});

el.addEventListener('transitioncancel', function() {
  message.textContent = 'transitioncancel fired';
});

el.addEventListener('transitionend', function() {
  message.textContent = 'transitionend fired';
});
</pre>

<p>{{ EmbedLiveSample('Live_example', '100%', '150px') }}</p>

<p>The <code>transitioncancel</code> event is fired if the transition is cancelled in either direction after the <code>transitionrun</code> event occurs and before the <code>transitionend</code> is fired.</p>

<p>If there is no transition delay or duration, if both are 0s or neither is declared, there is no transition, and none of the transition events are fired.</p>

<p>If the <code>transitioncancel</code> event is fired, the <code>transitionend</code> event will not fire.</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>The {{domxref("GlobalEventHandlers.ontransitioncancel")}} event handler</li>
 <li>The {{domxref("TransitionEvent")}} interface</li>
 <li>CSS properties: {{cssxref("transition")}}, {{cssxref("transition-delay")}}, {{cssxref("transition-duration")}}, {{cssxref("transition-property")}}, {{cssxref("transition-timing-function")}}</li>
 <li>Related events: {{domxref("HTMLElement/transitionrun_event", "transitionrun")}}, {{domxref("HTMLElement/transitionstart_event", "transitionstart")}}, {{domxref("HTMLElement/transitionend_event", "transitionend")}}</li>
 <li>This event on {{domxref("Document")}} targets: {{domxref("Document/transitioncancel_event", "transitioncancel")}}</li>
 <li>This event on {{domxref("Window")}} targets: {{domxref("Window/transitioncancel_event", "transitioncancel")}}</li>
</ul>
