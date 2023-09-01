---
title: "CSSRuleList: item() method"
short-title: item()
slug: Web/API/CSSRuleList/item
page-type: web-api-instance-method
browser-compat: api.CSSRuleList.item
---

{{ APIRef("CSSOM") }}

The **`item()`** method of the {{domxref("CSSRuleList")}} interface returns the {{domxref("CSSRule")}} object at the specified `index` or `null` if the specified `index` doesn't exist.

## Syntax

```js-nolint
item(index)
```

### Parameters

- `index`
  - : An integer.

### Return value

A {{domxref("CSSRule")}}.

## Examples

In the following example, we assume that the `myRules` list has three items only.

```js
let myRules = document.styleSheets[0].cssRules;
console.log(myRules.item(0)); // Logs the first CSSRule item from this list

// Accessing non-existing items using this method will return null instead of undefined
console.log(myRules.item(5)); // null
console.log(myRules[5]); // undefined
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
