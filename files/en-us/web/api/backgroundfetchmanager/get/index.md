---
title: BackgroundFetchManager.get()
slug: Web/API/BackgroundFetchManager/get
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
{{DefaultAPISidebar("Background Fetch API")}}

The **`get()`** method of the {{domxref("BackgroundFetchManager")}} interface returns a {{jsxref("Promise")}} that resolves with the {{domxref("BackgroundFetchRegistration")}} associated with the provided `id` or {{jsxref("undefined")}} if the `id` is not found.

## Syntax

```js
let backgroundFetchRegistration = BackgroundFetchManager.get(id);
```

### Parameters

- `id`
  - : the ID of a {{domxref("backgroundFetchRegistration")}} defined by calling {{domxref("BackgroundFetchRegistration.fetch","fetch()")}}.

### Return value

A {{jsxref("Promise")}} that resolves with a {{domxref("BackgroundFetchRegistration")}} or {{jsxref("undeffined")}}.

## Examples

The following examples shows how to use `get()` to retrieve a {{domxref("BackgroundFetchRegistration")}}. With an active {{domxref('ServiceWorker', 'service worker')}}, use the {{domxref('ServiceWorkerRegistration.backgroundFetch')}} to access the `BackgroundFetchManager` object and call its `get()` method.

```js
navigator.serviceWorker.ready.then(async (swReg) => {
  const bgFetch = await swReg.backgroundFetch.get('my-fetch');
});
my code block
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
