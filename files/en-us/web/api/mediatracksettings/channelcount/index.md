---
title: MediaTrackSettings.channelCount
slug: Web/API/MediaTrackSettings/channelCount
tags:
- API
- Audio
- Media
- Media Capture and Streams API
- Media Streams API
- MediaTrackSettings
- Property
- Reference
- Settings
- WebRTC
- channelCount
browser-compat: api.MediaTrackSettings.channelCount
---
<div>{{APIRef("Media Capture and Streams")}}</div>

<p>The {{domxref("MediaTrackSettings")}} dictionary's
  <code><strong>channelCount</strong></code> property is an integer indicating how many
  audio channel the {{domxref("MediaStreamTrack")}} is currently configured to have. This
  lets you determine what value was selected to comply with your specified constraints for
  this property's value as described in the
  {{domxref("MediaTrackConstraints.channelCount")}} property you provided when calling
  either {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}} or
  {{domxref("MediaStreamTrack.applyConstraints()")}}.</p>

<p>If needed, you can determine whether or not this constraint is supported by checking
  the value of {{domxref("MediaTrackSupportedConstraints.channelCount")}} as returned by a
  call to {{domxref("MediaDevices.getSupportedConstraints()")}}. However, typically this
  is unnecessary since browsers will ignore any constraints they're unfamiliar with.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">var <em>channelCount</em> = <em>MediaTrackSettings</em>.channelCount;
</pre>

<h3 id="Value">Value</h3>

<p>An integer value indicating the number of audio channels on the track. A value of 1
  indicates monaural sound, 2 means stereo, and so forth.</p>

<h2 id="Example">Example</h2>

<p>See {{SectionOnPage("/en-US/docs/Web/API/Media_Streams_API/Constraints", "Example:
  Constraint exerciser")}} for an example.</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li><a href="/en-US/docs/Web/API/Media_Streams_API">Media Capture and Streams API</a>
  </li>
  <li><a href="/en-US/docs/Web/API/Media_Streams_API/Constraints">Capabilities,
      constraints, and settings</a></li>
  <li>{{domxref("MediaTrackConstraints.channelCount")}}</li>
  <li>{{domxref("MediaTrackSettings")}}</li>
</ul>
