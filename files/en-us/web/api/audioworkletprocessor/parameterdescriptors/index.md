---
title: AudioWorkletProcessor.parameterDescriptors (static getter)
slug: Web/API/AudioWorkletProcessor/parameterDescriptors
tags:
  - API
  - AudioWorkletProcessor
  - Experimental
  - Property
  - Reference
  - parameterDescriptors

browser-compat: api.AudioWorkletProcessor.parameterDescriptors
---
<div>{{APIRef("Web Audio API")}}{{SeeCompatTable}}</div>

<p>The read-only <strong><code>parameterDescriptors</code></strong> property of an {{domxref("AudioWorkletProcessor")}}-derived class is a <em>static getter</em>,
  which returns an iterable of {{domxref("AudioParamDescriptor")}}-based objects.</p>

<p>The property is not a part of the {{domxref("AudioWorkletProcessor")}}
  interface, but, if defined, it is called internally by the
  {{domxref("AudioWorkletProcessor")}} constructor to create a list of custom
  {{domxref("AudioParam")}} objects in the {{domxref("AudioWorkletNode.parameters",
  "parameters")}} property of the associated {{domxref("AudioWorkletNode")}}.</p>

<p>Defining the getter is optional.</p>

<h2 id="Syntax">Syntax</h2>

<pre
  class="brush: js"><em>AudioWorkletProcessorSubclass</em>.parameterDescriptors;</pre>

<h3 id="Value">Value</h3>

<p>An iterable of {{domxref("AudioParamDescriptor")}}-based objects. The properties of
  these objects are as follows:</p>

  <dl>
    <dt><code>name</code></dt>
    <dd>The {{domxref("DOMString")}} which represents the name of the <code>AudioParam</code>. Under this name the <code>AudioParam</code> will be available in the {{domxref("AudioWorkletNode.parameters", "parameters")}} property of the node, and under this name the {{domxref("AudioWorkletProcessor.process")}} method will acquire the calculated values of this <code>AudioParam</code>.</dd>
    <dt><code>automationRate</code> {{optional_inline}}</dt>
    <dd>Either <code><a href="/en-US/docs/Web/API/AudioParam#a-rate">"a-rate"</a></code>, or <code><a href="/en-US/docs/Web/API/AudioParam#k-rate">"k-rate"</a></code> string which represents an automation rate of this <code>AudioParam</code>. Defaults to <code>"a-rate"</code>.</dd>
    <dt><code>minValue</code> {{optional_inline}}</dt>
    <dd>A <code>float</code> which represents minimum value of the <code>AudioParam</code>. Defaults to <code>-3.4028235e38</code>.</dd>
    <dt><code>maxValue</code> {{optional_inline}}</dt>
    <dd>A <code>float</code> which represents maximum value of the <code>AudioParam</code>. Defaults to <code>3.4028235e38</code>.</dd>
    <dt><code>defaultValue</code> {{optional_inline}}</dt>
    <dd>A <code>float</code> which represents initial value of the <code>AudioParam</code>. Defaults to <code>0</code>.</dd>
   </dl>

<h2 id="Examples">Examples</h2>

<p>See <a href="/en-US/docs/Web/API/AudioWorkletNode/parameters#examples"><code>AudioWorkletNode.parameters</code></a> for example code showing how to add static <code>parameterDescriptors</code> getter to a custom <code>AudioWorkletProcessor</code>.</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li><a href="/en-US/docs/Web/API/Web_Audio_API">Web Audio API</a></li>
  <li><a href="/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API">Using the Web Audio
      API</a></li>
</ul>
