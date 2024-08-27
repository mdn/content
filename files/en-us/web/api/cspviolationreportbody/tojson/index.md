---
title: "CSPViolationReportBody: toJSON() method"
short-title: toJSON()
slug: Web/API/CSPViolationReportBody/toJSON
page-type: web-api-instance-method
browser-compat: api.CSPViolationReportBody.toJSON
---

{{APIRef("Reporting API")}}

The **`toJSON()`** method of the {{domxref("CSPViolationReportBody")}} interface is a _serializer_, which returns a JSON representation of the `CSPViolationReportBody` object.

This is used by the reporting API when creating a serialized version of a violation report to send to a reporting endpoint.

## Syntax

```js-nolint
toJSON()
```

### Parameters

None.

### Return value

A JSON object that is the serialization of the {{domxref("CSPViolationReportBody")}} object.

## Examples

In this example we create a new {{domxref("ReportingObserver")}} to observe CSP violation reports, then return a JSON representation of the first entry.

```js
const observer = new ReportingObserver(
  (reports, observer) => {
    const firstReport = reports[0];
    console.log(firstReport.toJSON());
  },
  {
    types: ["csp-violation"],
    buffered: true,
  },
);

observer.observe();
```

Note that we call `toJSON()` on the `firstReport`, which is a {{domxref("Report")}} instance.
This results in the `toJSON()` in this interface being called to serialize the `body` of the report.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
