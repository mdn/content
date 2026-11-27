---
title: "RTCPeerConnection: RTCPeerConnection() constructor"
short-title: RTCPeerConnection()
slug: Web/API/RTCPeerConnection/RTCPeerConnection
page-type: web-api-constructor
browser-compat: api.RTCPeerConnection.RTCPeerConnection
---

{{APIRef("WebRTC")}}

The **`RTCPeerConnection()`** constructor returns a newly-created {{domxref("RTCPeerConnection")}}, which represents a connection between the local device and a remote peer.

## Syntax

```js-nolint
new RTCPeerConnection()
new RTCPeerConnection(configuration)
```

### Parameters

- `configuration` {{optional_inline}}
  - : An object providing options to configure the new connection:
    - `alwaysNegotiateDataChannels` {{optional_inline}}
      - : A boolean value that, if set to `true`, specifies that the application will negotiate data channels in the {{glossary("SDP")}} offer before creating an {{domxref("RTCDataChannel")}}. This also negotiates the data `m=` section before any audio or video `m=` sections. The data `m=` section is also used as the "offerer-tagged" `m=` section for the BUNDLE. Defaults to `false`.

        The advantage of setting `alwaysNegotiateDataChannels` to `true` is that you don't need to create a data channel before your first {{domxref("RTCPeerConnection.createOffer()")}} call, or accept a second renegotiation when {{domxref("RTCPeerConnection.negotiationneeded_event", "negotiationneeded")}} is fired.

        > [!NOTE]
        > Once set, the value of `alwaysNegotiateDataChannels` can't be changed after the connection is created. Calling {{domxref("RTCPeerConnection.setConfiguration()")}} with a different value will throw an `InvalidModificationError`.
    - `bundlePolicy` {{optional_inline}}
      - : Specifies how to handle negotiation of candidates when the remote peer is not compatible with the [SDP BUNDLE standard](https://datatracker.ietf.org/doc/rfc8843/). If the remote endpoint is BUNDLE-aware, all media tracks and data channels are bundled onto a single transport at the completion of negotiation, regardless of policy used, and any superfluous transports that were created initially are closed at that point.

        In technical terms, a BUNDLE lets all media flow between two peers flow across a single **5-tuple**; that is, from a single IP and port on one peer to a single IP and port on the other peer, using the same transport protocol.

        This must be one of the following string values, if not `balanced` is assumed:
        - `"balanced"`
          - : The ICE agent initially creates one {{domxref("RTCDtlsTransport")}} for each type of content added: audio, video, and data channels. If the remote endpoint is not BUNDLE-aware, then each of these DTLS transports handles all the communication for one type of data.
        - `"max-compat"`
          - : The ICE agent initially creates one {{domxref("RTCDtlsTransport")}} per media track and a separate one for data channels. If the remote endpoint is not BUNDLE-aware, everything is negotiated on these separate DTLS transports.
        - `"max-bundle"`
          - : The ICE agent initially creates only a single {{domxref("RTCDtlsTransport")}} to carry all of the {{DOMxRef("RTCPeerConnection")}}'s data. If the remote endpoint is not BUNDLE-aware, then only a single track will be negotiated and the rest ignored.

    - `certificates` {{optional_inline}}
      - : An {{jsxref("Array")}} of objects of type {{domxref("RTCCertificate")}} which are used by the connection for authentication. If this property isn't specified, a set of certificates is generated automatically for each {{domxref("RTCPeerConnection")}} instance. Although only one certificate is used by a given connection, providing certificates for multiple algorithms may improve the odds of successfully connecting in some circumstances. See [Using certificates](#using_certificates) for further information.

        > [!NOTE]
        > This option can't be changed after the connection is created.
        > If a later call to {{domxref("RTCPeerConnection.setConfiguration()")}} passes different certificates or leaves out certificates that were passed to the constructor, it throws an `InvalidModificationError`.

    - `iceCandidatePoolSize` {{optional_inline}}
      - : An integer from 0 to 255 that specifies how many sets of ICE candidates to gather in advance, before {{domxref("RTCPeerConnection.setLocalDescription()")}} is called.
        The default value is `0`, which means no candidates are gathered in advance.

        Normally, the ICE agent starts gathering candidates when the local description is set, because that's when it first knows how many sets it needs.
        It needs one set for each ICE component, which is a separate network flow that the connection uses.
        Gathering candidates in advance means that at least some of them are ready as soon as `setLocalDescription()` is called, so the connection can be set up faster.
        For example, an app that expects an incoming call can gather candidates while it waits, and then respond as soon as the call arrives.
        Candidates gathered in advance are used only for the first offer/answer exchange, and any left over are then discarded.

        If the value is changed with {{domxref("RTCPeerConnection.setConfiguration()")}} before `setLocalDescription()` is called, candidates are gathered or discarded straight away to match the new size.
        Once `setLocalDescription()` has been called, the value can't be changed.

        > [!NOTE]
        > Candidates gathered in advance use resources on the STUN and TURN servers for as long as they are held.

    - `iceServers` {{optional_inline}}
      - : An array of objects, each describing one server which may be used by the ICE agent; these are typically STUN and/or TURN servers. If this isn't specified, the connection attempt will be made with no STUN or TURN server available, which limits the connection to local peers. Each object may have the following properties:
        - `credential` {{optional_inline}}
          - : The credential to use when logging into the server. This is only used if the object represents a TURN server.
        - `credentialType` {{optional_inline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
          - : If the object represents a TURN server, this attribute specifies what kind of `credential` is to be used when connecting. The default is `"password"`.
        - `urls`
          - : This **required** property is either a single string or an array of strings, each specifying a URL which can be used to connect to the server.
        - `username` {{optional_inline}}
          - : If the object represents a TURN server, then this is the username to use during the authentication.

    - `iceTransportPolicy` {{optional_inline}}
      - : A string representing the current ICE transport policy. Possible values are:
        - `"all"`
          - : All ICE candidates will be considered. This is the default value.
        - `"public"` {{deprecated_inline}}
          - : Only ICE candidates with public IP addresses will be considered.
        - `"relay"`
          - : Only ICE candidates whose IP addresses are being relayed, such as those being passed through a TURN server, will be considered.

    - `peerIdentity` {{optional_inline}}
      - : A string which specifies the target peer identity for the {{domxref("RTCPeerConnection")}}. If this value is set (it defaults to `null`), the `RTCPeerConnection` will not connect to a remote peer unless it can successfully authenticate with the given name.
    - `rtcpMuxPolicy` {{optional_inline}}
      - : A string which specifies the RTCP mux policy to use when gathering ICE candidates, in order to support non-multiplexed RTCP. Possible values are:
        - `"negotiate"`
          - : Instructs the ICE agent to gather both {{Glossary("RTP")}} and {{Glossary("RTCP")}} candidates. If the remote peer can multiplex RTCP, then RTCP candidates are multiplexed atop the corresponding RTP candidates. Otherwise, both the RTP and RTCP candidates are returned, separately.
        - `"require"`
          - : Tells the ICE agent to gather ICE candidates for only RTP, and to multiplex RTCP atop them. If the remote peer doesn't support RTCP multiplexing, then session negotiation fails. This is the default value.

### Return value

A newly-created {{domxref("RTCPeerConnection")}} object, configured as described by `configuration`, if specified; otherwise, configured to appropriate basic defaults.

### Exceptions

- `InvalidAccessError` {{domxref("DOMException")}}
  - : Thrown if a certificate in `configuration.certificates` has expired or was created by a page with a different origin.
    Also thrown if an entry in `configuration.iceServers` has a {{Glossary("TURN")}} URL but no `username` or `credential`.
- `NotSupportedError` {{domxref("DOMException")}}
  - : Thrown if one of the URLs in `configuration.iceServers` uses a STUN or TURN scheme (such as `turns:`) that the browser doesn't support.
- `SyntaxError` {{domxref("DOMException")}}
  - : Thrown if an entry in `configuration.iceServers` has an empty `urls` array or if one of its URLs isn't a valid STUN or TURN URL.
- {{jsxref("TypeError")}}
  - : Thrown if `configuration.iceCandidatePoolSize` isn't a finite number in the range 0 to 255.
    Also thrown if `configuration.bundlePolicy`, `configuration.iceTransportPolicy`, or `configuration.rtcpMuxPolicy` isn't one of the allowed values, or if an entry in `configuration.iceServers` has no `urls` property.

## Description

### Using certificates

When you wish to provide your own certificates for use by an {{domxref("RTCPeerConnection")}} instead of having the `RTCPeerConnection` generate them automatically, you do so by calling the static {{domxref("RTCPeerConnection.generateCertificate_static", "RTCPeerConnection.generateCertificate()")}} function.

The `certificates` option can't be changed after the connection is created.
If a later call to {{domxref("RTCPeerConnection.setConfiguration", "setConfiguration()")}} passes different certificates, it throws an `InvalidModificationError`.

This attribute supports providing multiple certificates because even though a given DTLS connection uses only one certificate, providing multiple certificates allows support for multiple encryption algorithms. The implementation of `RTCPeerConnection` will choose which certificate to use based on the algorithms it and the remote peer support, as determined during DTLS handshake.

If you don't provide certificates, new ones are generated automatically. One obvious benefit to providing your own is identity key continuity—if you use the same certificate for subsequent calls, the remote peer can tell you're the same caller. This also avoids the cost of generating new keys.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Signaling and video calling](/en-US/docs/Web/API/WebRTC_API/Signaling_and_video_calling)
- [WebRTC architecture overview](/en-US/docs/Web/API/WebRTC_API/Protocols)
- [Lifetime of a WebRTC session](/en-US/docs/Web/API/WebRTC_API/Session_lifetime)
- {{domxref("RTCPeerConnection")}}
