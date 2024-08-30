---
title: "HTMLButtonElement: reportValidity() method"
short-title: reportValidity()
slug: Web/API/HTMLButtonElement/reportValidity
page-type: web-api-instance-method
browser-compat: api.HTMLButtonElement.reportValidity
---

{{APIRef("HTML DOM")}}

The **`reportValidity()`** method of the {{domxref('HTMLButtonElement')}} interface performs the same validity checking steps as the {{domxref("HTMLButtonElement.checkValidity", "checkValidity()")}} method. If the element fails to meet any [constraint validation](/en-US/docs/Web/HTML/Constraint_validation) rules, the method returns `false`, fires the `invalid` event on the element, and (if the event isn't canceled) reports the problem to the user.

An HTML {{htmlelement("button")}} element with a non-null {{domxref("HTMLButtonElement.validationMessage", "validationMessage")}} is considered invalid, will match the CSS {{cssxref(":invalid")}} pseudo-class, and will cause `reportValidity()` to display the validation message to the user and return `false`. Use the {{domxref("HTMLButtonElement.setCustomValidity()")}} method to set the {{domxref("HTMLButtonElement.validationMessage")}} to the empty string to set the {{domxref("HTMLButtonElement.validity", "validity")}} state to be valid.

## Syntax

```js-nolint
reportValidity()
```

### Parameters

None.

### Return value

A boolean value.

### Examples

This far fetched example, demonstrates how a button can be made invalid.

#### HTML

We create a form that only contains a few buttons:

```html
<form action="#" id="form" method="post">
  <p>
    <input type="submit" value="Submit" />
    <button id="example" type="submit" value="fixed">THIS BUTTON</button>
  </p>
  <p>
    <button type="button" id="report">reportValidity()</button>
  </p>
</form>

<p id="log"></p>
```

#### CSS

We add a bit of CSS, including `:valid` and `:invalid` styles for our button:

```css
input[type="submit"],
button {
  background-color: #33a;
  border: none;
  font-size: 1.3rem;
  padding: 5px 10px;
  color: white;
}
button:invalid {
  background-color: #a33;
}
button:valid {
  background-color: #3a3;
}
```

#### JavaScript

We include a function to toggle the value, content, and validation message of the example button:

```js
const reportButton = document.querySelector("#report");
const exampleButton = document.querySelector("#example");
const output = document.querySelector("#log");

reportButton.addEventListener("click", () => {
  const reportVal = exampleButton.reportValidity();
  output.innerHTML = `reportValidity returned: ${reportVal} <br/> custom error: ${exampleButton.validationMessage}`;
});

exampleButton.addEventListener("invalid", () => {
  console.log("Invalid event fired on exampleButton");
});

exampleButton.addEventListener("click", (e) => {
  e.preventDefault();
  if (exampleButton.value == "error") {
    breakOrFixButton("fixed");
  } else {
    breakOrFixButton("error");
  }
  output.innerHTML = `validation message: ${exampleButton.validationMessage} <br/> custom error: ${exampleButton.validationMessage}`;
});

const breakOrFixButton = () => {
  const state = toggleButton();
  if (state == "error") {
    exampleButton.setCustomValidity("This is a custom error message");
  } else {
    exampleButton.setCustomValidity("");
  }
};

const toggleButton = () => {
  if (exampleButton.value == "error") {
    exampleButton.value = "fixed";
    exampleButton.innerHTML = "No error";
  } else {
    exampleButton.value = "error";
    exampleButton.innerHTML = "Custom error";
  }
  return exampleButton.value;
};
```

#### Results

{{EmbedLiveSample("Custom error message", "100%", 220)}}

The button is by default valid. Activate "THIS BUTTON" to change the value, content, and add a custom error message. Activating the "reportValidity()" button checks the validity of the button, reporting the custom error message to the user and throwing an `invalid` event if the button does not pass contstraint validation due to the message.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTMLElement("button")}}
- {{HTMLElement("form")}}
- {{domxref("HTMLButtonElement.checkValidity()")}}
- [Learn: Client-side form validation](/en-US/docs/Learn/Forms/Form_validation)
- [Guide: Constraint validation](/en-US/docs/Web/HTML/Constraint_validation)
- CSS {{cssxref(":valid")}} and {{cssxref(":invalid")}} pseudo-classes
