---
title: "RTCIceCandidate: toJSON() method"
short-title: toJSON()
slug: Web/API/RTCIceCandidate/toJSON
page-type: web-api-instance-method
browser-compat: api.RTCIceCandidate.toJSON
---

{{APIRef("WebRTC")}}

The **`toJSON()`** method of the {{domxref("RTCIceCandidate")}} interface returns a JSON-serializable plain object representing the `RTCIceCandidate` object.

The `toJSON()` method is automatically called by {{jsxref("JSON.stringify()")}} when an `RTCIceCandidate` object is stringified. This method is generally intended to, by default, usefully serialize `RTCIceCandidate` objects during [JSON](/en-US/docs/Glossary/JSON) serialization, which can then be deserialized using the {{domxref("RTCIceCandidate/RTCIceCandidate", "RTCIceCandidate()")}} constructor within the reviver of {{jsxref("JSON.parse()")}}.

## Syntax

```js-nolint
toJSON()
```

### Parameters

None.

### Return value

A JSON-serializable plain object, containing the following properties:

- {{domxref("RTCIceCandidate/candidate", "candidate")}}
- {{domxref("RTCIceCandidate/sdpMid", "sdpMid")}}
- {{domxref("RTCIceCandidate/sdpMLineIndex", "sdpMLineIndex")}}
- {{domxref("RTCIceCandidate/usernameFragment", "usernameFragment")}}

Each property's value is copied as-is.

## Examples

### Calling toJSON() directly

This example creates an `RTCIceCandidate` object. Calling `toJSON()` directly returns a plain object. You can access its properties, which is the same as accessing them on the original object.

```js
const candidate = new RTCIceCandidate({
  candidate: "",
  sdpMid: "0",
  sdpMLineIndex: 0,
});

const json = candidate.toJSON();
console.log(json); // A plain object
console.log(typeof json); // "object"
console.log(json.candidate); // Same value as candidate.candidate
```

### Serializing to a JSON string

In this example, the `RTCIceCandidate` object from the previous example is automatically serialized by {{jsxref("JSON.stringify()")}}, which calls the `toJSON()` method.

```js
const jsonString = JSON.stringify(candidate);
console.log(jsonString);
```

This would log a JSON string like so (formatted for readability):

```json
{
  "candidate": "",
  "sdpMid": "0",
  "sdpMLineIndex": 0,
  "usernameFragment": null
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
