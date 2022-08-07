---
title: HTMLMeterElement.labels
slug: Web/API/HTMLMeterElement/labels
page-type: web-api-instance-property
tags:
  - API
  - HTML DOM
  - HTMLMeterElement
  - Property
  - Reference
browser-compat: api.HTMLMeterElement.labels
---
{{APIRef("DOM")}}

The **`HTMLMeterElement.labels`** read-only property returns a
{{domxref("NodeList")}} of the {{HTMLElement("label")}} elements associated with the
{{HTMLElement("meter")}} element.

## Value

A {{domxref("NodeList")}} containing the `<label>` elements associated
with the `<meter>` element.

## Examples

### HTML

```html
<label id="label1" for="test">Label 1</label>
<meter id="test" min="0" max="100" value="70">70</meter>
<label id="label2" for="test">Label 2</label>
```

### JavaScript

```js
window.addEventListener("DOMContentLoaded", () => {
  const meter = document.getElementById("test");
  for (const label of meter.labels) {
    console.log(label.textContent); // "Label 1" and "Label 2"
  }
});
```

{{EmbedLiveSample("Examples", "100%", 30)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
