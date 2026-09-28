---
title: "PerformanceResourceTiming: encodedBodySize property"
short-title: encodedBodySize
slug: Web/API/PerformanceResourceTiming/encodedBodySize
page-type: web-api-instance-property
browser-compat: api.PerformanceResourceTiming.encodedBodySize
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}

The **`encodedBodySize`** read-only property represents the size (in octets) received from the fetch (HTTP or cache) of the payload body before removing any applied content encodings (like gzip or Brotli).
If the resource is retrieved from an application cache or a local resource, it must return the size of the payload body before removing any applied content encoding.

## Value

The `encodedBodySize` property can have the following values:

- A number representing the size (in octets) received from the fetch (HTTP or cache), of the payload body, before removing any applied content encoding.
- `0` if the resource is a cross-origin request made in `no-cors` [mode](/en-US/docs/Web/API/Request/mode), or if the request failed, for example because it didn't pass the [CORS](/en-US/docs/Web/HTTP/Guides/CORS) check.

## Description

### Cross-origin content size information

Content size information is protected by [CORS](/en-US/docs/Web/HTTP/Guides/CORS), so if the value of the `encodedBodySize` property is `0`, the resource might be a cross-origin request.

For example, an {{HTMLElement("img")}} element without the [`crossorigin`](/en-US/docs/Web/HTML/Reference/Attributes/crossorigin) attribute loads its image using a `no-cors` request, so the content size of a cross-origin image loaded this way is reported as `0`.

To expose cross-origin content size information, the resource must be requested in `cors` [mode](/en-US/docs/Web/API/Request/mode), such as by using {{domxref("Window/fetch", "fetch()")}}, or by setting the [`crossorigin`](/en-US/docs/Web/HTML/Reference/Attributes/crossorigin) attribute on the element that loads it.
The response must then pass the CORS check, which requires it to include an appropriate {{HTTPHeader("Access-Control-Allow-Origin")}} header.

For example, to allow `https://developer.mozilla.org` to see content sizes, the cross-origin resource should send:

```http
Access-Control-Allow-Origin: https://developer.mozilla.org
```

Browsers may apply stricter cross-origin restrictions and return `0` even when the CORS check passes.

Navigations of frames such as {{HTMLElement("iframe")}} don't use CORS: their content sizes are exposed if they pass the `Timing-Allow-Origin` check.

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

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Cross-Origin Resource Sharing (CORS)](/en-US/docs/Web/HTTP/Guides/CORS)
- {{HTTPHeader("Access-Control-Allow-Origin")}}
