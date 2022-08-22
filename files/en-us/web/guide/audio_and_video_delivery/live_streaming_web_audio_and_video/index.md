---
title: Live streaming web audio and video
slug: Web/Guide/Audio_and_video_delivery/Live_streaming_web_audio_and_video
tags:
  - Guide
  - adaptive streaming
---
Live streaming technology is often employed to relay live events such as sports, concerts and more generally TV and Radio programmes that are output live. Often shortened to just streaming, live streaming is the process of transmitting media 'live' to computers and devices. This is a fairly complex and nascent subject with a lot of variables, so in this article, we'll introduce you to the subject and let you know how you can get started.

The key consideration when streaming media to a browser is the fact that rather than playing a finite file we are relaying a file that is being created on the fly and has no pre-determined start or end.

## Key differences between streamed and static media

In this case, we are using static media to describe media that is represented by a file, whether it be an mp3 or WebM file. This file sits on a server and can be delivered — like most other files — to the browser. This is often known as a progressive download.

Live streamed media lacks a finite start and end time as rather than a static file, it is a stream of data that the server passes on down the line to the browser and is often adaptive (see below). Usually, we require different formats and special server-side software to achieve this.

## Adaptive streaming

One of the main priorities for live streaming is to keep the player synchronized with the stream: adaptive streaming is a technique for doing this in the case of low bandwidth. The idea is that the data transfer rate is monitored and if it looks like it's not keeping up, we drop down to a lower bandwidth (and consequently lower quality) stream. In order to have this capability, we need to use formats that facilitate this. Live streaming formats generally allow adaptive streaming by breaking streams into a series of small segments and making those segments available at different qualities and bit rates.

## Streaming Audio and Video on Demand

Streaming technology is not used exclusively for live streams. It can also be used instead of the traditional progressive download method for Audio and Video on demand:

There are several advantages to this:

- Latency is generally lower so media will start playing more quickly
- Adaptive streaming makes for better experiences on a variety of devices
- Media is downloaded just in time which makes bandwidth usage more efficient

## Streaming Protocols

While static media is usually served over HTTP, there are several protocols for serving adaptive streams; let's take a look at the options.

### HTTP

For now, HTTP is by far the most commonly supported protocol used to transfer media on demand or live.

### RTMP

Real Time Messaging Protocol (RTMP) is a proprietary protocol developed by Macromedia (now Adobe) and supported by the Adobe Flash plugin. RTMP comes in various flavors including RTMPE (Encrypted), RTMPS (Secure over SSL/TLS) and RTMPT (encapsulated within HTTP requests).

### RTSP

> **Note:** Real Time Streaming Protocol (RTSP) controls media sessions between endpoints and is often used together with Real-time Transport Protocol (RTP) and with Real-time Control Protocol (RTCP) for media stream delivery. Using RTP with RTCP allows for adaptive streaming. This is not yet supported natively in most browsers.
>
> Some vendors implement propriety transport protocols, such as RealNetworks and their Real Data Transport (RDT).

### RTSP 2.0

RTSP 2.0 is currently in development and is not backward compatible with RTSP 1.0.

> **Warning:** Although the {{ htmlelement("audio") }} and {{ htmlelement("video") }} tags are protocol agnostic, no browser currently supports anything other than HTTP without requiring plugins, although this looks set to change. Protocols other than HTTP may also be subject to blocking from firewalls or proxy servers.

## Using streaming protocols

The process of using the various protocols is reassuringly familiar if you are used to working with media over HTTP.

For example:

```html
<video src="rtsp://myhost.com/mymedia.format">
 <!-- Fallback here -->
</video>
```

## Media Source Extensions (MSE)

