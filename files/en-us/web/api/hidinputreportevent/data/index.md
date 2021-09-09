---
title: HIDInputReportEvent.data
slug: Web/API/HIDInputReportEvent/data
tags:
  - API
  - Property
  - Reference
  - data
  - HIDInputReportEvent
browser-compat: api.HIDInputReportEvent.data
---
{{securecontext_header}}{{DefaultAPISidebar("")}}

The **`data`**  property of the {{domxref("HIDInputReportEvent")}} interface returns a {{jsxref("DataView")}} containing the data from the input report, excluding the `reportId` if the HID interface uses report IDs.

## Syntax

```js
let aDataView = HIDInputReportEvent.data;
```

### Value

A {{jsxref("DataView")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
