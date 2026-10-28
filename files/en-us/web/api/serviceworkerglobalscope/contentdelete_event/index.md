---
title: "ServiceWorkerGlobalScope: contentdelete event"
short-title: contentdelete
slug: Web/API/ServiceWorkerGlobalScope/contentdelete_event
page-type: web-api-event
status:
  - experimental
browser-compat: api.ServiceWorkerGlobalScope.contentdelete_event
---

{{APIRef("Content Index API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers("service")}}

The **`contentdelete`** event of the {{domxref("ServiceWorkerGlobalScope")}} interface is fired when an item is removed from the indexed content via the user agent.

This event is not cancelable and does not bubble.

## Syntax

Use the event name in {{domxref("EventTarget/addEventListener", "addEventListener()")}}:

```js-nolint
addEventListener("contentdelete", (event) => { })
```

Alternatively, assign to the [event handler property](/en-US/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) of the interface:

```js-nolint
oncontentdelete = (event) => { }
```

## Event type

A {{domxref("ContentIndexEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("ContentIndexEvent")}}

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

You can also set up the event handler using the `oncontentdelete` property (but note that this replaces other event listeners added using `oncontentdelete`, if any):

```js
self.oncontentdelete = (event) => {
  // …
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Content index API](/en-US/docs/Web/API/Content_Index_API)
- [An introductory article on the Content Index API](https://developer.chrome.com/docs/capabilities/web-apis/content-indexing-api)
