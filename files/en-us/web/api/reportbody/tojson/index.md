---
title: ReportBody.toJSON()
slug: Web/API/ReportBody/toJSON
page-type: web-api-instance-method
tags:
  - API
  - Method
  - Reference
  - Experimental
  - toJSON
  - ReportBody
spec-urls: https://w3c.github.io/reporting/#dom-reportbody-tojson
---
{{APIRef("Reporting API")}}{{SeeCompatTable}}

The **`toJSON()`** method of the {{domxref("ReportBody")}} interface is a _serializer_, and returns a JSON representation of the `ReportBody` object.

## Syntax

```js
toJSON()
```

### Parameters

None.

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

This feature is not yet available by default in any released browser. It can be activated in Firefox by setting `dom_reporting_enabled` to `true` and in Chrome if you [enable this experimental feature](https://web.dev/reporting-api/#use-devtools).
