---
title: CSSNestedDeclarations
slug: Web/API/CSSNestedDeclarations
page-type: web-api-interface
browser-compat: api.CSSNestedDeclarations
---

{{APIRef("CSSOM")}}

The **`CSSNestedDeclarations`** interface of the [CSS Rule API](/en-US/docs/Web/API/CSSRule) is used to group nested {{domxref("CSSRule")}}s.

The interface allows the [CSS Object Model (CSSOM](/en-US/docs/Web/API/CSS_Object_Model) to mirror the structure of CSS documents with nested CSS rules, and ensure that rules are parsed and evaluated in the order that they are declared.

> [!NOTE] > [Browser versions](#browser_compatibility) with implementations that do not support this interface may parse nested rules in the wrong order.

{{InheritanceDiagram}}

## Instance properties

_Inherits properties from its ancestor {{domxref("CSSRule")}}._

- {{domxref("CSSNestedDeclarations.style")}} {{ReadOnlyInline}}
  - : Returns the values of the nested rules.

## Instance methods

_No specific methods; inherits methods from its ancestor {{domxref("CSSRule")}}._

## Examples

### CSS

The CSS below includes a selector `.foo` that contains two declarations and a media query.

```css
.foo {
  background-color: silver;
  @media (screen) {
    color: tomato;
  }
  color: black;
}
```

This is represented by a number of JavaScript objects in the [CSS Object Model](/en-US/docs/Web/API/CSS_Object_Model):

- A {{domxref("CSSStyleRule")}} object that represents the `background-color: silver` rule.
  This can be returned via `document.styleSheets[0].cssRules[0]`.
- A {{domxref("CSSMediaRule")}} object that represents the `@media (screen)` rule, and which can be returned via `document.styleSheets[0].cssRules[0].cssRules[0]`.
  - The `CSSMediaRule` object contains a `CSSNestedDeclaration` object which represents the `color: tomato` rule nested by the `@media (screen)` rule.
    This can be returned via `document.styleSheets[0].cssRules[0].cssRules[0].cssRules[0]`.
- The final rule is a `CSSNestedDeclaration` object that represents the `color: black` rule in the stylesheet, and which can be returned via `document.styleSheets[0].cssRules[0].cssRules[1]`.

> [!NOTE]
> All top-level styles after the first `CSSNestedDeclaration` must also be represented as `CSSNestedDeclaration` objects in order to follow the [CSS nested declarations rule](/en-US/docs/Web/CSS/CSS_nesting/Using_CSS_nesting#nested_declarations_rule)

### CSSOM (CSS Object Model)

```txt
↳ CSSStyleRule
  .style
    - background-color: silver
  ↳ CSSMediaRule
    ↳ CSSNestedDeclarations
      .style (CSSStyleDeclaration, 1) =
      - color: tomato
  ↳ CSSNestedDeclarations
    .style (CSSStyleDeclaration, 1) =
      - color: black
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See Also

- {{domxref("CSSNestedDeclarations.style")}}
- [The Nested Declarations Rule](/en-US/docs/Web/CSS/CSS_nesting/Using_CSS_nesting#nested_declarations_rule)
