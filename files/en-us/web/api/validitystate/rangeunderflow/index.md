---
title: "ValidityState: rangeUnderflow property"
short-title: rangeUnderflow
slug: Web/API/ValidityState/rangeUnderflow
page-type: web-api-instance-property
browser-compat: api.ValidityState.rangeUnderflow
---

{{APIRef("HTML DOM")}}

The read-only **`rangeUnderflow`** property of the [`ValidityState`](/en-US/docs/Web/API/ValidityState) interface indicates if the value of an {{HTMLElement("input")}}, after having been edited by the user, does not conform to the constraints set by the element's [`min`](/en-US/docs/Web/HTML/Attributes/min) attribute.

If the field is numeric in nature, including the {{HTMLElement("input/date", "date")}}, {{HTMLElement("input/month", "month")}}, {{HTMLElement("input/week", "week")}}, {{HTMLElement("input/time", "time")}}, {{HTMLElement("input/datetime-local", "datetime-local")}}, {{HTMLElement("input/number", "number")}} and {{HTMLElement("input/range", "range")}} types and a `min` value is set, if the value doesn't conform to the constraints set by the [`min`](/en-US/docs/Web/HTML/Attributes/step) value, the `rangeUnderflow` property will be true.

## Value

A boolean that is `true` if the `ValidityState` does not conform to the constraints.

## Examples

### Input with numeric underflow

The following example checks the validity of a [numeric input element](/en-US/docs/Web/HTML/Element/input/number).
A constraint has been added using the [`min` attribute](/en-US/docs/Web/HTML/Element/input/number#min) which sets a minimum value of `18` for the input.
If the user enters a number lower than 18, the element fails constraint validation, and the styles matching {{cssxref(":invalid")}} and {{cssxref(":out-of-range")}} CSS pseudo-classes

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
<input type="number" id="age" min="18" />
```

```js
const userInput = document.getElementById("age");
const logElement = document.getElementById("log");

function log(text) {
  logElement.innerText = text;
}

userInput.addEventListener("input", () => {
  userInput.reportValidity();
  if (userInput.validity.rangeUnderflow) {
    log("Number is too low!");
  } else {
    log("Valid…");
  }
});
```

{{EmbedLiveSample("input_with_numeric_underflow", "100%", "140")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("ValidityState.rangeOverflow")}}
- [Constraint validation](/en-US/docs/Web/HTML/Constraint_validation)
- [Forms: Data form validation](/en-US/docs/Learn/Forms/Form_validation)
- [`step` attribute](/en-US/docs/Web/HTML/Attributes/step)
- [`max` attribute](/en-US/docs/Web/HTML/Attributes/max)
