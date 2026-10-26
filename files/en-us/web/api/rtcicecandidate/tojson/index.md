---
title: "RTCIceCandidate: toJSON() method"
short-title: toJSON()
slug: Web/API/RTCIceCandidate/toJSON
page-type: web-api-instance-method
browser-compat: api.RTCIceCandidate.toJSON
---

{{APIRef("WebRTC")}}

The **`toJSON()`** method of the {{domxref("RTCIceCandidate")}} interface returns a JSON-serializable plain object representing the `RTCIceCandidate` object.

The method is automatically called by {{jsxref("JSON.stringify()")}} when an `RTCIceCandidate` object is encountered during [JSON](/en-US/docs/Glossary/JSON) serialization. The serialized value can then be deserialized using the {{domxref("RTCIceCandidate/RTCIceCandidate", "RTCIceCandidate()")}} constructor within the reviver of {{jsxref("JSON.parse()")}}.

## Syntax

```js-nolint
toJSON()
```

### Parameters

None.

### Return value

A JSON-serializable plain object containing the following properties:

- {{domxref("RTCIceCandidate/candidate", "candidate")}}
- {{domxref("RTCIceCandidate/sdpMid", "sdpMid")}}
- {{domxref("RTCIceCandidate/sdpMLineIndex", "sdpMLineIndex")}}
- {{domxref("RTCIceCandidate/usernameFragment", "usernameFragment")}}

Each property's value is copied as-is.

## Examples

### Calling toJSON() directly

This example creates an `RTCIceCandidate` object. Calling `toJSON()` directly returns a plain object. Its properties have the same values as the corresponding properties of the original object.

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

The `RTCIceCandidate` object from the previous example is serialized using {{jsxref("JSON.stringify()")}}, which calls the `toJSON()` method automatically.

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
