---
title: COEPViolationReportBody
slug: Web/API/COEPViolationReportBody
page-type: web-api-interface
browser-compat: api.COEPViolationReportBody
---

{{APIRef("Reporting API")}}

The `COEPViolationReportBody` dictionary represents the {{domxref("Report.body","body")}} of an [Cross-Origin-Embedder-Policy (COEP)](/en-US/docs/Web/HTTP/Reference/Headers/Cross-Origin-Embedder-Policy) policy violation report.

> [!NOTE]
> This object does not derive from {{domxref("ReportBody")}} (unlike other {{domxref("Report.body")}} values).

## Instance properties

- {{domxref("COEPViolationReportBody.type")}} {{ReadOnlyInline}}
  - : A string representing whether the violation was caused by loading a child resource or a dedicated worker.
- {{domxref("COEPViolationReportBody.blockedURL")}} {{ReadOnlyInline}}
  - : A string containing the URL of the blocked resource.
- {{domxref("COEPViolationReportBody.disposition")}} {{ReadOnlyInline}}
  - : A string representing whether the violation blocked resource loading or was only reported on.

<!--
- {{domxref("COEPViolationReportBody.destination")}} {{ReadOnlyInline}}
  - : A string indicating the parent navigable for which loading was was blocked: `"iframe"`.
-->

## Description

COEP policy violations are reported using the [Reporting API](/en-US/docs/Web/API/Reporting_API) generic reporting framework.

The reports are enabled by setting the `report-to` parameter with a valid reporting endpoint name on the {{httpheader("Cross-Origin-Embedder-Policy")}} and/or {{httpheader("Cross-Origin-Embedder-Policy-Report-Only")}} headers used to set the policy.
Valid endpoint names are defined using the {{httpheader("Reporting-Endpoints")}} header.

Violation reports are generated whenever a policy set by {{httpheader("Cross-Origin-Embedder-Policy")}} or {{httpheader("Cross-Origin-Embedder-Policy-Report-Only")}} blocks or would block the loading of a resource, respectively.

A report is a {{domxref("Report")}} instance which has the {{domxref("Report.type","type")}} of `coep` and a {{domxref("Report.body","body")}} property that is an object of this type.
Reports can be returned via the {{domxref("ReportingObserver")}} interface or serialized and sent in a `POST` to the reporting endpoint.

There are two may causes of violations, which are indicated by the value of the {{domxref("Report.type","type")}} property.
The first is a `navigation` violation, which is caused when an {{htmlelement("iframe")}} or other child browsing context attempts to load a new document or other resource that is not compatible with the embedder policy of its parent for cross origin isolation.
The second is a `"worker initialization"` violation, which is when a page attempts to load a dedicated worker with an embedder policy that is not compatible with the page policy for cross origin isolation.

In both cases "incompatible" means that the parent embedder policy requires cross origin isolation but the embedder policy of the child resource does not provide those that isolation.
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
