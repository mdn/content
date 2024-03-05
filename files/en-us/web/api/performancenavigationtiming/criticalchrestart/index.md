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

Website can indicate that a particular Client Hint is critical to the page by including it in a {{HTTPHeader("Critical-CH")}} HTTP response header. Doing so will trigger a connection restart if the hint listed in the `Critical-CH` HTTP response header could be (but wasn't) included in the HTTP request initially sent.

The **`criticalCHRestart`** read-only property represents the time at which the connection restart occured.

## Value

A {{domxref("DOMHighResTimeStamp")}} representing the time after navigation {{domxref("PerformanceEntry.startTime")}} when the connection restart occured in milliseconds.

If the value is `0` the connection was not restarted.

## Examples

### Detecting connection restart pages

The following JavaScript can be used to see if the connection was restarted:

```js
let restartTime =
  performance?.getEntriesByType?.("navigation")[0]?.criticalCHRestart;
if (restartTime > 0) {
  console.log("Time at which connection restart happened: ", restartTime);
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
