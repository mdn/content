---
title: ServiceWorkerGlobalScope.onpush
slug: Web/API/ServiceWorkerGlobalScope/onpush
tags:
- API
- Property
- Push
- Reference
- Service Workers
- ServiceWorker
- ServiceWorkerGlobalScope
- onpush
browser-compat: api.ServiceWorkerGlobalScope.onpush
---
<div>{{APIRef("Service Workers API")}}</div>

<p>The <code><strong>ServiceWorkerGlobalScope.onpush</strong></code> event of the
  {{domxref("ServiceWorkerGlobalScope")}} interface is fired whenever a push message is
  received by a service worker via a push server.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">ServiceWorkerGlobalScope.onpush = function(PushEvent) { ... }
self.addEventListener('push', function(PushEvent) { ... })
</pre>

<h2 id="Example">Example</h2>

<p>The following example takes data from a {{domxref("PushEvent")}} and displays it on all
  of the service worker's clients. The data payload of the push message is available in
  the event object's <code>data</code> property ({{domxref("PushEvent.data")}}, which
  contains a {{domxref("PushMessageData")}} object.)</p>

<pre class="brush: js">self.addEventListener('push', function(event) {
  if (!(self.Notification &amp;&amp; self.Notification.permission === 'granted')) {
    return;
  }

  var data = {};
  if (event.data) {
    data = event.data.json();
  }
  var title = data.title || "Something Has Happened";
  var message = data.message || "Here's something you might want to check out.";
  var icon = "images/new-notification.png";

  var notification = new Notification(title, {
    body: message,
    tag: 'simple-push-demo-notification',
    icon: icon
  });

  notification.addEventListener('click', function() {
    if (clients.openWindow) {
      clients.openWindow('https://example.blog.com/2015/03/04/something-new.html');
    }
  });
});</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li><a href="/en-US/docs/Web/API/Push_API">Push API</a></li>
</ul>
