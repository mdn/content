---
title: "PerformanceResourceTiming: renderBlockingStatus property"
short-title: renderBlockingStatus
slug: Web/API/PerformanceResourceTiming/renderBlockingStatus
page-type: web-api-instance-property
browser-compat: api.PerformanceResourceTiming.renderBlockingStatus
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}

The **`renderBlockingStatus`** read-only property of the {{domxref("PerformanceResourceTiming")}} interface indicates whether the resource could block the page from rendering.

It is useful to determine resources that:

- weren't render-blocking and therefore could be delayed, or
- were render-blocking and therefore could be preloaded.

## Value

A string, which can be one of the following values:

- `"blocking"`
  - : The resource might block rendering.
- `"non-blocking"`
  - : The resource does not block rendering.

## Description

[Render-blocking](/en-US/docs/Glossary/Render_blocking) resources are static files, such as fonts, CSS, and JavaScript, that delay the rendering of page content to the screen.
The browser determines these blocking resources automatically and doesn't render any pixel to the screen before all stylesheets and synchronous scripts are loaded and evaluated.
This prevents a flash of unstyled content (FOUC).

In addition to the automatic render-blocking mechanism, you can set `blocking="render"` on {{HTMLElement("script")}}, {{HTMLElement("style")}}, and {{HTMLElement("link")}} elements to block rendering explicitly.
For example:

```html
<script blocking="render" src="important.js" defer></script>
```

## Examples

### Logging resources that block rendering

The `renderBlockingStatus` property can be used to see resources that block rendering.

Example using a {{domxref("PerformanceObserver")}}, which notifies of new `resource` performance entries as they are recorded in the browser's performance timeline. Use the `buffered` option to access entries from before the observer creation.

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    if (entry.renderBlockingStatus === "blocking") {
      console.log(`${entry.name} is render-blocking.`);
    }
  });
});

observer.observe({ type: "resource", buffered: true });
```

Example using {{domxref("Performance.getEntriesByType()")}}, which only shows `resource` performance entries present in the browser's performance timeline at the time you call this method:

```js
const resources = performance.getEntriesByType("resource");
resources.forEach((entry) => {
  if (entry.renderBlockingStatus === "blocking") {
    console.log(`${entry.name} is render-blocking.`);
  }
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLLinkElement.blocking")}}
- {{domxref("HTMLScriptElement.blocking")}}
- {{domxref("HTMLStyleElement.blocking")}}
- [Resource timing](/en-US/docs/Web/API/Performance_API/Resource_timing)
