---
title: "ValidityState: customError property"
short-title: customError
slug: Web/API/ValidityState/customError
page-type: web-api-instance-property
browser-compat: api.ValidityState.customError
---

{{APIRef("HTML DOM")}}

The read-only **`customError`** property of the [`ValidityState`](/en-US/docs/Web/API/ValidityState) interface if the element's custom validity message has been set to a non-empty string by calling the element's {{domxref("HTMLObjectElement.setCustomValidity", "setCustomValidity()")}} method.

## Value

A boolean that is `true` if a custom error message has been set to a non-empty string.

## Examples

### Detecting a custom error

In the following example, we set a custom error when both emails don't match. A log is written when this is the case, and a different message is displayed when there is no custom errors. When there is an error, custom or not, the widget are surrounded by a red border.

#### HTML

```html
<input type="email" id="original" /> <input type="email" id="confirmation" />
<pre id="log"></pre>
```

#### CSS

```css
input:invalid {
  border: red solid 3px;
}
```

#### JavaScript

```js
const log = document.getElementById("log");
const confirmElement = document.getElementById("confirmation");

confirmElement.addEventListener("change", () => {
  const originalElement = document.getElementById("original");
  confirmElement.setCustomValidity(
    confirmElement.value != originalElement.value
      ? "Both email addresses must match."
      : ""
  );
});

function displayLog() {
  if (confirmElement.validity.customError) {
    log.textContent = "A custom error message has been detected.";
  } else {
    log.textContent = "No custom error message is set.";
  }
  requestAnimationFrame(displayLog);
}

requestAnimationFrame(displayLog);
```

#### Result

{{EmbedLiveSample("Examples", "100%", "100")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Constraint validation](/en-US/docs/Web/HTML/Constraint_validation)
- [Forms: Data form validation](/en-US/docs/Learn/Forms/Form_validation)
