---
title: RTCConfiguration
slug: Web/API/RTCConfiguration
tags:
  - API
  - Configuration
  - Dictionary
  - RTCConfiguration
  - Reference
  - WebRTC
  - WebRTC API
  - WebRTC Device API
  - rtc
browser-compat: api.RTCConfiguration
---
<p>{{APIRef("WebRTC")}}</p>

<p>
  The <strong><code>RTCConfiguration</code></strong> dictionary is used
  to provide configuration options for an {{domxref("RTCPeerConnection")}}.
  It may be passed into the constructor when instantiating a connection,
  or used with the {{domxref("RTCPeerConnection.getConfiguration()")}}
  and {{domxref("RTCPeerConnection.setConfiguration()")}} methods,
  which allow inspecting and changing the configuration
  while a connection is established.</p>

<p>The options include ICE server and transport settings and identity information.</p>

<h2 id="Properties">Properties</h2>

<dl>
  <dt>{{domxref("RTCConfiguration.bundlePolicy", "bundlePolicy")}} {{optional_inline}}</dt>
  <dd>
    <p>
      Specifies how to handle negotiation of candidates
      when the remote peer is not compatible
      with the <a href="https://webrtcstandards.info/sdp-bundle/">SDP BUNDLE standard</a>.
      If the remote endpoint is BUNDLE-aware,
      all media tracks and data channels are bundled onto a single transport at the completion of negotiation,
      regardless of policy used,
      and any superfluous transports that were created initially are closed at that point.
    </p>
    <p>
      In technical terms,
      a BUNDLE lets all media flow between two peers flow across a single <strong>5-tuple</strong>;
      that is, from a single IP and port on one peer to a single IP and port on the other peer,
      using the same transport protocol.
    </p>
    <p>
      This must be one of the following string values,
      if not <code>balanced</code> is assumed:
    </p>
    <dl>
      <dt><code>balanced</code></dt>
      <dd>
        The ICE agent initially creates one {{domxref("RTCDtlsTransport")}}
        for each type of content added: audio, video, and data channels.
        If the remote endpoint is not BUNDLE-aware,
        then each of these DTLS transports handles all the communication for one type of data.
      </dd>

      <dt><code>max-compat</code></dt>
      <dd>
        The ICE agent initially creates one {{domxref("RTCDtlsTransport")}} per media track
        and a separate one for data channels.
        If the remote endpoint is not BUNDLE-aware,
        everything is negotiated on these separate DTLS transports.
      </dd>

      <dt><code>max-bundle</code></dt>
      <dd>
        The ICE agent initially creates only a single {{domxref("RTCDtlsTransport")}}
        to carry all of the {{DOMxRef("RTCPeerConnection")}}'s data.
        If the remote endpoint is not BUNDLE-aware,
        then only a single track will be negotiated and the rest ignored.
      </dd>
    </dl>
  </dd>

  <dt>{{domxref("RTCConfiguration.certificates", "certificates")}} {{optional_inline}}</dt>
  <dd>
    An {{jsxref("Array")}} of objects of type {{domxref("RTCCertificate")}}
    which are used by the connection for authentication.
    If this property isn't specified,
    a set of certificates is generated automatically for each {{domxref("RTCPeerConnection")}} instance.
    Although only one certificate is used by a given connection,
    providing certificates for multiple algorithms may improve the odds of successfully connecting in some circumstances.
    See <a href="/en-US/docs/Web/API/RTCConfiguration/certificates#using_certificates">Using certificates</a> for further information.
    <div class="note"><p><strong>Note:</strong> This configuration option cannot be changed after it is first specified; once the certificates have been set, this property is ignored in future calls to {{domxref("RTCPeerConnection.setConfiguration()")}}.</p></div>
  </dd>

  <dt>{{domxref("RTCConfiguration.iceCandidatePoolSize", "iceCandidatePoolSize")}} {{optional_inline}}</dt>
  <dd>
    An unsigned 16-bit integer value which specifies the size of the prefetched ICE candidate pool.
    The default value is 0 (meaning no candidate prefetching will occur).
    You may find in some cases that connections can be established more quickly
    by allowing the ICE agent to start fetching ICE candidates
    before you start trying to connect,
    so that they're already available for inspection
    when {{domxref("RTCPeerConnection.setLocalDescription()")}} is called.
    <div class="note"><p><strong>Note:</strong> Changing the size of the ICE candidate pool may trigger the beginning of ICE gathering.</p></div>
  </dd>

  <dt>{{domxref("RTCConfiguration.iceServers", "iceServers")}} {{optional_inline}}</dt>
  <dd>
    An array of {{domxref("RTCIceServer")}} objects,
    each describing one server which may be used by the ICE agent;
    these are typically STUN and/or TURN servers.
    If this isn't specified,
    the connection attempt will be made with no STUN or TURN server available,
    which limits the connection to local peers.
  </dd>

  <dt>{{domxref("RTCConfiguration.iceTransportPolicy", "iceTransportPolicy")}} {{optional_inline}}</dt>
  <dd>
    <p>The current ICE transport policy;
    if the policy isn't specified, <code>all</code> is assumed by default,
    allowing all candidates to be considered.
    Possible values are:</p>
    <dl>
      <dt><code>"all"</code></dt>
      <dd>All ICE candidates will be considered.</dd>
      <dt><code>"public" </code>{{deprecated_inline}}</dt>
      <dd>Only ICE candidates with public IP addresses will be considered. <em>Removed from the specification's May 13, 2016 working draft.</em></dd>
      <dt><code>"relay"</code></dt>
      <dd>Only ICE candidates whose IP addresses are being relayed, such as those being passed through a STUN or TURN server, will be considered.</dd>
    </dl>
  </dd>

  <dt>{{domxref("RTCConfiguration.peerIdentity", "peerIdentity")}} {{optional_inline}}</dt>
  <dd>
    A {{domxref("DOMString")}}
    which specifies the target peer identity for the {{domxref("RTCPeerConnection")}}.
    If this value is set
    (it defaults to <code>null</code>),
    the <code>RTCPeerConnection</code> will not connect to a remote peer
    unless it can successfully authenticate with the given name.
  </dd>

  <dt>{{domxref("RTCConfiguration.rtcpMuxPolicy", "rtcpMuxPolicy")}} {{optional_inline}}</dt>
  <dd>
    The RTCP mux policy to use when gathering ICE candidates, in order to support non-multiplexed RTCP. Possible values are:
    <dl>
      <dt><code>negotiate</code></dt>
      <dd>
        Instructs the ICE agent to gather both {{Glossary("RTP")}} and {{Glossary("RTCP")}} candidates.
        If the remote peer can multiplex RTCP,
        then RTCP candidates are multiplexed atop the corresponding RTP candidates.
        Otherwise, both the RTP and RTCP candidates are returned, separately.
      </dd>

      <dt><code>require</code></td>
      <dd>
        Tells the ICE agent to gather ICE candidates for only RTP,
        and to multiplex RTCP atop them.
        If the remote peer doesn't support RTCP multiplexing,
        then session negotiation fails.
        This is the default value.
      </dd>
    </dl>
   </dd>
</dl>

<h2 id="Example">Example</h2>

<p>The configuration below establishes two ICE servers. The first one, <code>stun:stun.services.mozilla.com</code>, requires authentication, so the username and password are provided. The second server has two URLs: <code>stun:stun.example.com</code> and <code>stun:stun-1.example.com</code>.</p>

<pre class="brush: js">var configuration = { iceServers: [{
                          urls: "stun:stun.services.mozilla.com",
                          username: "louis@mozilla.com",
                          credential: "webrtcdemo"
                      }, {
                          urls: ["stun:stun.example.com", "stun:stun-1.example.com"]
                      }]
};

var pc = new RTCPeerConnection(configuration);</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>
