---
title: BackgroundFetchManager.get()
slug: Web/API/BackgroundFetchManager/get
page-type: web-api-instance-method
tags:
  - API
  - Method
  - Reference
  - get
  - BackgroundFetchManager
  - Experimental
  - Service Workers
  - Fetch
browser-compat: api.BackgroundFetchManager.get
---
{{APIRef("Background Fetch API")}}{{SeeCompatTable}}

The **`get()`** method of the {{domxref("BackgroundFetchManager")}} interface returns a {{jsxref("Promise")}} that resolves with the {{domxref("BackgroundFetchRegistration")}} associated with the provided `id` or {{jsxref("undefined")}} if the `id` is not found.

## Syntax

```js
get(id)
```

### Parameters

- `id`
  - : the ID of a {{domxref("backgroundFetchRegistration")}} defined by calling {{domxref("BackgroundFetchRegistration.fetch","fetch()")}}.

### Return value

A {{jsxref("Promise")}} that resolves with a {{domxref("BackgroundFetchRegistration")}} or {{jsxref("undefined")}}.

## Examples

The following examples shows how to use `get()` to retrieve a {{domxref("BackgroundFetchRegistration")}}. With an active {{domxref('ServiceWorker', 'service worker')}}, use the {{domxref('ServiceWorkerRegistration.backgroundFetch')}} to access the `BackgroundFetchManager` object and call its `get()` method.

```js
navigator.serviceWorker.ready.then(async (swReg) => {
  const bgFetch = await swReg.backgroundFetch.get('my-fetch');
});
// my code block
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
