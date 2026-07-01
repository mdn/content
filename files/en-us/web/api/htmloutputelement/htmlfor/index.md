---
title: "HTMLOutputElement: htmlFor property"
short-title: htmlFor
slug: Web/API/HTMLOutputElement/htmlFor
page-type: web-api-instance-property
browser-compat: api.HTMLOutputElement.htmlFor
---

{{ APIRef("HTML DOM") }}

The read-only **`htmlFor`** property of the {{domxref("HTMLOutputElement")}} returns a live {{domxref("DOMTokenList")}} object containing a list of `id`s of those elements contributing input values to (or otherwise affected) the calculation. It reflects the {{HTMLElement("output")}} element's [`for`](/en-US/docs/Web/HTML/Reference/Elements/output#for) content attribute.

## Value

A live {{domxref("DOMTokenList")}} object.

Although the `htmlFor` property itself is read-only in the sense that you can't replace the `DOMTokenList` object, you can still assign to the `htmlFor` property directly, which is equivalent to assigning to its {{domxref("DOMTokenList/value", "value")}} property. You can also modify the `DOMTokenList` object using the {{domxref("DOMTokenList/add", "add()")}}, {{domxref("DOMTokenList/remove", "remove()")}}, {{domxref("DOMTokenList/replace", "replace()")}}, and {{domxref("DOMTokenList/toggle", "toggle()")}} methods.

## Examples

```js
const outputElem = document.getElementById("result");
for (const id of outputElem.htmlFor.split(" ")) {
  const elem = document.getElementById(id);
  elem.style.outline = "2px solid red";
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTMLElement("output")}}
