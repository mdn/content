---
title: CSSKeyframesRule.appendRule()
slug: Web/API/CSSKeyframesRule/appendRule
page-type: web-api-instance-method
tags:
  - API
  - CSSOM
  - CSSKeyframesRule
  - CSS Animations
  - Method
  - Reference
browser-compat: api.CSSKeyframesRule.appendRule
---
{{APIRef("CSSOM") }}

The **`appendRule()`** method of the {{domxref("CSSKeyframeRule")}} interface appends a {{domxref("CSSKeyFrameRule")}} to the end of the rules.

## Syntax

```js
appendRule(rule)
```

### Parameters

- `rule`
  - : A string containing a keyframe rule.

### Return value

None ({{jsxref("undefined")}}).

## Examples

The CSS includes a keyframes at-rule. This will be the first {{domxref("CSSRule")}} returned by `document.styleSheets[0].cssRules`.
`myRules[0]` returns a {{domxref("CSSKeyframesRule")}} object. Returning the `cssRules` property would return a {{domxref("CSSRuleList")}} containing one rule.

After appending another rule with `appendRule` the `cssRules` property returns a {{domxref("CSSRuleList")}} containing two rules.

```css
@keyframes slidein {
  from {
    transform: translateX(0%);
  }
}
```

```js
let myRules = document.styleSheets[0].cssRules;
let keyframes = myRules[0]; // a CSSKeyframesRule
keyframes.appendRule('to {transform: translateX(100%);}');
console.log(keyframes.cssRules); // a CSSRuleList object with two rules
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
