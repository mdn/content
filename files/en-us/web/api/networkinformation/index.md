---
title: NetworkInformation
slug: Web/API/NetworkInformation
tags:
  - API
  - Experimental
  - Interface
  - Network Information API
  - NetworkInformation
  - Reference
browser-compat: api.NetworkInformation
---
<div>{{APIRef("Network Information API")}}{{SeeCompatTable}}</div>

<p>The <code><strong>NetworkInformation</strong></code> interface provides information about the connection a device is using to communicate with the network and provides a means for scripts to be notified if the connection type changes. The <code>NetworkInformation</code> interfaces cannot be instantiated. It is instead accessed through the <code>connection</code> property of the {{domxref("Navigator")}} interface.</p>

<p>{{AvailableInWorkers}}</p>

<h2 id="Properties">Properties</h2>

<p><em>This interface also inherits properties of its parent, {{domxref("EventTarget")}}.</em></p>

<dl>
 <dt>{{domxref("NetworkInformation.downlink")}} {{readonlyinline}}</dt>
 <dd>Returns the effective bandwidth estimate in megabits per second, rounded to the nearest multiple of 25 kilobits per seconds.</dd>
 <dt>{{domxref("NetworkInformation.downlinkMax")}} {{readonlyinline}}</dt>
 <dd>Returns the maximum downlink speed, in megabits per second (Mbps), for the underlying connection technology.</dd>
 <dt>{{domxref("NetworkInformation.effectiveType")}} {{readonlyinline}}</dt>
 <dd>Returns the effective type of the connection meaning one of 'slow-2g', '2g', '3g', or '4g'. This value is determined using a combination of recently observed round-trip time and downlink values.</dd>
 <dt>{{domxref("NetworkInformation.rtt")}} {{readonlyinline}}</dt>
 <dd>Returns the estimated effective round-trip time of the current connection, rounded to the nearest multiple of 25 milliseconds.</dd>
 <dt>{{domxref("NetworkInformation.saveData")}} {{readonlyinline}}</dt>
 <dd>Returns <code>true</code> if the user has set a reduced data usage option on the user agent.</dd>
 <dt>{{domxref("NetworkInformation.type")}} {{readonlyinline}}</dt>
 <dd>Returns the type of connection a device is using to communicate with the network. It will be one of the following values:
 <ul>
  <li><code>bluetooth</code></li>
  <li><code>cellular</code></li>
  <li><code>ethernet</code></li>
  <li><code>none</code></li>
  <li><code>wifi</code></li>
  <li><code>wimax</code></li>
  <li><code>other</code></li>
  <li><code>unknown</code></li>
 </ul>
 </dd>
</dl>

<h3 id="Event_handlers">Event handlers</h3>

<dl>
 <dt>{{domxref("NetworkInformation.onchange")}}</dt>
 <dd>The event that's fired when connection information changes and the {{event("change")}} is fired on this object.</dd>
</dl>

<h2 id="Methods">Methods</h2>

<p><em>This interface also inherits methods of its parent, {{domxref("EventTarget")}}.</em></p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/Web/API/Network_Information_API">Network Information API</a></li>
 <li><a href="/en-US/docs/Online_and_offline_events">Online and offline events</a></li>
 <li>The {{domxref("Navigator")}} interface that implements it.</li>
</ul>
