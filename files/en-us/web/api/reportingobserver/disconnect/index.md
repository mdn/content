---
title: ReportingObserver.disconnect()
slug: Web/API/ReportingObserver/disconnect
tags:
  - API
  - Experimental
  - Method
  - Reference
  - Reporting API
  - ReportingObserver
browser-compat: api.ReportingObserver.disconnect
---
{{APIRef("Reporting API")}}{{SeeCompatTable}}

The **`disconnect()`** method of the
{{domxref("ReportingObserver")}} interface stops a reporting observer that had
previously started observing from collecting reports.

After calling `disconnect()`, neither
{{domxref("ReportingObserver.takeRecords()")}} nor the `records` parameter of
the
[`ReportingObserver()`](/en-US/docs/Web/API/ReportingObserver/ReportingObserver)
callback will return any reports. The associated observer will no longer be active.

## Syntax

```js
reportingObserverInstance.disconnect()
```

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

...

observer.disconnect()
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Reporting API](/en-US/docs/Web/API/Reporting_API)
