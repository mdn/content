---
title: ShadowRoot.getAnimations()
slug: Web/API/ShadowRoot/getAnimations
page-type: web-api-instance-method
tags:
  - API
  - Animation
  - CSS
  - CSS Animations
  - CSS Transitions
  - ShadowRoot
  - Method
  - Reference
  - Transitions
  - Web Animations
  - getAnimations
  - waapi
  - web animations api
browser-compat: api.ShadowRoot.getAnimations
---
{{APIRef("Web Animations")}}

The **`getAnimations()`** method of the {{domxref("ShadowRoot")}} interface
returns an array of all {{domxref("Animation")}} objects currently in effect whose
target elements are descendants of the shadow tree. This array includes [CSS Animations](/en-US/docs/Web/CSS/CSS_Animations), [CSS Transitions](/en-US/docs/Web/CSS/CSS_Transitions), and [Web Animations](/en-US/docs/Web/API/Web_Animations_API).

## Syntax

```js
getAnimations()
```

### Parameters

None.

### Return value

An {{jsxref("Array")}} of {{domxref("Animation")}} objects, each representing one
animation currently associated with elements which are descendants of the
{{domxref("ShadowRoot")}} on which it's called.

## Examples

The following code snippet will slow down all animations in a shadow tree by halving their
{{domxref("Animation.playbackRate")}}.

```js
let customElem = document.querySelector('my-shadow-dom-element');
let shadow = customElem.shadowRoot;
shadow.getAnimations().forEach((animation) => {
  animation.playbackRate *= 0.5;
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Animations API](/en-US/docs/Web/API/Web_Animations_API)
- [CSS Animations](/en-US/docs/Web/CSS/CSS_Animations)
- [CSS Transitions](/en-US/docs/Web/CSS/CSS_Transitions)
- {{domxref("Element.getAnimations()")}} - Fetch only the animations on a single
  {{domxref("Element")}} and its descendants.
- {{domxref("Animation")}}
