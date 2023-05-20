---
title: "CSSKeyframeRule: style property"
short-title: style
slug: Web/API/CSSkeyframeRule/style
page-type: web-api-instance-property
browser-compat: api.CSSKeyframeRule.style
---

{{ APIRef("CSSOM") }}

The read-only **`CSSKeyframeRule.style`** property is the {{ domxref("CSSStyleDeclaration") }} interface for the [declaration block](https://www.w3.org/TR/1998/REC-CSS2-19980512/syndata.html#block) of the {{ domxref("CSSKeyframeRule") }}.

## Value

A {{domxref("CSSStyleDeclaration")}} object, with the following properties:

- computed flag
  - : Unset.
- declarations
  - : The declared declarations in the rule, in the order they were specified, shorthand properties expanded to longhands.
- parent CSS rule
  - : The context object, which is an alias for [this](https://heycam.github.io/webidl/#this).
- owner node
  - : Null.

## Examples

The CSS includes a {{cssxref("@keyframes")}} at-rule. This will be the first {{domxref("CSSRule")}} returned by `document.styleSheets[0].cssRules`.
`myRules[0]` returns a {{domxref("CSSKeyframesRule")}} object, which will contain individual {{domxref("CSSKeyFrameRule")}} objects for each keyframe.

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
console.log(keyframes[0].style); // a CSSStyleDeclaration
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
