---
title: XPathResult.invalidIteratorState
slug: Web/API/XPathResult/invalidIteratorState
page-type: web-api-instance-property
tags:
  - API
  - DOM XPath API
  - Property
  - Reference
  - XPath
  - XPathResult
browser-compat: api.XPathResult.invalidIteratorState
---
{{APIRef("DOM XPath")}}

The read-only **`invalidIteratorState`** property of the
{{domxref("XPathResult")}} interface signifies that the iterator has become invalid. It
is `true` if {{domxref("XPathResult.resultType")}} is
`UNORDERED_NODE_ITERATOR_TYPE` or `ORDERED_NODE_ITERATOR_TYPE` and
the document has been modified since this result was returned.

{{AvailableInWorkers}}

## Value

A boolean value indicating whether the iterator has become invalid.

## Examples

The following example shows the use of the `invalidIteratorState` property.

### HTML

```html
<div>XPath example</div>
<p>Iterator state: <output></output></p>
```

### JavaScript

```js
const xpath = "//div";
const result = document.evaluate(xpath, document, null, XPathResult.ANY_TYPE, null);
// Invalidates the iterator state
document.querySelector("div").remove();
document.querySelector("output").textContent = result.invalidIteratorState ? "invalid" : "valid";
```

### Result

{{EmbedLiveSample('Examples', 400, 70)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
