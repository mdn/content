---
title: InterventionReportBody.message
slug: Web/API/InterventionReportBody/message
tags:
  - API
  - Property
  - Reference
  - message
  - InterventionReportBody
browser-compat: api.InterventionReportBody.message
---
{{APIRef("Reporting API")}}

The **`message`** read-only property of the {{domxref("InterventionReportBody")}} interface returns a human-readable description of the intervention, including information such as how the intervention could be avoided. This typically matches the message a browser will display in its DevTools console when an intervention is imposed, if one is available.

## Syntax

```js
let message = InterventionReportBody.message;
```

### Value

A {{domxref("DOMString","string")}}.

## Examples

In this example we create a new {{domxref("ReportingObserver")}} to observe intervention reports, then print the value of `message` to the console.

```js
let options = {
  types: ['intervention'],
  buffered: true
}

let observer = new ReportingObserver(function(reports, observer) {
  let firstReport = reports[0];
  console.log(firstReport.type); // intervention
  console.log(firstReport.body.message);
}, options);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
