---
title: CSSKeyframeRule.keyText
slug: Web/API/CSSKeyframeRule/keyText
tags:
  - API
  - CSSOM
  - CSSKeyframeRule
  - CSS Animations
  - Property
  - Reference
browser-compat: api.CSSKeyframeRule.keyText
---
{{APIRef("CSSOM") }}

The **`keyText`** property of the {{domxref("CSSKeyframeRule")}} interface represents the keyframe selector as a comma-separated list of percentage values. The from and to keywords map to 0% and 100%, respectively.

## Syntax

```js
var text = CSSKeyframeRule.keyText;
CSSKeyframeRule.keyText = text;
```

### Value

A {{domxref('CSSOMString')}}.

### Exceptions

- {{jsxref("SyntaxError")}}
  - : Thrown if `keyText` is updated with an invalid keyframe selector, in which case `keyText` remains untouched.

## Example

The CSS includes a keyframes at-rule. This will be the first {{domxref("CSSRule")}} returned by `document.styleSheets[0].cssRules`.
`myRules[0]` returns a {{domxref("CSSKeyframesRule")}} object, which will contain individual {{domxref("CSSKeyFrame")}} objects for each keyframe.

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
console.log(keyframes[0].keyText); // a string containing 0%
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
