---
title: "PerformanceResourceTiming: renderBlockingStatus property"
short-title: renderBlockingStatus
slug: Web/API/PerformanceResourceTiming/renderBlockingStatus
page-type: web-api-instance-property
browser-compat: api.PerformanceResourceTiming.renderBlockingStatus
---

{{APIRef("Resource Timing API")}}

The **`renderBlockingStatus`** read-only property returns the render-blocking status of the resource.

It is useful to determine resources that:

- weren't render-blocking and therefore could be delayed, or
- were render-blocking and therefore could be preloaded.

## Description

Render-blocking resources are static files, such as fonts, CSS, and JavaScript that block or delay the browser from rendering page content to the screen. The browser determines these blocking resources automatically and doesn't render any pixel to the screen before all stylesheets and synchronous scripts are loaded and evaluated. This prevents Flash of Unstyled Contents ("FOUC").

In addition to the automatic render-blocking mechanism, `blocking="render"` can be provided as an attribute and value to {{HTMLElement("script")}}, {{HTMLElement("style")}} or {{HTMLElement("link")}} elements to specify explicit render-blocking. For example:

```html
<link blocking="render" href="critical-font.woff2" as="font" />
```

## Value

The `renderBlockingStatus` property can have the following values:

- `"blocking"`
  - : The resource might potentially block rendering.
- `"non-blocking"`
  - : The resource does not block rendering.

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
