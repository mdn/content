---
title: "ServiceWorkerContainer: getRegistrations() method"
short-title: getRegistrations()
slug: Web/API/ServiceWorkerContainer/getRegistrations
page-type: web-api-instance-method
browser-compat: api.ServiceWorkerContainer.getRegistrations
---

{{APIRef("Service Workers API")}}

The **`getRegistrations()`** method of the
{{domxref("ServiceWorkerContainer")}} interface gets all
{{domxref("ServiceWorkerRegistration")}}s associated with a
`ServiceWorkerContainer`, in an array. The method returns a
{{jsxref("Promise")}} that resolves to an array of
{{domxref("ServiceWorkerRegistration")}}.

## Syntax

```js-nolint
getRegistrations()
```

### Parameters

None.

### Return value

A {{jsxref("Promise")}} that resolves to an array of
{{domxref("ServiceWorkerRegistration")}} objects.

## Examples

```js
navigator.serviceWorker.getRegistrations().then((registrations) => {
  document.querySelector("#status").textContent =
    "ServiceWorkerRegistrations found.";
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
