---
title: "WorkerNavigator: product property"
short-title: product
slug: Web/API/WorkerNavigator/product
page-type: web-api-instance-property
status:
  - deprecated
browser-compat: api.WorkerNavigator.product
---

{{APIRef("HTML DOM")}} {{Deprecated_Header}}{{AvailableInWorkers("worker")}}

The value of the **`WorkerNavigator.product`** property is always
`"Gecko"`, in any browser. This property is kept only for compatibility
purposes.

> [!NOTE]
> Do not rely on this property to return a real product name. All browsers return `"Gecko"` as the value of this property.

## Value

The string `"Gecko"`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WorkerNavigator.appCodeName")}}
- {{domxref("WorkerNavigator.appName")}}
