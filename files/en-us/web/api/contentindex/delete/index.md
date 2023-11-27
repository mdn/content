---
title: "ContentIndex: delete() method"
short-title: delete()
slug: Web/API/ContentIndex/delete
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.ContentIndex.delete
---

{{APIRef("Content Index API")}}{{SeeCompatTable}}

The **`delete()`** method of the {{domxref("ContentIndex")}} interface unregisters an item from the currently indexed content.

> **Note:** Calling `delete()` only affects the index. It does not delete anything from the {{domxref('Cache')}}.

## Syntax

```js-nolint
delete(id)
```

### Parameters

- `id`
  - : The unique identifier of the indexed content you want the {{domxref("ContentIndex")}} object to remove.

### Return value

Returns a {{jsxref("Promise")}} that resolves with `undefined`.

### Exceptions

No exceptions are thrown.

## Examples

Below is an asynchronous function, that removes an item from the {{domxref("Content Index API", "content index")}}. We receive a reference to the current {{domxref('ServiceWorkerRegistration')}}, which allows us to access the {{domxref('ServiceWorkerRegistration.index','index')}} property and thus access the `delete` method.

```js
async function unregisterContent(article) {
  // reference registration
  const registration = await navigator.serviceWorker.ready;

  // feature detect Content Index
  if (!registration.index) return;

  // unregister content from index
  await registration.index.delete(article.id);
}
```

The `delete` method can also be used within the {{domxref("ServiceWorker", "service worker")}} scope.

```js
self.registration.index.delete("my-id");
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [An introductory article on the Content Index API](https://developer.chrome.com/articles/content-indexing-api/)
- [An app which uses the Content Index API to list and remove 'save for later' content](https://contentindex.dev/)
- {{domxref("Service Worker API", "Service Worker API, along with information about Cache and CacheStorage")}}
