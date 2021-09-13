---
title: 'Window: appinstalled event'
slug: Web/API/Window/appinstalled_event
tags:
  - API
  - Manifest
  - Reference
  - Web
  - appinstalled
  - events
  - web manifest
browser-compat: api.Window.appinstalled_event
---
<div>{{deprecated_header}}</div>

<p>The <strong><code>appinstalled</code></strong> event of the <a href="/en-US/docs/Web/Manifest">Web Manifest API</a> is fired when the browser has successfully installed a page as an application.</p>

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
   <th scope="row">Event handler</th>
   <td>{{domxref("Window/onappinstalled", "onappinstalled")}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Examples">Examples</h2>

<p>You can use the <code>appinstalled</code> event in an {{domxref("EventTarget/addEventListener", "addEventListener")}} method:</p>

<pre class="brush: js">window.addEventListener('appinstalled', function() {
  console.log('Thank you for installing our app!');
});</pre>

<p>Or use the {{domxref("Window/onappinstalled", "onappinstalled")}} event handler property:</p>

<pre class="brush: js">window.onappinstalled = function() {
  console.log('Thank you for installing our app!');
};</pre>

<h2 id="Browser_compatibility">Browser compatibility</h2>
<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>The associated event handler, {{domxref("Window.onappinstalled")}}</li>
</ul>
