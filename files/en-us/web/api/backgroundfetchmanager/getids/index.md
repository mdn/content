---
title: BackgroundFetchManager.getIds()
slug: Web/API/BackgroundFetchManager/getIds
page-type: web-api-instance-method
tags:
  - API
  - Method
  - Reference
  - getIds
  - BackgroundFetchManager
  - Experimental
  - Service Workers
  - Fetch
browser-compat: api.BackgroundFetchManager.getIds
---
{{APIRef("Background Fetch API")}}{{SeeCompatTable}}

The **`getIds()`** method of the {{domxref("BackgroundFetchManager")}} interface returns the IDs of all registered background fetches.

## Syntax

```js
getIds()
```

### Parameters

None.

### Return value

A {{jsxref("Promise")}} that resolves with an {{jsxref('Array')}} of {{jsxref('String', 'strings')}}.

### Exceptions

None.

## Examples

The following examples shows how to retrieve the IDs of all registered background fetches. With an active {{domxref('ServiceWorker', 'service worker')}}, use the {{domxref('ServiceWorkerRegistration.backgroundFetch')}} property to access the \`BackgroundFetchManager\` object and call its \`get()\` method.

```js
navigator.serviceWorker.ready.then(async (swReg) => {
  const ids = await swReg.backgroundFetch.getIds();
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
