---
title: GlobalEventHandlers.onmouseover
slug: Web/API/GlobalEventHandlers/onmouseover
tags:
  - API
  - Event Handler
  - GlobalEventHandlers
  - HTML DOM
  - Property
  - Reference
browser-compat: api.GlobalEventHandlers.onmouseover
---
{{ApiRef("HTML DOM")}}

The **`onmouseover`** property of the
{{domxref("GlobalEventHandlers")}} mixin is an [event handler](/en-US/docs/Web/Events/Event_handlers) that
processes {{event("mouseover")}} events.

The `mouseover` event fires when the user moves the mouse over a particular
element.

## Syntax

```js
element.onmouseover = function;
```

## Example

This example adds an `onmouseover` and an `onmouseout` event to a
paragraph. Try moving your mouse over and out of the element.

### HTML

```html
<p>Test your mouse on me!</p>
```

### JavaScript

```js
const p = document.querySelector('p');
p.onmouseover = logMouseOver;
p.onmouseout = logMouseOut;

function logMouseOver() {
  p.textContent = 'MOUSE OVER detected';
}

function logMouseOut() {
  p.textContent = 'MOUSE OUT detected';
}
```

### Result

{{EmbedLiveSample("Example")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
