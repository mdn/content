---
title: HTMLOutputElement.labels
slug: Web/API/HTMLOutputElement/labels
page-type: web-api-instance-property
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

## Value

A {{domxref("NodeList")}} containing the `<label>` elements associated
with the `<output>` element.

## Examples

### HTML

```html
<label id="label1" for="test">Label 1</label>
<output id="test">Output</output>
<label id="label2" for="test">Label 2</label>
```

### JavaScript

```js
window.addEventListener("DOMContentLoaded", () => {
  const output = document.getElementById("test");
  for (const label of output.labels) {
    console.log(label.textContent); // "Label 1" and "Label 2"
  }
});
```

{{EmbedLiveSample("Examples", "100%", 30)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
