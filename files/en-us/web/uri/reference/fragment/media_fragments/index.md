---
title: Media fragments
slug: Web/URI/Reference/Fragment/Media_fragments
page-type: uri-component
spec-urls: https://www.w3.org/TR/media-frags/
sidebar: urlsidebar
---

**Media fragments** can be included on media file (for example, [video](/en-US/docs/Web/HTML/Reference/Elements/video) and [SVG](/en-US/docs/Web/SVG)) URLs to indicate that you want to show a subset of the media: A certain duration or a certain dimension.

## Concepts and usage

When displaying multiple chunks of media, it could be more convenient and efficient to include all the media inside a single file, and then show only the required part of the content in each case.

Media fragments allow you to do this via URL fragments. The specification defines two different types:

- **Temporal dimension fragments** allow you to play a portion of a video or animation from a specific start time to a specific end time, after which the media will pause.
- **Spatial dimension fragments** allow you to display a specific rectangular area of the media by specifying the dimensions of the box to display, and the coordinates of the box's top-left hand corner.

## Temporal dimension fragment syntax

```url
https://example.com/video.mp4#t=[npt:][timeStart][,timeEnd]
```

The key parts of the syntax are:

- `t=`
  - : The start of the temporal dimension syntax. This must always be included after the hash/pound symbol.
- `npt:` {{optional_inline}}
  - : The name identifier of the syntax format used. `npt` stands for **normal play time**, and is the default and only supported format, therefore this part can be omitted.
- `timeStart` {{optional_inline}}
  - : The start duration of the media portion.
- `timeEnd` {{optional_inline}}
  - : The end duration of the media portion.

The `timeStart` and `timeEnd` values can be specified in the following formats, which can be mixed within the same fragment:

- `seconds`
  - : A number representing a value in seconds. This a number of `0` or above, which can include a decimal portion to indicate a fraction of a second.
- `hh:mm:ss`
  - : Hour, minute, and second values, separated by colon characters. The hour value is an integer of `0` or above. The minute value is an integer between `0` and `59`. The second value is a number between `0` and `59`, which can include a decimal portion to indicate a fraction of a second.
- `mm:ss`
  - : Minute and second values, separated by a colon character. The minute value is an integer between `0` and `59`. The second value is a number between `0` and `59`, which can include a decimal portion to indicate a fraction of a second.

So for example, the following fragments would all play the media from the start to 5 seconds in:

```plain
#t=0,5
#t=,5
#t=0:00:00,5
#t=00:00,0:00:05
```

The following two fragments would both play the media from 2 seconds into the media until the end.

```plain
#t=2
#t=0:00:02
```

The following fragments would play the media from 2 seconds into the media until 3.5 seconds in.

```plain
#t=2,3.5
#t=0:00:02,3.5
#t=0:00:02,00:03.5
```

## Spatial dimension fragment syntax

```url
https://example.com/test.svg#xywh=[unit:]xCoord,yCoord,width,height
```

The key parts of the syntax are:

- `xywh=`
  - : The start of the spatial dimension syntax. This must always be included after the hash/pound symbol.
- `unit:` {{optional_inline}}
  - : The units to specify for the `xCoord`, `yCoord`, `width`, and `height`. Defaults to `pixel:` if omitted. Possible values are:
    - `percent:`
      - : Values signify an absolute number of pixels.
    - `pixel:`
      - : Values signify a percentage of the media's intrinsic width or height.
- `xCoord`
  - : The horizontal distance of the displayed box's top-left corner from the top-left corner of the media.
- `yCoord`
  - : The vertical distance of the displayed box's top-left corner from the top-left corner of the media.
- `width`
  - : The width of the displayed box.
- `height`
  - : The height of the displayed box.

So for example, the following fragments would both display a `320x240` pixel box whose top-left corner is `160px` from the left and `120px` from the top of the original media.

```plain
xywh=160,120,320,240
xywh=pixel:160,120,320,240
```

The following fragment would display a `50%x50%` box whose top-left corner is `25%` from the left and `25%` from the top of the original media.

```plain
xywh=percent:25,25,50,50
```

## Examples

### Playing limited-time excerpts from audio and video files

#### HTML

The following HTML snippet embeds a video and an audio snippet on the page and includes temporal fragments on the media URLs to limit the amount of media playback:

```html live-sample___limited-time
<video controls width="250">
  <source src="/shared-assets/videos/flower.mp4#t=2,4" type="video/mp4" />
</video>

<hr />

<audio controls src="/shared-assets/audio/t-rex-roar.mp3#t=,00:01"></audio>
```

#### Result

This renders like so:

{{embedlivesample("limited-time", "100%", 220)}}

Try playing the video and audio files using the provided players to see how the temporal fragments affect playback. The original video is 5 seconds long, but a snippet between seconds 2 and 4 is played. The original audio is 2 seconds long, but only the first second is played.

### Displaying a subset of an SVG image

#### HTML

In this example we embed an SVG image into the page using an {{htmlelement("img")}} element, and also include the same image as a CSS background on a {{htmlelement("div")}} element.

On the `<img>` element source, we include a spatial fragment, `#xywh=100,100,400,400`, which displays a 400x400 pixel portion of the image with its top-left corner at a coordinate of `(100,100)` from the original image's top-left corner. We set `width` and `height` to `200`, which causes the cut out image portion to be displayed at a size of 200x200 pixels.

```html live-sample___limited-dimension
<img
  src="/shared-assets/images/examples/firefox-logo.svg#xywh=100,100,400,400"
  width="200"
  height="200" />

<hr />

<div class="bgtest"></div>
```

#### CSS

We set a CSS {{cssxref("background-image")}} on our `<div>` element that points to the same SVG image. This time, the spatial fragment is `#xywh=100,100,100,100`, which makes the image portion 100x100 pixels with its top-left corner at a coordinate of `(100,100)` from the original image's top-left corner. We set the {{cssxref("background-size")}} property to `50px 50px`, so the portion is tiled across the `<div>` background at a size of 50x50 pixels.

```css live-sample___limited-dimension
.bgtest {
  width: 100%;
  height: 200px;
  background-image: url("/shared-assets/images/examples/firefox-logo.svg#xywh=100,100,100,100");
  background-size: 50px 50px;
}
```

#### Result

The above code renders like this:

{{embedlivesample("limited-dimension", "100%", 440)}}

## Specifications

{{Specifications}}

## Browser compatibility

Support for media fragments is limited to the following contexts:

- Temporal fragments work on video and audio file URLs (for example, as used in `<audio>` and `<video>` elements) in all modern browsers.
- Temporal fragments also work on [SVG image files](/en-US/docs/Web/SVG/Guides/SVG_as_an_image) featuring [SMIL animations](/en-US/docs/Web/SVG/Guides/SVG_animation_with_SMIL) in [Firefox 147](/en-US/docs/Mozilla/Firefox/Releases/147) and above.
- Spatial fragments work on SVG image files in Firefox 147 and above. Pixel values work as expected, but percent values seem to work unreliably and we'd recommend avoiding them.
