---
title: "CSSPositionTryRule: style property"
short-title: style
slug: Web/API/CSSPositionTryRule/style
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.CSSPositionTryRule.style
---

{{ APIRef("CSSOM") }}{{SeeCompatTable}}

The **`style`** read-only property of the {{domxref("CSSPositionTryRule")}} interface returns a {{domxref("CSSPositionTryDescriptors")}} object representing the declarations set in the body of the `@position-try` at-rule.

## Value

A {{domxref("CSSPositionTryDescriptors")}} object.

## Examples

The CSS includes a `@position-try` at-rule with a name of `--custom-right` and three descriptors.

```css
@position-try --custom-bottom {
  top: anchor(bottom);
  min-width: 100px;
  margin: 10px 0 0 0;
}
```

```js
const myRules = document.styleSheets[0].cssRules;
const tryOption = myRules[0]; // a CSSPositionTryRule
console.log(tryOption.style.top); // "anchor(bottom)"
console.log(tryOption.style["min-width"]); // "100px"
console.log(tryOption.style.insetArea); // ""; no inset-area specified
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{DOMxRef("CSSPositionTryDescriptors")}}
- {{cssxref("@position-try")}}
- {{cssxref("position-try-fallbacks")}}
- [CSS anchor positioning](/en-US/docs/Web/CSS/CSS_anchor_positioning) module
- [Using CSS anchor positioning](/en-US/docs/Web/CSS/CSS_anchor_positioning/Using)
- [Handling overflow: try options and conditional hiding](/en-US/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding)
