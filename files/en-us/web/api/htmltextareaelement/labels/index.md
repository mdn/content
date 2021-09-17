---
title: HTMLTextAreaElement.labels
slug: Web/API/HTMLTextAreaElement/labels
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

## Syntax

```js
var labelElements = textArea.labels;
```

### Return value

A {{domxref("NodeList")}} containing the `<label>` elements associated
with the `<textArea>` element.

## Example

### HTML

```html
<label id="label1" for="test">Label 1</label>
<textArea id="test">Some text</textArea>
<label id="label2" for="test">Label 2</label>
```

### JavaScript

```js
window.addEventListener("DOMContentLoaded", function() {
  const textArea = document.getElementById("test");
  for(var i = 0; i < textArea.labels.length; i++) {
    console.log(textArea.labels[i].textContent); // "Label 1" and "Label 2"
  }
});
```

{{EmbedLiveSample("Example", "100%", 60)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
