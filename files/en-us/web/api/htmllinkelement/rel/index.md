---
title: "HTMLLinkElement: rel property"
short-title: rel
slug: Web/API/HTMLLinkElement/rel
page-type: web-api-instance-property
browser-compat: api.HTMLLinkElement.rel
---

{{APIRef("HTML DOM")}}

The **`rel`** property of the {{domxref("HTMLLinkElement")}} interface reflects the [`rel`](/en-US/docs/Web/HTML/Attributes/rel) attribute. It is a string containing a space-separated list of link types indicating the relationship between the resource represented by the {{HTMLElement("link")}} element and the current document.

The most common use of this attribute is to specify a link to an external style sheet:
the property is set to `stylesheet`, and the [`href`](/en-US/docs/Web/HTML/Element/link#href)
attribute is set to the URL of an external style sheet to format the page.

## Value

A string.

## Examples

```js
const links = document.getElementsByTagName("link");
for (const link of links) {
  console.log(link);
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The equivalent property on {{HTMLElement("a")}} and {{HTMLElement("area")}},
  {{domxref("HTMLAnchorElement.rel")}} and {{domxref("HTMLAreaElement.rel")}}.
- The very same list but as tokens: {{domxref("HTMLLinkElement.relList")}}
