---
title: MediaTrackSettings.sampleSize
slug: Web/API/MediaTrackSettings/sampleSize
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
- sampleSize
browser-compat: api.MediaTrackSettings.sampleSize
---
<div>{{APIRef("Media Capture and Streams")}}</div>

<p>The {{domxref("MediaTrackSettings")}} dictionary's
  <code><strong>sampleSize</strong></code> property is an integer indicating the linear
  sample size (in bits per sample) the {{domxref("MediaStreamTrack")}} is currently
  configured for. This lets you determine what value was selected to comply with your
  specified constraints for this property's value as described in the
  {{domxref("MediaTrackConstraints.sampleSize")}} property you provided when calling
  either {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}} or
  {{domxref("MediaStreamTrack.applyConstraints()")}}.</p>

<p>If needed, you can determine whether or not this constraint is supported by checking
  the value of {{domxref("MediaTrackSupportedConstraints.sampleSize")}} as returned by a
  call to {{domxref("MediaDevices.getSupportedConstraints()")}}. However, typically this
  is unnecessary since browsers will ignore any constraints they're unfamiliar with.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">var <em>sampleSize</em> = <em>MediaTrackSettings</em>.sampleSize;
</pre>

<h3 id="Value">Value</h3>

<p>An integer value indicating how many bits each audio sample is represented by. The most
  commonly used sample size for many years now is 16 bits per sample, which was used for
  CD audio among others. Other common sample sizes are 8 (for reduced bandwidth
  requirements) and 24 (for high-resolution professional audio).</p>

<p>Each audio channel on the track requires sampleSize bits. That means that a given
  sample actually uses
  (<code>sampleSize</code>/8)*{{domxref("MediaTrackSettings.channelCount",
  "channelCount")}} bytes of data. For example, 16-bit stereo audio requires (16/8)*2 or 4
  bytes per sample.</p>

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
  <li>{{domxref("MediaTrackConstraints.sampleSize")}}</li>
  <li>{{domxref("MediaTrackSettings")}}</li>
</ul>
