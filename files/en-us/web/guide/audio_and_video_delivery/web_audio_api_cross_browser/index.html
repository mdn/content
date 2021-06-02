---
title: Writing Web Audio API code that works in every browser
slug: Web/Guide/Audio_and_video_delivery/Web_Audio_API_cross_browser
tags:
  - API
---
<p>You probably have already read <a href="https://hacks.mozilla.org/2013/07/web-audio-api-comes-to-firefox/">the announcement</a> on the Web Audio API coming to Firefox, and are totally excited and ready to make your <em>until-now-WebKit-only</em> sites work with Firefox, which uses the unprefixed version of <a href="https://dvcs.w3.org/hg/audio/raw-file/tip/webaudio/specification.html">the spec</a>.</p>
<p>Unfortunately, Chrome, Safari and Opera still use the <code>webkitAudioContext</code> prefixed name. Furthermore, as a result of the spec being still in flux, some browsers use deprecated properties and method names that are not present in standards-compliant browsers: Safari uses the old method names, Firefox uses the new ones, and Chrome and Opera use both. In addition, not all features of Web Audio are already implemented in Firefox <em>yet</em>.</p>
<p><em>What do we do!?</em></p>
<p>We don't want to maintain two or more separate code bases, and feature detection code is cumbersome! Plus we want to write code that reliably works in the future, or at least, works with a minimum amount of changes. Is there a way to satisfy all these constraints at the same time? <em>Probably!</em></p>
<h2 id="Writing_for_today_(and_tomorrow)">Writing for today (and tomorrow)</h2>
<p>First, get a copy of <a href="https://github.com/cwilso/AudioContext-MonkeyPatch/">AudioContext-MonkeyPatch</a> by Chris Wilson. This little library will "normalize" the interfaces for you and make it look as if your code is running in a standards compliant browser, by aliasing prefixed names to the unprefixed versions. And it won't do anything if the unprefixed versions are already present.</p>
<p>Once you include it in your page, you can write in "modern Web Audio API" style, and do things such as:</p>
<pre class="brush: js">var audioContext = new AudioContext();
</pre>
<p>everywhere, including Chrome/ium, Opera, Safari, and ---of course!--- Firefox.</p>
<p>Also, if new methods such as <code>start</code> are not detected in some nodes, the library will also alias them to their old names. Thus, <code>start</code> is mapped to <code>noteOn</code>, <code>stop</code> to <code>noteOff</code>, and so on.</p>
<p>If you're porting moderately "old" code (say, a year old) it's possible that it uses some methods that <code>AudioContext-MonkeyPatch</code> doesn't alias, because it helps you to write code in the <em>new</em> style. For example, the way to create instances of <code>GainNode</code> used to be</p>
<pre class="brush: js">var gain = audioContext.createGainNode();
</pre>
<p>but nowadays it is just</p>
<pre class="brush: js">var gain = audioContext.createGain();
</pre>
<p>Since the old method names are not present in Firefox, existing code may crash with something like <code>createGainNode is not a function</code>, and you now know why.</p>
<p>There's <a href="https://dvcs.w3.org/hg/audio/raw-file/tip/webaudio/specification.html#OldNames">a section</a> in the spec that lists the old names and their updated equivalences; be sure to check it out and change your code accordingly. You can also check <a href="/en-US/docs/Web/API/Web_Audio_API/Migrating_from_webkitAudioContext">this article</a> on porting which covers more cases and has many code samples.</p>
<h2 id="Things_that_are_not_ready_yet">Things that are not ready yet</h2>
<p>Second, ensure that your project doesn't use node types that are not implemented yet in Firefox: <a href="https://dvcs.w3.org/hg/audio/raw-file/tip/webaudio/specification.html#MediaStreamAudioSourceNode">MediaStreamAudioSourceNode</a>, <a href="https://dvcs.w3.org/hg/audio/raw-file/tip/webaudio/specification.html#MediaElementAudioSourceNode">MediaElementAudioSourceNode</a> and <a href="https://dvcs.w3.org/hg/audio/raw-file/tip/webaudio/specification.html#OscillatorNode">OscillatorNode</a>.</p>
<p>If it's using, for example, <code>OscillatorNode</code>, you will have to wait until it is supported, or maybe, if you're really eager, hack in some replacement using <a href="https://dvcs.w3.org/hg/audio/raw-file/tip/webaudio/specification.html#ScriptProcessorNode-section">ScriptProcessorNode</a>, which allows you to write a node with callbacks that get called periodically, so that your JavaScript code generates or processes audio.</p>
<p>The node parameters you use must also be supported in Firefox too. If they aren't, you might be able to change them into something "acceptable" for the time being, and count on the talented audio developers to implement those very soon.</p>
<p>For example, up until a couple of days ago <a href="https://dvcs.w3.org/hg/audio/raw-file/tip/webaudio/specification.html#PannerNode-section">PannerNode</a> did not support the default HRTF panning model yet, and attempting to use a <code>PannerNode</code> with that configuration resulted in silence or a mono output coming out from that node, depending on the build you used.</p>
<p>Today the support is already present in <a href="https://nightly.mozilla.org/">Nightly</a>, but not quite yet in <a href="https://www.mozilla.org/en-US/firefox/aurora/">Aurora</a>. In the meantime, you can explicitly specify <code>'equalpower'</code> instead:</p>
<pre class="brush: js">var panner = new audioContext.PannerNode();
panner.panningModel = 'equalpower';
</pre>
<p>Note that there's a <a href="https://github.com/WebAudio/demo-list">list of projects</a> built with the Web Audio API, specifying which ones use the standard <code>AudioContext</code> and which browsers do they work on. If you're a person that learns by example, it might be interesting to have a look at their source and see how they have resolved the compatibility issues.</p>
