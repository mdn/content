---
title: "PerformanceNavigation: toJSON() method"
short-title: toJSON()
slug: Web/API/PerformanceNavigation/toJSON
page-type: web-api-instance-method
status:
  - deprecated
browser-compat: api.PerformanceNavigation.toJSON
---

{{APIRef("Performance API")}}

> [!WARNING]
> This interface of this property is deprecated in the [Navigation Timing Level 2 specification](https://w3c.github.io/navigation-timing/#obsolete). Please use the {{domxref("PerformanceNavigationTiming")}}
> interface instead.

The **`toJSON()`** method of the {{domxref("PerformanceNavigation")}} interface returns a JSON-serializable plain object representing the `PerformanceNavigation` object.

The `toJSON()` method is automatically called by {{jsxref("JSON.stringify()")}} when a `PerformanceNavigation` object is stringified. This method is generally intended to, by default, usefully serialize `PerformanceNavigation` objects during [JSON](/en-US/docs/Glossary/JSON) serialization.

## Syntax

```js-nolint
toJSON()
```

### Parameters

None.

### Return value

A JSON-serializable plain object, containing the following properties:

- {{domxref("PerformanceNavigation/type", "type")}}
- {{domxref("PerformanceNavigation/redirectCount", "redirectCount")}}

Each property's value is copied as-is.

## Examples

### Calling toJSON() directly

Calling `toJSON()` directly on `performance.navigation` returns a plain object. You can access its properties, which is the same as accessing them on the original object.

```js
const json = performance.navigation.toJSON();
console.log(json); // A plain object
console.log(typeof json); // "object"
console.log(json.type); // Same value as performance.navigation.type
```

### Serializing to a JSON string

In this example, the `PerformanceNavigation` object is automatically serialized by {{jsxref("JSON.stringify()")}}, which calls the `toJSON()` method.

```js
console.log(JSON.stringify(performance.navigation));
```

This would log a JSON string like so (formatted for readability):

```json
{
  "type": 0,
  "redirectCount": 0
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("JSON")}}
