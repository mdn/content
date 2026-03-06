---
title: "ReportingObserver: ReportingObserver() constructor"
short-title: ReportingObserver()
slug: Web/API/ReportingObserver/ReportingObserver
page-type: web-api-constructor
browser-compat: api.ReportingObserver.ReportingObserver
---

{{APIRef("Reporting API")}}{{AvailableInWorkers}}

The **`ReportingObserver()`** constructor of the [Reporting API](/en-US/docs/Web/API/Reporting_API) creates a new {{domxref("ReportingObserver")}} object instance, which can be used to collect and access reports.

## Syntax

```js-nolint
new ReportingObserver(callback)
new ReportingObserver(callback, options)
```

### Parameters

- `callback`
  - : A callback function that runs when the observer starts to collect reports (i.e., via {{domxref("ReportingObserver.observe()")}}).
    The callback function is given two parameters:
    - `reports`
      - : A sequence of objects representing the reports collected in the observer's report queue.

        Report objects are expected to have the following properties:
        - `body`
          - : An object representing the body of the report.
            The structure of the report (in particular of its body), depends on its [`type`](#type).
        - `type`
          - : A string indicating the type of the report.
            For information on report types see [`options.types`](#types) below.
        - `url`
          - : A string representing the URL of the document that generated the report.

    - `observer`
      - : A reference to the same `ReportingObserver` object, allowing for recursive report collection, and so on.

- `options` {{optional_inline}}
  - : An object allowing you to set the options for creating the object.
    The available options are:
    - `types`
      - : An array of strings representing the types of report to be collected by this observer.
        Available types include:
        - `coep`
          - : Violations of the site's {{httpheader("Cross-Origin-Embedder-Policy")}} (COEP).
            Reports are {{domxref("COEPViolationReport")}} instances.
        - `crash`
          - : Browser crash reports.
            (crash reports aren't retrievable via a `ReportingObserver` but can be sent to a server).
        - `csp-violation`
          - : Violations of the site's CSP policy.
            Reports are {{domxref("CSPViolationReport")}} instances.
        - `deprecation`
          - : Deprecated features used by the site.
            Reports are {{domxref("DeprecationReport")}} instances.
        - `integrity-violation`
          - : Violations of the page's integrity policy.
            Reports are {{domxref("IntegrityViolationReport")}} instances.
        - `intervention`
          - : Features blocked by the user agent, for example, if an ad significantly impacts page performance.
            Reports are {{domxref("InterventionReport")}} instances.

        If this option is omitted, all supported types are collected.

    - `buffered`
      - : A boolean that defines whether the reports that were generated before the observer was able to be created should be observable (`true`) or not (`false`).

## Examples

### Display specific report types

This code shows how to create a `ReportingObserver` that could be used to observe [`deprecation`](#deprecation) and [`integrity-violation`](#integrity-violation) reports.

```js
const options = {
  types: ["deprecation", "integrity-violation"],
  buffered: true,
};

const observer = new ReportingObserver((reports, observer) => {
  reportBtn.onclick = () => displayReports(reports);
}, options);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Reporting API](/en-US/docs/Web/API/Reporting_API)
