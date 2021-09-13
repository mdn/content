---
title: CSSNamespaceRule
slug: Web/API/CSSNamespaceRule
tags:
  - API
  - CSSOM
  - Interface
  - Reference
browser-compat: api.CSSNamespaceRule
---
{{APIRef("CSSOM")}}

The **`CSSNamespaceRule`** interface describes an object representing a single CSS {{ cssxref("@namespace") }} {{cssxref("at-rule")}}.

{{InheritanceDiagram}}

## Properties

_Inherits methods from its ancestor {{domxref("CSSRule")}}._

- {{domxref("CSSNamespaceRule.namespaceURI")}}
  - : Returns a {{ domxref("DOMString") }} containing the text of the URI of the given namespace.
- {{domxref("CSSNamespaceRule.prefix")}}
  - : Returns a {{ domxref("DOMString") }} with the name of the prefix associated to this namespace. If there is no such prefix, returns an empty string.

## Methods

_Inherits methods from its ancestor {{domxref("CSSRule")}}._

## Examples

The stylesheet includes a namespace as the only rule. Therefore the first {{domxref("CSSRule")}} returned will be a `CSSNamespaceRule`.

```css
@namespace url(http://www.w3.org/1999/xhtml);
```

```js
let myRules = document.styleSheets[0].cssRules;
console.log(myRules[0]); //a CSSNamespaceRule
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
