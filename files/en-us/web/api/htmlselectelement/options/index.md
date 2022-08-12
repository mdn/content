---
title: HTMLSelectElement.options
slug: Web/API/HTMLSelectElement/options
page-type: web-api-instance-property
tags:
  - API
  - HTMLSelectElement
  - Options
  - Property
  - Read-only
  - Web
browser-compat: api.HTMLSelectElement.options
---
{{APIRef("DOM")}}

The **`HTMLSelectElement.options`** read-only property returns
a {{domxref("HTMLOptionsCollection")}} of the {{HTMLElement("option")}} elements
contained by the {{HTMLElement("select")}} element.

## Value

A {{domxref("HTMLOptionsCollection")}} containing the `<option>`
elements contained by the `<select>` element.

## Examples

### HTML

```html
<label for="test">Label</label>
<select id="test">
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
</select>
```

### JavaScript

```js
window.addEventListener("DOMContentLoaded", () => {
  const select = document.getElementById("test");
  for (const option of select.options) {
    console.log(option.label); // "Option 1" and "Option 2"
  }
});
```

{{EmbedLiveSample("Examples", "100%", 30)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
