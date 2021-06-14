---
title: Clients.openWindow()
slug: Web/API/Clients/openWindow
tags:
- API
- Clients
- Experimental
- Method
- Reference
- Service Workers
- ServiceWorker
- openWindow
browser-compat: api.Clients.openWindow
---
<div>{{APIRef("Service Workers API")}}</div>

<p>The <strong><code>openWindow()</code></strong> method of the {{domxref("Clients")}}
  interface creates a new top level browsing context and loads a given URL. If the calling
  script doesn't have permission to show popups, <code>openWindow()</code> will throw an
  <code>InvalidAccessError</code>.</p>

<p>In Firefox, the method is allowed to show popups only when called as the result of a
  notification click event.</p>

<p>In Chrome for Android, the method may instead open the URL in an existing browsing
  context provided by a <a href="/en-US/docs/Web/Progressive_web_apps">standalone web
    app</a> previously added to the user's home screen. As of recently, this also works on
  Chrome for Windows.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">self.clients.openWindow(<em>url</em>).then(function(<em>windowClient</em>) {
  // Do something with your WindowClient
});</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><code>url</code></dt>
  <dd>A {{domxref("USVString")}} representing the URL of the client you want to open in
    the window. Generally this value must be a URL from the same origin as the calling
    script.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>A {{jsxref("Promise")}} that resolves to a {{domxref("WindowClient")}} object if the
  URL is from the same origin as the service worker or a {{Glossary("null", "null
  value")}} otherwise.</p>

<h2 id="Examples">Examples</h2>

<pre class="brush: js">// Send notification to OS if applicable
if (self.Notification.permission === 'granted') {
  const notificationObject = {
    body: 'Click here to view your messages.',
    data: { url: self.location.origin + '/some/path' },
    // data: { url: 'http://example.com' },
  };
  self.registration.showNotification('You\'ve got messages!', notificationObject);
}

// Notification click event listener
self.addEventListener('notificationclick', e =&gt; {
  // Close the notification popout
  e.notification.close();
  // Get all the Window clients
  e.waitUntil(clients.matchAll({ type: 'window' }).then(clientsArr =&gt; {
    // If a Window tab matching the targeted URL already exists, focus that;
    const hadWindowToFocus = clientsArr.some(windowClient =&gt; windowClient.url === e.notification.data.url ? (windowClient.focus(), true) : false);
    // Otherwise, open a new tab to the applicable URL and focus it.
    if (!hadWindowToFocus) clients.openWindow(e.notification.data.url).then(windowClient =&gt; windowClient ? windowClient.focus() : null);
  }));
});
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>
