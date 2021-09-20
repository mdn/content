---
title: GlobalEventHandlers.onmousedown
slug: Web/API/GlobalEventHandlers/onmousedown
tags:
  - API
  - Event Handler
  - GlobalEventHandlers
  - HTML DOM
  - Property
  - Reference
browser-compat: api.GlobalEventHandlers.onmousedown
---
{{ ApiRef("HTML DOM") }}

The **`onmousedown`** property of the
{{domxref("GlobalEventHandlers")}} mixin is an [event handler](/en-US/docs/Web/Events/Event_handlers) that
processes {{event("mousedown")}} events.

The `mousedown` event fires when the user depresses the mouse button.

> **Note:** The opposite of `onmousedown` is
> {{domxref("GlobalEventHandlers.onmouseup", "onmouseup")}}.

## Syntax

```js
target.onmousedown = functionRef;
```

### Value

`functionRef` is a function name or a [function
expression](/en-US/docs/Web/JavaScript/Reference/Operators/function). The function receives a {{domxref("MouseEvent")}} object as its sole
argument.

## Example

This example reveals part of an image when you press and hold a mouse button. It uses
the `onmousedown`, {{domxref("GlobalEventHandlers.onmouseup", "onmouseup")}},
and {{domxref("GlobalEventHandlers.onmousemove", "onmousemove")}} event handlers.

### HTML

```html
<div class="container">
  <div class="view" hidden></div>
  <img src="https://interactive-examples.mdn.mozilla.net/media/examples/gecko-320-213.jpg">
</div>
```

### CSS

```css
.container {
  width: 320px;
  height: 213px;
  background: black;
}

.view {
  position: absolute;
  width: 100px;
  height: 100px;
  background: white;
  border-radius: 50%;
}

img {
  mix-blend-mode: darken;
}
```

### JavaScript

```js
function showView(event) {
  view.removeAttribute('hidden');
  view.style.left = event.clientX - 50 + 'px';
  view.style.top = event.clientY - 50 + 'px';
  event.preventDefault();
}

function moveView(event) {
  view.style.left = event.clientX - 50 + 'px';
  view.style.top = event.clientY - 50 + 'px';
}

function hideView(event) {
  view.setAttribute('hidden', '');
}

const container = document.querySelector('.container');
const view = document.querySelector('.view');

container.onmousedown = showView;
container.onmousemove = moveView;
document.onmouseup = hideView;
```

### Result

{{EmbedLiveSample("Example", 700, 300)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{event("mousedown")}} event
