---
title: "LayoutShift: value property"
short-title: value
slug: Web/API/LayoutShift/value
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.LayoutShift.value
---

{{SeeCompatTable}}{{APIRef("Performance API")}}

The **`value`** read-only property of the {{domxref("LayoutShift")}} interface returns the layout shift score calculated as the impact fraction (fraction of the viewport that was shifted) multiplied by the distance fraction (distance moved as a fraction of viewport).

## Value

A number between `0.0` and `1.0` indicating the layout shift score.

It is calculated as the impact fraction (fraction of the viewport that was shifted) multiplied by the distance fraction (distance moved as a fraction of viewport).

```plain
layout shift score = impact fraction * distance fraction
```

For more details, see [Layout shift score](https://web.dev/articles/cls#layout_shift_score) on web.dev.

## Examples

### Logging the entry's layout shift score

The following example shows how use the `value` property to log the layout shift score.

```js
const observer = new PerformanceObserver((list) => {
  for (const entry of list.getEntries()) {
    // Count layout shifts without recent user input only
    if (!entry.hadRecentInput) {
      console.log("Entry's layout shift score:", entry.value);
    }
  }
});

observer.observe({ type: "layout-shift", buffered: true });
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
