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
- `endDelay`
  - : A `number`.
- `fill`
  - : `"none"`, `"forwards"`, `"backwards"`, "`both`", or `"auto"`.
- `iterationStart`
  - : A `number`.
- `iterations`
  - : A `number`.
- `duration`
  - : A `number` or the `string` `"auto"`.
- `direction`
  - : `"normal"`, `"reverse"`, `"alternate"`, or `"alternate-reverse"`.
- `easing`
  - : A `string` representing an {{cssxref("easing-function")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Animations API](/en-US/docs/Web/API/Web_Animations_API)
- {{domxref("AnimationEffect")}}
