---
title: HTMLVideoElement.msHorizontalMirror
slug: Web/API/HTMLVideoElement/msHorizontalMirror
tags:
  - API
  - API:Microsoft Extensions
  - Non-standard
  - Property
  - Reference
  - msHorizontalMirror
---
{{APIRef("DOM")}}{{Non-standard_Header}}

**`msHorizontalMirror`** is a read/write property which gets or
sets whether a [video](/en-US/docs/Web/HTML/Element/video) element is flipped
horizontally in the display.

This proprietary property is specific to Internet Explorer and Microsoft Edge.

## Syntax

```js
HTMLVideoElement.msHorizontalMirror: {{JSxRef("Boolean", "boolean")}};
```

## Value

Boolean value set to _true_ flips the video playback horizontally.

Video perspective is flipped on a horizontal axis - this may be useful for playback of
a webcam video, providing the user with better mirroring of their real behaviors (ie.
when user moves left, their representation on-screen would move left as well).

## Example

```js
       var myVideo = document.getElementById("videoTag1");
       myVideo.msHorizontalMirror = true;
       myVideo.play();
```

Example #2:

```js
    var flip = document.querySelector('#flip');
    flip.addEventListener('click', function() {
      video.msHorizontalMirror = true;
    });
```

## See also

- {{DOMxRef("HTMLVideoElement")}}
- [Microsoft API extensions](/en-US/docs/Web/API/Microsoft_API_extensions)
