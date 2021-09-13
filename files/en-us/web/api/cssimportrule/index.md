---
title: CSSImportRule
slug: Web/API/CSSImportRule
tags:
  - API
  - CSSOM
  - Interface
  - Reference
browser-compat: api.CSSImportRule
---
{{APIRef("CSSOM")}}

The **`CSSImportRule`** interface represents an {{cssxref("@import")}} {{cssxref("at-rule")}}.

{{InheritanceDiagram}}

## Properties

_Inherits properties from its ancestor {{domxref("CSSRule")}}._

- {{domxref("CSSImportRule.href")}}{{readonlyinline}}
  - : Returns the url specified by the {{cssxref("@import")}} rule.
- {{domxref("CSSImportRule.media")}}
  - : Returns the value of the `media` attribute of the associated stylesheet.
- {{domxref("CSSImportRule.stylesheet")}}{{readonlyinline}}
  - : Returns the associated stylesheet.

## Methods

_Inherits methods from its ancestor {{domxref("CSSRule")}}._

## Examples

The following stylesheet includes a single {{cssxref("@import")}} rule. Therefore the first item in the list of CSS rules will be a `CSSImportRule`.

```css
@import url("style.css") screen;
```

```js
let myRules = document.styleSheets[0].cssRules;
console.log(myRules[0]); //a CSSImportRule
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
