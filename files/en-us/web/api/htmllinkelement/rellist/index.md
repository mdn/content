---
title: "HTMLLinkElement: relList property"
short-title: relList
slug: Web/API/HTMLLinkElement/relList
page-type: web-api-instance-property
browser-compat: api.HTMLLinkElement.relList
---

{{ APIRef("HTML DOM") }}

The **`HTMLLinkElement.relList`** read-only property reflects the [`rel`](/en-US/docs/Web/HTML/Attributes/rel) attribute. It is a live {{domxref("DOMTokenList")}} containing the set of link types indicating the relationship between the resource represented by the {{HTMLElement("link")}} element and the current document.

The property itself is read-only, meaning you can not substitute the
{{domxref("DOMTokenList")}} by another one, but the content of the returned list can be
changed.

## Value

A live {{domxref("DOMTokenList")}} of strings.

## Examples

```js
const links = document.getElementsByTagName("link");
const length = links.length;
for (const link of links) {
  const listLength = list.length;
  console.log("New link found.");
  relList.forEach((relEntry) => {
    console.log(relEntry);
  });
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The equivalent property on {{HTMLElement("a")}} and {{HTMLElement("area")}},
  {{domxref("HTMLAnchorElement.relList")}} and {{domxref("HTMLAreaElement.relList")}}.
- The very same list but as a space-separated tokens in a string:
  {{domxref("HTMLLinkElement.rel")}}
