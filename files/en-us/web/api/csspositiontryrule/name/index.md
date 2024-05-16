---
title: "CSSPositionTryRule: name property"
short-title: name
slug: Web/API/CSSPositionTryRule/name
page-type: web-api-instance-property
browser-compat: api.CSSPositionTryRule.name
---

{{APIRef("CSSOM") }}

The **`name`** read-only property of the {{domxref("CSSPositionTryRule")}} interface represents the name of the position try option specified by the `@position-try` at-rule's {{cssxref("dashed-ident")}}.

## Value

A string.

## Examples

The CSS includes a `@position-try` at-rule with a name of `--custom-right` and several declarations in its body.

```css
@position-try --custom-right {
  inset-area: right;
  width: 100px;
  margin: 0 0 0 10px;
}
```

```js
let myRules = document.styleSheets[0].cssRules;
let tryOption = myRules[0]; // a CSSPositionTryRule
console.log(tryOption.name); // Logs "--custom-right" to the console.
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("@position-try")}}
- {{cssxref("position-try-options")}}
- [CSS Anchor Positioning](/en-US/docs/Web/CSS/CSS_anchor_positioning)
- [Using CSS Anchor Positioning](/en-US/docs/Web/CSS/CSS_anchor_positioning/Using)
