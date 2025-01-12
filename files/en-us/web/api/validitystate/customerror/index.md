---
title: "ValidityState: customError property"
short-title: customError
slug: Web/API/ValidityState/customError
page-type: web-api-instance-property
browser-compat: api.ValidityState.customError
---

{{APIRef("HTML DOM")}}

The read-only **`customError`** property of the [`ValidityState`](/en-US/docs/Web/API/ValidityState) interface returns `true` if an element doesn't meet the validation required in the custom validity set by the element's {{domxref("HTMLInputElement.setCustomValidity", "setCustomValidity()")}} method.

## Value

A boolean that is `true` if a custom error message has been set to a non-empty string.

## Examples

### Detecting a custom error

In this example, {{domxref("HTMLInputElement.setCustomValidity", "setCustomValidity()")}} sets a custom error message when a form submission contains user input that's considered invalid.
The "Validate input" button calls {{domxref("HTMLInputElement.reportValidity", "reportValidity()")}}, which displays a validation message under the element if a user enters values that do not match the [form's constraints](/en-US/docs/Web/HTML/Constraint_validation#constraint_validation_process).

If you enter the text "good" or "fine" and try to validate the input, the field is marked invalid until the custom error message is cleared (set to an empty string).
For comparison, there is a [`minlength`](/en-US/docs/Web/HTML/Attributes/minlength) attribute on the input element that allows us to demonstrate the [`tooShort` validity state](/en-US/docs/Web/API/ValidityState/tooShort) when the user enters less than two characters.
When the value in the form control is invalid, even if there is no custom error, the input will have a red outline.

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
  outline: 1px solid grey;
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
  // Handle cases where input is too vague
  if (input.value == "good" || input.value == "fine") {
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
    log("Custom validity error: " + userInput.validationMessage);
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

- ValidityState [badInput](/en-US/docs/Web/API/ValidityState/badInput), [valid](/en-US/docs/Web/API/ValidityState/valid) properties.
- [Constraint validation](/en-US/docs/Web/HTML/Constraint_validation)
- [Forms: Data form validation](/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation)
