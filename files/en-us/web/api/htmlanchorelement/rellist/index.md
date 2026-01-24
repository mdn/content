---
title: "HTMLAnchorElement: relList property"
short-title: relList
slug: Web/API/HTMLAnchorElement/relList
page-type: web-api-instance-property
browser-compat: api.HTMLAnchorElement.relList
---

{{APIRef("HTML DOM")}}

The read-only **`relList`** property of the {{domxref("HTMLAnchorElement")}} returns a live {{domxref("DOMTokenList")}} object containing the set of link types indicating the relationship between the resource represented by the {{HTMLElement("a")}} element and the current document. It reflects the {{HTMLElement("a")}} element's [`rel`](/en-US/docs/Web/HTML/Reference/Attributes/rel) content attribute.

## Value

A live {{domxref("DOMTokenList")}} object.

Although the `relList` property itself is read-only in the sense that you can't replace the `DOMTokenList` object, you can still assign to the `relList` property directly, which is equivalent to assigning to its {{domxref("DOMTokenList/value", "value")}} property. You can also modify the `DOMTokenList` object using the {{domxref("DOMTokenList/add", "add()")}}, {{domxref("DOMTokenList/remove", "remove()")}}, {{domxref("DOMTokenList/replace", "replace()")}}, and {{domxref("DOMTokenList/toggle", "toggle()")}} methods.

## Examples

```js
const anchors = document.getElementsByTagName("a");
for (const anchor of anchors) {
  const list = anchor.relList;
  console.log(
    `New anchor node found with ${list.length} link types in relList.`,
  );
  list.forEach((relValue) => {
    console.log(relValue);
  });
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The equivalent property on {{HTMLElement("area")}} and {{HTMLElement("link")}},
  {{domxref("HTMLAreaElement.relList")}} and {{domxref("HTMLLinkElement.relList")}}.
- The very same list but as a space-separated tokens in a string:
  {{domxref("HTMLAnchorElement.rel")}}
