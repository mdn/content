---
title: "PerformanceTiming: toJSON() method"
short-title: toJSON()
slug: Web/API/PerformanceTiming/toJSON
page-type: web-api-instance-method
status:
  - deprecated
browser-compat: api.PerformanceTiming.toJSON
---

{{APIRef("Performance API")}}{{deprecated_header}}

> [!WARNING]
> This interface of this property is deprecated in the [Navigation Timing Level 2 specification](https://w3c.github.io/navigation-timing/#obsolete). Please use the {{domxref("PerformanceNavigationTiming")}}
> interface instead.

The legacy **`toJSON()`** method of the {{domxref("PerformanceTiming")}} interface is a {{Glossary("Serialization","serializer")}}; it returns a JSON representation of the {{domxref("PerformanceTiming")}} object.

## Syntax

```js-nolint
toJSON()
```

### Parameters

None.

### Return value

A {{jsxref("JSON")}} object that is the serialization of the {{domxref("PerformanceTiming")}} object.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("JSON")}}
