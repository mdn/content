---
title: ServiceWorker.state
slug: Web/API/ServiceWorker/state
tags:
- API
- Property
- Reference
- Service Workers
- ServiceWorker
- state
browser-compat: api.ServiceWorker.state
---
<div>{{APIRef("Service Workers API")}}</div>

<p>The <strong><code>state</code></strong> read-only property of the
  {{domxref("ServiceWorker")}} interface returns a string representing the current state
  of the service worker. It can be one of the following values: <code>installing</code>,
  <code>installed,</code> <code>activating</code>, <code>activated</code>, or
  <code>redundant</code>.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js"><em>someURL</em> = <em>ServiceWorker</em>.state
</pre>

<h3 id="Value">Value</h3>

<p>A {{jsxref("String")}} that can take one of the following values:
  <dl>
    <dt><code>"installing"</code></dt>
    <dd>The service worker in this state is considered an installing worker. During this state, {{DOMxRef("ExtendableEvent.waitUntil()")}} can be called inside the <code>install</code> event handler to extend the life of the installing worker until the passed promise resolves successfully. This is primarily used to ensure that the service worker is not active until all of the core caches are populated.</dd>
    <dt><code>"installed"</code></dt>
    <dd>The service worker in this state is considered a waiting worker.</dd>
    <dt><code>"activating"</code></dt>
    <dd>The service worker in this state is considered an active worker. During this state, {{DOMxRef("ExtendableEvent.waitUntil()")}} can be called inside the <code>onactivate</code> event handler to extend the life of the active worker until the passed promise resolves successfully. No functional events are dispatched until the state becomes activated.</dd>
    <dt><code>"activated"</code></dt>
    <dd>The service worker in this state is considered an active worker ready to handle functional events.</dd>
    <dt><code>"redundant"</code></dt>
    <dd>A new service worker is replacing the current service worker, or the current service worker is being discarded due to an install failure.</dd>
   </dl>

</p>

<h2 id="Examples">Examples</h2>

<p>This code snippet is from the <a
    href="https://github.com/GoogleChrome/samples/blob/gh-pages/service-worker/registration-events/index.html">service
    worker registration-events sample</a> (<a
    href="https://googlechrome.github.io/samples/service-worker/registration-events/">live
    demo</a>). The code listens for any change in the {{domxref("ServiceWorker.state")}}
  and returns its value.</p>

<pre class="brush: js">var serviceWorker;
if (registration.installing) {
  serviceWorker = registration.installing;
  document.querySelector('#kind').textContent = 'installing';
} else if (registration.waiting) {
  serviceWorker = registration.waiting;
  document.querySelector('#kind').textContent = 'waiting';
} else if (registration.active) {
  serviceWorker = registration.active;
  document.querySelector('#kind').textContent = 'active';
}

if (serviceWorker) {
  logState(serviceWorker.state);
  serviceWorker.addEventListener('statechange', function(e) {
  logState(e.target.state);
  });
}</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>
