---
title: COOPViolationReportBody
slug: Web/API/COOPViolationReportBody
page-type: web-api-interface
browser-compat: api.COOPViolationReportBody
---

{{APIRef("Reporting API")}}

The `COOPViolationReportBody` dictionary represents the {{domxref("Report.body","body")}} of a report with the {{domxref("Report.type","type")}} of `coop`.

Reports with this type are used by the [Reporting API](/en-US/docs/Web/API/Reporting_API) to notify of violations of COOP policies set with the HTTP headers {{httpheader("Cross-Origin-Opener-Policy")}} and {{httpheader("Cross-Origin-Opener-Policy-Report-Only")}}.
A serialized version of the same report structure may also be sent to [reporting server endpoints](/en-US/docs/Web/API/Reporting_API#reporting_server_endpoints).

> [!NOTE]
> This object does not derive from {{domxref("ReportBody")}} (unlike some other {{domxref("Report.body")}} values).

## Instance properties

- {{domxref("COOPViolationReportBody.disposition")}} {{ReadOnlyInline}}
  - : A string indicating whether the report is for an `enforced` or a `reporting` policy violation.
- {{domxref("COOPViolationReportBody.effectivePolicy")}} {{ReadOnlyInline}}
  - : A string indicating the effective COOP policy of the document for which the violation report is being sent.
    This may be an enforced or reporting-only policy, depending on the {{domxref("COOPViolationReportBody.disposition","disposition")}}.
- {{domxref("COOPViolationReportBody.previousResponseURL")}} {{ReadOnlyInline}}
  - : A string indicating the sanitized URL of the opener of a document.
    This is reported for an opened document in a report with a body {{domxref("COOPViolationReportBody.type")}} of [`navigation-to-response`](#navigation-to-response_report).
- {{domxref("COOPViolationReportBody.nextResponseURL")}} {{ReadOnlyInline}}
  - : A string indicating the sanitized URL of the opened document.
    This is reported for an opener document in a report with a body {{domxref("COOPViolationReportBody.type")}} of [`navigation-from-response`](#navigation-from-response_report).
- {{domxref("COOPViolationReportBody.referrer")}} {{ReadOnlyInline}}
  - : A string representing Xxxxxx
- {{domxref("COOPViolationReportBody.type")}} {{ReadOnlyInline}}
  - : A string indicating type of violation report: [`navigation-from-response`](#navigation-from-response_report), [`navigation-from-response`](#navigation-from-response_report), or `access-to-opener`.
- {{domxref("COOPViolationReportBody.property")}} {{ReadOnlyInline}}
  - : A string representing whether XXXX
- {{domxref("COOPViolationReportBody.openerURL")}} {{ReadOnlyInline}}
  - : A string representing whether XXXX
- {{domxref("COOPViolationReportBody.sourceFile")}} {{ReadOnlyInline}}
  - : A string indicating the URL of the script that triggered the violation report.
- {{domxref("COOPViolationReportBody.lineNumber")}} {{ReadOnlyInline}}
  - : A string indicating the line number in the script that triggered the violation report.
- {{domxref("COOPViolationReportBody.columnNumber")}} {{ReadOnlyInline}}
  - : A string indicating the column number in the script that triggered the violation report.
- {{domxref("COOPViolationReportBody.openedWindowURL")}} {{ReadOnlyInline}}
  - : A string representing whether XXXX
- {{domxref("COOPViolationReportBody.openedWindowInitialURL")}} {{ReadOnlyInline}}
  - : A string representing whether XXXX

<!--
// https://html.spec.whatwg.org/multipage/browsers.html#coop-violation-navigation-to
// https://html.spec.whatwg.org/multipage/browsers.html#coop-violation-navigation-from
// https://html.spec.whatwg.org/multipage/browsers.html#coop-violation-access-to-opener
//https://html.spec.whatwg.org/multipage/browsers.html#coop-violation-access-from-opened
/// https://html.spec.whatwg.org/multipage/browsers.html#coop-violation-access-to-opened
There might be more
-->

## Description

When navigating to a new document, or using {{domxref("window.open()")}} to open a document, the new document may be opened in the same {{glossary("Browsing context","browsing context group (BCG)")}} as the original document, or in a new BCG.
If a document is opened in a new BCG it is [cross-origin isolated](/en-US/docs/Web/API/Window/crossOriginIsolated) from the original document, which closes a number of paths for malicious code.

Whether or not a document is opened in a new BCG depends on the cross-origin opener policy of _both_ documents and may also depend on whether the documents are same-origin or cross-origin.
Document policies can be set and enforced using the {{httpheader("Cross-Origin-Opener-Policy")}} HTTP header, or set and reported-on (but not enforced) using the {{httpheader("Cross-Origin-Opener-Policy-Report-Only")}} header.

COOP policy violations may be reported using the [Reporting API](/en-US/docs/Web/API/Reporting_API) whenever a policy causes (or would cause) a document to be opened in a new BCG, or if the opened document attempts to access its opener.

A COOP policy violation report is represented by a {{domxref("Report")}} instance that has the {{domxref("Report.type","type")}} of `coop` and a {{domxref("Report.body","body")}} property that is an object of this type.
Reports can be returned via the {{domxref("ReportingObserver")}} interface or serialized and sent in a `POST` to a [reporting server endpoint](/en-US/docs/Web/API/Reporting_API#reporting_server_endpoints).

To send to a reporting server endpoint the {{httpheader("Cross-Origin-Opener-Policy")}} and/or {{httpheader("Cross-Origin-Opener-Policy-Report-Only")}} headers used to set the policy must include the `report-to` parameter with a valid reporting endpoint name.
Valid endpoint names are defined using the {{httpheader("Reporting-Endpoints")}} header.

### Reporting enforcement and report-only policy violations

The `Cross-Origin-Opener-Policy` header is used to enforce a COOP policy for a particular document.
The policy effectively defines the policy(s) that other documents must have in order to open or navigate to the document in the same BCG, and in order to be opened or navigated from this document and remain in the same BCG.

The `Cross-Origin-Opener-Policy-Report-Only` can be used to test the effect of enforcing a COOP policy for a particular document.
When the document opens or is opened by another document its reporting-only policy is compared to the actual policy of the other document to determine if there would be a violation and send an appropriate report.

A document can set `Cross-Origin-Opener-Policy` and/or `Cross-Origin-Opener-Policy-Report-Only` headers.
These can have the same or different policies and reporting endpoints.

### Types of reports

Different reports are sent depending on whether the reporter is the opener or opened document in a navigation, or if the report is for a COOP access violation.
The types of these reports is indicated by the body {{domxref("COOPViolationReportBody.type")}} property (the {{domxref("Report.type")}} is `coep` for all of these).

#### `navigation-to-response` report

This type of report is sent to the COOP reporting endpoint, if specified, of a document that is navigated-to (opened) in a navigation.

For an enforced COOP policy, it indicates that the document was opened in a new BCG.
This occurs when the COOP policy of the opened document is incompatible with that of its opener.
For navigations this means that the opened document has a different COOP policy from its opener, or the same policy but they are not same-site (unless both documents have a COOP policy of [`unsafe-none`](/en-US/docs/Web/HTTP/Reference/Headers/Cross-Origin-Opener-Policy#unsafe-none)).

For a report-only COOP policy, it indicates the report-only COOP policy is incompatible with the (enforced) policy of its opener.
In other words, that the report-only policy set in `Cross-Origin-Opener-Policy-Report-Only` would result in a violation if it was enforced.

The report has the following properties:

- {{domxref("COOPViolationReportBody.type","type")}}: `navigation-to-response`
- {{domxref("COOPViolationReportBody.disposition","disposition")}}: Whether the report is for an `enforced` or `reporting` policy.
- {{domxref("COOPViolationReportBody.effectivePolicy","effectivePolicy")}}: The effective policy of the opened document.
  This may be an enforced or reporting-only policy, depending on the {{domxref("COOPViolationReportBody.disposition","disposition")}}.
- {{domxref("COOPViolationReportBody.previousResponseURL","previousResponseURL")}}: The sanitized URL of the previous document (that was navigated from), or `null` for cross-origin navigations.
  This is the URL of the opener.
  It might be the same URL as the {{domxref("COOPViolationReportBody.referrer","referrer")}} or it might be an intermediate redirect URL.
- {{domxref("COOPViolationReportBody.referrer","referrer")}}: The original URL that started the navigation chain that resulted in this report.

#### `navigation-from-response` report

This type of report is sent to the COOP reporting endpoint, if specified, of an document that is navigated-from in a navigation.

For an enforced COOP policy, it indicates that the document that was navigated to was opened in a new BCG.
This occurs when the COOP policy of the opened document is incompatible with that of its opener.
For navigations this means that the opened document has a different COOP policy from its opener, or the same policy but they are not same-site (unless both documents have a COOP policy of [`unsafe-none`](/en-US/docs/Web/HTTP/Reference/Headers/Cross-Origin-Opener-Policy#unsafe-none)).

For a report-only COOP policy, it indicates the report-only COOP policy of the opener is incompatible with the (enforced) policy of the page that is being navigated to.
In other words, that the report-only policy set in `Cross-Origin-Opener-Policy-Report-Only` would result in a violation if it was enforced.

Report of type `navigation-from-response` have the following propertiesL

- {{domxref("COOPViolationReportBody.type","type")}}: `navigation-from-response`
- {{domxref("COOPViolationReportBody.disposition","disposition")}}: Whether the report is for an `enforced` or `reporting` policy.
- {{domxref("COOPViolationReportBody.effectivePolicy","effectivePolicy")}}: The policy of the opener document.
  This may be an enforced or reporting-only policy, depending on the {{domxref("COOPViolationReportBody.disposition","disposition")}}.
- {{domxref("COOPViolationReportBody.nextResponseURL","nextResponseURL")}}: The sanitized URL of the opened document (that was navigated to), or `null` for cross origin navigations.

#### `access-to-opener` report

<!--

- {{domxref("COOPViolationReportBody.disposition","disposition")}}
- {{domxref("COOPViolationReportBody.effectivePolicy","effectivePolicy")}}
- {{domxref("COOPViolationReportBody.previousResponseURL","previousResponseURL")}}
- {{domxref("COOPViolationReportBody.nextResponseURL","nextResponseURL")}}
- {{domxref("COOPViolationReportBody.referrer","referrer")}}
- {{domxref("COOPViolationReportBody.type","type")}}
- {{domxref("COOPViolationReportBody.property","property")}}
- {{domxref("COOPViolationReportBody.openerURL","openerURL")}}
- {{domxref("COOPViolationReportBody.sourceFile","sourceFile")}}
- {{domxref("COOPViolationReportBody.lineNumber","lineNumber")}}
- {{domxref("COOPViolationReportBody.columnNumber","columnNumber")}}
- {{domxref("COOPViolationReportBody.openedWindowURL","openedWindowURL")}}
- {{domxref("COOPViolationReportBody.openedWindowInitialURL","openedWindowInitialURL")}}
-->

## Examples

### COEP report

In this example we create a new {{domxref("ReportingObserver")}} to observe COOP reports, then log the first report to the console.

```js
const options = {
  types: ["coop"],
  buffered: true,
};

const observer = new ReportingObserver((reports, observer) => {
  const firstReport = reports[0];
  console.log(firstReport.type); // coop
  console.log(firstReport);
}, options);
```

The logged report object for a COOP violation from loading an iframe might look like this:

```json

```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{httpheader("Reporting-Endpoints")}}
- [Reporting API](/en-US/docs/Web/API/Reporting_API)
- [The Reporting API](https://developer.chrome.com/docs/capabilities/web-apis/reporting-api)
