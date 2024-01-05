---
title: "HTMLElement: translate property"
short-title: translate
slug: Web/API/HTMLElement/translate
page-type: web-api-instance-property
browser-compat: api.HTMLElement.translate
---

{{APIRef("HTML DOM")}}

The **`translate`** property of the {{domxref("HTMLElement")}} interface indicates whether an element's attribute values and the values of its {{domxref("Text")}} node children are to be translated when the page is localized, or whether to leave them unchanged.

It reflects the value of the [`translate`](/en-US/docs/Web/HTML/Global_attributes/translate) HTML global attribute.

## Value

A boolean value that is `true` if an element's attribute values and the values of its {{domxref("Text")}} node children are to be translated when the page is localized, `false` otherwise.

## Examples

The following example shows how to enable or disable translation via script:

```js
const translateElement = document.querySelector(".translate-element");
const noTranslateElement = document.querySelector(".no-translate-element");

// Enable translation
translateElement.translate = true;

// Disable translation
noTranslateElement.translate = false;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`translate`](/en-US/docs/Web/HTML/Global_attributes#translate) HTML global attribute
