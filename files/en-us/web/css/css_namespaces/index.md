---
title: CSS namespaces
slug: Web/CSS/CSS_namespaces
page-type: css-module
spec-urls: https://drafts.csswg.org/css-namespaces/
---

{{CSSRef}}

The **CSS namespaces** module defines the syntax for using {{glossary("namespace", "namespaces")}} in CSS.

CSS isn't just for styling HTML. A stylesheet may be used to style SVG, MathML, XML, or HTML, each of which has a different namespace or a document containing multiple namespaces.

The [`@namespace`](/en-US/docs/Web/CSS/@namespace) at-rule defined in this module enables distinguishing between same-named elements in different namespaces. Element tag names are not unique to a single language. For example, the `<a>` element isn't limited to HTML. You may want to style the `<a>`s within your SVGs differently from the links in your HTML. You also will likely want to ensure that {{domxref("Document.querySelectorAll", "querySelectorAll(\"a\")")}} selects the right kind of element. Namespacing can help.

The `@namespace` rule is used for declaring a default namespace and for binding namespaces to namespace prefixes. The namespaces module also defines the syntax for using these prefixes to represent namespace-qualified names. That's it. What a name means or if the name is even valid depends on the context and host language.

## Reference

### At-rules

- {{cssxref("@namespace")}}

## Guides

- [Namespaces crash course](/en-US/docs/Web/SVG/Guides/Namespaces_crash_course)

  - : Deep dive into what a namespace is and how they are used in XML and XML-based markup languages.

## Related concepts

- CSS [namespace separator (`|`)](/en-US/docs/Web/CSS/Namespace_separator) combinator
- CSS [type selectors](/en-US/docs/Web/CSS/Type_selectors)
- CSS [universal selector](/en-US/docs/Web/CSS/Universal_selectors)
- {{DOMXRef("CSSNamespaceRule")}} interface
  - {{DOMXRef("CSSNamespaceRule.namespaceURI")}} property
  - {{DOMXRef("CSSNamespaceRule.prefix")}} property
- [`Document.createAttributeNS()`](/en-US/docs/Web/API/Document/createAttributeNS) method
- [`Document.createElementNS()`](/en-US/docs/Web/API/Document/createElementNS) method
- [`Document.getElementsByTagNameNS()`](/en-US/docs/Web/API/Document/getElementsByTagNameNS) method
- [`Element.getAttributeNodeNS()`](/en-US/docs/Web/API/Element/getAttributeNodeNS) method
- [`Element.getAttributeNS()`](/en-US/docs/Web/API/Element/getAttributeNS) method
- [`Element.getElementsByTagNameNS()`](/en-US/docs/Web/API/Element/getElementsByTagNameNS) method
- [`Element.hasAttributeNS()`](/en-US/docs/Web/API/Element/hasAttributeNS) method
- [`Element.namespaceURI`](/en-US/docs/Web/API/Element/namespaceURI) property
- [`Element.removeAttributeNS()`](/en-US/docs/Web/API/Element/removeAttributeNS) method
- [`Element.setAttributeNS()`](/en-US/docs/Web/API/Element/setAttributeNS) method
- [`Element.setAttributeNodeNS()`](/en-US/docs/Web/API/Element/setAttributeNodeNS) method
- [`NamedNodeMap.getNamedItemNS()`](/en-US/docs/Web/API/NamedNodeMap/getNamedItemNS) method
- [`NamedNodeMap.removeNamedItemNS()`](/en-US/docs/Web/API/NamedNodeMap/removeNamedItemNS) method
- [`NamedNodeMap.setNamedItemNS()`](/en-US/docs/Web/API/NamedNodeMap/setNamedItemNS) method
- {{glossary("Namespace")}} glossary term

## Specifications

{{Specifications}}

## See also

- [`<a>`](/en-US/docs/Web/SVG/Reference/Element/a#example) SVG element
- [CSS `<url>` type](/en-US/docs/Web/CSS/url_value)
- [CSS at-rules](/en-US/docs/Web/CSS/CSS_syntax/At-rule)
- [CSS at-rule functions](/en-US/docs/Web/CSS/CSS_syntax/At-rule_functions)
- [CSS selectors](/en-US/docs/Web/CSS/CSS_selectors)
