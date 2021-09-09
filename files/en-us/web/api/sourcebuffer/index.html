---
title: SourceBuffer
slug: Web/API/SourceBuffer
tags:
  - API
  - Audio
  - Experimental
  - Interface
  - MSE
  - Media Source Extensions
  - Reference
  - SourceBuffer
  - Video
browser-compat: api.SourceBuffer
---
<p>{{APIRef("Media Source Extensions")}}</p>

<p>The <strong><code>SourceBuffer</code></strong> interface represents a chunk of media to be passed into an {{domxref("HTMLMediaElement")}} and played, via a {{domxref("MediaSource")}} object. This can be made up of one or several media segments.</p>

<p>{{InheritanceDiagram}}</p>

<h2 id="Properties">Properties</h2>

<dl>
 <dt>{{domxref("SourceBuffer.appendWindowEnd")}}</dt>
 <dd>Controls the timestamp for the end of the append window.</dd>
 <dt>{{domxref("SourceBuffer.appendWindowStart")}}</dt>
 <dd>Controls the timestamp for the start of the <a href="https://w3c.github.io/media-source/#append-window">append window</a>. This is a timestamp range that can be used to filter what media data is appended to the <code>SourceBuffer</code>. Coded media frames with timestamps within this range will be appended, whereas those outside the range will be filtered out.</dd>
 <dt>{{domxref("SourceBuffer.audioTracks")}} {{readonlyInline}}</dt>
 <dd>A list of the audio tracks currently contained inside the <code>SourceBuffer</code>.</dd>
 <dt>{{domxref("SourceBuffer.buffered")}} {{readonlyInline}}</dt>
 <dd>Returns the time ranges that are currently buffered in the <code>SourceBuffer</code>.</dd>
 <dt>{{domxref("SourceBuffer.mode")}}</dt>
 <dd>Controls how the order of media segments in the <code>SourceBuffer</code> is handled, in terms of whether they can be appended in any order, or they have to be kept in a strict sequence.</dd>
 <dt>{{domxref("SourceBuffer.textTracks")}} {{readonlyInline}}</dt>
 <dd>A list of the text tracks currently contained inside the <code>SourceBuffer</code>.</dd>
 <dt>{{domxref("SourceBuffer.timestampOffset")}}</dt>
 <dd>Controls the offset applied to timestamps inside media segments that are subsequently appended to the <code>SourceBuffer</code>.</dd>
 <dt>{{domxref("SourceBuffer.trackDefaults")}}</dt>
 <dd>Specifies the default values to use if kind, label, and/or language information is not available in the <a href="https://w3c.github.io/media-source/#init-segment">initialization segment</a> of the media to be appended to the <code>SourceBuffer</code>.</dd>
 <dt>{{domxref("SourceBuffer.updating")}} {{readonlyInline}}</dt>
 <dd>A boolean indicating whether the <code>SourceBuffer</code> is currently being updated — i.e. whether an {{domxref("SourceBuffer.appendBuffer()")}}, {{domxref("SourceBuffer.appendStream()")}}, or {{domxref("SourceBuffer.remove()")}} operation is currently in progress.</dd>
 <dt>{{domxref("SourceBuffer.videoTracks")}} {{readonlyInline}}</dt>
 <dd>A list of the video tracks currently contained inside the <code>SourceBuffer</code>.</dd>
</dl>

<h3 id="Event_handlers">Event handlers</h3>

<dl>
 <dt>{{domxref("SourceBuffer.onabort")}}</dt>
 <dd>Fired whenever {{domxref("SourceBuffer.appendBuffer()")}} or {{domxref("SourceBuffer.appendStream()")}} is ended by a call to {{domxref("SourceBuffer.abort()")}}. {{domxref("SourceBuffer.updating")}} changes from <code>true</code> to <code>false</code>.</dd>
 <dt>{{domxref("SourceBuffer.onerror")}}</dt>
 <dd>Fired whenever an error occurs during {{domxref("SourceBuffer.appendBuffer()")}} or {{domxref("SourceBuffer.appendStream()")}}. {{domxref("SourceBuffer.updating")}} changes from <code>true</code> to <code>false</code>.</dd>
 <dt>{{domxref("SourceBuffer.onupdate")}}</dt>
 <dd>Fired whenever {{domxref("SourceBuffer.appendBuffer()")}} method or the {{domxref("SourceBuffer.remove()")}} completes. {{domxref("SourceBuffer.updating")}} changes from <code>true</code> to <code>false</code>. This event is fired before <code>onupdateend</code>.</dd>
 <dt>{{domxref("SourceBuffer.onupdateend")}}</dt>
 <dd>Fired whenever {{domxref("SourceBuffer.appendBuffer()")}} method or the {{domxref("SourceBuffer.remove()")}} has ended. This event is fired after <code>onupdate</code>.</dd>
 <dt>{{domxref("SourceBuffer.onupdatestart")}}</dt>
 <dd>Fired whenever the value of {{domxref("SourceBuffer.updating")}} transitions from <code>false</code> to <code>true</code>.</dd>
