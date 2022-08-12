---
title: 'Document: pointerlockchange event'
slug: Web/API/Document/pointerlockchange_event
page-type: web-api-event
tags:
  - Document
  - Event
  - Reference
  - Web
  - pointerlockchange
browser-compat: api.Document.pointerlockchange_event
---
{{APIRef}}

The `pointerlockchange` event is fired when the pointer is locked/unlocked.

This event is not cancelable.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener('pointerlockchange', (event) => { });

onpointerlockchange = (event) => { };
```

## Event type

A generic {{domxref("Event")}}.

## Examples

Using `addEventListener()`:

```js
document.addEventListener('pointerlockchange', (event) => {
  console.log('Pointer lock changed');
});
```

Using the `onpointerlockchange` event handler property:

```js
document.onpointerlockchange = (event) => {
  console.log('Pointer lock changed');
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using Pointer Lock API](/en-US/docs/Web/API/Pointer_Lock_API)
