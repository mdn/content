---
title: "PerformanceResourceTiming: deliveryType property"
short-title: deliveryType
slug: Web/API/PerformanceResourceTiming/deliveryType
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.PerformanceResourceTiming.deliveryType
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}{{SeeCompatTable}}

The **`deliveryType`** read-only property is a string indicating how the resource was delivered — for example from the cache or from a navigational prefetch.

## Value

A string, which can be one of the following values:

- `"cache"`
  - : The resource was retrieved from the cache.
- `"navigational-prefetch"` {{experimental_inline}}
  - : The resource was retrieved from a prefetched response stored in an in-memory cache via the [Speculation Rules API](/en-US/docs/Web/API/Speculation_Rules_API).
- `""` (empty string)
  - : Returned if none of the above delivery types apply.

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
