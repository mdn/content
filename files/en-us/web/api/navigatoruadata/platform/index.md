---
title: NavigatorUAData.platform
slug: Web/API/NavigatorUAData/platform
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - platform
  - NavigatorUAData
  - Experimental
browser-compat: api.NavigatorUAData.platform
---
{{APIRef("User-Agent Client Hints API")}}{{SeeCompatTable}}

The **`platform`** read-only property of the {{domxref("NavigatorUAData")}} interface returns the platform brand information.

## Value

A string containing the platform brand.
For example, `"Windows"`.

## Examples

The following example prints the value of `platform` to the console.

```js
console.log(navigator.userAgentData.platform);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{HTTPHeader("Sec-CH-UA-Platform")}} header (a [low-entropy client hint](/en-US/docs/Web/HTTP/Client_hints#low_entropy_hints)) contains the same information.
