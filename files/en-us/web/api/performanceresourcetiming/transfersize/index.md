---
title: "PerformanceResourceTiming: transferSize property"
short-title: transferSize
slug: Web/API/PerformanceResourceTiming/transferSize
page-type: web-api-instance-property
browser-compat: api.PerformanceResourceTiming.transferSize
---

{{APIRef("Performance API")}}

The **`transferSize`** read-only property represents the size (in octets) of the fetched resource. The size includes the response header fields plus the response payload body (as defined by [RFC7230](https://httpwg.org/specs/rfc7230.html#message.body)).

If the resource is fetched from a local cache, or if it is a cross-origin resource, this property returns zero.

## Value

The `transferSize` property can have the following values:

- A number representing the size (in octets) of the fetched resource. The size includes the response header fields plus the [response payload body](https://httpwg.org/specs/rfc7230.html#message.body) (RFC7230).
- `0` if the resource was instantaneously retrieved from a cache.
- `0` if the resource is a cross-origin request and no {{HTTPHeader("Timing-Allow-Origin")}} HTTP response header is used.

## Examples

### Checking if a cache was hit

For environments not supporting the {{domxref("PerformanceResourceTiming.responseStatus", "responseStatus")}} property, the `transferSize` property can be used to determine cache hits. If `transferSize` is zero and the resource has a non-zero decoded body size (meaning the resource is same-origin or has {{HTTPHeader("Timing-Allow-Origin")}}), the resource was fetched from a local cache.

Example using a {{domxref("PerformanceObserver")}}, which notifies of new `resource` performance entries as they are recorded in the browser's performance timeline. Use the `buffered` option to access entries from before the observer creation.

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    if (entry.transferSize === 0 && entry.decodedBodySize > 0) {
      console.log(`${entry.name} was loaded from cache`);
    }
  });
});

observer.observe({ type: "resource", buffered: true });
```

Example using {{domxref("Performance.getEntriesByType()")}}, which only shows `resource` performance entries present in the browser's performance timeline at the time you call this method:

```js
const resources = performance.getEntriesByType("resource");
resources.forEach((entry) => {
  if (entry.transferSize === 0 && entry.decodedBodySize > 0) {
    console.log(`${entry.name} was loaded from cache`);
  }
});
```

### Cross-origin content size information

If the value of the `transferSize` property is `0` and wasn't loaded from a local cache, the resource might be a cross-origin request. To expose cross-origin content size information, the {{HTTPHeader("Timing-Allow-Origin")}} HTTP response header needs to be set.

For example, to allow `https://developer.mozilla.org` to see content sizes, the cross-origin resource should send:

```http
Timing-Allow-Origin: https://developer.mozilla.org
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Timing-Allow-Origin")}}
