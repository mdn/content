---
title: "AnimationEffect: updateTiming() method"
short-title: updateTiming()
slug: Web/API/AnimationEffect/updateTiming
page-type: web-api-instance-method
browser-compat: api.AnimationEffect.updateTiming
---

{{ APIRef("Web Animations") }}

The `updateTiming()` method of the {{domxref("AnimationEffect")}} interface updates the specified timing properties for an animation effect.

## Syntax

```js-nolint
updateTiming(timing)
```

### Parameters

- `timing` {{optional_inline}}
  - : An object containing zero or more of the properties from the return value of {{domxref("AnimationEffect.getTiming()")}}, representing the timing properties to update.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if invalid values are provided for any of the timing properties.

### Examples

#### Side effects

`updateTiming()` may cause any associated {{domxref("Animation")}} to start or stop playing, if for example the effect of a running animation is shortened such that its end time is before {{domxref("Animation.currentTime")}} or the effect of a finished animation is lengthened such that its end time is after {{domxref("Animation.currentTime")}}.

```js
const animation = document.body.animate([], { duration: 1000 });
animation.finish();
console.log(animation.playState); // finished
animation.effect.updateTiming({ duration: 2000 });
console.log(animation.playState); // running
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Animations API](/en-US/docs/Web/API/Web_Animations_API)
- {{domxref("AnimationEffect")}}
- {{domxref("Animation")}}
- {{domxref("AnimationEffect.getTiming()")}}
- {{domxref("AnimationEffect.getComputedTiming()")}}
