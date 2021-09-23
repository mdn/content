---
title: GlobalEventHandlers.oninvalid
slug: Web/API/GlobalEventHandlers/oninvalid
tags:
  - API
  - Event Handler
  - GlobalEventHandlers
  - Property
  - Reference
browser-compat: api.GlobalEventHandlers.oninvalid
---
{{ ApiRef("HTML DOM") }}

The **`oninvalid`** property of the
{{domxref("GlobalEventHandlers")}} mixin is an [event handler](/en-US/docs/Web/Events/Event_handlers) that
processes {{event("invalid")}} events.

The `invalid` event fires when a submittable element has been checked and
doesn't satisfy its constraints. The validity of submittable elements is checked before
submitting their owner form, or after the
[`checkValidity()`](/en-US/docs/Learn/Forms/Form_validation)
method of the element or its owner form is called.

## Syntax

```js
target.oninvalid = functionRef;
var functionRef = target.oninvalid;
```

### Value

`functionRef` is a function name or a [function
expression](/en-US/docs/Web/JavaScript/Reference/Operators/function). The function receives a {{domxref("Event")}} object as its sole
argument.

## Example

This example demonstrates `oninvalid` and
{{domxref("GlobalEventHandlers.onsubmit", "onsubmit")}} event handlers on a form.

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

- {{event("invalid")}} event
- [DOM on-event handlers](/en-US/docs/Web/Guide/Events/Event_handlers)
