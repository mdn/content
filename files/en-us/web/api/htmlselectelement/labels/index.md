---
title: HTMLSelectElement.labels
slug: Web/API/HTMLSelectElement/labels
page-type: web-api-instance-property
tags:
  - API
  - HTML DOM
  - HTMLSelectElement
  - Property
  - Reference
browser-compat: api.HTMLSelectElement.labels
---
{{APIRef("DOM")}}

The **`HTMLSelectElement.labels`** read-only property returns a
{{domxref("NodeList")}} of the {{HTMLElement("label")}} elements associated with the
{{HTMLElement("select")}} element.

## Value

A {{domxref("NodeList")}} containing the `<label>` elements associated
with the `<select>` element.

## Examples

### HTML

```html
<label id="label1" for="test">Label 1</label>
<select id="test">
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
</select>
<label id="label2" for="test">Label 2</label>
```

### JavaScript

```js
window.addEventListener("DOMContentLoaded", () => {
  const select = document.getElementById("test");
  for (const label of select.labels) {
    console.log(label.textContent); // "Label 1" and "Label 2"
  }
});
```

{{EmbedLiveSample("Examples", "100%", 30)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
