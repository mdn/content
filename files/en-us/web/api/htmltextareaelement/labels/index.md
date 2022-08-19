---
title: HTMLTextAreaElement.labels
slug: Web/API/HTMLTextAreaElement/labels
page-type: web-api-instance-property
tags:
  - API
  - HTML DOM
  - HTMLTextAreaElement
  - Property
  - Reference
browser-compat: api.HTMLTextAreaElement.labels
---
{{APIRef("DOM")}}

The **`HTMLTextAreaElement.labels`** read-only property returns
a {{domxref("NodeList")}} of the {{HTMLElement("label")}} elements associated with the
{{HTMLElement("textArea")}} element.

## Value

A {{domxref("NodeList")}} containing the `<label>` elements associated
with the `<textArea>` element.

## Examples

### HTML

```html
<label id="label1" for="test">Label 1</label>
<textArea id="test">Some text</textArea>
<label id="label2" for="test">Label 2</label>
```

### JavaScript

```js
window.addEventListener("DOMContentLoaded", () => {
  const textArea = document.getElementById("test");
  for (const label of textArea.labels) {
    console.log(label.textContent); // "Label 1" and "Label 2"
  }
});
```

{{EmbedLiveSample("Examples", "100%", 100)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
