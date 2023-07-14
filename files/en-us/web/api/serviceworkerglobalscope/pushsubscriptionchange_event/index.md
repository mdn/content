---
title: "ServiceWorkerGlobalScope: pushsubscriptionchange event"
short-title: pushsubscriptionchange
slug: Web/API/ServiceWorkerGlobalScope/pushsubscriptionchange_event
page-type: web-api-event
browser-compat: api.ServiceWorkerGlobalScope.pushsubscriptionchange_event
---

{{APIRef("Push API")}}

The **`pushsubscriptionchange`** event is sent to the [global scope](/en-US/docs/Web/API/ServiceWorkerGlobalScope) of a {{domxref("ServiceWorker")}} to indicate a change in push subscription that was triggered outside the application's control.

This may occur if the subscription was refreshed by the browser, but it may also happen if the subscription has been revoked or lost.

This event is not cancelable and does not bubble.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("pushsubscriptionchange", (event) => {});

onpushsubscriptionchange = (event) => {};
```

## Event type

A generic {{domxref("Event")}}.

## Usage notes

Although examples demonstrating how to share subscription related information with the application server tend to use {{domxref("fetch()")}}, this is not necessarily the best choice for real-world use, since it will not work if the app is offline, for example.

Consider using another method to synchronize subscription information between your service worker and the app server, or make sure your code using `fetch()` is robust enough to handle cases where attempts to exchange data fail.

> **Note:** In earlier drafts of the specification, this event was defined to be sent when a {{domxref("PushSubscription")}} has expired.

## Examples

This example, run in the context of a service worker, listens for a `pushsubscriptionchange` event and re-subscribes to the lapsed subscription.

```js
self.addEventListener(
  "pushsubscriptionchange",
  (event) => {
    const subscription = swRegistration.pushManager
      .subscribe(event.oldSubscription.options)
      .then((subscription) =>
        fetch("register", {
          method: "post",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            endpoint: subscription.endpoint,
          }),
        }),
      );
    event.waitUntil(subscription);
  },
  false,
);
```

When a `pushsubscriptionchange` event arrives, indicating that the subscription has expired, we resubscribe by calling the push manager's {{domxref("PushManager.subscribe", "subscribe()")}} method. When the returned promise is resolved, we receive the new subscription. This is delivered to the app server using a {{domxref("fetch()")}} call to post a {{Glossary("JSON")}} formatted rendition of the subscription's {{domxref("PushSubscription.endpoint", "endpoint")}} to the app server.

You can also use the `onpushsubscriptionchange` event handler property to set up the event handler:

```js
self.onpushsubscriptionchange = (event) => {
  event.waitUntil(
    swRegistration.pushManager
      .subscribe(event.oldSubscription.options)
      .then((subscription) => {
        /* ... */
      }),
  );
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Push API](/en-US/docs/Web/API/Push_API)
