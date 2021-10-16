---
title: Subtitles and closed caption
slug: Plugins/Flash_to_HTML5/Video/Subtitles_captions
tags:
  - Flash
  - Video
  - WebVTT
  - captions
  - muxing
  - subtitles
---
{{PreviousMenu("Plugins/Flash_to_HTML5/Video/Players", "Plugins/Flash_to_HTML5/Video")}}

Just as audio and video may need transcoding for the web, subtitles and closed captions may also need to be converted and made available.

## Getting subtitles and closed captions

If you have existing subtitle or closed caption files, you may need to convert them. Original assets may contain broadcast closed captions. You can also create closed captions using tools, some of which can convert Flash closed captions and subtitles for you. Regardless of how you get them, most web use cases require closed captions in the [WebVTT](/en-US/docs/Web/API/WebVTT_API) format.

Captioning tools:

- [Telestream CaptionMaker](https://www.telestream.net/captioning/overview.htm)
- [Telestream MacCaption](https://www.telestream.net/captioning/overview.htm)

## Playing them back on the web

If you're not using a custom player capable of playing other caption subtitle formats, then you will be using WebVTT. There are two methods for using these files on the web.

- Muxing
  - : Use your video editing tool to incorporate the caption as an additional stream in your video containers. Although this method ensures that the captions will always be available to the viewer this will make your video files larger, and less flexible than using `<track>` (see below).
- The \<track> element
  - : The {{htmlelement("track")}} element can be included as a child of the video element, which will load your WebVTT file separately and allow you to display it when needed, alter the positioning and styling of each track, etc.

## See also

- [Web Video Text Tracks Format (WebVTT)](/en-US/docs/Web/API/WebVTT_API)
- [Adding captions and subtitles to HTML5 video](/en-US/docs/Web/Guide/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video)
- [Understanding captions & subtitles](https://web.archive.org/web/20160117160743/https://screenfont.ca/learn/)
