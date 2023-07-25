---
title: XSLT elements reference
slug: Web/XSLT/Element
page-type: landing-page
---

{{XsltSidebar}}

There are two types of elements discussed here: top-level elements and instructions. A top-level element must appear as the child of either `<xsl:stylesheet>` or `<xsl:transform>`. An instruction, on the other hand, is associated with a template. A stylesheet may include several templates. A third type of element, not discussed here, is the literal result element (LRE). An LRE also appears in a template. It consists of any non-instruction element that should be copied as-is to the result document, for example, an `<hr>` element in an HTML conversion stylesheet.

On a related note, any attribute in an LRE and some attributes of a limited number of XSLT elements can also include what is known as an attribute value template. An attribute value template is a string that includes an embedded XPath expression which is used to specify the value of an attribute. At run-time the expression is evaluated and the result of the evaluation is substituted for the XPath expression. For example, assume that a variable "`image-dir`" is defined as follows:

```xml
<xsl:variable name="image-dir">/images</xsl:variable>
```

The expression to be evaluated is placed inside curly brackets:

```xml
<img src="{$image-dir}/mygraphic.jpg"/>
```

This would result in the following:

```xml
<img src="/images/mygraphic.jpg"/>
```

The element annotations that follow include a description, a syntax listing, a list of required and optional attributes, a description of type and position, its source in the W3C Recommendation and an explanation of the degree of present Gecko support.

- [`<xsl:apply-imports>`](/en-US/docs/Web/XSLT/Element/apply-imports)
- [`<xsl:apply-templates>`](/en-US/docs/Web/XSLT/Element/apply-templates)
- [`<xsl:attribute>`](/en-US/docs/Web/XSLT/Element/attribute)
- [`<xsl:attribute-set>`](/en-US/docs/Web/XSLT/Element/attribute-set)
- [`<xsl:call-template>`](/en-US/docs/Web/XSLT/Element/call-template)
- [`<xsl:choose>`](/en-US/docs/Web/XSLT/Element/choose)
- [`<xsl:comment>`](/en-US/docs/Web/XSLT/Element/comment)
- [`<xsl:copy>`](/en-US/docs/Web/XSLT/Element/copy)
- [`<xsl:copy-of>`](/en-US/docs/Web/XSLT/Element/copy-of)
- [`<xsl:decimal-format>`](/en-US/docs/Web/XSLT/Element/decimal-format)
- [`<xsl:element>`](/en-US/docs/Web/XSLT/Element/element)
- [`<xsl:fallback>`](/en-US/docs/Web/XSLT/Element/fallback) _(not supported)_
- [`<xsl:for-each>`](/en-US/docs/Web/XSLT/Element/for-each)
- [`<xsl:if>`](/en-US/docs/Web/XSLT/Element/if)
- [`<xsl:import>`](/en-US/docs/Web/XSLT/Element/import) _(mostly supported)_
- [`<xsl:include>`](/en-US/docs/Web/XSLT/Element/include)
- [`<xsl:key>`](/en-US/docs/Web/XSLT/Element/key)
- [`<xsl:message>`](/en-US/docs/Web/XSLT/Element/message)
- [`<xsl:namespace-alias>`](/en-US/docs/Web/XSLT/Element/namespace-alias) _(not supported)_
- [`<xsl:number>`](/en-US/docs/Web/XSLT/Element/number) _(partially supported)_
- [`<xsl:otherwise>`](/en-US/docs/Web/XSLT/Element/otherwise)
- [`<xsl:output>`](/en-US/docs/Web/XSLT/Element/output) _(partially supported)_
- [`<xsl:param>`](/en-US/docs/Web/XSLT/Element/param)
- [`<xsl:preserve-space>`](/en-US/docs/Web/XSLT/Element/preserve-space)
- [`<xsl:processing-instruction>`](/en-US/docs/Web/XSLT/Element/processing-instruction)
- [`<xsl:sort>`](/en-US/docs/Web/XSLT/Element/sort)
- [`<xsl:strip-space>`](/en-US/docs/Web/XSLT/Element/strip-space)
- [`<xsl:stylesheet>`](/en-US/docs/Web/XSLT/Element/stylesheet) _(partially supported)_
- [`<xsl:template>`](/en-US/docs/Web/XSLT/Element/template)
- [`<xsl:text>`](/en-US/docs/Web/XSLT/Element/text) _(partially supported)_
- [`<xsl:transform>`](/en-US/docs/Web/XSLT/Element/transform)
- [`<xsl:value-of>`](/en-US/docs/Web/XSLT/Element/value-of) _(partially supported)_
- [`<xsl:variable>`](/en-US/docs/Web/XSLT/Element/variable)
- [`<xsl:when>`](/en-US/docs/Web/XSLT/Element/when)
- [`<xsl:with-param>`](/en-US/docs/Web/XSLT/Element/with-param)
