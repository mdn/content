---
title: Timing in IMSC
slug: Related/IMSC/Timing_in_IMSC
tags:
  - Guide
  - IMSC
  - Timing
  - captions
  - subtitles
---

When building an IMSC document, each defined piece of text must include timing information to specify when it should appear. There are multiple ways to describe when a subtitle should start and stop displaying, with pros and cons to each method. This article explains those different methods.

If you have not already read the [IMSC document with timing](/en-US/docs/Related/IMSC/Basics#timing) section in the [IMSC basics](/en-US/docs/Related/IMSC/Basics) article, you should do so now and then return here — it contains an initial overview of how to describe timing events.

## Different ways to describe timing

There are three primary ways of describing the time expression values within an IMSC document.

- [Seconds.fraction](#seconds.fraction): Specifying simple second values. This is the simplest approach to take; we've already seen this used earlier in the article series.
- [HH:MM:SS.fraction](#hhmmss.fraction): Specifying more complex times in the format `HH:MM:SS`. This is similar to only using Seconds, and is one of the most common time expressions in IMSC files.
- [Frames](#frames): Specifying start and end times in terms of numbers of frames rather than seconds. This is the other most common time expression used in IMSC files. The advantage to this approach is that the frame number directly corresponds to the frame number in the video file.

### Seconds.fraction

```xml
<p begin="1s" end="2s">Hello, I am Mork from Ork</p>
```

This method for describing the `begin` and `end` values in the IMSC document is very simple — you just include a number with "s" (seconds) appended. It does not require the user to declare the frame rate of the corresponding media. These values must be mapped to the video frame that the text is synchronized with. Fractional values will always round up to the nearest video frame.

### HH:MM:SS.fraction

```xml
<p begin="00:00:01.00" end="00:00:02.00">Hello, I am Mork from Ork</p>
```

This method for describing the begin and end values in the IMSC document is essentially the same as using seconds, except for the fact that you are expressing those values as hours, minutes, and seconds. This allows you to easily set longer, more precise times.

### Frames

```xml
<tt xmlns="http://www.w3.org/ns/ttml"
  xml:lang="en"
  ttp:frameRate="24"
  ttp:frameRateMultiplier="1000 1001">
  <body>
    <div>
      <p begin="24f" end="48f">Hello, I am Mork from Ork</p>
    </div>
  </body>
</tt>
```

This method requires that the `frameRate` and `frameRateMultiplier` attributes are declared in the root element of the IMSC document. The frame rate describes how many frames are in one second of the video. The multiplier is applied to the `frameRate` to declare how that one second of video is compared with one realtime second.

Let's explain this in little bit more detail.

The `frameRateMultiplier` stems from the problems associated with non-integer frame rates such as 23.98fps (as opposed to an integer frame rate such as 24fps). 24fps means that every second of video has 24 frames in it, and that second is the same as a realtime second. 23.98fps means that every second of video has 24 frames in it, and that second is slightly longer than a realtime second. The `frameRateMultiplier` defines the duration of each frame when compared to realtime.

Imagine that you had a stopwatch and timed yourself watching a movie. If that movie was playing back at a speed of 24fps, once your media player says you have watched exactly 1 hour of it, your stopwatch would say 01:00:00.00. Now if that movie was playing back at a speed of 23.98fps, once your media player says you have watched exactly 1 hour of it, your stopwatch would now say 01:00:03.6 (1 hour × (24/23.98)).

Make sense?

To describe a frame rate of 23.976fps, the following `frameRate` and `frameRateMultiplier` values would be used:

```xml
<tt xmlns="http://www.w3.org/ns/ttml"
  xml:lang="en"
  ttp:frameRate="24"
  ttp:frameRateMultiplier="1000 1001">
```

This is actually saying that each second of 24 frames should play back at a speed of (24 \* (1000/1001)), or 23.98fps.

Now that a frame rate of 23.98 is declared, you are able to describe time expressions in frames, or f.

```xml
<p begin="24f" end="48f">Hello, I am Mork from Ork</p>
```

The advantage of using this method is that the time expression frame number is the same as the frame number of the media asset. A value of 86400f is frame number 86400 in the video file.

> **Note:** You can find an additional explanation of these values in [Mapping video time codes to IMSC](/en-US/docs/Related/IMSC/Mapping_video_time_codes_to_IMSC).

<section id="Quick_links">
  <ol>
    <li><a href="/en-US/docs/Related/IMSC/"><strong>IMSC</strong></a></li>
    <li class="toggle">
      <details open>
        <summary>IMSC guides</summary>
        <ol>
          <li><a href="/en-US/docs/Related/IMSC/Basics">IMSC basics</a></li>
          <li><a href="/en-US/docs/Related/IMSC/Using_the_imscJS_polyfill">Using the imscJS polyfill</a></li>
          <li><a href="/en-US/docs/Related/IMSC/Styling">Styling IMSC documents</a></li>
          <li><a href="/en-US/docs/Related/IMSC/Subtitle_placement">Subtitle placement in IMSC</a></li>
          <li><a href="/en-US/docs/Related/IMSC/Namespaces">Namespaces in IMSC</a></li>
          <li><a href="/en-US/docs/Related/IMSC/Timing_in_IMSC">Timing in IMSC</a></li>
          <li><a href="/en-US/docs/Related/IMSC/Mapping_video_time_codes_to_IMSC">Mapping video time codes to IMSC</a>
          </li>
          <li><a href="/en-US/docs/Related/IMSC/IMSC_and_other_standards">IMSC and other standards</a></li>
        </ol>
      </details>
    </li>
  </ol>
</section>
