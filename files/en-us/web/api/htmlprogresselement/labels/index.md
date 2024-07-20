---
title: "HTMLProgressElement: labels property"
short-title: labels
slug: Web/API/HTMLProgressElement/labels
page-type: web-api-instance-property
browser-compat: api.HTMLProgressElement.labels
---

{{APIRef("DOM")}}

The **`HTMLProgressElement.labels`** read-only property returns
a {{domxref("NodeList")}} of the {{HTMLElement("label")}} elements associated with the
{{HTMLElement("progress")}} element.

## Value

A {{domxref("NodeList")}} containing the `<label>` elements associated
with the `<progress>` element.

## Examples

### HTML

```html
<label id="label1" for="test">Label 1</label>
<progress id="test" value="70" max="100">70%</progress>
<label id="label2" for="test">Label 2</label>
```

### JavaScript

```js
window.addEventListener("DOMContentLoaded", () => {
  const progress = document.getElementById("test");
  for (const label of progress.labels) {
    console.log(label.textContent); // "Label 1" and "Label 2"
  }
});
```

{{EmbedLiveSample("Examples", "100%", 30)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
