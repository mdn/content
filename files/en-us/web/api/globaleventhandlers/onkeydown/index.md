---
title: GlobalEventHandlers.onkeydown
slug: Web/API/GlobalEventHandlers/onkeydown
tags:
  - API
  - Event Handler
  - GlobalEventHandlers
  - HTML DOM
  - Property
  - Reference
  - events
browser-compat: api.GlobalEventHandlers.onkeydown
---
{{ApiRef("HTML DOM")}}

The **`onkeydown`** property of the
{{domxref("GlobalEventHandlers")}} mixin is an [event handler](/en-US/docs/Web/Events/Event_handlers) that
processes {{event("keydown")}} events.

The `keydown` event fires when the user presses a keyboard key.

## Syntax

```js
target.onkeydown = functionRef;
```

### Value

`functionRef` is a function name or a [function
expression](/en-US/docs/Web/JavaScript/Reference/Operators/function). The function receives a {{domxref("KeyboardEvent")}} object as its
sole argument.

## Example

This example logs the {{domxref("KeyboardEvent.code")}} value whenever you press down a
key inside the {{HtmlElement("input")}} element.

### HTML

```html
<input>
<p id="log"></p>
```

### JavaScript

```js
const input = document.querySelector('input');
const log = document.getElementById('log');

input.onkeydown = logKey;

function logKey(e) {
  log.textContent += ` ${e.code}`;
}
```

### Result

{{EmbedLiveSample("Example")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

### Compatibility notes

Since Firefox 65, the [`keyup`](/en-US/docs/Web/API/Document/keyup_event) and
[`keydown`](/en-US/docs/Web/API/Document/keydown_event) events are now fired
during IME composition, to improve cross-browser compatibility for CJKT users
({{bug(354358)}}. To
ignore all `keydown` events that are part of composition, do something like
this (229 is a special value set for a `keyCode` relating to an event that
has been processed by an IME):

```js
eventTarget.addEventListener("keydown", event => {
  if (event.isComposing || event.keyCode === 229) {
    return;
  }
  // do something
});
```

## See also

- {{Event("keydown")}} event
- Related event handlers

  - {{domxref("GlobalEventHandlers.onkeypress")}}
  - {{domxref("GlobalEventHandlers.onkeyup")}}
