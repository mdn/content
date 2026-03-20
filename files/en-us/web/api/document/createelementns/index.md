---
title: "Document: createElementNS() method"
short-title: createElementNS()
slug: Web/API/Document/createElementNS
page-type: web-api-instance-method
browser-compat: api.Document.createElementNS
---

{{APIRef("DOM")}}

The **`createElementNS()`** method of the {{domxref("Document")}} interface creates a new element with the specified namespace URI and qualified name.

To create an element without specifying a namespace URI, use the {{DOMxRef("Document.createElement()", "createElement()")}} method.

## Syntax

```js-nolint
createElementNS(namespaceURI, qualifiedName)
createElementNS(namespaceURI, qualifiedName, options)
```

### Parameters

- `namespaceURI`
  - : A string that specifies the {{DOMxRef("element.namespaceURI", "namespaceURI")}} to associate with the element. Some important namespace URIs are:
    - [HTML](/en-US/docs/Web/HTML)
      - : `http://www.w3.org/1999/xhtml`
    - [SVG](/en-US/docs/Web/SVG)
      - : `http://www.w3.org/2000/svg`
    - [MathML](/en-US/docs/Web/MathML)
      - : `http://www.w3.org/1998/Math/MathML`

- `qualifiedName`
  - : A string containing the qualified name of the new element.
    The {{DOMxRef("node.nodeName", "nodeName")}} property of the created element is initialized with this value.

    The format of the qualified name is `prefix:localName` or `localName`, where the parts are defined as:
    - `prefix` {{optional_inline}}
      - : A "short alias" for the namespace.
        The prefix is optional, but if it is specified the `namespaceURI` parameter must also be specified.
        If the prefix is set to `xml` or `xmlns`, the `namespaceURI` must be set to `http://www.w3.org/XML/1998/namespace` or `http://www.w3.org/2000/xmlns/`, respectively.

        The value is used to initialize the new element's {{DOMxRef("Element/prefix", "prefix")}} property.
        Defaults to `null`.

    - `localName`:
      - : The local name of the element.
        The value is used to initialize the new Element's {{DOMxRef("Element.localName", "localName")}} property.

- `options` {{Optional_Inline}}
  - : An object with the following optional properties (note that only one of `is` and `customElementRegistry` may be set):
    - `is` {{Optional_Inline}}
      - : A string defining the tag name for a custom element previously defined using {{domxref("CustomElementRegistry/define", "customElements.define()")}}.
        The new element will be given an `is` attribute whose value is the custom element's tag name.
        See [Web component example](#web_component_example) for more details.
    - `customElementRegistry` {{Optional_Inline}}
      - : A {{domxref("CustomElementRegistry")}} that sets the [Scoped custom element registry](/en-US/docs/Web/API/Web_components/Using_custom_elements#scoped_custom_element_registries) of a custom element.

    For backwards compatibility, some browsers allow you to pass a string here instead of an object, where the string's value is the custom element's tag name.
    See [Extending native HTML elements](https://web.dev/articles/web-components) for more information on how to use this parameter.

### Return value

The new {{DOMxRef("Element")}}.

### Exceptions

- `NamespaceError` {{domxref("DOMException")}}
  - : Thrown if the [`namespaceURI`](#namespaceURI) value is:
    - not a valid namespace URI
    - set to the empty string when `prefix` has a value
    - not the value `http://www.w3.org/XML/1998/namespace` or `http://www.w3.org/2000/xmlns/` when [`prefix`](#prefix) is set to `xml` or `xmlns`, respectively.
- `InvalidCharacterError` {{domxref("DOMException")}}
  - : Thrown if either the `prefix` or `localName` is not valid:
    - The `prefix` must have at least one character, and cannot contain ASCII whitespace, `NULL`, `/` , or `>` (U+0000, U+002F, or U+003E, respectively).
    - The `localName` is a valid element name if it has a length of at least 1 and:
      - it starts with an alphabet character and does not contain ASCII whitespace, `NULL`, `/` , or `>` (U+0000, U+002F, or U+003E, respectively).
      - it starts with `:` (U+003A ), `_` (U+005F), or any characters in the range U+0080 to U+10FFFF (inclusive), _and_ the remaining code points only include those same characters along with the ASCII alphanumeric characters, `-` (U+002D), and `.` (U+002E),

    > [!NOTE]
    > Earlier versions of the specification were more restrictive, requiring that the `qualifiedName` be a valid [XML name](https://www.w3.org/TR/xml/#dt-name).

- `NotSupportedError` {{domxref("DOMException")}}
  - : Thrown if both the [`is`](#is) and [`customElementRegistry`](#customElementRegistry) options are specified.

## Examples

### Basic usage

This creates a new `<div>` element in the {{Glossary("XHTML")}} namespace and
appends it to the vbox element. Although this is not an extremely useful XUL document, it does demonstrate the use of
elements from two different namespaces within a single document:

```xml
<?xml version="1.0"?>
<page xmlns="http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul"
      xmlns:html="http://www.w3.org/1999/xhtml"
      title="||Working with elements||"
      onload="init()">

<script><![CDATA[
let container;
let newDiv;
let textNode;

function init() {
  container = document.getElementById("ContainerBox");
  newDiv = document.createElementNS("http://www.w3.org/1999/xhtml", "div");
  textNode = document.createTextNode(
    "This is text that was constructed dynamically with createElementNS and createTextNode then inserted into the document using appendChild.",
  );
  newDiv.appendChild(textNode);
  container.appendChild(newDiv);
}
]]></script>

 <vbox id="ContainerBox" flex="1">
  <html:div>
   The script on this page will add dynamic content below:
  </html:div>
 </vbox>

</page>
```

> [!NOTE]
> The example given above uses an inline script, which is not recommended in XHTML documents.
> This particular example is actually an XUL document with embedded XHTML, however, the recommendation still applies.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{DOMxRef("document.createElement()")}}
- {{DOMxRef("document.createTextNode()")}}
- {{DOMxRef("Element.namespaceURI")}}
