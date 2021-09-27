---
title: GlobalEventHandlers.onreset
slug: Web/API/GlobalEventHandlers/onreset
tags:
  - API
  - Event Handler
  - GlobalEventHandlers
  - HTML DOM
  - Property
  - Reference
browser-compat: api.GlobalEventHandlers.onreset
---
{{ ApiRef() }}

The **`onreset`** property of the
{{domxref("GlobalEventHandlers")}} mixin is an [event handler](/en-US/docs/Web/Events/Event_handlers) that
processes {{event("reset")}} events.

The `reset` event fires when the user clicks a reset button in a form
(`{{HtmlElement('input/reset', '&lt;input type="reset"&gt;')}}`).

## Syntax

```js
target.onreset = functionRef;
```

### Value

`functionRef` is a function name or a [function
expression](/en-US/docs/Web/JavaScript/Reference/Operators/function). The function receives an {{domxref("Event")}} object as its sole
argument.

## Example

This example logs the current {{domxref("Event.timeStamp")}} whenever you reset the
form.

### HTML

```html
<form id="form">
  <label>Test field: <input type="text"></label>
  <br><br>
  <button type="reset">Reset form</button>
</form>
<p id="log"></p>
```

### JavaScript

```js
function logReset(event) {
  log.textContent = `Form reset! Time stamp: ${event.timeStamp}`;
}

const form = document.getElementById('form');
const log = document.getElementById('log');
form.onreset = logReset;
```

### Result

{{EmbedLiveSample("Example")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{event("reset")}} event
- HTML {{htmlElement("form")}} element
