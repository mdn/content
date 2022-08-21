---
title: CSSMediaRule
slug: Web/API/CSSMediaRule
page-type: web-api-interface
tags:
  - API
  - CSSOM
  - Interface
  - Reference
browser-compat: api.CSSMediaRule
---
{{ APIRef("CSSOM") }}

The **`CSSMediaRule`** interface represents a single CSS {{cssxref("@media")}} rule.

{{InheritanceDiagram}}

## Properties

_Inherits properties from its ancestors {{domxref("CSSConditionRule")}}, {{domxref("CSSGroupingRule")}}, and {{domxref("CSSRule")}}._

- {{domxref("CSSMediaRule.media")}} {{ReadOnlyInline}}
  - : Returns a {{domxref("MediaList")}} representing the intended destination medium for style information.

## Methods

_No specific methods; inherits methods from its ancestors {{domxref("CSSConditionRule")}}, {{domxref("CSSGroupingRule")}}, and {{domxref("CSSRule")}}._

## Examples

The CSS includes a media query with one style rule. This will be the first CSSRule returned by `document.styleSheets[0].cssRules`.
`myRules[0]` therefore returns a {{domxref("CSSMediaRule")}} object.

```css
@media (min-width: 500px) {
  body {
    color: blue;
  }
}
```

```js
let myRules = document.styleSheets[0].cssRules;
console.log(myRules[0]); // a CSSMediaRule representing the media query.
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
