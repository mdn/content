---
title: DeprecationReportBody.anticipatedRemoval
slug: Web/API/DeprecationReportBody/anticipatedRemoval
tags:
  - API
  - Property
  - Reference
  - anticipatedRemoval
  - DeprecationReportBody
browser-compat: api.DeprecationReportBody.anticipatedRemoval
---
{{APIRef("Reporting API")}}

The **`anticipatedRemoval`** read-only property of the {{domxref("DeprecationReportBody")}} interface returns the date that the browser version which removes the feature will ship. This value can be used to prioritize warnings. If this property returns `null` because the date is unknown, then the deprecation should be considered low priority.

## Syntax

```js
let anticipatedRemoval = DeprecationReportBody.anticipatedRemoval;
```

### Value

A {{jsxref("date")}} object, or `null` if the date is not known.

## Examples

In this example we create a new {{domxref("ReportingObserver")}} to observe deprecation reports, then print the value of `anticipatedRemoval` to the console.

```js
let options = {
  types: ['deprecation'],
  buffered: true
}

let observer = new ReportingObserver(function(reports, observer) {
  let firstReport = reports[0];
  console.log(firstReport.type); // deprecation
  console.log(firstReport.body.anticipatedRemoval);
}, options);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
