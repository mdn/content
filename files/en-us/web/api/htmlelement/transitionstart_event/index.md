---
title: 'HTMLElement: transitionstart event'
slug: Web/API/HTMLElement/transitionstart_event
tags:
  - CSS Transitions
  - Event
  - HTML DOM
  - HTMLElement
  - Reference
  - TransitionEvent
  - transitionstart
browser-compat: api.HTMLElement.transitionstart_event
---
<div>{{APIRef}}{{SeeCompatTable}}</div>

<p>The <strong><code>transitionstart</code></strong> event is fired when a <a href="/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions">CSS transition</a> has actually started, i.e., after any {{cssxref("transition-delay")}} has ended.</p>

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
   <td>{{domxref("GlobalEventHandlers/ontransitionstart", "ontransitionstart")}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Examples">Examples</h2>

<p>This code adds a listener to the <code>transitionstart</code> event:</p>

<pre class="brush: js">element.addEventListener('transitionstart', () =&gt; {
  console.log('Started transitioning');
});</pre>

<p>The same, but using the <code><a href="/en-US/docs/Web/API/GlobalEventHandlers/ontransitionrun">ontransitionstart</a></code> property instead of <code>addEventListener()</code>:</p>

<pre class="brush: js">element.ontransitionrun = () =&gt; {
  console.log('Started transitioning');
};</pre>

<h3 id="Live_example">Live example</h3>

<p>In the following example, we have a simple {{htmlelement("div")}} element, styled with a transition that includes a delay:</p>

<pre class="brush: html">&lt;div class="transition"&gt;Hover over me&lt;/div&gt;
&lt;div class="message"&gt;&lt;/div&gt;</pre>

<pre class="brush: css">.transition {
  width: 100px;
  height: 100px;
  background: rgba(255,0,0,1);
  transition-property: transform, background;
  transition-duration: 2s;
  transition-delay: 1s;
}

.transition:hover {
  transform: rotate(90deg);
  background: rgba(255,0,0,0);
}</pre>

<p>To this, we'll add some JavaScript to indicate where the {{domxref("HTMLElement/transitionstart_event", "transitionstart")}} and {{domxref("HTMLElement/transitionrun_event", "transitionrun")}} events fire.</p>

<pre class="brush: js">const transition = document.querySelector('.transition');
const message = document.querySelector('.message');

transition.addEventListener('transitionrun', function() {
  message.textContent = 'transitionrun fired';
});

transition.addEventListener('transitionstart', function() {
  message.textContent = 'transitionstart fired';
});

transition.addEventListener('transitionend', function() {
  message.textContent = 'transitionend fired';
});
</pre>

<p>{{ EmbedLiveSample('Examples', '100%', '150px') }}</p>

<p>The difference is that:</p>

<ul>
 <li>transitionrun fires when the transition is created (i.e. at the start of any delay).</li>
 <li>transitionstart fires when the actual animation has begun (i.e. at the end of any delay).</li>
</ul>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>The {{domxref("GlobalEventHandlers.ontransitionstart")}} event handler</li>
 <li>The {{domxref("TransitionEvent")}} interface</li>
 <li>CSS properties: {{cssxref("transition")}}, {{cssxref("transition-delay")}}, {{cssxref("transition-duration")}}, {{cssxref("transition-property")}}, {{cssxref("transition-timing-function")}}</li>
 <li>Related events: {{domxref("HTMLElement/transitionend_event", "transitionend")}}, {{domxref("HTMLElement/transitionrun_event", "transitionrun")}}, {{domxref("HTMLElement/transitioncancel_event", "transitioncancel")}}</li>
 <li>This event on {{domxref("Document")}} targets: {{domxref("Document/transitionstart_event", "transitionstart")}}</li>
 <li>This event on {{domxref("Window")}} targets: {{domxref("Window/transitionstart_event", "transitionstart")}}</li>
</ul>
