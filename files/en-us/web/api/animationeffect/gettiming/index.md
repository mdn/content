---
title: AnimationEffect.getTiming()
slug: Web/API/AnimationEffect/getTiming
page-type: web-api-instance-method
tags:
  - API
  - Animation
  - Method
  - Reference
  - Timing
  - waapi
  - web animations api
browser-compat: api.AnimationEffect.getTiming
---

{{ APIRef("Web Animations API") }}

The `AnimationEffect.getTiming()` method of the {{domxref("AnimationEffect")}} interface returns an object containing the timing properties for the Animation Effect.

## Syntax

```js-nolint
getTiming()
```

### Parameters

None.

### Return value

An object containing the following properties:

- `delay`
  - : A `number`.
    (Corresponds to {{cssxref("animation-delay")}}.)
- `endDelay`
  - : A `number`.
- `fill`
  - : `"none"`, `"forwards"`, `"backwards"`, "`both`", or `"auto"`.
    (Corresponds to {{cssxref("animation-fill-mode")}}.)
- `iterationStart`
  - : A `number`.
- `iterations`
  - : A `number`.
    (Corresponds to {{cssxref("animation-iteration-count")}}.)
- `duration`
  - : A `number` or the `string` `"auto"`.
    (Corresponds to {{cssxref("animation-duration")}}.)
- `direction`
  - : `"normal"`, `"reverse"`, `"alternate"`, or `"alternate-reverse"`.
    (Corresponds to {{cssxref("animation-direction")}}.)
- `easing`
  - : A `string` representing an {{cssxref("easing-function")}}.
    (Corresponds to {{cssxref("animation-timing-function")}}.)

Several of these properties have corresponding [CSS Animations](/en-US/docs/Web/CSS/CSS_Animations) properties.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Animations API](/en-US/docs/Web/API/Web_Animations_API)
- {{domxref("AnimationEffect")}}
