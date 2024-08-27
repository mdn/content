---
title: "HTMLInputElement: checkValidity() method"
short-title: checkValidity()
slug: Web/API/HTMLInputElement/checkValidity
page-type: web-api-instance-method
browser-compat: api.HTMLInputElement.checkValidity
---

{{APIRef("HTML DOM")}}

The **`HTMLInputElement.checkValidity()`** method returns a boolean value which indicates validity of the value of the element.

Returns `trye` if the input's {{domxref("HTMLInputElement.validity", "validity")}} object's `valid` property is true. The the {{domxref("HTMLInputElement.validationMessage", "validationMessage")}} must be null or the empty string for the `checkValidity()` method to return `true`. This method also fires the {{domxref("HTMLInputElement/invalid_event", "invalid")}} event on the element if the value is invalid or otherwise returns false.

> [!NOTE]
> The input is considered invalid if the input is suffering from a custom error, even if the value is otherwise valid according to [constraint validation](/en-US/docs/Web/HTML/Constraint_validation). This occurs when the {{domxref("HTMLInputElement.setCustomValidity()")}} method set a custom error message when the value was invalid and the error message has not been reset to the empty string. See the [`reportValidity()` custom error message](/en-US/docs/Web/API/HTMLInputElement/reportValidity) example for more information.

## Syntax

```js-nolint
checkValidity()
```

### Parameters

None.

### Return value

Returns `true` if the value of the element has no validity problems; otherwise returns `false`.

## Examples

### HTML

We include a form containing a required number field and two buttons: one to check the form and the other to submit it.

```html
<form action="#" method="post">
  <p>
    <label for="age">Your (21 to 65) </label>
    <input type="number" name="age" required id="age" min="21" max="65" />
  </p>
  <p>
    <button type="submit">Submit</button>
    <button type="button" id="check">checkValidity()</button>
  </p>
  <p id="log"></p>
</form>
```

### JavaScript

```js
const output = document.querySelector("#log");
const checkButton = document.querySelector("#check");
const ageInput = document.querySelector("#age");

ageInput.addEventListener("invalid", () => {
  console.log("Invalid event fired.");
});

checkButton.addEventListener("click", () => {
  const checkVal = ageInput.checkValidity();
  output.innerHTML = `checkValidity returned: ${checkVal}`;
});
```

### Results

{{EmbedLiveSample("Examples", "100%", 220)}}

When `false`, if the value is missing, below 21, above 65, or othewise invalid, the invalid event will be logged to the console. To report the error to the user, use {{domxref("HTMLInputElement.reportValidity()")}} instead.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`reportValidity()`](/en-US/docs/Web/API/HTMLInputElement/reportValidity)
- [Learn: Client-side form validation](/en-US/docs/Learn/Forms/Form_validation)
- [Guide: Constraint validation](/en-US/docs/Web/HTML/Constraint_validation)
- CSS {{cssxref(":valid")}} and {{cssxref(":invalid")}} pseudo-classes
