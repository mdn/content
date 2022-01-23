---
title: CookieStoreManager.unsubscribe()
slug: Web/API/CookieStoreManager/unsubscribe
tags:
  - API
  - Method
  - Reference
  - unsubscribe
  - CookieStoreManager
browser-compat: api.CookieStoreManager.unsubscribe
---
{{securecontext_header}}{{DefaultAPISidebar("Cookie Store")}}

The **`unsubscribe()`** method of the {{domxref("CookieStoreManager")}} interface stops the {{domxref("ServiceWorkerRegistration")}} from receiving previously subscribed events.

## Syntax

```js
let promise = registration.cookies.unsubscribe(subscriptions);
```

### Parameters

- subscriptions

  - : An object containing:

    - `name`
      - : A {{domxref("USVString")}} with the name of a cookie.
    - `url`
      - : A {{domxref("USVString")}} with the url of the scope used to subscribe to this cookie.

### Return value

A {{jsxref("Promise")}} that resolves with {{jsxref("Undefined")}} when the subscription completes.

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if the url passed in `subscriptions` does not match the service worker registration's {{domxref("ServiceWorkerRegistration.scope","scope")}}.

## Examples

In this example the {{domxref("ServiceWorkerRegistration")}} represented by `registration` is unsubscribing from change events on the cookie named `"cookie1"` with a scope of `"/path1"`.

```js
const subscriptions = [{ name: 'cookie1', url: `/path1` }];
await registration.cookies.unsubscribe(subscriptions);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
