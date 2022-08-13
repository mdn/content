---
title: HIDInputReportEvent.device
slug: Web/API/HIDInputReportEvent/device
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - device
  - HIDInputReportEvent
  - Experimental
browser-compat: api.HIDInputReportEvent.device
---
{{securecontext_header}}{{APIRef("WebHID API")}}{{SeeCompatTable}}

The **`device`**  property of the {{domxref("HIDInputReportEvent")}} interface returns the {{domxref("HIDDevice")}} instance that represents the HID interface that sent the input report.

## Value

An {{domxref("HIDDevice")}}.

## Examples

In the following example `device` is a {{domxref("HIDDevice")}} instance, representing the device sending the report. The `productName` of this device is logged to the console.

```js
device.addEventListener("inputreport", (event) => {
  const { data, device, reportId } = event;
  console.log(device.productName);
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
