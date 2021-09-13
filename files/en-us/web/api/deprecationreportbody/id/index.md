---
title: DeprecationReportBody.id
slug: Web/API/DeprecationReportBody/id
tags:
  - API
  - Property
  - Reference
  - id
  - DeprecationReportBody
browser-compat: api.DeprecationReportBody.id
---
{{APIRef("Reporting API")}}

The **`id`** read-only property of the {{domxref("DeprecationReportBody")}} interface returns a string representing the feature or API that is deprecated. This can be used to group or count related reports.

## Syntax

```js
let id = DeprecationReportBody.id;
```

### Value

A {{domxref("DOMString","string")}}.

## Examples

In this example we create a new {{domxref("ReportingObserver")}} to observe deprecation reports, then print the value of `id` to the console.

```js
let options = {
  types: ['deprecation'],
  buffered: true
}

let observer = new ReportingObserver(function(reports, observer) {
  let firstReport = reports[0];
  console.log(firstReport.type); // deprecation
  console.log(firstReport.body.id);
}, options);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
