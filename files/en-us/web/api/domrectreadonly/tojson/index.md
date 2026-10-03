---
title: "DOMRectReadOnly: toJSON() method"
short-title: toJSON()
slug: Web/API/DOMRectReadOnly/toJSON
page-type: web-api-instance-method
browser-compat: api.DOMRectReadOnly.toJSON
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

The **`toJSON()`** method of the {{domxref("DOMRectReadOnly")}} interface returns a JSON-serializable plain object representing the `DOMRectReadOnly` object.

The `toJSON()` method is automatically called by {{jsxref("JSON.stringify()")}} when a `DOMRectReadOnly` object is stringified. This method is generally intended to, by default, usefully serialize `DOMRectReadOnly` objects during [JSON](/en-US/docs/Glossary/JSON) serialization, which can then be deserialized using the {{domxref("DOMRectReadOnly/fromRect_static", "DOMRectReadOnly.fromRect()")}} function within the reviver of {{jsxref("JSON.parse()")}}.

## Syntax

```js-nolint
toJSON()
```

### Parameters

None.

### Return value

A JSON-serializable plain object, containing the following properties:

- {{domxref("DOMRectReadOnly/x", "x")}}
- {{domxref("DOMRectReadOnly/y", "y")}}
- {{domxref("DOMRectReadOnly/width", "width")}}
- {{domxref("DOMRectReadOnly/height", "height")}}
- {{domxref("DOMRectReadOnly/top", "top")}}
- {{domxref("DOMRectReadOnly/right", "right")}}
- {{domxref("DOMRectReadOnly/bottom", "bottom")}}
- {{domxref("DOMRectReadOnly/left", "left")}}

Each property's value is copied as-is.

## Examples

### Calling toJSON() directly

Calling `toJSON()` directly returns a plain object containing the `DOMRectReadOnly` object's properties.

```js
const rect = new DOMRectReadOnly(10, 20, 100, 50);

const json = rect.toJSON();
console.log(json);
// { x: 10, y: 20, width: 100, height: 50, top: 20, right: 110, bottom: 70, left: 10 }
console.log(typeof json); // "object"
```

### Serializing to a JSON string

The `DOMRectReadOnly` object from the previous example is automatically serialized by {{jsxref("JSON.stringify()")}}, which calls the `toJSON()` method.

```js
const rectJSON = JSON.stringify(rect);
console.log(rectJSON);
```

This would log a JSON string like so (formatted for readability):

```json
{
  "x": 10,
  "y": 20,
  "width": 100,
  "height": 50,
  "top": 20,
  "right": 110,
  "bottom": 70,
  "left": 10
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
