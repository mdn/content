---
title: 'Window: afterprint event'
slug: Web/API/Window/afterprint_event
tags:
  - Event
  - Reference
browser-compat: api.Window.afterprint_event
---
<div>{{APIRef}}</div>

<p>The <strong><code>afterprint</code></strong> event is fired after the associated document has started printing or the print preview has been closed.</p>

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
   <td>{{domxref("Event")}}</td>
  </tr>
  <tr>
   <th scope="row">Event handler property</th>
   <td>{{domxref("WindowEventHandlers/onafterprint", "onafterprint")}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Examples">Examples</h2>

<p>Using <code>addEventListener()</code>:</p>

<pre class="brush: js">window.addEventListener('afterprint', (event) =&gt; {
  console.log('After print');
});</pre>

<p>Using the <code>onafterprint</code> event handler property:</p>

<pre class="brush: js">window.onafterprint = (event) =&gt; {
  console.log('After print');
};</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>Related events: {{domxref("Window/beforeprint_event", "beforeprint")}}</li>
</ul>
