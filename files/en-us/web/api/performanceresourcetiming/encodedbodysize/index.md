---
title: "PerformanceResourceTiming: encodedBodySize property"
short-title: encodedBodySize
slug: Web/API/PerformanceResourceTiming/encodedBodySize
page-type: web-api-instance-property
browser-compat: api.PerformanceResourceTiming.encodedBodySize
---

{{APIRef("Performance API")}}

The **`encodedBodySize`** read-only property represents the size (in octets) received from the fetch (HTTP or cache) of the payload body before removing any applied content encodings (like gzip or Brotli). If the resource is retrieved from an application cache or a local resource, it must
return the size of the payload body before removing any applied content encoding.

## Value

The `encodedBodySize` property can have the following values:

- A number representing the size (in octets) received from the fetch (HTTP or cache), of the payload body, before removing any applied content encoding.
- `0` if the resource is a cross-origin request and no {{HTTPHeader("Timing-Allow-Origin")}} HTTP response header is used.

## Examples

### Checking if content was compressed

If the `encodedBodySize` and {{domxref("PerformanceResourceTiming.decodedBodySize", "decodedBodySize")}} properties are non-null and differ, the content was compressed (for example, gzip or Brotli).

Example using a {{domxref("PerformanceObserver")}}, which notifies of new `resource` performance entries as they are recorded in the browser's performance timeline. Use the `buffered` option to access entries from before the observer creation.

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    const uncompressed =
      entry.decodedBodySize && entry.decodedBodySize === entry.encodedBodySize;
    if (uncompressed) {
      console.log(`${entry.name} was not compressed!`);
    }
  });
});

observer.observe({ type: "resource", buffered: true });
```

Example using {{domxref("Performance.getEntriesByType()")}}, which only shows `resource` performance entries present in the browser's performance timeline at the time you call this method:

```js
const resources = performance.getEntriesByType("resource");
resources.forEach((entry) => {
  const uncompressed =
    entry.decodedBodySize && entry.decodedBodySize === entry.encodedBodySize;
  if (uncompressed) {
    console.log(`${entry.name} was not compressed!`);
  }
});
```

### Cross-origin content size information

If the value of the `encodedBodySize` property is `0`, the resource might be a cross-origin request. To expose cross-origin content size information, the {{HTTPHeader("Timing-Allow-Origin")}} HTTP response header needs to be set.

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
