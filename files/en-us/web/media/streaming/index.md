---
title: Guide to streaming audio and video
slug: Web/Media/Streaming
page-type: guide
---

{{QuickLinksWithSubpages("/en-US/docs/Web/Media")}}

In this guide, we'll examine the techniques used to stream audio and/or video media on the web, and how you can optimize your code, your media, your server, and the options you use while performing the streaming to bring out the best quality and performance possible.

## Protocols

In addition to the configuration of the server and the streaming code, there are sometimes special protocols which can be used to optimize performance.

### HTTPS Live Streaming

**HTTPS Live Streaming** (**HLS**) is a protocol developed by Apple and supported by Safari on all of their platforms. HLS may also be supported in other environments, although in some cases this support is conditional.

For example, because many websites' mobile-specific content assume that mobile browsers support HLS, Firefox for Android does as well, in order to avoid strange compatibility errors from occurring due to this assumption being incorrect. The desktop version of Firefox, however, does not support HLS.

HLS uses playlists to allow the user to not only select the media to stream, but also to choose among versions or forms of the same media. For example, HLS lets the server stream a video with multiple audio streams which the user can choose from, in order to hear their own language. Additionally, forms of the stream can be provided which are optimized for different network conditions. In this way, live streams can be made flexible and highly performant.

As of mid-2017, HLS has been standardized as {{RFC(8216)}}.

## See also

- [Web media technologies](/en-US/docs/Web/Media)
- [Guide to media types and formats on the web](/en-US/docs/Web/Media/Formats)
- {{HTMLElement("audio")}} and {{HTMLElement("video")}}
