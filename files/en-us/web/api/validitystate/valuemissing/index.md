---
title: "ValidityState: valueMissing property"
short-title: valueMissing
slug: Web/API/ValidityState/valueMissing
page-type: web-api-instance-property
browser-compat: api.ValidityState.valueMissing
---

{{APIRef("HTML DOM")}}

The read-only **`valueMissing`** property of the [`ValidityState`](/en-US/docs/Web/API/ValidityState) interface indicates if a [`required`](/en-US/docs/Web/HTML/Attributes/required) control, such as an {{HTMLElement("input")}}, {{HTMLElement("select")}}, or {{HTMLElement("textarea")}}, has an empty value.

If the `required` attribute is set, and no {{HTMLElement("option")}} is selected or a `<textarea>` or user-editable `<input>` is empty, the `valueMissing` property will be `true`. The property is only `true` if the field is required and has no value; if the field is not required, or if the field is required and has a value, the value is `false`.

## Value

A boolean that is `true` if the `ValidityState` is not set and the `required` attribute is.

### Missing required input value

The following example checks the validity of a [numeric input element](/en-US/docs/Web/HTML/Element/input/number).
Constraints have been added using the [`min` attribute](/en-US/docs/Web/HTML/Element/input/number#min) which sets a minimum value of `18` for the input, and the [`required` attribute](/en-US/docs/Web/HTML/Attributes/required) which disallows empty values.
If the user enters any value that's not a number greater than 17, the element fails constraint validation, and the styles matching {{cssxref(":invalid")}} are applied.

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
<input type="number" id="age" min="18" required />
```

```js
const userInput = document.getElementById("age");
const logElement = document.getElementById("log");

function log(text) {
  logElement.innerText = text;
}

userInput.addEventListener("input", () => {
  userInput.reportValidity();
  if (userInput.validity.valid) {
    log("Input OK…");
  } else if (userInput.validity.valueMissing) {
    log("Required field cannot be empty.");
  } else {
    log("Bad input detected: " + userInput.validationMessage);
  }
});
```

{{EmbedLiveSample("missing_required_input_value", "100%", "140")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- ValidityState [badInput](/en-US/docs/Web/API/ValidityState/badInput), [valid](/en-US/docs/Web/API/ValidityState/valid) properties.
- [Constraint validation](/en-US/docs/Web/HTML/Constraint_validation)
- [Forms: Data form validation](/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Regular Expressions](/en-US/docs/Web/JavaScript/Guide/Regular_expressions)
