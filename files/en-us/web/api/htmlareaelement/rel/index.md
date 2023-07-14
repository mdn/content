---
title: "HTMLAreaElement: rel property"
short-title: rel
slug: Web/API/HTMLAreaElement/rel
page-type: web-api-instance-property
browser-compat: api.HTMLAreaElement.rel
---

{{APIRef("HTML DOM")}}

The **`HTMLAreaElement.rel`** property reflects the [`rel`](/en-US/docs/Web/HTML/Attributes/rel) attribute. It is a string containing a space-separated list of link types indicating the relationship between the resource represented by the {{HTMLElement("area")}} element and the current document.

## Value

A string.

## Examples

```js
const areas = document.getElementsByTagName("area");
for (const area of areas) {
  console.log(`Rel: ${area.rel}`);
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The equivalent property on {{HTMLElement("a")}} and {{HTMLElement("link")}},
  {{domxref("HTMLAnchorElement.rel")}} and {{domxref("HTMLLinkElement.rel")}}.
- The very same list but as tokens: {{domxref("HTMLAreaElement.relList")}}
