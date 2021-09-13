---
title: Proximity Events
slug: Web/API/Proximity_Events
tags:
  - API
  - Experimental
  - Proximity Events
  - Reference
  - Deprecated
---
<div>{{DefaultAPISidebar("Proximity Events")}}{{Deprecated_Header}}</div>
<div class="notecard warning">
  <p><strong>Warning:</strong> The Proximity Events APIs are not supported by any current major browser, and should not be used. This page is provided for historical interest.</p>
</div>

<p>The <strong>proximity events</strong> are a handy way to know when a user is close to a device. These events make it possible to react to such a change, for example by shutting down the screen of a smartphone when the user is having a phone call with the device close to their ear.</p>

There are two proximity events (see links for documentation.):
<ul>
  <li>{{domxref("UserProximityEvent")}}, handled by <code>window.onuserproximity</code></li>
  <li>{{domxref("DeviceProximityEvent")}}, handled by <code>window.ondeviceproximity</code></li>
 </ul>

 <p>The difference between them is that {{domxref("UserProximityEvent")}} simply notifies <code>true</code> when the user is considered "close", while {{domxref("DeviceProximityEvent")}} provides an estimate of the actual distance to a nearby object.</p>

<div class="notecard note">
  <p><strong>Note:</strong> Obviously, the API requires the device to have a proximity sensor, which are mostly available only on mobile devices. Devices without such a sensor may support those events but will never fire them.</p>
</div>


<h2 id="Specifications">Specifications</h2>

<p>This feature is no longer on track to become a standard. Its historical specification is still <a href="https://w3c.github.io/proximity/">available</a>.</p>
