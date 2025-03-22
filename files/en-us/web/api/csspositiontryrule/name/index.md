---
title: "CSSPositionTryRule: name property"
short-title: name
slug: Web/API/CSSPositionTryRule/name
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.CSSPositionTryRule.name
---

{{APIRef("CSSOM") }}{{SeeCompatTable}}

The **`name`** read-only property of the {{domxref("CSSPositionTryRule")}} interface represents the name of the position try fallback option specified by the `@position-try` at-rule's {{cssxref("dashed-ident")}}.

## Value

A string.

## Examples

The CSS includes a `@position-try` at-rule with a name of `--custom-bottom` and three descriptors.

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
console.log(tryOption.name); // "--custom-bottom"
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
