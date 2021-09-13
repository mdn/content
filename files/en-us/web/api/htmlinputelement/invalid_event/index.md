---
title: 'HTMLInputElement: invalid event'
slug: Web/API/HTMLInputElement/invalid_event
tags:
  - API
  - Constraint Validation API
  - Constraint validation
  - Event
  - Forms
  - Reference
  - invalid
browser-compat: api.HTMLInputElement.invalid_event
---
{{APIRef}}

The **`invalid`** event fires when a submittable element has been checked for validity and doesn't satisfy its constraints.

<table class="properties">
  <tbody>
    <tr>
      <th>Bubbles</th>
      <td>No</td>
    </tr>
    <tr>
      <th>Cancelable</th>
      <td>Yes</td>
    </tr>
    <tr>
      <th>Interface</th>
      <td>{{DOMxRef("Event")}}</td>
    </tr>
    <tr>
      <th>Event handler property</th>
      <td>{{domxref("GlobalEventHandlers.oninvalid")}}</td>
    </tr>
  </tbody>
</table>

This event can be useful for displaying a summary of the problems with a form on submission. When a form is submitted, `invalid` events are fired at each form control that is invalid. The validity of submittable elements is checked before submitting their owner {{HtmlElement("form")}}, or after the [`checkValidity()`](/en-US/docs/Learn/Forms#constraint_validation_api) method of the element or its owner `<form>` is called.

It is not checked on {{domxref("Element/blur_event", "blur")}}.

## Examples

If a form is submitted with an invalid value, the submittable elements are checked and, if an error is found, the `invalid` event will fire on the `invalid` element. In this example, when an invalid event fires because of an invalid value in the input, the invalid value is logged.

### HTML

```html
<form action="#">
  <ul>
    <li><label>Enter an integer between 1 and 10: <input type="number" min="1" max="10" required></label></li>
    <li><input type="submit" value="submit"></li>
  </ul>
</form><p id="log"></p>
```

### JavaScript

```js
const input = document.querySelector('input')
const log = document.getElementById('log')

input.addEventListener('invalid', logValue)

function logValue(e) {
  log.textContent += e.target.value
}
```

### Result

{{EmbedLiveSample("Examples")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- HTML {{HtmlElement("form")}} element
- Related event: {{domxref("HTMLFormElement/submit_event", "submit")}}
- CSS {{cssxref(":invalid")}} pseudo class
