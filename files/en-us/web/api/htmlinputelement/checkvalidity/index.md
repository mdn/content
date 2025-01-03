---
title: "HTMLInputElement: checkValidity() method"
short-title: checkValidity()
slug: Web/API/HTMLInputElement/checkValidity
page-type: web-api-instance-method
browser-compat: api.HTMLInputElement.checkValidity
---

{{APIRef("HTML DOM")}}

The **`checkValidity()`** method of the {{domxref("HTMLInputElement")}} interface returns a boolean value which indicates if the element meets any [constraint validation](/en-US/docs/Web/HTML/Constraint_validation) rules applied to it. If false, the method also fires an {{domxref("HTMLElement/invalid_event", "invalid")}} event on the element. Because there's no default browser behavior for `checkValidity()`, canceling this `invalid` event has no effect.

> [!NOTE]
> An HTML {{htmlelement("input")}} element with a non-null {{domxref("HTMLInputElement.validationMessage", "validationMessage")}} is considered invalid, will match the CSS {{cssxref(":invalid")}} pseudo-class, and will cause `checkValidity()` to return false. Use the {{domxref("HTMLInputElement.setCustomValidity()")}} method to set the {{domxref("HTMLInputElement.validationMessage")}} to the empty string to set the {{domxref("HTMLInputElement.validity", "validity")}} state to be valid.

## Syntax

```js-nolint
checkValidity()
```

### Parameters

None.

### Return value

Returns `true` if the element's value has no validity problems; otherwise, returns `false`.

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

When `false`, if the value is missing, below 21, above 65, or otherwise invalid, the invalid event will be logged to the console. To report the error to the user, use {{domxref("HTMLInputElement.reportValidity()")}} instead.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLInputElement.reportValidity()")}}
- {{HTMLElement("input")}}
- {{HTMLElement("form")}}
- [Learn: Client-side form validation](/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Guide: Constraint validation](/en-US/docs/Web/HTML/Constraint_validation)
- CSS {{cssxref(":valid")}} and {{cssxref(":invalid")}} pseudo-classes
