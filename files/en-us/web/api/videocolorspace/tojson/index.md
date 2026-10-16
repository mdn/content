---
title: "VideoColorSpace: toJSON() method"
short-title: toJSON()
slug: Web/API/VideoColorSpace/toJSON
page-type: web-api-instance-method
browser-compat: api.VideoColorSpace.toJSON
---

{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

The **`toJSON()`** method of the {{domxref("VideoColorSpace")}} interface returns a JSON-serializable plain object representing the `VideoColorSpace` object.

The `toJSON()` method is automatically called by {{jsxref("JSON.stringify()")}} when a `VideoColorSpace` object is stringified. This method is generally intended to, by default, usefully serialize `VideoColorSpace` objects during [JSON](/en-US/docs/Glossary/JSON) serialization, which can then be deserialized using the {{domxref("VideoColorSpace/VideoColorSpace", "VideoColorSpace()")}} constructor within the reviver of {{jsxref("JSON.parse()")}}.

## Syntax

```js-nolint
toJSON()
```

### Parameters

None.

### Return value

A JSON-serializable plain object, containing the following properties:

- {{domxref("VideoColorSpace/fullRange", "fullRange")}}
- {{domxref("VideoColorSpace/matrix", "matrix")}}
- {{domxref("VideoColorSpace/primaries", "primaries")}}
- {{domxref("VideoColorSpace/transfer", "transfer")}}

Each property's value is copied as-is.

## Examples

### Calling toJSON() directly

Calling `toJSON()` directly returns a plain object containing the `VideoColorSpace` object's properties.

```js
const colorSpace = new VideoColorSpace({
  primaries: "bt709",
  transfer: "bt709",
  matrix: "bt709",
  fullRange: true,
});

const json = colorSpace.toJSON();
console.log(json);
// { fullRange: true, matrix: "bt709", primaries: "bt709", transfer: "bt709" }
console.log(typeof json); // "object"
```

### Serializing to a JSON string

The `VideoColorSpace` object from the previous example is automatically serialized by {{jsxref("JSON.stringify()")}}, which calls the `toJSON()` method.

```js
console.log(JSON.stringify(colorSpace));
```

This would log a JSON string like so (formatted for readability):

```json
{
  "fullRange": true,
  "matrix": "bt709",
  "primaries": "bt709",
  "transfer": "bt709"
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
