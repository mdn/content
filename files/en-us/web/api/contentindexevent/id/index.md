---
title: ContentIndexEvent.id
slug: Web/API/ContentIndexEvent/id
tags:
  - Content
  - Content Index API
  - Index
  - PWA
  - Property
  - content indexing
  - events
browser-compat: api.ContentIndexEvent.id
---
{{draft}}{{DefaultAPISidebar("Content Index API")}}

The read-only **`id`** property of the
{{domxref("ContentIndexEvent")}} interface is a {{jsxref('String')}} which identifies
the deleted content index via it's `id`.

## Syntax

```js
var id = ContentIndexEvent.id;
```

### Value

A {{jsxref("String")}} representation of the deleted content index id.

## Examples

This example listens for the {{domxref('ContentIndexEvent', 'contentdelete')}} event
and logs the removed content index id.

The {{domxref('ContentIndexEvent')}} is only available to the
{{domxref('ServiceWorkerGlobalScope','global scope')}} of a
{{domxref('ServiceWorker')}}.

```js
self.addEventListener('contentdelete', (event) => {
  console.log(event.id);

  // logs content index id, which can then be used to determine what content to delete from your cache

});
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
