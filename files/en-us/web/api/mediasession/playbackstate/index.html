---
title: MediaSession.playbackState
slug: Web/API/MediaSession/playbackState
tags:
  - Audio
  - Media
  - Media Session API
  - MediaSession
  - Property
  - Reference
  - Video
  - playbackState
browser-compat: api.MediaSession.playbackState
---
<p>{{APIRef("Media Session API")}}</p>

<p>The <strong><code>playbackState</code></strong> property of the
  {{domxref("MediaSession")}} interface indicates whether the current media session is
  playing or paused.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">let playbackState = <em>mediaSession</em>.playbackState;
<em>mediaSession</em>.playbackState = <em>playbackState</em>;</pre>

<h3 id="Value">Value</h3>

<p>A {{domxref("DOMString")}} indicating the current playback state of the media session.
  The value may be one of the following:</p>

<dl>
  <dt><code>none</code></dt>
  <dd>The browsing context doesn't currently know the current playback state, or the
    playback state is not available at this time.</dd>
  <dt><code>paused</code></dt>
  <dd>The browser's media session is currently paused. Playback may be resumed.</dd>
  <dt><code>playing</code></dt>
  <dd>The browser's media session is currently playing media, which can be paused.</dd>
</dl>

<h2 id="Example">Example</h2>

<p>The following example sets up two functions for playing and pausing, then uses them as
  callbacks with the relevant action handlers. Each function harnesses the
  <code>playbackState</code> property to indicate whether the audio is playing or paused.
</p>

<pre class="brush: js">const actionHandlers = [
  // play
  [
    'play',
    async function() {
      // play our audio
      await audioEl.play();
      // set playback state
      navigator.mediaSession.playbackState = &quot;playing&quot;;
      // update our status element
      updateStatus(allMeta[index], 'Action: play  |  Track is playing...')
    }
  ],
  [
    'pause',
    () =&gt; {
      // pause out audio
      audioEl.pause();
      // set playback state
      navigator.mediaSession.playbackState = &quot;paused&quot;;
      // update our status element
      updateStatus(allMeta[index], 'Action: pause  |  Track has been paused...');
    }
  ],
]

for (const [action, handler] of actionHandlers) {
  try {
    navigator.mediaSession.setActionHandler(action, handler);
  } catch (error) {
    console.log(`The media session action &quot;${action}&quot; is not supported yet.`);
  }
}</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>
