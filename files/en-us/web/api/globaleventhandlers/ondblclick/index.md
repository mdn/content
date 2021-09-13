---
title: GlobalEventHandlers.ondblclick
slug: Web/API/GlobalEventHandlers/ondblclick
tags:
  - API
  - Event Handler
  - GlobalEventHandlers
  - HTML DOM
  - Property
  - Reference
browser-compat: api.GlobalEventHandlers.ondblclick
---
{{ApiRef("HTML DOM")}}

The **`ondblclick`** property of the
{{domxref("GlobalEventHandlers")}} mixin is an [event handler](/en-US/docs/Web/Events/Event_handlers) that
processes {{event("dblclick")}} events on the given element.

The `dblclick` event is raised when the user double clicks an element. It
fires after two {{event("click")}} events.

## Syntax

```js
target.ondblclick = functionRef;
```

### Value

`functionRef` is a function name or a [function
expression](/en-US/docs/Web/JavaScript/Reference/Operators/function). The function receives a {{domxref("MouseEvent")}} object as its sole
argument. Within the function,
[`this`](/en-US/docs/Web/JavaScript/Reference/Operators/this) will
be the element upon which the event was triggered.

Only one `ondblclick` handler can be assigned to an object at a time. You
may prefer to use the {{domxref("EventTarget.addEventListener()")}} method instead,
since it's more flexible.

## Example

This example logs the position of double clicks.

### HTML

```html
<p>Double click anywhere in this example.</p>
<p id="log"></p>
```

### JavaScript

```js
let log = document.getElementById('log');

document.ondblclick = logDoubleClick;

function logDoubleClick(e) {
  log.textContent = `Position: (${e.clientX}, ${e.clientY})`;
}
```

### Result

{{EmbedLiveSample("Example")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{event("dblclick")}} event
- Related event handlers

  - {{domxref("GlobalEventHandlers.onauxclick")}}
  - {{domxref("GlobalEventHandlers.onclick")}}
