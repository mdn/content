---
title: ReportingObserver.observe()
slug: Web/API/ReportingObserver/observe
page-type: web-api-instance-method
tags:
  - API
  - Experimental
  - Method
  - Reference
  - Reporting API
  - ReportingObserver
  - observe
browser-compat: api.ReportingObserver.observe
---
{{APIRef("Reporting API")}}{{SeeCompatTable}}

The **`observe()`** method of the
{{domxref("ReportingObserver")}} interface instructs a reporting observer to start
collecting reports in its report queue.

## Syntax

```js
observe()
```

### Parameters

None.

### Return value

None ({{jsxref("undefined")}}).

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
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Reporting API](/en-US/docs/Web/API/Reporting_API)
