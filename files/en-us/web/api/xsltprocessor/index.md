---
title: XSLTProcessor
slug: Web/API/XSLTProcessor
page-type: web-api-interface
browser-compat: api.XSLTProcessor
---

{{APIRef("XSLT")}}

An **`XSLTProcessor`** applies an [XSLT](/en-US/docs/Web/XSLT) stylesheet transformation to an XML document to
produce a new XML document as output. It has methods to load the XSLT stylesheet, to
manipulate `<xsl:param>` parameter values, and to apply the
transformation to documents.

## Constructor

- {{domxref("XSLTProcessor.XSLTProcessor", "XSLTProcessor()")}}
  - : Create a new `XSLTProcessor`.

## Instance methods

- {{domxref("XSLTProcessor.importStylesheet()")}}
  - : Imports the XSLT stylesheet.
    If the given node is a document node, you can pass in a full XSL Transform or a [literal result element transform](https://www.w3.org/TR/xslt/#result-element-stylesheet);
    otherwise, it must be an `<xsl:stylesheet>` or `<xsl:transform>` element.
- {{domxref("XSLTProcessor.transformToFragment()")}}
  - : Transforms the node source by applying the XSLT stylesheet imported using the {{domxref("XSLTProcessor.importStylesheet()")}} function.
    The owner document of the resulting document fragment is the owner node.
- {{domxref("XSLTProcessor.transformToDocument()")}}
  - : Transforms the node source applying the XSLT stylesheet given importing using the {{domxref("XSLTProcessor.importStylesheet()")}} function.
- {{domxref("XSLTProcessor.setParameter()")}}
  - : Sets a parameter (`<xsl:param>`) value in the XSLT stylesheet that was imported.
- {{domxref("XSLTProcessor.getParameter()")}}
  - : Gets the value of a parameter from the XSLT stylesheet.
- {{domxref("XSLTProcessor.removeParameter()")}}
  - : Removes the parameter if it was previously set.
    This will make the `XSLTProcessor` use the default value for the parameter as specified in the XSLT stylesheet.
- {{domxref("XSLTProcessor.clearParameters()")}}
  - : Removes all set parameters from the `XSLTProcessor`.
    The `XSLTProcessor` will then use the default values specified in the XSLT stylesheet.
- {{domxref("XSLTProcessor.reset()")}}
  - : Removes all parameters and stylesheets from the `XSLTProcessor`.

## Instance properties

_This are no properties for this interface._

## Examples

1. [Basic example](/en-US/docs/Web/XSLT/XSLT_JS_interface_in_Gecko/Basic_Example)
2. [Advanced example](/en-US/docs/Web/XSLT/XSLT_JS_interface_in_Gecko/Advanced_Example)
3. [Additional example](/en-US/docs/Web/XSLT/XSLT_JS_interface_in_Gecko/JavaScript_XSLT_Bindings)

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Mozilla JavaScript interface to XSL Transformations](/en-US/docs/Web/XSLT/Using_the_Mozilla_JavaScript_interface_to_XSL_Transformations)
