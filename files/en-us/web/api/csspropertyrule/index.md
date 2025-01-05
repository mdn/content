---
title: CSSPropertyRule
slug: Web/API/CSSPropertyRule
page-type: web-api-interface
browser-compat: api.CSSPropertyRule
---

{{APIRef("CSS Properties and Values API")}}

The **`CSSPropertyRule`** interface of the [CSS Properties and Values API](/en-US/docs/Web/API/CSS_Properties_and_Values_API) represents a single CSS {{cssxref("@property")}} rule.

{{InheritanceDiagram}}

## Instance properties

_Inherits properties from its ancestor {{domxref("CSSRule")}}._

- {{domxref("CSSPropertyRule.inherits")}} {{ReadOnlyInline}}
  - : Returns the inherit flag of the custom property.
- {{domxref("CSSPropertyRule.initialValue")}} {{ReadOnlyInline}}
  - : Returns the initial value of the custom property.
- {{domxref("CSSPropertyRule.name")}} {{ReadOnlyInline}}
  - : Returns the name of the custom property.
- {{domxref("CSSPropertyRule.syntax")}} {{ReadOnlyInline}}
  - : Returns the literal syntax of the custom property.

## Instance methods

_No specific methods; inherits methods from its ancestor {{domxref("CSSRule")}}._

## Examples

This stylesheet contains a single {{cssxref("@property")}} rule. The first {{domxref("CSSRule")}} returned will be a `CSSPropertyRule` with the properties and values as defined by the rule in CSS.

```css
@property --property-name {
  syntax: "<color>";
  inherits: false;
  initial-value: #c0ffee;
}
```

```js
let myRules = document.styleSheets[0].cssRules;
console.log(myRules[0]); //a CSSPropertyRule
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
