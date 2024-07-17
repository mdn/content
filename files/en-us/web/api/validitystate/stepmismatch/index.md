---
title: "ValidityState: stepMismatch property"
short-title: stepMismatch
slug: Web/API/ValidityState/stepMismatch
page-type: web-api-instance-property
browser-compat: api.ValidityState.stepMismatch
---

{{APIRef("HTML DOM")}}

The read-only **`stepMismatch`** property of the [`ValidityState`](/en-US/docs/Web/API/ValidityState) interface indicates if the value of an {{HTMLElement("input")}}, after having been edited by the user, does not conform to the constraints set by the element's `step` attribute.

If the field is numeric in nature, including the {{HTMLElement("input/date", "date")}}, {{HTMLElement("input/month", "month")}}, {{HTMLElement("input/week", "week")}}, {{HTMLElement("input/time", "time")}}, {{HTMLElement("input/datetime-local", "datetime-local")}}, {{HTMLElement("input/number", "number")}} and {{HTMLElement("input/range", "range")}} types and the step value is not `any`, if the value don't doesn't conform to the constraints set by the [`step`](/en-US/docs/Web/HTML/Attributes/step) and [`min`](/en-US/docs/Web/HTML/Attributes/min) values, then `stepMismatch` will be true. If the remainder of the form control's value less the [`min`](/en-US/docs/Web/HTML/Attributes/min) value, divided by the [`step`](/en-US/docs/Web/HTML/Attributes/step) value (which defaults to 1 if omitted) is not zero, there is a mismatch.

## Value

A boolean that is `true` if the `ValidityState` does not conform to the constraints.

## Examples

### Input with step mismatch

The following example checks the validity of a [numeric input element](/en-US/docs/Web/HTML/Element/input/number).
A constraint has been added using the [`step` attribute](/en-US/docs/Web/HTML/Element/input/number#step) which means the input expects increments of 5 as values.
If the user enters a number that's not divisible by 5, the element fails constraint validation, and the styles matching {{cssxref(":invalid")}} CSS pseudo-class are applied.

```css
input:invalid {
  outline: red solid 3px;
}
```

```css hidden
body {
  margin: 0.5rem;
}
pre {
  padding: 1rem;
  height: 2rem;
  background-color: lightgrey;
  outline: 1px solid grey;
}
```

```html
<pre id="log">Validation logged here...</pre>
<input type="number" id="degrees" step="5" />
```

```js
const userInput = document.getElementById("degrees");
const logElement = document.getElementById("log");

function log(text) {
  logElement.innerText = text;
}

userInput.addEventListener("input", () => {
  userInput.reportValidity();
  if (userInput.validity.stepMismatch) {
    log("Input must be divisible by 5");
  } else {
    log("Input is valid…");
  }
});
```

{{EmbedLiveSample("input_with_step_mismatch", "100%", "140")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Constraint validation](/en-US/docs/Web/HTML/Constraint_validation)
- [Forms: Data form validation](/en-US/docs/Learn/Forms/Form_validation)
- [`step` attribute](/en-US/docs/Web/HTML/Attributes/step)
