---
title: "CSSKeyframesRule: appendRule() method"
short-title: appendRule()
slug: Web/API/CSSKeyframesRule/appendRule
page-type: web-api-instance-method
browser-compat: api.CSSKeyframesRule.appendRule
---

{{APIRef("CSSOM") }}

The **`appendRule()`** method of the {{domxref("CSSKeyframeRule")}} interface appends a {{domxref("CSSKeyFrameRule")}} to the end of the rules.

## Syntax

```js-nolint
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
@keyframes slide-in {
  from {
    transform: translateX(0%);
  }
}
```

```js
let myRules = document.styleSheets[0].cssRules;
let keyframes = myRules[0]; // a CSSKeyframesRule
keyframes.appendRule("to {transform: translateX(100%);}");
console.log(keyframes.cssRules); // a CSSRuleList object with two rules
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
