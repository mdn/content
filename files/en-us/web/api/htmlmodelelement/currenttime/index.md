---
title: "HTMLModelElement: currentTime property"
short-title: currentTime
slug: Web/API/HTMLModelElement/currentTime
page-type: web-api-instance-property
browser-compat: api.HTMLModelElement.currentTime
---

{{APIRef("HTML DOM")}}

The {{domxref("HTMLModelElement")}} interface's
**`currentTime`** property specifies the current model's playback time
in seconds.

Changing the value of `currentTime` seeks the model's animation to
the new time.

## Value

A double-precision floating-point value indicating the current playback time in
seconds.

If the model is not yet playing, the value of `currentTime` indicates the
time position within the media at which playback will begin once the
{{domxref("HTMLModelElement.play", "play()")}} method is called.

Setting `currentTime` to a new value seeks the model animation to the given time, if
the animation is available. The time is clamped to the duration of the model animation,
given as {{domxref("HTMLModelElement.duration", "duration")}}.

For models without an animation, the duration is set to 0, and any attempt to set
`currentTime` will revert to 0.

> [!NOTE]
> A model's `currentTime` and `duration` are unaffected
> by changes to its animation's `playbackRate`.

## Examples

```js
const video = document.createElement("video");
console.log(video.currentTime);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also
