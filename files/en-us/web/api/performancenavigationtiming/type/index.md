---
title: PerformanceNavigationTiming.type
slug: Web/API/PerformanceNavigationTiming/type
tags:
  - API
  - Property
  - Reference
  - Web Performance
browser-compat: api.PerformanceNavigationTiming.type
---
{{APIRef("Navigation Timing")}}{{SeeCompatTable}}

The **`type`** read-only property returns a the type of navigation.

## Value

A {{domxref("DOMString","string")}} containing one of the following values:

- `"navigate"`
  - : Navigation started by clicking a link, entering the URL in the browser's address
    bar, form submission, or initializing through a script operation other than reload and
    back_forward as listed below.
- `"reload"`
  - : Navigation is through the browser's reload operation or
    {{domxref("location.reload()")}}.
- `"back_forward"`
  - : Navigation is through the browser's history traversal operation.
- `"prerender"`
  - : Navigation is initiated by a [prerender hint](https://www.w3.org/TR/resource-hints/#prerender).

## Example

The following example illustrates this property's usage.

```js
function print_nav_timing_data() {
  // Use getEntriesByType() to just get the "navigation" events
  var perfEntries = performance.getEntriesByType("navigation");

  for (var i=0; i < perfEntries.length; i++) {
    console.log("= Navigation entry[" + i + "]");
    var p = perfEntries[i];
    // dom Properties
    console.log("DOM content loaded = " + (p.domContentLoadedEventEnd - p.domContentLoadedEventStart));
    console.log("DOM complete = " + p.domComplete);
    console.log("DOM interactive = " + p.interactive);

    // document load and unload time
    console.log("document load = " + (p.loadEventEnd - p.loadEventStart));
    console.log("document unload = " + (p.unloadEventEnd - p.unloadEventStart));

    // other properties
    console.log("type = " + p.type);
    console.log("redirectCount = " + p.redirectCount);
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
