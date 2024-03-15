---
title: CookieStore
slug: Web/API/CookieStore
page-type: web-api-interface
browser-compat: api.CookieStore
---

{{securecontext_header}}{{APIRef("Cookie Store API")}} {{AvailableInWorkers}}

The **`CookieStore`** interface of the {{domxref("Cookie Store API", "", "", "nocode")}} provides methods for getting and setting cookies asynchronously from either a page or a service worker.

The `CookieStore` is accessed via attributes in the global scope in a {{domxref("Window")}} or {{domxref("ServiceWorkerGlobalScope")}} context. Therefore there is no constructor.

{{InheritanceDiagram}}

## Instance methods

- {{domxref("CookieStore.delete()")}}
  - : The `delete()` method deletes a cookie with the given name or options object, it returns a {{jsxref("Promise")}} that resolves when the deletion completes.
- {{domxref("CookieStore.get()")}}
  - : The `get()` method gets a single cookie with the given name or options object, it returns a {{jsxref("Promise")}} that resolves with details of a single cookie.
- {{domxref("CookieStore.getAll()")}}
  - : The `getAll()` method gets all matching cookies, it returns a {{jsxref("Promise")}} that resolves with a list of cookies.
- {{domxref("CookieStore.set()")}}
  - : The `set()` method sets a cookie with the given name and value or options object, it returns a {{jsxref("Promise")}} that resolves when the cookie is set.

## Events

- {{domxref("CookieStore.change_event", "change")}}
  - : The `change` event fires when a change is made to any cookie.

## Examples

In this example, we set a cookie and write to the console feedback as to whether the operation succeeded or failed.

```js
const day = 24 * 60 * 60 * 1000;

cookieStore
  .set({
    name: "cookie1",
    value: "cookie1-value",
    expires: Date.now() + day,
    domain: "example.com",
  })
  .then(
    () => {
      console.log("It worked!");
    },
    (reason) => {
      console.error("It failed: ", reason);
    },
  );
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
