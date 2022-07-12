---
title: HTMLVideoElement.msIsBoxed
slug: Web/API/HTMLVideoElement/msIsBoxed
page-type: web-api-instance-property
tags:
  - msIsBoxed
---
{{APIRef("HTML DOM")}}

{{Non-standard_header()}}

**`msIsBoxed`** is a property which gets or sets
when the video player control is in boxed (either letterbox, or pillarbox) mode.

This proprietary property is specific to Internet Explorer and Microsoft Edge.

Returns true if the video is in letterbox or pillarbox mode. Letterbox format displays
black bars on the top and bottom of a video to fill in between the wide screen format of
a video, and the aspect ratio of the screen. Typically the video's left and right edges
go to the full width of the screen. Pillarbox format displays black bars on the left and
right of a video to fill in the difference between a video and a wider screen. With
pillarbox format, the top and bottom edges of the video go to the full height of the
screen.

## Value

A boolean value that is `true` when the boxed mode for the video player is activated,
and set to `false` means the video player is zoomed to fill the screen.
