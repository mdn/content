---
title: Document.releaseCapture()
slug: Web/API/Document/releaseCapture
tags:
  - API
  - DOM
  - Method
  - Reference
browser-compat: api.Document.releaseCapture
---
{{ApiRef("DOM")}}

The **`releaseCapture()`** method releases mouse capture if
it's currently enabled on an element within this document. Enabling mouse capture on an
element is done by calling {{domxref("element.setCapture()")}}.

## Syntax

```js
document.releaseCapture();
```

Once mouse capture is released, mouse events will no longer all be directed to the
element on which capture is enabled.

## Example

See the [example](/en-US/docs/Web/API/Element/setCapture#example) for
{{domxref("element.setCapture()")}}.

## Specifications

Based on Internet Explorer's implementation.

## Browser compatibility

{{Compat}}

## See also

- {{domxref("element.setCapture()")}}
