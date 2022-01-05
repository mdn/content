---
title: msRealTime
slug: Web/API/MsRealTime
tags:
  - msRealTime
---
{{APIRef("DOM")}}

{{Non-standard_header()}}

**`msRealTime`** is a read/write property which specifies
whether or not to enable low-latency playback on the media element.

This proprietary property is specific to Internet Explorer and Microsoft Edge.

## Syntax

```js
ptr = object.msRealTime;
```

## Value

Boolean value set to _true_ indicates that low-latency playback will be enabled
on the media element. Low-latency playback is useful in communication and some gaming
scenarios, but is more demanding on power consumption and less reliable for smooth media
playback.

You must set the `msRealTime` before setting the `src` property
in code.

`msRealTime` should not be used in non-real-time or non-communication
scenarios, such as audio and/or video playback, as this can affects playback startup
latency of audio and video playback.
