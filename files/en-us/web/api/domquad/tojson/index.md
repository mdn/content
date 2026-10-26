---
title: "DOMQuad: toJSON() method"
short-title: toJSON()
slug: Web/API/DOMQuad/toJSON
page-type: web-api-instance-method
browser-compat: api.DOMQuad.toJSON
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

The **`toJSON()`** method of the {{domxref("DOMQuad")}} interface returns a JSON-serializable plain object representing the `DOMQuad` object.

The method is automatically called by {{jsxref("JSON.stringify()")}} when a `DOMQuad` object is encountered during [JSON](/en-US/docs/Glossary/JSON) serialization. The serialized value can then be deserialized using the {{domxref("DOMQuad/fromQuad_static", "DOMQuad.fromQuad()")}} function within the reviver of {{jsxref("JSON.parse()")}}.

## Syntax

```js-nolint
toJSON()
```

### Parameters

None.

### Return value

A JSON-serializable plain object containing the following properties:

- {{domxref("DOMQuad/p1", "p1")}}
- {{domxref("DOMQuad/p2", "p2")}}
- {{domxref("DOMQuad/p3", "p3")}}
- {{domxref("DOMQuad/p4", "p4")}}

The `p1`, `p2`, `p3`, and `p4` properties represent the four points of the quadrilateral. When the returned object is passed to {{jsxref("JSON.stringify()")}}, each point is serialized using its {{domxref("DOMPointReadOnly/toJSON", "toJSON()")}} method.

## Examples

### Calling toJSON() directly

This example creates a `DOMQuad` object. Calling `toJSON()` directly returns a plain object. Its properties have the same values as the corresponding properties of the original object.

```js
const topLeft = new DOMPoint(window.screenX, window.screenY);
const topRight = new DOMPoint(
  window.screenX + window.innerWidth,
  window.screenY,
);
const bottomLeft = new DOMPoint(
  window.screenX,
  window.screenY + window.innerHeight,
);
const bottomRight = new DOMPoint(
  window.screenX + window.innerWidth,
  window.screenY + window.innerHeight,
);

const quad = new DOMQuad(topLeft, topRight, bottomRight, bottomLeft);

const json = quad.toJSON();
console.log(json); // A plain object
console.log(typeof json); // "object"
console.log(json.p1.x); // Same value as quad.p1.x
```

### Serializing to a JSON string

The `DOMQuad` object from the previous example is serialized using {{jsxref("JSON.stringify()")}}, which calls the `toJSON()` method automatically.

```js
const quadJSON = JSON.stringify(quad);
console.log(quadJSON);
```

For a window at screen coordinates `(0, 0)` with an inner width of `800` and an inner height of `600`, this would log a JSON string like so (formatted for readability):

```json
{
  "p1": {
    "x": 0,
    "y": 0,
    "z": 0,
    "w": 1
  },
  "p2": {
    "x": 800,
    "y": 0,
    "z": 0,
    "w": 1
  },
  "p3": {
    "x": 800,
    "y": 600,
    "z": 0,
    "w": 1
  },
  "p4": {
    "x": 0,
    "y": 600,
    "z": 0,
    "w": 1
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
