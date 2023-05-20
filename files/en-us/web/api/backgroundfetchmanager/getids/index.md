---
title: "BackgroundFetchManager: getIds() method"
short-title: getIds()
slug: Web/API/BackgroundFetchManager/getIds
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.BackgroundFetchManager.getIds
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}

The **`getIds()`** method of the {{domxref("BackgroundFetchManager")}} interface returns the IDs of all registered background fetches.

## Syntax

```js-nolint
getIds()
```

### Parameters

None.

### Return value

A {{jsxref("Promise")}} that resolves with an {{jsxref('Array')}} of {{jsxref('String', 'strings')}}.

### Exceptions

None.

## Examples

The following examples shows how to retrieve the IDs of all registered background fetches. With an active [service worker](/en-US/docs/Web/API/ServiceWorker), use the {{domxref('ServiceWorkerRegistration.backgroundFetch')}} property to access the `BackgroundFetchManager` object and call its `getIds()` method.

```js
navigator.serviceWorker.ready.then(async (swReg) => {
  const ids = await swReg.backgroundFetch.getIds();
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
