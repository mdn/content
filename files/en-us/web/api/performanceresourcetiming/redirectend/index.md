---
title: PerformanceResourceTiming.redirectEnd
slug: Web/API/PerformanceResourceTiming/redirectEnd
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - Web Performance
browser-compat: api.PerformanceResourceTiming.redirectEnd
---

{{APIRef("Performance API")}}

The **`redirectEnd`** read-only property returns a {{domxref("DOMHighResTimeStamp","timestamp")}} immediately after receiving the last byte of the response of the last redirect.

When fetching a resource, if there are multiple HTTP redirects, and any of the redirects have an origin that is different from the current document, and the timing allow check algorithm passes for each redirected resource, this property returns the time immediately after receiving the last byte of the response of the last redirect; otherwise, zero is returned.

To get the amount of redirects, see also {{domxref("PerformanceNavigationTiming.redirectCount")}}.

## Value

The `redirectEnd` property can have the following values:

- A {{domxref("DOMHighResTimeStamp","timestamp")}} immediately after receiving the last byte of the response of the last redirect.
- `0` if there is no redirect.
- `0` if the resource is a cross-origin request and no {{HTTPHeader("Timing-Allow-Origin")}} HTTP response header is used.

## Examples

### Measuring redirection time

The `redirectEnd` and {{domxref("PerformanceResourceTiming.redirectStart", "redirectStart")}} properties can be used to measure how long the redirection takes.

```js
const redirect = entry.redirectEnd - entry.redirectStart;
```

Using a {{domxref("PerformanceObserver")}}:

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    const redirect = entry.redirectEnd - entry.redirectStart;
    if (redirect > 0) {
      console.log(`${entry.name}: Redirect time: ${redirect}ms`);
    }
  });
});

observer.observe({ type: "resource", buffered: true });
```

Or using {{domxref("Performance.getEntriesByType()")}}, which only shows `resource` performance entries present in the browser's performance timeline at the time you call this method:

```js
const resources = performance.getEntriesByType("resource");
resources.forEach((entry) => {
  const redirect = entry.redirectEnd - entry.redirectStart;
  if (redirect > 0) {
    console.log(`${entry.name}: Redirect time: ${redirect}ms`);
  }
});
```

### Cross-origin timing information

If the value of the `redirectEnd` property is `0`, the resource might be a cross-origin request. To allow seeing cross-origin timing information, the {{HTTPHeader("Timing-Allow-Origin")}} HTTP response header needs to be set.

For example, to allow `https://developer.mozilla.org` to see timing resources, the cross-origin resource should send:

```http
Timing-Allow-Origin: https://developer.mozilla.org
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("PerformanceNavigationTiming.redirectCount")}}
- {{HTTPHeader("Timing-Allow-Origin")}}
