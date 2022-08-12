---
title: 'Window: storage event'
slug: Web/API/Window/storage_event
page-type: web-api-event
tags:
  - API
  - Event
  - Reference
  - Storage
  - Web Storage
  - Window
browser-compat: api.Window.storage_event
---
{{APIRef}}

The **`storage`** event of the {{domxref("Window")}} interface fires when a storage area (`localStorage`) has been modified in the context of another document.

> **Note:** This won't work on the same page that is making the changes — it is really a way for other pages on the domain using the storage to sync any changes that are made. Pages on other domains can't access the same storage objects.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener('storage', (event) => { });
onstorage = (event) => { };
```

## Event type

A {{domxref("StorageEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("StorageEvent")}}

## Event properties

- {{domxref("StorageEvent.key", "key")}} {{ReadOnlyInline}}
  - : Returns a string that represents the key changed.
    The `key` attribute is [`null`](/en-US/docs/Web/JavaScript/Reference/Operators/null)
    when the change is caused by the storage `clear()` method.
- {{domxref("StorageEvent.newValue", "newValue")}} {{ReadOnlyInline}}
  - : Returns a string with the new value of the `key`.
    This value is `null`
    when the change has been invoked by storage `clear()` method,
    or the `key` has been removed from the storage.
- {{domxref("StorageEvent.oldValue", "oldValue")}} {{ReadOnlyInline}}
  - : Returns a string with the original value of the `key`.
    This value is `null` when the `key` has been newly added
    and therefore doesn't have any previous value.
- {{domxref("StorageEvent.storageArea", "storageArea")}} {{ReadOnlyInline}}
  - : Returns a {{DOMxRef("Storage")}} object that represents the storage that was affected.
- {{domxref("StorageEvent.url", "url")}} {{ReadOnlyInline}}
  - : Returns string with the URL of the document whose `key` changed.

## Event handler aliases

In addition to the `Window` interface, the event handler property `onstorage` is also available on the following targets:

- {{domxref("HTMLBodyElement")}}
- {{domxref("HTMLFrameSetElement")}}
- {{domxref("SVGSVGElement")}}

## Examples

Log the `sampleList` item to the console when the `storage` event fires:

```js
window.addEventListener('storage', () => {
  // When local storage changes, dump the list to
  // the console.
  console.log(JSON.parse(window.localStorage.getItem('sampleList')));
});
```

The same action can be achieved using the `onstorage` event handler property:

```js
window.onstorage = () => {
  // When local storage changes, dump the list to
  // the console.
  console.log(JSON.parse(window.localStorage.getItem('sampleList')));
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Storage API](/en-US/docs/Web/API/Web_Storage_API)
- [Using the Web Storage API](/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)
- [Responding to storage changes with the StorageEvent](/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API#responding_to_storage_changes_with_the_storageevent)
