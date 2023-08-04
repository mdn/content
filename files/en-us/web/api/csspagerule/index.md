---
title: CSSPageRule
slug: Web/API/CSSPageRule
page-type: web-api-interface
browser-compat: api.CSSPageRule
---

{{APIRef("CSSOM")}}

**`CSSPageRule`** represents a single CSS {{cssxref("@page")}} rule.

{{InheritanceDiagram}}

## Instance properties

_Inherits properties from its ancestor {{domxref("CSSRule")}}._

- {{domxref("CSSPageRule.selectorText")}}
  - : Represents the text of the page selector associated with the at-rule.
- {{domxref("CSSPageRule.style")}} {{ReadOnlyInline}}
  - : Returns the [declaration block](/en-US/docs/Web/API/CSS_Object_Model/CSS_Declaration_Block) associated with the at-rule.

## Instance methods

_Inherits methods from its ancestor {{domxref("CSSRule")}}._

## Examples

The stylesheet includes a single {{cssxref("@page")}} rule, therefore the first (and only) rule returned will be a `CSSPageRule`.

```css
@page {
  margin: 1cm;
}
```

```js
let myRules = document.styleSheets[0].cssRules;
console.log(myRules[0]); // a CSSPageRule
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
