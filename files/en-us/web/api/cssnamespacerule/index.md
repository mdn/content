---
title: CSSNamespaceRule
slug: Web/API/CSSNamespaceRule
page-type: web-api-interface
browser-compat: api.CSSNamespaceRule
---

{{APIRef("CSSOM")}}

The **`CSSNamespaceRule`** interface describes an object representing a single CSS {{ cssxref("@namespace") }} [at-rule](/en-US/docs/Web/CSS/CSS_syntax/At-rule).

{{InheritanceDiagram}}

## Instance properties

_Inherits properties from its ancestor {{domxref("CSSRule")}}._

- {{domxref("CSSNamespaceRule.namespaceURI")}}
  - : Returns a string containing the text of the URI of the given namespace.
- {{domxref("CSSNamespaceRule.prefix")}}
  - : Returns a string with the name of the prefix associated to this namespace. If there is no such prefix, returns an empty string.

## Instance methods

_Inherits methods from its ancestor {{domxref("CSSRule")}}._

## Examples

The stylesheet includes a namespace as the only rule. Therefore the first {{domxref("CSSRule")}} returned will be a `CSSNamespaceRule`.

```css
@namespace url(http://www.w3.org/1999/xhtml);
```

```js
const myRules = document.styleSheets[0].cssRules;
console.log(myRules[0]); // A CSSNamespaceRule
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
