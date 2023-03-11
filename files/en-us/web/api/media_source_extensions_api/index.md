---
title: Media Source API
slug: Web/API/Media_Source_Extensions_API
page-type: web-api-overview
status:
  - experimental
spec-urls: https://w3c.github.io/media-source/
---

{{DefaultAPISidebar("Media Source Extensions")}}

The **Media Source API**, formally known as **Media Source Extensions** (**MSE**), provides functionality enabling plugin-free web-based streaming media. Using MSE, media streams can be created via JavaScript, and played using {{htmlelement("audio")}} and {{htmlelement("video")}} elements.

## Media Source Extensions concepts and usage

Playing video and audio has been available in web applications without plugins for a few years now, but the basic features offered have really only been useful for playing single whole tracks. We can't, for example, combine/split arraybuffers. Streaming media has up until recently been the domain of Flash, with technologies like Flash Media Server serving video streams using the RTMP protocol.

### The MSE standard

With Media Source Extensions (MSE), this is changing. MSE allows us to replace the usual single progressive `src` URI fed to media elements with a reference to a `MediaSource` object, which is a container for information like the ready state of the media for being played, and references to multiple `SourceBuffer` objects that represent the different chunks of media that make up the entire stream. MSE gives us finer-grained control over how much and how often content is fetched, and some control over memory usage details, such as when buffers are evicted. It lays the groundwork for adaptive bitrate streaming clients (such as those using DASH or HLS) to be built on its extensible API.

Creating assets that work with MSE in modern browsers is a laborious process, taking significant time, computing power, and energy. The usage of external utilities to massage the content into a suitable format is required. While browser support for the various media containers with MSE is spotty, usage of the H.264 video codec, AAC audio codec, and MP4 container format is a common baseline. MSE also provides an API for runtime detection of container and codec support.

If you do not require explicit control of video quality over time, the rate at which content is fetched, or the rate at which memory is evicted, then the {{htmlelement("video")}} and {{htmlelement("source")}} tags may well be a simple and adequate solution.

### DASH

Dynamic Adaptive Streaming over HTTP (DASH) is a protocol for specifying how adaptive content should be fetched. It is effectively a layer built on top of MSE for building adaptive bitrate streaming clients. While there are other protocols available (such as HTTP Live Streaming (HLS)), DASH has the most platform support.

DASH moves lots of logic out of the network protocol and into the client side application logic, using the simpler HTTP protocol to fetch files. Indeed, one can support DASH with a simple static file server, which is also great for CDNs. This is in direct contrast with previous streaming solutions that required expensive licenses for proprietary non-standard client/server protocol implementations.

The two most common use cases for DASH involve watching content "on demand" or "live." On demand allows a developer to take their time transcoding the assets into multiple resolutions of various quality.

Live profile content can introduce latency due to its transcoding and broadcasting, so DASH is not suitable for real time communication like [WebRTC](/en-US/docs/Web/API/WebRTC_API) is. It can however support significantly more client connections than WebRTC.

There are numerous available free and open source tools for transcoding content and preparing it for use with DASH, DASH file servers, and DASH client libraries written in JavaScript.

### Availability in workers

Starting with Chrome 108, MSE features are available in dedicated {{domxref("Web Workers API", "web workers", "", "nocode")}}, which allows for improved performance when manipulating {{domxref("MediaSource")}}s and {{domxref("SourceBuffer")}}s. To play back the media, the {{domxref("MediaSource.handle")}} property is used to get a reference to a {{domxref("MediaSourceHandle")}} object, a proxy for the `MediaSource` that can be transferred back to the main thread and attached to a media element via its {{domxref("HTMLMediaElement.srcObject")}} property.

See [MSE-in-Workers Demo by Matt Wolenetz](https://wolenetz.github.io/mse-in-workers-demo/mse-in-workers-demo.html) for a live example.

## Interfaces

- {{domxref("MediaSource")}}
  - : Represents a media source to be played via an {{domxref("HTMLMediaElement")}} object.
- {{domxref("SourceBuffer")}}
  - : Represents a chunk of media to be passed into an {{domxref("HTMLMediaElement")}} via a `MediaSource` object.
- {{domxref("SourceBufferList")}}
  - : A simple container list for multiple `SourceBuffer` objects.
- {{domxref("VideoPlaybackQuality")}}
  - : Contains information about the quality of video being played by a {{htmlelement("video")}} element, such as number of dropped or corrupted frames. Returned by the {{domxref("HTMLVideoElement.getVideoPlaybackQuality()")}} method.

## Extensions to other interfaces

- {{domxref("URL.createObjectURL()")}}
  - : Creates an object URL pointing to a `MediaSource` object that can then be specified as the `src` value of an HTML media element to play a media stream.
- {{domxref("HTMLMediaElement.seekable")}}
  - : When a `MediaSource` object is played by an HTML media element, this property will return a {{domxref("TimeRanges")}} object that contains the time ranges that the user is able to seek to.
- {{domxref("HTMLVideoElement.getVideoPlaybackQuality()")}}
  - : Returns a {{domxref("VideoPlaybackQuality")}} object for the currently played video.
- {{domxref("AudioTrack.sourceBuffer")}}, {{domxref("VideoTrack.sourceBuffer")}}, {{domxref("TextTrack.sourceBuffer")}}
  - : Returns the {{domxref("SourceBuffer")}} that created the track in question.

## Specifications

{{Specifications}}

## See also

- [Transcoding assets for Media Source Extensions](/en-US/docs/Web/API/Media_Source_Extensions_API/Transcoding_assets_for_MSE)
- Using MSE to create a basic streaming service (TBD)
- Using MPEG DASH to create a streaming application (TBD)
- The {{htmlelement("audio")}} and {{htmlelement("video")}} elements.
- {{domxref("HTMLMediaElement")}}, {{domxref("HTMLVideoElement")}}, {{domxref("HTMLAudioElement")}}.
