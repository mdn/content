---
title: "ValidityState: valid property"
short-title: valid
slug: Web/API/ValidityState/valid
page-type: web-api-instance-property
browser-compat: api.ValidityState.valid
---

{{APIRef("HTML DOM")}}

The read-only **`valid`** property of the [`ValidityState`](/en-US/docs/Web/API/ValidityState) interface indicates if the value of an {{HTMLElement("input")}} element meets all its validation constraints, and is therefore considered to be valid.

If `true`, the element matches the {{cssxref(":valid")}} CSS pseudo-class; otherwise the {{cssxref(":invalid")}} CSS pseudo-class applies.

## Value

A boolean that is `true` if the `ValidityState` does conform to all the constraints.

## Examples

### Displaying validity state

The following example checks the validity of a [numeric input element](/en-US/docs/Web/HTML/Element/input/number).
A constraint has been added using the [`min` attribute](/en-US/docs/Web/HTML/Element/input/number#min) which sets a minimum value of `18` for the input.
If the user enters any value that's not a number greater than 17, the element fails constraint validation, and the styles matching `input:invalid` are applied.

```css
input:invalid {
  outline: red solid 3px;
}
input:valid {
  outline: palegreen solid 3px;
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
  } else {
    log("Bad input detected…");
  }
});
```

{{EmbedLiveSample("displaying_validity_state", "100%", "140")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- ValidityState [badInput](/en-US/docs/Web/API/ValidityState/badInput), [customError](/en-US/docs/Web/API/ValidityState/customError) properties.
- [Constraint validation](/en-US/docs/Web/HTML/Constraint_validation)
- [Forms: Data form validation](/en-US/docs/Learn/Forms/Form_validation)
