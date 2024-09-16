---
title: "CSPViolationReportBody: toJSON() method"
short-title: toJSON()
slug: Web/API/CSPViolationReportBody/toJSON
page-type: web-api-instance-method
browser-compat: api.CSPViolationReportBody.toJSON
---

{{APIRef("Reporting API")}}

The **`toJSON()`** method of the {{domxref("CSPViolationReportBody")}} interface is a _serializer_, which returns a JSON representation of the `CSPViolationReportBody` object.

The existence of a `toJSON()` method allows `CSPViolationReportBody` objects to be converted to a string using the {{jsxref("JSON.stringify()")}} method.

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
    // Log JSON object
    console.log(firstReport.toJSON());
    // Log JSON object as a string
    console.log(JSON.stringify(firstReport));
  },
  {
    types: ["csp-violation"],
    buffered: true,
  },
);

observer.observe();
```

We call `toJSON()` on the `firstReport`, which is a {{domxref("Report")}} instance, which in turn results in the `toJSON()` defined in this interface being called to serialize the `body` of the report.

For the purpose of demonstration we also call `JSON.stringify()` on `firstReport` to create a string containing the JSON data.
When sending or storing report information it is more common to do this than use `toJSON()` directly.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
