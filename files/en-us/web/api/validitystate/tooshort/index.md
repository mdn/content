---
title: "ValidityState: tooShort property"
short-title: tooShort
slug: Web/API/ValidityState/tooShort
page-type: web-api-instance-property
browser-compat: api.ValidityState.tooShort
---

{{APIRef("HTML DOM")}}

The read-only **`tooShort`** property of the [`ValidityState`](/en-US/docs/Web/API/ValidityState) interface indicates if the value of an {{HTMLElement("input")}}, {{HTMLElement("button")}}, {{HTMLElement("select")}}, {{HTMLElement("output")}}, {{HTMLElement("fieldset")}} or {{HTMLElement("textarea")}}, after having been edited by the user, is less than the minimum code-unit length established by the element's `minlength` attribute.

## Value

A boolean that is `true` if the `ValidityState` does not conform to the constraints.

## Examples

### Input with too short string value

The following example checks the validity of a [text input element](/en-US/docs/Web/HTML/Element/input/text).
A constraint has been added using the [`minlength` attribute](/en-US/docs/Web/HTML/Element/input/text#minlength) so the input expects a string with a minimum of 4 characters.
If the user enters a string that's too short, the element fails constraint validation, and the styles matching {{cssxref(":invalid")}} CSS pseudo-class are applied.

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
<input type="text" id="userText" minlength="4" />
```

```js
const userInput = document.getElementById("userText");
const logElement = document.getElementById("log");

function log(text) {
  logElement.innerText = text;
}

userInput.addEventListener("input", () => {
  userInput.reportValidity();
  if (userInput.validity.tooShort) {
    log("Not enough characters entered.");
  } else {
    log("Input is valid…");
  }
});
```

{{EmbedLiveSample("input_with_too_short_string_value", "100%", "140")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Guide: Constraint validation](/en-US/docs/Web/HTML/Constraint_validation)
- [Tutorial: Form data validation](/en-US/docs/Learn/Forms/Form_validation)
