---
title: Video and audio players
slug: Plugins/Flash_to_HTML5/Video/Players
tags:
  - Ads
  - DRM
  - Flash
  - HTML
  - UI
  - Video
  - adaptive streaming
  - player
---
{{PreviousMenuNext("Plugins/Flash_to_HTML5/Video/Distribution", "Plugins/Flash_to_HTML5/Video/Subtitles_captions", "Plugins/Flash_to_HTML5/Video")}}

There are a number of ways to play back web media depending on the scale of your needs and whether you need ad integration and digital rights management.

For media playback on the web, a spectrum of options is available including:

- An embedded `media` element with default or custom user agent controls.
- Digital rights management using [Encrypted Media Extensions](/en-US/docs/Web/API/Encrypted_Media_Extensions_API).
- Open source or commercial players which provide ready made solutions for needs such as ads integration, and adaptive bitrate streaming.

This page defines and discusses these options, all of which must be considered when deciding how to play back media on your web page.

## Considerations

### Media Elements

The most straightforward way to play back a media file is with the [`<video>` element](/en-US/docs/Web/HTML/Element/video) or the [\<audio> element](/en-US/docs/Web/HTML/Element/audio). This is suitable for basic playback, which generally means:

- A single or small number of WebM or MP4 files.
- No advertising.
- You don't need adaptive bitrate (ABR) streaming or digital rights management (DRM).

### User Interface Controls

For user interface controls, you actually have a choice between custom player controls and native controls. Custom controls require [more elements and custom scripts](https://developers.google.com/web/fundamentals/media/mobile-web-video-playback). Adding native controls is as simple as adding the `controls` attribute to your `<audio>` or `<video>` element. For example:

```html
<video src="videofile.webm" controls></video>
```

There are several things to consider when choosing. Native controls are optimized for the browser but are inconsistent between browsers. Custom controls allow you to build for accessibility, add your own branding, and keep the look and feel consistent between browsers.

See [Mobile Web Video Playback](https://developers.google.com/web/fundamentals/media/mobile-web-video-playback) and [Audio and video delivery](/en-US/docs/Web/Guide/Audio_and_video_delivery) for more information on custom controls.

### Adaptive Bitrate Streaming

Adaptive Streaming offers multiple resolutions and bitrates to the user by having the player choose which quality level and bitrate to play based upon the user's bandwidth and other factors. This generally results in a significantly better user experience with less buffering and smoother playback leading to longer watch times. This is accomplished by using the [Media Source Extensions API](/en-US/docs/Web/API/Media_Source_Extensions_API) to build to one of the adaptive bitrate standards, in other words, [DASH](/en-US/docs/Web/API/Media_Source_Extensions_API#dash) or [HLS](https://developer.apple.com/streaming/). Although it's possible to build your own player using these technologies, it is not recommended.

### Digital Rights Management

You may be happy sharing your content with anyone who wants it. Or maybe your content is also your livelihood, in which case you'll need [Encrypted Media Extensions (EME)](/en-US/docs/Web/API/Encrypted_Media_Extensions_API) or a player that supports digital rights management (DRM). See [DRM and authentication](/en-US/docs/Plugins/Flash_to_HTML5/Video/DRM_and_authentication) for more details.

### Ads Integration

Your player will need to integrate with ad SDKs such as, for example, [IMA SDK](https://developers.google.com/interactive-media-ads/docs/sdks/html5/) or [Freewheel](https://freewheel.tv/). Either work with your ad partners directly or partner with a player company or an online video provider who has already done these integrations.

## Media Players

There are both open source and commercial options. While open source solutions will allow you to implement media playback without a licensing fee, commercial vendors can help you with ads integration and DRM.

Open Source Players:

- [Shaka Player](https://github.com/google/shaka-player)
- [videojs](https://videojs.com/)
- [HLS.js](https://github.com/video-dev/hls.js/tree/master)

Commercial Players

- [Brightcove](https://www.brightcove.com/en/player)
- [JWPlayer](https://www.jwplayer.com/)
- [THEOPlayer](https://www.theoplayer.com/)
- [Kaltura](https://corp.kaltura.com/)
