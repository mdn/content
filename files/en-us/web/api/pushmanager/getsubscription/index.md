---
title: PushManager.getSubscription()
slug: Web/API/PushManager/getSubscription
tags:
  - API
  - Experimental
  - Method
  - PushManager
  - Reference
  - Service Workers
browser-compat: api.PushManager.getSubscription
---
<p>{{SeeCompatTable}}{{ApiRef("Push API")}}</p>

<p>The <strong><code>PushManager.getSubscription()</code></strong> method of the {{domxref("PushManager")}} interface retrieves an existing push subscription.</p>

<p>It returns a {{jsxref("Promise")}} that resolves to a {{domxref("PushSubscription")}} object containing details of an existing subscription. If no existing subscription exists, this resolves to a <code>null</code> value.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">PushManager.getSubscription().then(function(pushSubscription) { ... } );</pre>

<h3 id="Parameters">Parameters</h3>

<p>None.</p>

<h3 id="Returns">Returns</h3>

<p>A {{jsxref("Promise")}} that resolves to a {{domxref("PushSubscription")}} object or <code>null</code>.</p>

<h2 id="Example">Example</h2>

<p>This code snippet is taken from a <a href="https://github.com/GoogleChrome/samples/blob/gh-pages/push-messaging-and-notifications">push messaging and notification sample</a>. (No live demo is available.)</p>

<pre class="brush: js">// We need the service worker registration to check for a subscription
  navigator.serviceWorker.ready.then(function(serviceWorkerRegistration) {
    // Do we already have a push message subscription?
    serviceWorkerRegistration.pushManager.getSubscription()
      .then(function(subscription) {
        // Enable any UI which subscribes / unsubscribes from
        // push messages.
        var pushButton = document.querySelector('.js-push-button');
        pushButton.disabled = false;

        if (!subscription) {
          // We aren’t subscribed to push, so set UI
          // to allow the user to enable push
          return;
        }

        // Keep your server in sync with the latest subscriptionId
        sendSubscriptionToServer(subscription);

        showCurlCommand(subscription);

        // Set your UI to show they have subscribed for
        // push messages
        pushButton.textContent = 'Disable Push Messages';
        isPushEnabled = true;
      })
      .catch(function(err) {
        window.Demo.debug.log('Error during getSubscription()', err);
      });
  });
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<div>
<div>

<p>{{Compat}}</p>
</div>
</div>
