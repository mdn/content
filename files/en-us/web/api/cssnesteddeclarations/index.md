---
title: CSSNestedDeclarations
slug: Web/API/CSSNestedDeclarations
page-type: web-api-interface
browser-compat: api.CSSNestedDeclarations
---

{{APIRef("CSSOM")}}

The **`CSSNestedDeclarations`** interface of the [CSS Rule API](/en-US/docs/Web/API/CSSRule) allows the nesting of `CSSRules` within each other.

> [!NOTE] > [Browser versions](#browser_compatibility) that implementations that do not support this interface may parse nested rules in the wrong order.

{{InheritanceDiagram}}

## Instance properties

_Inherits properties from its ancestor {{domxref("CSSRule")}}._

- {{domxref("CSSNestedDeclarations.style")}} {{ReadOnlyInline}}
  - : Returns the values of the nested rules.

## Instance methods

_No specific methods; inherits methods from its ancestor {{domxref("CSSRule")}}._

## Examples

This stylesheet contains a rule, followed by a nested [@media](/en-US/docs/Web/CSS/@media) CSS at-rule, followed by another rule.

```css
.foo {
  background-color: silver;
  @media (screen) {
    color: tomato;
  }
  color: black;
}
```

### Without CSSNestedDeclarations

Without `CSSNestedDeclarations` the CSS is is parsed in the wrong order, meaning the text color will be `tomato` and not `black` as the author intended.

```css
.foo {
  background-color: silver;
  color: black;
  @media (screen) {
    color: tomato;
  }
}
```

### With CSSNestedDeclarations

With `CSSNestedDeclarations` the CSS is is parsed correctly.

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
- [The Nested Declarations Rule](https://drafts.csswg.org/css-nesting-1/#nested-declarations-rule)
