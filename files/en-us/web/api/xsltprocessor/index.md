---
title: XSLTProcessor
slug: Web/API/XSLTProcessor
tags:
  - API
  - DOM
  - DOM Reference
  - Reference
  - XSLT
browser-compat: api.XSLTProcessor
---
{{Non-standard_header}}{{SeeCompatTable}}{{APIRef("XSLT")}}

An **`XSLTProcessor`** applies an [XSLT](/en-US/docs/Web/XSLT) stylesheet transformation to an XML document to
produce a new XML document as output. It has methods to load the XSLT stylesheet, to
manipulate `<xsl:param>` parameter values, and to apply the
transformation to documents.

## Syntax

The constructor has no parameters.

```js
new XSLTProcessor()
```

## Methods

- [Throws] void {{domxref("XSLTProcessor.importStylesheet")}}({{domxref("Node")}} styleSheet)
  - : Imports the XSLT stylesheet. If the given node is a document node, you can pass in a
    full XSL Transform or a [literal result element
    transform](https://www.w3.org/TR/xslt#result-element-stylesheet); otherwise, it must be an `<xsl:stylesheet>` or
    `<xsl:transform>` element.
- [Throws] {{domxref("DocumentFragment")}}
  {{domxref("XSLTProcessor.transformToFragment")}}({{domxref("Node")}} source, {{domxref("Document")}} owner)
  - : Transforms the node source by applying the stylesheet imported using the
    {{domxref("XSLTProcessor.importStylesheet()")}} function. The owner document of the
    resulting document fragment is the owner node.
- [[Throws]](/en-US/docs/Mozilla/WebIDL_bindings#Throws)
  {{domxref("Document")}}
  {{domxref("XSLTProcessor.transformToDocument")}}({{domxref("Node")}} source)

  - : Transforms the node source applying the stylesheet given importing using the
    {{domxref("XSLTProcessor.importStylesheet()")}} function.

    The resultant object depends on the [output method](https://www.w3.org/TR/xslt#output) of the stylesheet:

    | Output method | Result type                                                                                                      |
    | ------------- | ---------------------------------------------------------------------------------------------------------------- |
    | `html`        | {{domxref("HTMLDocument")}}                                                                             |
    | `xml`         | {{domxref("XMLDocument")}}                                                                             |
    | `text`        | {{domxref("XMLDocument")}} with a single root element `<transformiix:result>` with the text as a child |

- [Throws] void {{domxref("XSLTProcessor.setParameter")}}({{jsxref("String")}} namespaceURI, {{jsxref("String")}} localName, any value)
  - : Sets a parameter in the XSLT stylesheet that was imported. (Sets the value of an
    `<xsl:param>`.) A null value for `namespaceURI` is treated
    the same as an empty string.
- [Throws] any {{domxref("XSLTProcessor.getParameter")}}({{jsxref("String")}} namespaceURI, {{jsxref("String")}} localName)
  - : Gets the value of a parameter from the XSLT stylesheet. A null value for
    `namespaceURI` is treated the same as an empty string.
- [Throws] void {{domxref("XSLTProcessor.removeParameter")}}({{jsxref("String")}} namespaceURI, {{jsxref("String")}} localName)
  - : Removes the parameter if it was previously set. This will make the
    `XSLTProcessor` use the default value for the parameter as specified in the
    stylesheet. A null value for `namespaceURI` is treated the same as an empty
    string.
- void {{domxref("XSLTProcessor.clearParameters()")}}
  - : Removes all set parameters from the `XSLTProcessor`. The
    `XSLTProcessor` will then use the defaults specified in the XSLT
    stylesheet.
- void {{domxref("XSLTProcessor.reset()")}}
  - : Removes all parameters and stylesheets from the `XSLTProcessor`.

## Properties

### Non-Web-exposed properties

The following properties are [`[ChromeOnly]`](/en-US/docs/Mozilla/WebIDL_bindings#ChromeOnly)
and not exposed to Web content:

- [ChromeOnly] attribute unsigned long {{domxref("XSLTProcessor.flags")}}
  - : Flags that tweak the behavior of the processor. Not reset by calling
    {{domxref("XSLTProcessor.reset()")}}. Default value: `0`

    Possible values are:

    | Name                | Value | Effect                                                                        |
    | ------------------- | ----- | ----------------------------------------------------------------------------- |
    | (None)              | `0`   | None                                                                          |
    | `DISABLE_ALL_LOADS` | `1`   | Disable loading external documents (via e.g. `<xsl:import>` and `document()`) |

## Examples

1.  [Basic
    example](/en-US/docs/XSLT/XSLT_JS_Interface_in_Gecko/Basic_Example)
2.  [Advanced
    example](/en-US/docs/XSLT/XSLT_JS_Interface_in_Gecko/Advanced_Example)
3.  [Additional
    example](/en-US/docs/XSLT/XSLT_JS_Interface_in_Gecko/JavaScript_XSLT_Bindings)

## Specifications

_Not part of any specification._ This is a proprietary interface that originated
in Gecko.

## Gecko IDL

- `{{ Source("dom/webidl/XSLTProcessor.webidl", "XSLTProcessor.webidl") }}`
- `{{ Source("dom/xslt/nsIXSLTProcessor.idl", "nsIXSLTProcessor.idl") }}`

## Browser compatibility

{{Compat}}

## See also

- [Using
  the Mozilla JavaScript interface to XSL Transformations](/en-US/docs/Using_the_Mozilla_JavaScript_interface_to_XSL_Transformations)
