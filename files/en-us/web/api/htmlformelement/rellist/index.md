---
title: "HTMLFormElement: relList property"
short-title: relList
slug: Web/API/HTMLFormElement/relList
page-type: web-api-instance-property
browser-compat: api.HTMLFormElement.relList
---

{{APIRef("HTML DOM")}}

The **`relList`** read-only property of the {{domxref("HTMLFormElement")}} interface reflects the [`rel`](/en-US/docs/Web/HTML/Attributes/rel) attribute. It is a live {{domxref("DOMTokenList")}} containing the set of form types indicating the relationship between the resource represented by the {{HTMLElement("form")}} element and the current document.

The property itself is read-only, meaning you can not substitute the
{{domxref("DOMTokenList")}} by another one, but the content of the returned list can be
changed.

For a string containing the values as space-separated tokens, see {{domxref("HTMLFormElement.rel")}}. The `rel` property can also be used to set the `rel` attribute value.

## Value

A live {{domxref("DOMTokenList")}} of strings.

## Examples

```js
const forms = document.getElementsByTagName("form");
for (const form of forms) {
  console.log("New form found.");
  form.relList.forEach((relEntry) => {
    console.log(relEntry);
  });
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLAnchorElement.relList")}}
- {{domxref("HTMLLinkElement.relList")}}
- {{domxref("HTMLFormElement.rel")}}
