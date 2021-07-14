---
title: PushEvent
slug: Web/API/PushEvent
tags:
  - API
  - ExtendableEvent
  - Interface
  - Offline
  - Push
  - Push API
  - Reference
  - Service Workers
  - Workers
browser-compat: api.PushEvent
---
<p>{{APIRef("Push API")}}{{SeeCompatTable()}}</p>

<p>The <strong><code>PushEvent</code></strong> interface of the <a href="/en-US/docs/Web/API/Push_API">Push API</a> represents a push message that has been received. This event is sent to the <a href="/en-US/docs/Web/API/ServiceWorkerGlobalScope">global scope</a> of a {{domxref("ServiceWorker")}}. It contains the information sent from an application server to a {{domxref("PushSubscription")}}.</p>

<h2 id="Constructor">Constructor</h2>

<dl>
 <dt>{{domxref("PushEvent.PushEvent()")}}</dt>
 <dd>Creates a new <code>PushEvent</code> object.</dd>
</dl>

<h2 id="Properties">Properties</h2>

<p><em>Inherits properties from its parent, {{domxref("ExtendableEvent")}}. Additional properties:</em></p>

<dl>
 <dt>{{domxref("PushEvent.data")}} {{readonlyinline}}</dt>
 <dd>Returns a reference to a {{domxref("PushMessageData")}} object containing data sent to the {{domxref("PushSubscription")}}.</dd>
</dl>

<h2 id="methods">Methods</h2>

<p><em>Inherits methods from its parent, {{domxref("ExtendableEvent")}}</em>.</p>

<h2 id="Examples">Examples</h2>

<p>The following example takes data from a <code>PushEvent</code> and displays it on all of the service worker's clients.</p>

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

  var notification = new self.Notification(title, {
    body: message,
    tag: 'simple-push-demo-notification',
    icon: icon
  });

  notification.addEventListener('click', function() {
    if (clients.openWindow) {
      clients.openWindow('https://example.blog.com/2015/03/04/something-new.html');
    }
  });
});
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/Web/API/Push_API">Push API</a></li>
 <li><a href="/en-US/docs/Web/API/Service_Worker_API">Service Worker API</a></li>
</ul>
