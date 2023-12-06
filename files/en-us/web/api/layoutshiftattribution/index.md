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

The following example finds the element with the highest layout shift score, and returns the element in that entry with the largest size prior to the shift (`previousRect`). For more detail on this see [Debug Web Vitals in the field](https://web.dev/articles/debug-performance-in-the-field).

```js
function getCLSDebugTarget(entries) {
  const largestEntry = entries.reduce((a, b) =>
    a && a.value > b.value ? a : b,
  );
  if (largestEntry?.sources?.length) {
    const largestSource = largestEntry.sources.reduce((a, b) => {
      const area = (el) => el.previousRect.width * el.previousRect.height;
      return a.node && area(a) > area(b) ? a : b;
    });
    if (largestSource) {
      return largestSource.node;
    }
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Debug layout shifts](https://web.dev/articles/debug-layout-shifts)
- [Debug Web Vitals in the field](https://web.dev/articles/debug-performance-in-the-field)
