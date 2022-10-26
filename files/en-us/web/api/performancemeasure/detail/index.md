---
title: PerformanceMeasure.detail
slug: Web/API/PerformanceMeasure/detail
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - Web Performance
browser-compat: api.PerformanceMeasure.detail
---

{{APIRef}}

The read-only **`detail`** property returns arbitrary metadata that was included in the mark upon construction (when using {{domxref("Performance.measure","performance.measure()")}}.

## Value

Returns the value it was set to (from `markOptions` of {{domxref("Performance.measure","performance.measure()")}}).

## Examples

The following example demostrates the `detail` property.

```js
performance.measure("dog", { detail: "labrador", start: 0, end: 12345 });

const dogEntries = performance.getEntriesByName("dog");

dogEntries[0].detail; // labrador
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
