---
title: Web media technologies
slug: Web/Media
page-type: landing-page
---

{{QuickLinksWithSubpages("/en-US/docs/Web/Media")}}

Over the years, the Web's ability to present, create, and manage audio, video, and other media has grown at an increasing pace. Today, there are a large number of APIs available, as well as HTML elements, DOM interfaces, and other features that make it possible to not only perform these tasks, but use media in tandem with other technologies to do truly remarkable things. This article lists the various APIs with links to documentation you may find helpful in mastering them.

## References

### HTML

These articles cover HTML features for media developers.

- {{HTMLElement("audio")}}
  - : The `<audio>` element is used to play audio in a Web context. These can be used invisibly as a destination for more complex media, or with visible controls for user-controlled playback of audio files. Accessible from JavaScript as {{domxref("HTMLAudioElement")}} objects.
- {{HTMLElement("video")}}
  - : The `<video>` element is an endpoint for video content in a Web context. It can be used to present video files, or as a destination for streamed video content. `<video>` can also be used as a way to link media APIs with other HTML and DOM technologies, including {{HTMLElement("canvas")}} (for frame grabbing and manipulation), for example. Accessible from JavaScript as {{domxref("HTMLVideoElement")}} objects.
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

## Guides

- [Using audio and video in HTML](/en-US/docs/Web/Media/HTML_media)
  - : A guide to using the HTML `<audio>` and `<video>` elements.
- [Accessible multimedia](/en-US/docs/Learn/Accessibility/Multimedia)
  - : In this guide, we cover ways web designers and developers can create content that is accessible to people with different capabilities. This ranges from using the [`alt`](/en-US/docs/Web/HTML/Element/img#alt) attribute on {{HTMLElement("img")}} elements to captions to tagging media for screen readers.
- [Guide to media types and formats on the web](/en-US/docs/Web/Media/Formats)
  - : A guide to the file types and codecs available for images, audio, and video media on the web. This includes recommendations for what formats to use for what kinds of content, best practices including how to provide fallbacks and how to prioritize media types, and also includes general browser support information for each media container and codec.
- [Streaming audio and video](/en-US/docs/Web/Media/Streaming)
  - : A guide which covers how to stream audio and video, as well as techniques and technologies you can take advantage of to ensure the best possible quality and/or performance of your streams.
- [Autoplay guide for media and Web Audio APIs](/en-US/docs/Web/Media/Autoplay_guide)
  - : Unexpected automatic playback of media or audio can be an unwelcome surprise to users. While autoplay serves a purpose, it should be used carefully. To give users control over this, many browsers now provide forms of autoplay blocking. This article is a guide to autoplay, with tips on when and how to use it and how to work with browsers to handle autoplay blocking gracefully.
- [Web Audio spatialization basics](/en-US/docs/Web/API/Web_Audio_API/Web_audio_spatialization_basics)
  - : In 3D environments, which may either be 3D scenes rendered to the screen or a mixed reality experience experienced using a headset, it's important for audio to be performed so that it sounds like it's coming from the direction of its source. This guide covers how to accomplish this.

## Other topics

Related topics which may be of interest, since they can be used in tandem with media APIs in interesting ways.

- [The Canvas API](/en-US/docs/Web/API/Canvas_API)
  - : The Canvas API lets you draw into an {{HTMLElement("canvas")}}, manipulating and changing the contents of an image. This can be used with media in many ways, including by setting a `<canvas>` element as the destination for video playback or camera capture so that you can capture and manipulate video frames.
- [WebGL](/en-US/docs/Web/API/WebGL_API)
  - : WebGL provides an OpenGL ES compatible API on top of the existing Canvas API, making it possible to do powerful 3D graphics on the Web. Through a canvas, this can be used to add 3D imagery to media content.
- [WebXR](/en-US/docs/Web/API/WebXR_Device_API)
  - : WebXR, which has replaced the now-obsolete WebVR API, is a technology that provides support for creating virtual reality (VR) and augmented reality (AR) content. The mixed reality content can then be displayed on the device's screen or using goggles or a headset.
- [WebVR](/en-US/docs/Web/API/WebVR_API) {{deprecated_inline}}
  - : The Web Virtual Reality API supports virtual reality (VR) devices such as the Oculus Rift or the HTC Vive, making it possible for developers to translate position and movement of the user into movement within a 3D scene which is then presented on the device. WebVR has been replaced by WebXR, and is due to be removed from browsers soon.
