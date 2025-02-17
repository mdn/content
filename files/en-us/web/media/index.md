---
title: Media technologies on the web
short-title: Media
slug: Web/Media
page-type: landing-page
sidebar: mediasidebar
---

Over the years, the web's ability to present, create, and manage audio, video, and other media has matured.
There are now a large number of APIs, as well as HTML elements, DOM interfaces, and other features that make it possible to work with media in exciting and immersive ways.
This article lists guides and references for various features you may use when incorporating media into your projects.

## Guides

- [Audio and Video Delivery](/en-US/docs/Web/Media/Guides/Audio_and_video_delivery)
  - : We can deliver audio and video on the web in a number of ways, ranging from 'static' media files to adaptive live streams. This article is intended as a starting point for exploring the various delivery mechanisms of web-based media and compatibility with popular browsers.
- [Audio and Video manipulation](/en-US/docs/Web/Media/Guides/Audio_and_video_manipulation)
  - : Having native audio and video in the browser means we can use these data streams with technologies such as {{htmlelement("canvas")}}, [WebGL](/en-US/docs/Web/API/WebGL_API) or [Web Audio API](/en-US/docs/Web/API/Web_Audio_API) to modify audio and video directly, for example adding reverb/compression effects to audio, or grayscale/sepia filters to video.
- [Autoplay guide for media and Web Audio APIs](/en-US/docs/Web/Media/Guides/Autoplay)
  - : Unexpected automatic playback of media or audio can be an unwelcome surprise to users. While autoplay serves a purpose, it should be used carefully. To give users control over this, many browsers now provide forms of autoplay blocking. This article is a guide to autoplay, with tips on when and how to use it and how to work with browsers to handle autoplay blocking gracefully.
- [DASH Adaptive Streaming for HTML 5 Video](/en-US/docs/Web/Media/Guides/DASH_Adaptive_Streaming_for_HTML_5_Video)
  - : Dynamic Adaptive Streaming over HTTP (DASH) is an adaptive streaming protocol. This means that it allows for a video stream to switch between bit rates on the basis of network performance, in order to keep a video playing.
- [Streaming audio and video](/en-US/docs/Web/Media/Guides/Streaming)
  - : A guide which covers how to stream audio and video, as well as techniques and technologies you can take advantage of to ensure the best possible quality and/or performance of your streams.
- [Media types and formats on the web](/en-US/docs/Web/Media/Guides/Formats)
  - : A guide to the file types and codecs available for images, audio, and video media on the web. This includes recommendations for what formats to use for what kinds of content, best practices including how to provide fallbacks and how to prioritize media types, and also includes general browser support information for each media container and codec.
- [Using images in HTML](/en-US/docs/Web/Media/Guides/Images)
  - : A guide to adding images to websites that are responsive, accessible, and performant.

## References

### HTML

These articles describe the HTML elements used for including media:

- {{HTMLElement("audio")}}
  - : The `<audio>` element is used to play audio. These can be used invisibly as a destination for more complex media, or with visible controls for user-controlled playback of audio files. Accessible from JavaScript as {{domxref("HTMLAudioElement")}} objects.
- {{HTMLElement("video")}}
  - : The `<video>` element is used to play video content. It can be used to present video files, or as a destination for streamed video content. `<video>` can also be used as a way to link media APIs with other HTML and DOM technologies, including {{HTMLElement("canvas")}} (for frame grabbing and manipulation), for example. It is accessible from JavaScript as {{domxref("HTMLVideoElement")}} objects.
- {{HTMLElement("track")}}
  - : The HTML `<track>` element can be placed within an {{HTMLElement("audio")}} or {{HTMLElement("video")}} element to provide a reference to a [WebVTT](/en-US/docs/Web/API/WebVTT_API) format subtitle or caption track to be used when playing the media. Accessible from JavaScript as {{domxref("HTMLTrackElement")}} objects.
