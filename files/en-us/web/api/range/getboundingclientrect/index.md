---
title: Range.getBoundingClientRect()
slug: Web/API/Range/getBoundingClientRect
tags:
  - API
  - CSSOM View
  - Experimental
  - Method
  - Range
  - Reference
browser-compat: api.Range.getBoundingClientRect
---
{{ApiRef("DOM")}}{{SeeCompatTable}}

The **`Range.getBoundingClientRect()`** method returns a {{
  domxref("DOMRect") }} object that bounds the contents of the range; this is a rectangle
enclosing the union of the bounding rectangles for all the elements in the range.

This method is useful for determining the viewport coordinates of the cursor or
selection inside a text box. See {{domxref("Element.getBoundingClientRect()")}} for
details on the returned value.

## Syntax

```js
boundingRect = range.getBoundingClientRect()
```

## Example

### HTML

```html
<div id="highlight"></div>
<p>This example positions a "highlight" rectangle behind the contents of a range. The range's content <b>starts here</b> and continues on until it <b>ends here</b>. The bounding client rectangle contains everything selected in the range.</p>
```

### CSS

```css
#highlight {
  background: yellow;
  position: absolute;
  z-index: -1;
}

p {
  width: 200px;
}
```

### JavaScript

```js
const range = document.createRange();
range.setStartBefore(document.getElementsByTagName('b').item(0), 0);
range.setEndAfter(document.getElementsByTagName('b').item(1), 0);

const clientRect = range.getBoundingClientRect();
const highlight = document.getElementById('highlight');
highlight.style.left = `${clientRect.x}px`;
highlight.style.top = `${clientRect.y}px`;
highlight.style.width = `${clientRect.width}px`;
highlight.style.height = `${clientRect.height}px`;
```

### Result

{{EmbedLiveSample("Example")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Range.getClientRects()")}} - finer-grained result for non-rectangular
  ranges (e.g., when the selection wraps onto the next line);
- {{domxref("Element.getBoundingClientRect()")}}
- {{domxref("Document.caretPositionFromPoint()")}} - to get the (node, offset) from
  viewport coordinates.
