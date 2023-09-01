---
title: "NavigatorUAData: brands property"
short-title: brands
slug: Web/API/NavigatorUAData/brands
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.NavigatorUAData.brands
---

{{APIRef("User-Agent Client Hints API")}}{{SeeCompatTable}}

The **`brands`** read-only property of the {{domxref("NavigatorUAData")}} interface returns an array of brand information.

## Value

An array containing the following information for each brand:

- `brand`
  - : A string containing the brand. For example, `"Google Chrome"`.
- `version`
  - : A string containing the version. For example, `"91"`.

## Examples

The following example prints the value of {{domxref("NavigatorUAData.brands")}} to the console.

```js
console.log(navigator.userAgentData.brands);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Sec-CH-UA")}} (a [low-entropy client hint](/en-US/docs/Web/HTTP/Client_hints#low_entropy_hints)) contains the same information.
