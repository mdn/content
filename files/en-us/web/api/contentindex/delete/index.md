---
title: "ContentIndex: delete() method"
short-title: delete()
slug: Web/API/ContentIndex/delete
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.ContentIndex.delete
---

{{APIRef("Content Index API")}}{{SeeCompatTable}}{{AvailableInWorkers}}

The **`delete()`** method of the
{{domxref("ContentIndex")}} interface unregisters an item from the currently indexed
content.

> [!NOTE]
> Calling `delete()` only affects the index. It does not delete anything
> from the {{domxref('Cache')}}.

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

Below is an asynchronous function, that removes an item from the [content index](/en-US/docs/Web/API/Content_Index_API). We receive a reference to the current
{{domxref('ServiceWorkerRegistration')}}, which allows us to access the
{{domxref('ServiceWorkerRegistration.index','index')}} property and thus access the
`delete` method.

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

The `delete` method can also be used within the
[service worker](/en-US/docs/Web/API/ServiceWorker) scope.

```js
self.registration.index.delete("my-id");
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [An introductory article on the Content Index API](https://developer.chrome.com/docs/capabilities/web-apis/content-indexing-api)
- [Service Worker API, along with information about Cache and CacheStorage](/en-US/docs/Web/API/Service_Worker_API)
