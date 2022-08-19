---
title: WebRTC Statistics API
slug: Web/API/WebRTC_Statistics_API
page-type: web-api-overview
tags:
  - API
  - Draft
  - Identifiers
  - Identifiers for WebRTC Statistics API
  - Landing
  - RTP
  - Statistics
  - Stats
  - WebRTC
  - WebRTC Statistics API
browser-compat: api.RTCStatsReport
---
{{DefaultAPISidebar("WebRTC")}}

The WebRTC API has a vast array of statistics available, covering the entire breadth of the WebRTC connectivity system, from sender to receiver and peer to peer.

## Collecting statistics

You can collect statistics at various levels throughout the WebRTC hierarchy of objects. Most broadly, you can call {{domxref("RTCPeerConnection.getStats", "getStats()")}} on an {{domxref("RTCPeerConnection")}} to get statistics for the connection overall. In this example, a new {{domxref("RTCPeerConnection")}} is created, and then {{domxref("setInterval()")}} is used to set the function `getConnectionStats()` to be called every second.

That function, in turn, uses {{domxref("RTCPeerConnection.getStats", "getStats()")}} to obtain statistics for the connection and to make use of that data.

```js
try {
  myPeerConnection = new RTCPeerConnection(pcOptions);

  statsInterval = setInterval(getConnectionStats, 1000);
  /* add event handlers, etc. */
} catch (err) {
  console.error(`Error creating RTCPeerConnection: ${err}`);
}

function getConnectionStats() {
  myPeerConnection.getStats(null).then((stats) => {
    let statsOutput = "";

    stats.forEach((report) => {
      if (report.type === "inbound-rtp" && report.kind === "video") {
        Object.keys(report).forEach((statName) => {
          statsOutput += `<strong>${statName}:</strong> ${report[statName]}<br>\n`;
        });
      }
    });

    document.querySelector(".stats-box").innerHTML = statsOutput;
  });
}
```

When the promise returned by `getStats()` is fulfilled, the resolution handler receives as input an {{domxref("RTCStatsReport")}} object containing the statistics information. This object contains a {{jsxref("Map")}} of named dictionaries based on {{domxref("RTCStats")}} and its affiliated types.

This example specifically looks for the report whose {{domxref("RTCStats.type", "type")}} is `inbound-rtp` and whose {{domxref("RTCRtpStreamStats.kind", "kind")}} is `video`. This way, we look only at the video-related statistics for the local {{domxref("RTCRtpReceiver")}} responsible for receiving the streamed media.

## Commonly used statistics

## Reference

The {{domxref("RTCStatsReport")}} object contains a map of named objects based one of the {{domxref("RTCStats")}} dictionary's subclasses. Upon looking up a statistic category by name, you get an object containing the corresponding data. The table below shows the statistic categories and the corresponding dictionaries; for each statistic category, the full hierarchy of `RTCStats`-based dictionaries are listed, so you can easily find all the available values.

