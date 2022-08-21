---
title: TouchEvent.altKey
slug: Web/API/TouchEvent/altKey
page-type: web-api-instance-property
tags:
  - API
  - DOM
  - Mobile
  - Property
  - TouchEvent
  - touch
browser-compat: api.TouchEvent.altKey
---
{{APIRef("Touch Events") }}

## Summary

A boolean value indicating whether or not the <kbd>alt</kbd> (Alternate) key is enabled when the touch event is created. If the <kbd>alt</kbd> key is enabled, the attribute's value is `true`. Otherwise, it is `false`.

This property is {{ReadOnlyInline}}.

## Value

A boolean value that is `true` if the <kbd>alt</kbd> key is enabled for this event; and `false` if the <kbd>alt</kbd> is not enabled.

## Examples

This example illustrates how to access the {{domxref("TouchEvent")}} key modifier properties: {{domxref("TouchEvent.altKey")}}, {{domxref("TouchEvent.ctrlKey")}}, {{domxref("TouchEvent.metaKey")}} and {{domxref("TouchEvent.shiftKey")}}.

In following code snippet, the {{domxref("Element/touchstart_event", "touchstart")}} event handler logs the state of the event's modifier keys.

```js
someElement.addEventListener('touchstart', (e) => {
   // Log the state of this event's modifier keys
   console.log(`altKey = ${e.altKey}`);
   console.log(`ctrlKey = ${e.ctrlKey}`);
   console.log(`metaKey = ${e.metaKey}`);
   console.log(`shiftKey = ${e.shiftKey}`);
}, false);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
