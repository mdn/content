---
title: "CSSPositionTryRule: style property"
short-title: style
slug: Web/API/CSSPositionTryRule/style
page-type: web-api-instance-property
browser-compat: api.CSSPositionTryRule.style
---

{{ APIRef("CSSOM") }}

The read-only **`style`** property of the {{domxref("CSSPositionTryRule")}} interface contains a {{domxref("CSSPositionTryDescriptors")}} object representing the descriptors available in the {{cssxref("@position-try")}} rule's body.

## Value

A {{domxref("CSSPositionTryDescriptors")}} object.

Although the `style` property itself is read-only in the sense that you can't replace the `CSSPositionTryDescriptors` object, you can still assign to the `style` property directly, which is equivalent to assigning to its {{domxref("CSSStyleDeclaration/cssText", "cssText")}} property. You can also modify the `CSSPositionTryDescriptors` object using the {{domxref("CSSStyleDeclaration/setProperty", "setProperty()")}} and {{domxref("CSSStyleDeclaration/removeProperty", "removeProperty()")}} methods.

## Examples

The CSS includes a `@position-try` at-rule with a name of `--custom-right` and three descriptors.

```css
@position-try --custom-bottom {
  top: anchor(bottom);
  min-width: 100px;
  margin-top: 10px;
}
```

```js
const myRules = document.styleSheets[0].cssRules;
const tryOption = myRules[0]; // a CSSPositionTryRule
console.log(tryOption.style.top); // "anchor(bottom)"
console.log(tryOption.style["min-width"]); // "100px"
console.log(tryOption.style.positionArea); // ""; no position-area specified
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{DOMxRef("CSSPositionTryDescriptors")}}
- {{cssxref("@position-try")}}
- {{cssxref("position-try-fallbacks")}}
- [CSS anchor positioning](/en-US/docs/Web/CSS/Guides/Anchor_positioning) module
- [Using CSS anchor positioning](/en-US/docs/Web/CSS/Guides/Anchor_positioning/Using)
- [Handling overflow: try options and conditional hiding](/en-US/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding)