<table class="standard-table">
  <caption>
    Mapping of statistic category names to the dictionaries they implement
  </caption>
  <thead>
    <tr>
      <th scope="row">
        Statistic category name
      </th>
      <th scope="col">Description</th>
      <th scope="col">Dictionaries implemented</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"><code>candidate-pair</code></th>
      <td>
        Statistics describing the change from one
        {{domxref("RTCIceTransport")}} to another, such as during an
        <a href="/en-US/docs/Web/API/WebRTC_API/Session_lifetime#ice_restart"
          >ICE restart</a
        >.
      </td>
      <td>
        <ul>
          <li>
            {{domxref("RTCIceCandidatePairStats")}}
            <ul>
              <li>{{domxref("RTCStats")}}</li>
            </ul>
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row"><code>certificate</code></th>
      <td>
        Statistics about a certificate being used by an
        {{domxref("RTCIceTransport")}}.
      </td>
      <td>
        <ul>
          <li>
            {{domxref("RTCCertificateStats")}}
            <ul>
              <li>{{domxref("RTCStats")}}</li>
            </ul>
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row"><code>codec</code></th>
      <td>
        Statistics about a specific codec being used by streams being sent or
        received by this connection.
      </td>
      <td>
        {{domxref("RTCCodecStats")}}<br />{{domxref("RTCStats")}}
      </td>
    </tr>
    <tr>
      <th scope="row"><code>csrc</code></th>
      <td>
        Statistics for a single contributing source (CSRC) that contributed to
        one of the connection's inbound RTP streams.
      </td>
      <td>
        <ul>
          <li>
            {{domxref("RTCRtpContributingSourceStats")}}
            <ul>
              <li>{{domxref("RTCStats")}}</li>
            </ul>
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row"><code>data-channel</code></th>
      <td>
        Statistics related to one {{domxref("RTCDataChannel")}} on
        the connection.
      </td>
      <td>
        <ul>
          <li>
            {{domxref("RTCDataChannelStats")}}
            <ul>
              <li>{{domxref("RTCStats")}}</li>
            </ul>
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row"><code>ice-server</code></th>
      <td>
        Statistics about the connection to an {{Glossary("ICE")}} server
        ({{Glossary("STUN")}} or {{Glossary("TURN")}}.
      </td>
      <td>
        <ul>
          <li>
            {{domxref("RTCIceServerStats")}}
            <ul>
              <li>{{domxref("RTCStats")}}</li>
            </ul>
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row"><code>inbound-rtp</code></th>
      <td>
        Statistics describing the state of one of the connection's inbound data
        streams.
      </td>
      <td>
        <ul>
          <li>
            {{domxref("RTCInboundRtpStreamStats")}}
            <ul>
              <li>
                {{domxref("RTCReceivedRtpStreamStats")}}
                <ul>
                  <li>
                    {{domxref("RTCRtpStreamStats")}}
                    <ul>
                      <li>{{domxref("RTCStats")}}</li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row"><code>local-candidate</code></th>
      <td>
        Statistics about a local ICE candidate associated with the connection's
        {{domxref("RTCIceTransport")}}s.
      </td>
      <td>
        <ul>
          <li>
            {{domxref("RTCIceCandidateStats")}}
            <ul>
              <li>{{domxref("RTCStats")}}</li>
            </ul>
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row"><code>media-source</code></th>
      <td>
        Statistics about the media produced by the
        {{domxref("MediaStreamTrack")}} attached to an RTP sender. The
        dictionary this key maps to depends on the track's
        {{domxref("MediaStreamTrack.kind", "kind")}}.
      </td>
      <td>
        <ul>
          <li>
            {{domxref("RTCAudioSourceStats")}}
            <em>or</em> {{domxref("RTCVideoSourceStats")}}
            <ul>
              <li>
                {{domxref("RTCMediaSourceStats")}}
                <ul>
                  <li>{{domxref("RTCStats")}}</li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
        {{domxref("RTCAudioSourceStats")}}
        <em>or</em> {{domxref("RTCVideoSourceStats")}}
      </td>
    </tr>
    <tr>
      <th scope="row"><code>outbound-rtp</code></th>
      <td>
        Statistics describing the state of one of the outbound data streams on
        this connection.
      </td>
      <td>
        <ul>
          <li>
            {{domxref("RTCOutboundRtpStreamStats")}}
            <ul>
              <li>
                {{domxref("RTCSentRtpStreamStats")}}
                <ul>
                  <li>
                    {{domxref("RTCRtpStreamStats")}}
                    <ul>
                      <li>{{domxref("RTCStats")}}</li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row"><code>peer-connection</code></th>
      <td>
        Statistics describing the state of the
        {{domxref("RTCPeerConnection")}}.
      </td>
      <td>
        <ul>
          <li>
            {{domxref("RTCPeerConnectionStats")}}
            <ul>
              <li>{{domxref("RTCStats")}}</li>
            </ul>
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row"><code>receiver</code></th>
      <td>
        Statistics related to a specific
        {{domxref("RTCRtpReceiver")}} and the media associated with
        that receiver. The specific type of object representing the statistics
        depends on the media <code>kind</code>.
      </td>
      <td>
        <ul>
          <li>
            {{domxref("RTCAudioReceiverStats")}}
            <em>or</em> {{domxref("RTCVideoReceiverStats")}}
            <ul>
              <li>
                {{domxref("RTCAudioHandlerStats")}}
                <em>or</em> {{domxref("RTCVideoHandlerStats")}}
                <ul>
                  <li>
                    {{domxref("RTCMediaHandlerStats")}}
                    <ul>
                      <li>{{domxref("RTCStats")}}</li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row"><code>remote-candidate</code></th>
      <td>
        Statistics about a remote ICE candidate associated with the connection's
        {{domxref("RTCIceTransport")}}s.
      </td>
      <td>
        <ul>
          <li>
            {{domxref("RTCIceCandidateStats")}}
            <ul>
              <li>{{domxref("RTCStats")}}</li>
            </ul>
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row"><code>remote-inbound-rtp</code></th>
      <td>
        Statistics describing the state of the inbound data stream from the
        perspective of the remote peer.
      </td>
      <td>
        <ul>
          <li>
            {{domxref("RTCRemoteInboundRtpStreamStats")}}
            <ul>
              <li>
                {{domxref("RTCReceivedRtpStreamStats")}}
                <ul>
                  <li>
                    {{domxref("RTCRtpStreamStats")}}
                    <ul>
                      <li>{{domxref("RTCStats")}}</li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row"><code>remote-outbound-rtp</code></th>
      <td>
        Statistics describing the state of the outbound data stream from the
        perspective of the remote peer.
      </td>
      <td>
        <ul>
          <li>
            {{domxref("RTCRemoteOutboundRtpStreamStats")}}
            <ul>
              <li>
                {{domxref("RTCSentRtpStreamStats")}}
                <ul>
                  <li>
                    {{domxref("RTCRtpStreamStats")}}
                    <ul>
                      <li>{{domxref("RTCStats")}}</li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row"><code>sctp-transport</code></th>
      <td>Statistics about an {{domxref("RTCSctpTransport")}}.</td>
      <td>
        <ul>
          <li>
            {{domxref("RTCSctpTransportStats")}}
            <ul>
              <li>{{domxref("RTCStats")}}</li>
            </ul>
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row"><code>sender</code></th>
      <td>
        Statistics related to a specific {{domxref("RTCRtpSender")}}
        and the media associated with that sender. The type of object
        representing this statistic depends on the <code>kind</code> of the
        media.
      </td>
      <td>
        <ul>
          <li>
            {{domxref("RTCAudioSenderStats")}}
            <em>or</em> {{domxref("RTCVideoSenderStats")}}
            <ul>
              <li>
                {{domxref("RTCAudioHandlerStats")}}
                <em>or</em> {{domxref("RTCVideoHandlerStats")}}
                <ul>
                  <li>
                    {{domxref("RTCMediaHandlerStats")}}
                    <ul>
                      <li>{{domxref("RTCStats")}}</li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row"><code>stream</code> {{deprecated_inline}}</th>
      <td>
        Statistics about a particular media
        {{domxref("MediaStream")}}. This has been obsoleted since the
        transition to WebRTC being track-based rather than stream-based.
      </td>
      <td>
        <ul>
          <li>
            {{domxref("RTCMediaStreamStats")}}
            <ul>
              <li>{{domxref("RTCStats")}}</li>
            </ul>
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row"><code>track</code> {{deprecated_inline}}</th>
      <td>
        <p>
          Statistics related to a specific
          {{domxref("MediaStreamTrack")}}'s attachment to one of the
          connection's senders or receivers. The referenced object's type
          depends on the track type.
        </p>
        <div class="notecard note">
          <p>
            <strong>Note:</strong> These statistics have all been moved to
            <code>media-source</code>, <code>sender</code>,
            <code>receiver</code>, <code>outbound-rtp</code>, and
            <code>inbound-rtp</code>, and this statistic category type is thus
            obsolete and shouldn't be used anymore.
          </p>
        </div>
      </td>
      <td>
        <ul>
          <li>
            {{domxref("RTCSenderVideoTrackAttachmentStats")}}
            <em>or </em
            >{{domxref("RTCSenderAudioTrackAttachmentStats")}}
            <em>or</em>
            {{domxref("RTCReceiverVideoTrackAttachmentStats")}}
            <em>or</em>
            {{domxref("RTCReceiverAudioTrackAttachmentStats")}}
            <ul>
              <li>
                {{domxref("RTCMediaHandlerStats")}}
                <ul>
                  <li>{{domxref("RTCStats")}}</li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row"><code>transceiver</code></th>
      <td>
        Statistics related to a specific
        {{domxref("RTCRtpTransceiver")}}.
      </td>
      <td>
        <ul>
          <li>
            {{domxref("RTCRtpTransceiverStats")}}
            <ul>
              <li>{{domxref("RTCStats")}}</li>
            </ul>
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row"><code>transport</code></th>
      <td>Statistics about a transport used by the connection.</td>
      <td>
        <ul>
          <li>
            {{domxref("RTCTransportStats")}}
            <ul>
              <li>{{domxref("RTCStats")}}</li>
            </ul>
          </li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
