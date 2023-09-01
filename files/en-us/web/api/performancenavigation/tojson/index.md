---
title: "PerformanceNavigation: toJSON() method"
short-title: toJSON()
slug: Web/API/PerformanceNavigation/toJSON
page-type: web-api-instance-method
status:
  - deprecated
browser-compat: api.PerformanceNavigation.toJSON
---

{{APIRef("Performance API")}} {{deprecated_header}}

> **Warning:** This interface of this property is deprecated in the [Navigation Timing Level 2 specification](https://w3c.github.io/navigation-timing/#obsolete). Please use the {{domxref("PerformanceNavigationTiming")}}
> interface instead.

The **`toJSON()`** method of the {{domxref("PerformanceNavigation")}} interface is a {{Glossary("Serialization","serializer")}}; it returns a JSON representation of the {{domxref("PerformanceNavigation")}} object.

## Syntax

```js-nolint
toJSON()
```

### Parameters

None.

### Return value

A {{jsxref("JSON")}} object that is the serialization of the {{domxref("PerformanceNavigation")}} object.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("JSON")}}
