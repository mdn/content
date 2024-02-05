---
title: XLink
slug: Glossary/XLink
page-type: glossary-definition
---

{{GlossarySidebar}}

XLink is a W3C standard which is used to describe links between XML and XML or other documents. Some its behaviors are left to the implementation to determine how to handle.

Simple XLinks are "supported" in Firefox (at least in SVG and MathML), though they do not work as links if one loads a plain XML document with XLinks and attempts to click on the relevant points in the XML tree.

For those who may have found XLink 1.0 cumbersome for regular links, XLink 1.1 drops the need to specify `xlink:type="simple"` for simple links.

XLink is used in [SVG](/en-US/docs/Web/SVG), [MathML](/en-US/docs/Web/MathML), and other important standards.

### Specifications

- [XLink 1.0](https://www.w3.org/TR/xlink/)
- [XLink 1.1](https://www.w3.org/TR/xlink11/) (currently a Working Draft)

### See also

- [XML](/en-US/docs/Web/XML)
- [Code snippets:getAttributeNS](/en-US/docs/Web/API/Element/getAttributeNS) - a wrapper for dealing with some browsers not supporting this DOM method
