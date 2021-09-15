---
title: InterventionReportBody.toJSON()
slug: Web/API/InterventionReportBody/toJSON
tags:
  - API
  - Method
  - Reference
  - toJSON
  - InterventionReportBody
browser-compat: api.InterventionReportBody.toJSON
---
{{APIRef("Reporting API")}}

The **`toJSON()`** method of the {{domxref("InterventionReportBody")}} interface is a _serializer_, and returns a JSON representation of the `InterventionReportBody` object.

## Syntax

```js
InterventionReportBody.toJSON();
```

### Parameters

None.

### Return value

A JSON object that is the serialization of the {{domxref("InterventionReportBody")}} object.

## Examples

In this example we create a new {{domxref("ReportingObserver")}} to observe intervention reports, then return a JSON representation of the first entry.

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
