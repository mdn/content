---
title: "ValidityState: customError property"
short-title: customError
slug: Web/API/ValidityState/customError
page-type: web-api-instance-property
browser-compat: api.ValidityState.customError
---

{{APIRef("HTML DOM")}}

The read-only **`customError`** property of the [`ValidityState`](/en-US/docs/Web/API/ValidityState) interface returns `true` if an element doesn't meet the validation required in the custom validity set by the element's {{domxref("HTMLObjectElement.setCustomValidity", "setCustomValidity()")}} method.

## Value

A boolean that is `true` if a custom error message has been set to a non-empty string.

## Examples

### Detecting a custom error

In this example, `setCustomValidity` sets a custom error message when a form submission contains invalid user input.
Click the "Check input" button calls the `reportValidity` function, displaying a validation message if a user entered values does not match the [form control's constraints](/en-US/docs/Web/HTML/Constraint_validation#constraint_validation_process).
For example, if you enter the text "good" and try to validate the form, the field is marked invalid until the custom error message is cleared (set to an empty string).
When the value in the form control is invalid, even if there is not custom error, the widget will have a red outline.

#### HTML

```html
<pre id="log">Validation failures logged here...</pre>
<input
  type="text"
  id="userInput"
  placeholder="How do you feel?"
  minlength="2" />
<button id="checkButton">Validate input</button>
```

#### CSS

```css
input:invalid {
  border: red solid 3px;
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
  outline: 2px black;
}
```

#### JavaScript

```js
const userInput = document.getElementById("userInput");
const checkButton = document.getElementById("checkButton");
const logElement = document.getElementById("log");

function log(text) {
  logElement.innerText = text;
}

const check = (input) => {
  // For the exact string 'good', set a custom validity message
  if (input.value === "good") {
    input.setCustomValidity(`"${input.value}" is not a feeling.`);
  } else {
    // An empty string resets the custom validity state
    input.setCustomValidity("");
  }
};

userInput.addEventListener("input", () => {
  check(userInput);
});

const validateInput = () => {
  userInput.reportValidity();
  if (userInput.validity.customError) {
    // We can handle custom validity states here
    log("Try to be more specific: " + userInput.validationMessage);
  } else {
    log(userInput.validationMessage);
  }
};

checkButton.addEventListener("click", validateInput);
```

#### Result

{{EmbedLiveSample("detecting_a_custom_error", "100%", "140")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Constraint validation](/en-US/docs/Web/HTML/Constraint_validation)
- [Forms: Data form validation](/en-US/docs/Learn/Forms/Form_validation)
