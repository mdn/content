---
title: Beacon API
slug: Web/API/Beacon_API
tags:
  - Guide
  - Overview
  - Web Performance
---
<div>{{DefaultAPISidebar("Beacon")}}</div>

<p>The <strong><code>Beacon</code></strong> API is used to send an asynchronous and non-blocking request to a web server. The request does not expect a response. Unlike requests made using {{domxref("XMLHttpRequest")}} or the <a href="/en-US/docs/Web/API/Fetch_API">Fetch API</a>, the browser guarantees to initiate beacon requests before the page is unloaded and to run them to completion.</p>

<p>The main use case for the Beacon API is to send analytics such as client-side events or session data to the server. Historically, websites have used {{domxref("XMLHttpRequest")}} for this, but browsers do not guarantee to send these asynchronous requests in some circumstances (for example, if the page is about to be unloaded). To combat this, websites have resorted to various techniques, such as making the request synchronous, that have a bad effect on responsiveness. Because beacon requests are both asynchronous and guaranteed to be sent, they combine good performance characteristics and reliability.</p>

<p>For more details about the motivation for and usage of this API, see the documentation for the {{domxref("navigator.sendBeacon()")}} method.</p>

<div class="notecard note">
<p><strong>Note:</strong> This API is <em>not available</em> in <a href="/en-US/docs/Web/API/Web_Workers_API">Web Workers</a> (not exposed via {{domxref("WorkerNavigator")}}).</p>
</div>

<h2>Interfaces</h2>

<p>This API defines a single method: {{domxref("navigator.sendBeacon()")}}.</p>

<p>The method takes two arguments, the URL and the data to send in the request. The data argument is optional and its type may be an {{domxref("ArrayBufferView")}}, {{domxref("Blob")}}, {{domxref("DOMString")}}, or {{domxref("FormData")}}. If the browser successfully queues the request for delivery, the method returns "<code>true</code>"; otherwise, it returns "<code>false</code>".</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications("api.Navigator.sendBeacon")}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat("api.Navigator.sendBeacon")}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="https://w3c.github.io/beacon/">Beacon standard</a></li>
 <li><a href="https://caniuse.com/#search=beacon">Beacon CanIUse data</a></li>
 <li><a href="https://ehsanakhgari.org/blog/2015-04-08/intercepting-beacons-through-service-workers">Intercepting beacons through service workers</a>; Ehsan Akhgari; 2015-Apr-08</li>
 <li><a href="https://webkit.org/blog/8821/link-click-analytics-and-privacy/">https://webkit.org/blog/8821/link-click-analytics-and-privacy/</a></li>
 <li><a href="https://calendar.perfplanet.com/2020/beaconing-in-practice/">Beaconing in Practice</a></li>
</ul>
