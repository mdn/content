---
title: Document.caretPositionFromPoint()
slug: Web/API/Document/caretPositionFromPoint
page-type: web-api-instance-method
tags:
  - API
  - Document
  - Method
  - Reference
browser-compat: api.Document.caretPositionFromPoint
---
{{APIRef("CSSOM View")}}

The **`caretPositionFromPoint()`**
property of the {{domxref("Document")}} interface returns a
{{domxref('CaretPosition')}} object, containing the DOM node, along with the caret and
caret's character offset within that node.

## Syntax

```js
caretPositionFromPoint(x, y)
```

### Parameters

- `x`
  - : The horizontal coordinate of a point.
- `y`
  - : The vertical coordinate of a point.

### Return value

A {{domxref('CaretPosition')}} object.

## Examples

Click anywhere in the **Demo** paragraph below to insert a line break at the point where you click. The code for it is below the demo.

### Demo

{{EmbedLiveSample('Examples')}}

The code below first checks for {{domxref("Document.caretRangeFromPoint", "document.caretRangeFromPoint")}} support, but if the browser doesn't support that, the code then checks for `document.caretPositionFromPoint`, and uses that instead.

### JavaScript

```js
function insertBreakAtPoint(e) {
  let range;
  let textNode;
  let offset;

  if (document.caretRangeFromPoint) {
    range = document.caretRangeFromPoint(e.clientX, e.clientY);
    textNode = range.startContainer;
    offset = range.startOffset;
  } else if (document.caretPositionFromPoint) {
    range = document.caretPositionFromPoint(e.clientX, e.clientY);
    textNode = range.offsetNode;
    offset = range.offset;
  } else {
    document.body.textContent = "[This browser supports neither"
      + " document.caretRangeFromPoint"
      + " nor document.caretPositionFromPoint.]";
    return;
  }
  // Only split TEXT_NODEs
  if (textNode?.nodeType === 3) {
    let replacement = textNode.splitText(offset);
    let br = document.createElement('br');
    textNode.parentNode.insertBefore(br, replacement);
  }
}

let paragraphs = document.getElementsByTagName("p");
for (let i = 0; i < paragraphs.length; i++) {
  paragraphs[i].addEventListener('click', insertBreakAtPoint, false);
}
```

### HTML

```html
<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref('CaretPosition')}}
