---
title: NavigatorUAData.brands
slug: Web/API/NavigatorUAData/brands
tags:
  - API
  - Property
  - Reference
  - brands
  - NavigatorUAData
browser-compat: api.NavigatorUAData.brands
---
{{DefaultAPISidebar("")}}

The **`brands`** read-only property of the {{domxref("NavigatorUAData")}} interface returns an array of brand information.

## Syntax

```js
let brands = NavigatorUAData.brands;
```

### Value

An array containing the following information for each brand:

- brand
  - : A {{domxref("DOMString","string")}} containing the brand. For example, `"Google Chrome"`.
- version
  - : A {{domxref("DOMString","string")}} containing the version. For example, `"91"`.

## Examples

The following example prints the value of {{domxref("NavigatorUAData.brands")}} to the console.

```js
console.log(navigator.userAgentData.brands);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
