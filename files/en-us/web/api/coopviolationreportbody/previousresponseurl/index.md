---
title: "COOPViolationReportBody: previousResponseURL property"
short-title: previousResponseURL
slug: Web/API/COOPViolationReportBody/previousResponseURL
page-type: web-api-instance-property
browser-compat: api.COOPViolationReportBody.previousResponseURL
---

{{APIRef("Reporting API")}}

The **`previousResponseURL`** read-only property of the {{domxref("COOPViolationReportBody")}} dictionary indicates the sanitized URL of the opener of the current document for same-origin navigations.

Note that if there are redirects, this may not be the original URL that triggered the navigation.

This is sent in a report for a page opened in a navigation, with a body {{domxref("COOPViolationReportBody.type","type")}} of [navigation-to-response](/en-US/docs/Web/API/COOPViolationReportBody/type#navigation-to-response), to indicate the URL of its opener.

## Value

This is a string indicating the URL of the opener document in a navigation, if the opener and opened documents are same-origin.
If the documents are not same origin the value is `null`.

The URL is sanitized of user credentials and any URL fragment is removed.

## Examples

### Get the previousResponseURL of a COOP violation report

In this example we create a new {{domxref("ReportingObserver")}} to observe COEP violation reports, then log the value of `previousResponseURL` to the console.

```js
const options = {
  types: ["coep"],
  buffered: true,
};

const observer = new ReportingObserver((reports, observer) => {
  const firstReport = reports[0];
  console.log(firstReport.type); // coep
  console.log(firstReport.body.type); // navigation-to-response
  console.log(firstReport.body.previousResponseURL); // A sanitized URL or null
}, options);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
