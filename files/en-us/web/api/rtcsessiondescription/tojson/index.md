---
title: RTCSessionDescription.toJSON()
slug: Web/API/RTCSessionDescription/toJSON
page-type: web-api-instance-method
tags:
  - Method
  - RTCSessionDescription
  - Reference
  - Serializer
  - WebRTC
browser-compat: api.RTCSessionDescription.toJSON
---
{{APIRef("WebRTC")}}

The **`RTCSessionDescription.toJSON()`** method generates a
{{Glossary("JSON")}} description of the object. Both properties,
{{domxref("RTCSessionDescription.type", "type")}} and
{{domxref("RTCSessionDescription.sdp", "sdp")}}, are contained in the generated JSON.

## Syntax

```js
toJSON()
```

### Parameters

None.

### Return value

A {{jsxref("JSON")}} object containing the following properties:

- `type`
  - : One of the following: `"offer"`, `"answer"`, `"pranswer"` or `null`.
- `sdp`
  - : Either `null` or the {{Glossary("SDP")}} message string corresponding to {{domxref("RTCSessionDescription.sdp")}} property.

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
