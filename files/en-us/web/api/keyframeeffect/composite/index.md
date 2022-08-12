---
title: KeyframeEffect.composite
slug: Web/API/KeyframeEffect/composite
page-type: web-api-instance-property
tags:
  - API
  - Animation
  - KeyframeEffect
  - Property
  - Reference
  - composite
  - waapi
  - web animations api
browser-compat: api.KeyframeEffect.composite
---
{{ APIRef("Web Animations API") }}

The **`composite`** property of a {{domxref("KeyframeEffect")}} resolves how an element's animation impacts its underlying property values.

## Value

To understand these values, take the example of a `keyframeEffect` value of `blur(2)` working on an underlying property value of  `blur(3)`.

- `replace`
  - : The `keyframeEffect` **overrides** the underlying value it is combined with:  `blur(2)` replaces `blur(3)`.
- `add`
  - : The `keyframeEffect` is **added** to the underlying value with which it is combined (aka _additive_):  `blur(2) blur(3)`.
- `accumulate`
  - : The keyframeEffect is **accumulated** on to the underlying value:  `blur(5)`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Animations API](/en-US/docs/Web/API/Web_Animations_API)
- Property of {{domxref("KeyframeEffect")}} objects.
