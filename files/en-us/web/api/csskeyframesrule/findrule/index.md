---
title: CSSKeyframesRule.findRule()
slug: Web/API/CSSKeyframesRule/findRule
page-type: web-api-instance-method
tags:
  - API
  - CSSOM
  - CSSKeyframesRule
  - CSS Animations
  - Method
  - Reference
browser-compat: api.CSSKeyframesRule.findRule
---
{{APIRef("CSSOM") }}

The **`findRule()`** method of the {{domxref("CSSKeyframeRule")}} interface finds the {{domxref("CSSKeyFrameRule")}} that matches the specified keyframe selector.

## Syntax

```js
findRule(select)
```

### Parameters

- `select`

  - : A string which contains the keyframe selector of the rule to be found, which must be:

    - a comma-separated list of percentage values between 0% and 100%;
    - or, the keywords `from` or `to`

    Note that the number and order of the values in the specified keyframe selector must match those of the targeted keyframe rule(s). White-space is disregarded.

### Return value

A {{domxref("CSSKeyframeRule")}} which is the last matching rule. If no rules are found, nothing is returned.

## Examples

The CSS includes a keyframes at-rule. This will be the first {{domxref("CSSRule")}} returned by `document.styleSheets[0].cssRules`.
`myRules[0]` returns a {{domxref("CSSKeyframesRule")}} object. Calling findRule("to") returns a {{domxref("CSSKeyframeRule")}} representing the second rule.

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
console.log(keyframes.findRule('to'));  // a CSSKeyframeRule object
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
