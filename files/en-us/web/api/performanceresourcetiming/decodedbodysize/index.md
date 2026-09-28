---
title: "PerformanceResourceTiming: decodedBodySize property"
short-title: decodedBodySize
slug: Web/API/PerformanceResourceTiming/decodedBodySize
page-type: web-api-instance-property
browser-compat: api.PerformanceResourceTiming.decodedBodySize
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}

The **`decodedBodySize`** read-only property returns the size (in octets) received from the fetch (HTTP or cache) of the message body after removing any applied content encoding (like gzip or Brotli).

## Value

The `decodedBodySize` property can have the following values:

- A number representing the size (in octets) received from the fetch (HTTP or cache) of the message body, after removing any applied content encoding.
- `0` if the resource is a cross-origin request made in `no-cors` [mode](/en-US/docs/Web/API/Request/mode), or if the request failed, for example, because it didn't pass the [CORS](/en-US/docs/Web/HTTP/Guides/CORS) check.

## Description

Content size information for a cross-origin resource is restricted unless the resource passes the [CORS](/en-US/docs/Web/HTTP/Guides/CORS) check, so if the value of the `decodedBodySize` property is `0`, the resource might be a cross-origin request.

For example, an {{HTMLElement("img")}} element without the [`crossorigin`](/en-US/docs/Web/HTML/Reference/Attributes/crossorigin) attribute loads its image using a `no-cors` request, so the content size of a cross-origin image loaded this way is reported as `0`.

To expose cross-origin content size information, the resource must be requested in `cors` [mode](/en-US/docs/Web/API/Request/mode): for example, by using {{domxref("Window/fetch", "fetch()")}} or by setting the [`crossorigin`](/en-US/docs/Web/HTML/Reference/Attributes/crossorigin) attribute on the element that loads it.
The response must then pass the CORS check, which requires it to include an appropriate {{HTTPHeader("Access-Control-Allow-Origin")}} header.

To allow `https://developer.mozilla.org` to see content sizes, the cross-origin resource should send:

```http
Access-Control-Allow-Origin: https://developer.mozilla.org
```

Browsers are allowed to apply stricter restrictions than CORS requires, and may return `0` even when the CORS check passes.

Because navigations of frames such as {{HTMLElement("iframe")}} don't use CORS, their content sizes are exposed if the frame's document passes the {{HTTPHeader("Timing-Allow-Origin")}} check.

## Examples

### Checking if content was compressed

If the `decodedBodySize` and {{domxref("PerformanceResourceTiming.encodedBodySize", "encodedBodySize")}} properties are non-null and differ, the content was compressed (for example, gzip or Brotli).

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

- {{HTTPHeader("Access-Control-Allow-Origin")}}
- {{HTTPHeader("Timing-Allow-Origin")}}
- [Cross-origin resource sharing (CORS)](/en-US/docs/Web/HTTP/Guides/CORS)
