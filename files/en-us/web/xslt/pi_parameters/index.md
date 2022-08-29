---
title: PI Parameters
slug: Web/XSLT/PI_Parameters
tags:
  - XSLT
---
### Overview

XSLT supports the concept of passing parameters to a stylesheet when executing it. This has been possible for a while when using the [XSLTProcessor](/en-US/XSLTProcessor) in JavaScript. However when using an `<?xml-stylesheet?>` processing instruction (PI) there used to be no way to provide parameters.

To solve this two new PIs are implemented in [Firefox 2](/en-US/Firefox_2) (see [Supported versions](#supported_versions) below for details), `<?xslt-param?>` and `<?xslt-param-namespace?>`. Both PIs can contain "pseudo attributes" the same way that the `xml-stylesheet` PI does.

The following document passes the two parameters "color" and "size" to the stylesheet "style.xsl".

```xml
<?xslt-param name="color" value="blue"?>
<?xslt-param name="size" select="2"?>
<?xml-stylesheet type="text/xsl" href="style.xsl"?>
```

Note that these PIs have no effect when transformation is done using the `XSLTProcessor` object in JavaScript.

### Processing instructions

The attributes in the `xslt-param` and `xslt-param-namespace` PIs are parsed using the rules defined in [xml-stylesheet](https://www.w3.org/TR/xml-stylesheet/). Any unrecognized attributes must be ignored. Parsing of any attribute must not fail due to the presence of an unrecognized attribute as long as that attribute follows the syntax in `xml-stylesheet`.

Both the `xslt-param` and the `xslt-param-namespace` PIs must appear in the prolog of the document, i.e. before the first element tag. All PIs in the prolog must be honored, both ones occurring before and ones occurring after any `xml-stylesheet` PIs.

If there are multiple `xml-stylesheet` PIs the parameters apply to all stylesheets as a consequence of that all stylesheets are imported into a single stylesheet per the XSLT spec.reference? Note that multiple `xml-stylesheet` XSLT PIs are not supported in Firefox currently.

#### xslt-param

The `xslt-param` PI supports 4 attributes:

- name
  - : The local-name part of the parameter name. No syntax checking is done on the attribute, however if it is not a valid [NCName](https://www.w3.org/TR/REC-xml-names/#NT-NCName) it will never match any parameter in the stylesheet.
- namespace
  - : The namespace of the parameter name. No syntax checking is done on the attribute.
- value
  - : Contains the string value for the parameter. The value of the attribute is used as value for the parameter. The datatype will always be _string_.
- select
  - : An [XPath](/en-US/XPath) expression for the parameter. The value of the attribute is parsed as an XPath expression. The result of evaluating the expression is used as value for the parameter.

If the **name** attribute is missing or empty the PI is ignored.

If the **namespace** attribute is missing or empty the null namespace is used.

It is not an error to specify a parameter name that does not exist in the stylesheet (or that is a variable in the stylesheet). The PI is ignored.

If both **value** and **select** are present or if neither **value** nor **select** are present the PI is ignored.

Note that `value="..."` is not strictly equal to `select="'...'"` since the value can contain both apostrophe and quote characters.

##### Examples

Set the parameter 'color' to the string 'red':

```xml
<?xslt-param name="color" value="red"?>
```

Set the parameter 'columns' to the number 2:

```xml
<?xslt-param name="columns" select="2"?>
```

Set the parameter 'books' to a nodeset containing all `<book>` elements in the null namespace:

```xml
<?xslt-param name="books" select="//book"?>
```

Set the parameter 'show-toc' to boolean `true`:

```xml
<?xslt-param name="show-toc" select="true()"?>
```

##### The select attribute context

The following context is used to parse and evaluate the expression in the **select** attribute.

- The context node is the node used as initial current node used when executing the stylesheet.
- The context position is the position of the context node in the initial current node list used when executing the stylesheet.
- The context size is the size of the initial current node list used when executing the stylesheet.
- No variables are available.
- The function library is the standard XPath function library.
- The namespace declarations are determined by the `xslt-param-namespace` PIs, see below.

If the **select** attribute fails to parse or execute, the PI is ignored (in particular, it does not fall back to the **value** attribute).

#### xslt-param-namespace

The `xslt-param-namespace` uses two attributes:

- prefix
  - : The prefix that is mapped.
- namespace
  - : The namespace the prefix maps to.

An `xslt-param-namespace` PI affects the expression in the **select** attribute for all `xslt-param`s following the PI. This applies even if there are other nodes such as comments or other PIs between the `xslt-param-namespace` and `xslt-param` PIs.

It is not an error for multiple PIs to use the same prefix, every new PI just changes what namespace the prefix maps to.

If **prefix** is missing, empty, or equals an invalid NCName, the PI is ignored.

If **namespace** is missing, the PI is ignored. If **namespace** is empty, the prefix mapping is removed.

##### Examples

Set the parameter 'books' to a nodeset containing all `<book>` elements in the 'http\://www\.example.org/myNamespace' namespace:

```xml
<?xslt-param-namespace prefix="my" namespace="http://www.example.org/myNamespace"?>
<?xslt-param name="books" select="//my:book"?>
```

### Supported versions

Supported as of Firefox 2.0.0.1. The **value** attribute is supported in Firefox 2, but the **select** attribute crashes for some expressions in the 2.0 release.

### Possible future developments

Should we allow any XSLT functions in the expression? `document()` seems useful, but it seems tricky to maintain the invariant that `generate-id()` should produce the same string for the same document.

What about querying URL parameters in the XSLT stylesheet? E.g. Passing them to specified \<xsl:param>'s.
