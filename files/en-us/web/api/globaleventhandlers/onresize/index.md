---
title: GlobalEventHandlers.onresize
slug: Web/API/GlobalEventHandlers/onresize
tags:
  - API
  - Event Handler
  - GlobalEventHandlers
  - HTML DOM
  - Property
  - Reference
  - onresize
browser-compat: api.GlobalEventHandlers.onresize
---
{{ ApiRef() }}

The **`onresize`** property of the
{{domxref("GlobalEventHandlers")}} interface is an [event handler](/en-US/docs/Web/Events/Event_handlers) that
processes [`resize`](/en-US/docs/Web/API/Window/resize_event)
events.

The `resize` event fires after the window has been resized.

## Syntax

```js
window.onresize = functionRef;
```

### Value

`functionRef` is a function name or a [function
expression](/en-US/docs/Web/JavaScript/Reference/Operators/function). The function receives a {{domxref("FocusEvent")}} object as its sole
argument.

## Examples

### Window size logger

```html
<p>Resize the browser window to fire the <code>resize</code> event.</p>
<p>Window height: <span id="height"></span></p>
<p>Window width: <span id="width"></span></p>
```

```js
const heightOutput = document.querySelector('#height');
const widthOutput = document.querySelector('#width');

function resize() {
  heightOutput.textContent = window.innerHeight;
  widthOutput.textContent = window.innerWidth;
}

window.onresize = resize;
```

{{EmbedLiveSample("Window_size_logger")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Window: `resize`
  event](/en-US/docs/Web/API/Window/resize_event)
