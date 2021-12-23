---
title: GlobalEventHandlers.oncontextmenu
slug: Web/API/GlobalEventHandlers/oncontextmenu
tags:
  - API
  - Event Handler
  - GlobalEventHandlers
  - HTML DOM
  - Property
  - Reference
browser-compat: api.GlobalEventHandlers.oncontextmenu
---
{{ ApiRef("HTML DOM") }}

The **`oncontextmenu`** property of the
{{domxref("GlobalEventHandlers")}} mixin is an [event handler](/en-US/docs/Web/Events/Event_handlers) that
processes {{event("contextmenu")}} events.

The `contextmenu` event typically fires when the right mouse button is
clicked on the window. Unless the default behavior is prevented, the browser context
menu will activate.

## Syntax

```js
target.oncontextmenu = functionRef;
```

### Value

`functionRef` is a function name or a [function
expression](/en-US/docs/Web/JavaScript/Reference/Operators/function). The function receives an {{domxref("Event")}} object as its sole
argument.

Only one `oncontextmenu` handler can be assigned to an object at a time. You
may prefer to use the {{domxref("EventTarget.addEventListener()")}} method instead,
since it's more flexible.

## Examples

### Disabling context menus

This snippet prevents context menus from opening in the window. The context menu
typically appears upon a right click.

#### HTML

```html
<p>Try opening the context menu. Is it disabled?<p>
```

#### JavaScript

```js
window.oncontextmenu = (e) => {
  e.preventDefault();
}
```

#### Result

{{EmbedLiveSample("Disabling_context_menus")}}

### Pausing an animation

This example pauses a spinning shape whenever you open the context menu.

#### HTML

```html
<div class="shape">Spinning</div>
<p class="note" hidden>Click to unpause.</p>
```

#### CSS

```css
@keyframes spin {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(1turn);
  }
}

.shape {
  width: 8em;
  height: 8em;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: spin 18s linear infinite;
  background: lightsalmon;
  border-radius: 42%;
  margin: 1em;
}

.paused {
  background-color: #ddd;
}

.paused .shape {
  animation-play-state: paused;
}
```

#### JavaScript

```js
function pause(e) {
  body.classList.add('paused');
  note.removeAttribute('hidden');
}

function play(e) {
  body.classList.remove('paused');
  note.setAttribute('hidden', '');
}

const body = document.querySelector('body');
const note = document.querySelector('.note');

window.oncontextmenu = pause;
window.onpointerdown = play;
```

#### Result

{{EmbedLiveSample("Pausing_an_animation", 700, 200)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

Unless the default behavior is prevented, the browser context menu will activate upon
right-click. However, IE8 has a bug with this and will not activate the context menu
if a `contextmenu` event handler is defined.

## See also

- {{event("contextmenu")}} event
