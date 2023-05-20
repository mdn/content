---
title: "RTCIceCandidate: tcpType property"
short-title: tcpType
slug: Web/API/RTCIceCandidate/tcpType
page-type: web-api-instance-property
browser-compat: api.RTCIceCandidate.tcpType
---

{{APIRef("WebRTC")}}

The **{{domxref("RTCIceCandidate")}}** interface's read-only **`tcpType`** property is included on TCP candidates to provide additional details about the candidate type.

The `tcpType` field's value is set from the `candidateInfo` options object passed to the {{domxref("RTCIceCandidate.RTCIceCandidate", "RTCIceCandidate()")}} constructor.
You can't specify the value of `tcpType` directly in the options object, but its value is automatically extracted from the object's `candidate` a-line, if it's formatted properly.

## Value

If the {{domxref("RTCIceCandidate.protocol","protocol")}} is "tcp", `tcpType` has one of the following values:

- `"active"`
  - : The transport will try to open an outbound connection but won't receive incoming connection requests.
- `"passive"`
  - : The transport will receive incoming connection requests but won't try to open an outbound connection.
- `"so"`
  - : The transport will try to open a connection simultaneously with its peer.

`tcpType` is `null` for {{Glossary("UDP")}} candidates.

## Examples

In this example, the candidate's {{domxref("RTCIceCandidate.protocol", "protocol")}}
and `tcpType` are used to adjust the user interface for simultaneous-open TCP candidates.

```js
if (candidate.protocol === "tcp" && candidate.tcpType === "so") {
  adjustForSimultaneousOpen(candidate);
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebRTC API](/en-US/docs/Web/API/WebRTC_API)
- [Introduction to WebRTC protocols](/en-US/docs/Web/API/WebRTC_API/Protocols)
- [WebRTC connectivity](/en-US/docs/Web/API/WebRTC_API/Connectivity)
- {{domxref("RTCIceCandidate.protocol")}}
- {{domxref("RTCIceCandidate.type")}}
