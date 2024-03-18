---
title: "NavigatorUAData: mobile property"
short-title: mobile
slug: Web/API/NavigatorUAData/mobile
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.NavigatorUAData.mobile
---

{{APIRef("User-Agent Client Hints API")}}{{SeeCompatTable}}{{AvailableInWorkers}}

The **`mobile`** read-only property of the {{domxref("NavigatorUAData")}} interface returns a value indicating whether the device is a mobile device.

## Value

A {{jsxref("Boolean")}}, `true` if this is a mobile device.

## Examples

The following example prints the value of `mobile` to the console.

```js
console.log(navigator.userAgentData.mobile);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{HTTPHeader("Sec-CH-UA-Mobile")}} header (a [low-entropy client hint](/en-US/docs/Web/HTTP/Client_hints#low_entropy_hints)) contains the same information.
