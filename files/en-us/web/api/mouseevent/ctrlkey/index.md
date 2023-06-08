---
title: "MouseEvent: ctrlKey property"
short-title: ctrlKey
slug: Web/API/MouseEvent/ctrlKey
page-type: web-api-instance-property
browser-compat: api.MouseEvent.ctrlKey
---

{{APIRef("UI Events")}}

The **`MouseEvent.ctrlKey`** read-only property is a boolean value that indicates whether the <kbd>ctrl</kbd> key was pressed or not when a given mouse event occurs.

> **Note:** On Macintosh keyboards, this key is the <kbd>control</kbd> key.

## Value

A boolean value, where `true` indicates that the key is pressed, and `false` indicates that the key is _not_ pressed.

## Examples

This example logs the `ctrlKey` property when you trigger a {{domxref("Element/mouseenter_event", "mouseenter")}} event.

### HTML

```html
<p id="target">
  Move the mouse over this element to test the
  <code>ctrlKey</code> property.
</p>
<p id="log"></p>
```

### CSS

```css
#target {
  padding: 1rem;
  border: 5px solid turquoise;
  border-radius: 0.5rem;
}
```

### JavaScript

```js
const target = document.querySelector("#target");
const log = document.querySelector("#log");

target.addEventListener("mouseenter", logKey);

function logKey(e) {
  log.textContent = `The ctrl key is pressed: ${e.ctrlKey}`;
}
```

### Result

{{EmbedLiveSample("Examples")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{ domxref("MouseEvent") }}
