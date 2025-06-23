---
title: XSLT elements reference
short-title: Elements
slug: Web/XML/XSLT/Reference/Element
page-type: landing-page
sidebar: xmlsidebar
---

There are two types of elements discussed here: top-level elements and instructions. A top-level element must appear as the child of either `<xsl:stylesheet>` or `<xsl:transform>`. An instruction, on the other hand, is associated with a template. A stylesheet may include several templates. A third type of element, not discussed here, is the literal result element (LRE). An LRE also appears in a template. It consists of any non-instruction element that should be copied as-is to the result document, for example, an `<hr>` element in an HTML conversion stylesheet.

On a related note, any attribute in an LRE and some attributes of a limited number of XSLT elements can also include what is known as an attribute value template. An attribute value template is a string that includes an embedded XPath expression which is used to specify the value of an attribute. At run-time the expression is evaluated and the result of the evaluation is substituted for the XPath expression. For example, assume that a variable `image-dir` is defined as follows:

```xml
<xsl:variable name="image-dir">/images</xsl:variable>
```

The expression to be evaluated is placed inside curly braces:

```xml
<img src="{$image-dir}/mygraphic.jpg"/>
```

This would result in the following:

```xml
<img src="/images/mygraphic.jpg"/>
```

The element annotations that follow include a description, a syntax listing, a list of required and optional attributes, a description of type and position, its source in the W3C Recommendation and an explanation of the degree of present Gecko support.

- [`<xsl:apply-imports>`](/en-US/docs/Web/XML/XSLT/Reference/Element/apply-imports)
- [`<xsl:apply-templates>`](/en-US/docs/Web/XML/XSLT/Reference/Element/apply-templates)
- [`<xsl:attribute>`](/en-US/docs/Web/XML/XSLT/Reference/Element/attribute)
- [`<xsl:attribute-set>`](/en-US/docs/Web/XML/XSLT/Reference/Element/attribute-set)
- [`<xsl:call-template>`](/en-US/docs/Web/XML/XSLT/Reference/Element/call-template)
- [`<xsl:choose>`](/en-US/docs/Web/XML/XSLT/Reference/Element/choose)
- [`<xsl:comment>`](/en-US/docs/Web/XML/XSLT/Reference/Element/comment)
- [`<xsl:copy>`](/en-US/docs/Web/XML/XSLT/Reference/Element/copy)
- [`<xsl:copy-of>`](/en-US/docs/Web/XML/XSLT/Reference/Element/copy-of)
- [`<xsl:decimal-format>`](/en-US/docs/Web/XML/XSLT/Reference/Element/decimal-format)
- [`<xsl:element>`](/en-US/docs/Web/XML/XSLT/Reference/Element/element)
- [`<xsl:fallback>`](/en-US/docs/Web/XML/XSLT/Reference/Element/fallback) _(not supported)_
- [`<xsl:for-each>`](/en-US/docs/Web/XML/XSLT/Reference/Element/for-each)
- [`<xsl:if>`](/en-US/docs/Web/XML/XSLT/Reference/Element/if)
- [`<xsl:import>`](/en-US/docs/Web/XML/XSLT/Reference/Element/import) _(mostly supported)_
- [`<xsl:include>`](/en-US/docs/Web/XML/XSLT/Reference/Element/include)
- [`<xsl:key>`](/en-US/docs/Web/XML/XSLT/Reference/Element/key)
- [`<xsl:message>`](/en-US/docs/Web/XML/XSLT/Reference/Element/message)
- [`<xsl:namespace-alias>`](/en-US/docs/Web/XML/XSLT/Reference/Element/namespace-alias) _(not supported)_
- [`<xsl:number>`](/en-US/docs/Web/XML/XSLT/Reference/Element/number) _(partially supported)_
- [`<xsl:otherwise>`](/en-US/docs/Web/XML/XSLT/Reference/Element/otherwise)
- [`<xsl:output>`](/en-US/docs/Web/XML/XSLT/Reference/Element/output) _(partially supported)_
- [`<xsl:param>`](/en-US/docs/Web/XML/XSLT/Reference/Element/param)
- [`<xsl:preserve-space>`](/en-US/docs/Web/XML/XSLT/Reference/Element/preserve-space)
- [`<xsl:processing-instruction>`](/en-US/docs/Web/XML/XSLT/Reference/Element/processing-instruction)
- [`<xsl:sort>`](/en-US/docs/Web/XML/XSLT/Reference/Element/sort)
- [`<xsl:strip-space>`](/en-US/docs/Web/XML/XSLT/Reference/Element/strip-space)
- [`<xsl:stylesheet>`](/en-US/docs/Web/XML/XSLT/Reference/Element/stylesheet) _(partially supported)_
- [`<xsl:template>`](/en-US/docs/Web/XML/XSLT/Reference/Element/template)
- [`<xsl:text>`](/en-US/docs/Web/XML/XSLT/Reference/Element/text) _(partially supported)_
- [`<xsl:transform>`](/en-US/docs/Web/XML/XSLT/Reference/Element/transform)
- [`<xsl:value-of>`](/en-US/docs/Web/XML/XSLT/Reference/Element/value-of) _(partially supported)_
- [`<xsl:variable>`](/en-US/docs/Web/XML/XSLT/Reference/Element/variable)
- [`<xsl:when>`](/en-US/docs/Web/XML/XSLT/Reference/Element/when)
- [`<xsl:with-param>`](/en-US/docs/Web/XML/XSLT/Reference/Element/with-param)
