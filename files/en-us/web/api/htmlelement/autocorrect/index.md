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

Editable text elements (other than the exceptions listed above) have auto-correction enabled by default, except for within a {{htmlelement("form")}} element, where the default value may be inherited from the form.
Elements nested within an element that was made editable using the `contenteditable` do not inherit its auto-correction attribute.
Explicitly setting the attribute on an element overrides the default and any inherited value.

The property reflects the value of the [`autocorrect`](/en-US/docs/Web/HTML/Global_attributes/autocorrect) HTML global attribute.

## Value

`true` if autocorrection is enabled for the element, and `false` otherwise.

## Examples

### Enable and disable autocorrection

This example shows how you can enable and disable the autocorrection state programmatically.

#### HTML

The HTML markup defines a toggle button and an {{htmlelement("input")}} element of [`type="search"`](/en-US/docs/Web/HTML/Element/input/search).
Note that if autocorrection is supported, it will be enabled by default.

```html
<button id="toggleAutocorrect"></button>
<input type="search" id="searchinput" />
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

#### JavaScript

The code first checks whether the `autocorrect` is supported by checking if it is present on the prototype.
If it is present a click handler is added to allow you to toggle the value.
If it is not present the UI hides the interactive elements and logs that `autocorrect` is not supported.

```js
const toggleButton = document.querySelector("button");
const searchInput = document.querySelector("#searchinput");

if (`autocorrect` in HTMLElement.prototype) {
  log(`autocorrect: ${searchInput.autocorrect}`);
  toggleButton.addEventListener("click", (e) => {
    toggleButton.textContent = inputTextElement.autocorrect
      ? "Disable"
      : "Enable";
    inputTextElement.autocorrect = !searchInput.autocorrect;
    log(`autocorrect: ${searchInput.autocorrect}`);
  });
} else {
  toggleButton.hidden = true;
  searchInput.hidden = true;
  log("autocomplete not supported");
}
```

#### Result

Toggle the button to enable autocorrect, and then enter invalid text into the text box, such as "Carot".
This should be corrected automatically.

{{EmbedLiveSample("Enable and disable autocorrection", "100%", "200")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`autocapitalize`](/en-US/docs/Web/HTML/Global_attributes/autocapitalize) HTML global attribute
