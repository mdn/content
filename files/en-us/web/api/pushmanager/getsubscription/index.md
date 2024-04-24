---
title: "PushManager: getSubscription() method"
short-title: getSubscription()
slug: Web/API/PushManager/getSubscription
page-type: web-api-instance-method
browser-compat: api.PushManager.getSubscription
---

{{ApiRef("Push API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

The **`PushManager.getSubscription()`** method of the {{domxref("PushManager")}} interface retrieves an existing push subscription.

It returns a {{jsxref("Promise")}} that resolves to a {{domxref("PushSubscription")}} object containing details of an existing subscription. If no existing subscription exists, this resolves to a `null` value.

## Syntax

```js-nolint
getSubscription()
```

### Parameters

None.

### Return value

A {{jsxref("Promise")}} that resolves to a {{domxref("PushSubscription")}} object or `null`.

## Examples

This code snippet is taken from a [push messaging and notification sample](https://github.com/GoogleChrome/samples/tree/gh-pages/push-messaging-and-notifications). (No live demo is available.)

```js
// We need the service worker registration to check for a subscription
navigator.serviceWorker.ready.then((serviceWorkerRegistration) => {
  // Do we already have a push message subscription?
  serviceWorkerRegistration.pushManager
    .getSubscription()
    .then((subscription) => {
      // Enable any UI which subscribes / unsubscribes from
      // push messages.
      const pushButton = document.querySelector(".js-push-button");
      pushButton.disabled = false;

      if (!subscription) {
        // We aren't subscribed to push, so set UI
        // to allow the user to enable push
        return;
      }

      // Keep your server in sync with the latest subscriptionId
      sendSubscriptionToServer(subscription);

      showCurlCommand(subscription);

      // Set your UI to show they have subscribed for
      // push messages
      pushButton.textContent = "Disable Push Messages";
      isPushEnabled = true;
    })
    .catch((err) => {
      console.error(`Error during getSubscription(): ${err}`);
    });
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
