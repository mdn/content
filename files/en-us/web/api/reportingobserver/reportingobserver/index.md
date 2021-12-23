---
title: ReportingObserver()
slug: Web/API/ReportingObserver/ReportingObserver
tags:
  - API
  - Constructor
  - Experimental
  - Reference
  - Reporting API
  - ReportingObserver
browser-compat: api.ReportingObserver.ReportingObserver
---
{{APIRef("Reporting API")}}{{SeeCompatTable}}

The **`ReportingObserver()`** constructor of the [Reporting API](/en-US/docs/Web/API/Reporting_API) creates a new
{{domxref("ReportingObserver")}} object instance, which can be used to collect and
access reports.

## Syntax

```js
new ReportingObserver(callback[, options]);
```

### Parameters

- `callback`

  - : A callback function that runs when the observer starts to collect reports (i.e. via
    {{domxref("ReportingObserver.observe()")}}). The callback function is given two
    parameters:

    - `reports`: A sequence of {{domxref("Report")}} objects representing
      the reports collected in the observer's report queue. This is probably the most
      common way to retrieve the reports.
    - `observer`: A reference to the same `ReportingObserver`
      object, allowing for recursive report collection, etc.

- `options` {{optional_inline}}

  - : An {{domxref("ReportingObserverOptions")}} object allowing you to set the options
    for creating the object. The available options are:

    - `types`: An array of strings representing the types of report to be
      collected by this observer. Available types include `deprecation`,
      `intervention`, and `crash` (although this last type usually
      isn't retrievable via a `ReportingObserver`).
    - `buffered`: a boolean that defines whether the reports that were
      generated before the observer was able to be created should be observable
      (`true`) or not (`false`).

## Examples

```js
let options = {
  types: ['deprecation'],
  buffered: true
}

let observer = new ReportingObserver(function(reports, observer) {
  reportBtn.onclick = () => displayReports(reports);
}, options);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Reporting API](/en-US/docs/Web/API/Reporting_API)
