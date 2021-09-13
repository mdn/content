---
title: ContentIndexEvent
slug: Web/API/ContentIndexEvent
tags:
  - Content
  - Content Index API
  - Index
  - Interface
  - PWA
  - content indexing
browser-compat: api.ContentIndexEvent
---
{{draft}}{{DefaultAPISidebar("Content Index API")}}

The **`ContentIndexEvent`** interface of the {{domxref('Content Index API')}} defines the object used to represent the {{Event('contentdelete')}} event.

This event is sent to the {{domxref('ServiceWorkerGlobalScope','global scope')}} of a {{domxref('ServiceWorker')}}. It contains the id of the indexed content to be removed.

The {{Event('contentdelete')}} event is only fired when the deletion happens due to interaction with the browser's built-in user interface. It is not fired when the {{domxref('ContentIndex.delete')}} method is called.

## Constructor

- {{domxref("ContentIndexEvent.ContentIndexEvent", "ContentIndexEvent()")}}
  - : Creates and returns a new `ContentIndexEvent` object whose type and other options are configured as specified.

## Properties

_In addition to the properties listed below, this interface inherits the properties of its parent interface, {{domxref("ExtendableEvent")}}._

- {{domxref("ContentIndexEvent.id", "id")}} {{ReadOnlyInline}}
  - : A {{jsxref('String')}} which identifies the deleted content index via it's `id`.

## Methods

_While `ContentIndexEvent` offers no methods of its own, it inherits any specified by its parent interface, {{domxref("ExtendableEvent")}}._

## Examples

This example shows the {{domxref('ServiceWorker','sevice worker')}} script listening for the {{domxref('ContentIndexEvent', 'contentdelete')}} event and logs the removed content index id.

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

- [An introductory article on the Content Index API](https://web.dev/content-indexing-api/)
- [An app which uses the Content Index API to list and remove 'save for later' content](https://contentindex.dev/)
- [Service Worker API, along with information about Cache and CacheStorage](/en-US/docs/Web/API/Service_Worker_API)
