---
title: HTMLInputElement.labels
slug: Web/API/HTMLInputElement/labels
tags:
  - API
  - HTML DOM
  - HTMLInputElement
  - Property
  - Reference
browser-compat: api.HTMLInputElement.labels
---
{{APIRef("DOM")}}

The **`HTMLInputElement.labels`** read-only property returns a
{{domxref("NodeList")}} of the {{HTMLElement("label")}} elements associated with the
{{HTMLElement("input")}} element, if the element is not hidden. If the element has the
type `hidden`, the property returns `null`.

## Syntax

```js
var labelElements = input.labels;
```

### Return value

A {{domxref("NodeList")}} containing the `<label>` elements associated
with the `<input>` element.

## Example

### HTML

```html
<label id="label1" for="test">Label 1</label>
<input id="test"/>
<label id="label2" for="test">Label 2</label>
```

### JavaScript

```js
window.addEventListener("DOMContentLoaded", function() {
  const input = document.getElementById("test");
  for(var i = 0; i < input.labels.length; i++) {
    console.log(input.labels[i].textContent); // "Label 1" and "Label 2"
  }
});
```

{{EmbedLiveSample("Example", "100%", 30)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
