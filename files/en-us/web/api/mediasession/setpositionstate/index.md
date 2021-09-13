---
title: MediaSession.setPositionState()
slug: Web/API/MediaSession/setPositionState
tags:
- API
- Audio
- Media
- Media Session API
- MediaSession
- Method
- Playback
- Position
- Reference
- Session
- Video
- rate
- setPositionState
- speed
browser-compat: api.MediaSession.setPositionState
---
<p>{{APIRef("Media Session API")}}</p>

<p>The {{domxref("MediaSession")}} method
    <code><strong>setPositionState()</strong></code> is used to update the current
    document's media playback position and speed for presentation by user's device in any
    kind of interface that provides details about ongoing media. This can be
  particularly useful if your code implements a player for type of media not directly
  supported by the browser.</p>

<p>Call this method on the <code>navigator</code> object's
  {{domxref("navigator.mediaSession", "mediaSession")}} object.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">navigator.mediaSession.setPositionState(<em>stateDict</em>);
</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><code>stateDict</code> {{optional_inline}}</dt>
  <dd>An object providing updated information about the playback position and speed
    of the document's ongoing media. If the object is empty, the existing playback
    state information is cleared. This object is a dictionary that contains the following
    parameters:
    <dl>
      <dt><code>duration</code></dt>
      <dd>A floating-point value giving the total duration of the current media in seconds. This should always be a positive number, with positive infinity (<code><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Infinity">Infinity</a></code>) indicating media without a defined end, such as a live stream.</dd>
      <dt><code>playbackRate</code></dt>
      <dd>A floating-point value indicating the rate at which the media is being played, as a ratio relative to its normal playback speed. Thus, a value of 1 is playing at normal speed, 2 is playing at double speed, and so forth. Negative values indicate that the media is playing in reverse; -1 indicates playback at the normal speed but backward, -2 is double speed in reverse, and so on.</dd>
      <dt><code>position</code></dt>
      <dd>A floating-point value indicating the last reported playback position of the media in seconds. This must always be a positive value.</dd>
     </dl>
  </dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>{{jsxref("undefined")}}.</p>

<h3 id="Exceptions">Exceptions</h3>

<dl>
  <dt><code>TypeError</code></dt>
  <dd>
    <p>This error can occur in an array of circumstances:</p>

    <ul>
      <li>The specified object's <code>duration</code> is missing, negative, or
        <code>null</code>.</li>
      <li>Its <code>position</code> is missing or null, or is
        either negative or greater than <code>duration</code>.</li>
      <li>Its <code>playbackRate</code> is zero.</li>
    </ul>
  </dd>
</dl>

<h2 id="Example">Example</h2>

<p>Below is a function which updates the position state of the current
  {{domxref('MediaSession')}} track.</p>

<pre class="brush: js">function updatePositionState() {
  navigator.mediaSession.setPositionState({
    duration: audioEl.duration,
    playbackRate: audioEl.playbackRate,
    position: audioEl.currentTime
  });
}
</pre>

<p>We can use this function when updating {{domxref('MediaMetadata', 'media session
  metadata')}} and within callbacks for actions, such as below.</p>

<pre class="brush: js">navigator.mediaSession.setActionHandler('seekbackward', details =&gt; {

  // our time to skip
  const skipTime = details.seekOffset || 10;

  // set our position
  audioEl.currentTime = Math.max(audioEl.currentTime - skipTime, 0);
  updatePositionState();

});
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>
