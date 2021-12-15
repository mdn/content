---
title: ServiceWorkerGlobalScope.oncontentdelete
slug: Web/API/ServiceWorkerGlobalScope/oncontentdelete
tags:
  - Content Index API
  - Event Handler
  - Property
  - ServiceWorkerGlobalScope
  - content indexing
  - delete
browser-compat: api.ServiceWorkerGlobalScope.oncontentdelete
---
{{draft}}{{APIRef("Service Workers API")}}

The **`oncontentdelete`** property of the {{domxref("ServiceWorkerGlobalScope")}} interface is an event handler fired when an item is removed from the indexed content via the user agent.

## Syntax

```js
ServiceWorkerGlobalScope.oncontentdelete = function(event) { /* ... */ };
```

## Examples

The following example uses a `contentdelete` event handler to remove cached content related to the deleted index item.

```js
self.addEventListener('contentdelete', event => {
  event.waitUntil(
    caches.open('cache-name').then(cache => {
      return Promise.all([
        cache.delete(`/icon/${event.id}`),
        cache.delete(`/content/${event.id}`)
      ])
    })
  );
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Content Index API")}}
- [An introductory article on the Content Index API](https://web.dev/content-indexing-api/)
- [An app which uses the Content Index API to list and remove 'save for later' content](https://contentindex.dev/)
