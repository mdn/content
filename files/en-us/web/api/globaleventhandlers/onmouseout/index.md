---
title: GlobalEventHandlers.onmouseout
slug: Web/API/GlobalEventHandlers/onmouseout
tags:
  - API
  - Event Handler
  - GlobalEventHandlers
  - HTML DOM
  - Property
  - Reference
browser-compat: api.GlobalEventHandlers.onmouseout
---
{{ ApiRef("HTML DOM") }}

The **`onmouseout`** property of the
{{domxref("GlobalEventHandlers")}} mixin is an [event handler](/en-US/docs/Web/Events/Event_handlers) that
processes {{event("mouseout")}} events.

The `mouseout` event fires when the mouse leaves an element. For example,
when the mouse moves off of an image in the web page, the `mouseout` event is
raised for that image element.

## Syntax

```js
element.onmouseout = function;
```

## Example

This example adds an `onmouseout` and an `onmouseover` event to a
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
