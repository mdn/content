---
title: "RTCPeerConnection: RTCPeerConnection() constructor"
short-title: RTCPeerConnection()
slug: Web/API/RTCPeerConnection/RTCPeerConnection
page-type: web-api-constructor
browser-compat: api.RTCPeerConnection.RTCPeerConnection
---

{{APIRef("WebRTC")}}

The **`RTCPeerConnection()`**
constructor returns a newly-created {{domxref("RTCPeerConnection")}}, which represents
a connection between the local device and a remote peer.

## Syntax

```js-nolint
new RTCPeerConnection()
new RTCPeerConnection(configuration)
```

### Parameters

- `configuration` {{optional_inline}}

  - : An object providing options to configure the new connection:

    - `bundlePolicy` {{optional_inline}}

      - : Specifies how to handle negotiation of candidates
        when the remote peer is not compatible
        with the [SDP BUNDLE standard](https://webrtcstandards.info/sdp-bundle/).
        If the remote endpoint is BUNDLE-aware,
        all media tracks and data channels are bundled onto a single transport at the completion of negotiation,
        regardless of policy used,
        and any superfluous transports that were created initially are closed at that point.

        In technical terms,
        a BUNDLE lets all media flow between two peers flow across a single **5-tuple**;
        that is, from a single IP and port on one peer to a single IP and port on the other peer,
        using the same transport protocol.

        This must be one of the following string values,
        if not `balanced` is assumed:

        - `balanced`
          - : The ICE agent initially creates one {{domxref("RTCDtlsTransport")}}
            for each type of content added: audio, video, and data channels.
            If the remote endpoint is not BUNDLE-aware,
            then each of these DTLS transports handles all the communication for one type of data.
        - `max-compat`
          - : The ICE agent initially creates one {{domxref("RTCDtlsTransport")}} per media track
            and a separate one for data channels.
            If the remote endpoint is not BUNDLE-aware,
            everything is negotiated on these separate DTLS transports.
        - `max-bundle`
          - : The ICE agent initially creates only a single {{domxref("RTCDtlsTransport")}}
            to carry all of the {{DOMxRef("RTCPeerConnection")}}'s data.
            If the remote endpoint is not BUNDLE-aware,
            then only a single track will be negotiated and the rest ignored.

    - `certificates` {{optional_inline}}

      - : An {{jsxref("Array")}} of objects of type {{domxref("RTCCertificate")}}
        which are used by the connection for authentication.
        If this property isn't specified,
        a set of certificates is generated automatically for each {{domxref("RTCPeerConnection")}} instance.
        Although only one certificate is used by a given connection,
        providing certificates for multiple algorithms may improve the odds of successfully connecting in some circumstances.
        See [Using certificates](#using_certificates) for further information.

        > **Note:** This configuration option cannot be changed after it is first specified; once the certificates have been set, this property is ignored in future calls to {{domxref("RTCPeerConnection.setConfiguration()")}}.

    - `iceCandidatePoolSize` {{optional_inline}}

      - : An unsigned 16-bit integer value which specifies the size of the prefetched ICE candidate pool.
        The default value is 0 (meaning no candidate prefetching will occur).
        You may find in some cases that connections can be established more quickly
        by allowing the ICE agent to start fetching ICE candidates
        before you start trying to connect,
        so that they're already available for inspection
        when {{domxref("RTCPeerConnection.setLocalDescription()")}} is called.

        > **Note:** Changing the size of the ICE candidate pool may trigger the beginning of ICE gathering.

    - `iceServers` {{optional_inline}}
      - : An array of {{domxref("RTCIceServer")}} objects,
        each describing one server which may be used by the ICE agent;
        these are typically STUN and/or TURN servers.
        If this isn't specified,
        the connection attempt will be made with no STUN or TURN server available,
        which limits the connection to local peers.
    - `iceTransportPolicy` {{optional_inline}}

      - : The current ICE transport policy;
        if the policy isn't specified, `all` is assumed by default,
        allowing all candidates to be considered.
        Possible values are:

        - `"all"`
          - : All ICE candidates will be considered.
        - `"public"` {{deprecated_inline}}
          - : Only ICE candidates with public IP addresses will be considered. _Removed from the specification's May 13, 2016 working draft._
        - `"relay"`
          - : Only ICE candidates whose IP addresses are being relayed, such as those being passed through a TURN server, will be considered.

    - `peerIdentity` {{optional_inline}}
      - : A string
        which specifies the target peer identity for the {{domxref("RTCPeerConnection")}}.
        If this value is set
        (it defaults to `null`),
        the `RTCPeerConnection` will not connect to a remote peer
        unless it can successfully authenticate with the given name.
    - `rtcpMuxPolicy` {{optional_inline}}

      - : The RTCP mux policy to use when gathering ICE candidates, in order to support non-multiplexed RTCP. Possible values are:

        - `negotiate`
          - : Instructs the ICE agent to gather both {{Glossary("RTP")}} and {{Glossary("RTCP")}} candidates.
            If the remote peer can multiplex RTCP,
            then RTCP candidates are multiplexed atop the corresponding RTP candidates.
            Otherwise, both the RTP and RTCP candidates are returned, separately.
        - `require`
          - : Tells the ICE agent to gather ICE candidates for only RTP,
            and to multiplex RTCP atop them.
            If the remote peer doesn't support RTCP multiplexing,
            then session negotiation fails.
            This is the default value.

### Return value

A newly-created {{domxref("RTCPeerConnection")}} object, configured as described by
`configuration`, if specified; otherwise, configured to appropriate basic
defaults.

### Using certificates

When you wish to provide your own certificates for use by an
{{domxref("RTCPeerConnection")}} instead of having the `RTCPeerConnection`
generate them automatically, you do so by calling the static
{{domxref("RTCPeerConnection.generateCertificate()")}} function.

The `certificates` property's value cannot be changed once it's first
specified. If it's included in the configuration passed into a call to a connection's
{{domxref("RTCPeerConnection.setConfiguration", "setConfiguration()")}}, it is ignored.

This attribute supports providing multiple certificates because even though a given
DTLS connection uses only one certificate, providing multiple certificates allows
support for multiple encryption algorithms. The implementation of
`RTCPeerConnection` will choose which certificate to use based on the
algorithms it and the remote peer support, as determined during DTLS handshake.

If you don't provide certificates, new ones are generated automatically. One obvious
benefit to providing your own is identity key continuity—if you use the same certificate
for subsequent calls, the remote peer can tell you're the same caller. This also avoids
the cost of generating new keys.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Signaling and video calling](/en-US/docs/Web/API/WebRTC_API/Signaling_and_video_calling)
- [WebRTC architecture overview](/en-US/docs/Web/API/WebRTC_API/Protocols)
- [Lifetime of a WebRTC session](/en-US/docs/Web/API/WebRTC_API/Session_lifetime)
- {{domxref("RTCPeerConnection")}}
