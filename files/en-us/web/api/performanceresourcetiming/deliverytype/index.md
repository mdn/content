---
title: "PerformanceResourceTiming: deliveryType property"
short-title: deliveryType
slug: Web/API/PerformanceResourceTiming/deliveryType
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.PerformanceResourceTiming.deliveryType
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

The **`deliveryType`** read-only property is a string indicating how the resource was delivered — for example, indicating whether the resource was delivered from the cache.

## Value

The `deliveryType` property can have the following values:.

- `cache`
  - : If the resource was retrieved from the cache
- `""` (empty string)
  - : If none of the other defined delivery types

This set of delivery types is expected to be expanded in the future — for example, to indicate preloaded resources and to indicate prefetched navigation requests.

## Examples

### Filtering resources

The `deliveryType` property can be used to get specific resource timing entries only; for example, only those that were cached.

The following example uses a {{domxref("PerformanceObserver")}} to notify of new `resource` performance entries as they are recorded in the browser's performance timeline. The `buffered` option is used for accessing entries from before the observer creation.

```js
const observer = new PerformanceObserver((list) => {
  const cachedResources = list.getEntries().filter((entry) => {
    return entry.deliveryType === "cache";
  });
  console.log(cachedResources);
});

observer.observe({ type: "resource", buffered: true });
```

The following example uses {{domxref("Performance.getEntriesByType()")}}, which only shows `resource` performance entries present in the browser's performance timeline at the time you call the method.

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
