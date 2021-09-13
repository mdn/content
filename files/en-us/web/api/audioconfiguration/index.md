---
title: AudioConfiguration
slug: Web/API/AudioConfiguration
tags:
  - API
  - Audio
  - AudioConfiguration
  - Experimental
  - Interface
  - Media Capabilities API
  - Reference
  - Video
browser-compat: api.AudioConfiguration
---
<div>{{APIRef("Media Capabilities API")}}</div>

<p>The <strong><code>AudioConfiguration</code></strong> dictionary of the <a href="/en-US/docs/Web/API/Media_Capabilities_API">Media Capabilities API</a> defines the audio file being tested when calling {{domxref("MediaCapabilities.encodingInfo()")}} or {{domxref("MediaCapabilities.decodingInfo()")}} to query whether a specific audio configuration is supported, smooth, and/or power efficient.</p>

<h2 id="Properties">Properties</h2>

<p>The <code>AudioConfiguration</code> dictionary is made up of four audio properties, including:</p>

<ul>
 <li><strong>contentType</strong>: A valid audio MIME type, For information on possible values and what they mean, see the <a href="/en-US/docs/Web/Media/Formats/Audio_codecs">web audio codec guide</a>.</li>
 <li><strong>channels</strong>: the number of channels used by the audio track.</li>
 <li><strong>bitrate</strong>: The number of bits used to encode one second of the audio file.</li>
 <li> <strong>samplerate</strong>: The number of audio samples making up one second of the audio file.</li>
</ul>

<h2 id="Examples">Examples</h2>

<pre class="brush: js">//Create media configuration to be tested
const mediaConfig = {
    type : 'file', // 'record', 'transmission', or 'media-source'
    audio : {
        contentType : "audio/ogg", // valid content type
        channels : 2,     // audio channels used by the track
        bitrate : 132700, // number of bits used to encode 1s of audio
        samplerate : 5200 // number of audio samples making up that 1s.
     }
};

// check support and performance
navigator.mediaCapabilities.decodingInfo(mediaConfig).then(result =&gt; {
    console.log('This configuration is ' +
        (result.supported ? '' : 'not ') + 'supported, ' +
        (result.smooth ? '' : 'not ') + 'smooth, and ' +
        (result.powerEfficient ? '' : 'not ') + 'power efficient.'
});</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/Web/Media">Web media technologies</a></li>
 <li><a href="/en-US/docs/Web/Media/Formats">Guide to media types and formats on the web</a></li>
 <li><a href="/en-US/docs/Web/API/Media_Capabilities_API">Media Capabilities API</a></li>
 <li><a href="/en-US/docs/Web/API/Media_Capabilities_API/Using_the_Media_Capabilities_API">Using the Media Capabilities API</a></li>
 <li><a href="/en-US/docs/Web/API/Media_Streams_API">Media Capture and Streams API</a></li>
 <li><a href="/en-US/docs/Web/API/MediaStream_Recording_API">MediaStream Recording API</a></li>
 <li><a href="/en-US/docs/Web/API/WebRTC_API">WebRTC</a></li>
 <li>{{domxref("MediaDecodingConfiguration")}}</li>
 <li>{{domxref("MediaEncodingConfiguration")}}</li>
 <li>{{domxref("VideoConfiguration")}}</li>
</ul>
