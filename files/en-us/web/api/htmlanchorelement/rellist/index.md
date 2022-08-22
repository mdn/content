---
title: HTMLAnchorElement.relList
slug: Web/API/HTMLAnchorElement/relList
page-type: web-api-instance-property
tags:
  - API
  - HTML DOM
  - HTMLAnchorElement
  - Property
  - Reference
  - relList
browser-compat: api.HTMLAnchorElement.relList
---
{{APIRef("HTML DOM")}}

The **`HTMLAnchorElement.relList`** read-only property reflects
the {{htmlattrxref("rel", "a")}} attribute. It is a live {{domxref("DOMTokenList")}}
containing the set of [link types](/en-US/docs/Web/HTML/Link_types)
indicating the relationship between the resource represented by the {{HTMLElement("a")}}
element and the current document.

The property itself is read-only, meaning you can't substitute the
{{domxref("DOMTokenList")}} with another one, but its contents can still be changed.

## Value

A live {{domxref("DOMTokenList")}} of strings.

## Examples

```js
const anchors = document.getElementsByTagName("a");
for (const anchor of anchors) {
  const list = anchor.relList;
  console.log(`New anchor node found with ${list.length} link types in relList.`);
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
