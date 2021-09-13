---
title: CookieStoreManager
slug: Web/API/CookieStoreManager
tags:
  - API
  - Interface
  - Reference
  - CookieStoreManager
browser-compat: api.CookieStoreManager
---
{{securecontext_header}}{{DefaultAPISidebar("Cookie Store")}}

The **`CookieStoreManager`** interface of the {{domxref('Cookie Store')}} API allows service workers to subscribe to events for cookie changes. By using the {{domxref("CookieStoreManager.subscribe()","subscribe()")}} method a particular service worker registration can indicate that it is interested in change events.

A `CookieStoreManager` has an associated {{domxref("ServiceWorkerRegistration")}}. Each service worker registration has a cookie change subscription list, which is a list of cookie change subscriptions each containing a name and url. The methods in this interface allow the service worker to add and remove subscriptions from this list, and to get a list of all subscriptions.

To get a `CookieStoreManager`, call {{domxref("ServiceWorkerRegistration.cookies")}}.

## Methods

- {{domxref("CookieStoreManager.getSubscriptions()")}}
  - : Returns a {{jsxref("promise")}} which resolves to a list of the cookie change subscriptions for this service worker registration.
- {{domxref("CookieStoreManager.subscribe()")}}
  - : Subscribes to changes to cookies. It returns a {{jsxref("promise")}} which resolves when the subscription is successful.
- {{domxref("CookieStoreManager.unsubscribe()")}}
  - : Unsubscribes the registered service worker from changes to cookies. It returns a {{jsxref("promise")}} which resolves when the operation is successful.

## Examples

In this example the {{domxref("ServiceWorkerRegistration")}} represented by `registration` is subscribing to change events on the cookie named `"cookie1"` with a scope of `"/path1"`.

```js
const subscriptions = [{ name: 'cookie1', url: `/path1` }];
await registration.cookies.subscribe(subscriptions);
```

If the {{domxref("ServiceWorkerRegistration")}} has subscribed to any cookies then {{domxref("CookieStoreManager.getSubscriptions()","getSubscriptions()")}} will return a list of cookies represented by objects in the same format as used for the original subscription.

```js
const subscriptions = await registration.cookies.getSubscriptions();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
