---
title: CSS namespaces
slug: Web/CSS/CSS_namespaces
page-type: css-module
browser-compat: css.at-rules.namespace
---

{{CSSRef}}

The **CSS namespaces** module defines the syntax for using {{glossary("namespace", "namespaces")}} in CSS.

CSS isn't just for HTML. A single stylesheet may be used to style SVG, MathML, XML, HTML, each of which has a different namespace, or a document containing multiple namespaces. Element tag names are not all unique to a single language. For example, The `<a>` element isn't limited to HTML. You may want to use different CSS style for your SVG differently than for your HTML links, or ensure that {{domxref("Document.querySelectorAll", "querySelectorAll(\"a\")")}} selects the right kind of element. [The `@namespace` rule](/en-US/docs/Web/CSS/@namespace), defined in this module, enable distinguishing between same-named elements in different namespaces.

The `@namespace` rule is used for declaring a default namespace and for binding namespaces to namespace prefixes. The namespaces module also defines the syntax for using these prefixes to represent namespace-qualified names. That's it. What a name means, or if the name is even valid, depends on the context and host language.

## Reference

### At-rules

- {{cssxref("@namespace")}}

## Guides

- [Namespaces crash course](/en-US/docs/Web/SVG/Namespaces_Crash_Course)

  - :

## Related concepts

- CSS [namespace separator (`|`)](/en-US/docs/Web/CSS/Namespace_separator) combinator
- {{DOMXRef("CSSNamespaceRule")}} interface
- [`Document.createElementNS()`](/en-US/docs/Web/API/Document/createElementNS) method
- [`Element.namespaceURI`](/en-US/docs/Web/API/Element/namespaceURI) property
- [CSS type selector](/en-US/docs/Web/CSS/Type_selectors)
- [CSS universal selector](/en-US/docs/Web/CSS/Universal_selectors)
- {{glossary("namespace")}} glossary term

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [CSS selector module](/en-US/docs/Web/CSS/CSS_selectors)
- [SVG nameps](/en-US/docs/Web/SVG/Element/a#example)
