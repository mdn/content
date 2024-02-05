---
title: "Document: getAnimations() method"
short-title: getAnimations()
slug: Web/API/Document/getAnimations
page-type: web-api-instance-method
browser-compat: api.Document.getAnimations
---

{{APIRef("Web Animations")}}

The `getAnimations()` method of the {{domxref("Document")}} interface
returns an array of all {{domxref("Animation")}} objects currently in effect whose
target elements are descendants of the document. This array includes [CSS Animations](/en-US/docs/Web/CSS/CSS_animations), [CSS Transitions](/en-US/docs/Web/CSS/CSS_transitions), and [Web Animations](/en-US/docs/Web/API/Web_Animations_API).

## Syntax

```js-nolint
getAnimations()
```

### Parameters

None.

### Return value

An {{jsxref("Array")}} of {{domxref("Animation")}} objects, each representing one
animation currently associated with elements which are descendants of the
{{domxref("Document")}} on which it's called.

## Examples

The following code snippet will slow down all animations on a page by halving their
{{domxref("Animation.playbackRate")}}.

```js
document.getAnimations().forEach((animation) => {
  animation.playbackRate *= 0.5;
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Animations API](/en-US/docs/Web/API/Web_Animations_API)
- [CSS Animations](/en-US/docs/Web/CSS/CSS_animations)
- [CSS Transitions](/en-US/docs/Web/CSS/CSS_transitions)
- {{domxref("Element.getAnimations()")}} - Fetch only the animations on a single
  {{domxref("Element")}} and its descendants.
- {{domxref("Animation")}}
