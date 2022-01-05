---
title: HTMLOutputElement.labels
slug: Web/API/HTMLOutputElement/labels
tags:
  - API
  - HTML DOM
  - HTMLOutputElement
  - Property
  - Reference
browser-compat: api.HTMLOutputElement.labels
---
{{APIRef("DOM")}}

The **`HTMLOutputElement.labels`** read-only property returns a
{{domxref("NodeList")}} of the {{HTMLElement("label")}} elements associated with the
{{HTMLElement("output")}} element.

## Syntax

```js
var labelElements = output.labels;
```

### Return value

A {{domxref("NodeList")}} containing the `<label>` elements associated
with the `<output>` element.

## Example

### HTML

```html
<label id="label1" for="test">Label 1</label>
<output id="test">Output</output>
<label id="label2" for="test">Label 2</label>
```

### JavaScript

```js
window.addEventListener("DOMContentLoaded", function() {
  const output = document.getElementById("test");
  for(var i = 0; i < output.labels.length; i++) {
    console.log(output.labels[i].textContent); // "Label 1" and "Label 2"
  }
});
```

{{EmbedLiveSample("Example", "100%", 30)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
