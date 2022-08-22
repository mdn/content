---
title: ExtendableCookieChangeEvent
slug: Web/API/ExtendableCookieChangeEvent
page-type: web-api-interface
tags:
  - API
  - Interface
  - Reference
  - ExtendableCookieChangeEvent
browser-compat: api.ExtendableCookieChangeEvent
---
{{securecontext_header}}{{APIRef("Cookie Store API")}}

The **`ExtendableCookieChangeEvent`** interface of the['Cookie Store API'](/en-US/docs/Web/API/Cookie_Store_API) is the event type passed to {{domxref("ServiceWorkerRegistration.oncookiechange()")}} when any cookie changes occur. A cookie change event consists of a cookie and a type (either "changed" or "deleted".)

Cookie changes that cause the `ExtendableCookieChangeEvent` to be dispatched are:

- A cookie is newly created and not immediately removed. In this case `type` is "changed".
- A cookie is newly created and immediately removed. In this case `type` is "deleted"
- A cookie is removed. In this case `type` is "deleted".

> **Note:** A cookie that is replaced due to the insertion of another cookie with the same name, domain, and path, is ignored and does not trigger a change event.

{{InheritanceDiagram}}

## Constructor

- {{domxref("ExtendableCookieChangeEvent.ExtendableCookieChangeEvent", "ExtendableCookieChangeEvent()")}}
  - : Creates a new `ExtendableCookieChangeEvent`.

## Properties

_This interface also inherits properties from {{domxref("ExtendableEvent")}}._

- {{domxref("ExtendableCookieChangeEvent.changed")}} {{ReadOnlyInline}}
  - : Returns an array containing the changed cookies.
- {{domxref("ExtendableCookieChangeEvent.deleted")}} {{ReadOnlyInline}}
  - : Returns an array containing the deleted cookies.

## Examples

In the below example we use {{domxref("CookieStoreManager.getSubscriptions()")}} to get a list of existing subscriptions. (In service workers, a subscription is required in order to listen for events.) We unsubscribe from existing subscriptions using {{domxref("CookieStoreManager.unsubscribe()")}}, then subscribe to the cookie with a name of 'COOKIE_NAME' using {{domxref("CookieStoreManager.subscribe()")}}. If that cookie is changed, the event listener logs the event to the console. This will be an `ExtendableCookieChangeEvent` object, with the {{domxref("ExtendableCookieChangeEvent.changed","changed")}} or {{domxref("ExtendableCookieChangeEvent.deleted","deleted")}} property containing the modified cookie.

```js
self.addEventListener('activate', (event) => {
  event.waitUntil(async () => {
    const subscriptions = await self.registration.cookies.getSubscriptions();
    await self.registration.cookies.unsubscribe(subscriptions);

    await self.registration.cookies.subscribe([
      {
        name: 'COOKIE_NAME',
      }
    ]);
  });
});

self.addEventListener('cookiechange', (event) => {
  console.log(event);
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
