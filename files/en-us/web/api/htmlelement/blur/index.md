---
title: HTMLElement.blur()
slug: Web/API/HTMLElement/blur
page-type: web-api-instance-method
tags:
  - API
  - HTML DOM
  - HTMLElement
  - Method
  - Reference
browser-compat: api.HTMLElement.blur
---

{{APIRef("HTML DOM")}}

The **`HTMLElement.blur()`** method removes keyboard focus from the current element.

## Syntax

```js
blur();
```

### Parameters

None.

### Return value

None ({{jsxref("undefined")}}).

## Examples

### Remove focus from a text input

#### HTML

```html
<input type="text" id="sampleText" value="Sample Text" /> <br /><br />
<button type="button" onclick="focusInput()">Click me to gain focus</button>
```

#### JavaScript

```js
function focusInput() {
  const textField = document.getElementById("sampleText");

  textField.focus();

  // The input will lose focus after 3 seconds
  setTimeout(() => {
    textField.blur();
  }, 3000);
}
```

#### Result

{{ EmbedLiveSample('Remove_focus_from_a_text_input') }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLElement.focus")}}
