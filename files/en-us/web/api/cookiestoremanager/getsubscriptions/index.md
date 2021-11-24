---
title: CookieStoreManager.getSubscriptions()
slug: Web/API/CookieStoreManager/getSubscriptions
tags:
  - API
  - Method
  - Reference
  - getSubscriptions
  - CookieStoreManager
browser-compat: api.CookieStoreManager.getSubscriptions
---
{{securecontext_header}}{{DefaultAPISidebar("Cookie Store")}}

The **`getSubscriptions()`** method of the {{domxref("CookieStoreManager")}} interface returns a list of all the cookie change subscriptions for this {{domxref("ServiceWorkerRegistration")}}.

## Syntax

```js
let promise = registration.cookies.getSubscriptions();
```

### Return value

A {{jsxref("promise")}} that resolves with a list of objects, each containing:

- `name`
  - : A {{domxref("USVString")}} with the name of a cookie.
- `url`
  - : A {{domxref("USVString")}} with the url of the scope used to subscribe to the cookie(s).

## Examples

If the {{domxref("ServiceWorkerRegistration")}} represented by `registration` has subscribed to any cookie change events `subscriptions` will resolve to a list of objects containing the name and url of those cookies.

```js
const subscriptions = await registration.cookies.getSubscriptions();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
