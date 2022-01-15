---
title: CookieStoreManager.subscribe()
slug: Web/API/CookieStoreManager/subscribe
tags:
  - API
  - Method
  - Reference
  - subscribe
  - CookieStoreManager
browser-compat: api.CookieStoreManager.subscribe
---
{{securecontext_header}}{{DefaultAPISidebar("Cookie Store")}}

The **`subscribe()`** method of the {{domxref("CookieStoreManager")}} interface subscribes a {{domxref("ServiceWorkerRegistration")}} to cookie change events.

## Syntax

```js
let promise = registration.cookies.subscribe(subscriptions);
```

### Parameters

- subscriptions

  - : An object containing:

    - `name`
      - : A {{domxref("USVString")}} with the name of a cookie.
    - `url`
      - : A {{domxref("USVString")}} with the url of a cookie scope. This may be narrower than the scope of the service worker registration.

### Return value

A {{jsxref("Promise")}} that resolves with {{jsxref("Undefined")}} when the subscription completes.

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if the url passed in `subscriptions` does not match the service worker registration's {{domxref("ServiceWorkerRegistration.scope","scope")}}.

## Examples

In this example the {{domxref("ServiceWorkerRegistration")}} represented by `registration` is subscribing to change events on the cookie named `"cookie1"` with a scope of `"/path1"`.

```js
const subscriptions = [{ name: 'cookie1', url: `/path1` }];
await registration.cookies.subscribe(subscriptions);
```

The url passed to the `subscribe()` method, may be narrower than the service worker registration scope. In the following example the subscription is for `/path/one/`, so it will receive change events for changes on the first cookie, but not the second.

```js
registration.cookies.subscribe([{name: 'cookie1', url: '/path/one/'}]); // subscription
cookieStore.set({name: 'cookie1', value: 'cookie-value', path: '/path/one/'}); // recieves a change event
cookieStore.set({name: 'cookie1', value: 'cookie-value', path: '/path/two/'}); // does not receive a change event
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
