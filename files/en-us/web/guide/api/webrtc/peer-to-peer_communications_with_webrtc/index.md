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
---
{{WebRTCSidebar}}{{draft}}

The **WebRTC API** is designed to allow JavaScript applications to create real-time connections containing audio and video streams as well as data channels for arbitrary data. These connections are created to directly link two users' browsers, without necessarily requiring any intermediary servers which support the WebRTC protocols. WebRTC also leverages the {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}} method to get access to microphone and camera data. In this article, we'll take a look at how peer-to-peer connections are created and managed using WebRTC and its {{domxref("RTCPeerConnection")}} interface.

A high-level description of what happens in an `RTCPeerConnection` was shown in an [Hacks article](https://hacks.mozilla.org/2013/05/embedding-webrtc-video-chat-right-into-your-website/) (see all WebRTC Hacks articles [here](https://hacks.mozilla.org/category/webrtc/)):

![Simple pictograph describing the basics of RTCPeerConnection call setup](webrtc-basicsofhowitworks2.png)

## Resources

- A good tutorial on basic features in WebRTC is at [HTML5 Rocks](http://www.html5rocks.com/en/tutorials/webrtc/basics/).   A collection of basic test pages to support development are at [webrtc-landing](https://mozilla.github.io/webrtc-landing).
- You can make simple person-to-person calls (including to people using Chrome) at [apprtc.appspot.com](https://apprtc.appspot.com/).
- A high-level description of what happens in an `RTCPeerConnection` was shown in the [Mozilla Hacks](https://hacks.mozilla.org/category/webrtc/) blog article [Embedding WebRTC video chat](https://hacks.mozilla.org/2013/05/embedding-webrtc-video-chat-right-into-your-website/).

## Specifications

| Specification                            | Status                               | Comment                              |
| ---------------------------------------- | ------------------------------------ | ------------------------------------ |
| {{SpecName("Media Capture")}} | {{Spec2("Media Capture")}} | Definition of the `getUserMedia` API |
| {{SpecName("WebRTC 1.0")}}     | {{Spec2("WebRTC 1.0")}}     | Initial definition                   |
