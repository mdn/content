---
title: "HTMLElement: autocorrect property"
short-title: autocorrect
slug: Web/API/HTMLElement/autocorrect
page-type: web-api-instance-property
browser-compat: api.HTMLElement.autocorrect
---

{{APIRef("HTML DOM")}}

The **`autocorrect`** property of the {{domxref("HTMLElement")}} interface controls whether or not autocorrection of editable text is enabled for spelling and/or punctuation errors.

The specific autocorrection behavior, including which words are substituted, depends on the user agent and the services provided by the underlying device.
For example, on macOS a user agent might rely on [registered replacement text and punctuation](https://support.apple.com/en-vn/guide/mac-help/mh35735/mac).
Other devices and browsers may use a different approach.

The property reflects the value of the [`autocorrect`](/en-US/docs/Web/HTML/Global_attributes/autocorrect) HTML global attribute.

## Value

`true` if auto-correction is enabled for the element, and `false` otherwise.

## Examples

### Enable and disable autocorrection

This example shows how you can enable and disable autocorrection.

#### HTML

The HTML markup defines a toggle button and an {{htmlelement("input")}} element of [`type="search"`](/en-US/docs/Web/HTML/Element/input/search).
Note that if auto-correction is supported, it will be enabled by default.

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

The code first checks whether the `autocorrect` is supported by checking if it is present on the `HTMLElement` prototype.
If it is present, a click handler is added to allow you to toggle the value.
If it is not present, the UI hides the interactive elements and logs that `autocorrect` is not supported.

```js
const toggleButton = document.querySelector("button");
const searchInput = document.querySelector("#searchinput");

function setButtonText() {
  toggleButton.textContent = searchInput.autocorrect ? "Enabled" : "Disabled";
  log(`autocorrect: ${searchInput.autocorrect}`);
}

if (`autocorrect` in HTMLElement.prototype) {
  setButtonText();

  toggleButton.addEventListener("click", (e) => {
    searchInput.autocorrect = !searchInput.autocorrect;
    setButtonText();
  });
} else {
  toggleButton.hidden = true;
  searchInput.hidden = true;
  log("autocorrect not supported");
}
```

#### Result

<!-- cSpell:ignore Carot -->

Activate the button to toggle the autocorrect value.
Enter invalid text into the text box, such as "Carot".
When the autocorrect is enabled, and if the implementation has the appropriate substitute word "carrot", the text should automatically be corrected.

{{EmbedLiveSample("Enable and disable autocorrection", "100%", "200")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`autocapitalize`](/en-US/docs/Web/HTML/Global_attributes/autocapitalize) HTML global attribute
