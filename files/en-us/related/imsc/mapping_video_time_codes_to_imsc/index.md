---
title: Mapping video time codes to IMSC
slug: Related/IMSC/Mapping_video_time_codes_to_IMSC
page-type: guide
---

Mapping the time or time code value that is seen within a video track or video editor timeline to an IMSC document can be a little tricky. There are a few different issues that you'll need to be aware of, which we'll cover in this article.

## Considering time code start times

For the sake of simplicity, we will be assuming that the time code tracks within our video assets start at 00:00:00:00. By default, values within an IMSC document start at 0 and auto increment from there.

If the time code in a video track does not begin at 00:00:00:00, you will have to take the first timestamp in the video track and perform a calculation on that value and all following values so that the initial value is 00:00:00:00. For example, if the first time code value in the video track is 00:59:50:00, then you will have to subtract 00:59:50:00 from all time code values in the video track in order to synchronize it to the IMSC document.

## Frame rates

Mapping an IMSC document to a video asset is quite straightforward when you are working with integer frame rates, such as 24fps, 25fps, and 30fps. The value in your timeline will be the same as the value in the IMSC document. When you are working with fractional frame rates (such as 23.976fps or 29.97fps) however, this gets a bit more complicated.

A frame rate actually describes both the number of frames per second, and the velocity of those frames:

- 25fps describes that there are 25 frames per second (0-24), and those frames play at the same speed as a real time clock.
- 24fps describes that there are 24 frames per second (0-23), and those frames play at the same speed as a real time clock.
- 23.976fps is where things get weird. Like 24fps, it describes that there are 24 frames per second (0-23). Unlike 24fps, however, those 24 frames play at a slightly slower speed than a real time clock. As the frame rate number (23.976fps) implies, in one real time second you almost see 24 frames. It actually takes 1.001 seconds for 24 frames playing back at 23.976fps to display.

In a single second this is not a big deal. As you extend to a few minutes, however, 24fps and 23.976fps will already be a few frames different from one other. As you extend to an hour, they will differ by 3.6s. Here's some math to illustrate this:

01:00:00:00 @ 24fps

3600 (seconds in 1 hour) \* 1.000 (velocity) = 3600 real time seconds

01:00:00:00 @ 23.976fps

3600 (seconds in 1 hour) \* 1.001 (velocity) = 3603.6 real time seconds

This is especially important to understand with IMSC files, since all of the timings in the document represent real time values. For example, if you want to describe an event that synchronizes with 23.976fps video that begins at 01:00:00:00 time code in the video, and ends 1 second later, it would look like this:

`<p begin="3603.6s" end="3604.6s">Hello, I am Mork from Ork</p>`

The important takeaway from this is that if you are synchronizing a video with a fractional frame rate to an IMSC document, the timings will not match. The timings in the IMSC document will slowly get further and further away from the video timings.

## Mitigating the issue

That said, there is actually a different approach to describing the time expression values in the IMSC file, which addresses this problem. As discussed in the [Timing in IMSC](/en-US/docs/Related/IMSC/Timing_in_IMSC) guide, using a time expression syntax of frames will give you a 1:1 correlation of the frame number in the IMSC file and the frame number in the media asset.

The two attributes that must be included to use the frames method are `frameRate` and `frameRateMultiplier`. The frame rate describes how many frames are in one second, and the multiplier is applied to the `frameRate` to describe the actual frame rate in real time seconds. To describe a frame rate of 23.976fps, the following values would be used:

```xml
<tt ttp:frameRate="24" ttp:frameRateMultiplier="1000 1001">
  …
</tt>
```

This is saying that there are 24 frames in a second, and those are playing back at a speed of 23.976 frames per real time second (24 \* (1000 / 1001)).

By describing this actual frame rate, you are now able to describe time expressions in frames, or f. This is the actual frame number that the event begins and ends. Here is the same example as above, where the event begins at 01:00:00:00, and ends one second later.

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
