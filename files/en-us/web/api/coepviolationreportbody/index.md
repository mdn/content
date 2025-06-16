---
title: COEPViolationReportBody
slug: Web/API/COEPViolationReportBody
page-type: web-api-interface
browser-compat: api.COEPViolationReportBody
---

{{APIRef("Reporting API")}}

The `COEPViolationReportBody` dictionary represents the {{domxref("Report.body","body")}} of a {{domxref("Report")}} that has a {{domxref("Report.type","type")}} of `coep`.

It is used with the [Reporting API](/en-US/docs/Web/API/Reporting_API) in reports for [Cross-Origin-Embedder-Policy (COEP)](/en-US/docs/Web/HTTP/Reference/Headers/Cross-Origin-Embedder-Policy) policy violations.

> [!NOTE]
> This object does not derive from {{domxref("ReportBody")}} (unlike some other {{domxref("Report.body")}} values).

## Instance properties

- {{domxref("COEPViolationReportBody.type")}} {{ReadOnlyInline}}
  - : A string representing what kind of cross-origin embedding caused the violation.
- {{domxref("COEPViolationReportBody.blockedURL")}} {{ReadOnlyInline}}
  - : A string containing the URL of the blocked resource.
- {{domxref("COEPViolationReportBody.disposition")}} {{ReadOnlyInline}}
  - : A string indicating whether the violation was enforced or only reported.

## Description

A document's policies for loading and embedding cross-origin resources are configured and enforced using the {{httpheader("Cross-Origin-Embedder-Policy")}} HTTP header, and may also be reported but not enforced using the {{httpheader("Cross-Origin-Embedder-Policy-Report-Only")}} header.

COEP policy violations are reported using the [Reporting API](/en-US/docs/Web/API/Reporting_API) whenever a policy set by those headers blocks (or would block) the loading of a resource.

A COEP policy violation report is represented by a {{domxref("Report")}} instance that has the {{domxref("Report.type","type")}} of `coep` and a {{domxref("Report.body","body")}} property that is an object of this type.
Reports can be returned via the {{domxref("ReportingObserver")}} interface or serialized and sent in a `POST` to a [reporting server endpoint](/en-US/docs/Web/API/Reporting_API#reporting_server_endpoints).

To send to a reporting server endpoint the {{httpheader("Cross-Origin-Embedder-Policy")}} and/or {{httpheader("Cross-Origin-Embedder-Policy-Report-Only")}} headers used to set the policy must include the `report-to` parameter with a valid reporting endpoint name.
Valid endpoint names are defined using the {{httpheader("Reporting-Endpoints")}} header.

There are two main causes of violations, which are indicated by the value of the {{domxref("Report.type","type")}} property.
The first is a `navigation` violation, which is caused when an {{htmlelement("iframe")}} or other child browsing context attempts to load a new document or other resource that is not compatible with the embedder policy of its parent for cross origin isolation.
The second is a `"worker initialization"` violation, which is when a page attempts to load a dedicated worker with an embedder policy that is not compatible with the page policy for cross origin isolation.

In both cases "incompatible" means that the parent embedder policy requires cross origin isolation but the embedder policy of the child resource does not provide those guarantees of isolation.
If the resource isn't loaded into a child context (such as a frame), or if the parent does not require isolation, then the embedder policy of the loaded resource doesn't matter.

## Examples

### COEP report

In this example we create a new {{domxref("ReportingObserver")}} to observe coep reports, then log the first report to the console.

```js
const options = {
  types: ["coep"],
  buffered: true,
};

const observer = new ReportingObserver((reports, observer) => {
  const firstReport = reports[0];
  console.log(firstReport.type); // coep
  console.log(firstReport);
}, options);
```

The logged report object for a COEP violation from loading an iframe might look like this:

```json
[
  {
    "type": "coep",
    "url": "https://url-where-report-sent",
    "body": {
      "type": "navigation",
      "blockedURL": "https://url-of-frame-that-was-blocked",
      "disposition": "enforce"
    }
  }
]
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{httpheader("Reporting-Endpoints")}}
- [Reporting API](/en-US/docs/Web/API/Reporting_API)
- [The Reporting API](https://developer.chrome.com/docs/capabilities/web-apis/reporting-api)
