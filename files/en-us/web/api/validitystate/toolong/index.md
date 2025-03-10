---
title: "ValidityState: tooLong property"
short-title: tooLong
slug: Web/API/ValidityState/tooLong
page-type: web-api-instance-property
browser-compat: api.ValidityState.tooLong
---

{{APIRef("HTML DOM")}}

The read-only **`tooLong`** property of the [`ValidityState`](/en-US/docs/Web/API/ValidityState) interface indicates if the value of an {{HTMLElement("input")}} or {{HTMLElement("textarea")}}, after having been edited by the user, exceeds the maximum code-unit length established by the element's [`maxlength`](/en-US/docs/Web/HTML/Attributes/maxlength) attribute.

## Value

A boolean that is `true` if the `ValidityState` does not conform to the constraints.

## Examples

### Textarea with too long character count

The following example checks the validity of a [textarea element](/en-US/docs/Web/HTML/Element/textarea).
A constraint has been added using the [`maxlength` attribute](/en-US/docs/Web/HTML/Element/input/text#maxlength) so the textarea expects a maximum of 10 characters.
If there are too many characters in the textarea (which is true below), the element fails constraint validation, and the styles matching {{cssxref(":invalid")}} CSS pseudo-class are applied.

When editing the textarea, the browser will not allow the user to add characters that would fail constraint validation of maximum character count, so at first, only deleting characters is allowed.
Newline characters are normalized and count as a single character in the maximum length calculation.

```css
textarea:invalid {
  outline: red solid 3px;
}
```

```css hidden
body {
  margin: 0.5rem;
}
textarea {
  width: 75%;
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
<textarea name="story" id="userText" maxlength="10" rows="5">
It was a dark and


stormy night...
</textarea>
```

```js
const userInput = document.getElementById("userText");
const logElement = document.getElementById("log");

function log(text) {
  logElement.innerText = text;
}

userInput.addEventListener("input", () => {
  userInput.reportValidity();
  if (userInput.validity.tooLong) {
    log("Too many characters in the textarea.");
  } else {
    log("Input is valid…");
  }
});
```

{{EmbedLiveSample("input_with_too_long_string_value", "100%", "200")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Constraint validation](/en-US/docs/Web/HTML/Constraint_validation)
- [Forms: Data form validation](/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation)
