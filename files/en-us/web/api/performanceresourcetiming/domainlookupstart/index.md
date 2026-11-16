---
title: "PerformanceResourceTiming: domainLookupStart property"
short-title: domainLookupStart
slug: Web/API/PerformanceResourceTiming/domainLookupStart
page-type: web-api-instance-property
browser-compat: api.PerformanceResourceTiming.domainLookupStart
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}

The **`domainLookupStart`** read-only property returns the {{domxref("DOMHighResTimeStamp","timestamp")}} immediately before the browser starts the domain name lookup for the resource.

## Value

The `domainLookupStart` property can have the following values:

- A {{domxref("DOMHighResTimeStamp")}} immediately before the browser starts the domain name lookup for the resource.
- `0` if the resource was instantaneously retrieved from a cache.
- `0` if the resource is a cross-origin request and no {{HTTPHeader("Timing-Allow-Origin")}} HTTP response header is used.

## Examples

### Measuring DNS lookup time

The `domainLookupStart` and {{domxref("PerformanceResourceTiming.domainLookupEnd", "domainLookupEnd")}} properties can be used to measure how long it takes for the DNS lookup to happen.

```js
const dns = entry.domainLookupEnd - entry.domainLookupStart;
```

Example using a {{domxref("PerformanceObserver")}}, which notifies of new `resource` performance entries as they are recorded in the browser's performance timeline. Use the `buffered` option to access entries from before the observer creation.

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    const dns = entry.domainLookupEnd - entry.domainLookupStart;
    if (dns > 0) {
      console.log(`${entry.name}: DNS lookup duration: ${dns}ms`);
    }
  });
});

observer.observe({ type: "resource", buffered: true });
```

Example using {{domxref("Performance.getEntriesByType()")}}, which only shows `resource` performance entries present in the browser's performance timeline at the time you call this method:

```js
const resources = performance.getEntriesByType("resource");
resources.forEach((entry) => {
  const dns = entry.domainLookupEnd - entry.domainLookupStart;
  if (dns > 0) {
    console.log(`${entry.name}: DNS lookup duration: ${dns}ms`);
  }
});
```

### Cross-origin timing information

If the value of the `domainLookupStart` property is `0`, the resource might be a cross-origin request. To allow seeing cross-origin timing information, the {{HTTPHeader("Timing-Allow-Origin")}} HTTP response header needs to be set.

For example, to allow `https://developer.mozilla.org` to see timing resources, the cross-origin resource should send:

```http
Timing-Allow-Origin: https://developer.mozilla.org
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Timing-Allow-Origin")}}
