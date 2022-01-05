---
title: ReportBody.toJSON()
slug: Web/API/ReportBody/toJSON
tags:
  - API
  - Method
  - Reference
  - toJSON
  - ReportBody
browser-compat: api.ReportBody.toJSON
---
{{APIRef("Reporting API")}}

The **`toJSON()`** method of the {{domxref("ReportBody")}} interface is a _serializer_, and returns a JSON representation of the `ReportBody` object.

## Syntax

```js
ReportBody.toJSON();
```

### Parameters

None

### Return value

A JSON object that is the serialization of the {{domxref("ReportBody")}} object.

## Examples

In this example we create a new {{domxref("ReportingObserver")}} to observe intervention reports, then return a JSON representation of the first entry. The report, and therefore the JSON object returned will be an instance of {{domxref("InterventionReportBody")}} which inherits from `ReportBody`.

```js
let options = {
  types: ['intervention'],
  buffered: true
}

let observer = new ReportingObserver(function(reports, observer) {
  let firstReport = reports[0];
  console.log(firstReport.toJSON());
}, options);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
