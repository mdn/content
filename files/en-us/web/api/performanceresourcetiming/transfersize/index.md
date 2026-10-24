---
title: "PerformanceResourceTiming: transferSize property"
short-title: transferSize
slug: Web/API/PerformanceResourceTiming/transferSize
page-type: web-api-instance-property
browser-compat: api.PerformanceResourceTiming.transferSize
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}

The **`transferSize`** read-only property represents the size (in octets) of the fetched resource.
This is the size of the response body plus a fixed value that stands in for the size of the response headers.

## Value

The `transferSize` property can have the following values:

- A number representing the size (in octets) of the fetched resource.
  This is the size of the encoded response body (see {{domxref("PerformanceResourceTiming.encodedBodySize", "encodedBodySize")}}) plus 300.
  The fixed value of 300 stands in for the size of the response headers, because their real size could reveal information such as the presence of cookies.
- `300` if the resource was revalidated with the server, rather than downloaded again.
- `0` if the resource was retrieved from a local cache without contacting the server.
- `0` if the resource is a cross-origin request and doesn't pass the {{HTTPHeader("Timing-Allow-Origin")}} check.

## Description

For a cross-origin resource, `transferSize` is reported only if the resource is served with a {{HTTPHeader("Timing-Allow-Origin")}} header that allows the requesting origin.
Without this header, `transferSize` is `0`, whether or not the resource was retrieved from a cache.

For example, to allow `https://developer.mozilla.org` to see transfer sizes, the cross-origin resource should send:

```http
Timing-Allow-Origin: https://developer.mozilla.org
```

The part of `transferSize` that represents the size of the response body is subject to the same [CORS](/en-US/docs/Web/HTTP/Guides/CORS) restriction as `encodedBodySize`.
If a cross-origin resource passes the `Timing-Allow-Origin` check but not the CORS check, `transferSize` doesn't include the body size.

## Examples

### Checking if a cache was hit

For environments not supporting the {{domxref("PerformanceResourceTiming.responseStatus", "responseStatus")}} property, the `transferSize` property can be used to determine cache hits.
If `transferSize` is zero and the resource has a non-zero decoded body size, the resource was fetched from a local cache.
This check works only for same-origin resources and for cross-origin resources that pass both the `Timing-Allow-Origin` check and the CORS check.
Without `Timing-Allow-Origin`, `transferSize` is always `0`.

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

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Timing-Allow-Origin")}}
- {{HTTPHeader("Access-Control-Allow-Origin")}}
- [Cross-origin resource sharing (CORS)](/en-US/docs/Web/HTTP/Guides/CORS)
