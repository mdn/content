---
title: ReportBody.toJSON()
slug: Web/API/ReportBody/toJSON
page-type: web-api-instance-method
browser-compat: api.ReportBody.toJSON
---

{{APIRef("Reporting API")}}

The **`toJSON()`** method of the {{domxref("ReportBody")}} interface is a _serializer_, and returns a JSON representation of the `ReportBody` object.

## Syntax

```js-nolint
toJSON()
```

### Parameters

None.

### Return value

A JSON object that is the serialization of the {{domxref("ReportBody")}} object.

## Examples

In this example we create a new {{domxref("ReportingObserver")}} to observe intervention reports, then return a JSON representation of the first entry. The report, and therefore the JSON object returned will be an instance of {{domxref("InterventionReportBody")}} which inherits from `ReportBody`.

```js
const options = {
  types: ["intervention"],
  buffered: true,
};

const observer = new ReportingObserver(([firstReport], observer) => {
  console.log(firstReport.toJSON());
}, options);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
