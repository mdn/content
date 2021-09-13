---
title: Navigator.onLine
slug: Web/API/Navigator/onLine
tags:
  - API
  - DOM Reference
  - Navigator
  - Online
  - Property
  - Reference
browser-compat: api.Navigator.onLine
---
<div>{{ApiRef("HTML DOM")}}</div>

<p>Returns the online status of the browser. The property returns a boolean value, with
  <code>true</code> meaning online and <code>false</code> meaning offline. The property
  sends updates whenever the browser's ability to connect to the network changes. The
  update occurs when the user follows links or when a script requests a remote page. For
  example, the property should return <code>false</code> when users click links soon after
  they lose internet connection.</p>

<p>Browsers implement this property differently.</p>

<p>In Chrome and Safari, if the browser is not able to connect to a local area network
  (LAN) or a router, it is offline; all other conditions return <code>true</code>. So
  while you can assume that the browser is offline when it returns a <code>false</code>
  value, you cannot assume that a true value necessarily means that the browser can access
  the internet. You could be getting false positives, such as in cases where the computer
  is running a virtualization software that has virtual ethernet adapters that are always
  "connected." Therefore, if you really want to determine the online status of the
  browser, you should develop additional means for checking. To learn more, see the HTML5
  Rocks article, <a href="http://www.html5rocks.com/en/mobile/workingoffthegrid.html">
    Working Off the Grid</a>.</p>

<p>In Firefox and Internet Explorer, switching the browser to offline mode sends a
  <code>false</code> value. Until Firefox 41, all other conditions return a
  <code>true</code> value; testing actual behavior on Nightly 68 on Windows shows that it
  only looks for LAN connection like Chrome and Safari giving false positives.</p>

<p>You can see changes in the network state by listening for the events on <a
    href="/en-US/docs/Web/API/document.ononline"><code>window.ononline</code></a> and <a
    href="/en-US/docs/Web/API/document.onoffline"><code>window.onoffline</code></a>.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js"><em>online</em> = <em>window</em>.navigator.onLine;
</pre>

<h3 id="Value">Value</h3>

<p><code>online</code> is a boolean <code>true</code> or <code>false</code>.</p>

<h2 id="Examples">Examples</h2>

<h3 id="Basic_usage">Basic usage</h3>

<p>To check if you are online, query <code>window.navigator.onLine</code>, as in the
  following example:</p>

<pre class="brush: js">if (navigator.onLine) {
  console.log('online');
} else {
  console.log('offline');
}</pre>

<p>If the browser doesn't support <code>navigator.onLine</code> the above example will
  always come out as <code>false</code>/<code>undefined</code>.</p>

<h3 id="Listening_for_changes_in_network_status">Listening for changes in network status
</h3>

<p>To see changes in the network state, use
  <code><a href="/en-US/docs/DOM/element.addEventListener">addEventListener</a></code> to
  listen for the events on <code>window.online</code> and <code>window.offline</code>, as
  in the following example:</p>

<pre class="brush: js">window.addEventListener('offline', function(e) { console.log('offline'); });

window.addEventListener('online', function(e) { console.log('online'); });
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="Notes">Notes</h2>

<p>See <a href="/en-US/docs/Online_and_offline_events">Online/Offline Events</a> for a
  more detailed description of this property as well as new offline-related features
  introduced in Firefox 3.</p>

<h2 id="See_also">See also</h2>

<ul>
  <li><a href="http://www.html5rocks.com/en/mobile/workingoffthegrid.html">HTML5 Rocks:
      Working Off the Grid With HTML5 Offline</a></li>
  <li><a href="http://www.html5rocks.com/en/tutorials/offline/whats-offline/">HTML5 Rocks:
      "Offline": What does it mean and why should I care?</a></li>
  <li><a href="http://hacks.mozilla.org/2010/01/offline-web-applications/">Mozilla Blog:
      Offline Web Applications</a></li>
</ul>
