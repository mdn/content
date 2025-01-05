---
title: ContentIndexEvent
slug: Web/API/ContentIndexEvent
page-type: web-api-interface
status:
  - experimental
browser-compat: api.ContentIndexEvent
---

{{APIRef("Content Index API")}}{{SeeCompatTable}}{{AvailableInWorkers("service")}}

The **`ContentIndexEvent`** interface of the [content index](/en-US/docs/Web/API/Content_Index_API) defines the object used to represent the {{domxref("ServiceWorkerGlobalScope.contentdelete_event", 'contentdelete')}} event.

This event is sent to the [global scope](/en-US/docs/Web/API/ServiceWorkerGlobalScope) of a {{domxref('ServiceWorker')}}. It contains the id of the indexed content to be removed.

The {{domxref("ServiceWorkerGlobalScope.contentdelete_event", 'contentdelete')}} event is only fired when the deletion happens due to interaction with the browser's built-in user interface. It is not fired when the {{domxref('ContentIndex.delete')}} method is called.

{{InheritanceDiagram}}

## Constructor

- {{domxref("ContentIndexEvent.ContentIndexEvent", "ContentIndexEvent()")}} {{Experimental_Inline}}
  - : Creates and returns a new `ContentIndexEvent` object whose type and other options are configured as specified.

## Instance properties

_In addition to the properties listed below, this interface inherits the properties of its parent interface, {{domxref("ExtendableEvent")}}._

- {{domxref("ContentIndexEvent.id", "id")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : A {{jsxref('String')}} which identifies the deleted content index via it's `id`.

## Instance methods

_While `ContentIndexEvent` offers no methods of its own, it inherits any specified by its parent interface, {{domxref("ExtendableEvent")}}._

## Examples

This example shows the [service worker](/en-US/docs/Web/API/ServiceWorker) script listening for the {{domxref("ServiceWorkerGlobalScope.contentdelete_event", 'contentdelete')}} event and logs the removed content index id.

```js
self.addEventListener("contentdelete", (event) => {
  console.log(event.id);

  // logs content index id, which can then be used to determine what content to delete from your cache
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [An introductory article on the Content Index API](https://developer.chrome.com/docs/capabilities/web-apis/content-indexing-api)
- [Service Worker API, along with information about Cache and CacheStorage](/en-US/docs/Web/API/Service_Worker_API)
