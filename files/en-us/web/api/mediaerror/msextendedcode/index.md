---
title: MediaError.msExtendedCode
slug: Web/API/MediaError/msExtendedCode
---
{{APIRef("DOM")}}

{{Non-standard_header()}}

In the event of an error, the media element's error event will be fired. The element's error property will then contain an **`msExtendedCode`** read-only property with platform-specific error code information.

**`msExtendedCode`** is a read-only proprietary property specific to Internet Explorer and Microsoft Edge.

## Value

Type: **long**; The platform specific error code.

## Example

```js
var video1 = object.getElementById("video1");

video1.addEventListener('error', function () {
  var error = video1.error.msExtendedCode;
  //...
}, false);

video.addEventListener('canplay', function () {
  video1.play();
}, false);
```
