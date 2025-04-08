---
title: "HTMLFormElement: rel property"
short-title: rel
slug: Web/API/HTMLFormElement/rel
page-type: web-api-instance-property
browser-compat: api.HTMLFormElement.rel
---

{{APIRef("HTML DOM")}}

The **`rel`** property of the {{domxref("HTMLFormElement")}} interface reflects the [`rel`](/en-US/docs/Web/HTML/Reference/Attributes/rel) attribute. It is a string containing what kinds of links the HTML {{HTMLElement("form")}} element creates, as a space-separated list of enumerated values.

To retrieve the value as an array of tokens, use {{domxref("HTMLFormElement.relList")}}.

## Value

A string.

## Examples

```js
const form = document.querySelector("form");
console.log(form.rel);

form.rel = "noopener noreferrer";
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLFormElement.relList")}}
- {{domxref("HTMLLinkElement.rel")}}
- {{domxref("HTMLAnchorElement.rel")}}
