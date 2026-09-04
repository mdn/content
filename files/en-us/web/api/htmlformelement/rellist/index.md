---
title: "HTMLFormElement: relList property"
short-title: relList
slug: Web/API/HTMLFormElement/relList
page-type: web-api-instance-property
browser-compat: api.HTMLFormElement.relList
---

{{APIRef("HTML DOM")}}

The read-only **`relList`** property of the {{domxref("HTMLFormElement")}} returns a live {{domxref("DOMTokenList")}} object containing the set of link types indicating the relationship between the resource represented by the {{HTMLElement("form")}} element and the current document. It reflects the {{HTMLElement("form")}} element's [`rel`](/en-US/docs/Web/HTML/Reference/Attributes/rel) content attribute.

## Value

A live {{domxref("DOMTokenList")}} object.

Although the `relList` property itself is read-only in the sense that you can't replace the `DOMTokenList` object, you can still assign to the `relList` property directly, which is equivalent to assigning to its {{domxref("DOMTokenList/value", "value")}} property. You can also modify the `DOMTokenList` object using the {{domxref("DOMTokenList/add", "add()")}}, {{domxref("DOMTokenList/remove", "remove()")}}, {{domxref("DOMTokenList/replace", "replace()")}}, and {{domxref("DOMTokenList/toggle", "toggle()")}} methods.

## Examples

```js
const form = document.querySelector("form");
form.relList.forEach((relEntry) => {
  console.log(relEntry);
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLAnchorElement.relList")}}
- {{domxref("HTMLLinkElement.relList")}}
- {{domxref("HTMLFormElement.rel")}}
