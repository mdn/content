---
title: "LayoutShift: hadRecentInput property"
short-title: hadRecentInput
slug: Web/API/LayoutShift/hadRecentInput
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.LayoutShift.hadRecentInput
---

{{SeeCompatTable}}{{APIRef("Performance API")}}

The **`hadRecentInput`** read-only property of the {{domxref("LayoutShift")}} interface returns `true` if {{domxref("LayoutShift.lastInputTime", "lastInputTime")}} is less than 500 milliseconds in the past.

Layout shifts are only a problem if the user is not expecting them, so layout shifts that are the result of user interactions (such as a user expanding a UI element) are often not considered in layout shift metrics. The `hadRecentInput` property allows you to exclude these shifts.

## Value

A boolean returning `true` if {{domxref("LayoutShift.lastInputTime", "lastInputTime")}} is less than 500 milliseconds in the past; `false` otherwise.

## Examples

### Ignoring recent user input for layout shift scores

The following example shows how the `hadRecentInput` property is used to only count layout shifts without recent user input.

```js
const observer = new PerformanceObserver((list) => {
  for (const entry of list.getEntries()) {
    // Count layout shifts without recent user input only
    if (!entry.hadRecentInput) {
      console.log("LayoutShift value:", entry.value);
      if (entry.sources) {
        for (const { node, currentRect, previousRect } of entry.sources)
          console.log("LayoutShift source:", node, {
            currentRect,
            previousRect,
          });
      }
    }
  }
});

observer.observe({ type: "layout-shift", buffered: true });
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("LayoutShift.lastInputTime")}}
