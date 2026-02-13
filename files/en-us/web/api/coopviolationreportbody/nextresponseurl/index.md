---
title: "COOPViolationReportBody: nextResponseURL property"
short-title: nextResponseURL
slug: Web/API/COOPViolationReportBody/nextResponseURL
page-type: web-api-instance-property
browser-compat: api.COOPViolationReportBody.nextResponseURL
---

{{APIRef("Reporting API")}}

The **`nextResponseURL`** read-only property of the {{domxref("COOPViolationReportBody")}} dictionary indicates the sanitized URL of the document opened by the current document for same-origin navigations.

This is sent in a report for the navigated-from page in a navigation to indicate the URL of the document that was opened.
The report has a {{domxref("COOPViolationReportBody.type","type")}} of [navigation-from-response](/en-US/docs/Web/API/COOPViolationReportBody/type#navigation-from-response).

## Value

This is a string indicating the URL of the opener document in a navigation, if the opener and opened documents are same-origin.
If the documents are not same origin the value is `null`.

The URL is sanitized of user credentials and any URL fragment is removed.

## Examples

### Get the nextResponseURL of a COOP violation report

In this example we create a new {{domxref("ReportingObserver")}} to observe COEP violation reports, then log the value of `nextResponseURL` to the console.

```js
const options = {
  types: ["coop"],
  buffered: true,
};

const observer = new ReportingObserver((reports, observer) => {
  const firstReport = reports[0];
  console.log(firstReport.type); // coop
  console.log(firstReport.body.type); // navigation-from-response
  console.log(firstReport.body.nextResponseURL); // A sanitized URL or null
}, options);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
