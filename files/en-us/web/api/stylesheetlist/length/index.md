---
title: StyleSheetList.length
slug: Web/API/StyleSheetList/length
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - length
  - StyleSheetList
browser-compat: api.StyleSheetList.length
---
{{APIRef("CSSOM")}}

The **`length`** read-only property of the {{domxref("StyleSheetList")}} interface returns the number of {{domxref("CSSStyleSheet")}} objects in the collection.

## Value

An integer indicating the number of items in the collection.

## Examples

In the following example, `length` is printed to the console, and also used in a for loop to print each individual {{domxref("CSSStyleSheet")}} object to the console.

```js
let length = document.styleSheets.length;
console.log(length);

for (let i = 0; i < length; i++) {
  console.log(document.styleSheets[i]);
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
