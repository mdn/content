---
title: AudioContext.close()
slug: Web/API/AudioContext/close
tags:
  - API
  - AudioContext
  - Media
  - Method
  - Reference
  - Web Audio API
  - close
browser-compat: api.AudioContext.close
---
<p>{{ APIRef("Web Audio API") }}</p>

<p>The <code>close()</code> method of the {{ domxref("AudioContext") }} Interface closes the audio context, releasing any system audio resources that it uses.</p>

<p>Closed contexts cannot have new nodes created, but can decode audio data, create buffers, etc.</p>

<p>This function does not automatically release all <code>AudioContext</code>-created objects, unless other references have been released as well; however, it will forcibly release any system audio resources that might prevent additional <code>AudioContexts</code> from being created and used, suspend the progression of audio time in the audio context, and stop processing audio data. The returned {{jsxref("Promise")}} resolves when all <code>AudioContext</code>-creation-blocking resources have been released. This method throws an <code>INVALID_STATE_ERR</code> exception if called on an {{domxref("OfflineAudioContext")}}.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">var audioCtx = new AudioContext();
audioCtx.close().then(function() { ... });
await audioCtx.close();
</pre>

<h3 id="Returns">Returns</h3>

<p>A {{jsxref("Promise")}} that resolves with void.</p>

<h2 id="Example">Example</h2>

<p>The following snippet is taken from our <a href="https://github.com/mdn/webaudio-examples/blob/master/audiocontext-states/index.html">AudioContext states demo</a> (<a href="https://mdn.github.io/webaudio-examples/audiocontext-states/">see it running live</a>.) When the stop button is clicked, <code>close()</code> is called. When the promise resolves, the example is reset to its beginning state.</p>

<pre class="brush: js">stopBtn.onclick = function() {
  audioCtx.close().then(function() {
    startBtn.removeAttribute('disabled');
    susresBtn.setAttribute('disabled', 'disabled');
    stopBtn.setAttribute('disabled', 'disabled');
  });
}
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API">Using the Web Audio API</a></li>
 <li><a href="/en-US/docs/Web/API/Web_Audio_API">Web Audio API</a></li>
</ul>
