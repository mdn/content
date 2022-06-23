---
title: KeyframeEffect.getKeyframes()
slug: Web/API/KeyframeEffect/getKeyframes
page-type: web-api-instance-method
tags:
  - API
  - Animation
  - KeyframeEffect
  - Method
  - Reference
  - getKeyframes
  - waapi
  - web animations api
browser-compat: api.KeyframeEffect.getKeyframes
---
{{ APIRef("Web Animations API") }}

The **`getKeyframes()`** method of a {{domxref("KeyframeEffect")}} returns an Array of the computed keyframes that make up this animation along with their computed offsets.

## Syntax

```js
getKeyframes()
```

### Parameters

None.

### Return value

Returns a sequence of objects with the following format:

- `property value pairs`
  - : As many property value pairs as are contained in each keyframe of the animation.
- `offset`
  - : The offset of the keyframe specified as a number between `0.0` and `1.0` inclusive or `null`. This is equivalent to specifying start and end states in percentages in CSS stylesheets using `@keyframes`. This will be `null` if the keyframe is automatically spaced using {{domxref("KeyframeEffect.spacing")}}.
- `computedOffset`
  - : The computed offset for this keyframe, calculated when the list of computed keyframes was produced according to {{domxref("KeyframeEffect.spacing")}}. Unlike **`offset`,** above, the **`computedOffset`** is never `null`.
- `easing`
  - : The [easing function](/en-US/docs/Web/CSS/easing-function) used from this keyframe until the next keyframe in the series.
- `composite`
  - : The {{domxref("KeyframeEffect.composite")}} operation used to combine the values specified in this keyframe with the underlying value. This will be absent if the composite operation specified on the effect is being used.

## Examples

In the [Red Queen Race](https://codepen.io/rachelnabors/pen/PNGGaV) example, we can inspect Alice and the RedQueen's animation to see its individual keyframes like so:

```js
// Return the array of keyframes

redQueen_alice.effect.getKeyframes();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Animations API](/en-US/docs/Web/API/Web_Animations_API)
- Method of {{domxref("KeyframeEffect")}} objects.
