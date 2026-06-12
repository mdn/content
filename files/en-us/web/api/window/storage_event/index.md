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

```js-nolint
addEventListener("storage", (event) => { })

onstorage = (event) => { }
```

## Event type

A {{domxref("StorageEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("StorageEvent")}}

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
