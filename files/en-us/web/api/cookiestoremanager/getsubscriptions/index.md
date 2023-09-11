---
title: "CookieStoreManager: getSubscriptions() method"
short-title: getSubscriptions()
slug: Web/API/CookieStoreManager/getSubscriptions
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.CookieStoreManager.getSubscriptions
---

{{securecontext_header}}{{APIRef("Cookie Store")}}{{SeeCompatTable}}

The **`getSubscriptions()`** method of the {{domxref("CookieStoreManager")}} interface returns a list of all the cookie change subscriptions for this {{domxref("ServiceWorkerRegistration")}}.

## Syntax

```js-nolint
getSubscriptions()
```

### Parameters

None.

### Return value

A {{jsxref("promise")}} that resolves with a list of objects, each containing:

- `name`
  - : A string with the name of a cookie.
- `url`
  - : A string with the url of the scope used to subscribe to the cookie(s).

## Examples

If the {{domxref("ServiceWorkerRegistration")}} represented by `registration` has subscribed to any cookie change events `subscriptions` will resolve to a list of objects containing the name and URL of those cookies.

```js
const subscriptions = await registration.cookies.getSubscriptions();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
