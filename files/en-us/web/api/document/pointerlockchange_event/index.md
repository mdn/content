---
title: "Document: pointerlockchange event"
short-title: pointerlockchange
slug: Web/API/Document/pointerlockchange_event
page-type: web-api-event
browser-compat: api.Document.pointerlockchange_event
---

{{APIRef("Pointer Lock API")}}

The **`pointerlockchange`** event is fired when the pointer is locked/unlocked.

The event handler can use {{domxref("Document.pointerLockElement")}} to determine whether the pointer is locked, and if so, to which element it is locked.

This event is not cancelable and does not bubble.

## Syntax

Use the event name in {{domxref("EventTarget/addEventListener", "addEventListener()")}}:

```js-nolint
addEventListener("pointerlockchange", (event) => { })
```

Alternatively, assign to the [event handler property](/en-US/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) of the interface:

```js-nolint
onpointerlockchange = (event) => { }
```

## Event type

A generic {{domxref("Event")}}.

## Examples

Using `addEventListener()`:

```js
document.addEventListener("pointerlockchange", (event) => {
  if (document.pointerLockElement)
    console.log("The pointer is locked to: ", document.pointerLockElement);
  else {
    console.log("The pointer is not locked");
  }
});
```

Using the `onpointerlockchange` event handler property (but note that this replaces other event listeners added using `onpointerlockchange`, if any):

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
