---
title: WorkerNavigator.userAgentData
slug: Web/API/WorkerNavigator/userAgentData
page-type: web-api-instance-property
tags:
  - API
  - Navigator
  - Property
  - Reference
  - NavigatorUAData
  - Experimental
browser-compat: api.WorkerNavigator.userAgentData
---
{{APIRef("User-Agent Client Hints API")}}{{SeeCompatTable}}

The **`userAgentData`** read-only property of the {{domxref("WorkerNavigator")}} interface returns an {{domxref("NavigatorUAData")}} object
which can be used to access the {{domxref("User-Agent Client Hints API")}}.

## Value

A {{domxref("NavigatorUAData")}} object.

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

- [Improving user privacy and developer experience with User-Agent Client Hints](https://web.dev/user-agent-client-hints/)
