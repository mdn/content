---
title: "HTMLAnchorElement: rel property"
short-title: rel
slug: Web/API/HTMLAnchorElement/rel
page-type: web-api-instance-property
browser-compat: api.HTMLAnchorElement.rel
---

{{APIRef("HTML DOM")}}

The **`HTMLAnchorElement.rel`** property reflects the [`rel`](/en-US/docs/Web/HTML/Attributes/rel) attribute. It is a string containing a space-separated list of link types indicating the relationship between the resource represented by the {{HTMLElement("a")}} element and the current document.

## Value

A string.

## Examples

```js
const anchors = document.getElementsByTagName("a");
for (const anchor of anchors) {
  alert(`Rel: ${anchor.rel}`);
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The equivalent property on {{HTMLElement("area")}} and {{HTMLElement("link")}},
  {{domxref("HTMLAreaElement.rel")}} and {{domxref("HTMLLinkElement.rel")}}.
- The very same list but as tokens: {{domxref("HTMLAnchorElement.relList")}}
