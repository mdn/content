---
title: ContentIndex.delete()
slug: Web/API/ContentIndex/delete
tags:
  - Content
  - Content Index API
  - Index
  - Interface
  - Method
  - PWA
  - content index
  - content indexing
  - delete
browser-compat: api.ContentIndex.delete
---
{{draft}}{{DefaultAPISidebar("Content Index API")}}

The **`delete()`** method of the
{{domxref("ContentIndex")}} interface unregisters an item from the currently indexed
content.

> **Note:** Calling `delete()` only affects the index. It does not delete anything
> from the {{domxref('Cache')}}.

## Syntax

```js
ContentIndex.delete(id).then(...);
```

### Parameters

This method receives no parameters.

### Return value

Returns a {{jsxref("Promise")}} that resolves with `undefined`

### Exceptions

No exceptions are thrown.

## Examples

Below is an asynchronous function, that removes an item from the {{domxref('Content
  Index API','content index')}}. We receive a reference to the current
{{domxref('ServiceWorkerRegistration')}}, which allows us to access the
{{domxref('ServiceWorkerRegistration.index','index')}} property and thus access the
`delete` method.

```js
async function unregisterContent(article) {

  // reference registration
  const registration = await navigator.serviceWorker.ready;

  // feature detect Content Index
  if (!registration.index)
    return;

  // unregister content from index
  await registration.index.delete(article.id);
}
```

The `delete` method can also be used within the
{{domxref('ServiceWorker','service worker')}} scope.

```js
self.registration.index.delete('my-id');
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [An introductory article on the
  Content Index API](https://web.dev/content-indexing-api/)
- [An app which uses the Content Index API to list
  and remove 'save for later' content](https://contentindex.dev/)
- [Service Worker API, along with
  information about Cache and CacheStorage](/en-US/docs/Web/API/Service_Worker_API)
