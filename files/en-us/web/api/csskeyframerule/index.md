---
title: CSSKeyframeRule
slug: Web/API/CSSKeyframeRule
page-type: web-api-interface
tags:
  - API
  - CSS Animations
  - CSSOM
  - Interface
  - Reference
browser-compat: api.CSSKeyframeRule
---
{{APIRef("CSSOM")}}

The **`CSSKeyframeRule`** interface describes an object representing a set of styles for a given keyframe. It corresponds to the contents of a single keyframe of a {{cssxref("@keyframes")}} [at-rule](/en-US/docs/Web/CSS/At-rule).

{{InheritanceDiagram}}

## Properties

_Inherits properties from its ancestor {{domxref("CSSRule")}}._

- {{domxref("CSSKeyframeRule.keyText")}}
  - : Represents the key of the keyframe, like `'10%'`, `'75%'`. The `from` keyword maps to `'0%'` and the `to` keyword maps to `'100%'`.
- {{domxref("CSSKeyframeRule.style")}} {{ReadOnlyInline}}
  - : Returns a {{domxref("CSSStyleDeclaration")}} of the CSS style associated with the keyframe.

## Methods

_No specific methods; inherits methods from its ancestor {{domxref("CSSRule")}}._

## Examples

The CSS includes a keyframes at-rule. This will be the first {{domxref("CSSRule")}} returned by `document.styleSheets[0].cssRules`.
`myRules[0]` returns a {{domxref("CSSKeyframesRule")}} object, which will contain individual `CSSKeyFrame` objects for each keyframe.

```css
@keyframes slidein {
  from {
    transform: translateX(0%);
  }

  to {
    transform: translateX(100%);
  }
}
```

```js
let myRules = document.styleSheets[0].cssRules;
let keyframes = myRules[0]; // a CSSKeyframesRule
console.log(keyframes[0]); // a CSSKeyframeRule representing an individual keyframe.
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("@keyframes")}}
- {{domxref("CSSKeyFramesRule")}}
