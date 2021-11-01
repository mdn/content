---
title: Document.elementsFromPoint()
slug: Web/API/Document/elementsFromPoint
tags:
  - API
  - Document
  - Method
  - Reference
  - elementsFromPoint
browser-compat: api.Document.elementsFromPoint
---
{{APIRef("DOM")}}

The **`elementsFromPoint()`** method
of the {{domxref("Document")}} interface returns an array of all elements
at the specified coordinates (relative to the viewport).

It operates in a similar way to the {{domxref("Document.elementFromPoint",
  "elementFromPoint()")}} method.

## Syntax

```js
elementsFromPoint(x, y);
```

### Parameters

- `x`
  - : The horizontal coordinate of a point.
- `y`
  - : The vertical coordinate of a point.

### Return value

An array of {{domxref('element')}} objects.

## Example

### HTML

```html
<div>
  <p>Some text</p>
</div>
<p>Elements at point 30, 20:</p>
<div id="output"></div>
```

### JavaScript

```js
let output = document.getElementById("output");
if (document.elementsFromPoint) {
  let elements = document.elementsFromPoint(30, 20);
  for (var i = 0; i < elements.length; i++) {
    output.textContent += elements[i].localName;
    if (i < elements.length - 1) {
      output.textContent += " < ";
    }
  }
} else {
  output.innerHTML = "<span style=\"color: red;\">" +
     "Browser does not support <code>document.elementsFromPoint()</code>" +
     "</span>";
}
```

{{EmbedLiveSample('Example', '420', '120')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{DOMxRef("Document.elementFromPoint()")}}
