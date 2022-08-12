---
title: CSSRuleList.item()
slug: Web/API/CSSRuleList/item
page-type: web-api-instance-method
tags:
  - API
  - Method
  - Reference
  - item
  - CSSRuleList
browser-compat: api.CSSRuleList.item
---
{{ APIRef("CSSOM") }}

The **`item()`** method of the {{domxref("CSSRuleList")}} interface returns the {{domxref("CSSRule")}} object at the specified `index` or `null` if the specified `index` doesn't exist.

## Syntax

```js
item(index)
```

### Parameters

- `index`
  - : An integer.

### Return value

A {{domxref("CSSRule")}}.

## Examples

In the following example the first item in the {{domxref("CSSRuleList")}} named `myRules` is printed to the console.

```js
let myRules = document.styleSheets[0].cssRules;
console.log(myRules[0]);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
