---
title: TrackDefault()
slug: Web/API/TrackDefault/TrackDefault
tags:
  - API
  - Audio
  - Constructor
  - Experimental
  - MSE
  - Media Source Extensions
  - Reference
  - TrackDefault
  - Video
browser-compat: api.TrackDefault.TrackDefault
---
<div>{{draft}}{{APIRef("Media Source Extensions")}}{{deprecated_header}}</div>

<p>The <code><strong>TrackDefault()</strong></code> constructor of the {{domxref("TrackDefault")}} interface constructs and returns a new <code>TrackDefault</code> object.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">var trackDefault = new TrackDefault(type, language, label, kinds, byteStreamTrackID);</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
 <dt>type</dt>
 <dd>A {{domxref("DOMString")}} specifying a media segment data type for the {{domxref("SourceBuffer")}} to contain. Can be <code>audio</code>, <code>video</code>, or <code>text</code>.</dd>
 <dt>language</dt>
 <dd>A {{domxref("DOMString")}} specifying a default language for the {{domxref("SourceBuffer")}} to use when an <a class="external external-icon" href="https://w3c.github.io/media-source/#init-segment">initialization segment</a> does not contain language information for a new track.</dd>
 <dt>label</dt>
 <dd>A {{domxref("DOMString")}} specifying a default label for the {{domxref("SourceBuffer")}} to use when an <a class="external external-icon" href="https://w3c.github.io/media-source/#init-segment">initialization segment</a> does not contain label information for a new track.</dd>
 <dt>kinds</dt>
 <dd>An array (sequence) of {{domxref("DOMString")}}s specifying default kinds for the {{domxref("SourceBuffer")}} to use when an <a class="external external-icon" href="https://w3c.github.io/media-source/#init-segment">initialization segment</a> does not contain kind information for a new track.</dd>
 <dt>byteStreamTrackID {{optional_inline}}</dt>
 <dd>A {{domxref("DOMString")}} specifying the ID of the specific track that the {{domxref("SourceBuffer")}} should apply to. If not specified, this value will be an empty string and the <code>SourceBuffer</code> can contain any tracks of the specified <code>type</code>.</dd>
</dl>

<h3 id="Errors">Errors</h3>

<p>when this constructor is invoked, the following errors can occur:</p>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Error</th>
   <th scope="col">Explanation</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><code>InvalidAccessError</code></td>
   <td>The supplied <code>language</code> is not a valid language code, e.g. <code>en-US</code>.</td>
  </tr>
  <tr>
   <td><code>TypeError</code></td>
   <td>there are values specified in the <code>kinds</code> array that do not apply to the specified <code>type</code>.</td>
  </tr>
 </tbody>
</table>

<h2 id="Example">Example</h2>

<p>TBD</p>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>{{domxref("MediaSource")}}</li>
 <li>{{domxref("SourceBuffer")}}</li>
</ul>
