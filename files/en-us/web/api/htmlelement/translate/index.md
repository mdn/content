---
title: "HTMLElement: translate property"
short-title: translate
slug: Web/API/HTMLElement/translate
page-type: web-api-instance-property
browser-compat: api.HTMLElement.translate
---

{{APIRef("HTML DOM")}}

The **`translate`** property of the {{domxref("HTMLElement")}} interface gets and sets a {{jsxref("Boolean")}} primitive indicating whether an element's attribute values and the values of its Text node children are to be translated when the page is localized, or whether to leave them unchanged.

It reflects the value of the [`translate`](/en-US/docs/Web/HTML/Global_attributes/translate) HTML global attribute.

## Value

A {{jsxref("Boolean")}} primitive that is `true` if translation of the element will be allowed when localize, `false` otherwise.

## Examples

The following example shows how to enable or disable translation of the element when localize via script:

```js
const translateElement = document.querySelector(".translate-element");
const noTranslateElement = document.querySelector(".no-translate-element");

// enable translation of the element when localize
if (!translateElement.translate) {
  translateElement.translate = true;
}

// disable translation of the element when localize
if (noTranslateElement.translate) {
  noTranslateElement.translate = false;
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`translate`](/en-US/docs/Web/HTML/Global_attributes#translate) HTML global attribute
