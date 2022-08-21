---
title: Element.getAnimations()
slug: Web/API/Element/getAnimations
page-type: web-api-instance-method
tags:
  - API
  - Animatable
  - CSS
  - CSS Animations
  - CSS Transitions
  - Element
  - Method
  - Reference
  - Transitions
  - Web Animations
  - getAnimations
  - waapi
  - web animations api
browser-compat: api.Element.getAnimations
---
{{APIRef("Web Animations")}}

The `getAnimations()` method of the {{domxref("Element")}} interface
(specified on the `Animatable` mixin) returns an array of all
{{domxref("Animation")}} objects affecting this element or which are scheduled to do so
in future. It can optionally return {{domxref("Animation")}} objects for descendant
elements too.

> **Note:** This array includes [CSS Animations](/en-US/docs/Web/CSS/CSS_Animations), [CSS Transitions](/en-US/docs/Web/CSS/CSS_Transitions), and [Web Animations](/en-US/docs/Web/API/Web_Animations_API).

## Syntax

```js
getAnimations()
getAnimations(options)
```

### Parameters

- `options` {{optional_inline}}

  - : An options object containing the following property:

    - `subtree`
      - : A boolean value which, if `true`, causes animations that target
        descendants of _Element_ to be returned as well. This includes animations
        that target any CSS [pseudo-elements](/en-US/docs/Web/CSS/Pseudo-elements) attached to
        _Element_ or one of its descendants. Defaults to `false`.

### Return value

An {{jsxref("Array")}} of {{domxref("Animation")}} objects, each representing an
animation currently targeting the {{domxref("Element")}} on which this method is called,
or one of its descendant elements if `{ subtree: true }` is specified.

## Examples

The following code snippet will wait for all animations on `elem` and its
descendants to finish before removing the element from the document.

```js
Promise.all(
  elem.getAnimations({ subtree: true })
    .map((animation) => animation.finished)
).then(() => elem.remove());
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Animations API](/en-US/docs/Web/API/Web_Animations_API)
- [CSS Animations](/en-US/docs/Web/CSS/CSS_Animations)
- [CSS Transitions](/en-US/docs/Web/CSS/CSS_Transitions)
- {{domxref("Document.getAnimations()")}} - Fetch all animations in the document
- {{domxref("Animation")}}
