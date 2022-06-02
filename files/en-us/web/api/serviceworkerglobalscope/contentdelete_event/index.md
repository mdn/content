---
title: 'ServiceWorkerGlobalScope: contentdelete event'
slug: Web/API/ServiceWorkerGlobalScope/contentdelete_event
tags:
  - Content Index API
  - ServiceWorkerGlobalScope
  - content indexing
  - contentdelete
  - delete
  - event
browser-compat: api.ServiceWorkerGlobalScope.contentdelete_event
---
{{APIRef("Service Workers API")}}

The **`contentdelete`** event of the {{domxref("ServiceWorkerGlobalScope")}} interface is fired when an item is removed from the indexed content via the user agent.

This event is not cancelable and does not bubble.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener('contentdelete', event => { });

oncontentdelete = event => { };
```

## Event type

An {{domxref("ContentIndexEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("ContentIndexEvent")}}

## Event properties

_In addition to the properties listed below, this interface inherits the properties of its parent interface, {{domxref("ContentIndexEvent")}}._

- {{domxref("ContentIndexEvent.id", "id")}} {{ReadOnlyInline}}
  - : A {{jsxref('String')}} which identifies the deleted content index via it's `id`.

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

You can also set up the event handler using the `oncontentdelete` property:

```js
self.oncontentdelete = (event) => {
  ...
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Content Index API")}}
- [An introductory article on the Content Index API](https://web.dev/content-indexing-api/)
- [An app which uses the Content Index API to list and remove 'save for later' content](https://contentindex.dev/)
