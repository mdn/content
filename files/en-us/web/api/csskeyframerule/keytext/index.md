---
title: "CSSKeyframeRule: keyText property"
short-title: keyText
slug: Web/API/CSSKeyframeRule/keyText
page-type: web-api-instance-property
browser-compat: api.CSSKeyframeRule.keyText
---

{{APIRef("CSSOM") }}

The **`keyText`** property of the {{domxref("CSSKeyframeRule")}} interface represents the keyframe selector as a comma-separated list of percentage values. The from and to keywords map to 0% and 100%, respectively.

## Value

A string.

### Exceptions

- {{jsxref("SyntaxError")}}
  - : Thrown if `keyText` is updated with an invalid keyframe selector, in which case `keyText` remains untouched.

## Examples

The CSS includes a keyframes at-rule. This will be the first {{domxref("CSSRule")}} returned by `document.styleSheets[0].cssRules`.
`myRules[0]` returns a {{domxref("CSSKeyframesRule")}} object, which will contain individual {{domxref("CSSKeyFrameRule")}} objects for each keyframe.

```css
@keyframes slide-in {
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
