---
title: HTMLInputElement.showPicker()
slug: Web/API/HTMLInputElement/showPicker
tags:
  - API
  - HTML DOM
  - HTMLInputElement
  - Method
  - NeedsCompatTable
  - Reference
browser-compat: api.HTMLInputElement.showPicker
---
{{ APIRef("HTML DOM") }}

The **`HTMLInputElement.showPicker()`** method returns a promise that resolves
when a browser picker is shown to the user. It must be called in response to a
user gesture such as a touch gesture or mouse click; otherwise it will reject. For
security reasons, it also rejects when it's called in a cross-origin iframe.

## Syntax

```js
element.showPicker().then(() => {
  // A browser picker is shown.
});
```

## Example

Click the button in this example to show a browser date picker.

### HTML

```html
<input type="date">
<button>Show the date picker</button>
```

### JavaScript

```js
const button = document.querySelector("button");
const dateInput = document.querySelector("input");

button.addEventListener("click", async () => {
  try {
    await dateInput.showPicker();
    // A date picker is shown.
  } catch (error) {
    // Use external library when this fails.
  }
});
```

### Result

{{EmbedLiveSample("Example")}}


## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{ HTMLElement("input") }}
- {{ domxref("HTMLInputElement") }}
