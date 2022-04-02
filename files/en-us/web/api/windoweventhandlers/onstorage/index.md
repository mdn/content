---
title: WindowEventHandlers.onstorage
slug: Web/API/WindowEventHandlers/onstorage
tags:
  - API
  - Event Handler
  - Property
  - Reference
  - Web Storage
  - WindowEventHandlers
browser-compat: api.WindowEventHandlers.onstorage
---
{{ ApiRef() }}

The **`onstorage`** property of the
{{domxref("WindowEventHandlers")}} mixin is an [event handler](/en-US/docs/Web/Events/Event_handlers) for
processing [`storage`](/en-US/docs/Web/API/Window/storage_event)
events.

The `storage` event fires when a storage area has been changed in the
context of another document.

## Value

A function name or a [function expression](/en-US/docs/Web/JavaScript/Reference/Operators/function). This function receives a {{domxref("StorageEvent")}} as its sole argument.

## Examples

This example logs the value for a storage key whenever it changes in another document.

```js
window.onstorage = function(e) {
  console.log('The ' + e.key +
    ' key has been changed from ' + e.oldValue +
    ' to ' + e.newValue + '.');
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Window: `storage`
  event](/en-US/docs/Web/API/Window/storage_event)
