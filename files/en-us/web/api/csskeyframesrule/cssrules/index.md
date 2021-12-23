---
title: CSSKeyframesRule.cssRules
slug: Web/API/CSSKeyframesRule/cssRules
tags:
  - API
  - CSSOM
  - CSSKeyframesRule
  - CSS Animations
  - Property
  - Reference
browser-compat: api.CSSKeyframesRule.cssRules
---
{{APIRef("CSSOM") }}

The read-only **`cssRules`** property of the {{domxref("CSSKeyframeRule")}} interface returns a {{domxref("CSSRuleList")}} containing the rules in the keyframes {{cssxref("at-rule")}}.

## Syntax

```js
var cssRules = CSSKeyframesRule.cssRules;
```

### Value

A {{domxref('CSSRuleList')}}.

## Example

The CSS includes a keyframes at-rule. This will be the first {{domxref("CSSRule")}} returned by `document.styleSheets[0].cssRules`.
`myRules[0]` returns a {{domxref("CSSKeyframesRule")}} object. The `cssRules` property returns a {{domxref("CSSRuleList")}} containing two rules.

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
console.log(keyframes.cssRules); // a CSSRuleList object with two rules
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
