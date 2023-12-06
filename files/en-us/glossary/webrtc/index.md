---
title: WebRTC
slug: Glossary/WebRTC
page-type: glossary-definition
---

{{GlossarySidebar}}

**WebRTC** (_Web Real-Time Communication_) is an {{Glossary("API")}} that can be used by video-chat, voice-calling, and P2P-file-sharing Web apps.

WebRTC consists mainly of these parts:

- {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}}
  - : Grants access to a device's camera and/or microphone, and can plug in their signals to a RTC connection.
- {{domxref("RTCPeerConnection")}}
  - : An interface to configure video chat or voice calls.
- {{domxref("RTCDataChannel")}}
  - : Provides a method to set up a {{Glossary("P2P", "peer-to-peer")}} data pathway between browsers.

## See also

- [WebRTC](https://en.wikipedia.org/wiki/WebRTC) on Wikipedia
- [WebRTC API on MDN](/en-US/docs/Web/API/WebRTC_API)
- [Browser support for WebRTC](https://caniuse.com/rtcpeerconnection)
