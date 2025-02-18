---
title: "HTMLQuoteElement: cite property"
short-title: cite
slug: Web/API/HTMLQuoteElement/cite
page-type: web-api-instance-property
browser-compat: api.HTMLQuoteElement.cite
---

{{ApiRef("HTML DOM")}}

The **`cite`** property of the {{domxref("HTMLQuoteElement")}} interface indicates the URL for the source of the quotation. It reflects the {{HTMLElement("q")}} element's [`cite`](/en-US/docs/Web/HTML/Element/q#cite) attribute.

## Value

A string representing a URL.

## Example

```js
const quote = document.querySelector("q");
console.log(`Original source: ${quote.cite}`); // the current value
quote.cite = "https://example.com/quotes"; // updates the value
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLQuoteElement")}}
- {{domxref("HTMLModElement.cite")}}