- {{HTMLElement("source")}}
  - : The HTML `<source>` element is used within an {{HTMLElement("audio")}} or {{HTMLElement("video")}} element to specify source media to present. Multiple sources can be used to provide the media in different formats, sizes, or resolutions. Accessible from JavaScript as {{domxref("HTMLSourceElement")}} objects.

### APIs

- [Media Capabilities API](/en-US/docs/Web/API/Media_Capabilities_API)
  - : The Media Capabilities API lets you determine the encoding and decoding capabilities of the device your app or site is running on. This lets you make real-time decisions about what formats to use and when.
- [Media Capture and Streams API](/en-US/docs/Web/API/Media_Capture_and_Streams_API)
  - : A reference for the API which makes it possible to stream, record, and manipulate media both locally and across a network. This includes using local cameras and microphones to capture video, audio, and still images.
- [Media Session API](/en-US/docs/Web/API/Media_Session_API)
  - : The Media Session API provides a way to customize media notifications. It does this by providing metadata for display by the user agent for the media your web app is playing. It also provides action handlers that the browser can use to access platform media keys such as hardware keys found on keyboards, headsets, remote controls, and software keys found in notification areas and on lock screens of mobile devices.
- [MediaStream Recording API](/en-US/docs/Web/API/MediaStream_Recording_API)
  - : The MediaStream Recording API lets you capture media streams to process or filter the data or record it to disk.
- [Web Audio API](/en-US/docs/Web/API/Web_Audio_API)
  - : The Web Audio API lets you generate, filter, and manipulate sound data both in real-time and on pre-recorded material, then send that audio to a destination such as an `<audio>` element, a media stream, or to disk.
- [WebRTC](/en-US/docs/Web/API/WebRTC_API)
  - : WebRTC (Web Real-Time Communication) makes it possible to stream live audio and video, as well as transfer arbitrary data, between two peers over the Internet, without requiring an intermediary.

## Related topics

Related topics which may be of interest, since they can be used in tandem with media APIs in interesting ways.

- [Accessible multimedia](/en-US/docs/Learn_web_development/Core/Accessibility/Multimedia)
  - : In this guide, we cover ways web designers and developers can create content that is accessible to people with different capabilities. This ranges from using the [`alt`](/en-US/docs/Web/HTML/Element/img#alt) attribute on {{HTMLElement("img")}} elements to captions to tagging media for screen readers.
- [Canvas API](/en-US/docs/Web/API/Canvas_API)
  - : The Canvas API lets you draw into an {{HTMLElement("canvas")}}, manipulating and changing the contents of an image. This can be used with media in many ways, including by setting a `<canvas>` element as the destination for video playback or camera capture so that you can capture and manipulate video frames.
- [WebGL](/en-US/docs/Web/API/WebGL_API)
  - : WebGL provides an OpenGL ES compatible API on top of the existing Canvas API, making it possible to do powerful 3D graphics on the Web. Through a canvas, this can be used to add 3D imagery to media content.
- [WebXR](/en-US/docs/Web/API/WebXR_Device_API)
  - : WebXR, which has replaced the now-obsolete WebVR API, is a technology that provides support for creating virtual reality (VR) and augmented reality (AR) content. The mixed reality content can then be displayed on the device's screen or using goggles or a headset.
- [WebVR](/en-US/docs/Web/API/WebVR_API) {{deprecated_inline}}
  - : The Web Virtual Reality API supports virtual reality (VR) devices such as the Oculus Rift or the HTC Vive, making it possible for developers to translate position and movement of the user into movement within a 3D scene which is then presented on the device. WebVR has been replaced by WebXR, and is due to be removed from browsers soon.
- [Web Audio spatialization basics](/en-US/docs/Web/API/Web_Audio_API/Web_audio_spatialization_basics)
  - : In 3D environments, which may either be 3D scenes rendered to the screen or a mixed reality experience experienced using a headset, it's important for audio to be performed so that it sounds like it's coming from the direction of its source. This guide covers how to accomplish this.
