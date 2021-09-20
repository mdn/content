---
title: RTCConfiguration.iceTransportPolicy
slug: Web/API/RTCConfiguration/iceTransportPolicy
tags:
  - API
  - ICE
  - Policy
  - Property
  - RTCConfiguration
  - Reference
  - Transport
  - WebRTC
  - WebRTC API
  - WebRTC Device API\
  - iceTransportPolicy
browser-compat: api.RTCConfiguration.iceTransportPolicy
---
{{DefaultAPISidebar("WebRTC API")}}

The [WebRTC Device API](/en-US/docs/Web/API/WebRTC_API) dictionary
{{domxref("RTCConfiguration")}}'s **`iceTransportPolicy`**
property is a string indicating the transport selection policy the {{Glossary("ICE")}}
agent should use during negotiation of connections.

If this property isn't included in the `RTCConfiguration`, the default
value, `all`, is used.

## Syntax

```js
let rtcConfiguration = {
  iceTransportPolicy: policy
};

rtcConfiguration.iceTransportPolicy = policy;
let policy = rtcConfiguration.iceTransportPolicy;
```

### Value

A {{domxref("DOMString")}} which indicates what [ICE candidate policy](https://rtcweb-wg.github.io/jsep/#rfc.section.3.5.3)
the ICE agent should use during the negotiation process, per the [JSEP standard](https://rtcweb-wg.github.io/jsep/). The permitted values are:

- `all`
  - : The ICE agent is permitted to use any kind of candidate, including both local and
    relay candidates. The agent—or the browser itself—may still perform some form of IP
    filtering on the incoming candidates for reasons including privacy and security, as
    well as to limit the number of candidates. **This is the default.**
- `relay`

  - : The ICE agent only considers media relay candidates when evaluating candidates.
    This includes, for example, those candidates relayed by a {{Glossary("STUN")}} or
    {{Glossary("TURN")}} server.

    > **Note:** This can be used to prevent the remote endpoint from receiving the
    > user's IP addresses, which may be important in some security situations. For
    > example, in a video calling application, the app may want to prevent unknown callers
    > from learning the callee's IP addresses until the callee has agreed to receive the
    > call.

## Examples

In this example, a new connection is configured to only accept relay candidates.

```js
let config = {
  iceServers: [
    {
      urls: [ "stun:stun.example.com" ]
    },
  ],
  iceTransportPolicy: "relay"
};

let pc = new RTCPeerConnection(config);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
