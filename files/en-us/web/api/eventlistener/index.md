---
title: EventListener
slug: Web/API/EventListener
tags:
  - API
  - DOM
  - DOM Events
  - Interface
  - events
browser-compat: api.EventListener
---
<div>{{APIRef("DOM Events")}}</div>

<p>The <strong><code>EventListener</code></strong> interface represents an object that can handle an event dispatched by an {{domxref("EventTarget")}} object.</p>

<div class="note">
<p><strong>Note:</strong> Due to the need for compatibility with legacy content, <code>EventListener</code> accepts both a function and an object with a <code>handleEvent()</code> property function. This is shown in the <a href="#example">example</a> below.</p>
</div>

<h2 id="Properties">Properties</h2>

<p><em>This interface neither implements, nor inherits, any properties.</em></p>

<h2 id="Methods">Methods</h2>

<p><em>This interface doesn't inherit any methods.</em></p>

<dl>
 <dt>{{domxref("EventListener.handleEvent()")}}</dt>
 <dd>A function that is called whenever an event of the specified type occurs.</dd>
</dl>

<h2 id="Example">Example</h2>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;button id="btn"&gt;Click here!&lt;/button&gt;

&lt;p id="funcOutput"&gt;&lt;/p&gt;
&lt;p id="handleEvtOutput"&gt;&lt;/p&gt;
</pre>

<h3 id="JavaScript">JavaScript</h3>

<pre class="brush: js">const buttonElement = document.getElementById('btn');
const funcOutput = document.getElementById('funcOutput');
const handleEvtOutput = document.getElementById('handleEvtOutput');

// Add a handler for the 'click' event by providing a callback function.
// When the element is clicked, the output "Element clicked through function!"
// will appear in the p tag with the id of "funcOut".
buttonElement.addEventListener('click', function (event) {
  funcOutput.textContent = 'Element clicked through function!';
});

// For compatibility, a non-function object with a `handleEvent` property is
// treated just the same as a function itself.
// The output "Element clicked through handleEvent property!" will appear
// simultaneously in the p tag with the id of "handleEvtOutput".
buttonElement.addEventListener('click', {
  handleEvent: function (event) {
    handleEvtOutput.textContent = 'Element clicked through handleEvent property!';
  }
});
</pre>

<h3 id="Result">Result</h3>

<p>{{EmbedLiveSample('Example')}}</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h3 id="See_also">See also</h3>

<ul>
  <li><a href="/en-US/docs/Web/API/EventTarget/addEventListener">addEventListener</a></li>
</ul>
