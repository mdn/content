---
title: "CSSKeyframesRule: length property"
short-title: length
slug: Web/API/CSSKeyframesRule/length
page-type: web-api-instance-property
browser-compat: api.CSSKeyframesRule.length
---

{{APIRef("CSSOM") }}

The read-only **`length`** property of the {{domxref("CSSKeyframeRule")}} interface returns the number of {{domxref("CSSKeyframeRule")}} objects in its list. You can then access each keyframe rule by its index directly on the `CSSKeyframeRule` object.

## Value

A non-negative integer. It should have the same value as the `length` of the {{domxref("CSSKeyframesRule.cssRules", "cssRules")}} property.

## Examples

The CSS includes a keyframes at-rule. This will be the first {{domxref("CSSRule")}} returned by `document.styleSheets[0].cssRules`.
`myRules[0]` returns a {{domxref("CSSKeyframesRule")}} object. The `cssRules` property returns a {{domxref("CSSRuleList")}} containing two rules.

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
const myRules = document.styleSheets[0].cssRules;
const keyframes = myRules[0]; // a CSSKeyframesRule
console.log(keyframes.length); // 2
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
