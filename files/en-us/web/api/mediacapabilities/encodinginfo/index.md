---
title: MediaCapabilities.encodingInfo()
slug: Web/API/MediaCapabilities/encodingInfo
tags:
- API
- Audio
- Experimental
- Media Capabilities API
- MediaCapabilities
- Method
- Reference
- Video
- encodingInfo
browser-compat: api.MediaCapabilities.encodingInfo
---
<p>{{APIRef("MediaCapabilities")}}</p>

<p>The <strong><code>MediaCapabilities.encodingInfo()</code></strong> method, part of
  the {{domxref("MediaCapabilities")}} interface of the <a
    href="/en-US/docs/Web/API/MediaCapabilities">Media Capabilities API</a>, returns a
  promise with the tested media configuration's {{domxref("MediaCapabilitiesInfo")}}; this
  contains the three Boolean properties <code>supported</code>, <code>smooth</code>, and
  <code>powerefficient</code>, which describe how compatible the device is with the type
  of media.</p>

<h2 id="Syntax">Syntax</h2>

<pre
  class="brush: js">mediaCapabilities.encodingInfo(<em>mediaEncodingConfiguration</em>)</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt>{{domxref("mediaEncodingConfiguration")}}</dt>
  <dd>A valid {{domxref("MediaEncodingConfiguration")}} dictionary containing a valid
    media encoding type of <code>record</code> or <code>transmission</code> and a valid
    media configuration: either an {{domxref("AudioConfiguration")}} or
    {{domxref("VideoConfiguration")}} dictionary.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>A {{jsxref("Promise")}} fulfilling with a {{domxref("MediaCapabilitiesInfo")}}
  interface containing three Boolean attributes:</p>

<ul>
  <li><code>supported</code></li>
  <li><code>smooth</code></li>
  <li><code>powerEfficient</code></li>
</ul>

<h3 id="Exceptions">Exceptions</h3>

<p>A <code>TypeError</code> is raised if the <code>MediaConfiguration</code> passed to the
  <code>encodingInfo()</code> method is invalid, either because the type is not video or
  audio, the <code>contentType</code> is not a valid codec MIME type, or any other error
  in the media configuration passed to the method, including omitting any of the <a
    href="/en-US/docs/Web/API/MediaEncodingConfiguration">media encoding configuration</a>
  elements.</p>

<h2 id="Example">Example</h2>

<pre class="brush: js">//Create media configuration to be tested
const mediaConfig = {
    type : 'record', // or 'transmission'
    video : {
        contentType : "video/webm;codecs=vp8.0", // valid content type
        width : 1920,     // width of the video
        height : 1080,    // height of the video
        bitrate : 120000, // number of bits used to encode 1s of video
        framerate : 48   // number of frames making up that 1s.
     }
};

// check support and performance
navigator.mediaCapabilities.encodingInfo(mediaConfig).then(result =&gt; {
    console.log('This configuration is ' +
        (result.supported ? '' : 'not ') + 'supported, ' +
        (result.smooth ? '' : 'not ') + 'smooth, and ' +
        (result.powerEfficient ? '' : 'not ') + 'power efficient.')
});</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{domxref("MediaEncodingConfiguration")}}</li>
  <li>{{domxref("VideoConfiguration")}}</li>
  <li>{{domxref("AudioConfiguration")}}</li>
  <li>{{domxref("MediaCapabilities.decodingInfo()")}}</li>
</ul>
