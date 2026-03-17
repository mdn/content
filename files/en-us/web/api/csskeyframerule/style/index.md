---
title: "CSSKeyframeRule: style property"
short-title: style
slug: Web/API/CSSKeyframeRule/style
page-type: web-api-instance-property
browser-compat: api.CSSKeyframeRule.style
---

{{ APIRef("CSSOM") }}

The read-only **`style`** property of the {{domxref("CSSKeyframeRule")}} interface contains a {{domxref("CSSStyleDeclaration")}} object representing the descriptors available in the {{cssxref("@keyframes")}} rule's body.

## Value

A {{domxref("CSSStyleDeclaration")}} object.

Although the `style` property itself is read-only in the sense that you can't replace the `CSSStyleDeclaration` object, you can still assign to the `style` property directly, which is equivalent to assigning to its {{domxref("CSSStyleDeclaration/cssText", "cssText")}} property. You can also modify the `CSSStyleDeclaration` object using the {{domxref("CSSStyleDeclaration/setProperty", "setProperty()")}} and {{domxref("CSSStyleDeclaration/removeProperty", "removeProperty()")}} methods.

## Examples

The CSS includes a {{cssxref("@keyframes")}} at-rule. This will be the first {{domxref("CSSRule")}} returned by `document.styleSheets[0].cssRules`.
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
console.log(keyframes[0].style); // a CSSStyleDeclaration
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
