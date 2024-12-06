---
title: "ValidityState: badInput property"
short-title: badInput
slug: Web/API/ValidityState/badInput
page-type: web-api-instance-property
browser-compat: api.ValidityState.badInput
---

{{APIRef("HTML DOM")}}

The read-only **`badInput`** property of the [ValidityState](/en-US/docs/Web/API/ValidityState) interface indicates if the user has provided input that the browser is unable to convert. For example, if you have a number input element whose content is a string.

## Value

A boolean that is `true` if the `ValidityState` object does not conform to the expected type.

## Examples

### Detecting bad input

The following example checks the validity of a [numeric input element](/en-US/docs/Web/HTML/Element/input/number).
If the user enters text instead of a number, the element fails constraint validation, and the styles matching [`input:invalid`](/en-US/docs/Web/CSS/:invalid) are applied.
The [`<pre>`](/en-US/docs/Web/HTML/Element/pre) element above the input shows the validation message when the element `badInput` evaluates to `true`:

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
<input type="number" id="age" />
```

```js
const userInput = document.getElementById("age");
const logElement = document.getElementById("log");

function log(text) {
  logElement.innerText = text;
}

userInput.addEventListener("input", () => {
  userInput.reportValidity();
  if (userInput.validity.badInput) {
    log("Bad input detected: " + userInput.validationMessage);
  }
});
```

{{EmbedLiveSample("displaying_validity_state", "100%", "140")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- ValidityState [valid](/en-US/docs/Web/API/ValidityState/valid), [customError](/en-US/docs/Web/API/ValidityState/customError) properties.
- [Guide: Constraint validation](/en-US/docs/Web/HTML/Constraint_validation)
- [Tutorial: Form data validation](/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation)
