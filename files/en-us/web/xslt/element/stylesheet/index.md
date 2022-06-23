---
title: <xsl:stylesheet>
slug: Web/XSLT/Element/stylesheet
tags:
  - Element
  - Reference
  - StyleSheet
  - XSLT
spec-urls: https://www.w3.org/TR/xslt-30/#stylesheet-element
---
{{XSLTRef}}{{QuickLinksWithSubpages("/en-US/docs/Web/XSLT")}}

The `<xsl:stylesheet>` element (or the equivalent `<xsl:transform>` element) is the outermost element of a stylesheet.

### Namespace Declaration

A pseudo-attribute required to identify the document as an XSLT stylesheet. Typically this is `xmlns:xsl="http://www.w3.org/1999/XSL/Transform"`.

## Syntax

```xml
<xsl:stylesheet
  version="NUMBER"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  id="NAME"
  extension-element-prefixes="LIST-OF-NAMES"
  exclude-result-prefixes="LIST-OF-NAMES">
    ENTIRE STYLESHEET
</xsl:stylesheet>
```

### Required Attributes

- `version`
  - : Specifies the version of XSLT required by this stylesheet.

### Optional Attributes

- `exclude-result-prefixes`
  - : Specifies any namespace used in this document that should not be sent to the output document. The list is whitespace separated.
- `extension-element-prefixes`
  - : Specifies a space-separated list of any namespace prefixes for extension elements in this document.
- `default-collation`
  - : Specifies the default collation used by all {{Glossary("XPath")}} expressions appearing in attributes or text value templates that have the element as an ancestor, unless overridden by another `default-collation` attribute on an inner element. It also determines the collation used by certain XSLT constructs (such as [`<xsl:key>`](/en-US/docs/Web/XSLT/Element/key) and [`<xsl:for-each-group>`](/en-US/docs/Web/XSLT/Element/for-each-group)) within its scope.
- `default-mode`
  - : Defines the default value for the `mode` attribute of all [`<xsl:template>`](/en-US/docs/Web/XSLT/Element/template) and [`<xsl:apply-templates>`](/en-US/docs/Web/XSLT/Element/apply-templates) elements within its scope.
- `default-validation`
  - : Defines the default value of the `validation` attribute of all relevant instructions appearing within its scope.
- `expand-text`
  - : Determines whether descendant text nodes of the element are treated as text value templates.
- `id`
  - : Specifies an `id` for this stylesheet. This is most often used when the stylesheet is embedded in another XML document.
- `input-type-annotations`
  - : Specifies whether type annotations are stripped from the element so the same results are produced whether the source documents have been validated against a schema or not.
- `use-when`
  - : Determines whether the element and all the nodes that have it as ancestor are excluded from the stylesheet.
- `xpath-default-namespace`
  - : Specifies the namespace that will be used if the element name is unprefixed or an unprefixed type name within an XPath expression.

### Type

Required outermost element of stylesheet.

## Specifications

{{Specifications}}
