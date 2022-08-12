---
title: HTMLMediaElement.msRealTime
slug: Web/API/HTMLMediaElement/msRealTime
page-type: web-api-instance-property
tags:
  - msRealTime
  - Non-standard
  - Property
---
{{APIRef("HTML DOM")}}

{{Non-standard_header()}}

The **`msRealTime`** property specifies
whether or not to enable low-latency playback on the media element.

This proprietary property is specific to Internet Explorer and Microsoft Edge.

## Value

The property contains a boolean value which indicates that low-latency playback will be enabled
on the media element (when set to `true`). Low-latency playback is useful in communication and some gaming
scenarios, but is more demanding on power consumption and less reliable for smooth media
playback.

You must set the `msRealTime` before setting the {{domxref("HTMLMediaElement.src", "src")}} property.

`msRealTime` should not be used in non-real-time or non-communication
scenarios, such as audio and/or video playback, as this can affects playback startup
latency of audio and video playback.
