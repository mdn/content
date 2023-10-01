---
title: "Document: pointerlockchange event"
short-title: pointerlockchange
slug: Web/API/Document/pointerlockchange_event
page-type: web-api-event
browser-compat: api.Document.pointerlockchange_event
---

{{APIRef}}

The `pointerlockchange` event is fired when the pointer is locked/unlocked.

The event handler can use {{domxref("Document.pointerLockElement")}} to determine whether the pointer is locked, and if so, to which element it is locked.

This event is not cancelable.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("pointerlockchange", (event) => {});

onpointerlockchange = (event) => {};
```

## Event type

A generic {{domxref("Event")}}.

## Examples

Using `addEventListener()`:

```js
addEventListener("pointerlockchange", (event) => {
  if (document.pointerLockElement)
    console.log("The pointer is locked to: ", document.pointerLockElement);
  else {
    console.log("The pointer is not locked");
  }
});
```

Using the `onpointerlockchange` event handler property:

```js
document.onpointerlockchange = (event) => {
  if (document.pointerLockElement)
    console.log("The pointer is locked to: ", document.pointerLockElement);
  else {
    console.log("The pointer is not locked");
  }
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using Pointer Lock API](/en-US/docs/Web/API/Pointer_Lock_API)
