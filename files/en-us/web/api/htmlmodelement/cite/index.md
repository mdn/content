---
title: "HTMLModElement: cite property"
short-title: cite
slug: Web/API/HTMLModElement/cite
page-type: web-api-instance-property
browser-compat: api.HTMLModElement.cite
---

{{ApiRef("HTML DOM")}}

The **`cite`** property of the {{domxref("HTMLModElement")}} interface indicates the URL of the resource explaining the modification. It reflects the `cite` attribute of the {{HTMLElement("del")}} element and {{HTMLElement("ins")}} elements.

## Value

A string representing a URL.

## Example

```js
const mod = document.querySelector("edit");
console.log(`Explanation: ${mod.cite}`); // the current value
mod.cite = "https://example.com/edits"; // updates the element's cite
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLModElement.dateTime")}}
- {{domxref("HTMLQuoteElement.cite")}}
