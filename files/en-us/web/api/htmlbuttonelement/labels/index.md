---
title: HTMLButtonElement.labels
slug: Web/API/HTMLButtonElement/labels
tags:
  - API
  - HTML DOM
  - Property
  - Reference
browser-compat: api.HTMLButtonElement.labels
---
{{APIRef("DOM")}}

The **`HTMLButtonElement.labels`** read-only property returns a
{{domxref("NodeList")}} of the {{HTMLElement("label")}} elements associated with the
{{HTMLElement("button")}} element.

## Syntax

```js
var labelElements = button.labels;
```

### Return value

A {{domxref("NodeList")}} containing the `<label>` elements associated
with the `<button>` element.

## Example

### HTML

```html
<label id="label1" for="test">Label 1</label>
<button id="test">Button</button>
<label id="label2" for="test">Label 2</label>
```

### JavaScript

```js
window.addEventListener("DOMContentLoaded", function() {
  const button = document.getElementById("test");
  for(var i = 0; i < button.labels.length; i++) {
    console.log(button.labels[i].textContent); // "Label 1" and "Label 2"
  }
});
```

{{EmbedLiveSample("Example", "100%", 30)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
