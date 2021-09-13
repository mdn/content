---
title: IIRFilterNode()
slug: Web/API/IIRFilterNode/IIRFilterNode
tags:
- API
- Audio
- Constructor
- IIRFilterNode
- Media
- Reference
- Web Audio API
browser-compat: api.IIRFilterNode.IIRFilterNode
---
<p>{{APIRef("Web Audio API")}}</p>

<p>The <strong><code>IIRFilterNode()</code></strong> constructor
		of the <a href="/en-US/docs/Web/API/Web_Audio_API">Web Audio API</a> creates a new
		{{domxref("IIRFilterNode")}} object which an {{domxref("AudioNode")}} processor
		which implements a general infinite impulse response filter.</p>

<h2 id="Syntax">Syntax</h2>

<pre
	class="brush: js">var iIRFilterNode = new IIRFilterNode(context, options)</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
	<dt><em>context</em></dt>
	<dd>A reference to an {{domxref("AudioContext")}}.</dd>
	<dt><em>options</em></dt>
	<dd>Options are as follows:
		<ul>
			<li><code>feedforward</code>: A sequence of feedforward coefficients.</li>
			<li><code>feedback</code>: A sequence of feedback coefficients.</li>
			<li><code>channelCount</code>: Represents an integer used to determine how many channels are used when <a
		  href="/en-US/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing">up-mixing
		  and down-mixing</a> connections to any inputs to the node. (See
		{{domxref("AudioNode.channelCount")}} for more information.) Its usage and precise
		definition depend on the value of <code>channelCountMode</code>.</li>
		  <li><code>channelCountMode</code>: Represents an enumerated value describing the way channels must be matched between
			the node's inputs and outputs. (See {{domxref("AudioNode.channelCountMode")}} for more
			information including default values.)</li>
		  <li>
			<code>channelInterpretation</code>: Represents an enumerated value describing the meaning of the channels. This
			interpretation will define how audio <a
			  href="/en-US/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing">up-mixing
			  and down-mixing</a> will happen.<br>
			The possible values are <code>"speakers"</code> or <code>"discrete"</code>. (See
			{{domxref("AudioNode.channelCountMode")}} for more information including default
			values.)
		  </li>
		</ul>
	</dd>
</dl>

<p>Unlike other nodes in the Web Audio API, the options passed into the IIR
	filter upon creation are not optional. The filter needs these values to work and with
	the vast range of filters available, there is no default.</p>

<h3 id="Return_value">Return value</h3>

<p>A new {{domxref("IIRFilterNode")}} object instance.</p>

<h2 id="Examples">Examples</h2>

<pre
	class="brush: js">let feedForward = [0.00020298, 0.0004059599, 0.00020298];
let feedBackward = [1.0126964558, -1.9991880801, 0.9873035442];

const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioCtx = new AudioContext();

const iirFilter = new IIRFilterNode(audioCtx, { feedforward: feedForward, feedback: feedBackward });</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<div>

	<p>{{Compat}}</p>
</div>
