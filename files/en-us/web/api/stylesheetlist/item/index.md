---
title: "StyleSheetList: item() method"
short-title: item()
slug: Web/API/StyleSheetList/item
page-type: web-api-instance-method
browser-compat: api.StyleSheetList.item
---

{{APIRef("CSSOM")}}

The **`item()`** method of the {{domxref("StyleSheetList")}} interface returns a single {{domxref("CSSStyleSheet")}} object.

## Syntax

```js-nolint
item(index)
```

### Parameters

- `index`
  - : An integer which is the index of the item in the collection to be returned.

### Return value

A {{domxref("CSSStyleSheet")}} object, or `null` if one does not exist for this index.

## Examples

In the following example, a for loop prints each individual {{domxref("CSSStyleSheet")}} object to the console, by calling `item` with the value of `i`.

```js
let list = document.styleSheets;

for (let i = 0; i < list.length; i++) {
  console.log(list.item(i));
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
