---
title: "HTMLAreaElement: relList property"
short-title: relList
slug: Web/API/HTMLAreaElement/relList
page-type: web-api-instance-property
browser-compat: api.HTMLAreaElement.relList
---

{{APIRef("HTML DOM")}}

The **`HTMLAreaElement.relList`** read-only property reflects the [`rel`](/en-US/docs/Web/HTML/Attributes/rel) attribute. It is a live {{domxref("DOMTokenList")}} containing the set of link types indicating the relationship between the resource represented by the {{HTMLElement("area")}} element and the current document.

The property itself is read-only, meaning you can't substitute the
{{domxref("DOMTokenList")}} by another one, but the content of the returned list can be
changed.

## Value

A live {{domxref("DOMTokenList")}} of strings.

## Examples

```js
const areas = document.getElementsByTagName("area");
const length = areas.length;

for (const area of areas) {
  console.log("New area found.");
  area.relList.forEach((relValue) => {
    console.log(relValue);
  });
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The equivalent property on {{HTMLElement("a")}} and {{HTMLElement("link")}},
  {{domxref("HTMLAnchorElement.relList")}} and {{domxref("HTMLLinkElement.relList")}}.
- The very same list but as a space-separated tokens in a string:
  {{domxref("HTMLAreaElement.rel")}}
