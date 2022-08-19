---
title: Peer-to-peer communications with WebRTC
slug: Web/Guide/API/WebRTC/Peer-to-peer_communications_with_WebRTC
tags:
  - API
  - Advanced
  - Communication
  - Guide
  - NeedsContent
  - Peer
  - RTCPeerConnection
  - WebRTC
  - WebRTC API
spec-urls:
  - https://w3c.github.io/mediacapture-main/
  - https://w3c.github.io/webrtc-pc/
---
{{WebRTCSidebar}}

The **WebRTC API** is designed to allow JavaScript applications to create real-time connections containing audio and video streams as well as data channels for arbitrary data. These connections are created to directly link two users' browsers, without necessarily requiring any intermediary servers which support the WebRTC protocols. WebRTC also leverages the {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}} method to get access to microphone and camera data. In this article, we'll take a look at how peer-to-peer connections are created and managed using WebRTC and its {{domxref("RTCPeerConnection")}} interface.

A high-level description of what happens in an `RTCPeerConnection` was shown in an [Hacks article](https://hacks.mozilla.org/2013/05/embedding-webrtc-video-chat-right-into-your-website/) (see all WebRTC Hacks articles [here](https://hacks.mozilla.org/category/webrtc/)):

![Simple pictograph describing the basics of RTCPeerConnection call setup](webrtc-basicsofhowitworks2.png)

## Resources

- A good tutorial on basic features in WebRTC is at [web.dev](https://web.dev/webrtc-basics/).   A collection of basic test pages to support development are at [webrtc-landing](https://mozilla.github.io/webrtc-landing/).
- You can make simple person-to-person calls using [apprtc](https://github.com/webrtc/apprtc).
- A high-level description of what happens in an `RTCPeerConnection` was shown in the [Mozilla Hacks](https://hacks.mozilla.org/category/webrtc/) blog article [Embedding WebRTC video chat](https://hacks.mozilla.org/2013/05/embedding-webrtc-video-chat-right-into-your-website/).

## Specifications

{{Specifications}}
