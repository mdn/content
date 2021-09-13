---
title: MediaDevices.selectAudioOutput()
slug: Web/API/MediaDevices/selectAudioOutput
tags:
  - API
  - MediaDevices
  - Method
  - Reference
  - WebRTC
  - selectAudioOutput
  - Experimental
browser-compat: api.MediaDevices.selectAudioOutput
---
<div>{{APIRef("WebRTC")}} {{SeeCompatTable}}</div>

<p>The {{domxref("MediaDevices")}} method <strong><code>selectAudioOutput()</code></strong> prompts the user to select a specific audio output device, for example a speaker or headset.
  On success, the returned {{jsxref("Promise")}} is resolved with a {{domxref("MediaDeviceInfo")}} describing the selected device.</p>

<p>The method must be triggered from some UI interaction like a button click (more precisely, it <em>requires</em> {{Glossary("transient activation")}}).</p>

<p>Access to audio output devices is gated by the <a href="/en-US/docs/Web/API/Permissions_API">Permissions API</a>.
    The prompt will not be displayed if the <code>speaker-selection</code> permission has not been granted.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">navigator.mediaDevices.selectAudioOutput()
navigator.mediaDevices.selectAudioOutput(options)
</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
 <dt><code>options</code> {{Optional_Inline}}</dt>
 <dd><p>An object that configures what device(s) may be offered in the user prompt.</p>

  <dl>
    <dt><code>deviceId</code> {{Optional_Inline}}</dt>
    <dd>A {{domxref("DOMString")}} representing the id of the (only) device to display in the prompt (with default value: "").
      
      <div class="notecard note">
        <p><strong>Note:</strong> A user agent may choose to skip prompting the user if a specified non-null id was previously exposed to the user by <code>selectAudioOutput()</code> in an earlier session. 
          In this case the user agent may simply resolve with this device id, or a new id for the same device if it has changed.</p>

        <p>This is intended for applications that want to use persisted device ids.
          The ids <em>must be passed</em> through <code>selectAudioOutput()</code> successfully before they will work with {{domxref("HTMLMediaElement.setSinkId","setSinkId()")}}.</p>
      </div>
    </dd>
   </dl>

 </dd>
</dl>


<h3 id="Return_value">Return value</h3>

<p>A {{ jsxref("Promise") }} that receives a {{domxref("MediaDeviceInfo")}} object when the promise is fulfilled.
  The object describes the user-selected audio output device.</p>

<p>The promise may be rejected with one of the following errors:</p>
<dl>
 <dt><code>NotAllowedError</code></dt>
 <dd>The current page has not been granted the {{HTTPHeader("Feature-Policy/speaker-selection","speaker-selection")}} permission or the user closed the selection prompt without choosing a device.</dd>
 <dt><code>NotFoundError</code></dt>
 <dd>There are no available audio output devices.</dd>
 <dt><code>InvalidStateError</code></dt>
 <dd><code>selectAudioOutput</code> requires {{Glossary("transient activation")}} (you must trigger it from some kind of UI event).</dd>
</dl>

<h2 id="Example">Example</h2>

<p>Here's an example of using <code>selectAudioOutput()</code>, which you might call within a function that is triggered by a button click.
  It outputs the selected <a href="/en-US/docs/Web/API/MediaDeviceInfo/deviceId">device IDs</a> and labels (if available) or an error message.</p>

<pre class="brush: js">if (!navigator.mediaDevices.selectAudioOutput) {
  console.log("selectAudioOutput() not supported.");
  return;
}

//Display prompt and log selected device or error
navigator.mediaDevices.selectAudioOutput()
.then( (device) => {
    console.log(device.kind + ": " + device.label + " id = " + device.deviceId);
  })
.catch(function(err) {
  console.log(err.name + ": " + err.message);
});
</pre>

<p>On selection of an output this might produce:</p>

<pre class="brush: bash">audiooutput: Realtek Digital Output (Realtek(R) Audio) id = 0wE6fURSZ20H0N2NbxqgowQJLWbwo+5ablCVVJwRM3k=</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li><a href="/en-US/docs/Web/API/WebRTC_API">WebRTC</a> - the introductory page to the API</li>
</ul>
