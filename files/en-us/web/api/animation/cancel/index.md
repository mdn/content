---
title: Animation.cancel()
slug: Web/API/Animation/cancel
tags:
  - API
  - Animation
  - Method
  - Reference
  - Web Animations
  - cancel
  - waapi
  - web animations api
browser-compat: api.Animation.cancel
---
{{ SeeCompatTable() }}{{ APIRef("Web Animations") }}

The Web Animations API's **`cancel()`** method of the {{domxref("Animation")}} interface clears all {{domxref("KeyframeEffect")}}s caused by this animation and aborts its playback.

> **Note:** When an animation is cancelled, its {{domxref("Animation.startTime", "startTime")}} and {{domxref("Animation.currentTime", "currentTime")}} are set to `null`.

## Syntax

```js
Animation.cancel();
```

### Parameters

None.

### Return value

None.

### Exceptions

This method doesn't directly throw exceptions; however, if the animation's {{domxref("Animation.playState", "playState")}} is anything but `"idle"` when cancelled, the {{domxref("Animation.finished", "current finished promise", "", 1)}} is rejected with a {{domxref("DOMException")}} named `AbortError`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Animations API](/en-US/docs/Web/API/Web_Animations_API)
- {{domxref("KeyframeEffect")}}
- {{domxref("Animation")}}
- {{domxref("Animation.playState")}}
- {{domxref("Animation.finished")}} returns the promise this action will reject if the animation's `playState` is not `"idle"`.
