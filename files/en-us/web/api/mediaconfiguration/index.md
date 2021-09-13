---
title: MediaConfiguration
slug: Web/API/MediaConfiguration
tags:
  - API
  - Audio
  - Experimental
  - Interface
  - Media Capabilities API
  - MediaConfiguration
  - Reference
  - Video
browser-compat: api.MediaConfiguration
---
<div>{{APIRef("Media Capabilities API")}}</div>

<p>The <strong><code>MediaConfiguration</code></strong> <a href="/en-US/docs/Web/API/MediaCapabilities" title="The MediaCapabilities interface of the Media Capabilities API provides information about the decoding abilities of the device, system and browser. The API can be used to query the browser about the decoding abilities of the device based on codecs, profile, resolution, and bitrates. The  information can be used to serve optimal media streams to the user and determine if  playback should be smooth and power efficient."><code>MediaCapabilities</code></a> dictionary of the <a href="/en-US/docs/Web/API/MediaCapabilities">Media Capabilities API</a> describes how media and audio files must be configured, or defined, to be passed as a parameter of the {{domxref("MediaCapabilities.encodingInfo()")}} and {{domxref("MediaCapabilities.encodingInfo()")}} methods.</p>

<h2 id="Properties">Properties</h2>

<p>A valid configuration includes a valid encoding configuration type or decoding configuration type and a valid <a href="/en-US/docs/Web/API/AudioConfiguration">audio configuration</a> or <a href="/en-US/docs/Web/API/VideoConfiguration">video configuration</a>. If you plan on querying <a href="/en-US/docs/Web/API/MediaEncodingConfiguration">encoding</a> information, set the media type to record or transmission.</p>

<p>For <a href="/en-US/docs/Web/API/MediaDecodingConfiguration">decoding</a>, set the type to <code>file</code> or <code>media-source</code>.</p>

<p>If the media is an audio file, the <a href="/en-US/docs/Web/API/AudioConfiguration">audio configuration</a> must include a valid audio MIME type as <code>contentType</code>, the number of channels, the bitrate, and the sample rate. <a href="/en-US/docs/Web/API/VideoConfiguration">Video configurations</a> mush include a valid video MIME type as contentType, the bitrate, and framerate, along with the width and the height of the video file. All of these must be present, as in the examples below, or a TypeError will occur.</p>

<p>A valid media decoding configuration, to be submitted as the parameter for {{domxref("mediaCapabilities.decodingInfo", "mediaCapabilities.decodingInfo()")}} method, has it's `type` set as:</p>

<ul>
  <li><strong>file</strong>: For plain playback file.</li>
  <li><strong>media-source</strong>: For <a href="/en-US/docs/Web/API/MediaSource">media source</a> files.</li>
</ul>

<p>A valid media encoding configuration, to be submitted as the parameter for {{domxref("mediaCapabilities.encodingInfo", "mediaCapabilities.encodingInfo()")}} method, has it's `type` set as:</p>

<ul>
  <li><strong>record</strong>: For <a href="/en-US/docs/Web/API/MediaRecorder">recording media</a>.</li>
  <li><strong>transmission</strong>: For media to be electronically transmitted.</li>
</ul>

<p>A valid <a href="/en-US/docs/Web/API/AudioConfiguration">audio configuration</a> includes:</p>

<ul>
  <li><strong>contentType</strong>: Valid audio MIME type.</li>
  <li><strong>channels</strong>:  Number of channels used by the audio track.</li>
  <li><strong>bitrate</strong>: Number of bits used to encode one second of the audio file.</li>
  <li><strong>samplerate</strong>: Number of audio samples making up one second of the audio file.</li>
</ul>

<p>A valid <a href="/en-US/docs/Web/API/VideoConfiguration">video configuration</a> includes:</p>

<ul>
  <li><strong>contentType</strong>: Valid video MIME type.</li>
  <li><strong>width</strong>: Width of the video.</li>
  <li><strong>height</strong>: Height of the video.</li>
  <li><strong>bitrate</strong>: Number of bits used to encode one second of the video file.</li>
  <li><strong>framerate</strong>: Number of frames making up one second of video playback.</li>
</ul>

<h2 id="Example">Example</h2>

<pre class="brush: js">//Create a video configuration to be tested
const videoDecoderConfig = {
  type : 'file', // 'record', 'transmission', or 'media-source'
  video : {
    contentType : "video/webm;codecs=vp8", // valid content type
    width : 800,     // width of the video
    height : 600,    // height of the video
    bitrate : 10000, // number of bits used to encode 1s of video
    framerate : 30   // number of frames making up that 1s.
  }
};

const audioEncoderConfig = {
  type : 'file', // 'record', 'transmission', or 'media-source'
  audio : {
    contentType : "audio/ogg", // valid content type
    channels : 2,     // audio channels used by the track
    bitrate : 132700, // number of bits used to encode 1s of audio
    samplerate : 5200 // number of audio samples making up that 1s.
  }
};</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>{{domxref("MediaDecodingConfiguration")}}</li>
 <li>{{domxref("MediaEncodingConfiguration")}}</li>
</ul>
