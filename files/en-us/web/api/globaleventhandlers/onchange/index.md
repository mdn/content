---
title: GlobalEventHandlers.onchange
slug: Web/API/GlobalEventHandlers/onchange
tags:
  - API
  - Event Handler
  - GlobalEventHandlers
  - HTML DOM
  - Property
  - Reference
browser-compat: api.GlobalEventHandlers.onchange
---
{{ApiRef("HTML DOM")}}

The **`onchange`** property of the
{{domxref("GlobalEventHandlers")}} mixin is an [event handler](/en-US/docs/Web/Events/Event_handlers) for
processing {{event("change")}} events.

`change` events fire when the user commits a value change to a form control.
This may be done, for example, by clicking outside of the control or by using the <kbd>Tab</kbd> key to switch to a different control.

> **Note:** Unlike {{domxref("GlobalEventHandlers.oninput", "oninput")}},
> the `onchange` event handler is not necessarily called for each alteration
> to an element's `value`.

## Syntax

```js
target.onchange = functionRef;
```

`functionRef` is a function name or a [function
expression](/en-US/docs/Web/JavaScript/Reference/Operators/function). The function receives an {{domxref("Event")}} object as its sole
argument.

## Example

This example logs the number of characters in an {{HtmlElement("input")}} element,
every time you modify its contents and then change focus away from it.

### HTML

```html
<input type="text" placeholder="Type something here, then click outside of the field." size="50">
<p id="log"></p>
```

### JavaScript

```js
let input = document.querySelector('input');
let log = document.getElementById('log');

input.onchange = handleChange;

function handleChange(e) {
  log.textContent = `The field's value is
      ${e.target.value.length} character(s) long.`;
}
```

### Result

{{EmbedLiveSample("Example")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{event("change")}} event
