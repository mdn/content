---
title: RTCIceCredentialType
slug: Web/API/RTCIceCredentialType
browser-compat: api.RTCIceCredentialType
---
{{APIRef("WebRTC")}}

The WebRTC API's **`RTCIceCredentialType`** enumerated string type defines the authentication method used to gain access to an {{Glossary("ICE")}} server identified by an {{domxref("RTCIceServer")}} object.

## Values

- `oauth`
  - : The {{domxref("RTCIceServer")}} requires the use of OAuth 2.0 to authenticate in order to use the ICE server described. This process is detailed in {{RFC(7635)}}. This property was formerly called `token`.
- `password`
  - : The `RTCIceServer` requires a username and password to authenticate prior to using the described ICE server.

## Obsolete values

The following values are no longer part of the WebRTC specification, but were in the past.

- `token`
  - : Authenticating with the ICE server requires the use of an OAuth 2.0 token as defined in {{RFC(7635)}}. This value has been renamed to `oauth`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("RTCIceServer")}}
- {{domxref("RTCIceServer.credential")}}
