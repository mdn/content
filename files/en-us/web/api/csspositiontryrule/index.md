---
title: CSSPositionTryRule
slug: Web/API/CSSPositionTryRule
page-type: web-api-interface
status:
  - experimental
browser-compat: api.CSSPositionTryRule
---

{{APIRef("CSSOM")}}{{SeeCompatTable}}

The **`CSSPositionTryRule`** interface describes an object representing a {{cssxref("@position-try")}} [at-rule](/en-US/docs/Web/CSS/CSS_syntax/At-rule).

{{InheritanceDiagram}}

## Instance properties

_Inherits properties from its ancestor {{domxref("CSSRule")}}._

- {{domxref("CSSPositionTryRule.name")}} {{ReadOnlyInline}} {{experimental_inline}}
  - : Represents the name of the position try option specified by the `@position-try` at-rule's {{cssxref("dashed-ident")}}.
- {{domxref("CSSPositionTryRule.style")}} {{ReadOnlyInline}} {{experimental_inline}}
  - : A {{domxref("CSSPositionTryDescriptors")}} object that represents the declarations set in the body of the `@position-try` at-rule.

## Instance methods

_No specific methods; inherits methods from its ancestor {{domxref("CSSRule")}}._

## Examples

The CSS includes a `@position-try` at-rule with a name of `--custom-left` and three descriptors.

```css
@position-try --custom-left {
  position-area: left;
  width: 20%;
  max-width: 200px;
  margin: 0 10px 0 0;
}
```

```js
const myRules = document.styleSheets[0].cssRules;
const tryOption = myRules[0]; // a CSSPositionTryRule
console.log(tryOption); // "[object CSSPositionTryRule]"
console.log(tryOption.name); // "--custom-left"
console.log(tryOption.style); // "[object CSSPositionTryDescriptors]"
console.log(tryOption.style.maxWidth); // "200px"
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
