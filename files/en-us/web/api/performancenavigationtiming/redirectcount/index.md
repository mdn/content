---
title: PerformanceNavigationTiming.redirectCount
slug: Web/API/PerformanceNavigationTiming/redirectCount
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - Web Performance
browser-compat: api.PerformanceNavigationTiming.redirectCount
---

{{APIRef("Performance API")}}

The **`redirectCount`** read-only property returns number representing the amount of redirects since the last non-redirect navigation in the current browsing context.

The higher the amount of redirects on a page, the higher is the page load time. You want to avoid multiple redirects to improve the performance of your web page.

The {{domxref("PerformanceResourceTiming.redirectStart", "redirectStart")}} and {{domxref("PerformanceResourceTiming.redirectEnd", "redirectEnd")}} properties can be used to measure redirection time. Note that they will return `0` for cross-origin redirects.

Note that client side redirects, such as `<meta http-equiv="refresh" content="0; url=https://example.com/">` are not considered here.

## Value

The `redirectCount` property can have the following values:

- A number representing the amount of redirects since the last non-redirect navigation in the current browsing context.
- `0` if the redirect is cross-origin.

## Examples

### Logging entries with redirects

The following example checks if there are one or more redirects and logs the entry's name and the redirection time if available.

```js
const resources = performance.getEntriesByType("navigation");
resources.forEach((entry) => {
  const name = entry.name;
  const redirectCount = entry.redirectCount;
  const redirectTime = entry.redirectEnd - entry.redirectStart;
  if (redirectCount > 0) {
    console.log(`${name}: Redirect count: ${redirectCount}`);
    if (redirectTime > 0) {
      console.log(`${name}: Redirect time: ${redirectTime}ms`);
    }
  }
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("PerformanceResourceTiming.redirectStart")}}
- {{domxref("PerformanceResourceTiming.redirectEnd")}}
