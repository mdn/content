---
title: "CSSPositionTryRule: style property"
short-title: style
slug: Web/API/CSSPositionTryRule/style
page-type: web-api-instance-property
browser-compat: api.CSSPositionTryRule.style
---

{{ APIRef("CSSOM") }}

The **`style`** read-only property of the {{domxref("CSSPositionTryRule")}} interface returns a {{domxref("CSSPositionTryDescriptors")}} object representing the declarations set in the body of the `@position-try` at-rule.

## Value

A {{domxref("CSSPositionTryDescriptors")}} object.

## Examples

The CSS includes a `@position-try` at-rule with a name of `--custom-right` and several declarations in its body.

```css
@position-try --custom-bottom {
  top: anchor(bottom);
  min-width: 100px;
  margin: 10px 0 0 0;
}
```

```js
let myRules = document.styleSheets[0].cssRules;
let tryOption = myRules[0]; // a CSSPositionTryRule
console.log(tryOption.style.top); // "anchor(bottom)"
console.log(tryOption.style["min-width"]); // "100px"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("@position-try")}}
- {{cssxref("position-try-options")}}
- [CSS anchor positioning](/en-US/docs/Web/CSS/CSS_anchor_positioning) module
- [Using CSS anchor positioning](/en-US/docs/Web/CSS/CSS_anchor_positioning/Using)
- {{DOMxRef("CSSPositionTryDescriptors")}}
