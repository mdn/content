---
title: GlobalEventHandlers.onkeyup
slug: Web/API/GlobalEventHandlers/onkeyup
tags:
  - API
  - Event Handler
  - GlobalEventHandlers
  - HTML DOM
  - Property
  - Reference
browser-compat: api.GlobalEventHandlers.onkeyup
---
{{ApiRef("HTML DOM")}}

The **`onkeyup`** property of the
{{domxref("GlobalEventHandlers")}} mixin is an [event handler](/en-US/docs/Web/Events/Event_handlers) that
processes {{event("keyup")}} events.

The `keyup` event fires when the user releases a key that was previously
pressed.

## Syntax

```js
target.onkeyup = functionRef;
```

### Value

`functionRef` is a function name or a [function
expression](/en-US/docs/Web/JavaScript/Reference/Operators/function). The function receives a {{domxref("KeyboardEvent")}} object as its
sole argument.

## Example

This example logs the {{domxref("KeyboardEvent.code")}} value whenever you release a
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

input.onkeyup = logKey;

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
ignore all `keyup` events that are part of composition, do something like
this (229 is a special value set for a `keyCode` relating to an even that has
been processed by an IME):

```js
eventTarget.addEventListener("keyup", event => {
  if (event.isComposing || event.keyCode === 229) {
    return;
  }
  // do something
});
```

## See also

- {{Event("keyup")}} event
- Related event handlers

  - {{domxref("GlobalEventHandlers.onkeydown")}}
  - {{domxref("GlobalEventHandlers.onkeypress")}}
