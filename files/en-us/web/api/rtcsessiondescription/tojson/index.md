---
title: "RTCSessionDescription: toJSON() method"
short-title: toJSON()
slug: Web/API/RTCSessionDescription/toJSON
page-type: web-api-instance-method
browser-compat: api.RTCSessionDescription.toJSON
---

{{APIRef("WebRTC")}}

The **`toJSON()`** method of the {{domxref("RTCSessionDescription")}} interface returns a JSON-serializable plain object representing the `RTCSessionDescription` object.

The `toJSON()` method is automatically called by {{jsxref("JSON.stringify()")}} when an `RTCSessionDescription` object is stringified. This method is generally intended to, by default, usefully serialize `RTCSessionDescription` objects during [JSON](/en-US/docs/Glossary/JSON) serialization.

## Syntax

```js-nolint
toJSON()
```

### Parameters

None.

### Return value

A JSON-serializable plain object, containing the following properties:

- {{domxref("RTCSessionDescription/type", "type")}}
- {{domxref("RTCSessionDescription/sdp", "sdp")}}

Each property's value is copied as-is.

## Examples

### Calling toJSON() directly

This example creates an `RTCSessionDescription` object. Calling `toJSON()` directly returns a plain object. You can access its properties, which is the same as accessing them on the original object.

```js
const description = new RTCSessionDescription({ type: "rollback", sdp: "" });

const json = description.toJSON();
console.log(json); // A plain object
console.log(typeof json); // "object"
console.log(json.type); // Same value as description.type
```

### Serializing to a JSON string

In this example, the `RTCSessionDescription` object from the previous example is automatically serialized by {{jsxref("JSON.stringify()")}}, which calls the `toJSON()` method.

```js
console.log(JSON.stringify(description));
```

This would log a JSON string like so (formatted for readability):

```json
{
  "type": "rollback",
  "sdp": ""
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebRTC](/en-US/docs/Web/API/WebRTC_API)
