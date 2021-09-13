---
title: WorkerNavigator
slug: Web/API/WorkerNavigator
tags:
  - API
  - HTML DOM
  - Interface
  - Reference
  - Web Workers
  - WorkerNavigator
  - Workers
browser-compat: api.WorkerNavigator
---
<p>{{APIRef("Web Workers API")}}</p>

<p>The <code><strong>WorkerNavigator</strong></code> interface represents a subset of the {{DOMxRef("Navigator")}} interface allowed to be accessed from a {{DOMxRef("Worker")}}. Such an object is initialized for each worker and is available via the {{DOMxRef("WorkerGlobalScope.navigator", "self.navigator")}} property.</p>

<h2 id="Properties">Properties</h2>

<p><em>The <code>WorkerNavigator</code> interface doesn't inherit any property. </em></p>

<dl>
  <dt>{{DOMxRef("WorkerNavigator.appCodeName")}} {{Deprecated_Inline}}{{ReadOnlyInline}}</dt>
  <dd>Always returns <code>'Mozilla'</code>, in any browser. This property is kept only for compatibility purposes.</dd>
  <dt>{{DOMxRef("WorkerNavigator.appName")}} {{Deprecated_Inline}}{{ReadOnlyInline}}</dt>
  <dd>Returns the official name of the browser. Do not rely on this property to return the correct value.</dd>
  <dt>{{DOMxRef("WorkerNavigator.appVersion")}} {{Deprecated_Inline}}{{ReadOnlyInline}}</dt>
  <dd>Returns the version of the browser as a string. Do not rely on this property to return the correct value.</dd>
 <dt>{{DOMxRef("WorkerNavigator.connection")}}{{ReadOnlyInline}}</dt>
 <dd>Provides a {{DOMxRef("NetworkInformation")}} object containing information about the network connection of a device.</dd>
 <dt>{{DOMxRef("WorkerNavigator.hardwareConcurrency")}}{{ReadOnlyInline}}</dt>
 <dd>Returns the number of logical processor cores available.</dd>
 <dt>{{DOMxRef("WorkerNavigator.language")}} {{readonlyInline}}</dt>
 <dd>Returns a {{domxref("DOMString")}} representing the preferred language of the user, usually the language of the browser UI. The <code>null</code> value is returned when this is unknown.</dd>
 <dt>{{DOMxRef("WorkerNavigator.languages")}} {{readonlyInline}} {{experimental_inline}}</dt>
 <dd>Returns an array of {{domxref("DOMString")}} representing the languages known to the user, by order of preference.</dd>
 <dt>{{DOMxRef("WorkerNavigator.locks")}} {{Experimental_Inline}}{{ReadOnlyInline}}</dt>
 <dd>Returns a {{DOMxRef("LockManager")}} object which provides methods for requesting a new {{DOMxRef('Lock')}} object and querying for an existing <code>Lock</code> object.</dd>
 <dt>{{DOMxRef("WorkerNavigator.onLine")}}{{ReadOnlyInline}}</dt>
 <dd>Returns a boolean value indicating whether the browser is online.</dd>
 <dt>{{DOMxRef("WorkerNavigator.permissions")}} {{Experimental_Inline}}{{ReadOnlyInline}}</dt>
 <dd>Returns a {{DOMxRef("Permissions")}} object that can be used to query and update permission status of APIs covered by the <a href="/en-US/docs/Web/API/Permissions_API">Permissions API</a>.</dd>
 <dt>{{DOMxRef("WorkerNavigator.platform")}} {{Deprecated_Inline}}{{ReadOnlyInline}}</dt>
 <dd>Returns a string representing the platform of the browser. Do not rely on this property to return the correct value.</dd>
 <dt>{{DOMxRef("WorkerNavigator.product")}} {{Deprecated_Inline}}{{ReadOnlyInline}}</dt>
 <dd>Always returns <code>'Gecko'</code>, on any browser. This property is kept only for compatibility purposes.</dd>
 <dt>{{domxref("WorkerNavigator.serial")}} {{readonlyInline}}</dt>
 <dd>Returns a {{domxref("Serial")}} object,  which represents the entry point into the {{domxref("Web Serial API")}} to enable the control of serial ports.</dd>
 <dt>{{DOMxRef("WorkerNavigator.storage")}}{{ReadOnlyInline}} {{experimental_inline}}</dt>
 <dd>Returns a {{DOMxRef('StorageManager')}} interface for managing persistance permissions and estimating available storage.</dd>
 <dt>{{DOMxRef("WorkerNavigator.userAgent")}}{{ReadOnlyInline}}</dt>
 <dd>Returns the user agent string for the current browser.</dd>
 <dt>{{domxref("WorkerNavigator.userAgentData")}} {{readonlyInline}}</dt>
 <dd>Returns a {{domxref("NavigatorUAData")}} object, which gives access to information about the browser and operating system of the user.</dd>
</dl>

<h2 id="Methods">Methods</h2>

<p><em>The <code>WorkerNavigator</code> interface neither inherits nor implements any method.</em></p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>Other Worker-related interfaces: {{DOMxRef("Worker")}}, {{DOMxRef("WorkerLocation")}}, and {{DOMxRef("WorkerGlobalScope")}}.</li>
 <li><a href="/en-US/docs/Web/API/Web_Workers_API/Using_web_workers">Using web workers.</a></li>
</ul>
