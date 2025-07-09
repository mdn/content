---
title: "HTMLElement: blur() method"
short-title: blur()
slug: Web/API/HTMLElement/blur
page-type: web-api-instance-method
browser-compat: api.HTMLElement.blur
---

{{APIRef("HTML DOM")}}

The **`HTMLElement.blur()`** method removes keyboard focus from the current element.

## Syntax

```js-nolint
blur()
```

### Parameters

None.

### Return value

None ({{jsxref("undefined")}}).

## Examples

### Remove focus from a text input

#### HTML

```html
<input type="text" id="sampleText" value="Sample Text" /><br /><br />
<button type="button">Click me to gain focus</button>
```

#### JavaScript

```js
const textField = document.getElementById("sampleText");
const button = document.querySelector("button");

function focusInput() {
  textField.focus();

  // The input will lose focus after 3 seconds
  setTimeout(() => {
    textField.blur();
  }, 3000);
}

button.addEventListener("click", focusInput);
```

#### Result

{{ EmbedLiveSample('Remove_focus_from_a_text_input') }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLElement.focus")}}
