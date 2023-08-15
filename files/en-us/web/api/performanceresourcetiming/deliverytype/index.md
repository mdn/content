---
title: "PerformanceResourceTiming: deliveryType property"
short-title: deliveryType
slug: Web/API/PerformanceResourceTiming/deliveryType
page-type: web-api-instance-property
browser-compat: api.PerformanceResourceTiming.deliveryType
---

{{APIRef("Performance API")}}

The **`deliveryType`** read-only property is a string representing web platform feature that exposes information about how the resource was delivered. For example, resources which were delivered from the cache.

## Value

The `deliveryType` property can have the following values:.

- `cache`
  - : If the request was retrieved from the cache.
- `""` (empty string)
  - : The empty string is returned otherwise.

This is expected to be expanded by future updates to this specification, e.g. to describe consuming preloaded resources and prefetched navigation requests.

## Examples

### Filtering resources

The `deliveryType` property can be used to get specific resource timing entries only. For example, only those that were cached.

Example using a {{domxref("PerformanceObserver")}}, which notifies of new `resource` performance entries as they are recorded in the browser's performance timeline. Use the `buffered` option to access entries from before the observer creation.

```js
const observer = new PerformanceObserver((list) => {
  const cachedResources = list.getEntries().filter((entry) => {
    return entry.deliveryType === "cache";
  });
  console.log(cachedResources);
});

observer.observe({ type: "resource", buffered: true });
```

Example using {{domxref("Performance.getEntriesByType()")}}, which only shows `resource` performance entries present in the browser's performance timeline at the time you call this method:

```js
const scripts = performance.getEntriesByType("resource").filter((entry) => {
  return entry.deliveryType === "cache";
});
console.log(scripts);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
