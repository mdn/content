---
title: "DOMPointReadOnly: toJSON() method"
short-title: toJSON()
slug: Web/API/DOMPointReadOnly/toJSON
page-type: web-api-instance-method
browser-compat: api.DOMPointReadOnly.toJSON
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

The **`toJSON()`** method of the {{domxref("DOMPointReadOnly")}} interface returns a JSON-serializable plain object representing the `DOMPointReadOnly` object.

The `toJSON()` method is automatically called by {{jsxref("JSON.stringify()")}} when a `DOMPointReadOnly` object is stringified. This method is generally intended to, by default, usefully serialize `DOMPointReadOnly` objects during [JSON](/en-US/docs/Glossary/JSON) serialization, which can then be deserialized using the {{domxref("DOMPointReadOnly/fromPoint_static", "DOMPointReadOnly.fromPoint()")}} function within the reviver of {{jsxref("JSON.parse()")}}.

## Syntax

```js-nolint
toJSON()
```

### Parameters

None.

### Return value

A JSON-serializable plain object, containing the following properties:

- {{domxref("DOMPointReadOnly/x", "x")}}
- {{domxref("DOMPointReadOnly/y", "y")}}
- {{domxref("DOMPointReadOnly/z", "z")}}
- {{domxref("DOMPointReadOnly/w", "w")}}

Each property's value is copied as-is.

## Examples

### Calling toJSON() directly

Calling `toJSON()` directly returns a plain object containing the `DOMPointReadOnly` object's properties.

```js
const point = new DOMPointReadOnly(10, 20);

const json = point.toJSON();
console.log(json);
// { x: 10, y: 20, z: 0, w: 1 }
console.log(typeof json); // "object"
```

### Serializing to a JSON string

The `DOMPointReadOnly` object from the previous example is automatically serialized by {{jsxref("JSON.stringify()")}}, which calls the `toJSON()` method.

```js
const pointJSON = JSON.stringify(point);
console.log(pointJSON);
```

This would log a JSON string like so (formatted for readability):

```json
{
  "x": 10,
  "y": 20,
  "z": 0,
  "w": 1
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
