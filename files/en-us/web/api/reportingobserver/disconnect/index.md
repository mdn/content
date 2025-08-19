---
title: "ReportingObserver: disconnect() method"
short-title: disconnect()
slug: Web/API/ReportingObserver/disconnect
page-type: web-api-instance-method
browser-compat: api.ReportingObserver.disconnect
---

{{APIRef("Reporting API")}}{{AvailableInWorkers}}

The **`disconnect()`** method of the
{{domxref("ReportingObserver")}} interface stops a reporting observer that had
previously started observing from collecting reports.

After calling `disconnect()`, neither
{{domxref("ReportingObserver.takeRecords()")}} nor the `records` parameter of
the
[`ReportingObserver()`](/en-US/docs/Web/API/ReportingObserver/ReportingObserver)
callback will return any reports. The associated observer will no longer be active.

## Syntax

```js-nolint
disconnect()
```

### Parameters

None.

### Return value

None ({{jsxref("undefined")}}).

## Examples

```js
const options = {
  types: ["deprecation"],
  buffered: true,
};

const observer = new ReportingObserver((reports, observer) => {
  reportBtn.onclick = () => displayReports(reports);
}, options);

observer.observe();

// …

observer.disconnect();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Reporting API](/en-US/docs/Web/API/Reporting_API)
