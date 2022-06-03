---
title: Improving compatibility using WebRTC adapter.js
slug: Web/API/WebRTC_API/adapter.js
page-type: guide
tags:
  - API
  - Audio
  - Guide
  - Video
  - WebRTC
---
{{WebRTCSidebar}}

The [WebRTC adapter](https://github.com/webrtc/adapter/) is a JavaScript shim which lets you write code to the WebRTC [specification](https://www.w3.org/TR/webrtc/) and have it "just work" in all browsers with WebRTC support.

This is useful because while the WebRTC specification is relatively stable, not all browsers have fully implemented all of its features. In addition, some browsers still have prefixes on some or all WebRTC APIs. If you use the WebRTC adapter there's no need to conditionally use prefixed APIs or implement other workarounds.

> **Note:** Since there is ongoing fluidity in functionality and naming of API terms in WebRTC and supporting browsers, use of this adapter is generally recommended.

The adapter is provided under a [BSD-style license](https://github.com/webrtc/adapter/blob/master/LICENSE.md).

## What adapter.js does

For each version of each browser that supports WebRTC, adapter.js implements the needed polyfills, establishes the non-prefixed names of APIs, and applies any other changes needed to make the browser run code written to the WebRTC specification.

For example, on Firefox versions older than 38, the adapter adds the {{domxref("RTCPeerConnection.urls")}} property; Firefox doesn't natively support this property until Firefox 38, while on Chrome, the adapter adds support for the {{jsxref("Promise")}} based API if it's not present. These are just a couple of examples; there are of course other adjustments made for you by the shim.

The WebRTC adapter currently supports Mozilla Firefox, Google Chrome, Apple Safari, and Microsoft Edge.

## Using adapter.js

In order to use adapter.js, you need to include adapter.js on any page that uses WebRTC APIs:

1. Download a copy of the [latest version of adapter.js](https://github.com/webrtc/adapter/tree/master/release) from GitHub.
2. Place it in your site's directory structure (such as in your scripts directory).
3. Include adapter.js in your project: `<script src="adapter.js"></script>`
4. Write your code, using WebRTC APIs per the specification, knowing that your code should work on all browsers.
5. Keep in mind that even a good shim like this one doesn't mean you don't need to test your code on different browsers (and ideally different versions of each browser).

## See also

- [The WebRTC adapter project on GitHub](https://github.com/webrtc/adapter)
