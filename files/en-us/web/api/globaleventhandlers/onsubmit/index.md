---
title: GlobalEventHandlers.onsubmit
slug: Web/API/GlobalEventHandlers/onsubmit
tags:
  - API
  - Event Handler
  - GlobalEventHandlers
  - HTML DOM
  - Property
  - Reference
browser-compat: api.GlobalEventHandlers.onsubmit
---
{{ApiRef("HTML DOM")}}

The **`onsubmit`** property of the
{{domxref("GlobalEventHandlers")}} mixin is an [event handler](/en-US/docs/Web/Events/Event_handlers) that
processes {{event("submit")}} events.

The `submit` event fires when the user submits a form.

## Syntax

```js
target.onsubmit = functionRef;
```

### Value

`functionRef` is a function name or a [function
expression](/en-US/docs/Web/JavaScript/Reference/Operators/function). The function receives a {{domxref("SubmitEvent")}} object as its sole
argument.

## Example

This example demonstrates {{domxref("GlobalEventHandlers.oninvalid", "oninvalid")}} and
`onsubmit` event handlers on a form.

### HTML

```html
<form id="form">
  <p id="error" hidden>Please fill out all fields.</p>

  <label for="city">City</label>
  <input type="text" id="city" required>

  <button type="submit">Submit</button>
</form>
<p id="thanks" hidden>Your data has been received. Thanks!</p>
```

### JavaScript

```js
const form = document.getElementById('form');
const error = document.getElementById('error');
const city = document.getElementById('city');
const thanks = document.getElementById('thanks');

city.oninvalid = invalid;
form.onsubmit = submit;

function invalid(event) {
  error.removeAttribute('hidden');
}

function submit(event) {
  form.setAttribute('hidden', '');
  thanks.removeAttribute('hidden');

  // For this example, don't actually submit the form
  event.preventDefault();
}
```

### Result

{{EmbedLiveSample("Example")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{event("submit")}} event
