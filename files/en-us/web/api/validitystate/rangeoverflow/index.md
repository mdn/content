---
title: "ValidityState: rangeOverflow property"
short-title: rangeOverflow
slug: Web/API/ValidityState/rangeOverflow
page-type: web-api-instance-property
browser-compat: api.ValidityState.rangeOverflow
---

{{APIRef("HTML DOM")}}

The read-only **`rangeOverflow`** property of the [`ValidityState`](/en-US/docs/Web/API/ValidityState) interface indicates if the value of an {{HTMLElement("input")}}, after having been edited by the user, does not conform to the constraints set by the element's [`max`](/en-US/docs/Web/HTML/Attributes/max) attribute.

If the field is numeric in nature, including the {{HTMLElement("input/date", "date")}}, {{HTMLElement("input/month", "month")}}, {{HTMLElement("input/week", "week")}}, {{HTMLElement("input/time", "time")}}, {{HTMLElement("input/datetime-local", "datetime-local")}}, {{HTMLElement("input/number", "number")}} and {{HTMLElement("input/range", "range")}} types and a `max` value is set, if the value doesn't conform to the constraints set by the [`max`](/en-US/docs/Web/HTML/Attributes/step) value, the `rangeOverflow` property will be true.

## Value

A boolean that is `true` if the `ValidityState` does not conform to the constraints.

## Examples

### Input with numeric overflow

The following example checks the validity of a [numeric input element](/en-US/docs/Web/HTML/Element/input/number).
A constraint has been added using the [`max` attribute](/en-US/docs/Web/HTML/Element/input/number#max) which sets a maximum value of `18` for the input.
If the user enters a number higher than 18, the element fails constraint validation, and the styles matching {{cssxref(":invalid")}} and {{cssxref(":out-of-range")}} CSS pseudo-classes

```css
/* or :invalid */
input:out-of-range {
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
<input type="number" id="age" max="18" />
```

```js
const userInput = document.getElementById("age");
const logElement = document.getElementById("log");

function log(text) {
  logElement.innerText = text;
}

userInput.addEventListener("input", () => {
  userInput.reportValidity();
  if (userInput.validity.rangeOverflow) {
    log("Number is too high!");
  } else {
    log("Input is valid…");
  }
});
```

{{EmbedLiveSample("input_with_numeric_overflow", "100%", "140")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("ValidityState.rangeUnderflow")}}
- [Constraint validation](/en-US/docs/Web/HTML/Constraint_validation)
- [Forms: Data form validation](/en-US/docs/Learn/Forms/Form_validation)
- [`step` attribute](/en-US/docs/Web/HTML/Attributes/step)
- [`min` attribute](/en-US/docs/Web/HTML/Attributes/min)
