---
title: "COOPViolationReportBody: type property"
short-title: type
slug: Web/API/COOPViolationReportBody/type
page-type: web-api-instance-property
browser-compat: api.COOPViolationReportBody.type
---

{{APIRef("Reporting API")}}

The **`type`** read-only property of the {{domxref("COOPViolationReportBody")}} dictionary returns a value that indicates whether the violation is reported by the opened or opener document, and whether it was triggered by a navigation or an attempt to access an opened document that is blocked by the policy.

The fields present in the report depend on the type.

## Value

A string that can have one of the following values:

- `"access-to-opener"`
  - : The violation was caused Xxxxx

    For more information see [`access-to-opener` report](access-to-opener_report).

- `"navigation-to-response"`
  - : This report is from the opened document (that was navigated to) and indicates a policy violation that caused by a COOP policy mismatch.

    For more information see [`navigation-to-response` report](#navigation-to-response_report).

- `"navigation-from-response"`
  - : This report is from the opener document (that was navigated from) and indicates a policy violation that caused by a COOP policy mismatch.

    For more information see [`navigation-from-response` report](#navigation-from-response_report).

## Description

The type indicates whether the report is due to a navigation, and is from the perspective of the opener or opened document, or is caused by an attempt to access the opener.
It affects the properties that will be present in the reports.

The report types are described in the following sections.

### `navigation-to-response` report

A report from the perspective of the document that was opened during a navigation.

It indicates that the document that was navigated to was opened in a new {{glossary("Browsing context","browsing context group")}} (BCG) due to an enforced COOP, or should have been for a report-only COOP.

This is caused when the COOP policy of the opened document is incompatible with its opener.
For navigations this means that the opened document has a different COOP policy from its opener, or the same policy but they are not same-site (unless both documents have a COOP policy of [`unsafe-none`](/en-US/docs/Web/HTTP/Reference/Headers/Cross-Origin-Opener-Policy#unsafe-none)).

Report of type `navigation-to-response` have the following properties

- {{domxref("COOPViolationReportBody.disposition","disposition")}}: Whether the policy is enforced or reported.
- {{domxref("COOPViolationReportBody.effectivePolicy","effectivePolicy")}}: The policy of the opened document.
- {{domxref("COOPViolationReportBody.previousResponseURL","previousResponseURL")}}: The sanitized URL of document that was navigated from for same-origin navigations.
- {{domxref("COOPViolationReportBody.referrer","referrer")}} ????
- {{domxref("COOPViolationReportBody.type","type")}}: `navigation-to-response`

### `navigation-from-response` report

A report from the perspective of the opener document in a navigation

It indicates that the new document was, or should have been, opened in a new {{glossary("Browsing context","browsing context group")}} (BCG) due to a mismatch in policies.

The only difference when compared to a report for `navigation-to-response` is that other properties are associated with the opener.
For example, the {{domxref("COOPViolationReportBody.effectivePolicy","effectivePolicy")}} is that of the opener rather than the opened document.

Report of type `navigation-from-response` have the following properties

- {{domxref("COOPViolationReportBody.disposition","disposition")}}: Whether the policy is enforced or reported.
- {{domxref("COOPViolationReportBody.effectivePolicy","effectivePolicy")}}: The policy of the opener document.
- {{domxref("COOPViolationReportBody.nextResponseURL","nextResponseURL")}}: ???? If coopOrigin and nextResponseOrigin are same origin or isCOOPResponseNavigationSource is true, this is the sanitization of nextResponseURL, null otherwise.
- {{domxref("COOPViolationReportBody.type","type")}}: `navigation-from-response`

### `access-to-opener` report

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

### Get the type of a COOP violation report

In this example we create a new {{domxref("ReportingObserver")}} to observe COEP violation reports, then log the value of `type` to the console.

```js
const options = {
  types: ["coep"],
  buffered: true,
};

const observer = new ReportingObserver((reports, observer) => {
  const firstReport = reports[0];
  console.log(firstReport.type); // coep
  console.log(firstReport.body.type); // access-to-opener or one of the other types
}, options);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
