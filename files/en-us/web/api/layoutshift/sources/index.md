---
title: "LayoutShift: sources property"
short-title: sources
slug: Web/API/LayoutShift/sources
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.LayoutShift.sources
---

{{SeeCompatTable}}{{APIRef("Performance API")}}

The **`sources`** read-only property of the {{domxref("LayoutShift")}} interface returns an array of {{domxref("LayoutShiftAttribution")}} objects that indicate the DOM elements that moved during the layout shift.

## Value

An {{jsxref("Array")}} of {{domxref("LayoutShiftAttribution")}} objects. This array will not contain more than five sources. If there are more than five elements impacted by the layout shift, the five most impactful elements are reported.

## Examples

### Logging layout shift sources

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    entry.sources.forEach((source) => {
      console.log(source);
    });
  });
});

observer.observe({ type: "layout-shift", buffered: true });
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("LayoutShiftAttribution")}}
