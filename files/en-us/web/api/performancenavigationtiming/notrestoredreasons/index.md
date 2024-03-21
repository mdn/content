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

The **`notRestoredReasons`** read-only property returns an object providing report data on whether frames present in the current document were blocked from using the back/forward cache (bfcache) on navigation, and why.

## Value

When the `PerformanceNavigationTiming` object represents a history navigation, `notRestoredReasons` returns an object containing the following properties:

- `blocked`
  - : A boolean value specifying whether the navigated page is blocked from using the bfcache (`true`) or not (`false`).
- `childen`
  - : An array of objects representing the blocked state of any frames embedded in the top-level frame. Each object has the same structure as the parent object — this way, any number of levels of embedded frames can be represented inside the object recursively. If the frame has no children, the array will be empty.
- `id`
  - : A string representing the `id` attribute value of the frame (for example `<iframe id="foo" src="...">`). If the frame has no `id`, the value will be an empty string.
- `name`
  - : A string representing the `name` attribute value of the frame (for example `<iframe name="bar" src="...">`). If the frame has no `name`, the value will be an empty string.
- `reasons`
  - : An array of strings each representing a reason why the navigated page was blocked from using the bfcache. There are many different reasons why blocking could occur. See the [Blocking reasons](/en-US/docs/Web/API/Performance_API/Reporting_backforward_cache_not_restored_reasons#blocking_reasons) for more details.
- `src`
  - : A string representing the path to the frame's source (for example `<iframe src="b.html">`). If the frame has no `src`, the value will be an empty string.
- `url`
  - : A string representing the URL of the navigated page.

When the `PerformanceNavigationTiming` object does not represent a history navigation, the `notRestoredReasons` property will return `null`. This is useful for determining whether bfcache is not relevant to a particular navigation, as opposed to `notRestoredReasons` not being supported, in which case it would return `undefined`.

> **Note:** `notRestoredReasons` may return `null` despite the navigation type being reported as a back/forward navigation. These circumstances include duplicating a back/forward navigation in a new tab and restoring a back/forward navigation tab after a browser restart. In such cases, some browsers copy the navigation type from the original tab, but as these are not actually back/forward navigations, `notRestoredReasons` returns `null`.

## Examples

A [`PerformanceNavigationTiming`](/en-US/docs/Web/API/PerformanceNavigationTiming) instance can be obtained from features such as [`Performance.getEntriesByType()`](/en-US/docs/Web/API/Performance/getEntriesByType) and [`PerformanceObserver`](/en-US/docs/Web/API/PerformanceObserver).

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

The `PerformanceNavigationTiming.notRestoredReasons` property returns an object with the following structure, which represents the blocked state of the top-level frame:

```js
({
  blocked: true,
  children: [],
  id: "",
  name: "",
  reasons: ["Internal Error", "Unload handler"],
  src: "",
  url: "a.com",
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Reporting back/forward cache not restored reasons](/en-US/docs/Web/API/Performance_API/Reporting_backforward_cache_not_restored_reasons)
- {{domxref("PerformanceResourceTiming")}}
