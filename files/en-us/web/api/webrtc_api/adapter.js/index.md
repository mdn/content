---
title: Improving compatibility using WebRTC adapter.js
slug: Web/API/WebRTC_API/adapter.js
tags:
  - API
  - Audio
  - Guide
  - Video
  - WebRTC
---
<p>{{WebRTCSidebar}}</p>

<p>The <a href="https://github.com/webrtc/adapter/">WebRTC adapter</a> is a JavaScript shim which lets you write code to the WebRTC <a href="https://www.w3.org/TR/webrtc/">specification</a> and have it "just work" in all browsers with WebRTC support.</p>

<p>This is useful because while the WebRTC specification is relatively stable, not all browsers have fully implemented all of its features. In addition, some browsers still have prefixes on some or all WebRTC APIs. If you use the WebRTC adapter there's no need to conditionally use prefixed APIs or implement other workarounds.</p>

<div class="note">
<p><strong>Note:</strong> Since there is ongoing fluidity in functionality and naming of API terms in WebRTC and supporting browsers, use of this adapter is generally recommended.</p>
</div>

<p>The adapter is provided under a <a href="https://github.com/webrtc/adapter/blob/master/LICENSE.md">BSD-style license</a>.</p>

<h2 id="What_adapter.js_does">What adapter.js does</h2>

<p>For each version of each browser that supports WebRTC, adapter.js implements the needed polyfills, establishes the non-prefixed names of APIs, and applies any other changes needed to make the browser run code written to the WebRTC specification.</p>

<p>For example, on Firefox versions older than 38, the adapter adds the {{domxref("RTCPeerConnection.urls")}} property; Firefox doesn't natively support this property until Firefox 38, while on Chrome, the adapter adds support for the {{jsxref("Promise")}} based API is added if it's not present. These are just a couple of examples; there are of course other adjustments made for you by the shim.</p>

<p>The WebRTC adapter currently supports Mozilla Firefox, Google Chrome, Apple Safari, and Microsoft Edge.</p>

<h2 id="Using_adapter.js">Using adapter.js</h2>

<p>In order to use adapter.js, you need to include adapter.js on any page that uses WebRTC APIs:</p>

<ol>
 <li>Download a copy of the <a href="https://github.com/webrtc/adapter/tree/master/release">latest version of adapter.js</a> from GitHub.</li>
 <li>Place it in your site's directory structure (such as in your scripts directory).</li>
 <li>Include adapter.js in your project: <code>&lt;script src="adapter.js"&gt;&lt;/script&gt;</code></li>
 <li>Write your code, using WebRTC APIs per the specification, knowing that your code should work on all browsers.</li>
 <li>Keep in mind that even a good shim like this one doesn't mean you don't need to test your code on different browsers (and ideally different versions of each browser).</li>
</ol>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="https://github.com/webrtc/adapter">The WebRTC adapter project on GitHub</a></li>
</ul>
