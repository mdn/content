---
title: CSSPositionTryRule
slug: Web/API/CSSPositionTryRule
page-type: web-api-interface
status:
  - experimental
browser-compat: api.CSSPositionTryRule
---

{{APIRef("CSSOM")}}

The **`CSSPositionTryRule`** interface describes an object representing a {{cssxref("@position-try")}} [at-rule](/en-US/docs/Web/CSS/At-rule).

{{InheritanceDiagram}}

## Instance properties

_Inherits properties from its ancestor {{domxref("CSSRule")}}._

- {{domxref("CSSPositionTryRule.name")}} {{ReadOnlyInline}}
  - : Represents the name of the position try option specified by the `@position-try` at-rule's {{cssxref("dashed-ident")}}.
- {{domxref("CSSPositionTryRule.style")}} {{ReadOnlyInline}}
  - : Returns a {{domxref("CSSPositionTryDescriptors")}} object representing the declarations set in the body of the `@position-try` at-rule.

## Instance methods

_No specific methods; inherits methods from its ancestor {{domxref("CSSRule")}}._

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
console.log(tryOption); // Log the CSSPositionTryRule to the console.
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
