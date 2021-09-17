---
title: HTMLSelectElement.options
slug: Web/API/HTMLSelectElement/options
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

## Syntax

```js
var options = select.options;
```

### Return value

A {{domxref("HTMLOptionsCollection")}} containing the `<option>`
elements contained by the `<select>` element.

## Example

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
window.addEventListener("DOMContentLoaded", function() {
  const select = document.getElementById("test");
  for(var i = 0; i < select.options.length; i++) {
    console.log(select.options[i].label); // "Option 1" and "Option 2"
  }
});
```

{{EmbedLiveSample("Example", "100%", 30)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
