---
title: ReportingObserver.takeRecords()
slug: Web/API/ReportingObserver/takeRecords
page-type: web-api-instance-method
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
takeRecords()
```

### Parameters

None.

### Return value

An array of {{domxref("Report")}} objects.

## Examples

```js
const options = {
  types: ['deprecation'],
  buffered: true
}

const observer = new ReportingObserver((reports, observer) => {
  reportBtn.onclick = () => displayReports(reports);
}, options);

observer.observe()

// …

const records = observer.takeRecords();
console.log(records);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Reporting API](/en-US/docs/Web/API/Reporting_API)
