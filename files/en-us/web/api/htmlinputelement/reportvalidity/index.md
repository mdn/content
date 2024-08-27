---
title: "HTMLInputElement: reportValidity() method"
short-title: reportValidity()
slug: Web/API/HTMLInputElement/reportValidity
page-type: web-api-instance-method
browser-compat: api.HTMLInputElement.reportValidity
---

{{APIRef("HTML DOM")}}

The **`reportValidity()`** method of the {{domxref('HTMLInputElement')}} interface returns a boolean value which indicates validity of the value of the element. If `false` – if the value is invalid because it does not meet constraint validation or if the {{domxref("ValidityState")}}'s `valid` property is {{glossary("truthy")}} – this method fires the {{domxref("HTMLInputElement.invalid_event", "invalid")}} event on the element, and reports the problem to the user.

The method will return `false` if and display a message (even if the value is valid) if the input has a non-empty {{domxref("HTMLInputElement.validationMessage", "validationMessage")}}. This occurs when the {{domxref("HTMLInputElement.setCustomValidity()")}} method set a custom error message when the value and the error message, and remains so until the `validationMessage` is {{glossary("falsy")}}. The {{domxref("HTMLInputElement.validity", "validity")}} object's `valid` property must be true and the {{domxref("HTMLInputElement.validationMessage", "validationMessage")}} must be null or the empty string for `reportValidity()` to return `true`, in which case it will neither fire an `invalid` event nor display an error message to the user.

To check validation without showing an error message, use the [`checkValidity()`](/en-US/docs/Web/API/HTMLInputElement/checkValidity) method instead.

## Syntax

```js-nolint
reportValidity()
```

### Parameters

None.

### Return value

Returns `true` if the element's value has no validity problems; otherwise, returns `false`.

## Examples

### Basic usage

#### HTML

We include a form containing a required number field and two buttons: one to check the form and the other to submit it.

```html
<form action="#" method="post">
  <p>
    <label for="age">Your (21 to 65) </label>
    <input type="number" name="age" required id="age" min="21" max="65" />
  </p>
  <p>
    <button type="submit">Submit</button>
    <button type="button" id="report">reportValidity()</button>
  </p>
  <p id="log"></p>
</form>
```

#### JavaScript

When the "reportValidity()" button is activated, we use the `reportValidity()` method to check if the input's value meets its constraints. We log the return value. If `false`, we also display the validation message and capture the `invalid` event.

```js
const output = document.querySelector("#log");
const reportButton = document.querySelector("#report");
const ageInput = document.querySelector("#age");

ageInput.addEventListener("invalid", () => {
  console.log("Invalid event fired.");
});

reportButton.addEventListener("click", () => {
  const reportVal = ageInput.reportValidity();
  output.innerHTML = `"reportValidity()" returned: ${reportVal}`;
  if (!reportVal) {
    output.innerHTML += `<br />Validation message: "${ageInput.validationMessage}"`;
  }
});
```

#### Results

{{EmbedLiveSample("Basic usage", "100%", 120)}}

When `false`, if the value is missing, is below 21, is above 65, or is othewise invalid, an error message appears, an invalid event is fired, and we log that invalid event to the console.

### Custom error message

This example demonstrates how a custom error message can cause a `false` return value when the value is otherwise valid.

#### HTML

We add a "Fix me" button to the HTML from the previous example.

```html hidden
<form action="#" method="post">
  <p>
    <label for="age">Your (21 to 65) </label>
    <input type="number" name="age" required id="age" min="21" max="65" />
  </p>
  <p>
    <button type="submit">Submit</button>
    <button type="button" id="report">reportValidity()</button>
  </p>
</form>
```

```html
<button type="button" id="fix">Fix issues</button>
```

```html hidden
   </p>
<p id="log"></p>
</form>
```

#### JavaScript

We expand on the JavaScript from the basic example above, adding a function that used the {{domxref("HTMLInputElement.setCustomValidity()")}} method to provide custom error messages. The `validateAge()` function only sets the error message to an empty string if the input is valid AND the `enableValidation` variable is `true`, with `enableValidation` being `false` until the "fix issues" button has been activated.

```javascript
const output = document.querySelector("#log");
const reportButton = document.querySelector("#report");
const ageInput = document.querySelector("#age");
const fixButton = document.querySelector("#fix");
let enableValidation = false;

fixButton.addEventListener("click", (e) => {
  enableValidation = true;
  fixButton.innerHTML = "Error fixed";
  fixButton.disabled = true;
});

reportButton.addEventListener("click", () => {
  validateAge();
  const reportVal = ageInput.reportValidity();
  output.innerHTML = `"reportValidity()" returned: ${reportVal}`;
  if (!reportVal) {
    output.innerHTML += `<br />Validation message: "${ageInput.validationMessage}"`;
  }
});

const validateAge = () => {
  const validityState_object = ageInput.validity;
  if (validityState_object.valueMissing) {
    ageInput.setCustomValidity("Please set an age (required)");
  } else if (ageInput.rangeUnderflow) {
    ageInput.setCustomValidity("Your value is too low");
  } else if (ageInput.rangeOverflow) {
    ageInput.setCustomValidity("Your value is too high");
  } else if (enableValidation) {
    // sets to empty string if valid AND enableValidation has been set to true
    ageInput.setCustomValidity("");
  }
};
```

#### Results

{{EmbedLiveSample("Custom error message", "100%", 120)}}

If you activate the "reportValidity()" button before entering an age, the `reportValidity()` method returns `false` because it does not meet `required` constraint validation. This method fires an `invalid` event on the input and reports the problem to the user, displaying the custom error message "Please set an age (required)". As long as a custom error message is set, activating the "reportValidity()" button will continue to display an error even if you select a valid age. To enable validation, we have to set the custom error message to the empty string, which is done by clicking the "Fix issues" button.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [checkValidity](/en-US/docs/Web/API/HTMLInputElement/checkValidity)
- [Learn: Client-side form validation](/en-US/docs/Learn/Forms/Form_validation)
- [Guide: Constraint validation](/en-US/docs/Web/HTML/Constraint_validation)
- CSS {{cssxref(":valid")}} and {{cssxref(":invalid")}} pseudo-classes
