---
title: GlobalEventHandlers.onmouseup
slug: Web/API/GlobalEventHandlers/onmouseup
tags:
  - API
  - Event Handler
  - GlobalEventHandlers
  - HTML DOM
  - Property
  - Reference
browser-compat: api.GlobalEventHandlers.onmouseup
---
{{ApiRef("HTML DOM")}}

The **`onmouseup`** property of the
{{domxref("GlobalEventHandlers")}} mixin is an [event handler](/en-US/docs/Web/Events/Event_handlers) that
processes {{event("mouseup")}} events.

The `mouseup` event fires when the user releases the mouse button.

> **Note:** The opposite of `onmouseup` is
> {{domxref("GlobalEventHandlers.onmousedown", "onmousedown")}}.

## Syntax

```js
target.onmouseup = functionRef;
```

### Value

`functionRef` is a function name or a [function
expression](/en-US/docs/Web/JavaScript/Reference/Operators/function). The function receives a {{domxref("MouseEvent")}} object as its sole
argument.

## Example

In this example, a piece of "toast" hides when you click down with the mouse, and
reappears when you release. It uses the {{domxref("GlobalEventHandlers.onmousedown",
  "onmousedown")}} and `onmouseup` event handlers.

### HTML

```html
<div class="container">
  <div class="toaster"></div>
  <div class="toast">Hello world!</div>
</div>
```

### CSS

```css
.container {
  position: absolute;
  left: 50%;
  bottom: 20px;
  transform: translate(-50%);
}

.toaster {
  width: 160px;
  height: 110px;
  background: #bbb;
  border-radius: 10px 10px 0 0;
}

.toast {
  position: absolute;
  left: 50%;
  top: 50%;
  z-index: -1;
  width: 100px;
  height: 50px;
  padding: 10px;
  background: #ed9;
  border-radius: 10px 10px 0 0;
  transform: translate(-50%, -90px);
  transition: transform .3s;
}

.depressed {
  transform: translate(-50%, -50%);
}
```

### JavaScript

```js
function depress() {
  toast.classList.add('depressed');
}

function release() {
  toast.classList.remove('depressed');
}

const toaster = document.querySelector('.toaster');
const toast = document.querySelector('.toast');

toaster.onmousedown = depress;
document.onmouseup = release;
```

### Result

{{EmbedLiveSample("Example", 700, 200)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{event("mouseup")}} event
