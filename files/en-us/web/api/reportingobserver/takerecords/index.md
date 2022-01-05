---
title: ReportingObserver.takeRecords()
slug: Web/API/ReportingObserver/takeRecords
tags:
  - API
  - Experimental
  - Method
  - Reference
  - Reporting API
  - ReportingObserver
browser-compat: api.ReportingObserver.takeRecords
---
{{APIRef("Reporting API")}}{{SeeCompatTable}}

The **`takeRecords()`** method of the
{{domxref("ReportingObserver")}} interface returns the current list of reports contained
in the observer's report queue, and empties the queue.

## Syntax

```js
reportingObserverInstance.takeRecords()
```

### Return value

An array of {{domxref("Report")}} objects.

## Examples

```js
let options = {
  types: ['deprecation'],
  buffered: true
}

let observer = new ReportingObserver(function(reports, observer) {
  reportBtn.onclick = () => displayReports(reports);
}, options);

observer.observe()

// ...

let records = observer.takeRecords();
console.log(records);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Reporting API](/en-US/docs/Web/API/Reporting_API)
