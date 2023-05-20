---
title: CSSStyleRule
slug: Web/API/CSSStyleRule
page-type: web-api-interface
browser-compat: api.CSSStyleRule
---

{{ APIRef("CSSOM") }}

The **`CSSStyleRule`** interface represents a single CSS style rule.

{{InheritanceDiagram}}

## Instance properties

_Inherits properties from its ancestor {{domxref("CSSRule")}}._

- {{domxref("CSSStyleRule.selectorText")}}
  - : Returns the textual representation of the selector for this rule, e.g. `"h1,h2"`.
- {{domxref("CSSStyleRule.style")}} {{ReadOnlyInline}}
  - : Returns the {{domxref("CSSStyleDeclaration")}} object for the rule.
- {{domxref("CSSStyleRule.styleMap")}} {{ReadOnlyInline}}
  - : Returns a {{domxref('StylePropertyMap')}} object which provides access to the rule's property-value pairs.

## Instance methods

_No specific methods; inherits methods from its ancestor {{domxref("CSSRule")}}._

## Examples

The CSS includes one style rule. This will be the first {{domxref("CSSRule")}} returned by `document.styleSheets[0].cssRules`.
`myRules[0]` therefore returns a {{domxref("CSSStyleRule")}} object representing the rule defined for `h1`.

```css
h1 {
  color: pink;
}
```

```js
let myRules = document.styleSheets[0].cssRules;
console.log(myRules[0]); // a CSSStyleRule representing the h1.
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
