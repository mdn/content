---
title: "PerformanceNavigationTiming: criticalCHRestart property"
short-title: criticalCHRestart
slug: Web/API/PerformanceNavigationTiming/criticalCHRestart
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.PerformanceNavigationTiming.criticalCHRestart
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

A website can indicate that a particular [Client Hint](/en-US/docs/Web/HTTP/Client_hints) is critical to the page by including it in a {{HTTPHeader("Critical-CH")}} HTTP response header (as well as the {{HTTPHeader("Accept-CH")}} HTTP request header which is needed for all client hints whether critical or not). Doing so will trigger a connection restart if the hint listed in the `Critical-CH` HTTP response header could have been, but wasn't, included in the HTTP request initially sent. If the browser does not support that client hint, it is ignored and no connection restart occurs.

The **`criticalCHRestart`** read-only property represents the time at which the connection restart occurred.

## Value

A {{domxref("DOMHighResTimeStamp")}} representing the number of milliseconds elapsed since {{domxref("PerformanceEntry.startTime")}} when the connection restart occurred in milliseconds.

If the value is `0` the connection was not restarted.

## Examples

### Detecting connection restart pages

The following JavaScript can be used to see if the connection was restarted:

```js
const restartTime =
  performance?.getEntriesByType?.("navigation")[0]?.criticalCHRestart;
if (restartTime > 0) {
  console.log("Time at which connection restart happened:", restartTime);
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Client hints](/en-US/docs/Web/HTTP/Client_hints)
- [User-Agent Client Hints API](/en-US/docs/Web/API/User-Agent_Client_Hints_API)
- [Improving user privacy and developer experience with User-Agent Client Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
- {{HTTPHeader("Accept-CH")}}
- {{HTTPHeader("Critical-CH")}}
