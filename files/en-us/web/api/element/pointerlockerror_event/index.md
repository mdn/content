---
title: 'Element: pointerlockerror event'
slug: Web/API/Element/pointerlockerror_event
page-type: web-api-event
tags:
  - Document
  - Event
  - Reference
  - Web
  - pointerlockerror
browser-compat: api.Element.pointerlockerror_event
---
{{APIRef}}

The `pointerlockerror` event is fired when locking the pointer failed (for technical reasons or because the permission was denied).

This event is not cancelable.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener('pointerlockerror', (event) => { });

onpointerlockerror = (event) => { };
```

## Event type

A generic {{domxref("Event")}}.

## Examples

Using `addEventListener()`:

```js
const para = document.querySelector('p');

document.addEventListener('pointerlockerror', (event) => {
  console.log('Error locking pointer');
});
```

Using the `onpointerlockerror` event handler property:

```js
document.onpointerlockerror = (event) => {
  console.log('Error locking pointer');
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using Pointer Lock API](/en-US/docs/Web/API/Pointer_Lock_API)
