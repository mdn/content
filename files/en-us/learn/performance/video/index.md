---
title: 'Multimedia: video'
slug: Learn/Performance/video
tags:
  - Images
  - Media
  - Performance
  - Video
  - Web Performance
---
{{LearnSidebar}}{{PreviousMenuNext("Learn/Performance/Multimedia", "Learn/Performance/javascript_performance", "Learn/Performance")}}

As we learned in the previous section, media, namely images and video, account for over 70% of the bytes downloaded for the average website. We have already taken a look at optimizing images. This article looks at optimizing video to improve web performance.

<table>
  <tbody>
    <tr>
      <th scope="row">Prerequisites:</th>
      <td>
        Basic computer literacy,
        <a
          href="/en-US/docs/Learn/Getting_started_with_the_web/Installing_basic_software"
          >basic software installed</a
        >, and basic knowledge of
        <a href="/en-US/docs/Learn/Getting_started_with_the_web"
          >client-side web technologies</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Objective:</th>
      <td>
        To learn about the various video formats, their impact on performance,
        and how to reduce video impact on overall page load time while serving
        the smallest video file size based on each browsers file type support.
      </td>
    </tr>
  </tbody>
</table>

## Why optimize your multimedia?

For the average website, [25% of bandwidth comes from video](https://discuss.httparchive.org/t/state-of-the-web-top-image-optimization-strategies/1367). Optimizing video has the potential for very large bandwidth savings that translate into better website performance.

## Optimizing video delivery

It's best to[ compress all video](#compress), [optimize `<source>` order](#omptimize), set [autoplay](/en-US/docs/Learn/Performance/Multimedia#video_autoplay), [remove audio from muted video](#muted), [optimize video preload](/en-US/docs/Learn/Performance/Multimedia#video_preload), and [consider streaming](/en-US/docs/Learn/Performance/Multimedia#consider_streaming) the video. The sections below describe each of these optimization techniques.

### Compress all videos

Most video compression work compares adjacent frames within a video, with the intent of removing detail that is identical in both frames. Compress the video and export to multiple video formats, including WebM, MPEG-4/H.264, and Ogg/Theora.

Your video editing software probably has a feature to reduce file size. If not, there are online tools, such as [FFmpeg](https://www.ffmpeg.org/) (discussed in section below), that encode, decode, convert, and perform other optimization functions.

### Optimize `<source>` order

Order video source from smallest to largest.  For example, given video compressions in three different formats at 10MB, 12MB, and 13MB, declare the smallest first and the largest last:

    <video width="400" height="300" controls="controls">
      <!-- WebM: 10 MB -->
      <source src="video.webm" type="video/webm" />
      <!-- MPEG-4/H.264: 12 MB -->
      <source src="video.mp4" type="video/mp4" />
      <!-- Ogg/Theora: 13 MB -->
      <source src="video.ogv" type="video/ogv" />
    </video>

The browser downloads the first format it understands. The goal is to offer smaller versions ahead of larger versions. With the smallest version, make sure that the most compressed video still looks good. There are some compression algorithms that can make video look (bad) like an animated GIF. While a 128 Kb video may seem like it could provide a better user experience than a 10 MB download, a grainy GIF-like video may reflect poorly on the brand or project.

See [CanIUse.com](https://caniuse.com/#search=video) for current browser support of video and other media types.

### Video autoplay

To ensure that a looping background video autoplays, you must add several attributes to the video tag: `autoplay`, `muted`, and `playsinline.`

    <video autoplay="" loop="" muted="true" playsinline="" src="backgroundvideo.mp4">

While the `loop` and `autoplay` make sense for a looping and autoplaying video, the `muted` attribute is required for autoplay in mobile browsers.

`Playsinline` is required for mobile Safari, allowing videos to play without forcing fullscreen mode.

### Remove audio from muted hero videos

For hero-video or other video without audio, removing audio is smart.

    <video autoplay="" loop="" muted="true" playsinline="" id="hero-video">
      <source src="banner_video.webm"
              type='video/webm; codecs="vp8, vorbis"'>
      <source src="web_banner.mp4" type="video/mp4">
    </video>

This hero-video code (above) is common to conference websites and corporate home pages. It includes a video that is auto-playing, looping, and muted. There are no controls, so there is no way to hear audio. The audio is often empty, but still present, and still using bandwidth. There is no reason to serve audio with video that is always muted. **Removing audio can save 20% of the bandwidth.**

Depending on your choice of software, you might be able to remove audio during export and compression. If not, a free utility called [FFmpeg](https://www.ffmpeg.org/) can do it for you. This is the FFmpeg command string to remove audio:

    ffmpeg -i original.mp4 -an -c:v copy audioFreeVersion.mp4

### Video preload

The preload attribute has three available options: `auto`|`metadata`|`none`. The default setting is `metadata`. These settings control how much of a video file downloads with page load. You can save data by deferring download for less popular videos.

Setting `preload="none"` results in none of the video being downloaded until playback. It delays startup, but offers significant data savings for videos with a low probability of playback.

Offering more modest bandwidth savings, setting `preload="metadata"` may download up to 3% of the video on page load. This is a useful option for some small or moderately sized files.

Changing the setting to `auto` tells the browser to automatically download the entire video. Do this only when playback is very likely. Otherwise, it wastes a lot of bandwidth.



### Consider streaming

[Video streaming allows the proper video size and bandwidth](https://www.smashingmagazine.com/2018/10/video-playback-on-the-web-part-2/) (based on network speed) to be delivered to the end user.  Similar to responsive images, the correct size video is delivered to the browser, ensuring fast video startup, low buffering, and optimized playback.

## Conclusion

Optimizing video has the potential to significantly improve website performance. Video files are relatively large compared to other website files, and always worthy of attention. This article explains how to optimize website video through reducing file size, with (HTML) download settings, and with streaming.

{{PreviousMenuNext("Learn/Performance/Multimedia", "Learn/Performance/javascript_performance", "Learn/Performance")}}

## In this module

- [The "why" of web performance](/en-US/docs/Learn/Performance/why_web_performance)
- [What is web performance?](/en-US/docs/Learn/Performance/What_is_web_performance)
- [How do users perceive performance?](/en-US/docs/Learn/Performance/Perceived_performance)
- [Measuring performance](/en-US/docs/Learn/Performance/Measuring_performance)
- [Multimedia: images](/en-US/docs/Learn/Performance/Multimedia)
- [Multimedia: video](/en-US/docs/Learn/Performance/video)
- [JavaScript performance best practices](/en-US/docs/Learn/Performance/JavaScript).
- [HTML performance features](/en-US/docs/Learn/Performance/HTML)
- [CSS performance features](/en-US/docs/Learn/Performance/CSS)
- [Fonts and performance](/en-US/docs/Learn/Performance/Fonts)
- [Mobile performance](/en-US/docs/Learn/Performance/Mobile)
- [Focusing on performance](/en-US/docs/Learn/Performance/business_case_for_performance)
