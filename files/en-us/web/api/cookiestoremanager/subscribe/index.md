---
title: "CookieStoreManager: subscribe() method"
short-title: subscribe()
slug: Web/API/CookieStoreManager/subscribe
page-type: web-api-instance-method
browser-compat: api.CookieStoreManager.subscribe
---

{{securecontext_header}}{{APIRef("Cookie Store API")}}{{AvailableInWorkers("window_and_service")}}

The **`subscribe()`** method of the {{domxref("CookieStoreManager")}} interface subscribes a {{domxref("ServiceWorkerRegistration")}} to cookie change events.

## Syntax

```js-nolint
subscribe(subscriptions)
```

### Parameters

- `subscriptions`
  - : An array of objects, each of which has the following properties:
    - `name` {{optional_inline}}
      - : A string with the name of a cookie. If `name` is omitted, the service worker is subscribed to change events for all cookies that are in scope.
    - `url` {{optional_inline}}
      - : A string with the url of a cookie scope. This may be narrower than the scope of the service worker registration. If `url` is omitted, it defaults to the scope of the service worker registration.

### Return value

> [!NOTE]
> Duplicate subscriptions (same `name` and `url`) are ignored; only unique subscriptions are added.

A {{jsxref("Promise")}} that resolves with {{jsxref("undefined")}} when the subscription completes.

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if the URL passed in `subscriptions` does not match the service worker registration's {{domxref("ServiceWorkerRegistration.scope","scope")}}.

## Examples

In this example, the {{domxref("ServiceWorkerRegistration")}} represented by `registration` is subscribing to change events on the cookie named `"cookie1"` with a scope of `"/path1"`.

- Setting `name` and `url`:

```js
// Subscribe to a specific cookie and URL
const subscriptions = [{ name: "cookie1", url: `/path1` }];
await registration.cookies.subscribe(subscriptions);

// Subscribe to all cookie changes within the entire registration scope
await registration.cookies.subscribe([{}]);
```

- Omitting `url`:

```js
// Subscribe to all cookies named "cookie1" in the registration scope
await registration.cookies.subscribe([{ name: "cookie1" }]);
```

If `url` is omitted, the subscription applies to the entire service worker registration scope.

- Omitting `name`:

```js
// Subscribe to all cookie changes within a specific path
await registration.cookies.subscribe([{ url: "/path/one/" }]);
```

If `name` is omitted, the subscription applies to all cookies within the specified URL scope.

- Scope behavior:

```js
await registration.cookies.subscribe([{ name: "cookie1", url: "/path/one/" }]); // subscription
cookieStore.set({ name: "cookie1", value: "cookie-value", path: "/path/one/" }); // receives a change event
cookieStore.set({ name: "cookie1", value: "cookie-value", path: "/path/two/" }); // does not receive a change event
```

The `url` can be narrower than the service worker registration scope. Change events are only received for cookies within the subscribed path.

- Exception:

```js
// This will throw a TypeError because "/out-of-scope/" is outside the service worker scope
await registration.cookies.subscribe([
  { name: "cookie1", url: "/out-of-scope/" },
]);
```

If the URL is outside the service worker's scope, `subscribe()` will fail and throw a `TypeError`. This means you can only subscribe to cookies within the service worker's own scope.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
