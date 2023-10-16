---
title: "ServiceWorkerGlobalScope: contentdelete event"
short-title: contentdelete
slug: Web/API/ServiceWorkerGlobalScope/contentdelete_event
page-type: web-api-event
status:
  - experimental
browser-compat: api.ServiceWorkerGlobalScope.contentdelete_event
---

{{APIRef("Content Index API")}}{{SeeCompatTable}}

The **`contentdelete`** event of the {{domxref("ServiceWorkerGlobalScope")}} interface is fired when an item is removed from the indexed content via the user agent.

This event is not cancelable and does not bubble.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("contentdelete", (event) => {});

oncontentdelete = (event) => {};
```

## Event type

A {{domxref("ContentIndexEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("ContentIndexEvent")}}

## Event properties

_In addition to the properties listed below, this interface inherits the properties of its parent interface, {{domxref("Event")}}._

- {{domxref("ContentIndexEvent.id", "id")}} {{ReadOnlyInline}}
  - : A string which identifies the deleted content index via it's `id`.

## Examples

The following example uses a `contentdelete` event handler to remove cached content related to the deleted index item.

```js
self.addEventListener("contentdelete", (event) => {
  const deletion = caches
    .open("cache-name")
    .then((cache) =>
      Promise.all([
        cache.delete(`/icon/${event.id}`),
        cache.delete(`/content/${event.id}`),
      ]),
    );
  event.waitUntil(deletion);
});
```

You can also set up the event handler using the `oncontentdelete` property:

```js
self.oncontentdelete = (event) => {
  // ...
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Content index API](/en-US/docs/Web/API/Content_Index_API)
- [An introductory article on the Content Index API](https://web.dev/content-indexing-api/)
- [An app which uses the Content Index API to list and remove 'save for later' content](https://contentindex.dev/)
