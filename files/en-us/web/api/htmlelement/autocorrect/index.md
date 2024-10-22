---
title: "HTMLElement: autocorrect property"
short-title: autocorrect
slug: Web/API/HTMLElement/autocorrect
page-type: web-api-instance-property
browser-compat: api.HTMLElement.autocorrect
---

{{APIRef("HTML DOM")}}

The **`autocorrect`** property of the {{domxref("HTMLElement")}} interface controls whether or not user text input is automatically corrected for spelling and/or punctuation errors.

While it is available on all HTML elements, it is only relevant to editable text elements:

- {{htmlelement("input")}} elements and {{domxref("HTMLInputElement")}} objects, except for [`password`](/en-US/docs/Web/HTML/Element/input/password), [`email`](/en-US/docs/Web/HTML/Element/input/email), and [`url`](/en-US/docs/Web/HTML/Element/input/url), which do not support autocorrection.
- {{htmlelement("textarea")}} elements and {{domxref("HTMLTextAreaElement")}} objects.
- Any element that has the [`contenteditable`](/en-US/docs/Web/HTML/Global_attributes/contenteditable) attribute set.

Editable text elements (other than the exceptions listed above) have autocorrection enabled by default, except for within a {{htmlelement("form")}} element, where the default value may be inherited from the form.
Explicitly setting the attribute overrides the default.

It reflects the value of the [`autocorrect`](/en-US/docs/Web/HTML/Global_attributes/autocorrect) HTML global attribute.

## Value

`true` if autocorrection is enabled, and `false` otherwise.

Note that values are reflected from the [`autocorrect`](/en-US/docs/Web/HTML/Global_attributes/autocorrect) global attribute, which takes values `on` and `off`.
The getter may return an inherited state as the attribute may be inherited from a parent {{htmlelement("form")}} element for elements of type {{htmlelement("button")}}, {{htmlelement("fieldset")}}, {{htmlelement("input")}}, {{htmlelement("output")}}, {{htmlelement("select")}}, or {{htmlelement("textarea")}} (the attribute is not inherited for elements that are nested within an element made editable by adding the [`contenteditable`](/en-US/docs/Web/HTML/Global_attributes/contenteditable) attribute).
The setter always sets the value on the selected element.

## Examples

### Blahs

The following example shows how to control capitalization behavior for user input via script:

```html
<div>Current capitalization behavior is: <span id="ac-label"></span></div>
<div id="ac-element" contenteditable="true" autocapitalize="default">
  input here
</div>
<select id="ac-controller" type="checkbox" checked>
  <option value="default">default</option>
  <option value="none">none</option>
  <option value="sentences">sentences</option>
  <option value="words">words</option>
  <option value="characters">characters</option></select
>Select the capitalization behavior
```

```js
const label = document.getElementById("autocorrect-label");
const element = document.getElementById("ac-element");
const controller = document.getElementById("ac-controller");

controller.addEventListener("input", (e) => {
  const behavior = e.target.value;
  label.textContent = behavior;
  element.autocapitalize = behavior;
});
```

{{EmbedLiveSample('Blah', 600, 200)}}

### Autocorrection inheritance

This example shows how you can set and get the autocorrection state

```html
<button id="toggleAutocorrect">Enable Autocorrect</button>
<input type="text" id="textinput" autocorrect="off" />
```

```html hidden
<pre id="log"></pre>
```

```css hidden
#log {
  height: 100px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

```js
const toggleButton = document.querySelector("button");
const inputTextElement = document.querySelector("#textinput");

if (inputTextElement.autocorrect) {
  toggleButton.addEventListener("click", (e) => {
    toggleButton.textContent = inputTextElement.autocorrect
      ? "Disable"
      : "Enable";
    inputTextElement.autocorrect = !inputTextElement.autocorrect;
    log(`autocorrect: ${inputTextElement.autocorrect}`);
  });
} else {
  toggleButton.hidden = true;
  inputTextElement.hidden = true;
  log("autocomplete not supported");
}
```

{{EmbedLiveSample("Autocorrection inheritance", "100%", "200")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`autocapitalize`](/en-US/docs/Web/HTML/Global_attributes/autocapitalize) HTML global attribute
