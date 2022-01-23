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
{{SeeCompatTable}}{{ApiRef("Push API")}}

The **`PushManager.getSubscription()`** method of the {{domxref("PushManager")}} interface retrieves an existing push subscription.

It returns a {{jsxref("Promise")}} that resolves to a {{domxref("PushSubscription")}} object containing details of an existing subscription. If no existing subscription exists, this resolves to a `null` value.

## Syntax

```js
PushManager.getSubscription().then(function(pushSubscription) { /* ... */ } );
```

### Parameters

None.

### Returns

A {{jsxref("Promise")}} that resolves to a {{domxref("PushSubscription")}} object or `null`.

## Example

This code snippet is taken from a [push messaging and notification sample](https://github.com/GoogleChrome/samples/blob/gh-pages/push-messaging-and-notifications). (No live demo is available.)

```js
// We need the service worker registration to check for a subscription
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
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
