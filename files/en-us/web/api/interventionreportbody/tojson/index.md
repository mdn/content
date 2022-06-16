---
title: InterventionReportBody.toJSON()
slug: Web/API/InterventionReportBody/toJSON
page-type: web-api-instance-method
tags:
  - API
  - Method
  - Reference
  - Experimental
  - toJSON
  - InterventionReportBody
spec-urls: https://wicg.github.io/intervention-reporting/#dom-interventionreportbody-tojson
---
{{APIRef("Reporting API")}}{{SeeCompatTable}}

The **`toJSON()`** method of the {{domxref("InterventionReportBody")}} interface is a _serializer_, and returns a JSON representation of the `InterventionReportBody` object.

## Syntax

```js
toJSON()
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

This feature is not yet available by default in any released browser. It can be activated in Firefox by setting `dom_reporting_enabled` to `true` and in Chrome if you [enable this experimental feature](https://web.dev/reporting-api/#use-devtools).
