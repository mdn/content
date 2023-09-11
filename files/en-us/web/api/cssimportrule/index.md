---
title: CSSImportRule
slug: Web/API/CSSImportRule
page-type: web-api-interface
browser-compat: api.CSSImportRule
---

{{APIRef("CSSOM")}}

The **`CSSImportRule`** interface represents an {{cssxref("@import")}} [at-rule](/en-US/docs/Web/CSS/At-rule).

{{InheritanceDiagram}}

## Instance properties

_Inherits properties from its ancestor {{domxref("CSSRule")}}._

- {{domxref("CSSImportRule.href")}} {{ReadOnlyInline}}
  - : Returns the URL specified by the {{cssxref("@import")}} rule.
- {{domxref("CSSImportRule.layerName")}} {{ReadOnlyInline}}
  - : Returns the name of the [cascade layer](/en-US/docs/Web/CSS/@layer) declared in the {{cssxref("@import")}} rule, the empty string if the layer is anonymous, the or `null` if the rule doesn't declare any.
- {{domxref("CSSImportRule.media")}}
  - : Returns the value of the `media` attribute of the associated stylesheet.
- {{domxref("CSSImportRule.styleSheet")}} {{ReadOnlyInline}}
  - : Returns the associated stylesheet.
- {{domxref("CSSImportRule.supportsText")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns the supports condition specified by the {{cssxref("@import")}} rule.

## Instance methods

_Inherits methods from its ancestor {{domxref("CSSRule")}}._

## Examples

The document includes a single stylesheet which contains a single {{cssxref("@import")}} rule. Therefore the first item in the list of CSS rules will be a `CSSImportRule`.

```css
@import url("style.css") screen;
```

```js
const myRules = document.styleSheets[0].cssRules;
console.log(myRules[0]); // A CSSImportRule instance object
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
