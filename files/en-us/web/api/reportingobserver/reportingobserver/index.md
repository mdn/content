---
title: "ReportingObserver: ReportingObserver() constructor"
short-title: ReportingObserver()
slug: Web/API/ReportingObserver/ReportingObserver
page-type: web-api-constructor
browser-compat: api.ReportingObserver.ReportingObserver
---

{{APIRef("Reporting API")}}{{AvailableInWorkers}}

The **`ReportingObserver()`** constructor of the [Reporting API](/en-US/docs/Web/API/Reporting_API) creates a new
{{domxref("ReportingObserver")}} object instance, which can be used to collect and
access reports.

## Syntax

```js-nolint
new ReportingObserver(callback)
new ReportingObserver(callback, options)
```

### Parameters

- `callback`
  - : A callback function that runs when the observer starts to collect reports (i.e., via
    {{domxref("ReportingObserver.observe()")}}). The callback function is given two
    parameters:
    - `reports`
      - : A sequence of {{domxref("Report")}} objects representing
        the reports collected in the observer's report queue. This is probably the most
        common way to retrieve the reports.
    - `observer`
      - : A reference to the same `ReportingObserver`
        object, allowing for recursive report collection, etc.

- `options` {{optional_inline}}
  - : An object allowing you to set the options for creating the object. The available options are:
    - `types`
      - : An array of strings representing the types of report to be collected by this observer.
        Available types include:
        - `deprecation`
          - : Deprecated features used by the site.
            Reports are {{domxref("DeprecationReport")}} instances.
        - `integrity-violation`
          - : Violations of the page's integrity policy.  
            Reports are {{domxref("IntegrityViolationReport")}} instances.
        - `intervention`
          - : Features blocked by the user agent, for example, if an ad significantly impacts page performance.  
            Reports are {{domxref("InterventionReport")}} instances.
        - `csp-violation`
          - : Violations of the site's CSP policy.  
            Reports are {{domxref("CSPViolationReport")}} instances.
        - `crash`
          - : Browser crash reports.
            (crash reports aren't retrievable via a `ReportingObserver` but can be sent to a server).
            <!-- Reports are {{domxref("TBD")}} instances. -->

        If this option is omitted, all supported types are collected.

    - `buffered`
      - : a boolean that defines whether the reports that were
        generated before the observer was able to be created should be observable
        (`true`) or not (`false`).

## Examples

```js
const options = {
  types: ["deprecation"],
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
