---
title: "Document: pointerLockElement property"
short-title: pointerLockElement
slug: Web/API/Document/pointerLockElement
page-type: web-api-instance-property
browser-compat: api.Document.pointerLockElement
---

{{APIRef("Pointer Lock API")}}

The **`pointerLockElement`** read-only property of the {{domxref("Document")}} interface provides the element set as the target for mouse events while the pointer is locked.
It is `null` if lock is pending, pointer is unlocked, or the target is in another document.

## Value

An {{domxref("Element")}} or `null`.

## Examples

### Checking pointer lock status

This example contains a {{htmlelement("div")}} element that in turn contains a {{htmlelement("button")}}. Clicking the button requests pointer lock for the `<div>`.

The example also listens for the {{domxref("Document/pointerlockchange_event", "pointerlockchange")}} event: when this event is fired, the event handler disables the "Lock" button if an element in the document has the pointer lock, and enables the button otherwise.

The effect of this is that if you click the "Lock" button, the pointer is locked and the button is disabled: if you then exit pointer lock (for example, by pressing the <kbd>Escape</kbd> key), the button is enabled again.

#### HTML

```html
<div id="container">
  <button id="lock">Lock</button>
</div>
```

#### CSS

```css
div {
  height: 100px;
  width: 200px;
  border: 2px solid blue;
}
```

#### JavaScript

```js
const lock = document.querySelector("#lock");
const container = document.querySelector("#container");

lock.addEventListener("click", () => {
  container.requestPointerLock();
});

document.addEventListener("pointerlockchange", () => {
  const locked = document.pointerLockElement;
  lock.disabled = Boolean(locked);
});
```

#### Result

{{EmbedLiveSample("Checking pointer lock status")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{ domxref("Document.exitPointerLock()") }}
- {{ domxref("Element.requestPointerLock()") }}
- [Pointer Lock](/en-US/docs/Web/API/Pointer_Lock_API)
