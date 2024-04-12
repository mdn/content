---
title: "PerformanceNavigationTiming: notRestoredReasons property"
short-title: notRestoredReasons
slug: Web/API/PerformanceNavigationTiming/notRestoredReasons
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.PerformanceNavigationTiming.notRestoredReasons
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

The **`notRestoredReasons`** read-only property of the {{domxref("PerformanceNavigationTiming")}} interface returns a {{domxref("NotRestoredReasons")}} object providing report data on reasons why the current document was blocked from using the back/forward cache ({{Glossary("bfcache")}}) on navigation.

## Value

When the associated `PerformanceNavigationTiming` object represents a history navigation, `notRestoredReasons` returns a {{domxref("NotRestoredReasons")}} object.

When the `PerformanceNavigationTiming` object does not represent a history navigation, `notRestoredReasons` will return `null`. This is useful for determining whether bfcache is not relevant to a particular navigation (as opposed to `notRestoredReasons` not being supported, in which case it would return `undefined`).

> **Note:** `notRestoredReasons` may return `null` despite the navigation type being reported as a back/forward navigation. These circumstances include duplicating a back/forward navigation in a new tab and restoring a back/forward navigation tab after a browser restart. In such cases, some browsers copy the navigation type from the original tab, but as these are not actually back/forward navigations, `notRestoredReasons` returns `null`.

## Examples

[`PerformanceNavigationTiming`](/en-US/docs/Web/API/PerformanceNavigationTiming) data can be obtained from the performance timeline using [`Performance.getEntriesByType()`](/en-US/docs/Web/API/Performance/getEntriesByType) or [`PerformanceObserver`](/en-US/docs/Web/API/PerformanceObserver).

For example, you could invoke the following function to return all `PerformanceNavigationTiming` objects currently present in the performance timeline and log their `notRestoredReasons`:

```js
function returnNRR() {
  const navEntries = performance.getEntriesByType("navigation");
  for (let i = 0; i < navEntries.length; i++) {
    console.log(`Navigation entry ${i}`);
    let navEntry = navEntries[i];
    console.log(navEntry.notRestoredReasons);
  }
}
```

The `PerformanceNavigationTiming.notRestoredReasons` property returns an object with the following structure, which provides reasons why the current document was blocked from using the bfcache. In this example the top-level frame has no embedded child `<iframe>`s:

```js
{
  children: [],
  id: null,
  name: null,
  reasons: [
    { reason: "unload-listener" }
  ],
  src: "",
  url: "example.com",
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Monitoring bfcache blocking reasons](/en-US/docs/Web/API/Performance_API/Monitoring_bfcache_blocking_reasons)
- {{domxref("PerformanceResourceTiming")}}
