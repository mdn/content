---
title: PushMessageData.text()
slug: Web/API/PushMessageData/text
tags:
  - API
  - Experimental
  - Method
  - Plain text
  - Push
  - PushMessageData
  - Reference
  - Service Workers
  - Text
browser-compat: api.PushMessageData.text
---
<p>{{APIRef("Push API")}}{{SeeCompatTable()}}</p>

<p>The <code><strong>text()</strong></code>method of the {{domxref("PushMessageData")}} interface extracts push message data as a plain text string.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">var myText = pushEvent.data.text();</pre>

<h3 id="Parameters">Parameters</h3>

<p>None.</p>

<h3 id="Returns">Returns</h3>

<p>A {{domxref("USVString")}}.</p>

<h2 id="Examples">Examples</h2>

<pre class="brush: js">self.addEventListener('push', function(event) {
  var textObj = event.data.text();

  // do something with your text
});</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>
