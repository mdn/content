---
title: KeyframeEffect.iterationComposite
slug: Web/API/KeyframeEffect/iterationComposite
page-type: web-api-instance-property
browser-compat: api.KeyframeEffect.iterationComposite
---

{{ APIRef("Web Animations API") }}

The **`iterationComposite`** property of a {{domxref("KeyframeEffect")}} resolves how the animation's property value changes accumulate or override each other upon each of the animation's iterations.

## Value

One of the following:

- `replace`
  - : The `keyframeEffect` value produced is independent of the current iteration.
- `accumulate`
  - : Subsequent iterations of the `keyframeEffect` build on the final value of the previous iteration.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Animations API](/en-US/docs/Web/API/Web_Animations_API)
- Property of both {{domxref("KeyframeEffect")}} objects.
