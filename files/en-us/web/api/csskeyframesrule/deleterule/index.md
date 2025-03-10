---
title: "CSSKeyframesRule: deleteRule() method"
short-title: deleteRule()
slug: Web/API/CSSKeyframesRule/deleteRule
page-type: web-api-instance-method
browser-compat: api.CSSKeyframesRule.deleteRule
---

{{APIRef("CSSOM") }}

The **`deleteRule()`** method of the {{domxref("CSSKeyframeRule")}} interface deletes the {{domxref("CSSKeyFrameRule")}} that matches the specified keyframe selector.

## Syntax

```js-nolint
deleteRule(select)
```

### Parameters

- `select`

  - : A string which contains the keyframe selector of the rule to be deleted, which must be:

    - a comma-separated list of percentage values between 0% and 100%;
    - or, the keywords `from` or `to`

    Note that the number and order of the values in the specified keyframe selector must match those of the targeted keyframe rule(s). White-space is disregarded.

### Return value

None ({{jsxref("undefined")}}).

## Examples

The CSS includes a keyframes at-rule. This will be the first {{domxref("CSSRule")}} returned by `document.styleSheets[0].cssRules`.
`myRules[0]` returns a {{domxref("CSSKeyframesRule")}} object. Returning the `cssRules` property would return a {{domxref("CSSRuleList")}} containing two rules.

After deleting a rule with `deleteRule()` the `cssRules` property returns a {{domxref("CSSRuleList")}} containing one rule.

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
keyframes.deleteRule("to");
console.log(keyframes.cssRules); // a CSSRuleList object with one rule
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
