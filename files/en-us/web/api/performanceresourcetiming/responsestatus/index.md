---
title: "PerformanceResourceTiming: responseStatus property"
short-title: responseStatus
slug: Web/API/PerformanceResourceTiming/responseStatus
page-type: web-api-instance-property
browser-compat: api.PerformanceResourceTiming.responseStatus
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}

The **`responseStatus`** read-only property represents the HTTP response status code returned when fetching the resource.

This property maps to {{domxref("Response.status")}} from the [Fetch API](/en-US/docs/Web/API/Fetch_API).

## Value

The `responseStatus` property can have the following values:

- A number indicating the [HTTP response status code](/en-US/docs/Web/HTTP/Status) returned when fetching the resource.
- `0` if the [CORS](/en-US/docs/Web/HTTP/CORS) check fails.
- `0` for cross-origin {{HTMLElement("iframe")}} objects.

## Examples

### Checking if a cache was hit

The `responseStatus` property can be used to check for cached resources with a {{HTTPStatus("304")}} `Not Modified` response status code.

Example using a {{domxref("PerformanceObserver")}}, which notifies of new `resource` performance entries as they are recorded in the browser's performance timeline. Use the `buffered` option to access entries from before the observer creation.

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    if (entry.responseStatus === 304) {
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
  if (entry.responseStatus === 304) {
    console.log(`${entry.name} was loaded from cache`);
  }
});
```

Alternatively, if `responseStatus` is not available, you can check if the {{domxref("PerformanceResourceTiming.transferSize", "transferSize")}} property returned `0`.

### Cross-origin response status codes

If the value of the `responseStatus` property is `0`, the resource might be a cross-origin request. To allow seeing cross-origin response status codes, the [CORS](/en-US/docs/Web/HTTP/CORS) {{HTTPHeader("Access-Control-Allow-Origin")}} HTTP response header needs to be set.

For example, to allow `https://developer.mozilla.org` to see response status codes, the cross-origin resource should send:

```http
Access-Control-Allow-Origin: https://developer.mozilla.org
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [HTTP response status code](/en-US/docs/Web/HTTP/Status)
- {{domxref("Response.status")}}
- [CORS](/en-US/docs/Web/HTTP/CORS)