</dl>

<h2 id="Methods">Methods</h2>

<p><em>Inherits methods from its parent interface, {{domxref("EventTarget")}}.</em></p>

<dl>
 <dt>{{domxref("SourceBuffer.abort()")}}</dt>
 <dd>Aborts the current segment and resets the segment parser.</dd>
 <dt>{{domxref("SourceBuffer.appendBuffer()")}}</dt>
 <dd>Appends media segment data from an {{jsxref("ArrayBuffer")}} or {{domxref("ArrayBufferView")}} object to the <code>SourceBuffer</code>.</dd>
 <dt>{{domxref("SourceBuffer.appendBufferAsync()")}} {{experimental_inline}}</dt>
 <dd>Starts the process of asynchronously appending the specified buffer to the <code>SourceBuffer</code>. Returns a {{jsxref("Promise")}} which is fulfilled once the buffer has been appended.</dd>
 <dt>{{domxref("SourceBuffer.appendStream()")}}</dt>
 <dd>Appends media segment data from a <code>ReadableStream</code> object to the <code>SourceBuffer</code>.</dd>
 <dt>{{domxref("SourceBuffer.changeType()")}}</dt>
 <dd>Changes the {{Glossary("MIME type")}} that future calls to {{domxref("SourceBuffer.appendBuffer", "appendBuffer()")}} will expect the new data to conform to.</dd>
 <dt>{{domxref("SourceBuffer.remove()")}}</dt>
 <dd>Removes media segments within a specific time range from the <code>SourceBuffer</code>.</dd>
 <dt>{{domxref("SourceBuffer.removeAsync()")}} {{experimental_inline}}</dt>
 <dd>Starts the process of asynchronously removing media segments in the specified range from the <code>SourceBuffer</code>. Returns a {{jsxref("Promise")}} which is fulfilled once all matching segments have been removed.</dd>
</dl>

<h2 id="Examples">Examples</h2>

<p>The following simple example loads a video chunk by chunk as fast as possible, playing it as soon as it can. This example was written by Nick Desaulniers and can be <a href="https://nickdesaulniers.github.io/netfix/demo/bufferAll.html">viewed live here</a> (you can also <a href="https://github.com/nickdesaulniers/netfix/blob/gh-pages/demo/bufferAll.html">download the source</a> for further investigation.)</p>

<pre class="brush: js">var video = document.querySelector('video');

var assetURL = 'frag_bunny.mp4';
// Need to be specific for Blink regarding codecs
// ./mp4info frag_bunny.mp4 | grep Codec
var mimeCodec = 'video/mp4; codecs="avc1.42E01E, mp4a.40.2"';

if ('MediaSource' in window &amp;&amp; MediaSource.isTypeSupported(mimeCodec)) {
  var mediaSource = new MediaSource();
  //console.log(mediaSource.readyState); // closed
  video.src = URL.createObjectURL(mediaSource);
  mediaSource.addEventListener('sourceopen', sourceOpen);
} else {
  console.error('Unsupported MIME type or codec: ', mimeCodec);
}

function sourceOpen (_) {
  //console.log(this.readyState); // open
  var mediaSource = this;
  var sourceBuffer = mediaSource.addSourceBuffer(mimeCodec);
  fetchAB(assetURL, function (buf) {
    sourceBuffer.addEventListener('updateend', function (_) {
      mediaSource.endOfStream();
      video.play();
      //console.log(mediaSource.readyState); // ended
    });
    sourceBuffer.appendBuffer(buf);
  });
}

function fetchAB (url, cb) {
  console.log(url);
  var xhr = new XMLHttpRequest;
  xhr.open('get', url);
  xhr.responseType = 'arraybuffer';
  xhr.onload = function () {
    cb(xhr.response);
  };
  xhr.send();
}</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>{{domxref("MediaSource")}}</li>
 <li>{{domxref("SourceBufferList")}}</li>
</ul>
