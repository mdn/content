---
title: HTMLMediaElement.autoplay
slug: Web/API/HTMLMediaElement/autoplay
page-type: web-api-instance-property
tags:
  - API
  - Audio
  - HTML DOM
  - HTMLMediaElement
  - Media
  - NeedsExample
  - Property
  - Video
  - Web
  - autoplay
browser-compat: api.HTMLMediaElement.autoplay
---
{{APIRef("HTML DOM")}}

The **`HTMLMediaElement.autoplay`**
property reflects the {{htmlattrxref("autoplay", "video")}} HTML attribute, indicating
whether playback should automatically begin as soon as enough media is available to do
so without interruption.

A media element whose source is a {{domxref("MediaStream")}} and whose
`autoplay` property is `true` will begin playback when it becomes
active (that is, when {{domxref("MediaStream.active")}} becomes `true`).

> **Note:** Sites which automatically play audio (or videos with an audio
> track) can be an unpleasant experience for users, so it should be avoided when
> possible. If you must offer autoplay functionality, you should make it opt-in
> (requiring a user to specifically enable it). However, autoplay can be useful when
> creating media elements whose source will be set at a later time, under user control.

For a much more in-depth look at autoplay, autoplay blocking, and how to respond when
autoplay is blocked by the user's browser, see our article [Autoplay guide for media and Web Audio APIs](/en-US/docs/Web/Media/Autoplay_guide).

## Value

A boolean value which is `true` if the media element will
begin playback as soon as enough content has loaded to allow it to do so without
interruption.

> **Note:** Some browsers offer users the ability to override
> `autoplay` in order to prevent disruptive audio or video from playing
> without permission or in the background. Do not rely on `autoplay` actually
> starting playback and instead use {{domxref("HTMLMediaElement.play_event", 'play')}}
> event.

## Examples

```html
<video id="video" controls>
  <source src="https://player.vimeo.com/external/250688977.sd.mp4?s=d14b1f1a971dde13c79d6e436b88a6a928dfe26b&profile_id=165">
</video>
```

```js
// Disable autoplay (recommended)
// false is the default value
document.querySelector('#video').autoplay = false;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The interface defining it, {{domxref("HTMLMediaElement")}}.
- The {{HTMLElement("audio")}} and {{HTMLElement("video")}} elements
