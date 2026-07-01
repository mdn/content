---
title: "ServiceWorkerContainer: getRegistration() method"
short-title: getRegistration()
slug: Web/API/ServiceWorkerContainer/getRegistration
page-type: web-api-instance-method
browser-compat: api.ServiceWorkerContainer.getRegistration
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

The **`getRegistration()`** method of the
{{domxref("ServiceWorkerContainer")}} interface gets a
{{domxref("ServiceWorkerRegistration")}} object whose scope URL matches the provided
client URL. The method returns a {{jsxref("Promise")}} that resolves to
a {{domxref("ServiceWorkerRegistration")}} or `undefined`.

## Syntax

```js-nolint
getRegistration()
getRegistration(clientURL)
```

### Parameters

- `clientURL` {{optional_inline}}
  - : The registration whose scope matches this URL will be returned. Relative URLs are resolved with the current client as the base. If this parameter is not provided, the current client's URL will be used by default.

### Return value

A {{jsxref("Promise")}} that resolves to a {{domxref("ServiceWorkerRegistration")}}
object or `undefined`.

## Examples

```js
navigator.serviceWorker.getRegistration("/app").then((registration) => {
  if (registration) {
    document.querySelector("#status").textContent =
      "ServiceWorkerRegistration found.";
  }
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