[Media Source Extensions](https://w3c.github.io/media-source/) is a W3C working draft that plans to extend {{ domxref("HTMLMediaElement") }} to allow JavaScript to generate media streams for playback. Allowing JavaScript to generate streams facilitates a variety of use cases like adaptive streaming and time shifting live streams.

For example,  [you could implement MPEG-DASH using JavaScript while offloading the decoding to MSE](https://web.archive.org/web/20170504035455/https://msopentech.com/blog/2014/01/03/streaming_video_player/).

> **Note:** Time Shifting is the process of consuming a live stream sometime after it happened.

## Video Streaming File Formats

A couple of HTTP-based live streaming video formats are beginning to see support across browsers.

> **Note:** You can find a guide to encoding HLS and MPEG-DASH for use on the web at [Setting up adaptive streaming media sources](/en-US/docs/Web/Guide/Audio_and_video_delivery/Setting_up_adaptive_streaming_media_sources).

### MPEG-DASH

DASH stands for Dynamic Adaptive Streaming over HTTP and is a new format that has recently seen support added to Chrome, and Internet Explorer 11 running on Windows 8.1. It is supported via Media Source Extensions which are used by JavaScript libraries such as [DASH.js](https://github.com/Dash-Industry-Forum/dash.js/). This approach allows us to download chunks of the video stream using XHR and "append" the chunks to the stream that's played by the {{ htmlelement("video") }} element. So for example, if we detect that the network is slow, we can start requesting lower quality (smaller) chunks for the next segment. This technology also allows an advertising segment to be appended/inserted into the stream.

> **Note:** You can also [use WebM with the MPEG DASH adaptive streaming system](http://wiki.webmproject.org/adaptive-streaming/webm-dash-specification).

### HLS

HLS or HTTP Live Streaming is a protocol invented by Apple Inc and supported on iOS, Safari and the latest versions of Android browser / Chrome. HLS is also adaptive.

HLS can also be decoded using JavaScript, which means we can support the latest versions of Firefox, Chrome and Internet Explorer 10+. See this [HTTP Live Streaming JavaScript player](https://github.com/dailymotion/hls.js).

At the start of the streaming session, an [extended M3U (m3u8) playlist](https://en.wikipedia.org/wiki/M3U8#Extended_M3U_directives) is downloaded. This contains the metadata for the various sub-streams that are provided.

### Streaming File Format Support

| Browser                  | DASH  | HLS   | Opus (Audio) |
| ------------------------ | ----- | ----- | ------------ |
| Firefox 32               | ✓ [1] | ✓ [2] | ✓ 14+        |
| Safari 6+                |       | ✓     |              |
| Chrome 24+               | ✓ [1] | ✓     |              |
| Opera 20+                | ✓ [1] |       |              |
| Internet Explorer 10+    | ✓ 11  | ✓ [2] |              |
| Firefox Mobile           | ✓     | ✓     | ✓            |
| Safari iOS6+             |       | ✓     |              |
| Chrome Mobile            | ✓     | ✓ [2] |              |
| Opera Mobile             | ✓ [1] | ✓     |              |
| Internet Explorer Mobile | ✓ 11  | ✓ [2] |              |
| Android                  | ✓     |       |              |

\[1] Via JavaScript and MSE

\[2] Via JavaScript and a CORS Proxy

### Video Fallbacks

Between DASH and HLS we can cover a significant portion of modern browsers but we still need a fallback if we want to support the rest.

One popular approach is to use a Flash fallback that supports RTMP. Of course, we then have the issue that we need to encode in three different formats.

## Audio Streaming File Formats

There are also some audio formats beginning to see support across browsers.

### Opus

Opus is a royalty-free and open format that manages to optimize quality at various bit-rates for different types of audio. Music and speech can be optimized in different ways and Opus uses the SILK and CELT codecs to achieve this.

Currently, Opus is supported by Firefox desktop and mobile as well as the latest versions of desktop Chrome and Opera.

> **Note:** [Opus is a mandatory format](https://datatracker.ietf.org/doc/html/draft-ietf-rtcweb-audio-05) for WebRTC browser implementations.

### MP3, AAC, Ogg Vorbis

Most common audio formats can be streamed using specific server-side technologies.

Note: It's potentially easier to stream audio using non-streaming formats because unlike video there are no keyframes.

## Server-side Streaming Technologies

In order to stream live audio and video, you will need to run specific streaming software on your server or use third-party services.

### GStreamer

[GStreamer](https://gstreamer.freedesktop.org/) is an open source cross-platform multimedia framework that allows you to create a variety of media-handling components, including streaming components. Through its plugin system, GStreamer provides support for more than a hundred codecs (including MPEG-1, MPEG-2, MPEG-4, H.261, H.263, H.264, RealVideo, MP3, WMV, and FLV.)

GStreamer plugins such as [souphttpclientsink](https://gstreamer.freedesktop.org/documentation/soup/souphttpclientsink.html?gi-language=c) and [shout2send](https://gstreamer.freedesktop.org/data/doc/gstreamer/head/gst-plugins-good/html/gst-plugins-good-plugins-shout2send.html) exist to stream media over HTTP or you can also integrate with Python's Twisted framework.

For RTMP transfer you can use the [Nginx RTMP Module](https://github.com/arut/nginx-rtmp-module).

### SHOUTcast

[SHOUTcast](https://en.wikipedia.org/wiki/SHOUTcast) is a cross-platform proprietary technology for streaming media. Developed by Nullsoft, it allows digital audio content in MP3 or AAC format to be broadcast. For web use, SHOUTcast streams are transmitted over HTTP.

> **Note:** [SHOUTcast URLs may require a semi-colon to be appended to them](https://stackoverflow.com/questions/2743279/how-could-i-play-a-shoutcast-icecast-stream-using-html5).

### Icecast

The [Icecast](https://www.icecast.org/) server is an open source technology for streaming media. Maintained by the [Xiph.org Foundation](https://www.xiph.org/), it streams Ogg Vorbis/Theora as well as MP3 and AAC format via the SHOUTcast protocol.

> **Note:** SHOUTcast and Icecast are among the most established and popular technologies, but there are many [more streaming media systems available](https://en.wikipedia.org/wiki/List_of_streaming_media_systems#Servers).

### Streaming Services

Although you can install software like GStreamer, SHOUTcast and Icecast you will also find a lot of [third-party streaming services](https://en.wikipedia.org/wiki/Comparison_of_streaming_media_systems) that will do much of the work for you.

## See also

- [HTTP Live Streaming](https://en.wikipedia.org/wiki/HTTP_Live_Streaming)
- [HLS Browser Support](https://www.jwplayer.com/blog/hls-in-html5)
- [HTTP Live Streaming JavaScript player](https://github.com/RReverser/mpegts)
- [The Basics of HTTP Live Streaming](https://larryjordan.com/articles/basics-of-http-live-streaming/)
- [DASH Adaptive Streaming for HTML 5 Video](/en-US/docs/Web/Media/DASH_Adaptive_Streaming_for_HTML_5_Video)
- [Dynamic Adaptive Streaming over HTTP (MPEG-DASH)](https://en.wikipedia.org/wiki/Dynamic_Adaptive_Streaming_over_HTTP)
- [MPEG-DASH Media Source Demo](https://web.archive.org/web/20170703160817/https://dash-mse-test.appspot.com/media.html)
- [DASH Reference Client](https://reference.dashif.org/dash.js/v4.4.0/samples/dash-if-reference-player/index.html)
- [Dynamic Streaming over HTTP](https://en.wikipedia.org/wiki/Dynamic_Adaptive_Streaming_over_HTTP)
- [The State of MPEG-DASH Deployment](https://www.streamingmediaglobal.com/Articles/Editorial/Featured-Articles/The-State-of-MPEG-DASH-Deployment-96144.aspx)
- [Look, no plugins: Live streaming to the browser using Media Source Extensions and MPEG-DASH](https://www.bbc.co.uk/rd/blog/2014-03-media-source-extensions)
- [Media Source Extensions (W3C)](https://w3c.github.io/media-source/)
- [Icecast](https://en.wikipedia.org/wiki/Icecast)
- [SHOUTcast](https://en.wikipedia.org/wiki/Shoutcast)
- [GStreamer](https://en.wikipedia.org/wiki/GStreamer)
- [Streaming GStreamer Pipelines Via HTTP](https://coaxion.net/blog/2013/10/streaming-gstreamer-pipelines-via-http/)
- [GStreamer and Raspberry Pi](https://nginx-rtmp.blogspot.com/2013/07/gstreamer-and-raspberry-pi.html)
- [Comparison of Streaming Media Systems](https://en.wikipedia.org/wiki/Comparison_of_streaming_media_systems)
- [Mozilla Hacks - Streaming Media on demand with Media Source Extensions](https://hacks.mozilla.org/2015/07/streaming-media-on-demand-with-media-source-extensions/)
