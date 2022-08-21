---
title: HTMLButtonElement.labels
slug: Web/API/HTMLButtonElement/labels
page-type: web-api-instance-property
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

## Value

A {{domxref("NodeList")}} containing the `<label>` elements associated
with the `<button>` element.

## Examples

### HTML

```html
<label id="label1" for="test">Label 1</label>
<button id="test">Button</button>
<label id="label2" for="test">Label 2</label>
```

### JavaScript

```js
window.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("test");
  for (const label of button.labels) {
    console.log(label.textContent); // "Label 1" and "Label 2"
  }
});
```

{{EmbedLiveSample("Examples", "100%", 30)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
