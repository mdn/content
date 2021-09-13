---
title: MediaStreamConstraints
slug: Web/API/MediaStreamConstraints
tags:
  - API
  - Audio
  - Constraints
  - Dictionary
  - Interface
  - Media
  - Media Capture and Streams API
  - Media Streams API
  - MediaStreamConstraints
  - Reference
  - Video
  - WebRTC
  - getusermedia
browser-compat: api.MediaStreamConstraints
---
<div>{{APIRef("Media Capture and Streams")}}</div>

<p>The <strong><code>MediaStreamConstraints</code></strong> dictionary is used when calling {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}} to specify what kinds of tracks should be included in the returned {{domxref("MediaStream")}}, and, optionally, to establish constraints for those tracks' settings.</p>

<p>To learn more about how constraints work, see <a href="/en-US/docs/Web/API/Media_Streams_API/Constraints">Capabilities, constraints, and settings</a>.</p>

<h2 id="Properties">Properties</h2>

<p>Some combination—but not necessarily all—of the following properties will exist on the object.</p>

<h3 id="Track_constraints">Track constraints</h3>

<dl>
 <dt>{{domxref("MediaStreamConstraints.audio", "audio")}}</dt>
 <dd>Either a Boolean (which indicates whether or not an audio track is requested) or a {{domxref("MediaTrackConstraints")}} object providing the constraints which must be met by the audio track included in the returned {{domxref("MediaStream")}}. If constraints are specified, an audio track is inherently requested.</dd>
 <dt>{{domxref("MediaStreamConstraints.video", "video")}}</dt>
 <dd>Either a Boolean (which indicates whether or not a video track is requested) or a {{domxref("MediaTrackConstraints")}} object providing the constraints which must be met by the video track included in the returned {{domxref("MediaStream")}}. If constraints are specified, a video track is inherently requested.</dd>
</dl>

<h3 id="Security">Security</h3>

<dl>
 <dt>{{domxref("MediaStreamConstraints.peerIdentity", "peerIdentity")}}</dt>
 <dd>A {{domxref("DOMString")}} identifying the peer who has sole access to the stream. If this property is specified, only the indicated peer can receive and use the stream. Streams isolated in this way can only be displayed in a media element ({{HTMLElement("audio")}} or {{HTMLElement("video")}}) where the content is protected just as if {{Glossary("CORS")}} cross-origin rules were in effect.</dd>
</dl>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>{{domxref("MediaDevices.getUserMedia()")}}</li>
 <li>{{domxref("MediaStreamTrack.getConstraints()")}}</li>
 <li>{{domxref("MediaStreamTrack.applyConstraints()")}}</li>
 <li>{{domxref("MediaDevices.getSupportedConstraints()")}}</li>
 <li>{{domxref("MediaTrackSupportedConstraints")}}</li>
 <li>{{domxref("MediaStreamTrack.getSettings()")}}</li>
</ul>
