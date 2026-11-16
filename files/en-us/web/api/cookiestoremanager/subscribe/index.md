---
title: "CookieStoreManager: subscribe() method"
short-title: subscribe()
slug: Web/API/CookieStoreManager/subscribe
page-type: web-api-instance-method
browser-compat: api.CookieStoreManager.subscribe
---

{{securecontext_header}}{{APIRef("Cookie Store API")}}{{AvailableInWorkers("window_and_service")}}

The **`subscribe()`** method of the {{domxref("CookieStoreManager")}} interface subscribes a {{domxref("ServiceWorkerRegistration")}} to cookie change events.

Duplicate subscriptions are ignored: that is, if a service worker subscribes more than once to the same cookie, it will only receive each change notification once.

## Syntax

```js-nolint
subscribe(subscriptions)
```

### Parameters

- `subscriptions`
  - : An array of objects, each of which has the following properties:
    - `name` {{optional_inline}}
      - : A string equal to the name of a cookie. If `name` is omitted, the service worker is subscribed to change events for all cookies that are in scope.
    - `url` {{optional_inline}}
      - : A string equal to the URL of a cookie scope. This may be narrower than the scope of the service worker registration. If `url` is omitted, it defaults to the scope of the service worker registration.

### Return value

A {{jsxref("Promise")}} that resolves with {{jsxref("undefined")}} when the subscription completes.

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if the `url` is not a valid URL, or doesn't start with the service worker registration's {{domxref("ServiceWorkerRegistration.scope","scope")}}.

## Examples

### Setting name and URL

In this example, the {{domxref("ServiceWorkerRegistration")}} represented by `registration` is subscribing to change events on the cookie named `"cookie1"` with a scope of `"/path1"`.

```js
// Subscribe to a specific cookie and URL
const subscriptions = [{ name: "cookie1", url: `/path1` }];
await registration.cookies.subscribe(subscriptions);
```

### Setting name only

In this example, we set only `name` and omit `url`: the subscription applies to all cookies named `cookie1` within the service worker's scope.

```js
// Subscribe to all cookies named "cookie1" in the registration scope
await registration.cookies.subscribe([{ name: "cookie1" }]);
```

### Setting URL only

In this example we set only `url`, and omit `name`: the subscription applies to all cookies within the specified URL scope.

```js
// Subscribe to all cookie changes within a specific path
await registration.cookies.subscribe([{ url: "/path/one/" }]);
```

### Subscribing to all cookies

In this example, both `name` and `url` are omitted. The subscription applies to all cookies within the service worker's scope.

```js
// Subscribe to all cookie changes within the entire registration scope
await registration.cookies.subscribe([{}]);
```

### Setting a URL outside the service worker's scope

If the URL is outside the service worker's scope, `subscribe()` will throw a `TypeError`.

```js example-bad
await registration.cookies.subscribe([
  { name: "cookie1", url: "/out-of-scope/" },
]);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
