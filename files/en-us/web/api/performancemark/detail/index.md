---
title: "PerformanceMark: detail property"
short-title: detail
slug: Web/API/PerformanceMark/detail
page-type: web-api-instance-property
browser-compat: api.PerformanceMark.detail
---

{{APIRef("Performance API")}}

The read-only **`detail`** property returns arbitrary metadata that was included in the mark upon construction (either when using {{domxref("Performance.mark","performance.mark()")}} or the {{domxref("PerformanceMark.PerformanceMark","PerformanceMark()")}} constructor).

## Value

Returns the value it is set to (from `markOptions` of {{domxref("Performance.mark","performance.mark()")}} or the {{domxref("PerformanceMark.PerformanceMark","PerformanceMark()")}} constructor).

## Examples

The following example demonstrates the `detail` property.

```js
performance.mark("dog", { detail: "labrador" });

const dogEntries = performance.getEntriesByName("dog");

dogEntries[0].detail; // labrador
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
