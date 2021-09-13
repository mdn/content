---
title: HTMLElement.blur()
slug: Web/API/HTMLElement/blur
tags:
  - API
  - HTML DOM
  - HTMLElement
  - Method
  - Reference
browser-compat: api.HTMLElement.blur
---
{{APIRef("HTML DOM")}}

The **`HTMLElement.blur()`** method
removes keyboard focus from the current element.

## Syntax

```js
element.blur();
```

## Examples

### Remove focus from a text input

#### HTML

```html
<input type="text" id="myText" value="Sample Text">
<br><br>
<button type="button" onclick="focusInput()">Click me to gain focus</button>
<button type="button" onclick="blurInput()">Click me to lose focus</button>
```

#### JavaScript

```js
function focusInput() {
  document.getElementById('myText').focus();
}
function blurInput() {
  document.getElementById('myText').blur();
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
