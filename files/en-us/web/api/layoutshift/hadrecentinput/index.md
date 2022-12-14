---
title: LayoutShift.hadRecentInput
slug: Web/API/LayoutShift/hadRecentInput
page-type: web-api-instance-property
browser-compat: api.LayoutShift.hadRecentInput
tags:
  - experimental
---

{{SeeCompatTable}}{{APIRef("Performance API")}}

The **`hadRecentInput`** readonly property of the {{domxref("LayoutShift")}} interface returns `true` if {{domxref("LayoutShift.lastInputTime", "lastInputTime")}} is less than 500 milliseconds in the past.

## Value

A boolean returning `true` if {{domxref("LayoutShift.lastInputTime", "lastInputTime")}} is less than 500 milliseconds in the past; `false` otherwise.

## Examples

### Ignoring recent user input for CLS score

The following example shows how the `hadRecentInput` property is used to only count layout shifts without recent user input.

```js
let cumulativeLayoutShiftScore = 0;

const observer = new PerformanceObserver((list) => {
  for (const entry of list.getEntries()) {
    // Count layout shifts without recent user input only
    if (!entry.hadRecentInput) {
      cumulativeLayoutShiftScore += entry.value;
      console.log("Current CLS value:", cumulativeLayoutShiftScore, entry);
      if (entry.sources) {
        for (const { node, curRect, prevRect } of entry.sources)
          console.log("Shift source:", node, { curRect, prevRect });
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
