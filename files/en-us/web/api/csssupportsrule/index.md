---
title: CSSSupportsRule
slug: Web/API/CSSSupportsRule
page-type: web-api-interface
tags:
  - API
  - CSSOM
  - Interface
  - Reference
browser-compat: api.CSSSupportsRule
---
{{APIRef("CSSOM")}}

The **`CSSSupportsRule`** interface represents a single CSS {{cssxref("@supports")}} [at-rule](/en-US/docs/Web/CSS/At-rule).

{{InheritanceDiagram}}

## Properties

_Inherits properties from its ancestors {{domxref("CSSConditionRule")}}, {{domxref("CSSGroupingRule")}}, and {{domxref("CSSRule")}}._

## Methods

_Inherits methods from its ancestors {{domxref("CSSConditionRule")}}, {{domxref("CSSGroupingRule")}}, and {{domxref("CSSRule")}}._

## Examples

The CSS includes a CSS feature query using the {{cssxref("@supports")}} [at-rule](/en-US/docs/Web/CSS/At-rule), containing one style rule. This will be the first CSSRule returned by `document.styleSheets[0].cssRules`.
`myRules[0]` therefore returns a {{domxref("CSSSupportsRule")}} object.

```css
@supports (display: grid) {
  body {
    color: blue;
  }
}
```

```js
let myRules = document.styleSheets[0].cssRules;
console.log(myRules[0]); // a CSSSupportsRule representing the feature query.
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("@supports")}}
