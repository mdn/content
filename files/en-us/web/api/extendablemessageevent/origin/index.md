---
title: ExtendableMessageEvent.origin
slug: Web/API/ExtendableMessageEvent/origin
tags:
- API
- Experimental
- ExtendableMessageEvent
- Property
- Reference
- Service Workers
- origin
browser-compat: api.ExtendableMessageEvent.origin
---
<p>{{APIRef("Service Workers API")}}</p>

<p>The <code><strong>origin</strong></code> read-only property of the
  {{domxref("ExtendableMessageEvent")}} interface returns the origin of the
  {{domxref("Client")}} that sent the message.</p>

<h2 id="Syntax">Syntax</h2>

<pre
  class="brush: js">var <em>myOrigin</em> = <em>extendableMessageEvent</em>.origin;</pre>

<h3 id="Value">Value</h3>

<p>A {{domxref("USVString")}}.</p>

<h2 id="Examples">Examples</h2>

<p>When the following code is used inside a service worker to respond to a push messages
  by sending the data received via {{domxref("PushMessageData")}} to the main context via
  a <a href="/en-US/docs/Web/API/Channel_Messaging_API">channel message</a>, the event
  object of <code>onmessage</code> will be a <code>ExtendableMessageEvent</code>.</p>

<pre class="brush: js">var port;

self.addEventListener('push', function(e) {
  var obj = e.data.json();

  if(obj.action === 'subscribe' || obj.action === 'unsubscribe') {
    port.postMessage(obj);
  } else if(obj.action === 'init' || obj.action === 'chatMsg') {
    port.postMessage(obj);
  }
});

self.onmessage = function(e) {
  console.log(e.origin);
  port = e.ports[0];
}
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li><a href="/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers">Using Service
      Workers</a></li>
  <li><a class="external external-icon" href="https://github.com/mdn/sw-test">Service
      workers basic code example</a></li>
  <li><a class="external external-icon"
      href="https://jakearchibald.github.io/isserviceworkerready/">Is ServiceWorker
      ready?</a></li>
  <li><a href="/en-US/docs/Web/API/Channel_Messaging_API">Channel Messaging</a></li>
</ul>
