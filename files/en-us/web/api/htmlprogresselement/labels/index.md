---
title: HTMLProgressElement.labels
slug: Web/API/HTMLProgressElement/labels
tags:
  - API
  - HTML DOM
  - HTMLProgressElement
  - Property
  - Reference
browser-compat: api.HTMLProgressElement.labels
---
{{APIRef("DOM")}}

The **`HTMLProgressElement.labels`** read-only property returns
a {{domxref("NodeList")}} of the {{HTMLElement("label")}} elements associated with the
{{HTMLElement("progress")}} element.

## Syntax

```js
var labelElements = progress.labels;
```

### Return value

A {{domxref("NodeList")}} containing the `<label>` elements associated
with the `<progress>` element.

## Example

### HTML

```html
<label id="label1" for="test">Label 1</label>
<progress id="test" value="70" max="100">70%</progress>
<label id="label2" for="test">Label 2</label>
```

### JavaScript

```js
window.addEventListener("DOMContentLoaded", function() {
  const progress = document.getElementById("test");
  for(var i = 0; i < progress.labels.length; i++) {
    console.log(progress.labels[i].textContent); // "Label 1" and "Label 2"
  }
});
```

{{EmbedLiveSample("Example", "100%", 30)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
