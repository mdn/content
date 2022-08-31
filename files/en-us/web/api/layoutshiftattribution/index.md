---
title: LayoutShiftAttribution
slug: Web/API/LayoutShiftAttribution
page-type: web-api-interface
tags:
  - API
  - Interface
  - Layout Instability API
  - LayoutShiftAttribution
  - NeedsExample
  - Performance
  - Reference
  - Web Performance
  - Experimental
browser-compat: api.LayoutShiftAttribution
---
{{APIRef("Layout Instability API")}}{{SeeCompatTable}}

The `LayoutShiftAttribution` interface of the [Layout Instability API](/en-US/docs/Web/API/Layout_Instability_API) provides debugging information about elements which have shifted.

Instances of `LayoutShiftAttribution` are returned in an array by calling {{domxref("LayoutShift.sources")}}.

## Properties

- {{domxref("LayoutShiftAttribution.Node")}} {{ReadOnlyInline}}
  - : Returns the element that has shifted (null if it has been removed).
- {{domxref("LayoutShiftAttribution.previousRect")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns a {{domxref("DOMRectReadOnly")}} object representing the position of the element before the shift.
- {{domxref("LayoutShiftAttribution.currentRect")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns a {{domxref("DOMRectReadOnly")}} object representing the position of the element after the shift.

## Methods

- {{domxref("LayoutShiftAttribution.toJSON()")}} {{Experimental_Inline}}
  - : Returns a JSON representation of the `LayoutShiftAttribution` object.

## Examples

The following example finds the element that is causing the largest layout shift, and prints that `node` to the console. For more detail on this see [Debug Web Vitals in the field](https://web.dev/debug-web-vitals-in-the-field/).

```js
function getCLSDebugTarget(entries) {
  const largestEntry = entries.reduce((a, b) => a && a.value > b.value ? a : b);
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

- [Debug layout shifts](https://web.dev/debug-layout-shifts/)
- [Debug Web Vitals in the field](https://web.dev/debug-web-vitals-in-the-field/)
