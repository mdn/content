---
title: PushEvent.data
slug: Web/API/PushEvent/data
tags:
  - API
  - Experimental
  - Property
  - Push
  - PushEvent
  - Reference
  - data
browser-compat: api.PushEvent.data
---
<p>{{APIRef("Push API")}}{{SeeCompatTable()}}</p>

<p>The <code>data</code> read-only property of the <strong><code>PushEvent</code></strong> interface returns a reference to a {{domxref("PushMessageData")}} object containing data sent to the {{domxref("PushSubscription")}}.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">var myPushData = PushEvent.data;</pre>

<h3 id="Value">Value</h3>

<p>A {{domxref("PushMessageData")}} object.</p>

<p><strong>Examples</strong></p>

<p>The following example takes data from a PushEvent and displays it on all of the service workers' clients.</p>

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
});
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>
