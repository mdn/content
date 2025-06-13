---
title: "COEPViolationReportBody: type property"
short-title: type
slug: Web/API/COEPViolationReportBody/type
page-type: web-api-instance-property
browser-compat: api.COEPViolationReportBody.type
---

{{APIRef("Reporting API")}}{{AvailableInWorkers}}

The **`type`** read-only property of the {{domxref("COEPViolationReportBody")}} dictionary returns a value that indicates the cause of the violation, such as embedding a child resource or loading a dedicated worker.

## Value

A string that can have one of the following values:

- `"navigation"`
  - : The violation was caused by an {{htmlelement("iframe")}} or other child browsing context attempting to load a new document.
- `"worker initialization"`
  - : The violation was caused by a page attempting to load a dedicated worker.

## Examples

### Get the type of a COEP violation report

In this example we create a new {{domxref("ReportingObserver")}} to observe COEP violation reports, then log the value of `type` to the console.

```js
const options = {
  types: ["coep"],
  buffered: true,
};

const observer = new ReportingObserver((reports, observer) => {
  const firstReport = reports[0];
  console.log(firstReport.type); // coep
  console.log(firstReport.body.type); // navigation or worker initialization
}, options);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
