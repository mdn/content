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

_Inherits properties from its ancestors {{domxref("CSSGroupingRule")}} and {{domxref("CSSRule")}}._

- {{domxref("CSSStyleRule.selectorText")}}
  - : Returns the textual representation of the selector for this rule, e.g., `"h1, h2"`.
- {{domxref("CSSStyleRule.style")}} {{ReadOnlyInline}}
  - : Returns the {{domxref("CSSStyleProperties")}} object for the rule, which contains properties all supported the declaration styles.
- {{domxref("CSSStyleRule.styleMap")}} {{ReadOnlyInline}}
  - : Returns a {{domxref('StylePropertyMap')}} object which provides access to the rule's property-value pairs.

## Instance methods

_Inherits methods from its ancestors {{domxref("CSSGroupingRule")}} and {{domxref("CSSRule")}}._

## Examples

### Getting a style rule

The CSS below defines the style rule for the `h1` selector, which is represented in code by a {{domxref("CSSStyleRule")}} instance.

```css
h1 {
  color: pink;
}
```

Assuming the above style rule is the first rule in the document, it will be the first {{domxref("CSSRule")}} returned by `document.styleSheets[0].cssRules`.
`myRules[0].style` returns a {{domxref("CSSStyleProperties")}} object representing the declarations defined for `h1`.

```js
let myRules = document.styleSheets[0].cssRules;
console.log(myRules[0]); // a CSSStyleRule representing the h1.
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
