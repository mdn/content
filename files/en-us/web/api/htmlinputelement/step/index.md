---
title: "HTMLInputElement: step property"
short-title: step
slug: Web/API/HTMLInputElement/step
page-type: web-api-instance-property
browser-compat: api.HTMLInputElement.step
---

{{ApiRef("HTML DOM")}}

The **`step`** property of the {{domxref("HTMLInputElement")}} interface indicates the step of the {{HTMLElement("input")}} element, generally defined set by the numeric or date-time input element's [`step`](/en-US/docs/Web/HTML/Element/input#step) attribute. The `step` property can also be used to provide an element with a `step` value. Valid values include the string `any`, a positive integer, or a positive floating point number

The string value represents the element's `step` attribute, which works with `min` and `max` attributes, minumum and maximum values, to limit the increments at which a range, numeric or date-time value can be set. If not set to `any`, the control accepts only values at multiples of the step value greater than the minimum. If not set, the `step` property is an empty string.

## Value

A string representing the element's `step` value or an empty string if no step is explicitly set.

## Example

This example demonstrates setting and retrieving the `step` of an input element.

### HTML

```html
<p>
  <label for="atm"
    >How much would you like to withdraw (in multiples of
    <span id="step">20</span>?</label
  >
  <input id="atm" type="number" step="20" min="20" max="400" />
</p>
<p>
  <label for="newvalue">Enter a new step value</label>
  <input id="newvalue" type="number" step="5" min="0" max="20" />
</p>

<p>
  <input type="button" value="Run JS" id="btn" />
</p>
<p id="log"></p>
```

### JavaScript

```js
const inputElement = document.querySelector("#atm");
const log = document.querySelector("#log");
const runButton = document.querySelector("#btn");
const newName = document.querySelector("#newvalue");
const text = document.querySelector("#step");

runButton.addEventListener("click", () => {
  if (newvalue.value > 0 && newvalue.checkValidity()) {
    inputElement.step = newvalue.value;
    text.innerHTML = newvalue.value;
  }
  log.innerHTML = `Element's step: <strong>${inputElement.step}</strong>`;
});
```

### Results

{{EmbedLiveSample('Example', '', '220')}}

Try incrementing the ATM number. Change the `step` value, then increment again.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTMLElement("input")}} of type {{HTMLElement("input/range", "range")}}, {{HTMLElement("input/number", "number")}}, {{HTMLElement("input/date", "date")}}, {{HTMLElement("input/month", "month")}}, {{HTMLElement("input/week", "week")}}, and {{HTMLElement("input/time", "time")}}
- {{domxref("HTMLInputElement.value")}}
- {{domxref("HTMLInputElement.type")}}
