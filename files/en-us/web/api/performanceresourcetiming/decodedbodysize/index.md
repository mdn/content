---
title: PerformanceResourceTiming.decodedBodySize
slug: Web/API/PerformanceResourceTiming/decodedBodySize
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - Web Performance
browser-compat: api.PerformanceResourceTiming.decodedBodySize
---

{{APIRef("Performance API")}}

The **`decodedBodySize`** read-only property returns the size (in octets) received from the fetch (HTTP or cache) of the message body, after removing any applied content-codings. If the resource is retrieved from an application cache or local resources, it returns the size of the payload after removing any applied content-codings.

## Value

The `decodedBodySize` property can have the following values:

- A number representing the size (in octets) received from the fetch (HTTP or cache) of the message body, after removing any applied content-codings.
- `0` if the resource is a cross-origin request and no {{HTTPHeader("Timing-Allow-Origin")}} HTTP response header is used.

## Examples

### Checking if content was compressed

If the `decodedBodySize` and {{domxref("PerformanceResourceTiming.encodedBodySize", "encodedBodySize")}} properties are non-null and differ, the content was compressed (for example, gzip or Brotli).

Using a {{domxref("PerformanceObserver")}}:

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

Or using {{domxref("Performance.getEntriesByType()")}}, which only shows `resource` performance entries present in the browser's performance timeline at the time you call this method:

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

If the value of the `decodedBodySize` property is `0`, the resource might be a cross-origin request. To allow seeing cross-origin content size information, the {{HTTPHeader("Timing-Allow-Origin")}} HTTP response header needs to be set.

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
