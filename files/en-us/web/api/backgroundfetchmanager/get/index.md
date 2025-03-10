---
title: "BackgroundFetchManager: get() method"
short-title: get()
slug: Web/API/BackgroundFetchManager/get
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.BackgroundFetchManager.get
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}{{AvailableInWorkers}}

The **`get()`** method of the {{domxref("BackgroundFetchManager")}} interface returns a {{jsxref("Promise")}} that resolves with the {{domxref("BackgroundFetchRegistration")}} associated with the provided `id` or {{jsxref("undefined")}} if the `id` is not found.

## Syntax

```js-nolint
get(id)
```

### Parameters

- `id`
  - : The ID of a {{domxref("BackgroundFetchRegistration")}} defined by calling {{domxref("BackgroundFetchManager.fetch","fetch()")}}.

### Return value

A {{jsxref("Promise")}} that resolves with a {{domxref("BackgroundFetchRegistration")}} or {{jsxref("undefined")}}.

## Examples

The following examples shows how to use `get()` to retrieve a {{domxref("BackgroundFetchRegistration")}}. With an active [service worker](/en-US/docs/Web/API/ServiceWorker), use the {{domxref('ServiceWorkerRegistration.backgroundFetch')}} to access the `BackgroundFetchManager` object and call its `get()` method.

```js
navigator.serviceWorker.ready.then(async (swReg) => {
  const bgFetch = await swReg.backgroundFetch.get("my-fetch");
});
// my code block
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
