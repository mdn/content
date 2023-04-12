---
title: "DeprecationReportBody: toJSON() method"
short-title: toJSON()
slug: Web/API/DeprecationReportBody/toJSON
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.DeprecationReportBody.toJSON
---

{{APIRef("Reporting API")}}{{SeeCompatTable}}

The **`toJSON()`** method of the {{domxref("DeprecationReportBody")}} interface is a _serializer_, and returns a JSON representation of the `InterventionReportBody` object.

## Syntax

```js-nolint
toJSON()
```

### Parameters

None.

### Return value

A JSON object that is the serialization of the {{domxref("DeprecationReportBody")}} object.

## Examples

In this example we create a new {{domxref("ReportingObserver")}} to observe deprecation reports, then return a JSON representation of the first entry.

```js
let options = {
  types: ["deprecation"],
  buffered: true,
};

let observer = new ReportingObserver((reports, observer) => {
  let firstReport = reports[0];
  console.log(firstReport.toJSON());
}, options);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
