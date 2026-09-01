---
title: LayoutShiftAttribution
slug: Web/API/LayoutShiftAttribution
page-type: web-api-interface
status:
  - experimental
browser-compat: api.LayoutShiftAttribution
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

The `LayoutShiftAttribution` interface provides debugging information about elements which have shifted.

Instances of `LayoutShiftAttribution` are returned in an array by calling {{domxref("LayoutShift.sources")}}.

## Instance properties

- {{domxref("LayoutShiftAttribution.node")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns the element that has shifted (null if it has been removed).
- {{domxref("LayoutShiftAttribution.previousRect")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns a {{domxref("DOMRectReadOnly")}} object representing the position of the element before the shift.
- {{domxref("LayoutShiftAttribution.currentRect")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns a {{domxref("DOMRectReadOnly")}} object representing the position of the element after the shift.

## Instance methods

- {{domxref("LayoutShiftAttribution.toJSON()")}} {{Experimental_Inline}}
  - : Returns a JSON representation of the `LayoutShiftAttribution` object.

## Examples

The following example observes layout shifts and identifies the most impactful element. The `sources` array is sorted by impact area, in descending order — so the first element (`sources[0]`) represents the element that contributed most to the layout shift. For more detail on that, see [Debug Web Vitals in the field](https://web.dev/articles/debug-performance-in-the-field).

```js
const observer = new PerformanceObserver((list) => {
  for (const entry of list.getEntries()) {
    if (!entry.sources || entry.sources.length === 0) continue;

    const mostImpactfulSource = entry.sources[0];
    console.log("Layout shift score:", entry.value);
    console.log("Most impactful element:", largestShiftSource.node);
    console.log("Previous position:", largestShiftSource.previousRect);
    console.log("Current position:", largestShiftSource.currentRect);
  }
});

observer.observe({ type: "layout-shift", buffered: true });
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Debug layout shifts](https://web.dev/articles/debug-layout-shifts)
- [Debug Web Vitals in the field](https://web.dev/articles/debug-performance-in-the-field)
