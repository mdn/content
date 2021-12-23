---
title: RTCSessionDescription.toJSON()
slug: Web/API/RTCSessionDescription/toJSON
tags:
  - Experimental
  - Method
  - RTCSessionDescription
  - Reference
  - Serializer
  - WebRTC
browser-compat: api.RTCSessionDescription.toJSON
---
{{APIRef("WebRTC")}}{{SeeCompatTable}}

The **`RTCSessionDescription.toJSON()`** method generates a
{{Glossary("JSON")}} description of the object. Both properties,
{{domxref("RTCSessionDescription.type", "type")}} and
{{domxref("RTCSessionDescription.sdp", "sdp")}}, are contained in the generated JSON.

## Syntax

```js
var jsonValue = sd.toJSON();
```

The result value is a {{jsxref("JSON")}} object containing the following values:

- `"type"`, containing the value of the
  {{domxref("RTCSessionDescription.type")}} property and can be one of the following
  values: `"offer"`, `"answer"`, `"pranswer"` or
  `null`.
- `"sdp"`, containing a {{domxref("DOMString")}}, or `null`,
  with the {{Glossary("SDP")}} message corresponding to
  {{domxref("RTCSessionDescription.sdp")}} property.

## Example

```js
// sd is a RTCSessionDescriptor

alert(JSON.stringify(sd)); // This call the toJSON() method behind the scene.
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebRTC](/en-US/docs/Web/API/WebRTC_API)
