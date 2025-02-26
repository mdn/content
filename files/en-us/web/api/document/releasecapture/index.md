---
title: "Document: releaseCapture() method"
short-title: releaseCapture()
slug: Web/API/Document/releaseCapture
page-type: web-api-instance-method
status:
  - non-standard
browser-compat: api.Document.releaseCapture
---

{{ApiRef("DOM")}}{{Non-standard_header}}

The **`releaseCapture()`** method releases mouse capture if
it's currently enabled on an element within this document.
Once mouse capture is released, mouse events will no longer all be directed to the element on which capture is enabled.

Enabling mouse capture on an element is done by calling {{domxref("element.setCapture()")}}.

## Syntax

```js-nolint
releaseCapture()
```

### Parameters

None.

### Return value

None ({{jsxref("undefined")}}).

## Examples

See the [example](/en-US/docs/Web/API/Element/setCapture#examples) for
{{domxref("element.setCapture()")}}.

## Specifications

Not part of any specification.

## Browser compatibility

{{Compat}}

## See also

- {{domxref("element.setCapture()")}}
