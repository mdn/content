---
title: HIDInputReportEvent
slug: Web/API/HIDInputReportEvent
tags:
  - API
  - Interface
  - Reference
  - HIDInputReportEvent
browser-compat: api.HIDInputReportEvent
---
{{securecontext_header}}{{DefaultAPISidebar("")}}

The **`HIDInputReportEvent`** interface of the {{domxref('WebHID API')}} is passed to {{domxref("HIDDevice.oninputreport")}} when an input report is received from any associated HID device.

## Description



## Properties

- {{domxref("HIDInputReportEvent.data")}}{{readonlyinline}}
  - : A {{jsxref("DataView")}} containing the data from the input report, excluding the `reportId` if the HID interface uses report IDs.
- {{domxref("HIDInputReportEvent.device")}}{{readonlyinline}}
  - : The {{domxref("HIDDevice")}} instance that represents the HID interface that sent the input report.
- {{domxref("HIDInputReportEvent.reportId")}}{{readonlyinline}}
  - : The one-byte identification prefix for this report, or 0 if the HID interface does not use report IDs.

## Methods

_This interface inherits methods from its parent, {{domxref("Event")}}._

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
