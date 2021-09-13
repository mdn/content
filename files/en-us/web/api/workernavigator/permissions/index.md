---
title: WorkerNavigator.permissions
slug: Web/API/WorkerNavigator/permissions
tags:
- API
- Experimental
- Permissions
- Property
- Reference
- Web Workers
- WorkerNavigator
- Workers
browser-compat: api.WorkerNavigator.permissions
---
<p>{{APIRef("Web Workers API")}}{{SeeCompatTable}}</p>

<p>The <code><strong>WorkerNavigator.permissions</strong></code> read-only property
  returns a {{domxref("Permissions")}} object that can be used to query and update
  permission status of APIs covered by the <a
    href="/en-US/docs/Web/API/Permissions_API">Permissions API</a>.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js"><em>permissionsObj</em> = navigator.permissions
</pre>

<h2 id="Value">Value</h2>

<p>A {{domxref("Permissions")}} object.</p>

<h2 id="Examples">Examples</h2>

<pre class="brush: js">navigator.permissions.query({name:'notifications'}).then(function(result) {
  if (result.state === 'granted') {
    showNotification();
  } else if (result.state === 'prompt') {
    requestNotificationPermission()
  }
});
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_Support">Browser Support</h2>

<div>

  <p>{{Compat}}</p>
</div>

<h2 id="See_also">See also</h2>

<ul>
  <li><a href="/en-US/docs/Web/API/Permissions_API">Permissions API</a></li>
  <li><a href="/en-US/docs/Web/API/Web_Workers_API">Web Worker API</a></li>
</ul>
