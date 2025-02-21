---
title: "Window: storage event"
short-title: storage
slug: Web/API/Window/storage_event
page-type: web-api-event
browser-compat: api.Window.storage_event
---

{{APIRef}}

The **`storage`** event of the {{domxref("Window")}} interface fires when another document that shares the same storage area (either {{domxref("Window/localStorage", "localStorage")}} or {{domxref("Window/sessionStorage", "sessionStorage")}}) as the current window updates that storage area. The event is _not_ fired on the window that made the change.

- For `localStorage`, the event is fired in all other {{Glossary("browsing context", "browsing contexts")}} that are in the same origin as the initiating document. This includes other tabs with the same origin.
- For `sessionStorage`, the event is fired in all other {{Glossary("browsing context", "browsing contexts")}} that are in the same origin and the same top-level browsing context as the initiating document. This only includes embedded iframes, if any, in the same tab, and not other tabs.

This event is not cancelable and does not bubble.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("storage", (event) => {});
onstorage = (event) => {};
```

## Event type

A {{domxref("StorageEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("StorageEvent")}}

## Event properties

- {{domxref("StorageEvent.key", "key")}} {{ReadOnlyInline}}
  - : Returns a string with the key for the storage item that was changed.
    The `key` attribute is `null` when the change is caused by the storage `clear()` method.
- {{domxref("StorageEvent.newValue", "newValue")}} {{ReadOnlyInline}}
  - : Returns a string with the new value of the storage item that was changed.
    This value is `null` when the change has been invoked by storage `clear()` method,
    or the storage item has been removed from the storage.
- {{domxref("StorageEvent.oldValue", "oldValue")}} {{ReadOnlyInline}}
  - : Returns a string with the original value of the storage item that was changed.
    This value is `null` when the storage item has been newly added
    and therefore doesn't have any previous value.
- {{domxref("StorageEvent.storageArea", "storageArea")}} {{ReadOnlyInline}}
  - : Returns a {{DOMxRef("Storage")}} object that represents the storage object that was affected.
- {{domxref("StorageEvent.url", "url")}} {{ReadOnlyInline}}
  - : Returns string with the URL of the document whose storage changed.

## Event handler aliases

In addition to the `Window` interface, the event handler property `onstorage` is also available on the following targets:

- {{domxref("HTMLBodyElement")}}
- {{domxref("HTMLFrameSetElement")}}
- {{domxref("SVGSVGElement")}}

## Examples

Log the `sampleList` item to the console when the `storage` event fires:

```js
window.addEventListener("storage", () => {
  // When local storage changes, dump the list to
  // the console.
  console.log(JSON.parse(window.localStorage.getItem("sampleList")));
});
```

The same action can be achieved using the `onstorage` event handler property:

```js
window.onstorage = () => {
  // When local storage changes, dump the list to
  // the console.
  console.log(JSON.parse(window.localStorage.getItem("sampleList")));
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Web Storage API", "", "", "nocode")}}
- [Using the Web Storage API](/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)
- [Responding to storage changes with the StorageEvent](/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API#responding_to_storage_changes_with_the_storageevent)
