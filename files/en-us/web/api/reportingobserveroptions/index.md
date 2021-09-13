---
title: ReportingObserverOptions
slug: Web/API/ReportingObserverOptions
tags:
  - API
  - Dictionary
  - Experimental
  - Reference
  - Reporting API
  - ReportingObserverOptions
browser-compat: api.ReportingObserverOptions
---
{{SeeCompatTable}}{{APIRef("Reporting API")}}

The `ReportingObserverOptions` dictionary of the [Reporting API](/en-US/docs/Web/API/Reporting_API) allows options to be set in the constructor when creating a {{domxref("ReportingObserver")}}.

## Properties

- `types`
  - : An array of strings representing the types of report to be collected by this observer. Available types include `deprecation`, `intervention`, and `crash`.
- `buffered`
  - : A boolean that defines whether the reports that were generated before the observer was able to be created should be observable (`true`) or not (`false`).

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
