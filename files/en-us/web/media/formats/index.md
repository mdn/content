---
title: "Media type and format guide: image, audio, and video content"
slug: Web/Media/Formats
page-type: guide
---

{{QuickLinksWithSubpages("/en-US/docs/Web/Media")}}

Since nearly its beginning, the web has included support for some form of visual media presentation. Originally, these capabilities were limited, and were expanded organically, with different browsers finding their own solutions to the problems around including still and video imagery on the web. The modern web has powerful features to support the presentation and manipulation of media, with several media-related APIs supporting various types of content. Generally, the media formats supported by a browser are entirely up to the browser's creators, which can complicate the work of a web developer.

This guide provides an overview of the media file types, {{Glossary("codec", "codecs")}}, and algorithms that may comprise media used on the web. It also provides browser support information for various combinations of these, and suggestions for prioritization of formats, as well as which formats excel at specific types of content.

## References

### Images

- [Image file type and format guide](/en-US/docs/Web/Media/Formats/Image_types)
  - : A guide to the main image file types and content formats used on the Internet. This includes a high level overview of: browser support, benefits, and limitations, along with best-practice guidelines to help web designers choose the right image file format for specific types of content.

### Media file types and codecs

- [Media containers (file types)](/en-US/docs/Web/Media/Formats/Containers)
  - : A guide to the file types that contain media data. Some are audio-specific, while others may be used for either audio or combined audiovisual content such as movies. Includes overviews of each of the file types supported by the major web browsers, along with browser support information and supported features.
- [Web audio codec guide](/en-US/docs/Web/Media/Formats/Audio_codecs)
  - : A guide to the audio codecs allowed for by the common media containers, as well as by the major browsers. Includes benefits, limitations, key specifications and capabilities, and use cases. It also covers each browser's support for using the codec in given containers.
- [Web video codec guide](/en-US/docs/Web/Media/Formats/Video_codecs)
  - : This article provides basic information about the video codecs supported by the major browsers, as well as some that are not commonly supported but that you might still run into. It also covers codec capabilities, benefits, limitations, and browser support levels and restrictions.
- [Codecs in common media types](/en-US/docs/Web/Media/Formats/codecs_parameter)
  - : When specifying the MIME type describing a media format, you can provide details using the `codecs` parameter as part of the type string. This guide describes the format and possible values of the `codecs` parameter for the common media types.
- [Codecs used by WebRTC](/en-US/docs/Web/Media/Formats/WebRTC_codecs)
  - : [WebRTC](/en-US/docs/Web/API/WebRTC_API) doesn't use a container, but instead streams the encoded media itself from peer to peer using {{domxref("MediaStreamTrack")}} objects to represent each audio or video track. This guide discusses the codecs commonly used with WebRTC.

## Guides

### Concepts

- [Digital audio concepts](/en-US/docs/Web/Media/Formats/Audio_concepts)
  - : An introduction to how audio is converted into digital form and stored for use by computers. It explains basic concepts about how audio is sampled, as well as concepts such as sample rate, audio frames, and audio compression.
- [Digital video concepts](/en-US/docs/Web/Media/Formats/Video_concepts)
  - : A guide to fundamental concepts involved with digital video as used on the web, including basics about color formats, chroma subsampling, how human perception influences video coding, and so forth.

### Tutorials and how-tos

- [Learning: Video and audio content](/en-US/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content)
  - : This tutorial introduces and details the use of media on the web.
- [Handling media support issues in web content](/en-US/docs/Web/Media/Formats/Support_issues)
  - : In this guide, we look at how to build web content that maximizes quality or performance while providing the broadest possible compatibility, by choosing media formats wisely, and offering fallbacks and alternate formats where it would be helpful.

## Other topics

- [Media Capabilities API](/en-US/docs/Web/API/Media_Capabilities_API)
  - : The Media Capabilities API lets you discover the encoding and decoding capabilities of the device your app or site is running on. This lets you make real-time decisions about what formats to use and when.
