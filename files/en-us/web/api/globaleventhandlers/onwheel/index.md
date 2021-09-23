---
title: GlobalEventHandlers.onwheel
slug: Web/API/GlobalEventHandlers/onwheel
tags:
  - API
  - Event Handler
  - GlobalEventHandlers
  - HTML DOM
  - Property
  - Reference
  - onwheel
browser-compat: api.GlobalEventHandlers.onwheel
---
{{ ApiRef("DOM") }}

The **`onwheel`** property of the
{{domxref("GlobalEventHandlers")}} mixin is an [event handler](/en-US/docs/Web/Events/Event_handlers) that
processes `wheel` events.

The `wheel` event fires when the user rotates the mouse (or other pointing
device) wheel.

> **Note:** Don't confuse `onwheel` with
> {{domxref("GlobalEventHandlers.onscroll", "onscroll")}}: `onwheel` handles
> general wheel rotation, while `onscroll` handles scrolling of an object's
> content.

## Syntax

```js
target.onwheel = functionRef;
```

### Value

`functionRef` is a function name or a [function
expression](/en-US/docs/Web/JavaScript/Reference/Operators/function). The function receives a {{domxref("WheelEvent")}} object as its sole
argument.

## Examples

This example shows how to scale an element using the mouse (or other pointing device)
wheel.

### HTML

```html
<div>Scale me with your mouse wheel.</div>
```

### CSS

```css
body {
  min-height: 100vh;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

div {
  width: 80px;
  height: 80px;
  background: #cdf;
  padding: 5px;
  transition: transform .3s;
}
```

### JavaScript

```js
function zoom(event) {
  event.preventDefault();

  if (event.deltaY < 0) {
    // Zoom in
    scale *= event.deltaY * -2;
  }
  else {
    // Zoom out
    scale /= event.deltaY * 2;
  }

  // Restrict scale
  scale = Math.min(Math.max(.125, scale), 4);

  // Apply scale transform
  el.style.transform = `scale(${scale})`;
}

let scale = 1;
const el = document.querySelector('div');
document.onwheel = zoom;
```

### Result

{{EmbedLiveSample("Examples", 700, 400)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Document: `wheel`
  event](/en-US/docs/Web/API/Document/wheel_event)
- [Element: `wheel`
  event](/en-US/docs/Web/API/Element/wheel_event)
