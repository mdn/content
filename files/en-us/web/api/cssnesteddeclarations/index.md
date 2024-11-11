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

The CSS below includes a selector `.foo` with a three of rules that define it:

- The first is a {{domxref("CSSStyleRule")}} object which can be returned via `document.styleSheets[0].cssRules[0]` and is equivalent to `background-color: silver`
- The second is a {{domxref("CSSMediaRule")}} object which can be returned via `document.styleSheets[0].cssRules[0].cssRules[0]` and is equivalent to `@media (screen)`
  - The `CSSMediaRule` object contains a `CSSNestedDeclaration` object which can be returned via `document.styleSheets[0].cssRules[0].cssRules[0].cssRules[0]` and is equivalent to `color: tomato`
- The third is a `CSSNestedDeclaration` object which can be returned via `document.styleSheets[0].cssRules[0].cssRules[1]` and is equivalent to `color: black`

```css
.foo {
  background-color: silver;
  @media (screen) {
    color: tomato;
  }
  color: black;
}
```

The following JavaScript code returns a CSSNestedDeclarations object.

```js
let myRules = document.styleSheets[0].cssRules;
console.log(myRules[0].cssRules[1]); // [object CSSNestedDeclarations]
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See Also

- {{domxref("CSSNestedDeclarations.style")}}
- [The Nested Declarations Rule](/en-US/docs/Web/CSS/CSS_nesting/Using_CSS_nesting#nested_declarations_rule)
